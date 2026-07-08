import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { exploreArticles } from "@/data/explore";
import { truncate } from "@/lib/truncate";

export const metadata: Metadata = {
  title: "Things to Do in Pondicherry",
  description: "Walks, day trips, workshops, and experiences in and around Pondicherry — from the Roman ruins at Arikamedu to the mangrove forests at Pichavaram.",
};

const CATEGORY_LABELS: Record<string, string> = {
  walk: "Walks",
  daytrip: "Day Trips",
  activity: "Activities",
  theme: "Themed Guides",
};

const CATEGORY_ORDER = ["walk", "daytrip", "activity", "theme"];

export default function ExplorePage() {
  const byCategory = CATEGORY_ORDER.map(cat => ({
    cat,
    items: exploreArticles.filter(a => a.category === cat),
  })).filter(g => g.items.length > 0);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <Link href="/discover" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Discover</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>Things to Do</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        Walks, Trips & Experiences
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 640, lineHeight: 1.8, marginBottom: 56 }}>
        Pondicherry is a good base for the south Tamil Nadu coast. The town itself rewards slow walking. Beyond it, the day trips are genuinely worth the effort.
      </p>

      {byCategory.map(({ cat, items }) => (
        <div key={cat} style={{ marginBottom: 52 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1c1917", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>
            {CATEGORY_LABELS[cat]}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {items.map(a => (
              <Link key={a.id} href={`/discover/explore/${a.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
                {a.photo && (
                  <div style={{ position: "relative", width: "100%", height: 160 }}>
                    <Image src={`/explore/${a.photo}`} alt={a.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                  </div>
                )}
                <div style={{ padding: "14px 16px 16px" }}>
                  {a.duration && <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 6 }}>{a.duration}</p>}
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 16, marginBottom: 6, lineHeight: 1.3 }}>{a.cardTitle ?? a.title}</p>
                  <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.55 }}>{truncate(a.teaser, 110)}</p>
                  <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 10 }}>Read more →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
