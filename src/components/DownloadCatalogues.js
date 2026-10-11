"use client";

import { useState } from "react";

export default function DownloadCatalogues() {
  const [downloadSuccess, setDownloadSuccess] = useState("");

  const catalogues = [
    {
      id: "master-2026",
      title: "Viking Tradelinks Master Commercial Parts Line Card 2026",
      category: "Heavy Vehicle Master Guide",
      size: "18.4 MB • PDF",
      updated: "OCT 2026",
      desc: "Complete 148-page reference catalogue covering MAN, Mercedes-Benz, Scania & Volvo chassis ranges. Full OEM cross-reference matrix, weights, and packaging codes.",
      badge: "CORE FLEET REFERENCE",
    },
    {
      id: "bremskerl-friction",
      title: "Bremskerl Germany Heavy Friction Material & Caliper Range",
      category: "Friction & Brake Safety",
      size: "8.2 MB • PDF",
      updated: "AUG 2026",
      desc: "Detailed ECE R90 certified brake pad compound data sheets, thermal heat decay curves, rotor wear tolerances, and hardware accessories for SB7/SN7 calipers.",
      badge: "OFFICIAL PARTNER GUIDE",
    },
    {
      id: "dismantled-stock-q4",
      title: "Q4 Certified Dismantled Heavy Assemblies Stock List (Khalapur Yard)",
      category: "Dismantled Yard Inventory",
      size: "4.6 MB • PDF",
      updated: "LIVE WEEKLY DISPATCH",
      desc: "Inventory register of bench-tested European diesel engines (OM501, D13, D16), G240-16 & I-Shift gearboxes, and tandem differential axle carriers with inspection logs.",
      badge: "USED INVENTORY MANIFEST",
    },
    {
      id: "ndt-quality-manual",
      title: "Non-Destructive Testing (NDT) Quality Protocol Manual",
      category: "Quality Assurance & Standards",
      size: "3.1 MB • PDF",
      updated: "2026 EDITION",
      desc: "Technical documentation of our ultrasonic crack detection, dynamometer transmission spin-testing, and magnetic particle inspection procedures.",
      badge: "ENGINEERING SPECIFICATION",
    },
  ];

  const handleDownload = (cat) => {
    setDownloadSuccess(cat.title);
    setTimeout(() => {
      setDownloadSuccess("");
    }, 4000);
  };

  return (
    <section className="section section--surface" id="downloads">
      <div className="container">
        <div className="section__header" style={{ marginBottom: "2.5rem" }}>
          <div className="section__eyebrow">// PROCUREMENT ASSETS & TECHNICAL SPECIFICATIONS</div>
          <h2 className="section__title">
            Downloadable Catalogues &<br />Fleet Line Cards<span className="accent">.</span>
          </h2>
          <p style={{ maxWidth: "680px", fontSize: "0.95rem", opacity: 0.75, marginTop: "0.5rem" }}>
            Equip your procurement managers, workshop superintendents, and depot mechanics with official Viking Tradelinks line cards and engineering specifications for offline workshop use.
          </p>
        </div>

        {downloadSuccess && (
          <div
            style={{
              background: "rgba(0, 255, 102, 0.15)",
              border: "2px solid var(--term-green)",
              padding: "1rem 1.5rem",
              color: "var(--term-green)",
              fontSize: "0.85rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
              fontFamily: "var(--font-jetbrains-mono), monospace",
            }}
          >
            ✓ Download link dispatched for: &ldquo;{downloadSuccess}&rdquo; — Document ready for procurement use.
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.8rem" }}>
          {catalogues.map((cat) => (
            <div
              key={cat.id}
              className="bento-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "2rem",
                background: "var(--base)",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span className="tag tag--filled" style={{ fontSize: "0.68rem" }}>
                    {cat.badge}
                  </span>
                  <span style={{ fontSize: "0.72rem", opacity: 0.6, fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                    {cat.size}
                  </span>
                </div>

                <div style={{ fontSize: "0.72rem", color: "var(--safety)", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.4rem" }}>
                  {cat.category} • UPDATED: {cat.updated}
                </div>

                <h3 style={{ fontSize: "1.25rem", lineHeight: "1.25", marginBottom: "0.8rem" }}>
                  {cat.title}
                </h3>

                <p style={{ fontSize: "0.82rem", opacity: 0.75, lineHeight: "1.7", marginBottom: "1.5rem" }}>
                  {cat.desc}
                </p>
              </div>

              <div style={{ borderTop: "var(--border-thin)", paddingTop: "1.2rem", display: "flex", gap: "0.6rem" }}>
                <button
                  onClick={() => handleDownload(cat)}
                  className="btn btn--primary btn--sm"
                  style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                >
                  <span>⬇ Download PDF Line Card</span>
                </button>
                <a
                  href={`https://wa.me/919702666664?text=${encodeURIComponent(`Hi Viking Tradelinks, please email me the full high-res PDF brochure for: ${cat.title}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost btn--sm"
                  title="Request via WhatsApp"
                >
                  Request Printed Copy
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
