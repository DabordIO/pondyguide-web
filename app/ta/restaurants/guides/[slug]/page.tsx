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

function findGuide(slug: string) {
  const en = restaurantGuides.find(g => g.slug === slug);
  const ta = en ? restaurantGuidesTa.find(g => g.id === en.id) : undefined;
  if (!en || !ta) return null;
  return { en, ta };
}

export async function generateStaticParams() {
  return restaurantGuidesTa
    .map(ta => restaurantGuides.find(g => g.id === ta.id))
    .filter((g): g is NonNullable<typeof g> => Boolean(g))
    .map(g => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = findGuide(slug);
  if (!guide) return {};
  const hasFr = restaurantGuidesFr.some(g => g.id === guide.en.id);
  return {
    title: guide.ta.metaTitle ?? guide.ta.title,
    description: guide.ta.metaDescription,
    alternates: {
      languages: {
        en: `/restaurants/guides/${slug}`,
        ta: `/ta/restaurants/guides/${slug}`,
        ...(hasFr ? { fr: `/fr/restaurants/guides/${slug}` } : {}),
        "x-default": `/restaurants/guides/${slug}`,
      },
    },
  };
}

const PRICE = { budget: "₹", mid: "₹₹", upscale: "₹₹₹" };

export default async function RestaurantGuidePageTa({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = findGuide(slug);
  if (!guide) notFound();
  const { en, ta } = guide;
  const hasFr = restaurantGuidesFr.some(g => g.id === en.id);

  const entries = en.restaurantIds
    .map(id => restaurants.find(r => r.id === id))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <div style={{ maxWidth: 780, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref={`/restaurants/guides/${en.slug}`} taHref={`/ta/restaurants/guides/${en.slug}`} frHref={hasFr ? `/fr/restaurants/guides/${en.slug}` : undefined} current="ta" />
      <Link href="/ta/restaurants" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← உணவகங்கள்</Link>

      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", margin: "24px 0 24px", lineHeight: 1.2 }}>
        {ta.title}
      </h1>

      {ta.intro && <ArticleBody text={ta.intro} />}

      {ta.quickPicks && ta.quickPicks.length > 0 && (
        <div style={{ margin: "32px 0", background: "#fff8f0", border: "1px solid #fed7aa", borderRadius: 12, padding: "20px 24px", overflowX: "auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 14 }}>எப்படித் தேர்வு செய்வது</p>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <tbody>
              {ta.quickPicks.map((item, i) => (
                <tr key={i} style={{ borderBottom: i < ta.quickPicks!.length - 1 ? "1px solid #fed7aa" : "none" }}>
                  <td style={{ padding: "8px 12px 8px 0", color: "#292524" }}>{item.situation}</td>
                  <td style={{ padding: "8px 0", fontWeight: 700, color: "#1c1917" }}>{item.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {ta.whyHeading && ta.whyBody && (
        <>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", margin: "40px 0 16px" }}>
            {ta.whyHeading}
          </h2>
          <ArticleBody text={ta.whyBody} />
        </>
      )}

      {ta.bestFor && (
        <div style={{ margin: "40px 0", overflowX: "auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>ஒரே பார்வையில்</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #e8ddd4" }}>
                <th style={{ textAlign: "left", padding: "10px 12px", color: "#1c1917" }}>உணவகம்</th>
                <th style={{ textAlign: "left", padding: "10px 12px", color: "#1c1917" }}>சிறந்தது</th>
                <th style={{ textAlign: "left", padding: "10px 12px", color: "#1c1917" }}>விலை</th>
              </tr>
            </thead>
            <tbody>
              {entries.map(r => (
                <tr key={r.id} style={{ borderBottom: "1px solid #e8ddd4" }}>
                  <td style={{ padding: "10px 12px", fontWeight: 600, color: "#1c1917" }}>{r.name}</td>
                  <td style={{ padding: "10px 12px", color: "#6b6560" }}>{ta.bestFor?.[r.id]}</td>
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
          {ta.blurbs?.[r.id] && <ArticleBody text={ta.blurbs[r.id]} />}
          {ta.bestFor?.[r.id] && (
            <p style={{ fontSize: 14, color: "#292524", marginTop: 12 }}><strong>சிறந்தது:</strong> {ta.bestFor[r.id]}</p>
          )}
          <Link href={`/restaurants/${r.id}`} style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, textDecoration: "none", display: "inline-block", marginTop: 8 }}>
            {r.name} பற்றிய முழு வழிகாட்டியைப் படிக்க →
          </Link>
        </div>
      ))}

      {ta.faq && ta.faq.length > 0 && (
        <div style={{ margin: "48px 0" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", marginBottom: 20 }}>
            அடிக்கடி கேட்கப்படும் கேள்விகள்
          </h2>
          {ta.faq.map((item, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#1c1917", marginBottom: 6 }}>{item.question}</p>
              <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.7 }}>{item.answer}</p>
            </div>
          ))}
        </div>
      )}

      <AppBanner />
    </div>
  );
}
