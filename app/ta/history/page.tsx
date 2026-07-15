import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { historyArticles } from "@/data/history";
import { historyArticlesTa } from "@/data/ta/history";
import { truncate } from "@/lib/truncate";

export const metadata: Metadata = {
  title: "புதுச்சேரியின் வரலாறு, Rome முதல் French India வரை",
  description: "பண்டைய வணிகம் முதல் French ஆட்சி வரை, நகரத்தை வடிவமைத்த போர்கள், நிறுவனங்கள் மற்றும் மனிதர்கள் வரை, புதுச்சேரியின் கதையைப் பின்தொடருங்கள்.",
  alternates: {
    languages: {
      en: "/history",
      ta: "/ta/history",
      "x-default": "/history",
    },
  },
};

export default function HistoryPageTa() {
  const merged = historyArticlesTa
    .map(ta => {
      const en = historyArticles.find(a => a.id === ta.id);
      return en ? { ta, en } : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <Link href="/ta" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← முகப்பு</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>வரலாறு</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        புதுச்சேரியின் கதை
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#6b6560", maxWidth: 640, lineHeight: 1.8, marginBottom: 48 }}>
        இந்தியாவின் வேறு எந்த நகரத்தையும் போல புதுச்சேரியில் இத்தனை அடுக்குகள் இல்லை. Roman வணிகர்கள், Chola மன்னர்கள், Portuguese, Dutch, British, French, இவர்கள் அனைவரும் இந்தக் கடற்கரையில் தங்கள் முத்திரையைப் பதித்துச் சென்றுள்ளனர்.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {merged.map(({ ta, en }) => (
          <Link key={ta.id} href={`/ta/history/${ta.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
            {en.photo && (
              <div style={{ position: "relative", width: "100%", height: 160 }}>
                <Image src={`/${en.photoFolder ?? "history"}/${en.photo}`} alt={ta.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
            )}
            <div style={{ padding: "16px 20px 16px" }}>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 8, lineHeight: 1.3 }}>{ta.title}</p>
              <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.6 }}>{truncate(ta.teaser, 120)}</p>
              <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 12 }}>மேலும் படிக்க →</p>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: 56, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        <Link href="/ta/history/lives-and-legacies" style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>வாழ்க்கை வரலாறுகளைப் பார்க்க →</Link>
      </div>
    </div>
  );
}
