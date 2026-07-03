import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan Your Trip to Pondicherry",
  description: "Everything you need before you go — how to get here, getting around town, healthcare, and practical advice from people who know Pondicherry well.",
};

const sections = [
  {
    href: "/plan/getting-here",
    title: "Getting Here",
    description: "From Chennai by bus or train, from Bangalore overnight, from Madurai by road. No meaningful direct flights — but the journey is manageable.",
    photo: "/transport/puducherry-railway-station.jpg",
  },
  {
    href: "/plan/getting-around",
    title: "Getting Around",
    description: "Auto-rickshaws, bicycles, scooters, and the rare taxi. The White Town is walkable. Beyond it, you need wheels.",
    photo: "/transport/auto-rickshaw-white-town.jpg",
  },
  {
    href: "/plan/healthcare",
    title: "Emergency",
    description: "JIPMER is one of India's premier medical institutes. Private clinics are plentiful. Pharmacies are on every corner.",
    photo: "/healthcare/public-hospital.jpg",
  },
  {
    href: "/plan/practical",
    title: "Practical Tips",
    description: "Currency, SIM cards, dress code, water safety, tipping, and the things visitors consistently get wrong.",
    photo: "/transport/general-tourism-information.jpeg",
  },
];

export default function PlanPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b45309", marginBottom: 12 }}>Plan</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        Before You Go
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 600, lineHeight: 1.8, marginBottom: 56 }}>
        Pondicherry is easy to navigate once you understand the basics. Most visitors get into trouble for the same three or four reasons. Read this first.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
        {sections.map(s => (
          <Link key={s.href} href={s.href} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
            <div style={{ position: "relative", width: "100%", height: 180 }}>
              <Image src={s.photo} alt={s.title} fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ padding: "16px 18px 18px" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 19, marginBottom: 10, lineHeight: 1.3 }}>{s.title}</p>
              <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.65 }}>{s.description}</p>
              <p style={{ fontSize: 14, color: "#b45309", fontWeight: 600, marginTop: 16 }}>Read →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
