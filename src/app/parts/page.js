"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PARTS, CATEGORIES, BRANDS, SECTORS } from "@/data/partsData";
import { useRfq } from "@/context/RfqContext";
import QuoteModal from "@/components/QuoteModal";
import TickerBar from "@/components/TickerBar";

function PartsCatalogContent() {
  const searchParams = useSearchParams();
  const brandQuery = searchParams.get("brand") || "all";
  const categoryQuery = searchParams.get("category") || "all";
  const segmentQuery = searchParams.get("segment") || "all";

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(brandQuery);
  const [selectedCategory, setSelectedCategory] = useState(categoryQuery);
  const [selectedSegment, setSelectedSegment] = useState(segmentQuery);
  const [selectedCondition, setSelectedCondition] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'table'
  const [modalPart, setModalPart] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { addToBasket } = useRfq();

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

    const matchesCondition =
      selectedCondition === "all" ||
      (selectedCondition === "new" && !part.condition.toLowerCase().includes("used")) ||
      (selectedCondition === "used" && part.condition.toLowerCase().includes("used"));

    const matchesSegment =
      selectedSegment === "all" ||
      (selectedSegment === "trucks" && !part.title.toLowerCase().includes("boat")) ||
      (selectedSegment === "buses" && (part.category === "brakes" || part.category === "suspension" || part.category === "pneumatics" || part.brandCompatibility.some(b => b.toLowerCase().includes("volvo") || b.toLowerCase().includes("mercedes") || b.toLowerCase().includes("scania")))) ||
      (selectedSegment === "mining" && (part.category === "brakes" || part.category === "transmission" || part.category === "drivetrain" || part.category === "cooling")) ||
      (selectedSegment === "marine" && (part.category === "engine" || part.category === "cooling" || part.category === "engine-aux"));

    return matchesSearch && matchesBrand && matchesCategory && matchesCondition && matchesSegment;
  });

  const openQuote = (part) => {
    setModalPart(part);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="section section--dark" style={{ borderBottom: "4px solid var(--safety)" }}>
        <div className="container">
          <div className="section__eyebrow">// VIKING GROUP SINCE 1969 • COMMERCIAL CATALOGUE</div>
          <h1 className="section__title" style={{ fontSize: "var(--fs-h1)", marginBottom: "1rem" }}>
            Commercial Parts<br />Catalogue<span className="accent">.</span>
          </h1>
          <p style={{ maxWidth: "660px", fontSize: "1.02rem", opacity: 0.8, lineHeight: "1.8" }}>
            Browse certified OEM alternatives and tested dismantled assemblies across 15,000+ line items for
            <strong> Trucks, Buses, Mining & Marine</strong>. Guaranteed Domestic Dispatch in 24 Hours & International Delivery in 7 Days.
          </p>

          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <span className="tag tag--filled">SINCE 1969</span>
            <span className="tag tag--safety">DOMESTIC 24H • GLOBAL 7D</span>
            <span className="tag tag--blue">DEALER EPC (IMPACT • EPC • MULTI • MANTIS) & AI SUPPORT</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="catalogue-grid-layout">
            {/* Left Column: Faceted Sidebar Filter */}
            <div className="catalogue-sidebar">
              <div
                style={{
                  background: "var(--surface)",
                  border: "var(--border)",
                  boxShadow: "var(--shadow-sm)",
                  padding: "1.5rem",
                  position: "sticky",
                  top: "90px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem", borderBottom: "var(--border-thin)", paddingBottom: "0.8rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Faceted Filters
                  </div>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedBrand("all");
                      setSelectedCategory("all");
                      setSelectedCondition("all");
                      setSelectedSegment("all");
                    }}
                    style={{ background: "none", border: "none", fontSize: "0.7rem", color: "var(--safety)", cursor: "pointer", textDecoration: "underline" }}
                  >
                    Reset
                  </button>
                </div>

                {/* Keyword Search */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                    Search Keyword / OEM #
                  </label>
                  <input
                    type="text"
                    className="input-box"
                    placeholder="e.g. Bremskerl, 20582214..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ fontSize: "0.8rem", width: "100%", padding: "0.6rem 0.8rem" }}
                  />
                </div>

                {/* Application Sector Filter */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                    Operational Sector
                  </label>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    <button
                      onClick={() => setSelectedSegment("all")}
                      style={{
                        padding: "0.4rem 0.6rem",
                        textAlign: "left",
                        background: selectedSegment === "all" ? "var(--safety)" : "var(--base)",
                        color: selectedSegment === "all" ? "#fff" : "var(--ink)",
                        border: "1px solid rgba(0,0,0,0.15)",
                        fontSize: "0.75rem",
                        cursor: "pointer",
                        fontWeight: 600,
                      }}
                    >
                      All Sectors
                    </button>
                    {SECTORS.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedSegment(s.id)}
                        style={{
                          padding: "0.4rem 0.6rem",
                          textAlign: "left",
                          background: selectedSegment === s.id ? "var(--safety)" : "var(--base)",
                          color: selectedSegment === s.id ? "#fff" : "var(--ink)",
                          border: "1px solid rgba(0,0,0,0.15)",
                          fontSize: "0.75rem",
                          cursor: "pointer",
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                        }}
                      >
                        <span>{s.icon}</span>
                        <span>{s.shortName}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                    European Brand
                  </label>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    <button
                      onClick={() => setSelectedBrand("all")}
                      style={{
                        padding: "0.4rem 0.6rem",
                        textAlign: "left",
                        background: selectedBrand === "all" ? "var(--safety)" : "var(--base)",
                        color: selectedBrand === "all" ? "#fff" : "var(--ink)",
                        border: "1px solid rgba(0,0,0,0.15)",
                        fontSize: "0.75rem",
                        cursor: "pointer",
                        fontWeight: 600,
                      }}
                    >
                      All European Platforms
                    </button>
                    {BRANDS.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => setSelectedBrand(b.id)}
                        style={{
                          padding: "0.4rem 0.6rem",
                          textAlign: "left",
                          background: selectedBrand === b.id ? "var(--safety)" : b.id === "volvo" ? "rgba(255, 62, 0, 0.08)" : "var(--base)",
                          color: selectedBrand === b.id ? "#fff" : "var(--ink)",
                          border: b.id === "volvo" ? "2px solid var(--safety)" : "1px solid rgba(0,0,0,0.15)",
                          fontSize: "0.75rem",
                          cursor: "pointer",
                          fontWeight: b.id === "volvo" ? 800 : 600,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span>{b.name}</span>
                        {b.id === "volvo" && (
                          <span style={{ fontSize: "0.62rem", background: "var(--safety)", color: "#fff", padding: "1px 5px", fontWeight: 800 }}>
                            FLAGSHIP
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                    Component System
                  </label>
                  <select
                    className="input-box"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={{ fontSize: "0.78rem", width: "100%" }}
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Supply Condition */}
                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                    Part Condition
                  </label>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    {[
                      { id: "all", label: "All Conditions" },
                      { id: "new", label: "New OEM Alternative (24m Warranty)" },
                      { id: "used", label: "Certified Dismantled (Tested)" },
                    ].map((cond) => (
                      <button
                        key={cond.id}
                        onClick={() => setSelectedCondition(cond.id)}
                        style={{
                          padding: "0.4rem 0.6rem",
                          textAlign: "left",
                          background: selectedCondition === cond.id ? "#000" : "var(--base)",
                          color: selectedCondition === cond.id ? "#fff" : "var(--ink)",
                          border: "1px solid rgba(0,0,0,0.15)",
                          fontSize: "0.72rem",
                          cursor: "pointer",
                          fontWeight: 600,
                        }}
                      >
                        {cond.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Direct Yard Contact */}
                <div style={{ borderTop: "var(--border-thin)", paddingTop: "1rem", marginTop: "1rem", fontSize: "0.72rem", opacity: 0.8 }}>
                  <div><strong>Need custom fitment?</strong></div>
                  <div>Direct Yard: <a href="tel:+919702666664" style={{ color: "var(--safety)", fontWeight: 700 }}>+91 9702666664</a></div>
                </div>
              </div>
            </div>

            {/* Right Column: Catalogue Header & Results (Grid vs Table) */}
            <div className="catalogue-content">
              {/* Top View Mode & Count Strip */}
              <div
                style={{
                  background: "var(--surface)",
                  border: "var(--border)",
                  padding: "0.8rem 1.2rem",
                  marginBottom: "1.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0.8rem",
                }}
              >
                <div style={{ fontSize: "0.85rem", fontWeight: 700 }}>
                  Showing <span className="accent">{filteredParts.length}</span> Verified Commercial Components
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "0.7rem", opacity: 0.6, fontWeight: 700 }}>VIEW MODE:</span>
                  <button
                    onClick={() => setViewMode("grid")}
                    style={{
                      background: viewMode === "grid" ? "#000" : "var(--base)",
                      color: viewMode === "grid" ? "#fff" : "#000",
                      border: "1px solid #000",
                      padding: "0.3rem 0.6rem",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      fontWeight: 700,
                    }}
                  >
                    ⊞ Grid View
                  </button>
                  <button
                    onClick={() => setViewMode("table")}
                    style={{
                      background: viewMode === "table" ? "#000" : "var(--base)",
                      color: viewMode === "table" ? "#fff" : "#000",
                      border: "1px solid #000",
                      padding: "0.3rem 0.6rem",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      fontWeight: 700,
                    }}
                  >
                    ☰ B2B Table View
                  </button>
                </div>
              </div>

              {filteredParts.length === 0 ? (
                <div style={{ padding: "4rem 2rem", textAlign: "center", border: "var(--border)", background: "var(--surface)" }}>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>No matching parts found in active index</h3>
                  <p style={{ opacity: 0.7, marginBottom: "1.5rem" }}>
                    We have over 15,000+ line items physically in stock at our Khalapur yard and Mumbai depot. Contact our desk with your VIN or OEM number for immediate retrieval.
                  </p>
                  <button className="btn btn--primary" onClick={() => openQuote({ title: "Custom Inquiry" })}>
                    Submit Instant Part Inquiry (+91 9702666664)
                  </button>
                </div>
              ) : viewMode === "grid" ? (
                /* GRID VIEW */
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.8rem" }}>
                  {filteredParts.map((part) => (
                    <div key={part.id} className="bento-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div>
                        {/* Part Image */}
                        {part.image && (
                          <div
                            style={{
                              height: "170px",
                              width: "100%",
                              background: "#FFFFFF",
                              border: "1px solid rgba(0,0,0,0.12)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginBottom: "1.2rem",
                              padding: "0.8rem",
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

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
                          <span className="tag tag--filled">{part.id}</span>
                          <span className={`tag ${part.condition.includes("Used") ? "tag--blue" : "tag--safety"}`}>
                            {part.condition}
                          </span>
                        </div>

                        <Link href={`/parts/${part.id.toLowerCase()}`}>
                          <h3 style={{ fontSize: "1.2rem", marginBottom: "0.8rem", lineHeight: "1.2", textDecoration: "none", color: "inherit" }}>
                            {part.title}
                          </h3>
                        </Link>

                        <div style={{ background: "var(--surface)", padding: "0.6rem 0.8rem", borderLeft: "3px solid var(--safety)", marginBottom: "0.8rem", fontSize: "0.78rem" }}>
                          <strong>OEM Ref:</strong> {part.oemRef}
                        </div>

                        <p style={{ fontSize: "0.8rem", opacity: 0.8, marginBottom: "0.8rem", lineHeight: "1.5" }}>
                          <strong>Compatibility:</strong> {part.brandCompatibility.join(" • ")}
                        </p>

                        <p style={{ fontSize: "0.75rem", opacity: 0.65, marginBottom: "1rem", lineHeight: "1.6" }}>
                          {part.specs}
                        </p>
                      </div>

                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.8rem 0", borderTop: "var(--border-thin)", marginBottom: "1rem", fontSize: "0.75rem" }}>
                          <span style={{ color: "var(--term-green)", fontWeight: 700 }}>● {part.stock}</span>
                          <span style={{ fontWeight: 700, color: "var(--safety)" }}>{part.priceRange}</span>
                        </div>

                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                          <button
                            className="btn btn--primary btn--sm"
                            style={{ flex: 1 }}
                            onClick={() => addToBasket(part, 1)}
                          >
                            + Add to RFQ
                          </button>
                          <Link
                            href={`/parts/${part.id.toLowerCase()}`}
                            className="btn btn--ghost btn--sm"
                          >
                            Specs →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* B2B TABLE VIEW */
                <div style={{ background: "var(--base)", border: "var(--border)", boxShadow: "var(--shadow)", overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem", textAlign: "left" }}>
                    <thead>
                      <tr style={{ background: "#000", color: "#fff", fontFamily: "var(--font-jetbrains-mono)" }}>
                        <th style={{ padding: "0.8rem 1rem", border: "1px solid #333" }}>PART CODE</th>
                        <th style={{ padding: "0.8rem 1rem", border: "1px solid #333" }}>COMPONENT DESCRIPTION</th>
                        <th style={{ padding: "0.8rem 1rem", border: "1px solid #333" }}>OEM NUMBER</th>
                        <th style={{ padding: "0.8rem 1rem", border: "1px solid #333" }}>CONDITION</th>
                        <th style={{ padding: "0.8rem 1rem", border: "1px solid #333" }}>PRICE INDICATION</th>
                        <th style={{ padding: "0.8rem 1rem", border: "1px solid #333" }}>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredParts.map((part, idx) => (
                        <tr
                          key={part.id}
                          style={{
                            background: idx % 2 === 0 ? "var(--base)" : "var(--surface)",
                            borderBottom: "1px solid rgba(0,0,0,0.1)",
                          }}
                        >
                          <td style={{ padding: "0.8rem 1rem", fontWeight: 700, fontFamily: "var(--font-jetbrains-mono)", color: "var(--safety)" }}>
                            <Link href={`/parts/${part.id.toLowerCase()}`}>{part.id}</Link>
                          </td>
                          <td style={{ padding: "0.8rem 1rem" }}>
                            <div style={{ fontWeight: 700 }}>
                              <Link href={`/parts/${part.id.toLowerCase()}`}>{part.title}</Link>
                            </div>
                            <div style={{ fontSize: "0.72rem", opacity: 0.6 }}>{part.brandCompatibility.join(", ")}</div>
                          </td>
                          <td style={{ padding: "0.8rem 1rem", fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.75rem" }}>
                            {part.oemRef}
                          </td>
                          <td style={{ padding: "0.8rem 1rem" }}>
                            <span className={`tag ${part.condition.includes("Used") ? "tag--blue" : "tag--safety"}`} style={{ fontSize: "0.65rem" }}>
                              {part.condition}
                            </span>
                          </td>
                          <td style={{ padding: "0.8rem 1rem", fontWeight: 700, fontFamily: "var(--font-space-grotesk)" }}>
                            {part.priceRange}
                          </td>
                          <td style={{ padding: "0.8rem 1rem" }}>
                            <div style={{ display: "flex", gap: "0.4rem" }}>
                              <button
                                onClick={() => addToBasket(part, 1)}
                                className="btn btn--primary btn--sm"
                                style={{ padding: "0.3em 0.6em", fontSize: "0.7rem" }}
                              >
                                + RFQ
                              </button>
                              <Link
                                href={`/parts/${part.id.toLowerCase()}`}
                                className="btn btn--ghost btn--sm"
                                style={{ padding: "0.3em 0.6em", fontSize: "0.7rem" }}
                              >
                                View
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <TickerBar />

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialPart={modalPart} />
    </>
  );
}

export default function PartsPage() {
  return (
    <Suspense fallback={<div style={{ padding: "4rem", textAlign: "center" }}>Loading Parts Catalogue...</div>}>
      <PartsCatalogContent />
    </Suspense>
  );
}
