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
    { name: "Trucks", href: "/trucks" },
    { name: "⚡ EV & Buses", href: "/ev", isEv: true },
    { name: "Indian Exports & FUSO", href: "/exports" },
    { name: "Brands", href: "/brands" },
    { name: "Catalogue", href: "/parts" },
    { name: "Facilities", href: "/facilities" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="topbar">
        <div className="topbar__left">
          <div className="topbar__item">
            <span className="topbar__dot"></span>
            <span>
              <strong style={{ color: "var(--gold)" }}>FAST DISPATCH:</strong> Domestic 24h • Global 7 Days
            </span>
          </div>
          <span className="topbar__sep topbar__item--desktop-only">|</span>
          <div className="topbar__item topbar__item--desktop-only">
            <span style={{ color: "var(--term-green)", fontWeight: 700 }}>
              ⚡ Dealer EPC &amp; AI Support
            </span>
          </div>
          <span className="topbar__sep topbar__item--desktop-only">|</span>
          <div className="topbar__item topbar__item--desktop-only">
            <span style={{ color: "var(--gold)", fontWeight: 700 }}>
              🇸🇪 Volvo &amp; European Fleet Specialist
            </span>
          </div>
        </div>

        <div className="topbar__right">
          <a
            href="mailto:schumi.india@mail.com"
            className="topbar__email topbar__item--wide-only"
            title="Email Inquiries"
          >
            schumi.india@mail.com
          </a>
          <span className="topbar__sep topbar__item--wide-only">|</span>
          <a
            href="tel:+919702666664"
            className="topbar__phone"
            title="Emergency Fleet Breakdown & Dispatch"
          >
            <span className="topbar__phone-icon">📞</span>
            <span className="topbar__phone-label">24/7 HELPLINE:</span>
            <span className="topbar__phone-val">+91 9702666664</span>
          </a>
        </div>
      </div>

      {/* Main Big Industrial Header */}
      <header className="header">
        <div className="header__inner">
          {/* Logo & Brand Identity */}
          <div className="header__left">
            <Link href="/" className="header__logo" aria-label="Viking Tradelinks Home">
              <div className="header__logo-mark">
                <img
                  src="/images/logo.png"
                  alt="Viking Tradelinks Logo"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
              <div className="header__brand-text">
                <span className="header__brand-name">
                  VIKING TRADELINKS
                </span>
                <span className="header__brand-sub">
                  EST. 1969 • VOLVO &amp; EUROPEAN FLEET SPARES
                </span>
              </div>
            </Link>
          </div>

          {/* Clean Navigation with Highlighted EV & Volvo Links */}
          <nav className={`header__nav ${menuOpen ? "open" : ""}`} id="headerNav">
            <div className="header__nav-mobile-header">
              <span style={{ color: "var(--gold)", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.1em" }}>
                // NAVIGATION MENU
              </span>
              <button
                className="header__nav-close"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation"
              >
                ✕
              </button>
            </div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const classes = [
                isActive ? "active" : "",
                link.isEv ? "nav-link--ev" : "",
              ].filter(Boolean).join(" ");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={classes}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/#volvo-specialization"
              className="nav-link--volvo"
              onClick={() => setMenuOpen(false)}
            >
              🇸🇪 Volvo Hub
            </Link>
          </nav>

          {/* Right Action: Big Phone Helpline, RFQ Basket & Burger Menu */}
          <div className="header__right">
            {/* Big Prominent Phone Pill Button */}
            <a
              href="tel:+919702666664"
              className="header__phone-pill"
              title="Direct Orders & Fleet Dispatch Hotline"
            >
              <span className="header__phone-icon">📞</span>
              <div className="header__phone-meta">
                <span className="header__phone-label">24/7 HELPLINE</span>
                <span className="header__phone-number">+91 9702666664</span>
              </div>
            </a>

            <button
              onClick={() => setIsDrawerOpen(true)}
              className="header__rfq-btn"
              title="Open Multi-Item RFQ Basket"
            >
              <span className="header__rfq-text">📋 RFQ</span>
              <span className="header__rfq-badge">{totalItems}</span>
            </button>

            <button
              className={`header__burger ${menuOpen ? "is-active" : ""}`}
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
