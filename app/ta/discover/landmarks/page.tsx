import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { sites } from "@/data/sites";
import { sitesTa } from "@/data/ta/sites";
import { truncate } from "@/lib/truncate";

export const metadata: Metadata = {
  title: "புதுச்சேரி சின்னங்கள், கோயில்கள் மற்றும் வரலாற்றுத் தளங்கள்",
  description: "தேவாலயங்கள், கோயில்கள், அருங்காட்சியகங்கள், காலனித்துவக் கட்டிடங்கள் மற்றும் பழங்கால இடிபாடுகள் — இரண்டாயிரம் ஆண்டு உள்ளூர் வரலாற்றை வெளிப்படுத்துபவை.",
  alternates: {
    languages: {
      en: "/discover/landmarks",
      ta: "/ta/discover/landmarks",
      "x-default": "/discover/landmarks",
    },
  },
};

export default function LandmarksPageTa() {
  const merged = sitesTa
    .map(ta => {
      const en = sites.find(s => s.id === ta.id);
      return en ? { ta, en } : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <Link href="/ta" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← முகப்பு</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>சின்னங்கள்</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        வரலாற்றுச் சின்னங்களும் முக்கிய இடங்களும்
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 640, lineHeight: 1.8, marginBottom: 56 }}>
        அரிக்கமேட்டின் ரோமானியக் கால இடிபாடுகள் முதல் கடற்கரையில் உள்ள பிரெஞ்சு தூதரகம் வரை, புதுச்சேரியின் வரலாற்றுச் சின்னங்களும் முக்கிய இடங்களும் இரண்டாயிரம் ஆண்டுகளுக்கும் மேலான கடந்த காலத்தைச் சுமந்து நிற்கின்றன.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {merged.map(({ ta, en }) => (
          <Link key={ta.id} href={`/ta/discover/landmarks/${ta.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
            {en.photo && (
              <div style={{ position: "relative", width: "100%", height: 160 }}>
                <Image src={`/sites/${en.photo}`} alt={ta.name} fill style={{ objectFit: "cover", objectPosition: en.photoPosition ?? "center" }} />
              </div>
            )}
            <div style={{ padding: "14px 16px 16px" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 16, marginBottom: 6, lineHeight: 1.3 }}>{ta.name}</p>
              <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.55 }}>{truncate(ta.summary, 110)}</p>
              <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 10 }}>மேலும் படிக்க →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
