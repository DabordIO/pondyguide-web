import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { festivals } from "@/data/festivals";
import { festivalsFr } from "@/data/fr/festivals";
import { truncate } from "@/lib/truncate";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "Festivals à Pondichéry, calendrier mois par mois",
  description: "Un calendrier des festivals de Pondichéry, des célébrations hindoues et chrétiennes aux traditions françaises propres à la ville.",
  alternates: {
    canonical: "/fr/festivals",
    languages: {
      en: "/festivals",
      fr: "/fr/festivals",
      "x-default": "/festivals",
    },
  },
};

const MONTH_LABELS: Record<string, string> = {
  jan: "Janvier", feb: "Février", mar: "Mars", apr: "Avril",
  may: "Mai", jun: "Juin", jul: "Juillet", aug: "Août",
  sep: "Septembre", oct: "Octobre", nov: "Novembre", dec: "Décembre",
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
const upcomingEn = getUpcoming();

export default function FestivalsPageFr() {
  const upcomingFr = festivalsFr.find(f => f.id === upcomingEn.id);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/festivals" frHref="/fr/festivals" current="fr" />
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>Calendrier</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>
        Festivals à Pondichéry
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 600, lineHeight: 1.8, marginBottom: 48 }}>
        Pondichéry est en fête en permanence : fêtes de temple tamoules, commémorations françaises, rassemblements à Auroville, et des événements qui n'existent nulle part ailleurs sur terre.
      </p>

      {/* À venir */}
      {upcomingFr && (
        <div style={{ marginBottom: 64 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1c1917", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>
            À venir
          </h2>
          <Link href={`/fr/festivals/${upcomingEn.id}`} style={{ textDecoration: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, background: "#fff", border: "1px solid #e8ddd4", borderRadius: 16, overflow: "hidden", maxWidth: 800 }}>
            {upcomingEn.photo && (
              <div style={{ position: "relative", minHeight: 260 }}>
                <Image src={`/festivals/${upcomingEn.photo}`} alt={upcomingFr.title} fill style={{ objectFit: "cover", objectPosition: upcomingEn.photoPosition ?? "center" }} />
              </div>
            )}
            <div style={{ padding: "32px 28px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 8 }}>{MONTH_LABELS[upcomingEn.month]}</p>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", marginBottom: 10, lineHeight: 1.25 }}>{upcomingFr.title}</p>
              <p style={{ fontSize: 13, color: "#d4711a", marginBottom: 14 }}>{upcomingFr.when}</p>
              <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.7 }}>{truncate(upcomingFr.teaser, 180)}</p>
              <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 20 }}>Lire la suite →</p>
            </div>
          </Link>
        </div>
      )}

      {/* Tous les festivals */}
      <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1c1917", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>
        Tous les festivals
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {chronological.map(f => {
          const fr = festivalsFr.find(x => x.id === f.id);
          if (!fr) return null;
          return (
            <Link key={f.id} href={`/fr/festivals/${f.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
              {f.photo && (
                <div style={{ position: "relative", width: "100%", height: 160 }}>
                  <Image src={`/festivals/${f.photo}`} alt={fr.title} fill style={{ objectFit: "cover", objectPosition: f.photoPosition ?? "center" }} />
                </div>
              )}
              <div style={{ padding: "14px 16px 16px" }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 5 }}>{MONTH_LABELS[f.month]}</p>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 16, marginBottom: 4, lineHeight: 1.3 }}>{fr.title}</p>
                <p style={{ fontSize: 12, color: "#6b6560", marginBottom: 8 }}>{truncate(fr.when, 60)}</p>
                <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.55 }}>{truncate(fr.teaser, 90)}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
