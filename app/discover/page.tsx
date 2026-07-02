import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Pondicherry",
  description: "Explore Pondicherry beyond the surface — the French Quarter streets, heritage landmarks, Auroville, and the best things to do in town.",
};

const sections = [
  {
    href: "/discover/white-town",
    title: "White Town Streets",
    description: "The French Quarter grid — 43 streets named after governors, admirals, and soldiers. Each one has a story.",
    photo: "/streets/rue-françois-martin.jpg",
  },
  {
    href: "/discover/landmarks",
    title: "Sites & Landmarks",
    description: "Heritage buildings, temples, churches, museums, and the ancient ruins that predate the French by two thousand years.",
    photo: "/sites/customs-building.jpg",
  },
  {
    href: "/discover/auroville",
    title: "Auroville",
    description: "An experiment in human unity 10 km north of Pondicherry. 3,400 residents from 60 countries. Not easy to explain.",
    photo: "/auroville/matrimandir.jpg",
  },
  {
    href: "/discover/explore",
    title: "Walks, Trips & Experiences",
    description: "Self-guided walks, day trips, workshops, and experiences: from Arikamedu's Roman ruins to the Pichavaram mangroves.",
    photo: "/explore/walking-tour.jpg",
  },
];

export default function DiscoverPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b45309", marginBottom: 12 }}>Discover</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        Explore the Town
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#78716c", maxWidth: 600, lineHeight: 1.8, marginBottom: 56 }}>
        Pondicherry rewards slow exploration. The French Quarter is walkable in an afternoon, but understanding it takes longer. Start anywhere.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
        {sections.map(s => (
          <Link key={s.href} href={s.href} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 16, overflow: "hidden", display: "block" }}>
            <div style={{ position: "relative", width: "100%", height: 200 }}>
              <Image src={s.photo} alt={s.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
            <div style={{ padding: "20px 20px 18px" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 19, marginBottom: 8, lineHeight: 1.3 }}>{s.title}</p>
              <p style={{ fontSize: 14, color: "#78716c", lineHeight: 1.65 }}>{s.description}</p>
              <p style={{ fontSize: 12, color: "#b45309", fontWeight: 600, marginTop: 14 }}>Explore →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
