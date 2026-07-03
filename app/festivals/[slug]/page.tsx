import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { festivals } from "@/data/festivals";
import { truncate } from "@/lib/truncate";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import Link from "next/link";

const MONTH_LABELS: Record<string, string> = {
  jan: "January", feb: "February", mar: "March", apr: "April",
  may: "May", jun: "June", jul: "July", aug: "August",
  sep: "September", oct: "October", nov: "November", dec: "December",
};
const MONTH_KEYS = Object.keys(MONTH_LABELS);

export async function generateStaticParams() {
  const festivalSlugs = festivals.map(f => ({ slug: f.id }));
  const monthSlugs = MONTH_KEYS.map(m => ({ slug: m }));
  return [...monthSlugs, ...festivalSlugs];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (MONTH_KEYS.includes(slug)) {
    return { title: `${MONTH_LABELS[slug]} Festivals in Pondicherry`, description: `Festivals and events in Pondicherry in ${MONTH_LABELS[slug]}.` };
  }
  const f = festivals.find(f => f.id === slug);
  if (!f) return {};
  return { title: `${f.title} — Pondicherry`, description: f.teaser };
}

export default async function FestivalOrMonthPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Month view
  if (MONTH_KEYS.includes(slug)) {
    const monthFestivals = festivals.filter(f => f.month === slug);
    return (
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
        <Link href="/festivals" style={{ fontSize: 13, color: "#b45309", textDecoration: "none", fontWeight: 600 }}>← Festivals</Link>
        <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", margin: "20px 0 40px" }}>
          {MONTH_LABELS[slug]} in Pondicherry
        </h1>
        {monthFestivals.length === 0 ? (
          <p style={{ color: "#6b6560" }}>No festivals listed for this month yet.</p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {monthFestivals.map(f => (
              <Link key={f.id} href={`/festivals/${f.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, padding: "24px", display: "block" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 18, marginBottom: 8, lineHeight: 1.3 }}>{f.title}</p>
                <p style={{ fontSize: 14, color: "#b45309", fontWeight: 600, marginBottom: 10 }}>{f.when}</p>
                <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.65 }}>{truncate(f.teaser, 140)}</p>
                <p style={{ fontSize: 14, color: "#b45309", fontWeight: 600, marginTop: 14 }}>Read more →</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Festival article view
  const festival = festivals.find(f => f.id === slug);
  if (!festival) notFound();

  const idx = festivals.findIndex(f => f.id === slug);
  const prev = idx > 0 ? festivals[idx - 1] : null;
  const next = idx < festivals.length - 1 ? festivals[idx + 1] : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px" }}>
      <Link href="/festivals" style={{ fontSize: 13, color: "#b45309", textDecoration: "none", fontWeight: 600 }}>← Festivals</Link>

      {festival.photo && (
        <div style={{ position: "relative", width: "100%", aspectRatio: festival.photoAspectRatio ?? "16/9", borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/festivals/${festival.photo}`} alt={festival.title} fill style={{ objectFit: "cover", objectPosition: festival.photoPosition ?? "center" }} />
        </div>
      )}

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b45309", margin: "20px 0 6px" }}>
        {MONTH_LABELS[festival.month]}
      </p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 8, lineHeight: 1.2 }}>
        {festival.title}
      </h1>
      <p style={{ fontSize: 14, color: "#6b6560", marginBottom: 24 }}>{festival.when}</p>

      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        {festival.teaser}
      </p>

      {festival.calendarNote && (
        <div style={{ background: "#fff8f0", border: "1px solid #fed7aa", borderRadius: 10, padding: "14px 18px", marginBottom: 28 }}>
          <p style={{ fontSize: 13, color: "#92400e" }}>{festival.calendarNote}</p>
        </div>
      )}

      <ArticleBody text={festival.body} />
      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/festivals/${prev.id}`} style={{ fontSize: 14, color: "#b45309", textDecoration: "none", fontWeight: 600 }}>← {prev.title}</Link> : <span />}
        {next ? <Link href={`/festivals/${next.id}`} style={{ fontSize: 14, color: "#b45309", textDecoration: "none", fontWeight: 600 }}>{next.title} →</Link> : <span />}
      </div>
    </div>
  );
}
