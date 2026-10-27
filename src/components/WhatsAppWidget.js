"use client";

import { useState } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "919702666664";

  const handleSend = (e) => {
    e?.preventDefault();
    const defaultText = "Hello Viking Tradelinks, I need assistance with European truck parts.";
    const textToSend = encodeURIComponent(message.trim() || defaultText);
    window.open(`https://wa.me/${phoneNumber}?text=${textToSend}`, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 1500,
        fontFamily: "var(--font-jetbrains-mono), monospace",
      }}
    >
      {/* Expanded Quick Chat Box */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            bottom: "76px",
            right: "0",
            width: "320px",
            background: "var(--base)",
            border: "var(--border)",
            boxShadow: "var(--shadow)",
            overflow: "hidden",
            animation: "fadeInUp 0.2s ease",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#25D366",
              color: "#000",
              padding: "1rem",
              borderBottom: "var(--border-thin)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#000",
                }}
              ></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>
                  WhatsApp Dispatch
                </div>
                <div style={{ fontSize: "0.65rem", opacity: 0.85 }}>
                  +91 9702666664 • Usually replies in 5m
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp chat"
              style={{
                background: "transparent",
                border: "none",
                fontWeight: 700,
                fontSize: "1rem",
                cursor: "pointer",
                padding: "0.2rem",
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: "1rem", background: "var(--surface)" }}>
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.15)",
                padding: "0.8rem",
                fontSize: "0.78rem",
                lineHeight: "1.5",
                marginBottom: "1rem",
              }}
            >
              <p style={{ fontWeight: 700, marginBottom: "0.3rem", color: "var(--safety)" }}>
                VIKING TRADELINKS DESK
              </p>
              <p style={{ opacity: 0.85 }}>
                Hello! Need immediate pricing or stock check for <strong>MAN, Mercedes, Scania or Volvo</strong> parts?
              </p>
            </div>

            <form onSubmit={handleSend} style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <input
                type="text"
                placeholder="Enter OEM part # or truck model..."
                className="input-box"
                style={{ fontSize: "0.78rem", padding: "0.6rem 0.8rem" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn--primary"
                style={{
                  background: "#25D366",
                  color: "#000",
                  borderColor: "var(--ink)",
                  padding: "0.6em 1rem",
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <span>Start WhatsApp Chat</span>
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle WhatsApp chat widget"
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#25D366",
          border: "3px solid #000000",
          boxShadow: "4px 4px 0px #000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          position: "relative",
          transition: "transform 0.15s ease, box-shadow 0.15s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translate(-2px, -2px)";
          e.currentTarget.style.boxShadow = "6px 6px 0px #000000";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translate(0, 0)";
          e.currentTarget.style.boxShadow = "4px 4px 0px #000000";
        }}
      >
        {/* WhatsApp Official SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="#FFFFFF"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2.5C8.544 2.5 2.5 8.544 2.5 16c0 2.612.744 5.056 2.032 7.128L2.7 29.3l6.392-1.784A13.435 13.435 0 0 0 16 29.5c7.456 0 13.5-6.044 13.5-13.5S23.456 2.5 16 2.5zm7.848 19.12c-.328.92-1.632 1.76-2.656 1.984-.704.152-1.624.272-4.72-.992-3.952-1.616-6.496-5.648-6.696-5.912-.192-.264-1.592-2.12-1.592-4.048 0-1.928 1.008-2.88 1.368-3.272.36-.392.784-.488 1.048-.488.264 0 .528.008.76.016.248.016.576-.096.904.688.336.8.144 2.768.144 2.768-.12.24-.24.4-.48.64-.24.24-.504.536-.72.72-.24.216-.488.456-.208.936.28.48 1.24 2.048 2.664 3.32 1.832 1.632 3.376 2.136 3.856 2.376.48.24.76.2.1.04-.264-.264-1.12-1.312-1.424-1.76-.304-.448-.608-.376-.84-.28-.232.096-1.48.712-2.312 1.112z" />
        </svg>

        {/* Pulse Dot */}
        <span
          style={{
            position: "absolute",
            top: "2px",
            right: "2px",
            width: "14px",
            height: "14px",
            background: "var(--burgundy)",
            border: "2px solid var(--gold)",
            borderRadius: "50%",
          }}
        ></span>
      </button>
    </div>
  );
}
