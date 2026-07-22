import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { hotels, COLLECTION_ORDER, getHotelsByCollection } from "@/data/hotels";
import { hotelsFr, COLLECTION_LABELS_FR } from "@/data/fr/hotels";
import { hotelGuidesFr } from "@/data/fr/hotelGuides";
import { hotelGuides } from "@/data/hotelGuides";
import LanguageToggle from "@/components/LanguageToggle";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Hôtels à Pondichéry, où loger et pourquoi",
  description: "Comparez demeures patrimoniales, maisons d'hôtes boutique, hôtels familiaux et retraites côtières, avec des recommandations indépendantes.",
  alternates: {
    canonical: "/fr/hotels",
    languages: {
      en: "/hotels",
      ta: "/ta/hotels",
      fr: "/fr/hotels",
      "x-default": "/hotels",
    },
  },
};

function GuideCard({ title, slug, photos, span }: { title: string; slug: string; photos: string[]; span: number }) {
  const [main, ...rest] = photos;
  const side = rest.slice(0, 2);
  return (
    <Link href={`/fr/hotels/guides/${slug}`} className="guide-card" style={{ gridColumn: `span ${span}`, textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", minHeight: 180 }}>
      <div style={{ flex: "2 1 0%", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 180 }}>
        <div style={{ position: "relative" }}>
          {main && <Image src={`/hotels/${main}`} alt="" fill sizes="200px" style={{ objectFit: "cover" }} />}
        </div>
        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
          {side.map((photo, i) => (
            <div key={i} style={{ position: "relative" }}>
              <Image src={`/hotels/${photo}`} alt="" fill sizes="200px" style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: "1 1 0%", padding: "20px 20px 16px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 6 }}>{title}</p>
        <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600 }}>Lire l'article complet →</p>
      </div>
    </Link>
  );
}

export default function HotelsPageFr() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/hotels" taHref="/ta/hotels" frHref="/fr/hotels" current="fr" />
      <Breadcrumbs items={[{ label: "Accueil", href: "/fr" }, { label: "Hôtels", href: "/fr/hotels" }]} />

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>Séjourner</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        Hôtels à Pondichéry
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 600, lineHeight: 1.8, marginBottom: 56 }}>
        L'endroit où vous séjournez façonne toute l'expérience. Une demeure patrimoniale à White Town vous plonge dans l'histoire. Un complexe côtier vous garde tout près de la mer. Voici comment choisir.
      </p>

      {COLLECTION_ORDER.map(collection => {
        const group = getHotelsByCollection(collection);
        if (!group.length) return null;
        const guideEn = hotelGuides.find(g => g.id === collection);
        const guideFr = hotelGuidesFr.find(g => g.id === collection);
        return (
          <div key={collection} style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1c1917", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>
              {COLLECTION_LABELS_FR[collection]}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
              {group.map(h => {
                const fr = hotelsFr.find(f => f.id === h.id);
                if (!fr) return null;
                return (
                  <Link key={h.id} href={`/fr/hotels/${h.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
                    {h.photo && (
                      <div style={{ position: "relative", width: "100%", height: 180 }}>
                        <Image src={`/hotels/${h.photo}`} alt={fr.name} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                      </div>
                    )}
                    <div style={{ padding: "20px 20px 16px" }}>
                      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 6 }}>{fr.name}</p>
                      <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.6 }}>{fr.tagline}</p>
                      <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 12 }}>Lire la suite →</p>
                    </div>
                  </Link>
                );
              })}
              {guideEn?.intro && guideFr?.intro && (
                <GuideCard
                  title={guideFr.title}
                  slug={guideEn.slug}
                  photos={group.filter(h => h.photo).map(h => h.photo as string)}
                  span={[1, 3, 2][(group.length + 1) % 3]}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
