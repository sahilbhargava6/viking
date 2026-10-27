"use client";

import React from "react";

export default function BrandMarquee() {
  const row1 = [
    {
      id: "bosch",
      name: "BOSCH",
      render: () => (
        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
          <span style={{ fontSize: "1.1rem", color: "#E2001A", fontWeight: 900 }}>BOSCH</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#E2001A" strokeWidth="2.5" />
            <circle cx="12" cy="12" r="3.5" fill="#E2001A" />
            <line x1="12" y1="2" x2="12" y2="6" stroke="#E2001A" strokeWidth="2.5" />
            <line x1="12" y1="18" x2="12" y2="22" stroke="#E2001A" strokeWidth="2.5" />
          </svg>
        </span>
      ),
    },
    {
      id: "wabco",
      name: "WABCO",
      render: () => (
        <span style={{ fontSize: "1.25rem", color: "#0054A6", fontWeight: 900, letterSpacing: "1px", fontFamily: "var(--font-space-grotesk)" }}>
          WABCO
        </span>
      ),
    },
    {
      id: "knorr",
      name: "KNORR-BREMSE",
      render: () => (
        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "#003399", color: "#FFF", padding: "3px 8px", borderRadius: "2px", fontWeight: 800, fontSize: "0.82rem", letterSpacing: "0.5px" }}>
          <span>KNORR-BREMSE</span>
          <span style={{ background: "#FFF", color: "#003399", borderRadius: "50%", width: "14px", height: "14px", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 900 }}>K</span>
        </span>
      ),
    },
    {
      id: "sachs",
      name: "SACHS",
      render: () => (
        <span style={{ fontSize: "1.25rem", color: "#003399", fontStyle: "italic", fontWeight: 900, letterSpacing: "1.5px" }}>
          SACHS
        </span>
      ),
    },
    {
      id: "mahle",
      name: "MAHLE",
      render: () => (
        <span style={{ fontSize: "1.25rem", color: "#D50000", fontWeight: 900, letterSpacing: "1px", fontFamily: "var(--font-space-grotesk)" }}>
          MAHLE
        </span>
      ),
    },
    {
      id: "hella",
      name: "HELLA",
      render: () => (
        <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#003882", color: "#FFF", borderRadius: "20px", padding: "4px 14px", fontWeight: 900, fontSize: "0.95rem", letterSpacing: "1.5px" }}>
          HELLA
        </span>
      ),
    },
    {
      id: "febi",
      name: "FEBI BILSTEIN",
      render: () => (
        <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", background: "#D50000", color: "#FFF", padding: "2px 10px", borderRadius: "3px", lineHeight: 1 }}>
          <span style={{ fontWeight: 900, fontSize: "0.95rem", letterSpacing: "0.5px" }}>febi</span>
          <span style={{ fontSize: "0.6rem", letterSpacing: "1px", fontWeight: 700 }}>bilstein</span>
        </span>
      ),
    },
    {
      id: "elring",
      name: "ELRING",
      render: () => (
        <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
          <span style={{ border: "2px solid #D81E05", borderRadius: "50%", width: "24px", height: "24px", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#D81E05", fontWeight: 900, fontSize: "11px" }}>e</span>
          <span style={{ color: "#D81E05", fontWeight: 900, fontSize: "1.1rem", letterSpacing: "0.5px" }}>elring</span>
        </span>
      ),
    },
    {
      id: "garrett",
      name: "GARRETT",
      render: () => (
        <span style={{ fontSize: "1.2rem", color: "#E00000", fontStyle: "italic", fontWeight: 900, letterSpacing: "0.5px" }}>
          Garrett
        </span>
      ),
    },
    {
      id: "hengst",
      name: "HENGST",
      render: () => (
        <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", lineHeight: 1.1 }}>
          <span style={{ color: "#004499", fontWeight: 900, fontSize: "1.1rem", letterSpacing: "1px" }}>Hengst</span>
          <span style={{ color: "#004499", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "1.5px" }}>FILTERWERKE</span>
        </span>
      ),
    },
    {
      id: "skf",
      name: "SKF",
      render: () => (
        <span style={{ display: "inline-flex", alignItems: "center", border: "2px solid #004B93", padding: "3px 12px", borderBottom: "4px solid #E60000" }}>
          <span style={{ color: "#004B93", fontWeight: 900, fontSize: "1.2rem", letterSpacing: "2px" }}>SKF</span>
        </span>
      ),
    },
    {
      id: "luk",
      name: "LUK",
      render: () => (
        <span style={{ background: "#FFD000", border: "2px solid #000", padding: "3px 14px", borderRadius: "4px", color: "#000", fontWeight: 900, fontSize: "1.1rem", letterSpacing: "1px" }}>
          LuK
        </span>
      ),
    },
    {
      id: "contitech",
      name: "CONTITECH",
      render: () => (
        <span style={{ background: "#FFAA00", color: "#000", padding: "3px 10px", fontWeight: 900, fontSize: "0.88rem", letterSpacing: "1px" }}>
          CONTITECH®
        </span>
      ),
    },
    {
      id: "jost",
      name: "JOST",
      render: () => (
        <span style={{ color: "#002B7F", fontWeight: 900, fontSize: "1.3rem", letterSpacing: "2.5px" }}>
          JOST
        </span>
      ),
    },
    {
      id: "lemforder",
      name: "LEMFÖRDER",
      render: () => (
        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
          <span style={{ border: "2px solid #002B7F", width: "16px", height: "16px", transform: "rotate(45deg)", display: "inline-block" }}></span>
          <span style={{ color: "#002B7F", fontWeight: 800, fontSize: "0.92rem", letterSpacing: "1px" }}>LEMFÖRDER</span>
        </span>
      ),
    },
    {
      id: "kolbenschmidt",
      name: "KOLBENSCHMIDT",
      render: () => (
        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
          <span style={{ background: "#003399", color: "#FFF", padding: "2px 5px", fontWeight: 900, fontSize: "0.9rem" }}>KS</span>
          <span style={{ color: "#003399", fontWeight: 800, fontSize: "0.78rem", letterSpacing: "0.5px" }}>KOLBENSCHMIDT</span>
        </span>
      ),
    },
    {
      id: "victor-reinz",
      name: "VICTOR REINZ",
      render: () => (
        <span style={{ background: "#0055A5", color: "#FFF", padding: "3px 10px", borderRadius: "14px", fontWeight: 800, fontSize: "0.82rem", letterSpacing: "0.5px" }}>
          VICTOR REINZ
        </span>
      ),
    },
    {
      id: "bremskerl",
      name: "BREMSKERL",
      render: () => (
        <span style={{ border: "2px solid var(--burgundy)", color: "var(--ink)", padding: "2px 8px", fontWeight: 900, fontSize: "0.82rem", letterSpacing: "1px" }}>
          <strong style={{ color: "var(--burgundy)" }}>BREMSKERL</strong>
        </span>
      ),
    },
  ];

  const row2 = [
    {
      id: "beral",
      name: "BERAL",
      render: () => (
        <span style={{ background: "#111", color: "#FFF", padding: "4px 14px", borderRadius: "12px", fontWeight: 900, fontSize: "0.95rem", letterSpacing: "2px" }}>
          BERAL
        </span>
      ),
    },
    {
      id: "fag",
      name: "FAG",
      render: () => (
        <span style={{ border: "2px solid #000", padding: "2px 14px", fontWeight: 900, fontSize: "1.2rem", letterSpacing: "2px", color: "#000" }}>
          FAG
        </span>
      ),
    },
    {
      id: "behr",
      name: "BEHR",
      render: () => (
        <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", background: "#004B93", color: "#FFF", padding: "2px 12px", borderRadius: "2px", lineHeight: 1.1 }}>
          <span style={{ fontWeight: 900, fontSize: "1.05rem", letterSpacing: "1px" }}>BEHR</span>
          <span style={{ fontSize: "0.55rem", letterSpacing: "2px" }}>SERVICE</span>
        </span>
      ),
    },
    {
      id: "glyco",
      name: "GLYCO",
      render: () => (
        <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#D50000", fontWeight: 900, fontSize: "1.1rem", letterSpacing: "1px" }}>
          <span>⚙</span>
          <span>GLYCO</span>
        </span>
      ),
    },
    {
      id: "goetze",
      name: "GOETZE",
      render: () => (
        <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#222", fontWeight: 900, fontSize: "1.05rem", letterSpacing: "1px" }}>
          <span>◎</span>
          <span>GOETZE</span>
        </span>
      ),
    },
    {
      id: "corteco",
      name: "CORTECO",
      render: () => (
        <span style={{ border: "2px solid #CC0000", color: "#CC0000", padding: "3px 12px", borderRadius: "14px", fontWeight: 900, fontSize: "0.85rem", letterSpacing: "1px" }}>
          CORTECO
        </span>
      ),
    },
    {
      id: "vdo",
      name: "VDO",
      render: () => (
        <span style={{ color: "#0080C0", fontWeight: 900, fontSize: "1.3rem", letterSpacing: "3px" }}>
          VDO
        </span>
      ),
    },
    {
      id: "kkk",
      name: "KKK",
      render: () => (
        <span style={{ border: "2px solid #000", padding: "2px 12px", fontWeight: 900, fontSize: "1.1rem", letterSpacing: "2px", color: "#000" }}>
          KKK
        </span>
      ),
    },
    {
      id: "kongsberg",
      name: "KONGSBERG",
      render: () => (
        <span style={{ background: "#003399", color: "#FFF", padding: "4px 8px", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.5px", display: "inline-flex", alignItems: "center", gap: "4px" }}>
          <span>◀</span>
          <span>KONGSBERG</span>
        </span>
      ),
    },
    {
      id: "dt",
      name: "DT SPARE PARTS",
      render: () => (
        <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
          <span style={{ background: "#0088CC", color: "#FFF", transform: "rotate(45deg)", width: "16px", height: "16px", display: "inline-block" }}></span>
          <span style={{ color: "#0088CC", fontWeight: 900, fontSize: "0.92rem", letterSpacing: "1px" }}>DT SPARE PARTS</span>
        </span>
      ),
    },
    {
      id: "trilex",
      name: "TRILEX",
      render: () => (
        <span style={{ background: "#0066CC", color: "#FFF", padding: "3px 10px", fontWeight: 900, fontSize: "0.95rem", letterSpacing: "1.5px" }}>
          TRILEX®
        </span>
      ),
    },
    {
      id: "trucktec",
      name: "TRUCKTEC",
      render: () => (
        <span style={{ background: "#0B2046", color: "#FFF", padding: "3px 8px", borderRadius: "10px", fontWeight: 800, fontSize: "0.78rem", letterSpacing: "0.5px" }}>
          TRUCKTEC
        </span>
      ),
    },
    {
      id: "laso",
      name: "LASO",
      render: () => (
        <span style={{ border: "2px solid #0080B0", borderRadius: "50%", width: "32px", height: "32px", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#0080B0", fontWeight: 900, fontSize: "0.75rem", letterSpacing: "0.5px" }}>
          LASO
        </span>
      ),
    },
    {
      id: "monark",
      name: "MONARK",
      render: () => (
        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#111", fontWeight: 900, fontSize: "1.05rem" }}>
          <span>Monark</span>
          <span style={{ fontSize: "0.85rem" }}>👑</span>
        </span>
      ),
    },
    {
      id: "bf",
      name: "BF GERMANY",
      render: () => (
        <span style={{ background: "#0055A5", color: "#FFF", padding: "3px 12px", borderRadius: "12px", fontWeight: 900, fontSize: "0.92rem", letterSpacing: "1px" }}>
          BF
        </span>
      ),
    },
    {
      id: "balo",
      name: "BALO",
      render: () => (
        <span style={{ border: "2px solid #000", padding: "3px 12px", fontWeight: 900, fontSize: "1.05rem", letterSpacing: "2.5px", color: "#000" }}>
          BALO
        </span>
      ),
    },
    {
      id: "cojali",
      name: "COJALI",
      render: () => (
        <span style={{ color: "#0054A6", fontWeight: 900, fontSize: "1.1rem", letterSpacing: "1.5px" }}>
          COJALI
        </span>
      ),
    },
    {
      id: "eurotrading",
      name: "EUROTRADING",
      render: () => (
        <span style={{ color: "#333", fontWeight: 800, fontSize: "0.78rem", letterSpacing: "1px", display: "inline-flex", alignItems: "center", gap: "3px" }}>
          <span>🌀</span>
          <span>EUROTRADING</span>
        </span>
      ),
    },
  ];

  return (
    <section className="brand-marquee-section" aria-label="Authorized OEM and Tier-1 Component Brands">
      {/* Title Bar */}
      <div style={{ maxWidth: "1600px", margin: "0 auto 0.75rem auto", padding: "0 clamp(1rem, 2.5vw, 3rem)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span style={{ width: "10px", height: "10px", background: "var(--safety)", display: "inline-block" }}></span>
          <span style={{ color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            // OEM &amp; TIER-1 EUROPEAN BRAND SUPPLIERS (SACHS • MAHLE • HELLA • WABCO • ELRING • BOSCH • KNORR)
          </span>
        </div>
        <span className="tag tag--safety" style={{ fontSize: "0.65rem", padding: "2px 8px" }}>
          36+ CERTIFIED FACTORY BRANDS
        </span>
      </div>

      {/* Marquee Row 1: Forward Direction (Left to Right / Continuous) */}
      <div className="brand-marquee-row">
        <div className="brand-marquee__track">
          {[...row1, ...row1].map((b, idx) => (
            <div key={`${b.id}-${idx}`} className="brand-logo-pill" title={`${b.name} Genuine & OEM Replacement Parts`}>
              {b.render()}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2: Reverse Direction (Opposite Direction) */}
      <div className="brand-marquee-row">
        <div className="brand-marquee__track--reverse">
          {[...row2, ...row2].map((b, idx) => (
            <div key={`${b.id}-${idx}`} className="brand-logo-pill" title={`${b.name} Genuine & OEM Replacement Parts`}>
              {b.render()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
