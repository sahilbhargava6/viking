"use client";

import { useState } from "react";
import { LOCATIONS } from "@/data/partsData";
import TickerBar from "@/components/TickerBar";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    truckMake: "Volvo",
    oemOrVin: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Viking Tradelinks!\nName: ${form.name || "Fleet Client"}\nPhone: ${form.phone || ""}\nMake: ${form.truckMake}\nOEM / VIN: ${form.oemOrVin}\nRequirement: ${form.notes}`
    );
    window.open(`https://wa.me/919702666664?text=${text}`, "_blank");
  };

  return (
    <>
      <section className="section section--dark" style={{ borderBottom: "4px solid var(--safety)" }}>
        <div className="container">
          <div className="section__eyebrow">// DIRECT DISPATCH DESK</div>
          <h1 className="section__title" style={{ fontSize: "var(--fs-h1)", marginBottom: "1rem" }}>
            Contact & Quote<br />Desk<span className="accent">.</span>
          </h1>
          <p style={{ maxWidth: "600px", fontSize: "1rem", opacity: 0.75, lineHeight: "1.8" }}>
            Emergency roadside breakdown or preventative fleet overhaul — our technical engineers verify part numbers
            and dispatch from our Mumbai or Khalapur depot within 24 hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "var(--gap)", alignItems: "start" }}>
            {/* Contact Form */}
            <div style={{ gridColumn: "span 7" }}>
              <div className="bento-card" style={{ padding: "clamp(2rem, 3.5vw, 3rem)" }}>
                <div className="section__eyebrow">// FAST QUOTATION FORM</div>
                <h2 style={{ fontSize: "var(--fs-h2)", marginBottom: "0.8rem" }}>Request Part Inquiry</h2>
                <p style={{ fontSize: "0.85rem", opacity: 0.7, marginBottom: "2rem" }}>
                  Fill in your vehicle chassis or component number. We provide immediate stock confirmation and delivery timeline.
                </p>

                {submitted ? (
                  <div style={{ background: "var(--surface)", border: "var(--border)", padding: "2rem", textAlign: "center" }}>
                    <div style={{ color: "var(--safety)", fontWeight: 700, fontSize: "1.3rem", marginBottom: "0.8rem" }}>
                      ✓ INQUIRY DISPATCHED TO ENGINEERING TEAM
                    </div>
                    <p style={{ fontSize: "0.9rem", opacity: 0.8, marginBottom: "1.5rem" }}>
                      Our dispatch manager will review stock at Khalapur and contact you at <strong>{form.phone}</strong> within 15 minutes.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                      <button className="btn btn--primary" onClick={openWhatsApp}>
                        Connect on WhatsApp Now (+91 9702666664)
                      </button>
                      <button className="btn btn--ghost" onClick={() => setSubmitted(false)}>
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                    <div>
                      <label style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.4rem" }}>
                        Your Name / Fleet Organization *
                      </label>
                      <input
                        type="text"
                        required
                        className="input-box"
                        placeholder="e.g. Manpreet Singh / Global Logistics Corp"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <div>
                        <label style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.4rem" }}>
                          Mobile / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          className="input-box"
                          placeholder="+91 9702666664"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.4rem" }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="input-box"
                          placeholder="purchase@fleetservices.in"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <div>
                        <label style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.4rem" }}>
                          Commercial Truck Make *
                        </label>
                        <select
                          className="input-box"
                          value={form.truckMake}
                          onChange={(e) => setForm({ ...form, truckMake: e.target.value })}
                        >
                          <option value="Volvo">Volvo (FH, FM, FMX)</option>
                          <option value="Mercedes-Benz">Mercedes-Benz (Actros, Axor, Arocs)</option>
                          <option value="Scania">Scania (R, S, G Series)</option>
                          <option value="MAN">MAN (TGX, TGS, TGA)</option>
                          <option value="Other">Other European Commercial Vehicle</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.4rem" }}>
                          OEM Part # or VIN Chassis #
                        </label>
                        <input
                          type="text"
                          className="input-box"
                          placeholder="e.g. 20582214 or VIN"
                          value={form.oemOrVin}
                          onChange={(e) => setForm({ ...form, oemOrVin: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.4rem" }}>
                        Required Parts / Specific Condition / Quantity
                      </label>
                      <textarea
                        rows="4"
                        className="input-box"
                        placeholder="Please state if you need New OEM alternative or tested dismantled units, and destination delivery pin code."
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      ></textarea>
                    </div>

                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                      <button type="submit" className="btn btn--primary" style={{ flex: 1 }}>
                        Submit Inquiry (15-Min Response)
                      </button>
                      <button type="button" className="btn btn--ghost" onClick={openWhatsApp}>
                        WhatsApp Hotline
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Direct Contact & Locations */}
            <div style={{ gridColumn: "span 5", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div className="bento-card bento-card--dark" style={{ padding: "2rem" }}>
                <div style={{ fontSize: "0.7rem", color: "var(--safety)", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  // EMERGENCY BREAKDOWN HELPLINE
                </div>
                <h3 style={{ fontSize: "1.6rem", marginBottom: "0.8rem" }}>24/7 Dispatch Desk</h3>
                <p style={{ opacity: 0.75, fontSize: "0.85rem", lineHeight: "1.7", marginBottom: "1.2rem" }}>
                  For urgent parts needed to get stranded trucks back on the highway, call our commercial direct line:
                </p>
                <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--term-green)", marginBottom: "0.5rem", fontFamily: "var(--font-jetbrains-mono)" }}>
                  +91 9702666664
                </div>
                <div style={{ fontSize: "0.85rem", opacity: 0.8, marginBottom: "1.2rem" }}>
                  Email: schumi.india@mail.com
                </div>
                <a href="tel:+919702666664" className="btn btn--primary btn--sm" style={{ width: "100%" }}>
                  Call Hotline Now
                </a>
              </div>

              {LOCATIONS.map((loc) => (
                <div key={loc.id} className="bento-card" style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <span className="tag tag--filled">{loc.id.toUpperCase()}</span>
                    <span style={{ fontSize: "0.75rem", color: "var(--safety)", fontWeight: 700 }}>
                      {loc.contactPerson}
                    </span>
                  </div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{loc.name}</h4>
                  <p style={{ fontSize: "0.8rem", opacity: 0.75, lineHeight: "1.6", marginBottom: "0.8rem" }}>
                    {loc.address}
                  </p>
                  <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>
                    <strong>Hours:</strong> {loc.timing}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TickerBar />
    </>
  );
}
