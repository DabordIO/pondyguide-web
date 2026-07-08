import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { transportArticles } from "@/data/transport";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";

export const metadata: Metadata = {
  title: "Getting Around Pondicherry",
  description: "Auto-rickshaws, bicycles, scooters, and the rare taxi. The White Town is walkable in 20 minutes. Beyond it, you need wheels.",
};

const articles = transportArticles.filter(a => a.category === "local");

export default function GettingAroundPage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px" }}>
      <Link href="/plan" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Plan</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>Getting Around</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        Moving Around Town
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 40, paddingBottom: 40, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        The French Quarter is compact — most of it fits within a 20-minute walk. For Auroville, the beaches south of town, or any day trip, you need a vehicle. Here is what works.
      </p>

      {articles.map((a, i) => (
        <div key={a.id} style={{ marginBottom: 48, paddingBottom: i < articles.length - 1 ? 48 : 0, borderBottom: i < articles.length - 1 ? "1px solid #e8ddd4" : "none" }}>
          {a.photo && (
            <div style={{ position: "relative", width: "100%", height: 300, borderRadius: 12, overflow: "hidden", marginBottom: 20 }}>
              <Image src={`/transport/${a.photo}`} alt={a.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
          )}
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1c1917", marginBottom: 8 }}>{a.title}</h2>
          <p style={{ fontSize: "1rem", color: "#6b6560", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>{a.teaser}</p>
          <ArticleBody text={a.body} />
        </div>
      ))}

      <AppBanner />
    </div>
  );
}
