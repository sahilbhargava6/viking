"use client";

import { useState } from "react";
import Link from "next/link";
import { PARTS } from "@/data/partsData";

export default function TruckExplosionDiagram() {
  const [activeSystem, setActiveSystem] = useState("brakes");

  const systems = [
    {
      id: "brakes",
      name: "Braking & Caliper Circuit",
      code: "SYS-01",
      desc: "Disc calipers, heavy ventilated rotors, Bremskerl pads, ABS sensors & pneumatic relay valves.",
      category: "brakes",
      truckPosition: "Front & Rear Wheel Ends",
      svgCoords: { x: "25%", y: "78%" },
    },
    {
      id: "engine",
      name: "Powertrain & Cylinder Head",
      code: "SYS-02",
      desc: "Cylinder liners, monosteel forged pistons, turbochargers, intercoolers & water pumps.",
      category: "engine",
      truckPosition: "Front Cab Underchassis",
      svgCoords: { x: "28%", y: "45%" },
    },
    {
      id: "transmission",
      name: "Clutch & Gearbox Transmission",
      code: "SYS-03",
      desc: "430mm heavy duty clutch assemblies, slave cylinders, G240-16 / I-Shift gearboxes & retarders.",
      category: "transmission",
      truckPosition: "Mid-Chassis Driveline",
      svgCoords: { x: "42%", y: "58%" },
    },
    {
      id: "drivetrain",
      name: "Driveshaft & Propeller Joint",
      code: "SYS-04",
      desc: "Universal joints, companion flanges, center support bearings & torsional slip yokes.",
      category: "drivetrain",
      truckPosition: "Central Longitudinal Spine",
      svgCoords: { x: "56%", y: "65%" },
    },
    {
      id: "suspension",
      name: "Air Suspension & Bogie Axles",
      code: "SYS-05",
      desc: "Convoluted air spring bellows, heavy hydraulic shock absorbers, leveling valves & leaf packs.",
      category: "suspension",
      truckPosition: "Rear Tandem Drive Bogie",
      svgCoords: { x: "78%", y: "72%" },
    },
    {
      id: "cooling",
      name: "Radiator & Auxiliary Thermal",
      code: "SYS-06",
      desc: "Brazed aluminum radiators, charge air coolers, visco fan clutches & expansion tanks.",
      category: "cooling",
      truckPosition: "Front Grille Heat Exchanger",
      svgCoords: { x: "15%", y: "42%" },
    },
  ];

  const currentSystem = systems.find((s) => s.id === activeSystem) || systems[0];
  const systemParts = PARTS.filter((p) => p.category === currentSystem.category);

  return (
    <div
      className="bento-card bento-card--dark"
      style={{
        border: "var(--border)",
        boxShadow: "var(--shadow)",
        padding: "clamp(1.5rem, 3.5vw, 3rem)",
        background: "#0d0d0d",
        color: "#fff",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
        <div>
          <span className="section__eyebrow" style={{ color: "var(--safety)" }}>// INTERACTIVE SCHEMATIC EXPLORER</span>
          <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", margin: "0.2rem 0", color: "#fff" }}>
            Commercial Truck Sub-System Navigator<span className="accent">.</span>
          </h3>
          <p style={{ fontSize: "0.88rem", opacity: 0.75, maxWidth: "620px", color: "#ccc" }}>
            Navigate European heavy vehicle chassis assemblies by mechanical sub-system. Select any module on the schematic to inspect live stock availability across our hubs.
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <span className="tag tag--filled" style={{ background: "var(--safety)", borderColor: "var(--safety)" }}>
            EUROPEAN 6x4 PLATFORM
          </span>
          <span className="tag tag--ghost" style={{ borderColor: "#444", color: "#aaa" }}>
            VOLVO • MERCEDES • SCANIA • MAN
          </span>
        </div>
      </div>

      {/* Schematic Layout: Left Graphic / Right Detail */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {/* Interactive Schematic Diagram */}
        <div
          style={{
            gridColumn: "span 12",
            position: "relative",
            background: "#161616",
            border: "2px solid #333",
            padding: "2rem 1.5rem",
            overflow: "hidden",
          }}
        >
          {/* Blueprint Grid Lines */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              pointerEvents: "none",
            }}
          />

          {/* SVG Truck Silhouette Outline */}
          <div style={{ position: "relative", width: "100%", height: "240px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg
              viewBox="0 0 900 320"
              style={{ width: "100%", height: "100%", maxHeight: "240px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Chassis outline */}
              <path
                d="M 60,200 L 120,200 L 140,110 L 220,110 L 260,150 L 840,150 L 840,210 L 820,210 L 800,210 L 730,210 L 660,210 L 600,210 L 280,210 L 240,210 L 160,210 L 60,210 Z"
                fill="none"
                stroke="#444"
                strokeWidth="3"
                strokeDasharray="6 4"
              />

              {/* Cab Silhouette */}
              <path
                d="M 120,200 L 130,80 L 190,70 L 260,90 L 260,200"
                fill="none"
                stroke="#666"
                strokeWidth="2"
              />
              {/* Cab Window */}
              <polygon points="140,90 185,82 240,98 240,140 145,140" fill="rgba(255,255,255,0.04)" stroke="#555" strokeWidth="1.5" />

              {/* Wheels */}
              {/* Front Wheel */}
              <circle cx="190" cy="225" r="42" fill="#111" stroke={activeSystem === "brakes" ? "#FF3E00" : "#555"} strokeWidth="4" />
              <circle cx="190" cy="225" r="22" fill="#222" stroke="#777" strokeWidth="2" />

              {/* Rear Bogie Wheel 1 */}
              <circle cx="680" cy="225" r="42" fill="#111" stroke={activeSystem === "suspension" || activeSystem === "brakes" ? "#FF3E00" : "#555"} strokeWidth="4" />
              <circle cx="680" cy="225" r="22" fill="#222" stroke="#777" strokeWidth="2" />

              {/* Rear Bogie Wheel 2 */}
              <circle cx="780" cy="225" r="42" fill="#111" stroke={activeSystem === "suspension" || activeSystem === "brakes" ? "#FF3E00" : "#555"} strokeWidth="4" />
              <circle cx="780" cy="225" r="22" fill="#222" stroke="#777" strokeWidth="2" />

              {/* Engine Block Graphic */}
              <rect
                x="200"
                y="140"
                width="90"
                height="50"
                fill={activeSystem === "engine" ? "rgba(255,62,0,0.3)" : "rgba(255,255,255,0.06)"}
                stroke={activeSystem === "engine" ? "#FF3E00" : "#555"}
                strokeWidth="2"
              />
              <text x="215" y="170" fill={activeSystem === "engine" ? "#FF3E00" : "#888"} fontSize="11" fontFamily="monospace" fontWeight="bold">ENGINE</text>

              {/* Transmission Gearbox */}
              <rect
                x="310"
                y="150"
                width="70"
                height="40"
                fill={activeSystem === "transmission" ? "rgba(255,62,0,0.3)" : "rgba(255,255,255,0.06)"}
                stroke={activeSystem === "transmission" ? "#FF3E00" : "#555"}
                strokeWidth="2"
              />
              <text x="320" y="175" fill={activeSystem === "transmission" ? "#FF3E00" : "#888"} fontSize="10" fontFamily="monospace" fontWeight="bold">GEARBOX</text>

              {/* Driveshaft Propeller */}
              <line
                x1="380"
                y1="170"
                x2="660"
                y2="210"
                stroke={activeSystem === "drivetrain" ? "#FF3E00" : "#666"}
                strokeWidth={activeSystem === "drivetrain" ? "5" : "3"}
              />

              {/* Radiator / Cooling Front */}
              <rect
                x="110"
                y="120"
                width="20"
                height="65"
                fill={activeSystem === "cooling" ? "rgba(255,62,0,0.4)" : "rgba(0,173,239,0.15)"}
                stroke={activeSystem === "cooling" ? "#FF3E00" : "#00ADEF"}
                strokeWidth="2"
              />

              {/* Air Spring Bellows */}
              <ellipse
                cx="680"
                cy="175"
                rx="15"
                ry="22"
                fill={activeSystem === "suspension" ? "rgba(255,62,0,0.4)" : "rgba(0,255,102,0.1)"}
                stroke={activeSystem === "suspension" ? "#FF3E00" : "#00FF66"}
                strokeWidth="2"
              />
              <ellipse
                cx="780"
                cy="175"
                rx="15"
                ry="22"
                fill={activeSystem === "suspension" ? "rgba(255,62,0,0.4)" : "rgba(0,255,102,0.1)"}
                stroke={activeSystem === "suspension" ? "#FF3E00" : "#00FF66"}
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* System Selector Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.6rem",
              marginTop: "1.5rem",
              justifyContent: "center",
              position: "relative",
              zIndex: 2,
            }}
          >
            {systems.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSystem(s.id)}
                style={{
                  background: activeSystem === s.id ? "var(--safety)" : "#222",
                  color: activeSystem === s.id ? "#fff" : "#ccc",
                  border: activeSystem === s.id ? "2px solid #fff" : "1px solid #444",
                  padding: "0.55rem 1rem",
                  fontSize: "0.78rem",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span>{s.code}:</span>
                <span>{s.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Module Detail Panel */}
        <div style={{ gridColumn: "span 12", background: "#1a1a1a", border: "2px solid #333", padding: "1.8rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1.2rem" }}>
            <div>
              <div style={{ color: "var(--safety)", fontSize: "0.75rem", fontWeight: 700 }}>
                {currentSystem.code} • CHASSIS LOCATION: {currentSystem.truckPosition.toUpperCase()}
              </div>
              <h4 style={{ fontSize: "1.4rem", margin: "0.3rem 0", color: "#fff" }}>
                {currentSystem.name}
              </h4>
              <p style={{ fontSize: "0.85rem", opacity: 0.8, maxWidth: "600px", color: "#ddd" }}>
                {currentSystem.desc}
              </p>
            </div>
            <Link
              href={`/parts?category=${currentSystem.category}`}
              className="btn btn--primary btn--sm"
              style={{ padding: "0.6em 1.2em" }}
            >
              Browse All {currentSystem.name} Lines ({systemParts.length}) →
            </Link>
          </div>

          {/* Quick Line Items Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
            {systemParts.map((part) => (
              <div
                key={part.id}
                style={{
                  background: "#242424",
                  border: "1px solid #444",
                  padding: "1rem",
                  display: "flex",
                  gap: "0.8rem",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "#fff",
                    border: "1px solid #555",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    padding: "4px",
                  }}
                >
                  <img
                    src={part.image}
                    alt={part.title}
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                  />
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: "0.7rem", color: "var(--safety)", fontWeight: 700 }}>
                    {part.id} • {part.condition}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      margin: "0.2rem 0",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      color: "#fff",
                    }}
                  >
                    {part.title}
                  </div>
                  <div style={{ fontSize: "0.7rem", opacity: 0.6, color: "#ccc" }}>
                    {part.priceRange}
                  </div>
                  <div style={{ marginTop: "0.5rem" }}>
                    <Link
                      href={`/parts/${part.id.toLowerCase()}`}
                      style={{ fontSize: "0.72rem", color: "var(--safety)", textDecoration: "underline", fontWeight: 700 }}
                    >
                      Inspect Specification →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
