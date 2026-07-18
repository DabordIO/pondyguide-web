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

function findEntry(slug: string) {
  const fr = aurovilleArticlesFr.find(a => a.id === slug);
  const en = aurovilleArticles.find(a => a.id === slug);
  if (!fr || !en) return null;
  return { fr, en };
}

export async function generateStaticParams() {
  return aurovilleArticlesFr.map(a => ({ slug: a.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) return {};
  const { fr, en } = entry;
  return {
    title: fr.metaTitle ?? `${fr.title} — Auroville`,
    description: fr.metaDescription ?? fr.teaser,
    openGraph: en.photo ? { images: [`/auroville/${en.photo}`] } : undefined,
    alternates: {
      canonical: `/fr/discover/auroville/${slug}`,
      languages: {
        en: `/discover/auroville/${slug}`,
        fr: `/fr/discover/auroville/${slug}`,
        "x-default": `/discover/auroville/${slug}`,
      },
    },
  };
}

const HAS_AUROVILLE = /auroville/i;

function displayH1(title: string) {
  return HAS_AUROVILLE.test(title) ? title : `${title}, Auroville`;
}

export default async function AurovilleArticlePageFr({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) notFound();
  const { fr, en } = entry;

  const idx = aurovilleArticlesFr.findIndex(a => a.id === slug);
  const prev = idx > 0 ? aurovilleArticlesFr[idx - 1] : null;
  const next = idx < aurovilleArticlesFr.length - 1 ? aurovilleArticlesFr[idx + 1] : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      {fr.faq && fr.faq.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: fr.faq.map(item => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }}
        />
      )}
      <LanguageToggle enHref={`/discover/auroville/${slug}`} frHref={`/fr/discover/auroville/${slug}`} current="fr" />
      <Breadcrumbs items={[{ label: "Accueil", href: "/fr" }, { label: "Auroville", href: "/fr/discover/auroville" }, { label: fr.title, href: `/fr/discover/auroville/${slug}` }]} />
      <Link href="/fr/discover/auroville" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Auroville</Link>

      {en.photo ? (
        <div style={{ position: "relative", width: "100%", height: 300, borderRadius: 14, overflow: "hidden", margin: "24px 0 28px" }}>
          <Image src={`/auroville/${en.photo}`} alt={fr.title} fill priority style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
      ) : (
        <div style={{ width: "100%", height: 8, borderRadius: 4, background: en.gradient, margin: "24px 0 28px" }} />
      )}

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 6px" }}>Auroville</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        {displayH1(fr.title)}
      </h1>

      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        {fr.teaser}
      </p>

      <ArticleBody text={fr.body} />

      {fr.faq && fr.faq.length > 0 && (
        <div style={{ margin: "48px 0" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", marginBottom: 20 }}>
            Questions fréquentes
          </h2>
          {fr.faq.map((item, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#1c1917", marginBottom: 6 }}>{item.question}</p>
              <FaqAnswer text={item.answer} style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.7 }} />
            </div>
          ))}
        </div>
      )}

      <AppBanner />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, paddingTop: 24, borderTop: "1px solid #e8ddd4" }}>
        {prev ? <Link href={`/fr/discover/auroville/${prev.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← {prev.title}</Link> : <span />}
        {next ? <Link href={`/fr/discover/auroville/${next.id}`} style={{ fontSize: 14, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>{next.title} →</Link> : <span />}
      </div>
    </div>
  );
}
