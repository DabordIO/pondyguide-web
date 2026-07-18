import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { sites } from "@/data/sites";
import { sitesFr } from "@/data/fr/sites";
import { truncate } from "@/lib/truncate";

export const metadata: Metadata = {
  title: "Monuments, temples et sites historiques de Pondichéry",
  description: "Églises, temples, musées, bâtiments coloniaux et vestiges antiques — deux mille ans d'histoire locale.",
  alternates: {
    canonical: "/fr/discover/landmarks",
    languages: {
      en: "/discover/landmarks",
      fr: "/fr/discover/landmarks",
      "x-default": "/discover/landmarks",
    },
  },
};

export default function LandmarksPageFr() {
  const merged = sitesFr
    .map(fr => {
      const en = sites.find(s => s.id === fr.id);
      return en ? { fr, en } : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <Link href="/fr" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Accueil</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>Monuments</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        Monuments et sites historiques
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 640, lineHeight: 1.8, marginBottom: 56 }}>
        Des vestiges romains d'Arikamedu au Consulat de France sur le front de mer, les monuments et sites historiques de Pondichéry portent plus de deux mille ans de passé.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {merged.map(({ fr, en }) => (
          <Link key={fr.id} href={`/fr/discover/landmarks/${fr.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
            {en.photo && (
              <div style={{ position: "relative", width: "100%", height: 160 }}>
                <Image src={`/sites/${en.photo}`} alt={fr.name} fill style={{ objectFit: "cover", objectPosition: en.photoPosition ?? "center" }} />
              </div>
            )}
            <div style={{ padding: "14px 16px 16px" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 16, marginBottom: 6, lineHeight: 1.3 }}>{fr.name}</p>
              <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.55 }}>{truncate(fr.summary, 110)}</p>
              <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 10 }}>Lire la suite →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
