import Link from "next/link";
import type { Metadata } from "next";
import { restaurantGuides } from "@/data/restaurantGuides";
import { restaurantGuidesTa } from "@/data/ta/restaurantGuides";

export const metadata: Metadata = {
  title: "புதுச்சேரியில் உணவகங்கள்",
  description: "புதுச்சேரியின் சிறந்த பிரெஞ்சு, இந்திய, கடலுணவு மற்றும் சர்வதேச உணவகங்களுக்கான வழிகாட்டிகள்.",
  alternates: {
    languages: {
      en: "/restaurants",
      ta: "/ta/restaurants",
      "x-default": "/restaurants",
    },
  },
};

function GuideCard({ title, slug }: { title: string; slug: string }) {
  return (
    <Link href={`/ta/restaurants/guides/${slug}`} style={{ textDecoration: "none", background: "#1c1917", border: "1px solid #1c1917", borderRadius: 14, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center", padding: "24px 20px", minHeight: 180 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 10 }}>எங்கள் வழிகாட்டி</p>
      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#fff", fontSize: 18, lineHeight: 1.35, marginBottom: 12 }}>{title}</p>
      <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600 }}>முழு வழிகாட்டியைப் படிக்க →</p>
    </Link>
  );
}

export default function RestaurantsPageTa() {
  const guides = restaurantGuidesTa
    .map(ta => {
      const en = restaurantGuides.find(g => g.id === ta.id);
      return en ? { ta, en } : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <Link href="/ta" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← முகப்பு</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>உணவு</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        புதுச்சேரியில் உணவகங்கள்
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 600, lineHeight: 1.8, marginBottom: 56 }}>
        பிரெஞ்சு தாக்கம் கொண்ட கஃபேக்கள் முதல் புதிய கடலுணவு, தமிழ் உணவுகள் மற்றும் சர்வதேச சமையல் வரை — புதுச்சேரியின் சிறந்த உணவகங்களுக்கான எங்கள் வழிகாட்டிகள்.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {guides.map(({ ta, en }) => (
          <GuideCard key={ta.id} title={ta.title} slug={en.slug} />
        ))}
      </div>
    </div>
  );
}
