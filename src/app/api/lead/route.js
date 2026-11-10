// Receives enquiries from the website forms and forwards them to a Google
// Apps Script web app, which appends a row to a Google Sheet and emails the
// sales inbox. Setup: docs/LEAD_CAPTURE_SETUP.md
//
// Env vars (server-only, never exposed to the browser):
//   LEAD_WEBHOOK_URL     the Apps Script web-app URL (ends in /exec)
//   LEAD_WEBHOOK_SECRET  shared secret; must match SECRET in the Apps Script

const LEAD_TYPES = {
  contact: "Contact Form Enquiry",
  quote: "Part Quote Request",
  consultation: "EPC / Engineering Consultation",
  rfq: "Multi-Item RFQ",
  "parts-alert": "Used Parts Alert Signup",
};

// Common columns in the Sheet; any other submitted fields go into "Other details".
const COLUMNS = ["name", "phone", "email", "company", "make", "reference", "message"];

const MAX_FIELD = 2000;
const MAX_FIELDS = 30;

// Best-effort per-IP rate limit (resets when the server instance restarts).
// Kept generous: Indian mobile networks share one IP across many customers.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 20;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function clean(value) {
  if (value === null || value === undefined) return "";
  return String(value).replace(/\u0000/g, "").trim().slice(0, MAX_FIELD);
}

const json = (body, status = 200) => Response.json(body, { status });

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  const type = clean(body?.type);
  if (!LEAD_TYPES[type]) return json({ ok: false, error: "invalid_type" }, 400);

  // Honeypot: real visitors never see or fill this field. Pretend success so bots move on.
  if (clean(body?.website)) return json({ ok: true });

  const raw = body?.fields && typeof body.fields === "object" ? body.fields : {};
  const entries = Object.entries(raw).slice(0, MAX_FIELDS);
  const fields = {};
  for (const [key, value] of entries) {
    const k = clean(key).slice(0, 60);
    if (k) fields[k] = clean(value);
  }

  const email = fields.email || "";
  const phone = fields.phone || "";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: "invalid_email" }, 400);
  }
  if (!email && phone.replace(/\D/g, "").length < 7) {
    return json({ ok: false, error: "missing_contact" }, 400);
  }

  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) return json({ ok: false, error: "rate_limited" }, 429);

  const url = process.env.LEAD_WEBHOOK_URL;
  const secret = process.env.LEAD_WEBHOOK_SECRET;
  if (!url || !secret) {
    // Not connected yet: tell the form so it can offer WhatsApp instead.
    return json({ ok: false, error: "not_configured" }, 503);
  }

  const lead = {
    secret,
    type,
    typeLabel: LEAD_TYPES[type],
    submittedAt: new Date().toISOString(),
    page: clean(body?.page).slice(0, 200),
  };
  for (const col of COLUMNS) lead[col] = fields[col] || "";
  lead.other = Object.entries(fields)
    .filter(([k]) => !COLUMNS.includes(k))
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  try {
    // Apps Script answers POST with a redirect to the result; fetch follows it.
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
    });
    const text = await res.text();
    let result = null;
    try {
      result = JSON.parse(text);
    } catch {
      /* Apps Script returned HTML (e.g. an error page) */
    }
    if (!res.ok || !result?.ok) {
      console.error("[lead] webhook rejected lead", res.status, text.slice(0, 300));
      return json({ ok: false, error: "webhook_failed" }, 502);
    }
    return json({ ok: true });
  } catch (err) {
    console.error("[lead] webhook unreachable", err?.message);
    return json({ ok: false, error: "webhook_unreachable" }, 502);
  }
}
