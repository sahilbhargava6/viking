"use client";

import { useState } from "react";
import Link from "next/link";
import { useRfq } from "@/context/RfqContext";

export default function RfqDrawer() {
  const { basket, removeFromBasket, updateQuantity, clearBasket, isDrawerOpen, setIsDrawerOpen, totalItems } = useRfq();
  const [clientName, setClientName] = useState("");
  const [fleetCompany, setFleetCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [truckVin, setTruckVin] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isDrawerOpen) return null;

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    if (basket.length === 0) return;

    let itemsList = basket
      .map(
        (item, idx) =>
          `${idx + 1}. [${item.id}] ${item.title}\n   • OEM Ref: ${item.oemRef}\n   • Condition: ${item.condition}\n   • Qty: ${item.quantity} units\n`
      )
      .join("\n");

    const message = `*COMMERCIAL RFQ DISPATCH — VIKING TRADELINKS*\n\n` +
      `*Client / Fleet:* ${clientName || "Commercial Fleet Manager"}\n` +
      `*Company:* ${fleetCompany || "Fleet Operator"}\n` +
      `*Phone:* ${phone || "Not specified"}\n` +
      (truckVin ? `*VIN / Chassis #:* ${truckVin}\n` : "") +
      (notes ? `*Notes:* ${notes}\n` : "") +
      `\n*REQUESTED ITEMS (${totalItems} total):*\n${itemsList}\n` +
      `Please provide immediate stock availability, tier pricing, and freight timeline to our depot.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919702666664?text=${encoded}`, "_blank");
    setSubmitted(true);
  };

  const handlePrintQuote = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        display: "flex",
        justifyContent: "flex-end",
        background: "rgba(0, 0, 0, 0.65)",
        backdropFilter: "blur(4px)",
      }}
      onClick={() => setIsDrawerOpen(false)}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "540px",
          height: "100%",
          background: "var(--base)",
          borderLeft: "4px solid #000000",
          boxShadow: "-8px 0px 0px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          fontFamily: "var(--font-jetbrains-mono), monospace",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: "1.2rem 1.5rem",
            background: "#000",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "4px solid var(--safety)",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ color: "var(--safety)", fontWeight: 700 }}>■</span>
              <span style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "0.06em" }}>
                COMMERCIAL RFQ BASKET
              </span>
            </div>
            <div style={{ fontSize: "0.7rem", opacity: 0.7, marginTop: "0.2rem" }}>
              {totalItems} Line Items Selected • Multi-Axle Fleet Quotation
            </div>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            style={{
              background: "var(--safety)",
              border: "2px solid #000",
              color: "#fff",
              fontWeight: 700,
              padding: "0.3rem 0.6rem",
              cursor: "pointer",
            }}
          >
            ✕ CLOSE
          </button>
        </div>

        {/* Drawer Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "1.5rem" }}>
          {basket.length === 0 ? (
            <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem", opacity: 0.3 }}>📦</div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Your RFQ Basket is Empty</h3>
              <p style={{ fontSize: "0.82rem", opacity: 0.7, marginBottom: "1.5rem", lineHeight: "1.6" }}>
                Browse our inventory of 15,000+ European heavy commercial vehicle parts and click <strong>&quot;+ Add to RFQ&quot;</strong> to compile a multi-item quotation.
              </p>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="btn btn--primary btn--sm"
              >
                Browse Catalogue Now →
              </button>
            </div>
          ) : (
            <>
              {/* Part Items List */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--safety)", textTransform: "uppercase" }}>
                    Selected Components ({basket.length})
                  </span>
                  <button
                    onClick={clearBasket}
                    style={{ background: "none", border: "none", fontSize: "0.7rem", color: "var(--burgundy)", cursor: "pointer", textDecoration: "underline" }}
                  >
                    Clear All
                  </button>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  {basket.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        border: "var(--border-thin)",
                        background: "var(--surface)",
                        padding: "0.9rem",
                        display: "flex",
                        gap: "0.8rem",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          background: "#fff",
                          border: "1px solid #ccc",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          padding: "4px",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                        />
                      </div>

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: "0.72rem", color: "var(--safety)", fontWeight: 700 }}>
                          {item.id} • {item.condition}
                        </div>
                        <h4
                          style={{
                            fontSize: "0.88rem",
                            margin: "0.2rem 0",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item.title}
                        </h4>
                        <div style={{ fontSize: "0.7rem", opacity: 0.65 }}>
                          OEM: {item.oemRef}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          style={{
                            width: "24px",
                            height: "24px",
                            background: "#fff",
                            border: "1px solid #000",
                            cursor: "pointer",
                            fontWeight: 700,
                          }}
                        >
                          -
                        </button>
                        <span style={{ fontSize: "0.85rem", fontWeight: 700, minWidth: "20px", textAlign: "center" }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          style={{
                            width: "24px",
                            height: "24px",
                            background: "#fff",
                            border: "1px solid #000",
                            cursor: "pointer",
                            fontWeight: 700,
                          }}
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromBasket(item.id)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#888",
                          cursor: "pointer",
                          fontSize: "1rem",
                          padding: "0.2rem",
                        }}
                        title="Remove item"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fleet & Procurement Details Form */}
              <form onSubmit={handleSendWhatsApp} style={{ borderTop: "2px solid #000", paddingTop: "1.2rem" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--safety)", marginBottom: "0.8rem", textTransform: "uppercase" }}>
                  Fleet Logistics Dispatch Contact
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "1.2rem" }}>
                  <input
                    type="text"
                    required
                    placeholder="Fleet Manager / Buyer Name *"
                    className="input-box"
                    style={{ fontSize: "0.8rem", padding: "0.55rem 0.8rem" }}
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                    <input
                      type="text"
                      placeholder="Company / Transporter"
                      className="input-box"
                      style={{ fontSize: "0.8rem", padding: "0.55rem 0.8rem" }}
                      value={fleetCompany}
                      onChange={(e) => setFleetCompany(e.target.value)}
                    />
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp Mobile *"
                      className="input-box"
                      style={{ fontSize: "0.8rem", padding: "0.55rem 0.8rem" }}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Truck VIN / Chassis No (e.g. YV2RT40A...)"
                    className="input-box"
                    style={{ fontSize: "0.8rem", padding: "0.55rem 0.8rem" }}
                    value={truckVin}
                    onChange={(e) => setTruckVin(e.target.value)}
                  />

                  <textarea
                    rows={2}
                    placeholder="Specific delivery requirements, depot location or invoice instructions..."
                    className="input-box"
                    style={{ fontSize: "0.8rem", padding: "0.55rem 0.8rem" }}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                {submitted && (
                  <div
                    style={{
                      background: "rgba(0, 255, 102, 0.15)",
                      border: "1px solid var(--term-green)",
                      padding: "0.8rem",
                      fontSize: "0.75rem",
                      color: "var(--term-green)",
                      marginBottom: "1rem",
                      fontWeight: 700,
                    }}
                  >
                    ✓ WhatsApp RFQ Generated! Viking Tradelinks sales desk is reviewing your {totalItems} items.
                  </div>
                )}

                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <button
                    type="submit"
                    className="btn btn--primary"
                    style={{
                      width: "100%",
                      padding: "0.8rem 1rem",
                      background: "#25D366",
                      color: "#000",
                      borderColor: "#000",
                      fontSize: "0.85rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span>Transmit RFQ to WhatsApp Desk ({totalItems} Items)</span>
                    <span>→</span>
                  </button>

                  <button
                    type="button"
                    onClick={handlePrintQuote}
                    className="btn btn--ghost"
                    style={{ width: "100%", padding: "0.6rem 1rem", fontSize: "0.75rem" }}
                  >
                    ⎙ Print / Export Purchase Order Requisition
                  </button>
                </div>
              </form>
            </>
          )}
        </div>

        {/* Drawer Footer Status */}
        <div
          style={{
            padding: "0.8rem 1.5rem",
            background: "var(--surface)",
            borderTop: "var(--border-thin)",
            fontSize: "0.68rem",
            opacity: 0.75,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Direct Yard Dispatch: Khalapur & Mumbai</span>
          <span>Response Benchmark: Under 15m</span>
        </div>
      </div>
    </div>
  );
}
