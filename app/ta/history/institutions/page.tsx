import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { institutionArticles } from "@/data/institutions";
import { institutionArticlesTa } from "@/data/ta/institutions";
import { truncate } from "@/lib/truncate";

export const metadata: Metadata = {
  title: "புதுச்சேரியில் இன்னும் செயல்படும் French நிறுவனங்கள்",
  description: "பள்ளிகள், ஆய்வு மையங்கள், தூதரகம் மற்றும் கலாச்சார அமைப்புகள் — புதுச்சேரியில் French இருப்பு எவ்வாறு தொடர்கிறது என்பதைக் காட்டுகின்றன.",
  alternates: {
    languages: {
      en: "/history/institutions",
      ta: "/ta/history/institutions",
      "x-default": "/history/institutions",
    },
  },
};

export default function InstitutionsPageTa() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <Link href="/ta/history" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← வரலாறு</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>வரலாறு</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        French நிறுவனங்கள்
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 640, lineHeight: 1.8, marginBottom: 56 }}>
        புதுச்சேரியில் France விட்டுச் சென்ற பள்ளிகள், தூதரகம், ஆய்வு மையங்கள் மற்றும் கலாச்சார அமைப்புகள் — இவற்றில் பல இன்றும் செயல்பட்டு வருகின்றன.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {institutionArticlesTa.map(a => {
          const en = institutionArticles.find(h => h.id === a.id);
          return (
            <Link key={a.id} href={`/ta/history/institutions/${a.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
              {en?.photo && (
                <div style={{ position: "relative", width: "100%", height: 160 }}>
                  <Image src={`/${en.photoFolder ?? "history"}/${en.photo}`} alt={a.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                </div>
              )}
              <div style={{ padding: "14px 16px 16px" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 16, marginBottom: 6, lineHeight: 1.3 }}>{a.title}</p>
                <p style={{ fontSize: 12, color: "#6b6560", fontStyle: "italic", marginBottom: 8 }}>{a.subtitle}</p>
                <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.55 }}>{truncate(a.teaser, 110)}</p>
                <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 10 }}>மேலும் படிக்க →</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
