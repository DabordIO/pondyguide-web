import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { aurovilleArticles } from "@/data/auroville";
import { truncate } from "@/lib/truncate";

export const metadata: Metadata = {
  title: "Auroville — Pondicherry",
  description: "An experiment in human unity founded in 1968. 3,400 residents from 60 countries, 10 km north of Pondicherry. Not easy to explain, but worth understanding before you go.",
};

export default function AurovillePage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <Link href="/discover" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Discover</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>Auroville</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        Understanding Auroville
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 640, lineHeight: 1.8, marginBottom: 56 }}>
        Founded in 1968 on a plateau of eroded land north of Pondicherry, Auroville is home to around 3,400 people from more than 60 countries. It is neither a tourist attraction nor a spiritual retreat. Read before you visit.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
        {aurovilleArticles.map(a => (
          <Link key={a.id} href={`/discover/auroville/${a.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
            {a.photo ? (
              <div style={{ position: "relative", width: "100%", height: 180 }}>
                <Image src={`/auroville/${a.photo}`} alt={a.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
            ) : (
              <div style={{ width: "100%", height: 8, background: a.gradient }} />
            )}
            <div style={{ padding: "18px 18px 16px" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 8, lineHeight: 1.3 }}>{a.title}</p>
              <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.6 }}>{truncate(a.teaser, 120)}</p>
              <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 12 }}>Read more →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
