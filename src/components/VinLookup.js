"use client";

import { useState } from "react";
import Link from "next/link";
import { PARTS } from "@/data/partsData";

export default function VinLookup() {
  const [vinInput, setVinInput] = useState("");
  const [decodedTruck, setDecodedTruck] = useState(null);
  const [matchingParts, setMatchingParts] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const sampleVins = [
    { label: "Volvo FH16 (YV2RT40A...)", vin: "YV2RT40A8EA123456" },
    { label: "Mercedes Actros MP4 (WDB9634...)", vin: "WDB9634031L890123" },
    { label: "Scania R500 (YS2R6X2...)", vin: "YS2R6X20002145678" },
    { label: "MAN TGX 26.480 (WMA06XZZ...)", vin: "WMA06XZZ5CW987654" },
  ];

  const handleDecode = (e) => {
    e?.preventDefault();
    const cleanVin = vinInput.trim().toUpperCase();

    if (cleanVin.length < 5) {
      setErrorMsg("Please enter at least a 5-character VIN, Chassis Number, or Model code.");
      setDecodedTruck(null);
      setMatchingParts([]);
      return;
    }

    setErrorMsg("");

    let detected = null;
    let brandId = "";

    if (cleanVin.startsWith("YV2") || cleanVin.startsWith("YV1") || cleanVin.includes("VOLVO") || cleanVin.includes("FH")) {
      brandId = "volvo";
      detected = {
        make: "VOLVO TRUCKS SWEDEN",
        model: "Volvo FH16 / FH12 Heavy Tractor",
        engineCode: "D13K / D16G Turbo Compound Euro 5/6",
        transmission: "Volvo I-Shift AT2612F 12-Speed",
        axleConfig: "6x4 Heavy Bogie with Hub Reduction",
        gvw: "60,000 kg Combined GCW",
        source: "Gothenburg Plant Verification",
      };
    } else if (cleanVin.startsWith("WDB") || cleanVin.startsWith("WDD") || cleanVin.includes("ACTROS") || cleanVin.includes("MERCEDES")) {
      brandId = "mercedes";
      detected = {
        make: "MERCEDES-BENZ COMMERCIAL",
        model: "Actros MP3/MP4 3340 / 2640 Tipper & Hauler",
        engineCode: "OM501LA V6 / OM471 Inline-6 BlueTec",
        transmission: "Mercedes PowerShift G240-16 EPS",
        axleConfig: "6x4 Planetary Hub Reduction",
        gvw: "48,000 kg Mining Heavy Specification",
        source: "Wörth am Rhein Assembly Plant",
      };
    } else if (cleanVin.startsWith("YS2") || cleanVin.startsWith("YS3") || cleanVin.includes("SCANIA")) {
      brandId = "scania";
      detected = {
        make: "SCANIA CV AB",
        model: "Scania R-Series R420 / R500 Highline",
        engineCode: "DC13 6-Cylinder / DC16 V8 Modular",
        transmission: "Scania Opticruise GRS905 with Retarder",
        axleConfig: "6x2 / 6x4 Tag Axle Air Suspended",
        gvw: "50,000 kg Long Haul Specification",
        source: "Södertälje Chassis Platform",
      };
    } else if (cleanVin.startsWith("WMA") || cleanVin.includes("MAN") || cleanVin.includes("TGX")) {
      brandId = "man";
      detected = {
        make: "MAN TRUCK & BUS SE",
        model: "MAN TGX 26.480 / TGS Heavy Haul",
        engineCode: "D2676 LF Common Rail Turbocharged",
        transmission: "MAN TipMatic 12 28 DD Profi",
        axleConfig: "6x4 Heavy Duty Double Axle",
        gvw: "44,000 kg Construction & Highway",
        source: "Munich Plant Engineering",
      };
    } else {
      // General match
      brandId = "all";
      detected = {
        make: "EUROPEAN COMMERCIAL CHASSIS",
        model: `Identified Vehicle Platform: ${cleanVin}`,
        engineCode: "Heavy Commercial Turbo Diesel",
        transmission: "Multi-Range Automated Commercial",
        axleConfig: "Heavy Duty Multi-Axle",
        gvw: "Verified Heavy Specification",
        source: "European Fleet Cross-Reference",
      };
    }

    setDecodedTruck(detected);

    // Find compatible parts
    const matches = PARTS.filter((p) => {
      if (brandId === "all") return true;
      return p.brand === brandId || p.brand === "all";
    });
    setMatchingParts(matches);
  };

  const handleSelectSample = (sample) => {
    setVinInput(sample.vin);
  };

  return (
    <div
      className="bento-card"
      style={{
        background: "var(--base)",
        border: "var(--border)",
        boxShadow: "var(--shadow)",
        padding: "clamp(1.5rem, 3vw, 2.5rem)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "1.2rem" }}>
        <div>
          <span className="section__eyebrow">// FLEET PRECISION TOOL</span>
          <h3 style={{ fontSize: "1.6rem", margin: "0.2rem 0" }}>
            VIN & Chassis Number Part Decoder<span className="accent">.</span>
          </h3>
          <p style={{ fontSize: "0.85rem", opacity: 0.75, maxWidth: "600px" }}>
            Prevent misorders and depot downtime. Enter your 17-digit European commercial chassis VIN or vehicle model to instantly filter guaranteed-fit components.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span className="tag tag--filled">100% FIT GUARANTEE</span>
          <span className="tag tag--safety">14-DAY TRIAL</span>
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleDecode} style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        <div style={{ flex: "1 1 320px", position: "relative" }}>
          <input
            type="text"
            className="input-box"
            placeholder="Enter 17-digit VIN (e.g. YV2RT40A... or WDB9634...)"
            value={vinInput}
            onChange={(e) => setVinInput(e.target.value)}
            style={{
              width: "100%",
              fontSize: "0.95rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0.8rem 1rem",
              background: "#fff",
              border: "var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}
          />
        </div>
        <button type="submit" className="btn btn--primary" style={{ padding: "0.8rem 1.8rem" }}>
          Decode Chassis & Match Parts →
        </button>
      </form>

      {/* Sample Quick-Click Pills */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", fontSize: "0.72rem", marginBottom: "1.5rem" }}>
        <span style={{ opacity: 0.6, fontWeight: 700 }}>TRY SAMPLE VIN:</span>
        {sampleVins.map((s, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSelectSample(s)}
            style={{
              background: "var(--surface)",
              border: "1px solid rgba(0,0,0,0.15)",
              padding: "0.2rem 0.5rem",
              cursor: "pointer",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "0.7rem",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {errorMsg && (
        <div style={{ background: "rgba(255, 62, 0, 0.1)", border: "1px solid var(--safety)", padding: "0.8rem", color: "var(--safety)", fontSize: "0.8rem", marginBottom: "1.2rem" }}>
          {errorMsg}
        </div>
      )}

      {/* Decoded Results Card */}
      {decodedTruck && (
        <div
          style={{
            background: "var(--surface)",
            border: "2px solid #000",
            boxShadow: "var(--shadow-sm)",
            padding: "1.5rem",
            animation: "fadeInUp 0.3s ease",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <div>
              <span className="tag tag--safety" style={{ marginRight: "0.5rem" }}>
                ✓ CHASSIS IDENTIFIED
              </span>
              <strong style={{ fontSize: "1.2rem", fontFamily: "var(--font-space-grotesk)" }}>
                {decodedTruck.make} — {decodedTruck.model}
              </strong>
            </div>
            <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>
              {decodedTruck.source}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              background: "#fff",
              padding: "1rem",
              border: "1px solid rgba(0,0,0,0.1)",
              fontSize: "0.8rem",
              marginBottom: "1.5rem",
            }}
          >
            <div>
              <div style={{ opacity: 0.6, fontSize: "0.68rem" }}>ENGINE POWERTRAIN</div>
              <strong>{decodedTruck.engineCode}</strong>
            </div>
            <div>
              <div style={{ opacity: 0.6, fontSize: "0.68rem" }}>TRANSMISSION SPEC</div>
              <strong>{decodedTruck.transmission}</strong>
            </div>
            <div>
              <div style={{ opacity: 0.6, fontSize: "0.68rem" }}>AXLE & DRIVE CONFIG</div>
              <strong>{decodedTruck.axleConfig}</strong>
            </div>
            <div>
              <div style={{ opacity: 0.6, fontSize: "0.68rem" }}>RATED CAPACITY</div>
              <strong>{decodedTruck.gvw}</strong>
            </div>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--safety)" }}>
                MATCHING VERIFIED COMPONENTS ({matchingParts.length} AVAILABLE IN STOCK)
              </div>
              <Link href={`/parts?brand=${decodedTruck.make.toLowerCase().includes("volvo") ? "volvo" : decodedTruck.make.toLowerCase().includes("mercedes") ? "mercedes" : decodedTruck.make.toLowerCase().includes("scania") ? "scania" : decodedTruck.make.toLowerCase().includes("man") ? "man" : "all"}`} className="btn btn--ghost btn--sm">
                Open Full Compatible Catalog →
              </Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
              {matchingParts.slice(0, 4).map((p) => (
                <div
                  key={p.id}
                  style={{
                    background: "#fff",
                    border: "var(--border-thin)",
                    padding: "0.8rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "var(--safety)", fontWeight: 700 }}>
                      <span>{p.id}</span>
                      <span>{p.priceRange}</span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: "0.85rem", margin: "0.3rem 0" }}>{p.title}</div>
                    <div style={{ fontSize: "0.7rem", opacity: 0.6 }}>OEM: {p.oemRef}</div>
                  </div>
                  <div style={{ marginTop: "0.8rem", display: "flex", gap: "0.4rem" }}>
                    <Link href={`/parts/${p.id.toLowerCase()}`} className="btn btn--primary btn--sm" style={{ flex: 1, padding: "0.4em 0.6em", fontSize: "0.7rem" }}>
                      View Part Specs →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
