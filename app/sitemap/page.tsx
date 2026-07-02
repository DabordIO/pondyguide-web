import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap — Pondy Guide",
  description: "A full map of everything on Pondy Guide — history, discover, festivals, hotels, restaurants, and practical information.",
};

const sections = [
  {
    label: "History",
    links: [
      ["History", "/history"],
      ["Lives & Legacies", "/history/lives-and-legacies"],
      ["Institutions", "/history/institutions"],
    ],
  },
  {
    label: "Discover",
    links: [
      ["Discover", "/discover"],
      ["White Town streets", "/discover/white-town"],
      ["Landmarks & sites", "/discover/landmarks"],
      ["Explore", "/discover/explore"],
      ["Auroville", "/discover/auroville"],
    ],
  },
  {
    label: "Festivals",
    links: [
      ["Festivals", "/festivals"],
    ],
  },
  {
    label: "Stay & Eat",
    links: [
      ["Hotels", "/hotels"],
      ["Restaurants", "/restaurants"],
    ],
  },
  {
    label: "Plan Your Visit",
    links: [
      ["Plan", "/plan"],
      ["Getting Here", "/plan/getting-here"],
      ["Getting Around", "/plan/getting-around"],
      ["Healthcare", "/plan/healthcare"],
      ["Practical", "/plan/practical"],
    ],
  },
  {
    label: "About",
    links: [
      ["About Pondy Guide", "/about"],
      ["Contact", "/contact"],
    ],
  },
];

export default function SitemapPage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "56px 24px 80px" }}>
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b45309", marginBottom: 12 }}>Sitemap</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "#1c1917", marginBottom: 48, lineHeight: 1.2 }}>
        Everything on Pondy Guide
      </h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px 48px" }}>
        {sections.map((section) => (
          <div key={section.label}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#f97316", marginBottom: 12 }}>
              {section.label}
            </p>
            {section.links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                style={{ display: "block", fontSize: 14, color: "#292524", textDecoration: "none", marginBottom: 10, lineHeight: 1.4 }}
              >
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
