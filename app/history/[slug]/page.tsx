import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { historyArticles } from "@/data/history";
import { historyArticlesTa } from "@/data/ta/history";
import { historyArticlesFr } from "@/data/fr/history";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import JsonLd from "@/components/JsonLd";
import FaqAnswer from "@/components/FaqAnswer";
import LanguageToggle from "@/components/LanguageToggle";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  return historyArticles.map(a => ({ slug: a.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = historyArticles.find(a => a.id === slug);
  if (!article) return {};
  const hasFr = historyArticlesFr.some(a => a.id === slug);
  const hasTa = historyArticlesTa.some(a => a.id === slug);
  return {
    title: article.metaTitle ?? article.title,
    description: article.metaDescription ?? article.teaser,
    openGraph: article.photo ? { images: [`/${article.photoFolder ?? "history"}/${article.photo}`] } : undefined,
    alternates: {
      canonical: `/history/${slug}`,
      languages: {
        en: `/history/${slug}`,
        ta: hasTa ? `/ta/history/${slug}` : undefined,
        fr: hasFr ? `/fr/history/${slug}` : undefined,
        "x-default": `/history/${slug}`,
      },
    },
  };
}

export default async function HistoryArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = historyArticles.find(a => a.id === slug);
  if (!article) notFound();

  const idx = historyArticles.findIndex(a => a.id === slug);
  const prev = idx > 0 ? historyArticles[idx - 1] : null;
  const next = idx < historyArticles.length - 1 ? historyArticles[idx + 1] : null;

  const hasFr = historyArticlesFr.some(a => a.id === slug);
  const hasTa = historyArticlesTa.some(a => a.id === slug);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle
        enHref={`/history/${slug}`}
        taHref={hasTa ? `/ta/history/${slug}` : undefined}
        frHref={hasFr ? `/fr/history/${slug}` : undefined}
        current="en"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.teaser,
          image: article.photo ? `https://www.pondyguide.com/${article.photoFolder ?? "history"}/${article.photo}` : undefined,
          url: `https://www.pondyguide.com/history/${article.id}`,
          author: { "@type": "Organization", name: "Pondy Guide" },
          publisher: { "@type": "Organization", name: "Pondy Guide" },
        }}
      />
      {article.faq && article.faq.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: article.faq.map(f => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }}
        />
      )}
      <Link href="/history" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← History</Link>

      {article.photo && (
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/${article.photoFolder ?? "history"}/${article.photo}`} alt={article.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
      )}

      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", margin: "20px 0 16px", lineHeight: 1.2 }}>
        {article.title}
      </h1>

      {article.teaser && (
        <p style={{ fontSize: "1.1rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
          {article.teaser}
        </p>
      )}

      <ArticleBody text={article.body} />

      {article.faq && article.faq.length > 0 && (
        <div style={{ margin: "48px 0" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", marginBottom: 20 }}>
            Frequently Asked Questions
          </h2>
          {article.faq.map((f, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#1c1917", marginBottom: 6 }}>{f.question}</p>
              <FaqAnswer text={f.answer} style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.7 }} />
            </div>
          ))}
        </div>
      )}

      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/history/${prev.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prev.title}</Link> : <span />}
        {next ? <Link href={`/history/${next.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{next.title} →</Link> : <span />}
      </div>
    </div>
  );
}
