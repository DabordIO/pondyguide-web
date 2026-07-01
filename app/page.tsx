import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pondy Guide — Pondicherry Travel & Heritage Guide",
  description: "The definitive English-language guide to Pondicherry. History, heritage streets, restaurants, hotels, festivals, and practical travel information.",
};

const sections = [
  { label: "History", href: "/history", desc: "The French colony, the battles, the people who shaped it.", gradient: "linear-gradient(135deg, #78350f, #b45309)" },
  { label: "Discover", href: "/discover", desc: "White Town streets, landmarks, Auroville, and beyond.", gradient: "linear-gradient(135deg, #065f46, #059669)" },
  { label: "Restaurants", href: "/restaurants", desc: "Where to eat — from the garden cafés to the seafood tables.", gradient: "linear-gradient(135deg, #7c2d12, #ea580c)" },
  { label: "Hotels", href: "/hotels", desc: "Heritage mansions, boutique guesthouses, and coastal escapes.", gradient: "linear-gradient(135deg, #1e3a5f, #2563eb)" },
  { label: "Festivals", href: "/festivals", desc: "When to go and what you will find when you get there.", gradient: "linear-gradient(135deg, #4a044e, #a21caf)" },
  { label: "Plan Your Trip", href: "/plan", desc: "Getting here, getting around, and everything practical.", gradient: "linear-gradient(135deg, #374151, #4b5563)" },
];

export default function HomePage() {
  return (
    <>
      <section style={{ background: "#1c1917", padding: "80px 24px 72px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#f97316", marginBottom: 16 }}>
            pondyguide.com
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2.2rem, 6vw, 3.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 24 }}>
            Pondicherry, properly told.
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#a8a29e", lineHeight: 1.8, maxWidth: 560, margin: "0 auto 40px" }}>
            A serious guide to one of India&apos;s most layered towns — its French colonial history, its streets, its food, and what to do when you get there.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/history" style={{ background: "#f97316", color: "#fff", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 10, textDecoration: "none" }}>
              Start with History
            </Link>
            <Link href="/discover" style={{ background: "rgba(255,255,255,0.08)", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 10, textDecoration: "none" }}>
              Explore the Town
            </Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px" }}>
        <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.75rem", fontWeight: 700, marginBottom: 32, color: "#1c1917" }}>
          Everything you need
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {sections.map((s) => (
            <Link key={s.href} href={s.href} style={{ textDecoration: "none", borderRadius: 16, overflow: "hidden", display: "block", background: s.gradient }}>
              <div style={{ padding: "28px 24px 24px" }}>
                <p style={{ fontSize: 22, fontWeight: 700, color: "#fff", fontFamily: "var(--font-playfair), Georgia, serif", marginBottom: 8 }}>{s.label}</p>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ background: "#1c1917", borderRadius: 20, padding: "48px 40px", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f97316", marginBottom: 10 }}>The Pondy App</p>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "#fff", marginBottom: 12, lineHeight: 1.3 }}>
              The whole guide, offline, in your pocket.
            </p>
            <p style={{ fontSize: 15, color: "#a8a29e", lineHeight: 1.7 }}>
              Maps, street stories, restaurant picks, hotel guides — everything on this site works offline on the Pondy App.
            </p>
          </div>
          <Link href="/app" style={{ background: "#f97316", color: "#fff", fontWeight: 700, fontSize: 16, padding: "16px 32px", borderRadius: 12, textDecoration: "none", whiteSpace: "nowrap" }}>
            Get the Pondy App →
          </Link>
        </div>
      </section>
    </>
  );
}
