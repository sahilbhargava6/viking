"use client";

import { use, Suspense } from "react";
import { useState } from "react";
import Link from "next/link";
import { PARTS, BRANDS, CATEGORIES } from "@/data/partsData";
import { useRfq } from "@/context/RfqContext";
import QuoteModal from "@/components/QuoteModal";
import TickerBar from "@/components/TickerBar";

function PartDetailContent({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug?.toUpperCase();

  const part = PARTS.find((p) => p.id.toUpperCase() === slug);

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("specs");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState(part?.condition || "New OEM Alternative");

  const { addToBasket } = useRfq();

  if (!part) {
    return (
      <div className="section" style={{ textAlign: "center", padding: "8rem 2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Part Not Found</h1>
        <p style={{ marginBottom: "2rem", opacity: 0.7 }}>
          The requested part code &ldquo;{unwrappedParams.slug}&rdquo; does not match our current digital index.
        </p>
        <Link href="/parts" className="btn btn--primary">
          Return to Catalogue Index →
        </Link>
      </div>
    );
  }

  const relatedParts = PARTS.filter(
    (p) => (p.category === part.category || p.brand === part.brand) && p.id !== part.id
  ).slice(0, 3);

  const brandObj = BRANDS.find((b) => b.id === part.brand);
  const catObj = CATEGORIES.find((c) => c.id === part.category);

  // Technical cross reference numbers
  const crossRefs = [
    { supplier: "Volvo Genuine", num: "20518092 / 21036050", status: "100% Interchangeable" },
    { supplier: "Mercedes-Benz OEM", num: "0004211612 / 9424210112", status: "Dimension Match" },
    { supplier: "Knorr-Bremse", num: "K001925 / SB7000", status: "Direct Caliper Spec" },
    { supplier: "Wabco / Haldex", num: "432 410 020 2", status: "Pneumatics Compatible" },
    { supplier: "Bremskerl Germany", num: "BK-8472-HD / ECE-R90", status: "Premium Friction Compound" },
  ];

  const handleAddAndOpen = () => {
    addToBasket(part, quantity);
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: part.title,
    image: part.image ? `https://vikingeuroparts.com${part.image}` : "https://vikingeuroparts.com/images/logo.png",
    description: `${part.title} for ${part.brandCompatibility.join(", ")}. OEM Reference: ${part.oemRef}. Condition: ${part.condition}. Supplied by Viking Tradelinks Since 1969.`,
    sku: part.id,
    mpn: part.oemRef,
    brand: {
      "@type": "Brand",
      name: part.supplier || "Viking Certified OEM",
    },
    offers: {
      "@type": "Offer",
      url: `https://vikingeuroparts.com/parts/${part.id}`,
      priceCurrency: "INR",
      price: part.priceRange.replace(/[^0-9]/g, "") || "0",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: part.condition.toLowerCase().includes("used")
        ? "https://schema.org/UsedCondition"
        : "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "Viking Tradelinks",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://vikingeuroparts.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Parts Catalogue",
        item: "https://vikingeuroparts.com/parts",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: catObj?.name || part.category,
        item: `https://vikingeuroparts.com/parts?category=${part.category}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: part.title,
        item: `https://vikingeuroparts.com/parts/${part.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Breadcrumb Trail */}
      <div style={{ background: "var(--ink)", color: "var(--base)", padding: "0.8rem 0", borderBottom: "1px solid #333", fontSize: "0.75rem", fontFamily: "var(--font-jetbrains-mono), monospace" }}>
        <div className="container" style={{ display: "flex", gap: "0.6rem", alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ opacity: 0.6 }}>HOME</Link>
          <span style={{ opacity: 0.4 }}>/</span>
          <Link href="/parts" style={{ opacity: 0.6 }}>PARTS CATALOGUE</Link>
          <span style={{ opacity: 0.4 }}>/</span>
          <Link href={`/parts?category=${part.category}`} style={{ opacity: 0.6 }}>{catObj?.name?.toUpperCase() || part.category.toUpperCase()}</Link>
          <span style={{ opacity: 0.4 }}>/</span>
          <span style={{ color: "var(--safety)", fontWeight: 700 }}>{part.id}</span>
        </div>
      </div>

      <section className="section" style={{ paddingTop: "2.5rem" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "clamp(1.5rem, 4vw, 3.5rem)",
              alignItems: "start",
            }}
          >
            {/* Left: Component Images & Quality Badges */}
            <div className="part-detail-left">
              <div
                style={{
                  background: "#FFFFFF",
                  border: "var(--border)",
                  boxShadow: "var(--shadow)",
                  padding: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "400px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={part.image}
                  alt={part.title}
                  style={{
                    maxHeight: "340px",
                    maxWidth: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />

                <div style={{ position: "absolute", top: "1rem", left: "1rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <span className="tag tag--filled" style={{ fontSize: "0.7rem" }}>
                    PART # {part.id}
                  </span>
                  <span className="tag tag--safety" style={{ fontSize: "0.7rem" }}>
                    {part.warranty} WARRANTY
                  </span>
                </div>

                <div style={{ position: "absolute", bottom: "1rem", right: "1rem" }}>
                  <span className="tag tag--blue" style={{ fontSize: "0.7rem" }}>
                    {part.dispatchTime}
                  </span>
                </div>
              </div>

              {/* Quality & Yard Badges */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.8rem", marginTop: "1rem" }}>
                <div style={{ background: "var(--surface)", border: "var(--border-thin)", padding: "0.8rem", textAlign: "center" }}>
                  <div style={{ fontSize: "1rem", color: "var(--safety)" }}>✓</div>
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, marginTop: "0.2rem" }}>NDT TESTED</div>
                  <div style={{ fontSize: "0.65rem", opacity: 0.6 }}>Ultrasonic Verified</div>
                </div>
                <div style={{ background: "var(--surface)", border: "var(--border-thin)", padding: "0.8rem", textAlign: "center" }}>
                  <div style={{ fontSize: "1rem", color: "var(--safety)" }}>⚡</div>
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, marginTop: "0.2rem" }}>READY DISPATCH</div>
                  <div style={{ fontSize: "0.65rem", opacity: 0.6 }}>Khalapur & Mumbai</div>
                </div>
                <div style={{ background: "var(--surface)", border: "var(--border-thin)", padding: "0.8rem", textAlign: "center" }}>
                  <div style={{ fontSize: "1rem", color: "var(--safety)" }}>🛡</div>
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, marginTop: "0.2rem" }}>FIT GUARANTEE</div>
                  <div style={{ fontSize: "0.65rem", opacity: 0.6 }}>100% OEM Geometry</div>
                </div>
              </div>
            </div>

            {/* Right: Technical Specifications & RFQ Actions */}
            <div className="part-detail-right">
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.8rem" }}>
                <span className="tag tag--filled">{catObj?.name || part.category}</span>
                <span className="tag tag--outline-safety">SUPPLIER: {part.supplier}</span>
              </div>

              <h1 style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", lineHeight: "1.15", marginBottom: "1rem" }}>
                {part.title}
              </h1>

              <div
                style={{
                  background: "var(--surface)",
                  border: "var(--border-thin)",
                  padding: "1rem 1.2rem",
                  marginBottom: "1.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0.8rem",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.7rem", opacity: 0.6, textTransform: "uppercase" }}>COMMERCIAL FLEET PRICING</div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 700, fontFamily: "var(--font-space-grotesk)", color: "var(--safety)" }}>
                    {part.priceRange}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.7rem", opacity: 0.6, textTransform: "uppercase" }}>STOCK STATUS</div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--term-green)" }}>
                    ● {part.stock}
                  </div>
                </div>
              </div>

              {/* Condition Selector Toggle */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, marginBottom: "0.5rem", textTransform: "uppercase" }}>
                  Select Supply Condition:
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                  <button
                    type="button"
                    onClick={() => setSelectedCondition("New OEM Alternative")}
                    style={{
                      background: selectedCondition.includes("New") ? "var(--safety)" : "var(--base)",
                      color: selectedCondition.includes("New") ? "#fff" : "var(--ink)",
                      border: "var(--border)",
                      padding: "0.8rem",
                      cursor: "pointer",
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: "0.82rem" }}>Brand New OEM Alternative</div>
                    <div style={{ fontSize: "0.68rem", opacity: 0.8, marginTop: "0.2rem" }}>24 Months Warranty Coverage</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedCondition("Certified Dismantled")}
                    style={{
                      background: selectedCondition.includes("Dismantled") ? "var(--safety)" : "var(--base)",
                      color: selectedCondition.includes("Dismantled") ? "#fff" : "var(--ink)",
                      border: "var(--border)",
                      padding: "0.8rem",
                      cursor: "pointer",
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: "0.82rem" }}>Certified Dismantled Assembly</div>
                    <div style={{ fontSize: "0.68rem", opacity: 0.8, marginTop: "0.2rem" }}>14-Day Trial + 6-Month Option</div>
                  </button>
                </div>
              </div>

              {/* Action Buttons: Add to RFQ Basket & Direct WhatsApp */}
              <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", border: "var(--border)", background: "#fff" }}>
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    style={{ padding: "0.6rem 0.9rem", border: "none", background: "none", cursor: "pointer", fontWeight: 700, fontSize: "1rem" }}
                  >
                    -
                  </button>
                  <span style={{ minWidth: "30px", textAlign: "center", fontWeight: 700, fontFamily: "var(--font-jetbrains-mono)" }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    style={{ padding: "0.6rem 0.9rem", border: "none", background: "none", cursor: "pointer", fontWeight: 700, fontSize: "1rem" }}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddAndOpen}
                  className="btn btn--primary"
                  style={{ flex: 1, padding: "0.8rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                >
                  <span>+ Add to RFQ Basket</span>
                  <span style={{ opacity: 0.8 }}>({quantity} Units)</span>
                </button>

                <a
                  href={`https://wa.me/919702666664?text=${encodeURIComponent(`Hi Viking Tradelinks, checking price & dispatch for ${part.id} (${part.title}) Qty: ${quantity} units`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost"
                  style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
                >
                  <span>Chat on WhatsApp</span>
                  <span>→</span>
                </a>
              </div>

              {/* Technical Specifications Tabs */}
              <div style={{ borderTop: "2px solid #000", paddingTop: "1.5rem" }}>
                <div style={{ display: "flex", gap: "0.5rem", borderBottom: "var(--border-thin)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>
                  <button
                    onClick={() => setActiveTab("specs")}
                    style={{
                      background: activeTab === "specs" ? "#000" : "none",
                      color: activeTab === "specs" ? "#fff" : "#000",
                      border: "none",
                      padding: "0.4rem 0.8rem",
                      cursor: "pointer",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                    }}
                  >
                    TECHNICAL SPECIFICATIONS
                  </button>
                  <button
                    onClick={() => setActiveTab("oem")}
                    style={{
                      background: activeTab === "oem" ? "#000" : "none",
                      color: activeTab === "oem" ? "#fff" : "#000",
                      border: "none",
                      padding: "0.4rem 0.8rem",
                      cursor: "pointer",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                    }}
                  >
                    OEM CROSS REFERENCE MATRIX
                  </button>
                  <button
                    onClick={() => setActiveTab("fleet")}
                    style={{
                      background: activeTab === "fleet" ? "#000" : "none",
                      color: activeTab === "fleet" ? "#fff" : "#000",
                      border: "none",
                      padding: "0.4rem 0.8rem",
                      cursor: "pointer",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                    }}
                  >
                    COMPATIBLE FLEETS
                  </button>
                </div>

                {activeTab === "specs" && (
                  <div>
                    <div style={{ background: "var(--surface)", padding: "1rem", border: "var(--border-thin)", marginBottom: "1rem", fontSize: "0.85rem", lineHeight: "1.7" }}>
                      <strong>Core Parameters:</strong> {part.specs}
                    </div>
                    <ul style={{ paddingLeft: "1.2rem", fontSize: "0.82rem", lineHeight: "1.8", opacity: 0.85 }}>
                      {part.features.map((feat, idx) => (
                        <li key={idx} style={{ marginBottom: "0.4rem" }}>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "oem" && (
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem", textAlign: "left" }}>
                      <thead>
                        <tr style={{ background: "#000", color: "#fff" }}>
                          <th style={{ padding: "0.6rem 0.8rem", border: "1px solid #333" }}>MANUFACTURER / BRAND</th>
                          <th style={{ padding: "0.6rem 0.8rem", border: "1px solid #333" }}>OEM REFERENCE NO</th>
                          <th style={{ padding: "0.6rem 0.8rem", border: "1px solid #333" }}>FITMENT MATCH</th>
                        </tr>
                      </thead>
                      <tbody>
                        {crossRefs.map((cr, idx) => (
                          <tr key={idx} style={{ background: idx % 2 === 0 ? "var(--base)" : "var(--surface)" }}>
                            <td style={{ padding: "0.6rem 0.8rem", border: "var(--border-thin)", fontWeight: 700 }}>{cr.supplier}</td>
                            <td style={{ padding: "0.6rem 0.8rem", border: "var(--border-thin)", fontFamily: "var(--font-jetbrains-mono)" }}>{cr.num}</td>
                            <td style={{ padding: "0.6rem 0.8rem", border: "var(--border-thin)", color: "var(--safety)", fontWeight: 700 }}>{cr.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === "fleet" && (
                  <div style={{ background: "var(--surface)", padding: "1.2rem", border: "var(--border-thin)" }}>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--safety)", marginBottom: "0.6rem" }}>
                      VERIFIED FACTORY TRUCK FITMENTS:
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {part.brandCompatibility.map((comp, idx) => (
                        <span key={idx} className="tag tag--filled" style={{ fontSize: "0.75rem" }}>
                          ✓ {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Components Section */}
      {relatedParts.length > 0 && (
        <section className="section section--surface">
          <div className="container">
            <div className="section__header" style={{ marginBottom: "2rem" }}>
              <div className="section__eyebrow">// COMPLEMENTARY FLEET COMPONENTS</div>
              <h3 className="section__title" style={{ fontSize: "1.6rem" }}>
                Related Heavy Spares<span className="accent">.</span>
              </h3>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {relatedParts.map((rel) => (
                <div key={rel.id} className="bento-card" style={{ padding: "1.2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ height: "140px", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.8rem", padding: "0.5rem" }}>
                      <img src={rel.image} alt={rel.title} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "var(--safety)", fontWeight: 700 }}>{rel.id} • {rel.condition}</div>
                    <h4 style={{ fontSize: "0.95rem", margin: "0.3rem 0" }}>{rel.title}</h4>
                    <div style={{ fontSize: "0.72rem", opacity: 0.65 }}>OEM: {rel.oemRef}</div>
                  </div>
                  <div style={{ marginTop: "1rem" }}>
                    <Link href={`/parts/${rel.id.toLowerCase()}`} className="btn btn--primary btn--sm" style={{ width: "100%" }}>
                      Inspect Specification →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <TickerBar />

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultPart={part} />
    </>
  );
}

export default function PartDetailPage({ params }) {
  return (
    <Suspense
      fallback={
        <div style={{ padding: "8rem 2rem", textAlign: "center", fontFamily: "var(--font-jetbrains-mono)" }}>
          Loading Part Specification...
        </div>
      }
    >
      <PartDetailContent params={params} />
    </Suspense>
  );
}
