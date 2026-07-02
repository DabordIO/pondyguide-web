import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Pondy Guide",
  description: "Get in touch with the Pondy Guide team.",
};

export default function ContactPage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "56px 24px 80px" }}>
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b45309", marginBottom: 12 }}>Contact</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "#1c1917", marginBottom: 32, lineHeight: 1.2 }}>
        Get in touch
      </h1>
      <div style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "#292524" }}>
        <p style={{ marginBottom: "1.25rem" }}>
          Thank you for visiting. Pondy Guide is a personal project, a genuine attempt to give visitors the most researched, most honest account of yesterday's Pondichéry and today's Puducherry.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          If you notice a factual discrepancy anywhere on the site, it is unintentional and we very much want to hear about it. If you would like to suggest a new article, or simply leave a comment, we would be glad to receive that too.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          Write to us at{" "}
          <a href="mailto:hello@pondyguide.com" style={{ color: "#b45309", textDecoration: "none", fontWeight: 600 }}>
            hello@pondyguide.com
          </a>
        </p>
      </div>
    </div>
  );
}
