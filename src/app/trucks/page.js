"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TelemetryBar from "@/components/TelemetryBar";
import VinLookup from "@/components/VinLookup";
import TruckExplosionDiagram from "@/components/TruckExplosionDiagram";
import { useRfq } from "@/context/RfqContext";
import { PARTS } from "@/data/partsData";

export default function TrucksPage() {
  const { addItem, isDrawerOpen, setIsDrawerOpen } = useRfq();
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [addedPartId, setAddedPartId] = useState(null);

  const truckParts = PARTS.slice(0, 8);

  const truckFleets = [
    {
      id: "volvo",
      name: "Volvo Trucks (Primary Fleet Flagship)",
      models: "FH16 (750HP) • FH 540 • FM 420 • FMX Mining Tippers • B9R/B11R Coaches",
      engines: "D11, D13A/C/K, D16G/K (Euro 3 to Euro 6) & Volvo Penta",
      transmissions: "I-Shift AT2412, AT2612F, Powertronic Automatic",
      brakes: "Knorr SN7 / SB7 430mm Ventilated Disc Systems & Bremskerl Heavy Pads",
      badge: "⭐ VIKING PRIMARY FLAGSHIP SPECIALIZATION • 3,500+ SKUs EX-STOCK",
      epc: "Volvo IMPACT EPC Verified (Chassis Exact)",
      color: "var(--viking-blue)",
    },
    {
      id: "mercedes",
      name: "Mercedes-Benz Commercial Trucks",
      models: "Actros 2645 • Actros 3340 • Arocs Heavy Haulage • Axor 3340 • Atego",
      engines: "OM471 LA, OM473, OM501LA V6, OM502LA V8",
      transmissions: "Powershift 3 G211, G240-16, G281-12",
      brakes: "Telligent Braking, Bremskerl ECE R90 Heavy Pad Compound",
      badge: "HEAVY HIGHWAY & QUARRY HAULAGE",
      epc: "Mercedes EPC & WIS Verified",
      color: "#1A222D",
    },
    {
      id: "man",
      name: "MAN Commercial Trucks",
      models: "TGX 18.510 • TGS 33.400 / 40.480 • TGA • TGM • TGL",
      engines: "D2066, D2676 Common Rail, D3876 15.2L Six-Cylinder",
      transmissions: "MAN TipMatic (ZF TraXon & AS Tronic), PriTarder Retarder",
      brakes: "MAN BrakeMatic with EBS 5 / ABS, 432mm Cast Discs",
      badge: "GERMAN LOGISTICS WORKHORSE",
      epc: "MAN Mantis EPC Verified",
      color: "#241814",
    },
    {
      id: "renault",
      name: "Renault Trucks",
      models: "T-High 520 • T-Series Long Haul • K-Range Xtrem Construction • C-Range",
      engines: "DTi 11 & DTi 13 High-Torque Euro 6 Powertrains",
      transmissions: "Optidriver Automated Gearbox with Voith Retarder",
      brakes: "EBS Generation 3, Electronic Parking Brake, Heavy Calipers",
      badge: "HEAVY CONSTRUCTION & INTERSTATE FREIGHT",
      epc: "Renault Consult / Impact Verified",
      color: "#182026",
    },
    {
      id: "scania",
      name: "Scania Modular Trucks",
      models: "R-Series (R500/R540) • S-Series Highline • V8 730 • G-Series Tippers",
      engines: "DC13 6-Cylinder Inline & Legendary DC16 V8 16.4L",
      transmissions: "Scania Opticruise GRS905 / GRSO905 with Retarder R4100",
      brakes: "Scania EBS with Disc Brakes All-Round, ECAS Leveling",
      badge: "HIGH-TORQUE MODULAR ARCHITECTURE",
      epc: "Scania Multi EPC Verified",
      color: "#111C24",
    },
  ];

  const handleQuickAdd = (part) => {
    addItem({
      id: part.id,
      name: part.title,
      partNumber: part.oemRef,
      brand: part.brand.toUpperCase(),
      category: part.category,
      price: part.priceRange,
      quantity: 1,
    });
    setAddedPartId(part.id);
    setTimeout(() => setAddedPartId(null), 1800);
  };

  return (
    <>
      {/* ====== TRUCKS HERO BANNER WITH REQUIRED IMAGE ====== */}
      <section
        className="hero"
        style={{
          background: "linear-gradient(to bottom, #090A0D 0%, #15181F 100%)",
          paddingBottom: "3rem",
        }}
      >
        <div className="container">
          <div className="hero__label" style={{ color: "var(--term-green)", borderColor: "var(--term-green)" }}>
            // HEAVY EUROPEAN TRUCK DIVISION • VOLVO • MAN • MERCEDES-BENZ • RENAULT • SCANIA
          </div>

          <h1 className="hero__title" style={{ fontSize: "var(--fs-h1)", marginBottom: "1.2rem", color: "#FFF" }}>
            Heavy Commercial<br />
            <span style={{ color: "var(--safety)" }}>Truck Fleets.</span>
          </h1>

          <p style={{ maxWidth: "820px", fontSize: "1.1rem", lineHeight: "1.8", color: "rgba(255,255,255,0.85)", marginBottom: "2.5rem" }}>
            Precision-engineered OEM replacement parts, drivetrain assemblies, braking systems, and electronic diagnostics
            for European long-haul tractor units and severe-duty mining tippers. Supplied by Viking Group since 1969 with 24-hour domestic dispatch.
          </p>

          {/* User Requested Banner Image Showcase */}
          <div
            style={{
              border: "4px solid var(--safety)",
              boxShadow: "10px 10px 0px var(--ink)",
              position: "relative",
              overflow: "hidden",
              background: "#000",
              marginBottom: "2.5rem",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "auto" }}>
              <img
                src="/images/truck_banner_hd.jpeg"
                alt="European Trucks Fleet: Volvo, MAN, Mercedes-Benz, Renault - Leading European Brands Built For Your Business"
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            {/* Industrial Overlay Badge Bar */}
            <div
              style={{
                background: "rgba(9, 10, 13, 0.95)",
                borderTop: "3px solid var(--safety)",
                padding: "1rem 1.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap" }}>
                <span className="tag tag--safety" style={{ fontWeight: 800, fontSize: "0.82rem" }}>
                  ★ LEADING EUROPEAN BRANDS
                </span>
                <span style={{ color: "#FFF", fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.85rem" }}>
                  VOLVO • MAN • MERCEDES-BENZ • RENAULT • SCANIA
                </span>
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <span className="tag tag--filled">BUILT FOR YOUR BUSINESS</span>
                <span className="tag tag--blue">24-MONTH FLEET WARRANTY</span>
              </div>
            </div>
          </div>

          {/* Quick CTA Action Bar */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/parts?segment=trucks" className="btn btn--primary" style={{ padding: "1rem 2rem", fontSize: "0.95rem" }}>
              Search Truck Parts Catalog (8,500+ Items)
            </Link>
            <a href="tel:+919702666664" className="btn btn--ghost" style={{ background: "#000", color: "#FFF", borderColor: "#FFF" }}>
              📞 Call Fleet Desk: +91 9702666664
            </a>
          </div>
        </div>
      </section>

      {/* ====== LIVE TELEMETRY BAR ====== */}
      <TelemetryBar />

      {/* ====== CHASSIS / VIN LOOKUP WIDGET ====== */}
      <section className="section" style={{ background: "var(--surface)", borderBottom: "4px solid var(--ink)" }}>
        <div className="container">
          <div className="section__eyebrow">// ZERO FITMENT ERRORS</div>
          <h2 className="section__title" style={{ fontSize: "var(--fs-h2)", marginBottom: "1rem" }}>
            Truck VIN & Chassis Lookup<span className="accent">.</span>
          </h2>
          <p style={{ maxWidth: "680px", marginBottom: "2rem", color: "var(--muted)" }}>
            Enter your 17-character truck Chassis / VIN number. Our parts team cross-references live dealer EPC catalogs
            (Volvo IMPACT, Mercedes WIS, MAN Mantis, Scania Multi) to match exact OEM part numbers in minutes.
          </p>

          <VinLookup />
        </div>
      </section>

      {/* ====== EUROPEAN TRUCK FLEETS SPECIFICATION ====== */}
      <section className="section">
        <div className="container">
          <div className="section__eyebrow">// FLEET ARCHITECTURE</div>
          <h2 className="section__title" style={{ fontSize: "var(--fs-h2)", marginBottom: "2.5rem" }}>
            European Commercial Truck Platforms<span className="accent">.</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "2rem" }}>
            {truckFleets.map((fleet) => (
              <div
                key={fleet.id}
                className="bento-card"
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderLeft: `6px solid var(--safety)`,
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                    <span className="tag tag--safety" style={{ fontSize: "0.68rem" }}>{fleet.badge}</span>
                    <span style={{ fontSize: "0.72rem", color: "var(--muted)", fontFamily: "var(--font-jetbrains-mono)" }}>
                      {fleet.epc}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.75rem", fontFamily: "var(--font-space-grotesk)" }}>
                    {fleet.name}
                  </h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
                    <div>
                      <strong style={{ color: "var(--ink)", display: "block" }}>Models Covered:</strong>
                      <span style={{ color: "#444" }}>{fleet.models}</span>
                    </div>
                    <div>
                      <strong style={{ color: "var(--ink)", display: "block" }}>Powertrains / Engines:</strong>
                      <span style={{ color: "#444" }}>{fleet.engines}</span>
                    </div>
                    <div>
                      <strong style={{ color: "var(--ink)", display: "block" }}>Gearbox / Retarders:</strong>
                      <span style={{ color: "#444" }}>{fleet.transmissions}</span>
                    </div>
                    <div>
                      <strong style={{ color: "var(--ink)", display: "block" }}>Braking Architecture:</strong>
                      <span style={{ color: "#444" }}>{fleet.brakes}</span>
                    </div>
                  </div>
                </div>

                <div style={{ paddingTop: "1rem", borderTop: "2px solid #EAEAEA", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Link
                    href={`/parts?brand=${fleet.id}`}
                    className="btn btn--secondary"
                    style={{ fontSize: "0.78rem", padding: "0.5rem 1rem" }}
                  >
                    View {fleet.name.split(" ")[0]} Parts →
                  </Link>
                  <Link
                    href="/contact"
                    style={{ fontSize: "0.78rem", color: "var(--safety)", fontWeight: 700, textDecoration: "underline" }}
                  >
                    Request Assembly
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== INTERACTIVE TRUCK EXPLOSION DIAGRAM ====== */}
      <section className="section section--dark" style={{ borderTop: "4px solid var(--safety)", borderBottom: "4px solid var(--safety)" }}>
        <div className="container">
          <TruckExplosionDiagram />
        </div>
      </section>

      {/* ====== POPULAR TRUCK SPARE PARTS QUICK RFQ ====== */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
            <div>
              <div className="section__eyebrow">// DIRECT INVENTORY</div>
              <h2 className="section__title" style={{ fontSize: "var(--fs-h2)", margin: 0 }}>
                High-Demand Truck Assemblies<span className="accent">.</span>
              </h2>
            </div>
            <Link href="/parts?segment=trucks" className="btn btn--ghost">
              Browse All Truck Parts →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {truckParts.map((part) => (
              <div
                key={part.id}
                className="part-card"
                style={{
                  background: "#FFF",
                  border: "3px solid var(--ink)",
                  boxShadow: "5px 5px 0px var(--ink)",
                  padding: "1.2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <span className="tag tag--filled" style={{ fontSize: "0.68rem" }}>{part.brand}</span>
                    <span style={{ fontSize: "0.68rem", color: "var(--term-green)", background: "#000", padding: "2px 6px", fontWeight: 700 }}>
                      IN STOCK
                    </span>
                  </div>

                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0.4rem 0", lineHeight: 1.25 }}>
                    {part.title}
                  </h4>

                  <p style={{ fontSize: "0.78rem", fontFamily: "var(--font-jetbrains-mono)", color: "var(--muted)", marginBottom: "0.8rem" }}>
                    OEM REF: <strong style={{ color: "var(--ink)" }}>{part.oemRef}</strong>
                  </p>

                  <div style={{ fontSize: "0.82rem", color: "#555", marginBottom: "1rem" }}>
                    Compatibility: {Array.isArray(part.brandCompatibility) ? part.brandCompatibility.join(", ") : part.brandCompatibility}
                  </div>
                </div>

                <div style={{ paddingTop: "0.8rem", borderTop: "1px solid #EEE", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--safety)" }}>
                    {part.priceRange}
                  </div>

                  <button
                    onClick={() => handleQuickAdd(part)}
                    className="btn btn--primary"
                    style={{
                      fontSize: "0.75rem",
                      padding: "0.45rem 0.8rem",
                      background: addedPartId === part.id ? "var(--term-green)" : "var(--safety)",
                      color: addedPartId === part.id ? "#000" : "#FFF",
                    }}
                  >
                    {addedPartId === part.id ? "✓ Added" : "+ Add to RFQ"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
