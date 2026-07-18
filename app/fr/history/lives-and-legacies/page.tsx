import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { figures } from "@/data/figures";
import { figuresFr } from "@/data/fr/figures";
import { truncate } from "@/lib/truncate";

export const metadata: Metadata = {
  title: "Vies et héritages qui ont façonné Pondichéry",
  description: "Découvrez les gouverneurs, commandants, diplomates et écrivains dont les décisions ont façonné Pondichéry et ses rues.",
  alternates: {
    canonical: "/fr/history/lives-and-legacies",
    languages: {
      en: "/history/lives-and-legacies",
      ta: "/ta/history/lives-and-legacies",
      fr: "/fr/history/lives-and-legacies",
      "x-default": "/history/lives-and-legacies",
    },
  },
};

export default function LivesAndLegaciesPageFr() {
  const entries = figuresFr
    .map(fr => {
      const en = figures.find(f => f.id === fr.id);
      return en ? { fr, en } : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <Link href="/fr" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Accueil</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>Histoire</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        Vies & Héritages
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 640, lineHeight: 1.8, marginBottom: 56 }}>
        Les gouverneurs, commandants, diplomates et diaristes qui ont façonné l'histoire de Pondichéry, et laissé leur nom sur ses rues.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {entries.map(({ fr, en }) => (
          <Link key={fr.id} href={`/fr/history/lives-and-legacies/${fr.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
            <div style={{ position: "relative", width: "100%", height: 220, background: "#f0ece6" }}>
              {en.photo && <Image src={`/figures/${en.photo}`} alt={fr.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} />}
            </div>
            <div style={{ padding: "14px 16px 16px" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 16, marginBottom: 4, lineHeight: 1.3 }}>{fr.name}</p>
              <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginBottom: 8 }}>{fr.dates}</p>
              <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.55 }}>{truncate(fr.teaser ?? "", 110)}</p>
              <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 10 }}>Lire la suite →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
