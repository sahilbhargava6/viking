/**
 * Viking Tradelinks — website enquiry capture (Google Apps Script).
 *
 * Paste this whole file into your Google Sheet: Extensions → Apps Script.
 * Every enquiry from the website is added as a row in the "Leads" tab and
 * emailed to NOTIFY_EMAIL. Setup steps: docs/LEAD_CAPTURE_SETUP.md
 */

// Must be exactly the same text as LEAD_WEBHOOK_SECRET on the website host.
const SECRET = "PASTE_YOUR_SECRET_HERE";

// Where new-enquiry emails go.
const NOTIFY_EMAIL = "schumi.india@gmail.com";

const SHEET_NAME = "Leads";
const TIMEZONE = "Asia/Kolkata";
const HEADERS = [
  "Received (IST)",
  "Type",
  "Name",
  "Phone",
  "Email",
  "Company",
  "Make",
  "VIN / OEM / Part",
  "Message",
  "Other details",
  "Page",
  "Status",
];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.secret !== SECRET) return reply({ ok: false, error: "unauthorized" });

    const lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      const sheet = getSheet_();
      sheet.appendRow([
        Utilities.formatDate(new Date(), TIMEZONE, "yyyy-MM-dd HH:mm"),
        data.typeLabel || data.type,
        data.name,
        data.phone,
        data.email,
        data.company,
        data.make,
        data.reference,
        data.message,
        data.other,
        data.page,
        "New",
      ].map(safeCell_));
    } finally {
      lock.releaseLock();
    }

    // The row is saved even if the email fails (e.g. daily email quota reached).
    try {
      notify_(data);
    } catch (err) {
      console.error("Email failed: " + err);
    }

    return reply({ ok: true });
  } catch (err) {
    console.error(err);
    return reply({ ok: false, error: String(err) });
  }
}

// Visiting the web-app URL in a browser shows this (handy to check it is live).
function doGet() {
  return ContentService.createTextOutput("Viking Tradelinks lead capture is running.");
}

// Run this once from the editor (select testSetup → Run) to create the Leads
// tab, grant permissions, and receive a test email.
function testSetup() {
  getSheet_();
  notify_({
    typeLabel: "Setup test",
    name: "Test enquiry",
    phone: "+91 9702666664",
    email: "",
    message: "If you received this email, enquiry capture is working.",
    page: "/",
  });
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold").setBackground("#FF3E00").setFontColor("#FFFFFF");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function notify_(data) {
  const who = data.name || data.phone || data.email || "Website visitor";
  const digits = String(data.phone || "").replace(/\D/g, "");
  const lines = [
    "New enquiry from vikingtradelinks.in",
    "",
    "Type:     " + (data.typeLabel || data.type || ""),
    "Name:     " + (data.name || "-"),
    "Phone:    " + (data.phone || "-"),
    "Email:    " + (data.email || "-"),
    "Company:  " + (data.company || "-"),
    "Make:     " + (data.make || "-"),
    "VIN/OEM:  " + (data.reference || "-"),
    "",
    "Message:",
    data.message || "-",
  ];
  if (data.other) lines.push("", "Other details:", data.other);
  lines.push("", "Page: " + (data.page || "-"));
  if (digits.length >= 10) lines.push("", "Reply on WhatsApp: https://wa.me/" + digits);

  const options = { name: "Viking Tradelinks Website" };
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "")) options.replyTo = data.email;

  MailApp.sendEmail(NOTIFY_EMAIL, "New " + (data.typeLabel || "enquiry") + ": " + who, lines.join("\n"), options);
}

// Stop text like "+91…" or "=…" being treated as a spreadsheet formula.
function safeCell_(value) {
  const text = value === undefined || value === null ? "" : String(value);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
