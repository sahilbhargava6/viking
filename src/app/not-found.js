import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Viking Tradelinks",
};

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ maxWidth: "820px" }}>
        <div className="section__eyebrow">{"// ERROR 404"}</div>
        <h1 className="section__title" style={{ fontSize: "var(--fs-h1)", marginBottom: "1rem" }}>
          This page isn&apos;t in stock<span className="accent">.</span>
        </h1>
        <p style={{ fontSize: "1rem", lineHeight: 1.8, opacity: 0.8, marginBottom: "2rem", maxWidth: "60ch" }}>
          The link may be old or mistyped. Search the parts catalogue, or send us the OEM part number or chassis VIN
          and our team will find it for you.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/parts" className="btn btn--primary">
            Search Parts Catalogue
          </Link>
          <Link href="/contact" className="btn btn--ghost">
            Send a Part Enquiry
          </Link>
          <Link href="/" className="btn btn--ghost">
            Back to Home
          </Link>
        </div>
        <p style={{ marginTop: "2rem", fontSize: "0.85rem", opacity: 0.7 }}>
          Urgent? Call or WhatsApp{" "}
          <a href="tel:+919702666664" style={{ fontWeight: 700, textDecoration: "underline" }}>
            +91 9702666664
          </a>
          .
        </p>
      </div>
    </section>
  );
}
