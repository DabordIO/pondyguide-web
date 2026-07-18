import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { institutionArticles as institutions } from "@/data/institutions";
import { institutionArticlesFr } from "@/data/fr/institutions";
import { institutionArticlesTa } from "@/data/ta/institutions";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import JsonLd from "@/components/JsonLd";
import FaqAnswer from "@/components/FaqAnswer";
import LanguageToggle from "@/components/LanguageToggle";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  return institutions.map(a => ({ slug: a.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = institutions.find(a => a.id === slug);
  if (!item) return {};
  const hasFr = institutionArticlesFr.some(a => a.id === slug);
  const hasTa = institutionArticlesTa.some(a => a.id === slug);
  return {
    title: item.metaTitle ?? `${item.title} — Pondicherry`,
    description: item.metaDescription ?? item.teaser,
    openGraph: item.photo ? { images: [`/${item.photoFolder ?? "history"}/${item.photo}`] } : undefined,
    alternates: hasFr || hasTa
      ? {
          canonical: `/history/institutions/${slug}`,
          languages: {
            en: `/history/institutions/${slug}`,
            ...(hasTa ? { ta: `/ta/history/institutions/${slug}` } : {}),
            ...(hasFr ? { fr: `/fr/history/institutions/${slug}` } : {}),
            "x-default": `/history/institutions/${slug}`,
          },
        }
      : undefined,
  };
}

const HAS_CITY = /pondicherry|pondich[ée]ry|puducherry/i;

function displayH1(title: string) {
  return HAS_CITY.test(title) ? title : `${title}, Pondicherry`;
}

export default async function InstitutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = institutions.find(a => a.id === slug);
  if (!item) notFound();

  const idx = institutions.findIndex(a => a.id === slug);
  const prev = idx > 0 ? institutions[idx - 1] : null;
  const next = idx < institutions.length - 1 ? institutions[idx + 1] : null;

  const hasFr = institutionArticlesFr.some(a => a.id === slug);
  const hasTa = institutionArticlesTa.some(a => a.id === slug);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      {(hasFr || hasTa) && (
        <LanguageToggle
          enHref={`/history/institutions/${slug}`}
          taHref={hasTa ? `/ta/history/institutions/${slug}` : undefined}
          frHref={hasFr ? `/fr/history/institutions/${slug}` : undefined}
          current="en"
        />
      )}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: item.title,
          description: item.teaser,
          image: item.photo ? `https://www.pondyguide.com/${item.photoFolder ?? "history"}/${item.photo}` : undefined,
          url: `https://www.pondyguide.com/history/institutions/${item.id}`,
          author: { "@type": "Organization", name: "Pondy Guide" },
          publisher: { "@type": "Organization", name: "Pondy Guide" },
        }}
      />
      {item.faq && item.faq.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: item.faq.map(f => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }}
        />
      )}
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "History", href: "/history" }, { label: "French Institutions", href: "/history/institutions" }, { label: item.title, href: `/history/institutions/${slug}` }]} />
      <Link href="/history" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← History</Link>

      {item.photo && (
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/${item.photoFolder ?? "history"}/${item.photo}`} alt={item.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
      )}

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 8px" }}>
        French Institution
      </p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        {displayH1(item.title)}
      </h1>

      {item.teaser && (
        <p style={{ fontSize: "1.1rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
          {item.teaser}
        </p>
      )}

      <ArticleBody text={item.body} />

      {item.faq && item.faq.length > 0 && (
        <div style={{ margin: "48px 0" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", marginBottom: 20 }}>
            Frequently Asked Questions
          </h2>
          {item.faq.map((f, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#1c1917", marginBottom: 6 }}>{f.question}</p>
              <FaqAnswer text={f.answer} style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.7 }} />
            </div>
          ))}
        </div>
      )}

      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/history/institutions/${prev.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prev.title}</Link> : <span />}
        {next ? <Link href={`/history/institutions/${next.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{next.title} →</Link> : <span />}
      </div>
    </div>
  );
}
