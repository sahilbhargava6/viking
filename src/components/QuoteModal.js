"use client";

import { useState } from "react";
import { submitLead, whatsappUrl, LeadResult, HoneypotField } from "@/lib/leads";

export default function QuoteModal({ isOpen, onClose, initialPart = null }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    truckMake: initialPart?.brand || "Volvo",
    modelYear: "",
    vinOrOem: initialPart?.oemRef || "",
    partDescription: initialPart ? `${initialPart.id} - ${initialPart.title}` : "",
  });
  // idle | sending | sent | failed
  const [status, setStatus] = useState("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    setStatus("sending");
    const ok = await submitLead(
      "quote",
      {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        make: formData.truckMake,
        reference: formData.vinOrOem,
        message: formData.partDescription,
        modelYear: formData.modelYear,
      },
      formEl
    );
    setStatus(ok ? "sent" : "failed");
  };

  const handleWhatsApp = () => {
    const text = `Hello Viking Tradelinks! I need an urgent quote.\nMake: ${formData.truckMake}\nPart: ${formData.partDescription || "Heavy Duty Spare Part"}\nOEM/VIN: ${formData.vinOrOem}\nName: ${formData.name || "Fleet Manager"}`;
    window.open(whatsappUrl(text), "_blank");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="section__eyebrow">// QUOTATION DESK</div>
        <h3 className="section__title" style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
          Request Part Quote<span className="accent">.</span>
        </h3>
        <p style={{ fontSize: "0.85rem", opacity: 0.7, marginBottom: "1.5rem" }}>
          Instant response within 15 minutes. Dispatch direct from Mumbai showroom or Khalapur heavy yard.
        </p>

        {status === "sent" || status === "failed" ? (
          <LeadResult
            status={status}
            phone={formData.phone}
            onWhatsApp={handleWhatsApp}
            onReset={() => { setStatus("idle"); onClose(); }}
            resetLabel="Close Window"
            compact
          />
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <HoneypotField />
            <div>
              <label style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, display: "block", marginBottom: "0.3rem" }}>
                Your Name / Fleet Entity *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Gurpreet Singh / Apex Logistics"
                className="input-box"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-row-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, display: "block", marginBottom: "0.3rem" }}>
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="input-box"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, display: "block", marginBottom: "0.3rem" }}>
                  Truck Make *
                </label>
                <select
                  className="input-box"
                  value={formData.truckMake}
                  onChange={(e) => setFormData({ ...formData, truckMake: e.target.value })}
                >
                  <option value="Volvo">Volvo (FH12, FH16, FM, FMX)</option>
                  <option value="Mercedes-Benz">Mercedes-Benz (Actros, Axor, Arocs)</option>
                  <option value="Scania">Scania (R-Series, S-Series, G-Series)</option>
                  <option value="MAN">MAN (TGX, TGS, TGA)</option>
                  <option value="Other">Other European Commercial Vehicle</option>
                </select>
              </div>
            </div>

            <div className="form-row-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, display: "block", marginBottom: "0.3rem" }}>
                  OEM Part Number or Chassis/VIN
                </label>
                <input
                  type="text"
                  placeholder="e.g. 20582214 or chassis number"
                  className="input-box"
                  value={formData.vinOrOem}
                  onChange={(e) => setFormData({ ...formData, vinOrOem: e.target.value })}
                />
              </div>
              <div>
                <label style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, display: "block", marginBottom: "0.3rem" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="fleet@company.com"
                  className="input-box"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, display: "block", marginBottom: "0.3rem" }}>
                Part Details / Requirements
              </label>
              <textarea
                rows="3"
                className="input-box"
                placeholder="Mention specific condition desired (New OEM alternative or tested dismantled unit) and destination city."
                value={formData.partDescription}
                onChange={(e) => setFormData({ ...formData, partDescription: e.target.value })}
              ></textarea>
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
              <button type="submit" className="btn btn--primary" style={{ flex: 1 }} disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Submit Quote Request"}
              </button>
              <button type="button" className="btn btn--ghost" onClick={handleWhatsApp}>
                Instant WhatsApp Quote
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
