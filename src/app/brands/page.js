"use client";

import Link from "next/link";
import { BRANDS } from "@/data/partsData";
import TickerBar from "@/components/TickerBar";
import TelemetryBar from "@/components/TelemetryBar";

export default function BrandsPage() {
  const brandDetails = {
    man: {
      headline: "MAN Commercial Vehicles (Trucks • Buses • Mining • Marine)",
      software: "MAN Mantis EPC & Diagnostic Catalog Supported",
      overview:
        "German precision engineering built for long-haul interstate logistics, Lion's Coach passenger transport, extreme quarry mining, and marine auxiliary applications. Sourcing OEM and certified dismantled components for D20, D26, and D28 common rail engines.",
      assemblies: [
        { title: "Brake Rotors & Calipers", desc: "432mm heavy ventilated rotors, Bremskerl ECE R90 pads, and Knorr SB7/SN7 caliper seal and piston kits." },
        { title: "Suspension Bellows & Heavy Shocks", desc: "Heavy multi-convoluted air springs for drive, coach, and tag axles with Sachs heavy dampers." },
        { title: "Turbochargers & Boost Systems", desc: "BorgWarner / Holset replacement turbo assemblies and reinforced high-temperature silicone boost hoses." },
        { title: "Lion's Coach & Mining Assemblies", desc: "Steering knuckles, drag links, radiator packs, and crated inspected D2666 / D2066 engines." },
      ],
    },
    mercedes: {
      headline: "Mercedes-Benz Commercial (Trucks • Buses • Mining)",
      software: "Mercedes-Benz EPC & WIS Parts Documentation Supported",
      overview:
        "The gold standard of European long-distance freight, multi-axle intercity coaches, and heavy earthmoving. Full parts support for OM501LA V6, OM502LA V8, and the modern OM471 generation with Telligent and Powershift automated transmissions.",
      assemblies: [
        { title: "Bremskerl Brake Pads & 434mm Rotors", desc: "ECE R90 heavy duty brake pads tailored for Actros heavy tandem drive axles and coach disc systems." },
        { title: "G240-16 / G211 Gearbox Assemblies", desc: "New synchros, clutch slave cylinders, and tested dismantled 16-speed transmissions with warranty." },
        { title: "Arocs Mining & Auxiliary Cooling", desc: "Viton-sealed mechanical water pumps, visco-fan clutches, intercoolers, and alloy expansion tanks." },
        { title: "28V Alternators & High-Torque Starters", desc: "Dust-proof Bosch-spec 100A alternators and 6.2kW geared starter motors for heavy mining specs." },
      ],
    },
    scania: {
      headline: "Scania Modular Transport (Trucks • Metrolink Buses • Marine)",
      software: "Scania Multi EPC & Workshop Information Supported",
      overview:
        "Renowned Swedish modular architecture designed for high torque, driver endurance, and intercity passenger transit. Comprehensive components for DC12, DC13, and legendary DC16 V8 engines coupled with Opticruise transmissions.",
      assemblies: [
        { title: "430mm Heavy-Duty Clutch Kits", desc: "High-coefficient organic/ceramic clutch kits with reinforced diaphragm springs and release bearings." },
        { title: "Scania Air Suspension & Leveling Valves", desc: "Electronic ECAS leveling valves, height sensors, and heavy rubber bellows for Metrolink and R-Series." },
        { title: "EBS & ABS Wheel Speed Sensors", desc: "Direct replacement inductive sensors and pulse rings with weather-sealed harnesses for tough Indian terrain." },
        { title: "Tested Differential Carriers (R780 / RP832)", desc: "Crown-wheel and pinion matched sets and complete drop-in rear axle assemblies inspected for zero play." },
      ],
    },
    volvo: {
      headline: "Volvo Commercial (Trucks • Buses • Mining • Penta Marine)",
      software: "Volvo IMPACT EPC & Diagnostic Microfiche Supported",
      overview:
        "The Swedish benchmark in safety, heavy haulage, luxury coaches, and marine propulsion. Supported by Viking Group since 1969 with genuine-grade components for D12D, D13A, D13C, D16E powertrains, B7R/B9R/B11R/9400/9600 buses, and I-Shift transmissions.",
      assemblies: [
        { title: "B7R / B9R / 9400 / 9600 Bus Parts", desc: "Full suspension, steering knuckles, ventilated discs, Bremskerl pads, and pneumatic valves for Volvo coach fleets." },
        { title: "APU / E-APU Electronic Air Dryers", desc: "Complete multi-circuit air processing units with oil-separation coalescing filters preventing system moisture." },
        { title: "Turbochargers & Injector Sleeves", desc: "Garrett/Holset VSR-balanced turbos, copper injector sleeves, and Viton O-ring kits for D12/D13." },
        { title: "Dismantled I-Shift Transmissions (AT2412 / AT2612)", desc: "Fully tested and crated automated transmissions with clutch actuators and 14-day fitment guarantee." },
      ],
    },
  };

  return (
    <>
      <section className="section section--dark" style={{ borderBottom: "4px solid var(--safety)" }}>
        <div className="container">
          <div className="section__eyebrow">// FLEET COVERAGE GUIDE • VIKING GROUP SINCE 1969</div>
          <h1 className="section__title" style={{ fontSize: "var(--fs-h1)", marginBottom: "1rem" }}>
            European Commercial<br />Platforms<span className="accent">.</span>
          </h1>
          <p style={{ maxWidth: "680px", fontSize: "1.02rem", opacity: 0.8, lineHeight: "1.8" }}>
            Comprehensive breakdown of our parts availability, engineering assemblies, and testing standards across
            <strong> Trucks, Buses & Coaches, Construction & Mining, and Marine</strong> for MAN, Mercedes-Benz, Scania, and Volvo.
          </p>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <span className="tag tag--filled">SINCE 1969</span>
            <span className="tag tag--safety">DEALER EPC (IMPACT • EPC • MULTI • MANTIS)</span>
            <span className="tag tag--blue">DOMESTIC 24H • GLOBAL 7D</span>
          </div>
        </div>
      </section>

      <TelemetryBar />

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {BRANDS.map((brand) => {
              const details = brandDetails[brand.id];
              return (
                <div
                  id={brand.id}
                  key={brand.id}
                  className="bento-card"
                  style={{ padding: "clamp(2rem, 4vw, 3.5rem)", scrollMarginTop: "100px" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
                    <div>
                      <div className="bento-card__number" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span>{brand.icon}</span>
                        <span>// PLATFORM SPECIFICATION</span>
                      </div>
                      <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "0.5rem" }}>{details.headline}</h2>
                      
                      <div style={{ color: "var(--safety)", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.6rem" }}>
                        ⚡ {details.software}
                      </div>

                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                        {brand.series.map((s, i) => (
                          <span key={i} className="tag tag--filled">{s}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                      <Link href={`/parts?brand=${brand.id}`} className="btn btn--primary">
                        Browse {brand.name} Parts →
                      </Link>
                    </div>
                  </div>

                  <p style={{ fontSize: "1rem", opacity: 0.85, lineHeight: "1.8", maxWidth: "860px", marginBottom: "2rem" }}>
                    {details.overview}
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
                    {details.assemblies.map((a, idx) => (
                      <div key={idx} style={{ background: "var(--surface)", border: "var(--border-thin)", padding: "1.4rem" }}>
                        <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--safety)", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                          Assembly Line 0{idx + 1}
                        </div>
                        <h4 style={{ fontSize: "1.18rem", marginBottom: "0.5rem" }}>{a.title}</h4>
                        <p style={{ fontSize: "0.85rem", opacity: 0.75, lineHeight: "1.6" }}>{a.desc}</p>
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
