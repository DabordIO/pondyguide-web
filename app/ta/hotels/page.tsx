import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { hotels } from "@/data/hotels";
import { hotelGuides } from "@/data/hotelGuides";
import { hotelGuidesTa } from "@/data/ta/hotelGuides";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "புதுச்சேரியில் ஹோட்டல்கள்",
  description: "புதுச்சேரியின் பாரம்பரிய, boutique, குடும்ப, backpacker மற்றும் கடற்கரை ஹோட்டல்களுக்கான வழிகாட்டிகள்.",
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
  const [main, ...rest] = photos;
  const side = rest.slice(0, 2);
  return (
    <Link href={`/ta/hotels/guides/${slug}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", minHeight: 180 }}>
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
        <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600 }}>முழு வழிகாட்டியைப் படிக்க →</p>
      </div>
    </Link>
  );
}

export default function HotelsPageTa() {
  const guides = hotelGuidesTa
    .map(ta => {
      const en = hotelGuides.find(g => g.id === ta.id);
      if (!en) return null;
      const photos = en.hotelIds
        .map(id => hotels.find(h => h.id === id)?.photo)
        .filter((p): p is string => Boolean(p));
      return { ta, en, photos };
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/hotels" taHref="/ta/hotels" frHref="/fr/hotels" current="ta" />
      <Link href="/ta" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← முகப்பு</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>தங்குமிடம்</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        புதுச்சேரியில் ஹோட்டல்கள்
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 600, lineHeight: 1.8, marginBottom: 56 }}>
        White Town-இன் பாரம்பரிய மாளிகைகள் முதல் கடற்கரை ரிசார்ட்கள் வரை — உங்கள் பயணத்திற்கு ஏற்ற ஹோட்டலைத் தேர்வு செய்ய உதவும் வழிகாட்டிகள்.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {guides.map(({ ta, en, photos }) => (
          <GuideCard key={ta.id} title={ta.title} slug={en.slug} photos={photos} />
        ))}
      </div>
    </div>
  );
}
