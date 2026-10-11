"use client";

import Link from "next/link";
import { BRANDS } from "@/data/partsData";
import TickerBar from "@/components/TickerBar";

export default function BrandsPage() {
  const brandDetails = {
    man: {
      headline: "MAN Heavy Commercial Vehicles (TGX • TGS • TGA)",
      overview:
        "German engineering engineered for long-haul interstate logistics and extreme mining applications. We supply complete powertrain, chassis, and brake systems for D20, D26, and D28 common rail diesel engines.",
      assemblies: [
        { title: "Brake Rotors & Calipers", desc: "432mm ventilated discs and Knorr SB7/SN7 caliper seal and piston kits." },
        { title: "Suspension Bellows & Shocks", desc: "Heavy multi-convoluted air springs for drive and tag axles, Sachs heavy dampers." },
        { title: "Turbochargers & Intercoolers", desc: "BorgWarner / Holset replacement turbo assemblies and reinforced silicone boost hoses." },
        { title: "Dismantled D2666 / D2066 Engines", desc: "Inspected long-blocks and short-blocks with complete crankshaft and cylinder heads." },
      ],
    },
    mercedes: {
      headline: "Mercedes-Benz Heavy Commercial (Actros • Axor • Arocs)",
      overview:
        "The standard of European long-distance freight in India and globally. Full parts support for OM501LA V6, OM502LA V8, and the modern OM471 generation with Telligent and Powershift automated manual transmissions.",
      assemblies: [
        { title: "Bremskerl Brake Pads & 434mm Rotors", desc: "ECE R90 heavy duty brake pads tailored for Actros heavy tandem drive axles." },
        { title: "G240-16 / G211 Gearbox Assemblies", desc: "New synchros, clutch slave cylinders, and tested dismantled 16-speed transmissions." },
        { title: "Cooling & Auxiliary Pumps", desc: "Viton-sealed mechanical water pumps, visco-fan clutches, and alloy expansion tanks." },
        { title: "28V Alternators & High-Torque Starters", desc: "Dust-proof Bosch-spec 100A alternators and 6.2kW geared starter motors." },
      ],
    },
    scania: {
      headline: "Scania Modular Transport (R-Series • S-Series • G-Series • V8)",
      overview:
        "Renowned Swedish modular architecture designed for high torque and driver comfort. Comprehensive components for DC12, DC13, and legendary DC16 V8 engines coupled with Opticruise transmissions.",
      assemblies: [
        { title: "430mm Heavy-Duty Clutch Kits", desc: "High-coefficient organic/ceramic clutch kits with reinforced diaphragm springs." },
        { title: "Scania Air Suspension & Leveling Valves", desc: "Electronic ECAS leveling valves, height sensors, and heavy rubber bellows." },
        { title: "EBS & ABS Wheel Speed Sensors", desc: "Direct replacement inductive sensors and pulse rings with weather-sealed harnesses." },
        { title: "Tested Differential Carriers (R780 / RP832)", desc: "Crown-wheel and pinion matched sets and complete drop-in rear axle assemblies." },
      ],
    },
    volvo: {
      headline: "Volvo Heavy Trucks (FH12 • FH16 • FM • FMX Mining)",
      overview:
        "The benchmark in safety and heavy haulage performance. We have supported Volvo fleets since 1972 with genuine-grade components for D12D, D13A, D13C, D16E powertrains and I-Shift transmissions.",
      assemblies: [
        { title: "APU / E-APU Electronic Air Dryers", desc: "Complete multi-circuit air processing units with oil-separation coalescing filters." },
        { title: "Turbochargers & Injector Sleeves", desc: "Garrett/Holset VSR-balanced turbos, copper injector sleeves, and Viton O-ring kits." },
        { title: "FH/FM Cabin Air Bags & Dampers", desc: "Cab suspension bellows and shock absorbers preventing road vibration transfer." },
        { title: "Dismantled I-Shift Transmissions (AT2412 / AT2612)", desc: "Fully tested and crated automated transmissions with clutch actuators." },
      ],
    },
  };

  return (
    <>
      <section className="section section--dark" style={{ borderBottom: "4px solid var(--safety)" }}>
        <div className="container">
          <div className="section__eyebrow">// FLEET COVERAGE GUIDE</div>
          <h1 className="section__title" style={{ fontSize: "var(--fs-h1)", marginBottom: "1rem" }}>
            European Truck<br />Platforms<span className="accent">.</span>
          </h1>
          <p style={{ maxWidth: "600px", fontSize: "1rem", opacity: 0.75, lineHeight: "1.8" }}>
            Detailed breakdown of our parts availability, engineering assemblies, and testing standards across
            MAN, Mercedes-Benz, Scania, and Volvo commercial vehicles.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {BRANDS.map((brand) => {
              const details = brandDetails[brand.id];
              return (
                <div key={brand.id} className="bento-card" style={{ padding: "clamp(2rem, 4vw, 3.5rem)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
                    <div>
                      <div className="bento-card__number">{brand.icon} // PLATFORM OVERVIEW</div>
                      <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "0.5rem" }}>{details.headline}</h2>
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                        {brand.series.map((s, i) => (
                          <span key={i} className="tag tag--filled">{s}</span>
                        ))}
                      </div>
                    </div>

                    <Link href={`/parts?brand=${brand.id}`} className="btn btn--primary">
                      View {brand.name} Parts Catalog →
                    </Link>
                  </div>

                  <p style={{ fontSize: "0.95rem", opacity: 0.8, lineHeight: "1.8", maxWidth: "800px", marginBottom: "2rem" }}>
                    {details.overview}
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
                    {details.assemblies.map((a, idx) => (
                      <div key={idx} style={{ background: "var(--surface)", border: "var(--border-thin)", padding: "1.2rem" }}>
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--safety)", textTransform: "uppercase", marginBottom: "0.3rem" }}>
                          Assembly Line 0{idx + 1}
                        </div>
                        <h4 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{a.title}</h4>
                        <p style={{ fontSize: "0.8rem", opacity: 0.75, lineHeight: "1.6" }}>{a.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TickerBar />
    </>
  );
}
