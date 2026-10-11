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
            <h2 className="footer__brand-name font-display">
              Viking<br />Tradelinks<span className="accent">.</span>
            </h2>
            <p className="footer__brand-desc">
              Global automotive solutions since 1972. Heavy European commercial truck spare parts specialist for MAN,
              Mercedes-Benz, Scania & Volvo. Precision OEM alternatives and certified dismantled assemblies.
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <span className="tag tag--filled">EST. 1972</span>
              <span className="tag tag--safety">24-MO WARRANTY</span>
              <span className="tag tag--outline-safety">15K+ LINE ITEMS</span>
            </div>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Truck Makes</div>
            <Link href="/parts?brand=volvo">Volvo FH / FM / FMX</Link>
            <Link href="/parts?brand=mercedes">Mercedes Actros / Axor</Link>
            <Link href="/parts?brand=scania">Scania R / S / G Series</Link>
            <Link href="/parts?brand=man">MAN TGX / TGS / TGA</Link>
            <Link href="/parts?category=dismantled">Certified Dismantled Parts</Link>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Parts Lines</div>
            <Link href="/parts?category=brakes">Brakes & Bremskerl Pads</Link>
            <Link href="/parts?category=suspension">Air Springs & Shock Absorbers</Link>
            <Link href="/parts?category=engine">Turbos, Water Pumps & Blocks</Link>
            <Link href="/parts?category=transmission">Heavy Duty Clutch Kits</Link>
            <Link href="/parts?category=pneumatics">E-APU Air Dryers & Valves</Link>
          </div>

          <div className="footer__col footer__col--wide">
            <div className="footer__col-title">Global Facilities & Dispatch</div>
            <p style={{ fontSize: "0.85rem", opacity: 0.8, marginBottom: "0.5rem" }}>
              <strong style={{ color: "var(--safety)" }}>Central Warehouse:</strong> Survey 36/1B Dhamani, Khalapur, MH, India (Beside Tata Steel)
            </p>
            <p style={{ fontSize: "0.85rem", opacity: 0.8, marginBottom: "0.5rem" }}>
              <strong style={{ color: "var(--safety)" }}>Mumbai Showroom:</strong> Shop 3, Bella Apts, Plot 122, 5th Rd, Khar West, Mumbai 400052
            </p>
            <p style={{ fontSize: "0.85rem", opacity: 0.8, marginBottom: "0.5rem" }}>
              <strong style={{ color: "var(--safety)" }}>Istanbul Export Hub:</strong> Rm 252, Özyurtlar N5 Suites, Esenyurt/İstanbul, Türkiye
            </p>
            <div style={{ marginTop: "1rem", display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <a href="tel:+919702666664" className="btn btn--primary btn--sm">Call: +91 9702666664</a>
              <a href="mailto:schumi.india@mail.com" className="btn btn--ghost btn--sm">Email: schumi.india@mail.com</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            &copy; 2026 Viking Tradelinks (V Stores & Services). All Rights Reserved. Engineered with TemplateMo 619 Axis Industrial design system.
          </span>
          <button className="footer__back-top" onClick={scrollToTop} aria-label="Back to top">
            ↑ BACK TO TOP
          </button>
        </div>
      </div>
    </footer>
  );
}
