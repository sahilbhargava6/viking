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
    { name: "Explore Spare Parts", href: "/parts" },
    { name: "Truck Brands", href: "/brands" },
    { name: "About Us & Warehouses", href: "/facilities" },
    { name: "Contact & Quote", href: "/contact" },
  ];

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div
        style={{
          background: "var(--ink)",
          color: "rgba(255,255,255,0.7)",
          fontSize: "0.68rem",
          letterSpacing: "0.08em",
          padding: "0.3rem clamp(1rem, 3vw, 3rem)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "28px",
          zIndex: 1001,
          fontFamily: "var(--font-jetbrains-mono)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span>
            <strong style={{ color: "var(--safety)" }}>FAST DISPATCH:</strong> Get fast delivery within India & Worldwide
          </span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span>Specialist in MAN, Mercedes-Benz, Scania & VOLVO</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
          <a href="mailto:schumi.india@mail.com" style={{ color: "inherit", opacity: 0.85 }}>
            schumi.india@mail.com
          </a>
          <span style={{ opacity: 0.3 }}>|</span>
          <a href="tel:+919702666664" style={{ color: "var(--term-green)", fontWeight: 700 }}>
            +91 9702666664
          </a>
        </div>
      </div>

      {/* Main Industrial Header */}
      <header className="header" style={{ top: "28px" }}>
        <div className="header__inner">
          <div className="header__left">
            <Link href="/" className="header__logo" aria-label="Viking Tradelinks Home">
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "#fff",
                  border: "2px solid var(--safety)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  padding: "2px",
                }}
              >
                <img
                  src="/images/viking-logo.webp"
                  alt="V Stores & Services Viking Logo"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ lineHeight: 1, letterSpacing: "0.04em" }}>VIKING TRADELINKS</span>
                <span style={{ fontSize: "0.55rem", opacity: 0.5, letterSpacing: "0.14em", marginTop: "2px" }}>
                  V STORES & SERVICES
                </span>
              </div>
            </Link>
            <span className="header__sep"></span>
            <span className="header__product">Est. 1972 • Heavy Commercial Parts</span>
          </div>

          <nav className={`header__nav ${menuOpen ? "open" : ""}`} id="headerNav">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="header__right" style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="btn btn--primary btn--sm"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.45em 0.9em",
                fontSize: "0.75rem",
                letterSpacing: "0.05em",
              }}
              title="Open Multi-Item RFQ Basket"
            >
              <span>📋 RFQ BASKET</span>
              <span
                style={{
                  background: "#000",
                  color: "#fff",
                  padding: "0.1em 0.5em",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  border: "1px solid #fff",
                }}
              >
                {totalItems}
              </span>
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
