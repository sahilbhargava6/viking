"use client";

import { useState } from "react";
import { PARTS, CATEGORIES, BRANDS } from "@/data/partsData";
import QuoteModal from "@/components/QuoteModal";

export default function PartFinder({ initialBrand = "all", initialCategory = "all" }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [modalPart, setModalPart] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredParts = PARTS.filter((part) => {
    const matchesSearch =
      searchTerm === "" ||
      part.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.oemRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.brandCompatibility.some((b) => b.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesBrand =
      selectedBrand === "all" ||
      part.brand === selectedBrand ||
      part.brandCompatibility.some((b) => b.toLowerCase().includes(selectedBrand.toLowerCase()));

    const matchesCategory =
      selectedCategory === "all" || part.category === selectedCategory;

    return matchesSearch && matchesBrand && matchesCategory;
  });

  const openQuote = (part) => {
    setModalPart(part);
    setIsModalOpen(true);
  };

  return (
    <div className="part-finder">
      <div style={{ marginBottom: "1.5rem" }}>
        <div className="section__eyebrow">// OEM & VIN CROSS-REFERENCE</div>
        <h3 className="section__title" style={{ fontSize: "1.7rem", marginBottom: "0.5rem" }}>
          Instant Part & Cross-Ref Finder<span className="accent">.</span>
        </h3>
        <p style={{ fontSize: "0.85rem", opacity: 0.65 }}>
          Search across 15,000+ line items in stock at Mumbai & Khalapur. Filter by European truck make, OEM part number, or component category.
        </p>
      </div>

      <div className="part-finder__form">
        <div>
          <label style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, display: "block", marginBottom: "0.3rem" }}>
            Search Part / OEM Number / Keyword
          </label>
          <input
            type="text"
            className="input-box"
            placeholder="e.g. 20582214, Bremskerl, Actros brake disc, air spring..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div>
          <label style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, display: "block", marginBottom: "0.3rem" }}>
            Truck Make
          </label>
          <select
            className="input-box"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="all">All Makes (Euro Trucks)</option>
            {BRANDS.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, display: "block", marginBottom: "0.3rem" }}>
            Component Line
          </label>
          <select
            className="input-box"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <button
            type="button"
            className="btn btn--primary"
            style={{ width: "100%", padding: "0.8em 1.4em" }}
            onClick={() => {
              setSearchTerm("");
              setSelectedBrand("all");
              setSelectedCategory("all");
            }}
          >
            Reset Filters
          </button>
        </div>
      </div>

      <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "var(--border-thin)", paddingBottom: "0.8rem", flexWrap: "wrap", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Displaying <span className="accent">{filteredParts.length}</span> verified results
        </div>
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          <span className="tag tag--filled">24H DISPATCH ACTIVE</span>
          <span className="tag tag--safety">24-MO WARRANTY</span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem", marginTop: "1.5rem" }}>
        {filteredParts.length === 0 ? (
          <div style={{ gridColumn: "1 / -1", padding: "3rem", textAlign: "center", border: "2px dashed var(--ink)", background: "var(--surface)" }}>
            <div style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>NO MATCHING PART NUMBER FOUND IN IMMEDIATE INDEX</div>
            <p style={{ fontSize: "0.85rem", opacity: 0.7, marginBottom: "1.2rem" }}>
              We stock over 15,000+ line items at Khalapur and can airfreight any OEM item from Europe within 72 hours.
            </p>
            <button className="btn btn--primary" onClick={() => openQuote({ title: searchTerm || "Custom Part Inquiry" })}>
              Request Direct Inventory Check (+91 9702666664)
            </button>
          </div>
        ) : (
          filteredParts.map((part) => (
            <div key={part.id} className="part-card">
              <div>
                {/* Part Image Banner */}
                {part.image && (
                  <div
                    style={{
                      height: "140px",
                      width: "100%",
                      background: "#FFFFFF",
                      border: "1px solid rgba(0,0,0,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                      padding: "0.5rem",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={part.image}
                      alt={part.title}
                      style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                    />
                  </div>
                )}

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.6rem" }}>
                  <span className="tag tag--filled">{part.id}</span>
                  <span className={`tag ${part.condition.includes("Used") ? "tag--blue" : "tag--safety"}`}>
                    {part.condition}
                  </span>
                </div>

                <h4 style={{ fontSize: "1.05rem", marginBottom: "0.5rem", lineHeight: "1.2" }}>
                  {part.title}
                </h4>

                <div style={{ fontSize: "0.78rem", background: "var(--surface)", padding: "0.4rem 0.6rem", borderLeft: "3px solid var(--safety)", marginBottom: "0.6rem" }}>
                  <strong style={{ opacity: 0.7 }}>OEM Ref:</strong> {part.oemRef}
                </div>

                <div style={{ fontSize: "0.78rem", opacity: 0.75, marginBottom: "0.6rem", lineHeight: "1.4" }}>
                  <strong>Fits:</strong> {part.brandCompatibility.join(" • ")}
                </div>

                <div style={{ fontSize: "0.74rem", opacity: 0.6, marginBottom: "1rem", lineHeight: "1.4" }}>
                  {part.specs}
                </div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 0", borderTop: "1px solid rgba(0,0,0,0.1)", marginBottom: "0.8rem", fontSize: "0.75rem" }}>
                  <span style={{ color: "var(--term-green)", fontWeight: 700 }}>● {part.stock}</span>
                  <span style={{ fontWeight: 700 }}>{part.warranty}</span>
                </div>

                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button
                    className="btn btn--primary btn--sm"
                    style={{ flex: 1 }}
                    onClick={() => openQuote(part)}
                  >
                    Request Quote
                  </button>
                  <a
                    href={`https://wa.me/919702666664?text=${encodeURIComponent(`Hi Viking Tradelinks, checking stock for ${part.id} (${part.title}) OEM: ${part.oemRef}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--ghost btn--sm"
                    title="Direct WhatsApp"
                  >
                    WA Direct
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialPart={modalPart} />
    </div>
  );
}
