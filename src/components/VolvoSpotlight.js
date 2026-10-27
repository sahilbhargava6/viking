"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRfq } from "@/context/RfqContext";

export default function VolvoSpotlight() {
  const { addToRfq, setIsDrawerOpen } = useRfq();
  const [activeTab, setActiveTab] = useState("trucks");

  const volvoCategories = [
    {
      id: "trucks",
      title: "VOLVO TRUCKS & HEAVY TIPPERS",
      subtitle: "FH16 • FH12 • FM12 • FM9 • FMX 440/460 Mining Tippers",
      desc: "Complete parts inventory for long-haul prime movers and rugged mining haulers. From 16-liter D16 engines and I-Shift transmissions to high-wear suspension and braking components.",
      badge: "HEAVY HAULAGE & MINING",
      highlights: [
        "Complete D12D / D13A / D16 Engines & Reman Assemblies",
        "Volvo I-Shift AT2612F 12-Speed Gearbox & Clutch Kits",
        "Bremskerl & Meritor Heavy Brake Pads, Discs & Caliper Overhaul Kits",
        "Air Suspension Bellows, Shock Absorbers & V-Stays",
        "Holset & BorgWarner Turbochargers & Charge Air Coolers",
        "Hub Reduction Gears, Axle Shafts & Wheel Bearings (SKF/FAG)",
      ],
      fastSkus: [
        { name: "Volvo FH/FM Bremskerl Brake Pads (21079523)", price: "₹8,500 – ₹14,200", oem: "21079523 / 20568711" },
        { name: "Volvo D13 Cylinder Liner Kit (Mahle)", price: "₹18,500 – ₹24,000", oem: "20762111 / 20876543" },
        { name: "Volvo I-Shift Clutch Kit 430mm (Sachs)", price: "₹38,000 – ₹52,000", oem: "20524947 / 85000902" },
      ]
    },
    {
      id: "buses",
      title: "VOLVO LUXURY BUSES & COACHES",
      subtitle: "B7R • B9R • B11R • 9400 • 9600 Multi-Axle Intercity Sleeper",
      desc: "Trusted by India's premier fleet operators (KSRTC, VRL, SRS, Taj Travels) for zero-downtime scheduled maintenance and emergency breakdown dispatch across national corridors.",
      badge: "PREMIUM INTERCITY FLEETS",
      highlights: [
        "Front & Tag Axle Air Springs (Contitech & Phoenix)",
        "Knorr-Bremse & Wabco EBS / ABS Modulators & Leveling Valves",
        "Steering Drag Links, Kingpin Kits & Tie Rod Ends (Lemförder)",
        "Voith & ZF Retarder Oil Seals, Friction Discs & Solenoids",
        "Bus Air Conditioning Compressor Units, Belts & Tensioners",
        "Volvo D9B / D11K Euro 4/5/6 Injection Nozzles & Sensors",
      ],
      fastSkus: [
        { name: "Volvo B9R/B11R Air Spring Bellow (Contitech)", price: "₹4,200 – ₹7,800", oem: "20582215 / 21961443" },
        { name: "Volvo Bus Kingpin Repair Kit (Febi/Lemförder)", price: "₹9,800 – ₹16,500", oem: "3092454 / 20743211" },
        { name: "Volvo EBS Wheel Speed Sensor & Valve (Wabco)", price: "₹3,400 – ₹6,100", oem: "20528660 / 4410328080" },
      ]
    },
    {
      id: "penta",
      title: "VOLVO PENTA MARINE & INDUSTRIAL",
      subtitle: "D7 • D9 • D13 • D16 Marine Propulsion, Auxiliaries & Gensets",
      desc: "Heavy industrial engines powering harbor tugs, commercial fishing vessels, offshore barges, mining excavators, and critical data center backup power generators.",
      badge: "PROPULSION & OFFSHORE",
      highlights: [
        "Genuine Marine Raw Water Cooling Pumps & Impellers",
        "Bosch Common Rail High-Pressure Pumps & Injector Units",
        "Cylinder Head Gasket Sets & Valve Mechanism Overhaul Kits",
        "Charge Air Heat Exchangers & Marine Manifolds",
        "Electronic Unit Injectors (EUI) & Engine Control ECMs",
        "Factory 24-Month Warranty on Precision Rebuilt Long Blocks",
      ],
      fastSkus: [
        { name: "Volvo Penta D13 Marine Impeller Raw Water Pump", price: "₹12,400 – ₹19,800", oem: "3838288 / 21730344" },
        { name: "Volvo Penta EUI Electronic Fuel Injector (Bosch)", price: "₹24,500 – ₹36,000", oem: "21340612 / 0414703003" },
        { name: "Volvo Penta D16 Complete Gasket Set (Elring)", price: "₹18,000 – ₹27,500", oem: "20785671 / 20512933" },
      ]
    }
  ];

  const currentData = volvoCategories.find(c => c.id === activeTab) || volvoCategories[0];

  return (
    <section className="section volvo-spotlight-section" id="volvo-specialization" style={{ background: "#14171E", color: "#FFFFFF", borderBottom: "4px solid var(--burgundy)" }}>
      <div className="container">
        
        {/* Header Ribbon */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1.2rem", marginBottom: "2.5rem" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(197, 160, 89, 0.12)", border: "1px solid var(--gold)", padding: "0.35rem 0.9rem", marginBottom: "0.8rem" }}>
              <span style={{ fontSize: "1rem" }}>🇸🇪</span>
              <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.76rem", fontWeight: 800, color: "var(--gold)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                FLAGSHIP ENGINEERING SPECIALIZATION
              </span>
            </div>
            <h2 className="section__title" style={{ color: "#FFFFFF", fontSize: "clamp(2rem, 4vw, 3.2rem)", margin: "0.4rem 0 0.8rem 0" }}>
              VOLVO SPECIALIST HUB<span className="accent" style={{ color: "var(--gold)" }}>.</span>
            </h2>
            <p style={{ maxWidth: "800px", fontSize: "clamp(0.95rem, 1.2vw, 1.15rem)", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
              Viking Tradelinks is India&apos;s foremost independent authority on <strong style={{ color: "#FFFFFF" }}>Volvo Commercial Vehicles &amp; Volvo Penta Marine</strong> platforms. 
              With 55+ years of Viking Group heritage, official <strong style={{ color: "var(--gold)" }}>Volvo IMPACT EPC</strong> chassis-exact matching, and an exhaustive inventory of genuine OEM replacement parts, we power the nation&apos;s leading fleets.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", alignItems: "flex-start" }}>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <span className="tag tag--safety" style={{ fontSize: "0.72rem", padding: "4px 10px", background: "var(--burgundy)", borderColor: "var(--burgundy)" }}>3,500+ VOLVO SKUs EX-STOCK</span>
              <span className="tag tag--blue" style={{ fontSize: "0.72rem", padding: "4px 10px", background: "var(--grey-800)", borderColor: "var(--gold)" }}>IMPACT EPC CERTIFIED</span>
            </div>
            <div style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-jetbrains-mono)" }}>
              // CHASSIS CODES: YV2 • YV1 • FH • FM • FMX • B7R • B9R • B11R
            </div>
          </div>
        </div>

        {/* Interactive Platform Tabs */}
        <div className="volvo-tabs" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0.8rem", marginBottom: "2rem" }}>
          {volvoCategories.map((cat) => {
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  background: isSelected ? "var(--burgundy)" : "#1C2029",
                  color: isSelected ? "#FFFFFF" : "rgba(255,255,255,0.8)",
                  border: isSelected ? "3px solid var(--gold)" : "2px solid rgba(255,255,255,0.15)",
                  padding: "1.1rem 1.4rem",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  boxShadow: isSelected ? "6px 6px 0px var(--gold-dark)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.35rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.1em", color: isSelected ? "#000" : "var(--term-green)", background: isSelected ? "#FFF" : "rgba(0,255,102,0.1)", padding: "2px 6px" }}>
                    {cat.badge}
                  </span>
                  <span style={{ fontSize: "1.1rem", fontWeight: 900 }}>{isSelected ? "▶" : "+"}</span>
                </div>
                <div style={{ fontWeight: 800, fontSize: "1.05rem", letterSpacing: "0.03em", fontFamily: "var(--font-space-grotesk)" }}>
                  {cat.title}
                </div>
                <div style={{ fontSize: "0.78rem", opacity: 0.85, fontFamily: "var(--font-jetbrains-mono)" }}>
                  {cat.subtitle.split("•")[0]} &amp; related
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Platform Detail Bento Card */}
        <div
          className="bento-card volvo-detail-card"
          style={{
            background: "#181B24",
            border: "3px solid var(--burgundy)",
            boxShadow: "8px 8px 0px rgba(0, 0, 0, 0.35)",
            padding: "clamp(1.5rem, 3.5vw, 3rem)",
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "2rem",
            alignItems: "center"
          }}
        >
          {/* Left Column: Platform Highlights & Capabilities */}
          <div className="volvo-detail-col-left" style={{ gridColumn: "span 7" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.6rem" }}>
              <span className="tag tag--safety" style={{ background: "var(--burgundy)", borderColor: "var(--gold)" }}>{currentData.badge}</span>
              <span style={{ fontSize: "0.78rem", color: "var(--term-green)", fontFamily: "var(--font-jetbrains-mono)", fontWeight: 700 }}>
                ✓ 24-HR DESPATCH GUARANTEE
              </span>
            </div>
            
            <h3 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", color: "#FFFFFF", marginBottom: "0.6rem" }}>
              {currentData.title}
            </h3>
            <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "0.92rem", fontFamily: "var(--font-jetbrains-mono)", marginBottom: "1rem" }}>
              {currentData.subtitle}
            </p>
            <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
              {currentData.desc}
            </p>

            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.12em", fontWeight: 800, marginBottom: "0.8rem", textTransform: "uppercase" }}>
                // KEY VOLVO COMPONENT SYSTEMS IN STOCK:
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.6rem" }}>
                {currentData.highlights.map((h, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.9)" }}>
                    <span style={{ color: "var(--gold)", fontWeight: 900 }}>▸</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", paddingTop: "0.5rem" }}>
              <Link href="/parts?brand=volvo" className="btn btn--primary" style={{ padding: "0.8rem 1.6rem" }}>
                <span>EXPLORE ALL VOLVO PARTS ({currentData.id === 'trucks' ? '1,800+' : currentData.id === 'buses' ? '950+' : '750+'} SKUs) →</span>
              </Link>
              <a href="https://wa.me/919702666664?text=Hi%20Viking%20Tradelinks,%20I%20need%20pricing%20and%20availability%20for%20Volvo%20spare%20parts." target="_blank" rel="noopener noreferrer" className="btn btn--dark" style={{ border: "2px solid #25D366", color: "#25D366" }}>
                <span>💬 VOLVO WHATSAPP DESK</span>
              </a>
            </div>
          </div>

          {/* Right Column: Fast-Moving SKUs & 1-Click RFQ Basket */}
          <div className="volvo-detail-col-right" style={{ gridColumn: "span 5", background: "#11141C", border: "2px solid rgba(197,160,89,0.3)", padding: "1.5rem", boxShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "0.8rem", marginBottom: "1rem" }}>
              <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.78rem", fontWeight: 800, color: "var(--gold)", letterSpacing: "0.1em" }}>
                ⚡ FAST-MOVING VOLVO REPLACEMENTS
              </span>
              <span className="tag tag--filled" style={{ fontSize: "0.65rem", padding: "2px 6px" }}>IMMEDIATE DISPATCH</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {currentData.fastSkus.map((sku, idx) => (
                <div key={idx} style={{ background: "#181C26", border: "1px solid rgba(255,255,255,0.12)", padding: "0.9rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#FFFFFF" }}>
                    {sku.name}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.76rem" }}>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-jetbrains-mono)" }}>
                      OEM Ref: <strong style={{ color: "#FFF" }}>{sku.oem}</strong>
                    </span>
                    <span style={{ color: "var(--safety)", fontWeight: 800, fontFamily: "var(--font-jetbrains-mono)" }}>
                      {sku.price}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      addToRfq({
                        id: `volvo-${idx}-${sku.oem.replace(/\s+/g, '')}`,
                        title: sku.name,
                        partNumber: sku.oem,
                        brand: "Volvo",
                        priceRange: sku.price,
                      });
                      setIsDrawerOpen(true);
                    }}
                    className="btn btn--ghost btn--sm"
                    style={{ marginTop: "0.4rem", width: "100%", justifyContent: "center", padding: "0.45rem" }}
                  >
                    + ADD TO RFQ BASKET
                  </button>
                </div>
              ))}
            </div>

            {/* Official EPC Verification Callout */}
            <div style={{ marginTop: "1.2rem", padding: "0.8rem", background: "rgba(0, 102, 204, 0.12)", border: "1px dashed #0066CC", fontSize: "0.76rem", lineHeight: 1.5, color: "rgba(255,255,255,0.9)" }}>
              <strong style={{ color: "#3399FF" }}>Volvo IMPACT EPC Assisted:</strong> Have a specific Volvo chassis or VIN? Our engineering desk verifies parts directly against the Volvo factory electronic parts catalog before quoting.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
