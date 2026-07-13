import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { figures } from "@/data/figures";
import { figuresTa } from "@/data/ta/figures";
import { truncate } from "@/lib/truncate";

export const metadata: Metadata = {
  title: "புதுச்சேரியை உருவாக்கிய வாழ்க்கை வரலாறுகள்",
  description: "புதுச்சேரியின் வரலாற்றை வடிவமைத்த ஆளுநர்கள், தளபதிகள், தூதர்கள் மற்றும் எழுத்தாளர்களை அறியுங்கள்.",
};

export default function LivesAndLegaciesPageTa() {
  const entries = figuresTa
    .map(ta => {
      const en = figures.find(f => f.id === ta.id);
      return en ? { ta, en } : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <Link href="/ta" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← முகப்பு</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>வரலாறு</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        வாழ்க்கை வரலாறுகள்
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 640, lineHeight: 1.8, marginBottom: 56 }}>
        புதுச்சேரியின் வரலாற்றை வடிவமைத்து, அதன் தெருக்களில் தங்கள் பெயர்களை விட்டுச் சென்ற ஆளுநர்கள், தளபதிகள், தூதர்கள், மற்றும் எழுத்தாளர்கள்.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {entries.map(({ ta, en }) => (
          <Link key={ta.id} href={`/ta/history/lives-and-legacies/${ta.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
            <div style={{ position: "relative", width: "100%", height: 220, background: "#f0ece6" }}>
              {en.photo && <Image src={`/figures/${en.photo}`} alt={ta.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} />}
            </div>
            <div style={{ padding: "14px 16px 16px" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 16, marginBottom: 4, lineHeight: 1.3 }}>{ta.name}</p>
              <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginBottom: 8 }}>{en.dates}</p>
              <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.55 }}>{truncate(ta.teaser ?? "", 110)}</p>
              <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 10 }}>மேலும் படிக்க →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
