"use client";

import { useState } from "react";
import Link from "next/link";
import TelemetryBar from "@/components/TelemetryBar";
import { useRfq } from "@/context/RfqContext";

export default function ElectricVehiclesPage() {
  const { addItem, setIsDrawerOpen } = useRfq();
  const [inquiryBrand, setInquiryBrand] = useState("all");
  const [addedItem, setAddedItem] = useState(null);

  const evLeaders = [
    {
      id: "jbm",
      name: "JBM Group",
      flagship: "JBM ECOLIFE Electric Low-Floor City Buses (9m & 12m)",
      standRole: "Depot Fast-Charging & Pantograph Inverted Stand Systems",
      systems: [
        "ZF AV133 Electric Portal Drive Axle Parts & Differential Seals",
        "Roof Pantograph Carbon Contact Strips & Actuator Arms",
        "HV Battery Pack Liquid Thermal Loops & 24V Auxiliary Pumps",
        "Electronic Kneeling Pneumatic ECAS Suspension Valves",
      ],
      badge: "CLEAN GREEN TRANSIT SPECIALIST",
    },
    {
      id: "olectra",
      name: "Olectra Greentech",
      flagship: "Olectra K9, C9 Intercity Coach & CX2 Multi-Axle",
      standRole: "Dual-Gun CCS2 Depot Fast-Charging Stand Inlets (Up to 300kW)",
      systems: [
        "LFP Battery Thermal Jacket Connectors & Coolant Manifolds",
        "High-Coeff Bremskerl ECE R90 Regenerative Disc Brake Pads",
        "Electric Hydraulic Power Steering (EHPS) 600V Motor-Pumps",
        "Direct-Drive Wheel Hub Motor Seals & Bearing Assemblies",
      ],
      badge: "INDIA'S PIONEER E-BUS FLEET",
    },
    {
      id: "pmi",
      name: "PMI Electro Mobility",
      flagship: "PMI 7m, 9m & 12m High-Efficiency Electric Transit Buses",
      standRole: "Rapid Opportunity Charging Stand Compatible",
      systems: [
        "Direct-Drive Permanent Magnet Traction Motor Mounting Dampers",
        "Knorr-Bremse Electronic Braking System (EBS) Modulators",
        "High-Voltage Battery Disconnect Units (BDU) & Pyro-Fuses",
        "Auxiliary Rotary Scroll Electric Air Compressors (10 Bar)",
      ],
      badge: "ZERO EMISSION PUBLIC TRANSIT",
    },
    {
      id: "switch",
      name: "Switch Mobility",
      flagship: "Switch EiV 12 & Switch EiV 22 Double Decker EV",
      standRole: "Automated Depot Charging & High-Duty Opportunity Stands",
      systems: [
        "Permanent Magnet Synchronous Motor (PMSM) Stator Sensors",
        "Lightweight Composite Body Structure Panels & Door Actuators",
        "Multi-Stage DC-DC Converters (600V to 24V / 12V)",
        "Reinforced Heavy-Duty Front Steering Knuckles & Kingpins",
      ],
      badge: "GLOBAL NEXT-GEN ELECTRIC CVs",
    },
    {
      id: "tata",
      name: "Tata Motors EV",
      flagship: "Starbus EV, Ultra 9m/12m EV & Prima Electric Tippers",
      standRole: "Ultra-Fast Depot Charging Hubs & Standard CCS2 Stands",
      systems: [
        "Liquid-Cooled Motor Inverter Assembly & Gate Driver Kits",
        "Brake Energy Recuperation Blending Valves & Pressure Sensors",
        "High-Torque e-Drive Planetary Gear Reduction Units",
        "Smart Battery Management System (BMS) Telematics Harnesses",
      ],
      badge: "NATIONAL FLEET ELECTRIFICATION",
    },
  ];

  const evComponents = [
    {
      id: "ev-ccs2-inlet",
      name: "Depot Charging Stand Heavy CCS2 250A/300A Vehicle Inlet",
      partNumber: "VK-EV-CCS2-300",
      brand: "Universal EV Stand",
      category: "Charging Infrastructure",
      desc: "Waterproof IP67 DC fast-charging inlet assembly with dual DC pins, temperature thermistors, and safety locking pin for high-duty depot charging stands.",
      price: "₹ 48,500",
    },
    {
      id: "ev-panto-strip",
      name: "Roof Pantograph Copper-Impregnated Carbon Contact Strips",
      partNumber: "VK-EV-PANT-78",
      brand: "JBM / Switch / Olectra",
      category: "Stand & Pantograph",
      desc: "High-conductivity replaceable contact shoe designed for overhead depot charging mast stands. Resists high-temperature arcing up to 600A continuous.",
      price: "₹ 24,000",
    },
    {
      id: "ev-regen-pads",
      name: "Heavy-Duty Regenerative Compound Disc Brake Pad Set",
      partNumber: "VK-EV-BRK-432",
      brand: "Bremskerl / OEM Grade",
      category: "Braking & Safety",
      desc: "ECE R90 certified pad material formulated specifically for electric buses with high regenerative retardation torque and lower disc abrasion.",
      price: "₹ 16,800",
    },
    {
      id: "ev-coolant-pump",
      name: "Brushless 24V/600V Battery Thermal Management Coolant Pump",
      partNumber: "VK-EV-THRM-92",
      brand: "Universal Bus Fleet",
      category: "Thermal Loops",
      desc: "Magnetic drive seal-less pump delivering 120 L/min glycol flow to keep battery packs and traction inverters at optimal 25°C-35°C operating windows.",
      price: "₹ 38,200",
    },
  ];

  const handleAdd = (item) => {
    addItem({
      id: item.id,
      name: item.name,
      partNumber: item.partNumber,
      brand: item.brand,
      category: item.category,
      price: item.price,
      quantity: 1,
    });
    setAddedItem(item.id);
    setTimeout(() => setAddedItem(null), 1800);
  };

  return (
    <>
      {/* ====== EV HERO SECTION ====== */}
      <section
        className="hero"
        style={{
          background: "linear-gradient(to bottom, #050E09 0%, #0A1B14 50%, #090A0D 100%)",
          paddingBottom: "3rem",
        }}
      >
        <div className="container">
          <div className="hero__label" style={{ color: "var(--term-green)", borderColor: "var(--term-green)" }}>
            // ELECTRIC FLEET & COMMERCIAL VEHICLE DIVISION • VIKING GROUP
          </div>

          <h1 className="hero__title" style={{ fontSize: "var(--fs-h1)", marginBottom: "1.2rem", color: "#FFF" }}>
            Electric Buses &amp;<br />
            <span style={{ color: "var(--term-green)" }}>Charging Stand Infrastructure.</span>
          </h1>

          <p style={{ maxWidth: "820px", fontSize: "1.1rem", lineHeight: "1.8", color: "rgba(255,255,255,0.85)", marginBottom: "2.5rem" }}>
            Supplying critical replacement parts, regenerative braking components, pantograph contacts,
            and thermal loop hardware for India&apos;s leading electric bus fleet operators and automated depot charging stands.
          </p>

          {/* User Requested Image Showcase: evbuses.jpeg */}
          <div
            style={{
              border: "4px solid var(--term-green)",
              boxShadow: "10px 10px 0px #000",
              background: "#FFF",
              marginBottom: "2.5rem",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "1.5rem", background: "#090A0D", borderBottom: "3px solid var(--term-green)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <span className="tag tag--safety" style={{ background: "var(--term-green)", color: "#000", fontWeight: 800 }}>
                  ⚡ LEADING ELECTRIC BUS STAND &amp; FLEET COMPANIES
                </span>
                <h3 style={{ color: "#FFF", fontSize: "1.25rem", margin: "0.5rem 0 0 0", fontFamily: "var(--font-space-grotesk)" }}>
                  JBM Group • Olectra Greentech • PMI Electro • Switch Mobility • Tata Motors
                </h3>
              </div>
              <span className="tag tag--filled" style={{ background: "#222", color: "var(--term-green)", borderColor: "var(--term-green)" }}>
                PARTS &amp; CHARGING STAND SUPPORT ACTIVE
              </span>
            </div>

            <div style={{ position: "relative", width: "100%", background: "#FFFFFF", padding: "1.5rem", textAlign: "center" }}>
              <img
                src="/images/evbuses.jpeg"
                alt="Leading Companies of Electric Bus Stand: JBM Group, Olectra, PMI, SWITCH, TATA"
                style={{
                  maxWidth: "850px",
                  width: "100%",
                  height: "auto",
                  margin: "0 auto",
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </div>

            <div style={{ background: "#090A0D", padding: "1rem 1.5rem", color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", borderTop: "1px solid rgba(255,255,255,0.15)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
              <span>✓ Supporting Over 8,500+ Electric Buses in Municipal &amp; Intercity Service</span>
              <span>✓ High-Voltage Safety Certified • 24h Emergency Dispatch</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:+919702666664" className="btn btn--primary" style={{ background: "var(--term-green)", color: "#000", border: "2px solid #FFF", fontWeight: 800 }}>
              📞 Call EV Parts Specialist: +91 9702666664
            </a>
            <Link href="/parts" className="btn btn--ghost" style={{ background: "#000", color: "#FFF", borderColor: "var(--term-green)" }}>
              Browse Complete Catalogue →
            </Link>
          </div>
        </div>
      </section>

      {/* ====== LIVE TELEMETRY BAR ====== */}
      <TelemetryBar />

      {/* ====== DETAILED PROFILES OF THE 5 LEADING EV BUS COMPANIES ====== */}
      <section className="section">
        <div className="container">
          <div className="section__eyebrow">// FLEET &amp; CHARGING STAND ARCHITECTURE</div>
          <h2 className="section__title" style={{ fontSize: "var(--fs-h2)", marginBottom: "2rem" }}>
            Leading Electric Bus Stand &amp; Fleet Systems<span className="accent">.</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "2rem" }}>
            {evLeaders.map((leader) => (
              <div
                key={leader.id}
                className="bento-card"
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderLeft: "6px solid var(--term-green)",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
                    <span className="tag tag--safety" style={{ background: "var(--term-green)", color: "#000", fontSize: "0.68rem" }}>
                      {leader.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.4rem", fontFamily: "var(--font-space-grotesk)" }}>
                    {leader.name}
                  </h3>

                  <div style={{ fontSize: "0.85rem", color: "var(--safety)", fontWeight: 700, marginBottom: "1rem" }}>
                    Flagship: {leader.flagship}
                  </div>

                  <div style={{ background: "var(--surface)", padding: "0.8rem", borderLeft: "3px solid #000", marginBottom: "1.2rem", fontSize: "0.82rem" }}>
                    <strong>Charging Stand Integration:</strong>
                    <div style={{ color: "#333", marginTop: "2px" }}>{leader.standRole}</div>
                  </div>

                  <div>
                    <strong style={{ fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)", display: "block", marginBottom: "0.5rem" }}>
                      Key Spare Parts &amp; Subassemblies:
                    </strong>
                    <ul style={{ paddingLeft: "1.2rem", fontSize: "0.82rem", color: "#444", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                      {leader.systems.map((sys, idx) => (
                        <li key={idx}>{sys}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ paddingTop: "1.2rem", marginTop: "1.2rem", borderTop: "1px solid #EEE", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Link href="/contact" className="btn btn--secondary" style={{ fontSize: "0.76rem", padding: "0.45rem 0.9rem" }}>
                    Inquire {leader.name} Spares →
                  </Link>
                  <span style={{ fontSize: "0.75rem", color: "var(--term-green)", background: "#000", padding: "2px 8px", fontWeight: 700 }}>
                    OEM / EQUIV
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== ELECTRIC BUS STAND & CHARGING INFRASTRUCTURE HARDWARE ====== */}
      <section className="section section--dark" style={{ borderTop: "4px solid var(--term-green)", borderBottom: "4px solid var(--term-green)" }}>
        <div className="container">
          <div className="section__eyebrow" style={{ color: "var(--term-green)" }}>// DEPOT &amp; STAND COMPONENTS</div>
          <h2 className="section__title" style={{ fontSize: "var(--fs-h2)", color: "#FFF", marginBottom: "1.5rem" }}>
            High-Demand EV Charging Stand &amp; Fleet Hardware<span className="accent">.</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem" }}>
            {evComponents.map((comp) => (
              <div
                key={comp.id}
                className="part-card"
                style={{
                  background: "#0E1318",
                  border: "2px solid rgba(255,255,255,0.18)",
                  boxShadow: "5px 5px 0px var(--term-green)",
                  padding: "1.4rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  color: "#FFF",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.6rem" }}>
                    <span className="tag tag--filled" style={{ background: "var(--term-green)", color: "#000", fontSize: "0.68rem" }}>
                      {comp.category}
                    </span>
                    <span style={{ fontSize: "0.7rem", color: "#AAA" }}>{comp.brand}</span>
                  </div>

                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0.5rem 0", color: "#FFF", lineHeight: 1.3 }}>
                    {comp.name}
                  </h4>

                  <p style={{ fontSize: "0.78rem", fontFamily: "var(--font-jetbrains-mono)", color: "var(--term-green)", marginBottom: "0.8rem" }}>
                    PART NO: {comp.partNumber}
                  </p>

                  <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: "1rem" }}>
                    {comp.desc}
                  </p>
                </div>

                <div style={{ paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.12)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--term-green)" }}>
                    {comp.price}
                  </div>

                  <button
                    onClick={() => handleAdd(comp)}
                    className="btn btn--primary"
                    style={{
                      fontSize: "0.75rem",
                      padding: "0.45rem 0.85rem",
                      background: addedItem === comp.id ? "var(--safety)" : "var(--term-green)",
                      color: addedItem === comp.id ? "#FFF" : "#000",
                      fontWeight: 800,
                    }}
                  >
                    {addedItem === comp.id ? "✓ Added" : "+ Add to RFQ"}
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
