import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { aurovilleArticles } from "@/data/auroville";
import { aurovilleArticlesFr } from "@/data/fr/auroville";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import FaqAnswer from "@/components/FaqAnswer";
import Link from "next/link";

export async function generateStaticParams() {
  return aurovilleArticles.map(a => ({ slug: a.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = aurovilleArticles.find(a => a.id === slug);
  if (!a) return {};
  const hasFr = aurovilleArticlesFr.some(f => f.id === slug);
  return {
    title: a.metaTitle ?? `${a.title} — Auroville`,
    description: a.metaDescription ?? a.teaser,
    openGraph: a.photo ? { images: [`/auroville/${a.photo}`] } : undefined,
    alternates: hasFr
      ? {
          canonical: `/discover/auroville/${slug}`,
          languages: {
            en: `/discover/auroville/${slug}`,
            fr: `/fr/discover/auroville/${slug}`,
            "x-default": `/discover/auroville/${slug}`,
          },
        }
      : undefined,
  };
}

const HAS_AUROVILLE = /auroville/i;

function displayH1(title: string) {
  return HAS_AUROVILLE.test(title) ? title : `${title}, Auroville`;
}

export default async function AurovilleArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = aurovilleArticles.find(a => a.id === slug);
  if (!article) notFound();

  const idx = aurovilleArticles.findIndex(a => a.id === slug);
  const prev = idx > 0 ? aurovilleArticles[idx - 1] : null;
  const next = idx < aurovilleArticles.length - 1 ? aurovilleArticles[idx + 1] : null;
  const hasFr = aurovilleArticlesFr.some(f => f.id === slug);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      {article.faq && article.faq.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: article.faq.map(item => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }}
        />
      )}
      {hasFr && <LanguageToggle enHref={`/discover/auroville/${slug}`} frHref={`/fr/discover/auroville/${slug}`} current="en" />}
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Discover", href: "/discover" }, { label: "Auroville", href: "/discover/auroville" }, { label: article.title, href: `/discover/auroville/${slug}` }]} />
      <Link href="/discover/auroville" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Auroville</Link>

      {article.photo ? (
        <div style={{ position: "relative", width: "100%", height: 300, borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/auroville/${article.photo}`} alt={article.title} fill priority style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
      ) : (
        <div style={{ width: "100%", height: 8, borderRadius: 4, background: article.gradient, margin: "24px 0 28px" }} />
      )}

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 6px" }}>Auroville</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        {displayH1(article.title)}
      </h1>

      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        {article.teaser}
      </p>

      <ArticleBody text={article.body} />

      {article.faq && article.faq.length > 0 && (
        <div style={{ margin: "48px 0" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", marginBottom: 20 }}>
            Frequently Asked Questions
          </h2>
          {article.faq.map((item, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#1c1917", marginBottom: 6 }}>{item.question}</p>
              <FaqAnswer text={item.answer} style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.7 }} />
            </div>
          ))}
        </div>
      )}

      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/discover/auroville/${prev.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prev.title}</Link> : <span />}
        {next ? <Link href={`/discover/auroville/${next.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{next.title} →</Link> : <span />}
      </div>
    </div>
  );
}
