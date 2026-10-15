"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRfq } from "@/context/RfqContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, setIsDrawerOpen } = useRfq();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "European Brands", href: "/brands" },
    { name: "Trucks", href: "/parts?segment=trucks" },
    { name: "Buses", href: "/parts?segment=buses" },
    { name: "Mining", href: "/parts?segment=mining" },
    { name: "Marine", href: "/parts?segment=marine" },
    { name: "Catalogue", href: "/parts" },
    { name: "Facilities", href: "/facilities" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div
        style={{
          background: "var(--ink)",
          color: "rgba(255,255,255,0.75)",
          fontSize: "0.72rem",
          letterSpacing: "0.06em",
          padding: "0 clamp(1rem, 2.5vw, 3rem)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.14)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "30px",
          zIndex: 1001,
          fontFamily: "var(--font-jetbrains-mono)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", whiteSpace: "nowrap", overflow: "hidden" }}>
          <span>
            <strong style={{ color: "var(--safety)" }}>FAST DISPATCH:</strong> Domestic 24h & International 7 Days
          </span>
          <span style={{ opacity: 0.35 }}>|</span>
          <span style={{ color: "var(--term-green)", fontWeight: 700 }}>
            ⚡ Dealer EPC & AI Support Active
          </span>
          <span style={{ opacity: 0.35 }}>|</span>
          <span style={{ opacity: 0.85 }}>Trucks • Buses • Mining • Marine</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", flexShrink: 0, whiteSpace: "nowrap" }}>
          <a href="mailto:schumi.india@mail.com" style={{ color: "inherit", opacity: 0.85 }}>
            schumi.india@mail.com
          </a>
          <span style={{ opacity: 0.35 }}>|</span>
          <a href="tel:+919702666664" style={{ color: "var(--term-green)", fontWeight: 700 }}>
            +91 9702666664
          </a>
        </div>
      </div>

      {/* Main Industrial Header */}
      <header className="header" style={{ top: "30px" }}>
        <div className="header__inner">
          {/* Logo & Brand Identity */}
          <div className="header__left">
            <Link href="/" className="header__logo" aria-label="Viking Tradelinks Home">
              <div className="header__logo-mark">
                <img
                  src="/images/viking-logo.webp"
                  alt="Viking Tradelinks Logo"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ lineHeight: 1.1, letterSpacing: "0.04em", fontWeight: 700, fontSize: "0.95rem" }}>
                  VIKING TRADELINKS
                </span>
                <span style={{ fontSize: "0.62rem", color: "var(--safety)", letterSpacing: "0.14em", marginTop: "2px", fontWeight: 700 }}>
                  EST. 1969 • VIKING GROUP
                </span>
              </div>
            </Link>
          </div>

          {/* Clean, Single-Line Navigation */}
          <nav className={`header__nav ${menuOpen ? "open" : ""}`} id="headerNav">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={isActive ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Flawlessly Sized RFQ Basket & Burger Menu */}
          <div className="header__right">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="header__rfq-btn"
              title="Open Multi-Item RFQ Basket"
            >
              <span>📋 RFQ BASKET</span>
              <span className="header__rfq-badge">{totalItems}</span>
            </button>

            <button
              className="header__burger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
