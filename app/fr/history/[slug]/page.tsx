import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { historyArticles } from "@/data/history";
import { historyArticlesFr } from "@/data/fr/history";
import { historyArticlesTa } from "@/data/ta/history";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import JsonLd from "@/components/JsonLd";
import FaqAnswer from "@/components/FaqAnswer";
import LanguageToggle from "@/components/LanguageToggle";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  return historyArticlesFr.map(a => ({ slug: a.id }));
}

export const dynamicParams = false;

function findEntry(slug: string) {
  const fr = historyArticlesFr.find(a => a.id === slug);
  const en = historyArticles.find(a => a.id === slug);
  if (!fr || !en) return null;
  return { fr, en };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) return {};
  const { fr, en } = entry;
  const hasTa = historyArticlesTa.some(a => a.id === slug);
  return {
    title: fr.metaTitle ?? fr.title,
    description: fr.metaDescription ?? fr.teaser,
    openGraph: en.photo ? { images: [`/${en.photoFolder ?? "history"}/${en.photo}`] } : undefined,
    alternates: {
      canonical: `/fr/history/${slug}`,
      languages: {
        en: `/history/${slug}`,
        fr: `/fr/history/${slug}`,
        ...(hasTa ? { ta: `/ta/history/${slug}` } : {}),
        "x-default": `/history/${slug}`,
      },
    },
  };
}

export default async function HistoryArticlePageFr({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) notFound();
  const { fr, en } = entry;
  const hasTa = historyArticlesTa.some(a => a.id === slug);

  const idx = historyArticlesFr.findIndex(a => a.id === slug);
  const prev = idx > 0 ? historyArticlesFr[idx - 1] : null;
  const next = idx < historyArticlesFr.length - 1 ? historyArticlesFr[idx + 1] : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref={`/history/${slug}`} taHref={hasTa ? `/ta/history/${slug}` : undefined} frHref={`/fr/history/${slug}`} current="fr" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: fr.title,
          description: fr.teaser,
          image: en.photo ? `https://www.pondyguide.com/${en.photoFolder ?? "history"}/${en.photo}` : undefined,
          url: `https://www.pondyguide.com/fr/history/${fr.id}`,
          author: { "@type": "Organization", name: "Pondy Guide" },
          publisher: { "@type": "Organization", name: "Pondy Guide" },
        }}
      />
      {fr.faq && fr.faq.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: fr.faq.map(f => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }}
        />
      )}
      <Link href="/fr/history" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Histoire</Link>

      {en.photo && (
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/${en.photoFolder ?? "history"}/${en.photo}`} alt={fr.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
      )}

      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", margin: "20px 0 16px", lineHeight: 1.2 }}>
        {fr.title}
      </h1>

      {fr.teaser && (
        <p style={{ fontSize: "1.1rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
          {fr.teaser}
        </p>
      )}

      <ArticleBody text={fr.body} />

      {fr.faq && fr.faq.length > 0 && (
        <div style={{ margin: "48px 0" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", marginBottom: 20 }}>
            Questions fréquentes
          </h2>
          {fr.faq.map((f, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#1c1917", marginBottom: 6 }}>{f.question}</p>
              <FaqAnswer text={f.answer} style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.7 }} />
            </div>
          ))}
        </div>
      )}

      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/fr/history/${prev.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prev.title}</Link> : <span />}
        {next ? <Link href={`/fr/history/${next.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{next.title} →</Link> : <span />}
      </div>
    </div>
  );
}
