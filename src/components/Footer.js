"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  background: "#FFF",
                  border: "2px solid var(--safety)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "3px",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/images/logo.png"
                  alt="Viking Tradelinks Official Emblem"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
              <h2 className="footer__brand-name font-display" style={{ margin: 0, lineHeight: 1.1 }}>
                Viking<br />Tradelinks<span className="accent">.</span>
              </h2>
            </div>
            <p className="footer__brand-desc">
              Global automotive solutions — A Viking Group Company Since 1969. Heavy European commercial spare parts
              specialist for Trucks, Buses, Construction & Mining, and Marine applications (MAN, Mercedes-Benz, Scania & Volvo).
              Backed by official dealer EPC software, AI support, and 24-month warranties.
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <span className="tag tag--filled">SINCE 1969</span>
              <span className="tag tag--safety">DOMESTIC 24H / GLOBAL 7D</span>
              <span className="tag tag--outline-safety">DEALER EPC & AI SUPPORT</span>
            </div>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Fleet Divisions</div>
            <Link href="/trucks">🚛 European Commercial Trucks</Link>
            <Link href="/ev">⚡ EV &amp; Electric Bus Fleets</Link>
            <Link href="/exports">🇮🇳 Indian Exports &amp; FUSO Division</Link>
            <Link href="/parts?segment=buses">🚌 Intercity Coaches &amp; Buses</Link>
            <Link href="/parts?segment=mining">🚜 Construction &amp; Mining Tippers</Link>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">European &amp; Global Brands</div>
            <Link href="/brands#volvo">Volvo Trucks, Buses &amp; Penta</Link>
            <Link href="/brands#mercedes">Mercedes Actros, Axor &amp; Arocs</Link>
            <Link href="/brands#scania">Scania R / S / V8 &amp; Metrolink</Link>
            <Link href="/brands#man">MAN TGX, TGS &amp; Lion&apos;s Coach</Link>
            <Link href="/exports">Mitsubishi FUSO Export Parts</Link>
          </div>

          <div className="footer__col footer__col--wide">
            <div className="footer__col-title">Global Facilities & Fast Dispatch</div>
            <p style={{ fontSize: "0.85rem", opacity: 0.8, marginBottom: "0.5rem" }}>
              <strong style={{ color: "var(--safety)" }}>Domestic Express (24 Hours):</strong> Central Warehouse, Survey 36/1B Dhamani, Khalapur, MH (Beside Tata Steel)
            </p>
            <p style={{ fontSize: "0.85rem", opacity: 0.8, marginBottom: "0.5rem" }}>
              <strong style={{ color: "var(--safety)" }}>Corporate Showroom:</strong> Shop 3, Bella Apts, Plot 122, 5th Rd, Khar West, Mumbai 400052
            </p>
            <p style={{ fontSize: "0.85rem", opacity: 0.8, marginBottom: "0.5rem" }}>
              <strong style={{ color: "var(--safety)" }}>Global Express (7 Days):</strong> Rm 252, Özyurtlar N5 Suites, Esenyurt/İstanbul, Türkiye
            </p>
            <div style={{ marginTop: "1rem", display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <a href="tel:+919702666664" className="btn btn--primary btn--sm">Call: +91 9702666664</a>
              <a href="mailto:schumi.india@mail.com" className="btn btn--ghost btn--sm">Email: schumi.india@mail.com</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            &copy; 2026 Viking Tradelinks (A Viking Group Company Since 1969). All Rights Reserved. Engineered with TemplateMo 619 Axis Industrial design system.
          </span>
          <button className="footer__back-top" onClick={scrollToTop} aria-label="Back to top">
            ↑ BACK TO TOP
          </button>
        </div>
      </div>
    </footer>
  );
}
