import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { figures } from "@/data/figures";
import { truncate } from "@/lib/truncate";

export const metadata: Metadata = {
  title: "Lives and Legacies That Shaped Pondicherry",
  description: "Meet the governors, commanders, diplomats and writers whose decisions shaped Pondicherry and its streets.",
  alternates: {
    languages: {
      en: "/history/lives-and-legacies",
      ta: "/ta/history/lives-and-legacies",
      "x-default": "/history/lives-and-legacies",
    },
  },
};

export default function LivesAndLegaciesPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <Link href="/history" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← History</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>History</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        Lives & Legacies
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 640, lineHeight: 1.8, marginBottom: 56 }}>
        The governors, commanders, diplomats, and diarists who shaped Pondicherry's history, and left their names on its streets.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {figures.map(f => (
          <Link key={f.id} href={`/history/lives-and-legacies/${f.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
            <div style={{ position: "relative", width: "100%", height: 220, background: "#f0ece6" }}>
              {f.photo && <Image src={`/figures/${f.photo}`} alt={f.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} />}
            </div>
            <div style={{ padding: "14px 16px 16px" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 16, marginBottom: 4, lineHeight: 1.3 }}>{f.name}</p>
              <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginBottom: 8 }}>{f.dates}</p>
              <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.55 }}>{truncate(f.teaser, 110)}</p>
              <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 10 }}>Read more →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
