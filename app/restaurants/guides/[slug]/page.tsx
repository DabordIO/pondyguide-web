import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { restaurantGuides } from "@/data/restaurantGuides";
import { restaurantGuidesTa } from "@/data/ta/restaurantGuides";
import { restaurantGuidesFr } from "@/data/fr/restaurantGuides";
import { restaurants } from "@/data/restaurants";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import FaqAnswer from "@/components/FaqAnswer";

const READY_GUIDES = restaurantGuides.filter(g => g.intro && g.blurbs);

export async function generateStaticParams() {
  return READY_GUIDES.map(g => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = READY_GUIDES.find(g => g.slug === slug);
  if (!guide) return {};
  const hasTa = restaurantGuidesTa.some(g => g.id === guide.id);
  const hasFr = restaurantGuidesFr.some(g => g.id === guide.id);
  return {
    title: guide.metaTitle ?? guide.title,
    description: guide.metaDescription,
    alternates: hasTa || hasFr
      ? {
          canonical: `/restaurants/guides/${slug}`,
          languages: {
            en: `/restaurants/guides/${slug}`,
            ...(hasTa ? { ta: `/ta/restaurants/guides/${slug}` } : {}),
            ...(hasFr ? { fr: `/fr/restaurants/guides/${slug}` } : {}),
            "x-default": `/restaurants/guides/${slug}`,
          },
        }
      : undefined,
  };
}

const PRICE = { budget: "₹", mid: "₹₹", upscale: "₹₹₹" };

export default async function RestaurantGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = READY_GUIDES.find(g => g.slug === slug);
  if (!guide) notFound();

  const entries = guide.restaurantIds
    .map(id => restaurants.find(r => r.id === id))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  const hasTa = restaurantGuidesTa.some(g => g.id === guide.id);
  const hasFr = restaurantGuidesFr.some(g => g.id === guide.id);

  return (
    <div style={{ maxWidth: 780, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      {guide.faq && guide.faq.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: guide.faq.map(item => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }}
        />
      )}
      {(hasTa || hasFr) && (
        <LanguageToggle
          enHref={`/restaurants/guides/${guide.slug}`}
          taHref={hasTa ? `/ta/restaurants/guides/${guide.slug}` : undefined}
          frHref={hasFr ? `/fr/restaurants/guides/${guide.slug}` : undefined}
          current="en"
        />
      )}
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Restaurants", href: "/restaurants" }, { label: guide.title, href: `/restaurants/guides/${guide.slug}` }]} />
      <Link href="/restaurants" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Restaurants</Link>

      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", margin: "24px 0 24px", lineHeight: 1.2 }}>
        {guide.title}
      </h1>

      {guide.intro && <ArticleBody text={guide.intro} />}

      {guide.quickPicks && guide.quickPicks.length > 0 && (
        <div style={{ margin: "32px 0", background: "#fff8f0", border: "1px solid #fed7aa", borderRadius: 12, padding: "20px 24px", overflowX: "auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 14 }}>How to choose</p>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <tbody>
              {guide.quickPicks.map((item, i) => (
                <tr key={i} style={{ borderBottom: i < guide.quickPicks!.length - 1 ? "1px solid #fed7aa" : "none" }}>
                  <td style={{ padding: "8px 12px 8px 0", color: "#292524" }}>{item.situation}</td>
                  <td style={{ padding: "8px 0", fontWeight: 700, color: "#1c1917" }}>{item.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {guide.whyHeading && guide.whyBody && (
        <>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", margin: "40px 0 16px" }}>
            {guide.whyHeading}
          </h2>
          <ArticleBody text={guide.whyBody} />
        </>
      )}

      {guide.bestFor && (
        <div style={{ margin: "40px 0", overflowX: "auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>At a glance</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #e8ddd4" }}>
                <th style={{ textAlign: "left", padding: "10px 12px", color: "#1c1917" }}>Restaurant</th>
                <th style={{ textAlign: "left", padding: "10px 12px", color: "#1c1917" }}>Best for</th>
                <th style={{ textAlign: "left", padding: "10px 12px", color: "#1c1917" }}>Price</th>
              </tr>
            </thead>
            <tbody>
              {entries.map(r => (
                <tr key={r.id} style={{ borderBottom: "1px solid #e8ddd4" }}>
                  <td style={{ padding: "10px 12px", fontWeight: 600, color: "#1c1917" }}>{r.name}</td>
                  <td style={{ padding: "10px 12px", color: "#6b6560" }}>{guide.bestFor?.[r.id]}</td>
                  <td style={{ padding: "10px 12px", color: "#6b6560" }}>{PRICE[r.priceRange]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {entries.map(r => (
        <div key={r.id} style={{ margin: "40px 0", paddingTop: 32, borderTop: "1px solid #e8ddd4" }}>
          {r.photo && (
            <div style={{ position: "relative", width: "100%", height: 220, borderRadius: 14, overflow: "hidden", marginBottom: 20 }}>
              <Image src={`/restaurants/${r.photo}`} alt={r.name} fill style={{ objectFit: "cover", objectPosition: r.photoPosition ?? "center" }} />
            </div>
          )}
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1c1917", marginBottom: 12 }}>
            {r.name}
          </h2>
          {guide.blurbs?.[r.id] && <ArticleBody text={guide.blurbs[r.id]} />}
          {guide.bestFor?.[r.id] && (
            <p style={{ fontSize: 14, color: "#292524", marginTop: 12 }}><strong>Best for:</strong> {guide.bestFor[r.id]}</p>
          )}
          <Link href={`/restaurants/${r.id}`} style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, textDecoration: "none", display: "inline-block", marginTop: 8 }}>
            Read our complete guide to {r.name} →
          </Link>
        </div>
      ))}

      {guide.faq && guide.faq.length > 0 && (
        <div style={{ margin: "48px 0" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", marginBottom: 20 }}>
            Frequently Asked Questions
          </h2>
          {guide.faq.map((item, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#1c1917", marginBottom: 6 }}>{item.question}</p>
              <FaqAnswer text={item.answer} style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.7 }} />
            </div>
          ))}
        </div>
      )}

      <AppBanner />
    </div>
  );
}
