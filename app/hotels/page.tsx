import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { hotels, COLLECTION_LABELS, COLLECTION_ORDER, getHotelsByCollection } from "@/data/hotels";
import { hotelGuides } from "@/data/hotelGuides";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "Hotels in Pondicherry, Where to Stay and Why",
  description: "Compare heritage mansions, boutique guesthouses, family hotels and coastal retreats with independent recommendations.",
  alternates: {
    languages: {
      en: "/hotels",
      ta: "/ta/hotels",
      fr: "/fr/hotels",
      "x-default": "/hotels",
    },
  },
};

function GuideCard({ title, slug, photos }: { title: string; slug: string; photos: string[] }) {
  const tiles = photos.slice(0, 4);
  return (
    <Link href={`/hotels/guides/${slug}`} style={{ position: "relative", textDecoration: "none", border: "1px solid #1c1917", borderRadius: 14, overflow: "hidden", display: "block", minHeight: 180 }}>
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr" }}>
        {tiles.map((photo, i) => (
          <div key={i} style={{ position: "relative" }}>
            <Image src={`/hotels/${photo}`} alt="" fill sizes="200px" style={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(28,25,23,0.25) 0%, rgba(28,25,23,0.55) 55%, rgba(28,25,23,0.92) 100%)" }} />
      <div style={{ position: "relative", height: "100%", minHeight: 180, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "24px 20px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 10 }}>Our Guide</p>
        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#fff", fontSize: 18, lineHeight: 1.35, marginBottom: 12 }}>{title}</p>
        <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600 }}>Read the full guide →</p>
      </div>
    </Link>
  );
}

export default function HotelsPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/hotels" taHref="/ta/hotels" frHref="/fr/hotels" current="en" />
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>Stay</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        Hotels in Pondicherry
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 600, lineHeight: 1.8, marginBottom: 56 }}>
        Where you stay shapes the whole experience. A heritage mansion in White Town puts you inside the history. A coastal resort keeps you close to the sea. Here is how to choose.
      </p>

      {COLLECTION_ORDER.map(collection => {
        const group = getHotelsByCollection(collection);
        if (!group.length) return null;
        const guide = hotelGuides.find(g => g.id === collection);
        return (
          <div key={collection} style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1c1917", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>
              {COLLECTION_LABELS[collection]}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
              {group.map(h => (
                <Link key={h.id} href={`/hotels/${h.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
                  {h.photo && (
                    <div style={{ position: "relative", width: "100%", height: 180 }}>
                      <Image src={`/hotels/${h.photo}`} alt={h.name} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                    </div>
                  )}
                  <div style={{ padding: "20px 20px 16px" }}>
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 6 }}>{h.name}</p>
                    <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.6 }}>{h.tagline}</p>
                    <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 12 }}>Read more →</p>
                  </div>
                </Link>
              ))}
              {guide?.intro && (
                <GuideCard
                  title={guide.title}
                  slug={guide.slug}
                  photos={group.filter(h => h.photo).map(h => h.photo as string)}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
