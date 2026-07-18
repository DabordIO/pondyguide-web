import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { festivals } from "@/data/festivals";
import { festivalsFr } from "@/data/fr/festivals";
import { truncate } from "@/lib/truncate";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";
import Link from "next/link";

const MONTH_LABELS: Record<string, string> = {
  jan: "Janvier", feb: "Février", mar: "Mars", apr: "Avril",
  may: "Mai", jun: "Juin", jul: "Juillet", aug: "Août",
  sep: "Septembre", oct: "Octobre", nov: "Novembre", dec: "Décembre",
};
const MONTH_KEYS = Object.keys(MONTH_LABELS);

function findFestival(slug: string) {
  const en = festivals.find(f => f.id === slug);
  const fr = en ? festivalsFr.find(f => f.id === en.id) : undefined;
  if (!en || !fr) return null;
  return { en, fr };
}

export async function generateStaticParams() {
  const festivalSlugs = festivalsFr
    .filter(fr => festivals.some(en => en.id === fr.id))
    .map(fr => ({ slug: fr.id }));
  const monthSlugs = MONTH_KEYS.map(m => ({ slug: m }));
  return [...monthSlugs, ...festivalSlugs];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (MONTH_KEYS.includes(slug)) {
    return {
      title: `Festivals à Pondichéry en ${MONTH_LABELS[slug]}`,
      description: `Festivals et événements à Pondichéry en ${MONTH_LABELS[slug]}.`,
    };
  }
  const entry = findFestival(slug);
  if (!entry) return {};
  const { en, fr } = entry;
  return {
    title: fr.metaTitle ?? `${fr.title} — Pondichéry`,
    description: fr.metaDescription ?? fr.teaser,
    openGraph: en.photo ? { images: [`/festivals/${en.photo}`] } : undefined,
    alternates: {
      languages: {
        en: `/festivals/${slug}`,
        fr: `/fr/festivals/${slug}`,
        "x-default": `/festivals/${slug}`,
      },
    },
  };
}

export default async function FestivalOrMonthPageFr({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Vue par mois
  if (MONTH_KEYS.includes(slug)) {
    const monthFestivals = festivals.filter(f => f.month === slug);
    return (
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
        <Link href="/fr/festivals" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Festivals</Link>
        <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", margin: "20px 0 40px" }}>
          {MONTH_LABELS[slug]} à Pondichéry
        </h1>
        {monthFestivals.length === 0 ? (
          <p style={{ color: "#6b6560" }}>Aucun festival répertorié pour ce mois pour l'instant.</p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {monthFestivals.map(f => {
              const fr = festivalsFr.find(x => x.id === f.id);
              if (!fr) return null;
              return (
                <Link key={f.id} href={`/fr/festivals/${f.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, padding: "24px", display: "block" }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 18, marginBottom: 8, lineHeight: 1.3 }}>{fr.title}</p>
                  <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginBottom: 10 }}>{fr.when}</p>
                  <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.65 }}>{truncate(fr.teaser, 140)}</p>
                  <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 14 }}>Lire la suite →</p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Vue article
  const entry = findFestival(slug);
  if (!entry) notFound();
  const { en: festival, fr } = entry;

  const idx = festivals.findIndex(f => f.id === slug);
  const prevEn = idx > 0 ? festivals[idx - 1] : null;
  const nextEn = idx < festivals.length - 1 ? festivals[idx + 1] : null;
  const prevFr = prevEn ? festivalsFr.find(f => f.id === prevEn.id) : null;
  const nextFr = nextEn ? festivalsFr.find(f => f.id === nextEn.id) : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref={`/festivals/${slug}`} frHref={`/fr/festivals/${slug}`} current="fr" />
      <Link href="/fr/festivals" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Festivals</Link>

      {festival.photo && (
        <div style={{ position: "relative", width: "100%", aspectRatio: festival.photoAspectRatio ?? "16/9", borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/festivals/${festival.photo}`} alt={fr.title} fill style={{ objectFit: "cover", objectPosition: festival.photoPosition ?? "center" }} />
        </div>
      )}

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 6px" }}>
        {MONTH_LABELS[festival.month]}
      </p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 8, lineHeight: 1.2 }}>
        {fr.title}
      </h1>
      <p style={{ fontSize: 14, color: "#6b6560", marginBottom: 24 }}>{fr.when}</p>

      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        {fr.teaser}
      </p>

      {fr.calendarNote && (
        <div style={{ background: "#fff8f0", border: "1px solid #fed7aa", borderRadius: 10, padding: "14px 18px", marginBottom: 28 }}>
          <p style={{ fontSize: 13, color: "#92400e" }}>{fr.calendarNote}</p>
        </div>
      )}

      <ArticleBody text={fr.body} />
      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prevFr ? <Link href={`/fr/festivals/${prevFr.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prevFr.title}</Link> : <span />}
        {nextFr ? <Link href={`/fr/festivals/${nextFr.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{nextFr.title} →</Link> : <span />}
      </div>
    </div>
  );
}
