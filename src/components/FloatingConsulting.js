"use client";

import { useState } from "react";
import { submitLead, whatsappUrl, LeadResult, HoneypotField } from "@/lib/leads";

export default function FloatingConsulting() {
  const [isOpen, setIsOpen] = useState(false);
  // idle | sending | sent | failed
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    sector: "Trucks",
    brand: "Volvo",
    vinOrPart: "",
    consultingType: "Factory EPC Parts Catalog Lookup",
    details: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    setStatus("sending");
    const ok = await submitLead(
      "consultation",
      {
        name: formData.name,
        phone: formData.phone,
        company: formData.company,
        make: formData.brand,
        reference: formData.vinOrPart,
        message: formData.details,
        sector: formData.sector,
        consultingType: formData.consultingType,
      },
      formEl
    );
    setStatus(ok ? "sent" : "failed");
  };

  const handleWhatsApp = () => {
    const text = (
      `*VIKING TRADELINKS — DEALER SOFTWARE & AI CONSULTING REQUEST*\n` +
      `----------------------------------------\n` +
      `• *Client Name:* ${formData.name || "Fleet Operator"}\n` +
      `• *Company/Fleet:* ${formData.company || "Direct Inquiry"}\n` +
      `• *Phone:* ${formData.phone || "Not specified"}\n` +
      `• *Sector:* ${formData.sector}\n` +
      `• *Make/Brand:* ${formData.brand}\n` +
      `• *VIN / Part Code:* ${formData.vinOrPart || "Need EPC Lookup"}\n` +
      `• *Consulting Need:* ${formData.consultingType}\n` +
      `• *Requirement:* ${formData.details || "Requesting immediate engineering assistance"}\n` +
      `----------------------------------------\n` +
      `*A Viking Group Company Since 1969*`
    );
    window.open(whatsappUrl(text), "_blank");
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="floating-consulting-trigger"
        aria-label="Open Dealer EPC Software and AI Consulting Desk"
        title="Access Volvo IMPACT, MB EPC, Scania Multi, MAN Mantis & AI Technical Support"
      >
        <span className="dot" aria-hidden="true"></span>
        <span style={{ color: "var(--gold)" }}>⚡ DEALER EPC</span>
        <span style={{ opacity: 0.85 }}>& AI SUPPORT</span>
      </button>

      {/* Floating Modal / Drawer */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.78)",
            backdropFilter: "blur(4px)",
            zIndex: 1600,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            animation: "fadeIn 0.15s ease",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div
            style={{
              background: "var(--base)",
              border: "var(--border)",
              boxShadow: "var(--shadow-safety)",
              maxWidth: "680px",
              width: "100%",
              maxHeight: "92vh",
              overflowY: "auto",
              padding: "clamp(1.5rem, 3vw, 2.5rem)",
              position: "relative",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem", borderBottom: "var(--border-thin)", paddingBottom: "1rem" }}>
              <div>
                <div className="section__eyebrow" style={{ marginBottom: "0.2rem" }}>
                  // DEALER KNOWLEDGE, EPC SOFTWARE & AI SUPPORT
                </div>
                <h3 style={{ fontSize: "var(--fs-h2)", lineHeight: "1.1" }}>
                  Engineering Consultation Desk<span className="accent">.</span>
                </h3>
                <p style={{ fontSize: "0.85rem", opacity: 0.75, marginTop: "0.4rem" }}>
                  Direct access to factory EPC dealer catalogs (Volvo IMPACT, MB EPC, Scania Multi, MAN Mantis) and AI-assisted compatibility cross-referencing.
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: "var(--ink)",
                  color: "var(--base)",
                  border: "2px solid var(--safety)",
                  width: "36px",
                  height: "36px",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {status === "sent" || status === "failed" ? (
              <LeadResult
                status={status}
                phone={formData.phone}
                onWhatsApp={handleWhatsApp}
                onReset={() => {
                  setStatus("idle");
                  setIsOpen(false);
                }}
                resetLabel="Done"
              />
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                <HoneypotField />
                {/* Sector & Brand */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "1rem" }}>
                  <div>
                    <label style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, display: "block", marginBottom: "0.4rem" }}>
                      Operational Sector
                    </label>
                    <select
                      className="input-box"
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    >
                      <option value="Trucks">🚛 Heavy Commercial Trucks</option>
                      <option value="Buses">🚌 Intercity & Luxury Buses</option>
                      <option value="Construction & Mining">🚜 Construction & Heavy Mining</option>
                      <option value="Marine & Power">⚓ Marine Propulsion & Industrial</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, display: "block", marginBottom: "0.4rem" }}>
                      European Make / Brand
                    </label>
                    <select
                      className="input-box"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    >
                      <option value="Volvo">Volvo Trucks & Buses (IMPACT)</option>
                      <option value="Mercedes-Benz">Mercedes-Benz Commercial (EPC/WIS)</option>
                      <option value="Scania">Scania Modular Platforms (Multi)</option>
                      <option value="MAN">MAN Commercial Vehicles (Mantis)</option>
                      <option value="Bremskerl">Bremskerl Germany Friction</option>
                      <option value="Other">Other European Platform</option>
                    </select>
                  </div>
                </div>

                {/* VIN or Part Code */}
                <div>
                  <label style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, display: "block", marginBottom: "0.4rem" }}>
                    Chassis VIN Number / Part Number / Model
                  </label>
                  <input
                    type="text"
                    required
                    className="input-box"
                    placeholder="e.g. YV2RT40A... / 0064205320 / Volvo B9R / Actros MP4"
                    value={formData.vinOrPart}
                    onChange={(e) => setFormData({ ...formData, vinOrPart: e.target.value })}
                  />
                  <div style={{ fontSize: "0.68rem", opacity: 0.6, marginTop: "0.3rem" }}>
                    ■ Our AI & dealer software immediately decodes axle configuration, brake rotors, engine codes & transmission specs.
                  </div>
                </div>

                {/* Name, Company & Phone */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(180px, 100%), 1fr))", gap: "1rem" }}>
                  <div>
                    <label style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, display: "block", marginBottom: "0.4rem" }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      className="input-box"
                      placeholder="Fleet Manager / Engineer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, display: "block", marginBottom: "0.4rem" }}>
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      className="input-box"
                      placeholder="+91 98XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, display: "block", marginBottom: "0.4rem" }}>
                      Fleet / Company Name
                    </label>
                    <input
                      type="text"
                      className="input-box"
                      placeholder="e.g. Apex Logistics"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                {/* Consultation Type */}
                <div>
                  <label style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, display: "block", marginBottom: "0.4rem" }}>
                    Service Requirement
                  </label>
                  <select
                    className="input-box"
                    value={formData.consultingType}
                    onChange={(e) => setFormData({ ...formData, consultingType: e.target.value })}
                  >
                    <option value="Factory EPC Parts Catalog Lookup">Official Factory EPC Software Part Lookup</option>
                    <option value="AI Cross-Reference & Part Compatibility">AI Cross-Reference & Alternative Part Matching</option>
                    <option value="Emergency Breakdown Domestic 24h Dispatch">Emergency Roadside Breakdown (24h Domestic Dispatch)</option>
                    <option value="International 7-Day Air Freight Order">International 7-Day Express Air Delivery Order</option>
                    <option value="Complete Fleet Overhaul & Dismantled Engine">Complete Fleet Overhaul / Tested Dismantled Engine & Transmission</option>
                  </select>
                </div>

                {/* Additional Details */}
                <div>
                  <label style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, display: "block", marginBottom: "0.4rem" }}>
                    Specific Notes / Symptoms / Quantity
                  </label>
                  <textarea
                    rows="3"
                    className="input-box"
                    placeholder="Mention specific component issue, axle position (drive/steer/bogie), or part description..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  ></textarea>
                </div>

                {/* Submit & WhatsApp buttons */}
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                  <button type="submit" className="btn btn--primary" style={{ flex: 1 }} disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Submit Consultation Request"}
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="btn btn--ghost"
                    style={{ background: "#25D366", color: "#000", borderColor: "#000" }}
                  >
                    Direct WhatsApp EPC Lookup →
                  </button>
                </div>

                <div style={{ fontSize: "0.72rem", opacity: 0.55, textAlign: "center", marginTop: "0.4rem" }}>
                  A Viking Group Company Since 1969 • Domestic Dispatch in 24h • International in 7d
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
