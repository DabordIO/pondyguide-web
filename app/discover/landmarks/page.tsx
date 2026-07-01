import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { sites, CATEGORY_LABELS, CATEGORY_COLORS } from "@/data/sites";

export const metadata: Metadata = {
  title: "Landmarks & Sites — Pondicherry",
  description: "Heritage buildings, temples, churches, museums, and the ancient ruins that predate the French by two thousand years.",
};

const CATEGORY_ORDER = ["experience", "admire"] as const;

export default function LandmarksPage() {
  const byCategory = CATEGORY_ORDER.map(cat => ({
    cat,
    items: sites.filter(s => s.category === cat),
  })).filter(g => g.items.length > 0);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <Link href="/discover" style={{ fontSize: 13, color: "#b45309", textDecoration: "none", fontWeight: 600 }}>← Discover</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b45309", margin: "20px 0 12px" }}>Landmarks</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        Sites & Landmarks
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#78716c", maxWidth: 640, lineHeight: 1.8, marginBottom: 56 }}>
        From Arikamedu's Roman-era ruins to the French Consulate on the seafront, Pondicherry's landmarks span more than two thousand years of history.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {byCategory.flatMap(({ items }) => items).map(s => (
          <Link key={s.id} href={`/discover/landmarks/${s.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
            {s.photo && (
              <div style={{ position: "relative", width: "100%", height: 160 }}>
                <Image src={`/sites/${s.photo}`} alt={s.name} fill style={{ objectFit: "cover", objectPosition: s.photoPosition ?? "center" }} />
              </div>
            )}
            <div style={{ padding: "14px 16px 16px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: CATEGORY_COLORS[s.category], marginBottom: 6 }}>{CATEGORY_LABELS[s.category]}</p>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 16, marginBottom: 6, lineHeight: 1.3 }}>{s.name}</p>
              <p style={{ fontSize: 13, color: "#78716c", lineHeight: 1.55 }}>{s.summary.slice(0, 110)}…</p>
              <p style={{ fontSize: 12, color: "#b45309", fontWeight: 600, marginTop: 10 }}>Read more →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
