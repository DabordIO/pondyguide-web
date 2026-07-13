import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { figures } from "@/data/figures";
import { figuresTa } from "@/data/ta/figures";
import { restaurants } from "@/data/restaurants";
import { restaurantGuides } from "@/data/restaurantGuides";
import { restaurantGuidesTa } from "@/data/ta/restaurantGuides";
import { truncate } from "@/lib/truncate";

export const metadata: Metadata = {
  title: "புதுச்சேரி வழிகாட்டி — தமிழில்",
  description: "புதுச்சேரியின் வரலாறு, உணவகங்கள் மற்றும் மேலும் பல — தமிழில்.",
  alternates: {
    languages: {
      en: "/",
      ta: "/ta",
      "x-default": "/",
    },
  },
};

function SectionHeader({ title, href }: { title: string; href: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 16 }}>
      <Link href={href} className="section-heading-link">
        <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", lineHeight: 1.1, margin: 0 }}>{title}</h2>
      </Link>
      <Link href={href} aria-label={`அனைத்தையும் காண: ${title}`} style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600, whiteSpace: "nowrap", border: "1px solid #d4711a", borderRadius: 6, padding: "5px 12px", flexShrink: 0 }}>அனைத்தையும் காண →</Link>
    </div>
  );
}

function SectionIntro({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 620, lineHeight: 1.75, marginBottom: 40 }}>{children}</p>;
}

function ThreeGrid({ children }: { children: React.ReactNode }) {
  return <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>{children}</div>;
}

export default function TamilHomePage() {
  const featuredFigureIds = ["ananda-ranga-pillai", "lally", "sri-aurobindo"];
  const featuredFigures = featuredFigureIds
    .map(id => {
      const ta = figuresTa.find(f => f.id === id);
      const en = figures.find(f => f.id === id);
      return ta && en ? { ta, en } : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const featuredGuideIds = ["french", "indian-tamil", "seafood"];
  const featuredGuides = featuredGuideIds
    .map(id => {
      const ta = restaurantGuidesTa.find(g => g.id === id);
      const en = restaurantGuides.find(g => g.id === id);
      if (!ta || !en) return null;
      const firstRestaurantId = en.restaurantIds[0];
      const photo = restaurants.find(r => r.id === firstRestaurantId)?.photo;
      return { ta, en, photo };
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 80px" }}>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 72, paddingBottom: 64, borderBottom: "1px solid #e8ddd4" }}>
        <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2.75rem, 6vw, 4.5rem)", fontWeight: 700, color: "#1c1917", lineHeight: 1.1, marginBottom: 24, maxWidth: 800 }}>
          புதுச்சேரி
        </h1>
        <p style={{ fontSize: "clamp(1.05rem, 2vw, 1.25rem)", color: "#6b6560", maxWidth: 680, lineHeight: 1.8 }}>
          ரோமானிய வணிகர்கள், தமிழ் அரசுகள், பிரெஞ்சு ஆளுநர்கள் மற்றும் நவீன ஆன்மீக முயற்சிகள் — அனைவரும் தங்கள் முத்திரையை பதித்த ஓர் இடம். அதன் வரலாற்றை அறிந்து, அதன் அழகை அனுபவியுங்கள்.
        </p>
      </section>

      {/* ── LIVES & LEGACIES ────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 72 }}>
        <SectionHeader title="வாழ்க்கை வரலாறுகள்" href="/ta/history/lives-and-legacies" />
        <SectionIntro>நகரத்தை உருவாக்கிய ஆளுநர்கள், தளபதிகள், அறிஞர்கள் மற்றும் முனிவர்கள்.</SectionIntro>
        <ThreeGrid>
          {featuredFigures.map(({ ta, en }) => (
            <Link key={ta.id} href={`/ta/history/lives-and-legacies/${ta.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
              <div style={{ position: "relative", width: "100%", height: 280, background: "#f0ece6" }}>
                {en.photo && <Image src={`/figures/${en.photo}`} alt={ta.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" style={{ objectFit: "cover", objectPosition: "center top" }} />}
              </div>
              <div style={{ padding: "14px 16px 16px" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 15, marginBottom: 4, lineHeight: 1.3 }}>{ta.name}</p>
                <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginBottom: 6 }}>{en.dates}</p>
                <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.5 }}>{en.role}</p>
              </div>
            </Link>
          ))}
        </ThreeGrid>
      </section>

      {/* ── RESTAURANTS ─────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 72 }}>
        <SectionHeader title="புதுச்சேரியில் உணவகங்கள்" href="/ta/restaurants" />
        <SectionIntro>
          பிரெஞ்சு தாக்கம் கொண்ட கஃபேக்கள் முதல் புதிய கடலுணவு, தமிழ் உணவுகள் வரை — பிற்பகல் வெப்பத்தையும் தாண்ட உதவும் அளவுக்குக் காபியும் ஐஸ்கிரீமும்.
        </SectionIntro>
        <ThreeGrid>
          {featuredGuides.map(({ ta, en, photo }) => (
            <Link key={ta.id} href={`/ta/restaurants/guides/${en.slug}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
              {photo && (
                <div style={{ position: "relative", width: "100%", height: 180 }}>
                  <Image src={`/restaurants/${photo}`} alt={ta.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" style={{ objectFit: "cover" }} />
                </div>
              )}
              <div style={{ padding: "14px 16px 18px" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 8, lineHeight: 1.3 }}>{ta.title}</p>
                <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.6 }}>{truncate(ta.intro?.split("\n\n")[0] ?? "", 115)}</p>
                <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 12 }}>மேலும் படிக்க →</p>
              </div>
            </Link>
          ))}
        </ThreeGrid>
      </section>
    </div>
  );
}
