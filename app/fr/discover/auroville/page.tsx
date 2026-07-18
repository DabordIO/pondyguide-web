import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { aurovilleArticles } from "@/data/auroville";
import { aurovilleArticlesFr } from "@/data/fr/auroville";
import { truncate } from "@/lib/truncate";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "Auroville : histoire, idées et lieux à visiter",
  description: "Fondée en 1968, Auroville compte 3 400 résidents venus de 60 pays. Comprenez la cité avant votre visite.",
  alternates: {
    canonical: "/fr/discover/auroville",
    languages: {
      en: "/discover/auroville",
      fr: "/fr/discover/auroville",
      "x-default": "/discover/auroville",
    },
  },
};

export default function AurovillePageFr() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/discover/auroville" frHref="/fr/discover/auroville" current="fr" />
      <Link href="/fr" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Accueil</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>Auroville</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        Comprendre Auroville
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 640, lineHeight: 1.8, marginBottom: 56 }}>
        Fondée en 1968 sur un plateau de terre érodée au nord de Pondichéry, Auroville compte environ 3 400 habitants venus de plus de 60 pays. Ce n'est ni une attraction touristique, ni une retraite spirituelle. À lire avant votre visite.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
        {aurovilleArticles.map(en => {
          const fr = aurovilleArticlesFr.find(a => a.id === en.id);
          if (!fr) return null;
          return (
            <Link key={fr.id} href={`/fr/discover/auroville/${fr.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
              {en.photo ? (
                <div style={{ position: "relative", width: "100%", height: 180 }}>
                  <Image src={`/auroville/${en.photo}`} alt={fr.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                </div>
              ) : (
                <div style={{ width: "100%", height: 8, background: en.gradient }} />
              )}
              <div style={{ padding: "18px 18px 16px" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 8, lineHeight: 1.3 }}>{fr.title}</p>
                <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.6 }}>{truncate(fr.teaser, 120)}</p>
                <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 12 }}>Lire la suite →</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
