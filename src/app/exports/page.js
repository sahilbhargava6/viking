"use client";

import { useState } from "react";
import Link from "next/link";
import TelemetryBar from "@/components/TelemetryBar";
import { useRfq } from "@/context/RfqContext";

export default function ExportsPage() {
  const { setIsDrawerOpen } = useRfq();

  const indianBrands = [
    {
      name: "Tata Motors Commercial",
      models: "Prima 5530.S • Signa 4825.TK • Ultra T.16 • Intra • Ace",
      tech: "Cummins ISBe 5.6L / 6.7L, Turbotronn 3.3L/5.0L, G750/G950 Gearboxes",
      markets: "Middle East (UAE, Oman, Qatar), Africa (Kenya, South Africa, Nigeria), SAARC",
      badge: "INDIA'S LARGEST COMMERCIAL VEHICLE OEM",
    },
    {
      name: "Ashok Leyland",
      models: "AVTR Modular Platform (1920 to 5525) • Captain Tippers • Boss • Viking Bus",
      tech: "H-Series 6-Cylinder & A-Series i-Gen6 Euro 4/5/6 Engines, ZF 6S/9S Transmissions",
      markets: "Middle East, East & West Africa, Sri Lanka, Bangladesh",
      badge: "INDIGENOUS MODULAR TRUCK BENCHMARK",
    },
    {
      name: "BharatBenz (Daimler India)",
      models: "2828C / 3528CM Heavy Mining • 4228R 5-Axle • 5528TT Tractor Head",
      tech: "Mercedes-Benz Derived OM926 / OM906 Powertrains, G131 9-Speed Synchromesh",
      markets: "Exported to 40+ countries under FUSO & BharatBenz nameplates",
      badge: "GERMAN ENGINEERING • INDIAN SOURCING",
    },
    {
      name: "Eicher Motors (VECV)",
      models: "Pro 8055 • Pro 6048 Multi-Axle • Pro 3019 • Skyline Pro Passenger Buses",
      tech: "Volvo Group VEDX5 & VEDX8 Powertrains, EMS 3.0 Engine Electronics",
      markets: "Middle East, Africa, Southeast Asia",
      badge: "VOLVO GROUP TECHNOLOGY PARTNERSHIP",
    },
    {
      name: "Mahindra Trucks & Buses",
      models: "Blazo X 28, 35, 49 • Furio 7 to 17 LCV/ICV • Cruzio Buses",
      tech: "7.2L mPower FuelSmart Engines with Multi-Mode Power Switches",
      markets: "Africa, South Asia, Middle East",
      badge: "FUELSMART HEAVY COMMERCIAL LINE",
    },
    {
      name: "Force Motors & SML Isuzu",
      models: "Traveller 3050/4020 • Monobus • SML Isuzu Samrat 21 • Sartaj",
      tech: "Mercedes-spec FM 2.6L CRDI Powertrains, Isuzu 4HK1 Diesel Engines",
      markets: "Middle East, Africa, Central Asia",
      badge: "LIGHT COMMERCIAL & PASSENGER FLEETS",
    },
  ];

  const fusoExportDetails = [
    {
      series: "FUSO Canter (Light Duty Series)",
      models: "FE 71, FE 84, FE 85, FG 4x4 All-Wheel Drive",
      engines: "4D33, 4D34-T, 4P10 Euro 5/6 Turbo Diesels",
      spares: "Complete cylinder heads, Bosch-spec common rail injectors, M038S5/6 manual transmissions, front stub axles, and brake booster master cylinders.",
    },
    {
      series: "FUSO Fighter (Medium Duty Series)",
      models: "FK 617, FM 657, FM 65F 16-Ton Freight Haulers",
      engines: "6D14, 6D16, 6M60-T High-Output Inline Six",
      spares: "Piston & ring sets, Kingpin kits, Spicer-type propeller shaft universal joints, full-air dual circuit brake valves, and alternator packs.",
    },
    {
      series: "FUSO Super Great (Heavy Duty Series)",
      models: "FP 54, FV 51, FV 54 6x4 Prime Movers & Tippers",
      engines: "6M70, 6R10 (Daimler OM471 Architecture), 8DC9 V8",
      spares: "Turbochargers, heavy clutch kits 430mm, Eaton-Fuller / INOMAT automated transmission parts, planetary hub reduction gears, and multi-leaf spring assemblies.",
    },
    {
      series: "FUSO FJ & FZ (DICV India Export Lineup)",
      models: "FJ 2528C Heavy Tipper • FZ 4928T Tractor Head • FA 914",
      engines: "6.4L Turbo Diesel 280HP (Daimler Euro 3/4/5 Export Spec)",
      spares: "Original Daimler India / FUSO export components: G85 6-speed & G131 9-speed synchronizers, hub seals, Wabco ABS valves, and heavy-duty front bumpers.",
    },
  ];

  return (
    <>
      {/* ====== HERO SECTION ====== */}
      <section
        className="hero"
        style={{
          background: "linear-gradient(to bottom, #11141A 0%, #0A0D11 100%)",
          paddingBottom: "3rem",
        }}
      >
        <div className="container">
          <div className="hero__label" style={{ color: "var(--safety)", borderColor: "var(--safety)" }}>
            // GLOBAL EXPORT DIVISION • VIKING TRADELINKS SINCE 1969
          </div>

          <h1 className="hero__title" style={{ fontSize: "var(--fs-h1)", marginBottom: "1.2rem", color: "#FFF" }}>
            Exports of Indian Truck &amp; Bus Brands<br />
            <span style={{ color: "var(--safety)" }}>&amp; FUSO Commercial Fleets.</span>
          </h1>

          <p style={{ maxWidth: "840px", fontSize: "1.1rem", lineHeight: "1.8", color: "rgba(255,255,255,0.85)", marginBottom: "2.5rem" }}>
            Supplying genuine OEM and certified replacement spare parts for all major Indian commercial vehicle manufacturers
            and the Mitsubishi FUSO Daimler Truck global export lineup. Shipped to over 45+ countries worldwide within 7 days.
          </p>

          {/* User Requested Image Showcase 1 & 2 in Industrial Comparison Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
            {/* Left Image: Indian Truck Brands Collage */}
            <div
              style={{
                border: "4px solid var(--safety)",
                boxShadow: "8px 8px 0px #000",
                background: "#FFF",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ background: "#090A0D", padding: "1rem 1.2rem", borderBottom: "3px solid var(--safety)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="tag tag--safety" style={{ fontWeight: 800 }}>
                  TOP TRUCK BRANDS IN INDIA
                </span>
                <span style={{ color: "#FFF", fontSize: "0.75rem", fontFamily: "var(--font-jetbrains-mono)" }}>
                  BRANDS COLLAGE
                </span>
              </div>

              <div style={{ padding: "1.2rem", background: "#FFF", textAlign: "center" }}>
                <img
                  src="/images/indian-truck-brands-collage.png"
                  alt="Top Truck Brands in India: Mahindra, Eicher, BharatBenz, Volvo, Ashok Leyland, Tata Motors"
                  style={{ width: "100%", height: "auto", maxHeight: "360px", objectFit: "contain", margin: "0 auto", display: "block" }}
                />
              </div>

              <div style={{ background: "#F5F5F0", padding: "1rem 1.2rem", borderTop: "2px solid #DDD", fontSize: "0.82rem", color: "#333" }}>
                <strong>Key Indian OEMs Covered:</strong> Tata Motors, Ashok Leyland, BharatBenz, Eicher VECV, Mahindra, Volvo India. Full drivetrain, suspension, and braking assemblies exported globally.
              </div>
            </div>

            {/* Right Image: FUSO & Commercial Brands Collage */}
            <div
              style={{
                border: "4px solid var(--term-green)",
                boxShadow: "8px 8px 0px #000",
                background: "#FFF",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ background: "#090A0D", padding: "1rem 1.2rem", borderBottom: "3px solid var(--term-green)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="tag tag--safety" style={{ background: "var(--term-green)", color: "#000", fontWeight: 800 }}>
                  MITSUBISHI FUSO &amp; COMMERCIAL BRANDS
                </span>
                <span style={{ color: "#FFF", fontSize: "0.75rem", fontFamily: "var(--font-jetbrains-mono)" }}>
                  BRANDS COLLAGE
                </span>
              </div>

              <div style={{ padding: "1.2rem", background: "#FFF", textAlign: "center" }}>
                <img
                  src="/images/fuso-truck-brands-collage.png"
                  alt="Mitsubishi FUSO & Truck Brands: FUSO, SML Isuzu, MAN, Force Motors, AMW, Daimler Truck"
                  style={{ width: "100%", height: "auto", maxHeight: "360px", objectFit: "contain", margin: "0 auto", display: "block" }}
                />
              </div>

              <div style={{ background: "#F5F5F0", padding: "1rem 1.2rem", borderTop: "2px solid #DDD", fontSize: "0.82rem", color: "#333" }}>
                <strong>Mitsubishi FUSO Export Logistics:</strong> Supporting Canter, Fighter, Super Great, and DICV manufactured FJ/FZ trucks exported to Africa, Middle East, and Latin America.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:+919702666664" className="btn btn--primary" style={{ padding: "1rem 2rem", fontSize: "0.95rem" }}>
              📞 Call Export Manager: +91 9702666664
            </a>
            <Link href="/contact" className="btn btn--ghost" style={{ background: "#000", color: "#FFF", borderColor: "#FFF" }}>
              Request Container FCL / LCL Freight Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* ====== LIVE TELEMETRY BAR ====== */}
      <TelemetryBar />

      {/* ====== MITSUBISHI FUSO EXPORT DIVISION BREAKDOWN ====== */}
      <section className="section" style={{ background: "var(--surface)", borderBottom: "4px solid var(--ink)" }}>
        <div className="container">
          <div className="section__eyebrow">// DAIMLER TRUCK GLOBAL EXPORT HUB</div>
          <h2 className="section__title" style={{ fontSize: "var(--fs-h2)", marginBottom: "1rem" }}>
            Mitsubishi FUSO Export Division<span className="accent">.</span>
          </h2>
          <p style={{ maxWidth: "750px", color: "var(--muted)", marginBottom: "2.5rem", lineHeight: "1.7" }}>
            Manufactured in Daimler India Commercial Vehicles (DICV) world-class Oragadam plant and exported worldwide.
            Viking Tradelinks supplies complete OEM replacement components for the entire FUSO Canter, Fighter, Super Great, and FJ/FZ platforms.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.8rem" }}>
            {fusoExportDetails.map((fuso, idx) => (
              <div
                key={idx}
                className="bento-card"
                style={{
                  padding: "1.8rem",
                  background: "#FFF",
                  borderLeft: "6px solid var(--safety)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span className="tag tag--safety" style={{ fontSize: "0.68rem", marginBottom: "0.5rem" }}>
                    FUSO EXPORT SERIES
                  </span>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, margin: "0.4rem 0", fontFamily: "var(--font-space-grotesk)" }}>
                    {fuso.series}
                  </h3>
                  <div style={{ fontSize: "0.82rem", color: "var(--ink)", fontWeight: 700, marginBottom: "0.4rem" }}>
                    Models: {fuso.models}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: "0.8rem", fontFamily: "var(--font-jetbrains-mono)" }}>
                    Engines: {fuso.engines}
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "#444", lineHeight: "1.6" }}>
                    {fuso.spares}
                  </p>
                </div>

                <div style={{ paddingTop: "1rem", marginTop: "1rem", borderTop: "1px solid #EAEAEA" }}>
                  <Link href="/contact" className="btn btn--secondary" style={{ fontSize: "0.75rem", padding: "0.45rem 0.85rem", width: "100%", textAlign: "center" }}>
                    Inquire {fuso.series.split(" ")[1]} Spares →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TOP INDIAN COMMERCIAL VEHICLE BRANDS ====== */}
      <section className="section">
        <div className="container">
          <div className="section__eyebrow">// TOP TRUCK BRANDS IN INDIA 2025</div>
          <h2 className="section__title" style={{ fontSize: "var(--fs-h2)", marginBottom: "2rem" }}>
            Indian Truck &amp; Bus Brand Export Portfolios<span className="accent">.</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "2rem" }}>
            {indianBrands.map((b, idx) => (
              <div
                key={idx}
                className="bento-card"
                style={{
                  padding: "2rem",
                  borderLeft: "6px solid #000",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
                    <span className="tag tag--filled" style={{ fontSize: "0.65rem" }}>{b.badge}</span>
                  </div>

                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.6rem", fontFamily: "var(--font-space-grotesk)" }}>
                    {b.name}
                  </h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.84rem", color: "#444" }}>
                    <div>
                      <strong style={{ color: "var(--ink)", display: "block" }}>Export Models:</strong>
                      <span>{b.models}</span>
                    </div>
                    <div>
                      <strong style={{ color: "var(--ink)", display: "block" }}>Powertrains / Technology:</strong>
                      <span>{b.tech}</span>
                    </div>
                    <div>
                      <strong style={{ color: "var(--safety)", display: "block" }}>Primary Export Destinations:</strong>
                      <span>{b.markets}</span>
                    </div>
                  </div>
                </div>

                <div style={{ paddingTop: "1rem", marginTop: "1rem", borderTop: "1px solid #EEE", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Link href="/contact" className="btn btn--secondary" style={{ fontSize: "0.75rem", padding: "0.45rem 0.9rem" }}>
                    Request Price List →
                  </Link>
                  <span style={{ fontSize: "0.75rem", color: "var(--term-green)", background: "#000", padding: "2px 8px", fontWeight: 700 }}>
                    DISPATCH: 7 DAYS
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== GLOBAL SHIPPING & LOGISTICS SPECS ====== */}
      <section className="section section--dark" style={{ borderTop: "4px solid var(--safety)", borderBottom: "4px solid var(--safety)" }}>
        <div className="container">
          <div className="section__eyebrow">// INTERNATIONAL FREIGHT SERVICES</div>
          <h2 className="section__title" style={{ fontSize: "var(--fs-h2)", color: "#FFF", marginBottom: "2rem" }}>
            Worldwide Export Capabilities &amp; Standards<span className="accent">.</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "#111", border: "2px solid rgba(255,255,255,0.15)", padding: "1.5rem", color: "#FFF" }}>
              <div style={{ fontSize: "1.8rem", color: "var(--safety)", marginBottom: "0.5rem" }}>✈️</div>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "0.4rem" }}>7-Day Express Air Freight</h4>
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}>
                Direct air cargo connections via Mumbai (BOM) &amp; Delhi (DEL) to Dubai, Riyadh, Nairobi, Johannesburg, and London.
              </p>
            </div>

            <div style={{ background: "#111", border: "2px solid rgba(255,255,255,0.15)", padding: "1.5rem", color: "#FFF" }}>
              <div style={{ fontSize: "1.8rem", color: "var(--safety)", marginBottom: "0.5rem" }}>🚢</div>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "0.4rem" }}>Sea Container FCL &amp; LCL</h4>
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}>
                20ft &amp; 40ft high-cube sea containers dispatched from Nhava Sheva (JNPT) port with specialized moisture-barrier packing.
              </p>
            </div>

            <div style={{ background: "#111", border: "2px solid rgba(255,255,255,0.15)", padding: "1.5rem", color: "#FFF" }}>
              <div style={{ fontSize: "1.8rem", color: "var(--safety)", marginBottom: "0.5rem" }}>📋</div>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "0.4rem" }}>Full Export Documentation</h4>
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}>
                Chamber of Commerce Certificate of Origin (COO), commercial invoices, packing lists, and ISPM 15 heat-treated pallets.
              </p>
            </div>

            <div style={{ background: "#111", border: "2px solid rgba(255,255,255,0.15)", padding: "1.5rem", color: "#FFF" }}>
              <div style={{ fontSize: "1.8rem", color: "var(--safety)", marginBottom: "0.5rem" }}>🛡️</div>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "0.4rem" }}>Transit Cargo Insurance</h4>
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}>
                110% CIF comprehensive marine and air cargo insurance covering damage, delay, and loss from warehouse to destination door.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
