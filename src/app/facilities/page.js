import { LOCATIONS } from "@/data/partsData";
import TickerBar from "@/components/TickerBar";
import TelemetryBar from "@/components/TelemetryBar";

export default function FacilitiesPage() {
  return (
    <>
      <section className="section section--dark" style={{ borderBottom: "4px solid var(--safety)" }}>
        <div className="container">
          <div className="section__eyebrow">// HERITAGE & INFRASTRUCTURE</div>
          <h1 className="section__title" style={{ fontSize: "var(--fs-h1)", marginBottom: "1rem" }}>
            Facilities &<br />Logistics Network<span className="accent">.</span>
          </h1>
          <p style={{ maxWidth: "650px", fontSize: "1rem", opacity: 0.75, lineHeight: "1.8" }}>
            A proud Viking Group enterprise since 1969, Viking Tradelinks bridges premier European manufacturing with
            heavy commercial logistics across India (domestic 24-hr dispatch) and global export corridors (7-day delivery).
          </p>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <span className="tag tag--filled">SINCE 1969 (55+ YEARS)</span>
            <span className="tag tag--safety">DOMESTIC 24H • GLOBAL 7D</span>
            <span className="tag tag--ghost">15,000+ ITEMS IN KHALAPUR</span>
          </div>
        </div>
      </section>

      <TelemetryBar />

      <section className="section">
        <div className="container">
          <div className="section__header">
            <div className="section__eyebrow">// Operational Facilities</div>
            <h2 className="section__title">
              Our Physical Hubs &<br />Heavy Inventory Yards
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "2.5rem" }}>
            {LOCATIONS.map((loc, idx) => (
              <div key={loc.id} className="bento-card" style={{ padding: "2.5rem" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <span className="tag tag--filled">FACILITY // 0{idx + 1}</span>
                    <span className="tag tag--safety">{loc.id.toUpperCase()}</span>
                  </div>

                  <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", lineHeight: "1.1" }}>{loc.name}</h3>

                  <div style={{ background: "var(--surface)", border: "var(--border-thin)", padding: "1rem", marginBottom: "1.2rem", fontSize: "0.85rem" }}>
                    <div style={{ color: "var(--safety)", fontWeight: 700, marginBottom: "0.3rem" }}>
                      DIRECT OFFICER: {loc.contactPerson}
                    </div>
                    <div style={{ opacity: 0.8, lineHeight: "1.6" }}>{loc.address}</div>
                  </div>

                  <div style={{ fontSize: "0.82rem", opacity: 0.75, marginBottom: "1rem", lineHeight: "1.7" }}>
                    <strong>Capabilities:</strong> {loc.role}
                  </div>

                  <div style={{ fontSize: "0.8rem", opacity: 0.6, marginBottom: "1.5rem" }}>
                    <strong>Operating Hours:</strong> {loc.timing}
                  </div>
                </div>

                <div style={{ borderTop: "var(--border-thin)", paddingTop: "1rem", display: "flex", gap: "0.6rem" }}>
                  <a href={`tel:${loc.phone}`} className="btn btn--primary btn--sm" style={{ flex: 1 }}>
                    Call: {loc.phone}
                  </a>
                  <a href={`mailto:${loc.email}`} className="btn btn--ghost btn--sm">
                    Email Desk
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== QUALITY & TESTING LAB ====== */}
      <section className="section section--surface">
        <div className="container">
          <div className="section__header">
            <div className="section__eyebrow">// Zero-Tolerance Quality Standards</div>
            <h2 className="section__title">
              Our Non-Destructive<br />Testing Protocol
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div className="part-card">
              <span className="tag tag--filled" style={{ alignSelf: "flex-start", marginBottom: "1rem" }}>QC-01</span>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Ultrasonic Crack Detection</h4>
              <p style={{ fontSize: "0.82rem", opacity: 0.75, lineHeight: "1.7" }}>
                High-frequency acoustic scanning detects subsurface micro-fractures in used crankshafts, steering knuckles, and brake caliper housings before shipment.
              </p>
            </div>

            <div className="part-card">
              <span className="tag tag--filled" style={{ alignSelf: "flex-start", marginBottom: "1rem" }}>QC-02</span>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Dynamometer Gearbox Spin</h4>
              <p style={{ fontSize: "0.82rem", opacity: 0.75, lineHeight: "1.7" }}>
                Every dismantled Mercedes G240-16 and Volvo I-Shift transmission is spun up on test fixtures to ensure smooth sync mesh, correct oil pressure, and zero bearing rattle.
              </p>
            </div>

            <div className="part-card">
              <span className="tag tag--filled" style={{ alignSelf: "flex-start", marginBottom: "1rem" }}>QC-03</span>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Air Pressure & Leak Verification</h4>
              <p style={{ fontSize: "0.82rem", opacity: 0.75, lineHeight: "1.7" }}>
                Air spring bellows and electronic APU air dryers are pressure tested up to 16 Bar (1.5x nominal operating pressure) to ensure zero pneumatic leakage.
              </p>
            </div>

            <div className="part-card">
              <span className="tag tag--safety" style={{ alignSelf: "flex-start", marginBottom: "1rem" }}>QC-04</span>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Magnetic Particle Inspection</h4>
              <p style={{ fontSize: "0.82rem", opacity: 0.75, lineHeight: "1.7" }}>
                High-stress differential crown wheels and pinions receive fluorescent magnetic inspection under UV light, certifying zero fatigue cracks on tooth root faces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TickerBar />
    </>
  );
}
