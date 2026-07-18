import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { restaurants, type Restaurant } from "@/data/restaurants";
import { restaurantsFr } from "@/data/fr/restaurants";
import { restaurantGuides } from "@/data/restaurantGuides";
import { restaurantGuidesFr } from "@/data/fr/restaurantGuides";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "Restaurants à Pondichéry, sélection locale honnête",
  description: "Découvrez les restaurants de Pondichéry, des cafés coloniaux en cour intérieure aux adresses de fruits de mer en passant par les classiques sud-indiens, avec des recommandations honnêtes.",
  alternates: {
    canonical: "/fr/restaurants",
    languages: {
      en: "/restaurants",
      ta: "/ta/restaurants",
      fr: "/fr/restaurants",
      "x-default": "/restaurants",
    },
  },
};

const PRICE = { budget: "₹", mid: "₹₹", upscale: "₹₹₹" };

function RestaurantCard({ r, fr }: { r: Restaurant; fr: { name: string; summary: string } }) {
  return (
    <Link href={`/fr/restaurants/${r.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
      {r.photo && (
        <div style={{ position: "relative", width: "100%", height: 180 }}>
          <Image src={`/restaurants/${r.photo}`} alt={fr.name} fill style={{ objectFit: "cover", objectPosition: r.photoPosition ?? "center" }} />
        </div>
      )}
      <div style={{ padding: "20px 20px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, lineHeight: 1.3 }}>{fr.name}</p>
          <span style={{ fontSize: 13, color: "#6b6560", marginLeft: 8, flexShrink: 0 }}>{PRICE[r.priceRange]}</span>
        </div>
        <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.6 }}>{fr.summary.length > 110 ? `${fr.summary.slice(0, 110).trimEnd()}…` : fr.summary}</p>
        <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 12 }}>Lire la suite →</p>
      </div>
    </Link>
  );
}

function GuideCard({ title, slug, photos, span }: { title: string; slug: string; photos: string[]; span: number }) {
  const [main, ...rest] = photos;
  const side = rest.slice(0, 2);
  return (
    <Link href={`/fr/restaurants/guides/${slug}`} style={{ gridColumn: `span ${span}`, textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", minHeight: 180 }}>
      <div style={{ flex: "2 1 0%", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 180 }}>
        <div style={{ position: "relative" }}>
          {main && <Image src={`/restaurants/${main}`} alt="" fill sizes="200px" style={{ objectFit: "cover" }} />}
        </div>
        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
          {side.map((photo, i) => (
            <div key={i} style={{ position: "relative" }}>
              <Image src={`/restaurants/${photo}`} alt="" fill sizes="200px" style={{ objectFit: "cover" }} />
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

export default function RestaurantsPageFr() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/restaurants" taHref="/ta/restaurants" frHref="/fr/restaurants" current="fr" />

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>Manger</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        Restaurants à Pondichéry
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 600, lineHeight: 1.8, marginBottom: 56 }}>
        Pondichéry est étonnamment généreuse côté cuisine. Cafés d'inspiration française, fruits de mer frais, thalis tamouls faits maison, et de quoi tenir au café toute l'après-midi malgré la chaleur.
      </p>

      {restaurantGuides.map(guideEn => {
        const guideFr = restaurantGuidesFr.find(g => g.id === guideEn.id);
        if (!guideFr) return null;
        const group = restaurants.filter(r => guideEn.restaurantIds.includes(r.id));
        if (!group.length) return null;
        return (
          <div key={guideEn.id} style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1c1917", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>
              {guideFr.title}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {group.map(r => {
                const fr = restaurantsFr.find(f => f.id === r.id);
                if (!fr) return null;
                return <RestaurantCard key={r.id} r={r} fr={fr} />;
              })}
              {guideFr.intro && (
                <GuideCard
                  title={guideFr.title}
                  slug={guideEn.slug}
                  photos={group.filter(r => r.photo).map(r => r.photo as string)}
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
