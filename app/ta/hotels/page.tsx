import Link from "next/link";
import type { Metadata } from "next";
import { hotelGuides } from "@/data/hotelGuides";
import { hotelGuidesTa } from "@/data/ta/hotelGuides";

export const metadata: Metadata = {
  title: "புதுச்சேரியில் ஹோட்டல்கள்",
  description: "புதுச்சேரியின் பாரம்பரிய, boutique, குடும்ப, backpacker மற்றும் கடற்கரை ஹோட்டல்களுக்கான வழிகாட்டிகள்.",
};

function GuideCard({ title, slug }: { title: string; slug: string }) {
  return (
    <Link href={`/ta/hotels/guides/${slug}`} style={{ textDecoration: "none", background: "#1c1917", border: "1px solid #1c1917", borderRadius: 14, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center", padding: "24px 20px", minHeight: 180 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 10 }}>எங்கள் வழிகாட்டி</p>
      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#fff", fontSize: 18, lineHeight: 1.35, marginBottom: 12 }}>{title}</p>
      <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600 }}>முழு வழிகாட்டியைப் படிக்க →</p>
    </Link>
  );
}

export default function HotelsPageTa() {
  const guides = hotelGuidesTa
    .map(ta => {
      const en = hotelGuides.find(g => g.id === ta.id);
      return en ? { ta, en } : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <Link href="/ta" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← முகப்பு</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>தங்குமிடம்</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        புதுச்சேரியில் ஹோட்டல்கள்
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 600, lineHeight: 1.8, marginBottom: 56 }}>
        White Town-இன் பாரம்பரிய மாளிகைகள் முதல் கடற்கரை ரிசார்ட்கள் வரை — உங்கள் பயணத்திற்கு ஏற்ற ஹோட்டலைத் தேர்வு செய்ய உதவும் வழிகாட்டிகள்.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {guides.map(({ ta, en }) => (
          <GuideCard key={ta.id} title={ta.title} slug={en.slug} />
        ))}
      </div>
    </div>
  );
}
