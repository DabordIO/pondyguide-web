import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { festivals } from "@/data/festivals";
import { truncate } from "@/lib/truncate";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "Festivals in Pondicherry, Month by Month Guide",
  description: "A calendar of Pondicherry's festivals, from Hindu and Christian celebrations to French traditions unique to the town.",
  alternates: {
    languages: {
      en: "/festivals",
      fr: "/fr/festivals",
      "x-default": "/festivals",
    },
  },
};

const MONTH_LABELS: Record<string, string> = {
  jan: "January", feb: "February", mar: "March", apr: "April",
  may: "May", jun: "June", jul: "July", aug: "August",
  sep: "September", oct: "October", nov: "November", dec: "December",
};

const MONTH_ORDER = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];

function getUpcoming() {
  const currentMonth = MONTH_ORDER[new Date().getMonth()];
  const currentIdx = MONTH_ORDER.indexOf(currentMonth);
  const sorted = [...festivals].sort((a, b) => {
    const ai = MONTH_ORDER.indexOf(a.month);
    const bi = MONTH_ORDER.indexOf(b.month);
    const an = ai >= currentIdx ? ai - currentIdx : ai + 12 - currentIdx;
    const bn = bi >= currentIdx ? bi - currentIdx : bi + 12 - currentIdx;
    return an - bn;
  });
  return sorted[0];
}

const chronological = MONTH_ORDER.flatMap(m => festivals.filter(f => f.month === m));
const upcoming = getUpcoming();

export default function FestivalsPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/festivals" frHref="/fr/festivals" current="en" />
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>Calendar</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        Festivals in Pondicherry
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 600, lineHeight: 1.8, marginBottom: 48 }}>
        Pondicherry celebrates constantly: Tamil temple festivals, French commemorations, Auroville gatherings, and events that exist nowhere else on earth.
      </p>

      {/* Coming up */}
      {upcoming && (
        <div style={{ marginBottom: 64 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1c1917", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>
            Coming Up
          </h2>
          <Link href={`/festivals/${upcoming.id}`} style={{ textDecoration: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, background: "#fff", border: "1px solid #e8ddd4", borderRadius: 16, overflow: "hidden", maxWidth: 800 }}>
            {upcoming.photo && (
              <div style={{ position: "relative", minHeight: 260 }}>
                <Image src={`/festivals/${upcoming.photo}`} alt={upcoming.title} fill style={{ objectFit: "cover", objectPosition: upcoming.photoPosition ?? "center" }} />
              </div>
            )}
            <div style={{ padding: "32px 28px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 8 }}>{MONTH_LABELS[upcoming.month]}</p>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", marginBottom: 10, lineHeight: 1.25 }}>{upcoming.title}</p>
              <p style={{ fontSize: 13, color: "#d4711a", marginBottom: 14 }}>{upcoming.when}</p>
              <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.7 }}>{truncate(upcoming.teaser, 180)}</p>
              <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 20 }}>Read more →</p>
            </div>
          </Link>
        </div>
      )}

      {/* All festivals */}
      <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1c1917", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>
        All Festivals
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {chronological.map(f => (
          <Link key={f.id} href={`/festivals/${f.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
            {f.photo && (
              <div style={{ position: "relative", width: "100%", height: 160 }}>
                <Image src={`/festivals/${f.photo}`} alt={f.title} fill style={{ objectFit: "cover", objectPosition: f.photoPosition ?? "center" }} />
              </div>
            )}
            <div style={{ padding: "14px 16px 16px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 5 }}>{MONTH_LABELS[f.month]}</p>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 16, marginBottom: 4, lineHeight: 1.3 }}>{f.title}</p>
              <p style={{ fontSize: 12, color: "#6b6560", marginBottom: 8 }}>{truncate(f.when, 60)}</p>
              <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.55 }}>{truncate(f.teaser, 90)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
