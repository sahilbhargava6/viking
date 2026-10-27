"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TickerBar from "@/components/TickerBar";
import TelemetryBar from "@/components/TelemetryBar";
import PartFinder from "@/components/PartFinder";
import QuoteModal from "@/components/QuoteModal";
import VinLookup from "@/components/VinLookup";
import TruckExplosionDiagram from "@/components/TruckExplosionDiagram";
import DownloadCatalogues from "@/components/DownloadCatalogues";
import BrandMarquee from "@/components/BrandMarquee";
import VolvoSpotlight from "@/components/VolvoSpotlight";
import {
  BRANDS,
  CATEGORIES,
  SECTORS,
  SMART_FEATURES,
  VIKING_BENEFITS,
  LOGISTICS_SERVICES,
  TESTIMONIALS,
  LOCATIONS,
} from "@/data/partsData";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [alertEmail, setAlertEmail] = useState("");
  const [alertSubscribed, setAlertSubscribed] = useState(false);

  const handleAlertSubmit = (e) => {
    e.preventDefault();
    if (alertEmail) {
      setAlertSubscribed(true);
    }
  };

  return (
    <>
      {/* ====== HERO ====== */}
      <section
        className="hero"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0.85) 100%), url('/images/hero-banner.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero__grid hero__grid--dense" aria-hidden="true"></div>
        <div className="hero__badges-row">
          <div className="hero__label">
            A VIKING GROUP COMPANY — EST. 1969
          </div>
          <div className="hero__label--volvo">
            🇸🇪 #1 VOLVO TRUCK, BUS &amp; PENTA SPECIALIST
          </div>
        </div>

        {/* Company Name Big */}
        <h1 className="hero__title">
          <span className="line">VIKING</span>
          <span className="line line--indent">
            TRADELINKS<span className="accent">.</span>
          </span>
        </h1>

        {/* Slogan Small */}
        <div className="hero__slogan">
          Global Automotive Solutions
          <span className="hero__slogan-sub">
            — Heavy European Specialist for Trucks, Buses, Construction &amp; Mining, Marine
          </span>
        </div>

        <div className="hero__bottom">
          <div className="hero__content-card">
            <p className="hero__desc">
              European commercial specialist in <strong>MAN, Mercedes-Benz, Scania &amp; VOLVO</strong> since 1969.
              Supplying precision OEM replacement parts and certified dismantled components backed by <strong>Dealer EPC Software &amp; AI Support</strong>.
            </p>
            <div className="hero__actions">
              <button className="btn btn--primary" onClick={() => setIsModalOpen(true)}>
                Inquire Part Quote
              </button>
              <Link href="/parts?brand=volvo" className="btn btn--dark btn--volvo-highlight">
                <span>🇸🇪 Volvo Parts Hub</span>
              </Link>
              <Link href="/parts" className="btn btn--ghost">
                All 15,000+ Parts
              </Link>
            </div>
          </div>

          <div className="hero__stats">
            <div className="hero__stat-item">
              <div className="hero__stat-num">
                55<span className="accent">+</span>
              </div>
              <div className="hero__stat-label">Years of Heritage (1969)</div>
            </div>
            <div className="hero__stat-item">
              <div className="hero__stat-num">
                15K<span className="accent">+</span>
              </div>
              <div className="hero__stat-label">European Items in Stock</div>
            </div>
            <div className="hero__stat-item">
              <div className="hero__stat-num">
                24<span className="accent">H</span>
              </div>
              <div className="hero__stat-label">Domestic Dispatch</div>
            </div>
            <div className="hero__stat-item">
              <div className="hero__stat-num">
                7<span className="accent">D</span>
              </div>
              <div className="hero__stat-label">International Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 2-WAY OPPOSITE DIRECTION BRAND LOGO MARQUEE ====== */}
      <BrandMarquee />

      {/* ====== ABOUT US (VIKING GROUP SINCE 1969) ====== */}
      <section className="section" id="about">
        <div className="container">
          <div className="bento-card bento-grid--2col">
            <div className="bento-col-half">
              <div
                style={{
                  border: "var(--border)",
                  boxShadow: "var(--shadow)",
                  overflow: "hidden",
                  background: "#000",
                }}
              >
                <img
                  src="/images/about-fleet.jpeg"
                  alt="Viking Tradelinks European Commercial Fleet"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem", flexWrap: "wrap" }}>
                <span className="tag tag--filled">SINCE 1969</span>
                <span className="tag tag--safety">DOMESTIC 24H / GLOBAL 7D</span>
                <span className="tag tag--blue">DEALER EPC &amp; AI SUPPORT</span>
              </div>
            </div>

            <div className="bento-col-half">
              <div className="section__eyebrow">// A VIKING GROUP ENTERPRISE</div>
              <h2 className="section__title" style={{ fontSize: "var(--fs-h2)", marginBottom: "1rem" }}>
                About Viking Tradelinks<span className="accent">.</span>
              </h2>
              <p style={{ fontSize: "0.98rem", lineHeight: "1.8", opacity: "0.85", marginBottom: "1.5rem" }}>
                If you&apos;re looking for high-end European commercial vehicle spare parts to keep your fleet in top condition, you&apos;ve come to the
                right place at <strong>Viking Tradelinks</strong>. Established in <strong>1969</strong>, we understand the critical importance of reliable, durable parts for
                heavy commercial operations — whether you manage interstate haulage trucks, luxury tourist coaches, high-load mining tippers, or marine propulsion engines.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "0.92rem", fontWeight: 700 }}>
                  <span style={{ color: "var(--safety)", fontSize: "1.2rem" }}>✓</span>
                  <span>Viking Group company with 55+ years of heritage since 1969</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "0.92rem", fontWeight: 700 }}>
                  <span style={{ color: "var(--safety)", fontSize: "1.2rem" }}>✓</span>
                  <span>Domestic shipment within 24 hours | International delivery in 7 days</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "0.92rem", fontWeight: 700 }}>
                  <span style={{ color: "var(--safety)", fontSize: "1.2rem" }}>✓</span>
                  <span>Official dealer EPC software (Volvo IMPACT, MB EPC, Scania Multi, MAN Mantis) &amp; AI support</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "0.92rem", fontWeight: 700 }}>
                  <span style={{ color: "var(--safety)", fontSize: "1.2rem" }}>✓</span>
                  <span>24 months warranty on brand new parts &amp; tested dismantled components with fitment trial</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/facilities" className="btn btn--primary btn--sm">
                  View Warehouses &amp; Testing Lab
                </Link>
                <a href="tel:+919702666664" className="btn btn--ghost btn--sm">
                  Direct Line: +91 9702666664
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== VOLVO COMMERCIAL & PENTA SPECIALIZATION HUB ====== */}
      <VolvoSpotlight />

      {/* ====== OPERATIONAL SECTORS: TRUCK, BUS, MINING, MARINE ====== */}
      <section className="section section--surface" id="sectors">
        <div className="container">
          <div className="section__header">
            <div className="section__eyebrow">// APPLICATION DOMAINS</div>
            <h2 className="section__title">
              Operating Sectors<span className="accent">.</span>
            </h2>
            <p style={{ maxWidth: "680px", fontSize: "1rem", opacity: 0.75, marginTop: "0.5rem" }}>
              Dedicated parts coverage engineered specifically for European heavy transport, public transit, quarry extraction, and marine powertrains.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {SECTORS.map((sector, idx) => (
              <div key={sector.id} className="sector-card">
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "2rem" }}>{sector.icon}</span>
                    <span className="tag tag--filled">SECTOR 0{idx + 1}</span>
                  </div>
                  <h3 style={{ fontSize: "1.3rem", marginBottom: "0.6rem", lineHeight: "1.2" }}>{sector.name}</h3>
                  <p style={{ fontSize: "0.85rem", opacity: 0.75, lineHeight: "1.6", marginBottom: "1.2rem" }}>
                    {sector.desc}
                  </p>
                  <div style={{ fontSize: "0.78rem", background: "var(--surface)", border: "var(--border-thin)", padding: "0.8rem", marginBottom: "1.2rem" }}>
                    <strong style={{ display: "block", color: "var(--safety)", marginBottom: "0.2rem" }}>KEY PLATFORMS:</strong>
                    {sector.keyModels}
                  </div>
                </div>

                <Link
                  href={`/parts?segment=${sector.id}`}
                  className="btn btn--primary btn--sm"
                  style={{ width: "100%" }}
                >
                  Explore {sector.shortName} Parts →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== EUROPEAN TRUCKS SHOWCASE (truck_banner.jpeg) ====== */}
      <section className="section" style={{ borderTop: "4px solid var(--burgundy)", borderBottom: "4px solid var(--burgundy)", background: "var(--grey-900)", color: "#FFF" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
            <div>
              <div className="section__eyebrow" style={{ color: "var(--gold)" }}>// HEAVY VEHICLE DIVISION</div>
              <h2 className="section__title" style={{ fontSize: "var(--fs-h2)", color: "#FFF", margin: 0 }}>
                Leading European Truck Fleets<span className="accent">.</span>
              </h2>
            </div>
            <Link href="/trucks" className="btn btn--primary">
              Explore Trucks Page (Volvo • MAN • MB • Renault) →
            </Link>
          </div>

          <div style={{ border: "3px solid var(--gold)", boxShadow: "8px 8px 0px rgba(0,0,0,0.4)", overflow: "hidden", position: "relative", background: "var(--grey-900)" }}>
            <img
              src="/images/truck_banner_hd.jpeg"
              alt="Leading European Brands Built For Your Business - Volvo, MAN, Mercedes-Benz, Renault"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "16 / 9",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div style={{ background: "var(--grey-800)", padding: "1.2rem 1.6rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", borderTop: "2px solid var(--gold)" }}>
              <div style={{ fontSize: "0.9rem", color: "#FFF" }}>
                <strong>Volvo FH/FM • Mercedes Actros/Arocs • MAN TGX/TGS • Renault T/K-Series • Scania V8</strong>
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <span className="tag tag--safety">DOMESTIC 24H DISPATCH</span>
                <span className="tag tag--gold" style={{ background: "var(--gold)", color: "#14171E", fontWeight: 800 }}>DEALER EPC SOFTWARE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== ELECTRIC BUS STAND & EV FLEET SHOWCASE (evbuses.jpeg) ====== */}
      <section className="section" style={{ background: "var(--surface)", borderBottom: "4px solid var(--gold)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
            <div>
              <div className="section__eyebrow" style={{ color: "#059669" }}>// ZERO-EMISSION FLEET INTEGRATION</div>
              <h2 className="section__title" style={{ fontSize: "var(--fs-h2)", margin: 0 }}>
                Leading Companies of Electric Bus Stand<span className="accent" style={{ color: "var(--burgundy)" }}>.</span>
              </h2>
            </div>
            <Link href="/ev" className="btn btn--secondary" style={{ border: "2px solid var(--grey-300)", background: "#FFFFFF", color: "var(--ink)" }}>
              View Electric Bus &amp; Stand Division →
            </Link>
          </div>

          <div style={{ border: "2px solid #059669", boxShadow: "6px 6px 0px rgba(0,0,0,0.08)", background: "#FFF", overflow: "hidden" }}>
            <div style={{ background: "var(--grey-100)", padding: "1rem 1.5rem", borderBottom: "1px solid var(--grey-300)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
              <span className="tag tag--safety" style={{ background: "#059669", color: "#FFFFFF", fontWeight: 800 }}>
                ⚡ ELECTRIC BUS STAND &amp; OEM PARTNERS
              </span>
              <span style={{ color: "var(--ink)", fontSize: "0.8rem", fontFamily: "var(--font-jetbrains-mono)", fontWeight: 600 }}>
                JBM GROUP • OLECTRA • PMI ELECTRO • SWITCH MOBILITY • TATA MOTORS
              </span>
            </div>
            <div style={{ padding: "1.5rem", background: "#FFF", textAlign: "center" }}>
              <img
                src="/images/evbuses.jpeg"
                alt="Leading Companies of Electric Bus Stand: JBM Group, Olectra, PMI, SWITCH, TATA"
                style={{ maxWidth: "800px", width: "100%", height: "auto", margin: "0 auto", display: "block", objectFit: "contain" }}
              />
            </div>
            <div style={{ background: "var(--grey-50)", padding: "1rem 1.5rem", color: "var(--ink-light)", fontSize: "0.85rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", borderTop: "1px solid var(--grey-300)" }}>
              <span>Pantograph charging stand contacts, regenerative brake pads, and thermal coolant loops in stock.</span>
              <Link href="/ev" style={{ color: "var(--burgundy)", fontWeight: 700, textDecoration: "underline" }}>
                Explore EV Bus Components →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== EXPORTS OF INDIAN TRUCK & BUS BRANDS & FUSO (Exports...jpeg & FUSO.jpeg) ====== */}
      <section className="section" style={{ borderBottom: "4px solid var(--gold)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
            <div>
              <div className="section__eyebrow" style={{ color: "var(--burgundy)" }}>// GLOBAL SUPPLY DIVISION</div>
              <h2 className="section__title" style={{ fontSize: "var(--fs-h2)", margin: 0 }}>
                Exports of Indian Truck &amp; Bus Brands &amp; FUSO<span className="accent" style={{ color: "var(--burgundy)" }}>.</span>
              </h2>
            </div>
            <Link href="/exports" className="btn btn--primary">
              View Global Export Program (45+ Countries) →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "2rem" }}>
            <div style={{ border: "2px solid var(--grey-300)", boxShadow: "6px 6px 0px rgba(0,0,0,0.08)", background: "#FFF", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ background: "var(--burgundy)", padding: "0.8rem 1.2rem", color: "#FFF", fontSize: "0.8rem", fontWeight: 700, display: "flex", justifyContent: "space-between" }}>
                <span>TOP TRUCK BRANDS IN INDIA</span>
                <span style={{ color: "var(--gold)" }}>BRANDS COLLAGE</span>
              </div>
              <div style={{ padding: "1.2rem", flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  src="/images/indian-truck-brands-collage.png"
                  alt="Indian Truck Brands Collage: Mahindra, Eicher, BharatBenz, Volvo, Ashok Leyland, Tata Motors"
                  style={{ maxHeight: "320px", width: "100%", objectFit: "contain", display: "block" }}
                />
              </div>
              <div style={{ padding: "0.8rem 1.2rem", background: "var(--surface)", borderTop: "1px solid #DDD", fontSize: "0.8rem", color: "#444" }}>
                Mahindra, Eicher, BharatBenz, Volvo India, Ashok Leyland, Tata Motors spare parts exported worldwide.
              </div>
            </div>

            <div style={{ border: "2px solid var(--gold)", boxShadow: "6px 6px 0px rgba(0,0,0,0.08)", background: "#FFF", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ background: "var(--burgundy)", padding: "0.8rem 1.2rem", color: "#FFF", fontSize: "0.8rem", fontWeight: 700, display: "flex", justifyContent: "space-between" }}>
                <span>MITSUBISHI FUSO &amp; COMMERCIAL BRANDS</span>
                <span style={{ color: "var(--gold)" }}>BRANDS COLLAGE</span>
              </div>
              <div style={{ padding: "1.2rem", flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img
                  src="/images/fuso-truck-brands-collage.png"
                  alt="Mitsubishi FUSO and Truck Brands Collage: FUSO, SML Isuzu, MAN, Force Motors, AMW, Daimler Truck"
                  style={{ maxHeight: "320px", width: "100%", objectFit: "contain", display: "block" }}
                />
              </div>
              <div style={{ padding: "0.8rem 1.2rem", background: "var(--surface)", borderTop: "1px solid #DDD", fontSize: "0.8rem", color: "#444" }}>
                Full export supply for Mitsubishi FUSO Canter, Fighter, Super Great, FJ/FZ, and Indian commercial vehicles.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== EXPLORE SPARE PARTS (PHOTO CATEGORY TILES) ====== */}
      <section className="section section--surface" id="categories">
        <div className="container">
          <div className="section__header">
            <div className="section__eyebrow">// Core Components</div>
            <h2 className="section__title">
              Explore Spare Parts<span className="accent">.</span>
            </h2>
            <p style={{ maxWidth: "600px", fontSize: "0.95rem", opacity: 0.7, marginTop: "0.5rem" }}>
              Explore our core European commercial vehicle spare parts categories. High resolution photography of actual inventory lines.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
              <Link
                key={cat.id}
                href={`/parts?category=${cat.id}`}
                className="bento-card"
                style={{
                  padding: "0",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "190px",
                    width: "100%",
                    background: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "var(--border-thin)",
                    padding: "1rem",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </div>
                <div style={{ padding: "1.2rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <span className="tag tag--filled" style={{ fontSize: "0.6rem", marginBottom: "0.5rem" }}>
                      CATEGORY
                    </span>
                    <h3 style={{ fontSize: "1.15rem", marginBottom: "0.4rem", lineHeight: "1.2" }}>{cat.name}</h3>
                    <p style={{ fontSize: "0.78rem", opacity: 0.7, lineHeight: "1.5" }}>{cat.desc}</p>
                  </div>
                  <div style={{ marginTop: "1rem", color: "var(--safety)", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em" }}>
                    BROWSE INVENTORY →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SMART FEATURES (4 CARDS FROM LIVE SITE) ====== */}
      <section className="section" id="smart-features">
        <div className="container">
          <div className="section__header">
            <div className="section__eyebrow">// Operational Strengths</div>
            <h2 className="section__title">
              Smart Features<span className="accent">.</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {SMART_FEATURES.map((feat, idx) => (
              <div key={feat.id} className="bento-card" style={{ padding: "1.8rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span className="tag tag--filled">FEATURE // 0{idx + 1}</span>
                  <span style={{ fontSize: "1.3rem", color: "var(--safety)" }}>⚡</span>
                </div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.6rem", lineHeight: "1.2" }}>{feat.title}</h3>
                <p style={{ fontSize: "0.82rem", opacity: 0.75, lineHeight: "1.7" }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== VIN & CHASSIS LOOKUP TOOL ====== */}
      <section className="section section--surface" id="vin-decoder">
        <div className="container">
          <VinLookup />
        </div>
      </section>

      {/* ====== TRUCK SUB-SYSTEM EXPLOSION NAVIGATOR ====== */}
      <section className="section" id="schematic">
        <div className="container">
          <TruckExplosionDiagram />
        </div>
      </section>

      {/* ====== INTERACTIVE PART FINDER & CROSS REFERENCE ====== */}
      <section className="section section--surface" id="finder">
        <div className="container">
          <PartFinder initialBrand={selectedBrand} />
        </div>
      </section>

      {/* ====== BENEFITS OF VIKING TRADELINKS ====== */}
      <section className="section" id="benefits">
        <div className="container">
          <div className="section__header" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem auto" }}>
            <div className="section__eyebrow" style={{ justifyContent: "center" }}>// CUSTOMER ADVANTAGES</div>
            <h2 className="section__title">
              Benefits of VIKING TRADELINKS<span className="accent">.</span>
            </h2>
            <p style={{ fontSize: "1rem", opacity: 0.75 }}>
              A Viking Group enterprise since 1969. Supporting fleets with direct OEM sourcing, dealer EPC software, and rapid delivery:
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem", marginBottom: "3rem" }}>
            {VIKING_BENEFITS.map((ben, idx) => (
              <div key={idx} className="part-card" style={{ padding: "1.5rem" }}>
                <span className="tag tag--safety" style={{ alignSelf: "flex-start", marginBottom: "0.8rem" }}>
                  0{idx + 1}
                </span>
                <h4 style={{ fontSize: "1.18rem", marginBottom: "0.5rem" }}>{ben.title}</h4>
                <p style={{ fontSize: "0.82rem", opacity: 0.75, lineHeight: "1.6" }}>{ben.desc}</p>
              </div>
            ))}
          </div>

          {/* Worldwide Shipping & Assortment Large Bento Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "2rem" }}>
            {LOGISTICS_SERVICES.map((serv) => (
              <div key={serv.id} className="bento-card bento-card--dark" style={{ padding: "2.5rem" }}>
                <span className="tag tag--filled" style={{ alignSelf: "flex-start", marginBottom: "1rem", background: "var(--safety)", borderColor: "var(--safety)" }}>
                  {serv.tag}
                </span>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "#fff" }}>{serv.title}</h3>
                <p style={{ fontSize: "0.88rem", opacity: 0.8, lineHeight: "1.8", color: "rgba(255,255,255,0.85)" }}>
                  {serv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== USED PARTS ALERT (NEWSLETTER/STOCK INFLUX) ====== */}
      <section className="section section--dark" style={{ borderBottom: "4px solid var(--safety)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div className="section__eyebrow" style={{ justifyContent: "center" }}>// CONTAINER ARRIVAL DISPATCH</div>
          <h2 className="section__title" style={{ fontSize: "var(--fs-h2)", marginBottom: "0.8rem" }}>
            Used Parts Alert<span className="accent">.</span>
          </h2>
          <p style={{ opacity: 0.8, fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "2rem" }}>
            We like to inform you about our stock and special offers! When a fresh dismantled European commercial container
            arrives at our Khalapur yard, be the first to reserve transmissions, axles, and engines.
          </p>

          {alertSubscribed ? (
            <div style={{ background: "rgba(0, 255, 102, 0.1)", border: "2px solid var(--term-green)", padding: "1.5rem", color: "var(--term-green)", fontWeight: 700 }}>
              ✓ You are registered for Khalapur & Istanbul Used Parts Alerts!
            </div>
          ) : (
            <form onSubmit={handleAlertSubmit} style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap" }}>
              <input
                type="email"
                required
                className="input-box"
                style={{ maxWidth: "420px", background: "#fff", color: "#000" }}
                placeholder="Your Email Address"
                value={alertEmail}
                onChange={(e) => setAlertEmail(e.target.value)}
              />
              <button type="submit" className="btn btn--primary" style={{ padding: "0.8em 2em" }}>
                Subscribe to Alerts
              </button>
            </form>
          )}

          <div style={{ fontSize: "0.72rem", opacity: 0.5, marginTop: "1rem" }}>
            ■ I agree to receive stock notifications and terms regarding European commercial truck parts.
          </div>
        </div>
      </section>

      {/* ====== CLIENT TESTIMONIALS (INCLUDING TAJ TRAVELS) ====== */}
      <section className="section" id="testimonials">
        <div className="container">
          <div className="section__header">
            <div className="section__eyebrow">// Client Endorsements</div>
            <h2 className="section__title">
              What Our Clients Say<span className="accent">.</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bento-card" style={{ minHeight: "260px", padding: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <div style={{ color: "var(--safety)", letterSpacing: "2px" }}>★★★★★ (5/5)</div>
                  <span className="tag tag--filled">VERIFIED OPERATOR</span>
                </div>
                <p style={{ fontSize: "0.88rem", lineHeight: "1.8", opacity: 0.85, marginBottom: "1.5rem" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                  {t.avatar && (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      style={{ width: "42px", height: "42px", borderRadius: "50%", border: "2px solid var(--safety)" }}
                    />
                  )}
                  <div>
                    <div style={{ fontWeight: 700, fontFamily: "var(--font-space-grotesk)", fontSize: "1.05rem" }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== RESPECETD BRANDS SHOWCASE (CLICKABLE - KNOW MORE) ====== */}
      <section className="section section--surface" id="brands">
        <div className="container">
          <div className="section__header">
            <div className="section__eyebrow">// Fleet Compatibility</div>
            <h2 className="section__title">
              Respected European Brands<span className="accent">.</span>
            </h2>
            <p style={{ maxWidth: "600px", fontSize: "0.95rem", opacity: 0.7, marginTop: "0.5rem" }}>
              Click any brand below to learn more about platform series, factory EPC dealer software specs, or explore spare parts inventory.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {BRANDS.map((brand) => (
              <div key={brand.id} className="part-card" style={{ background: "var(--base)" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <Link
                      href={brand.knowMoreUrl || `/brands#${brand.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <span className="tag tag--filled" style={{ fontSize: "0.85rem", padding: "0.4em 0.8em", cursor: "pointer" }}>
                        {brand.icon}
                      </span>
                    </Link>
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--safety)" }}>SPECIALIST FLEET</span>
                  </div>

                  <Link href={brand.knowMoreUrl || `/brands#${brand.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <h3 style={{ fontSize: "1.45rem", marginBottom: "0.6rem", transition: "color 0.15s ease" }}>
                      {brand.name}
                    </h3>
                  </Link>

                  <p style={{ fontSize: "0.85rem", opacity: 0.75, marginBottom: "1rem", lineHeight: "1.6" }}>
                    {brand.desc}
                  </p>

                  {/* Sectors badges */}
                  {brand.sectors && (
                    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                      {brand.sectors.map((sec, sIdx) => (
                        <span key={sIdx} className="tag tag--ghost" style={{ fontSize: "0.62rem" }}>
                          {sec}
                        </span>
                      ))}
                    </div>
                  )}

                  <div style={{ fontSize: "0.78rem", background: "var(--surface)", padding: "0.8rem", border: "var(--border-thin)", marginBottom: "1.2rem" }}>
                    <strong style={{ display: "block", marginBottom: "0.4rem", textTransform: "uppercase" }}>Common Series:</strong>
                    {brand.series.map((s, idx) => (
                      <div key={idx} style={{ opacity: 0.85, padding: "0.15rem 0" }}>• {s}</div>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.6rem", flexDirection: "column" }}>
                  <Link
                    href={brand.knowMoreUrl || `/brands#${brand.id}`}
                    className="brand-card__know-more"
                    style={{ textAlign: "center", justifyContent: "center" }}
                  >
                    Know More →
                  </Link>
                  <Link
                    href={brand.partsUrl || `/parts?brand=${brand.id}`}
                    className="btn btn--primary btn--sm"
                    style={{ width: "100%" }}
                  >
                    Explore {brand.name} Parts →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== WAREHOUSE & LOCATION SPOTLIGHT ====== */}
      <section className="section" id="facilities">
        <div className="container">
          <div className="section__header">
            <div className="section__eyebrow">// Sourcing & Distribution Hubs</div>
            <h2 className="section__title">
              Our Offices &<br />Warehouses
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {LOCATIONS.map((loc) => (
              <div key={loc.id} className="part-card" style={{ background: "var(--base)", padding: "2rem" }}>
                <div>
                  <span className="tag tag--safety" style={{ marginBottom: "1rem" }}>
                    {loc.id.toUpperCase()} FACILITY
                  </span>
                  <h3 style={{ fontSize: "1.3rem", margin: "0.8rem 0" }}>{loc.name}</h3>
                  <div style={{ fontSize: "0.8rem", color: "var(--safety)", fontWeight: 700, marginBottom: "0.5rem" }}>
                    OFFICER: {loc.contactPerson}
                  </div>
                  <p style={{ fontSize: "0.85rem", opacity: 0.8, lineHeight: "1.7", marginBottom: "1rem" }}>
                    {loc.address}
                  </p>
                  <div style={{ fontSize: "0.78rem", background: "var(--surface)", padding: "0.7rem", border: "1px solid rgba(0,0,0,0.1)", marginBottom: "1.2rem" }}>
                    <div><strong>Key Function:</strong> {loc.role}</div>
                    <div style={{ marginTop: "0.3rem", opacity: 0.7 }}><strong>Hours:</strong> {loc.timing}</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <a href={`tel:${loc.phone}`} className="btn btn--primary btn--sm" style={{ flex: 1 }}>
                    Call: {loc.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== DOWNLOADABLE CATALOGUES & LINE CARDS ====== */}
      <DownloadCatalogues />

      {/* ====== TICKER MARQUEE ====== */}
      <TickerBar />

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
