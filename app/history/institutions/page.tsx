import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { institutionArticles } from "@/data/institutions";
import { truncate } from "@/lib/truncate";

export const metadata: Metadata = {
  title: "French Institutions Still Operating in Pondicherry",
  description: "Schools, research centres, the consulate and cultural organisations show how France's presence endures in Pondicherry.",
  alternates: {
    languages: {
      en: "/history/institutions",
      fr: "/fr/history/institutions",
      "x-default": "/history/institutions",
    },
  },
};

export default function InstitutionsPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <Link href="/history" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← History</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>History</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        French Institutions
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 640, lineHeight: 1.8, marginBottom: 56 }}>
        The schools, consulate, research centres, and cultural organisations that France left behind in Pondicherry, many of which are still operating today.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {institutionArticles.map(a => (
          <Link key={a.id} href={`/history/institutions/${a.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
            {a.photo && (
              <div style={{ position: "relative", width: "100%", height: 160 }}>
                <Image src={`/${a.photoFolder ?? "history"}/${a.photo}`} alt={a.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
            )}
            <div style={{ padding: "14px 16px 16px" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 16, marginBottom: 6, lineHeight: 1.3 }}>{a.title}</p>
              <p style={{ fontSize: 12, color: "#6b6560", fontStyle: "italic", marginBottom: 8 }}>{a.subtitle}</p>
              <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.55 }}>{truncate(a.teaser, 110)}</p>
              <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 10 }}>Read more →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
