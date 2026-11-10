"use client";

export const WHATSAPP_NUMBER = "919702666664";

export function whatsappUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Sends an enquiry to /api/lead (Google Sheet + email).
 * `form` is the submitted <form> element, used to read the hidden honeypot.
 * Resolves to true when the enquiry was stored, false otherwise
 * (not connected yet, network error, validation error).
 */
export async function submitLead(type, fields, form) {
  try {
    const website = form?.elements?.namedItem?.("website")?.value || "";
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, fields, website, page: window.location.pathname }),
      keepalive: true,
    });
    const data = await res.json().catch(() => ({}));
    return res.ok && data.ok === true;
  } catch {
    return false;
  }
}

/**
 * Message shown after a form is submitted.
 * status "sent": stored in the Sheet and emailed; WhatsApp offered as an extra.
 * status "failed": could not be stored; WhatsApp/email become the main path so
 * the enquiry is not lost.
 */
export function LeadResult({ status, phone, onWhatsApp, onReset, resetLabel = "Send Another Enquiry", compact = false }) {
  const sent = status === "sent";
  return (
    <div
      role="status"
      style={{
        background: "var(--surface)",
        border: "var(--border)",
        padding: compact ? "1.2rem" : "2rem",
        textAlign: "center",
      }}
    >
      <div style={{ color: sent ? "var(--safety)" : "var(--ink)", fontWeight: 700, fontSize: compact ? "1.05rem" : "1.25rem", marginBottom: "0.7rem" }}>
        {sent ? "✓ Enquiry received" : "We couldn’t send your enquiry online"}
      </div>
      <p style={{ fontSize: "0.88rem", opacity: 0.85, marginBottom: "1.2rem", lineHeight: 1.6 }}>
        {sent ? (
          <>
            Thank you. Our parts team will check stock and contact you
            {phone ? (
              <>
                {" "}at <strong>{phone}</strong>
              </>
            ) : null}{" "}
            shortly. For anything urgent, message us on WhatsApp.
          </>
        ) : (
          <>
            Please send it on WhatsApp instead (your details are filled in for you), or email{" "}
            <a href="mailto:schumi.india@gmail.com" style={{ textDecoration: "underline" }}>schumi.india@gmail.com</a>.
          </>
        )}
      </p>
      <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap" }}>
        <button type="button" className={`btn ${sent ? "btn--ghost" : "btn--primary"} btn--sm`} onClick={onWhatsApp}>
          {sent ? "Also message on WhatsApp" : "Send on WhatsApp"}
        </button>
        {onReset ? (
          <button type="button" className={`btn ${sent ? "btn--primary" : "btn--ghost"} btn--sm`} onClick={onReset}>
            {resetLabel}
          </button>
        ) : null}
      </div>
    </div>
  );
}

/** Invisible field that real visitors never fill; bots that do are ignored. */
export function HoneypotField() {
  return (
    <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: "1px", height: "1px", overflow: "hidden" }}>
      <label>
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}
