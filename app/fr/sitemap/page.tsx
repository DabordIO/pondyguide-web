import type { Metadata } from "next";
import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "Plan du site — Pondy Guide",
  description: "Une carte complète de tout ce que propose Pondy Guide — histoire, découverte, festivals, hôtels, restaurants, et informations pratiques.",
  alternates: {
    canonical: "/fr/sitemap",
    languages: {
      en: "/sitemap",
      fr: "/fr/sitemap",
      "x-default": "/sitemap",
    },
  },
};

const sections = [
  {
    label: "Histoire",
    links: [
      ["Histoire", "/fr/history"],
      ["Vies et héritages", "/fr/history/lives-and-legacies"],
      ["Institutions françaises", "/fr/history/institutions"],
    ],
  },
  {
    label: "Découvrir",
    links: [
      ["Rues du quartier français", "/fr/discover/white-town"],
      ["Monuments et sites historiques", "/fr/discover/landmarks"],
      ["Balades, excursions et expériences", "/fr/discover/explore"],
      ["Auroville", "/fr/discover/auroville"],
    ],
  },
  {
    label: "Fêtes",
    links: [
      ["Calendrier des fêtes", "/fr/festivals"],
    ],
  },
  {
    label: "Séjourner & manger",
    links: [
      ["Hôtels", "/fr/hotels"],
      ["Restaurants", "/fr/restaurants"],
    ],
  },
  {
    label: "À propos",
    links: [
      ["À propos de Pondy Guide", "/fr/about"],
      ["Contact", "/fr/contact"],
    ],
  },
];

export default function SitemapPageFr() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "56px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/sitemap" frHref="/fr/sitemap" current="fr" />
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>Plan du site</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "#1c1917", marginBottom: 48, lineHeight: 1.2 }}>
        Tout Pondy Guide
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
