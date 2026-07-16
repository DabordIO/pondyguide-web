import type { Metadata } from "next";
import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "தள வரைபடம் — Pondy Guide",
  description: "Pondy Guide-இல் உள்ள அனைத்தையும் காணும் ஒரு முழு வரைபடம் — வரலாறு, தளங்கள், திருவிழாக்கள், ஹோட்டல்கள், உணவகங்கள் மற்றும் நடைமுறைத் தகவல்கள்.",
  alternates: {
    languages: {
      en: "/sitemap",
      ta: "/ta/sitemap",
      "x-default": "/sitemap",
    },
  },
};

const sections = [
  {
    label: "வரலாறு",
    links: [
      ["வரலாறு", "/ta/history"],
      ["வாழ்க்கை வரலாறுகள்", "/ta/history/lives-and-legacies"],
    ],
  },
  {
    label: "கண்டறியுங்கள்",
    links: [
      ["வெள்ளை நகர் தெருக்கள்", "/ta/discover/white-town"],
      ["சின்னங்கள்", "/ta/discover/landmarks"],
    ],
  },
  {
    label: "தங்குமிடம் & உணவு",
    links: [
      ["ஹோட்டல்கள்", "/ta/hotels"],
      ["உணவகங்கள்", "/ta/restaurants"],
    ],
  },
  {
    label: "பற்றி",
    links: [
      ["Pondy Guide பற்றி", "/ta/about"],
      ["தொடர்பு", "/ta/contact"],
    ],
  },
];

export default function SitemapPageTa() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "56px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/sitemap" taHref="/ta/sitemap" current="ta" />
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>தள வரைபடம்</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "#1c1917", marginBottom: 48, lineHeight: 1.2 }}>
        Pondy Guide-இல் உள்ள அனைத்தும்
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
