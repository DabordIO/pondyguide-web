import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { hotelGuides } from "@/data/hotelGuides";
import { hotelGuidesTa } from "@/data/ta/hotelGuides";
import { hotelGuidesFr } from "@/data/fr/hotelGuides";
import { hotels } from "@/data/hotels";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";

function findGuide(slug: string) {
  const en = hotelGuides.find(g => g.slug === slug);
  const ta = en ? hotelGuidesTa.find(g => g.id === en.id) : undefined;
  if (!en || !ta) return null;
  return { en, ta };
}

export async function generateStaticParams() {
  return hotelGuidesTa
    .map(ta => hotelGuides.find(g => g.id === ta.id))
    .filter((g): g is NonNullable<typeof g> => Boolean(g))
    .map(g => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = findGuide(slug);
  if (!guide) return {};
  const hasFr = hotelGuidesFr.some(g => g.id === guide.en.id);
  return {
    title: guide.ta.metaTitle ?? guide.ta.title,
    description: guide.ta.metaDescription,
    alternates: {
      languages: {
        en: `/hotels/guides/${slug}`,
        ta: `/ta/hotels/guides/${slug}`,
        ...(hasFr ? { fr: `/fr/hotels/guides/${slug}` } : {}),
        "x-default": `/hotels/guides/${slug}`,
      },
    },
  };
}

const PRICE = { budget: "₹", mid: "₹₹", upscale: "₹₹₹", luxury: "₹₹₹₹" };

export default async function HotelGuidePageTa({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = findGuide(slug);
  if (!guide) notFound();
  const { en, ta } = guide;
  const hasFr = hotelGuidesFr.some(g => g.id === en.id);

  const entries = en.hotelIds
    .map(id => hotels.find(h => h.id === id))
    .filter((h): h is NonNullable<typeof h> => Boolean(h));

  return (
    <div style={{ maxWidth: 780, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref={`/hotels/guides/${en.slug}`} taHref={`/ta/hotels/guides/${en.slug}`} frHref={hasFr ? `/fr/hotels/guides/${en.slug}` : undefined} current="ta" />
      <Link href="/ta/hotels" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← ஹோட்டல்கள்</Link>

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
                <th style={{ textAlign: "left", padding: "10px 12px", color: "#1c1917" }}>ஹோட்டல்</th>
                <th style={{ textAlign: "left", padding: "10px 12px", color: "#1c1917" }}>சிறந்தது</th>
                <th style={{ textAlign: "left", padding: "10px 12px", color: "#1c1917" }}>விலை</th>
              </tr>
            </thead>
            <tbody>
              {entries.map(h => (
                <tr key={h.id} style={{ borderBottom: "1px solid #e8ddd4" }}>
                  <td style={{ padding: "10px 12px", fontWeight: 600, color: "#1c1917" }}>{h.name}</td>
                  <td style={{ padding: "10px 12px", color: "#6b6560" }}>{ta.bestFor?.[h.id]}</td>
                  <td style={{ padding: "10px 12px", color: "#6b6560" }}>{PRICE[h.priceRange]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {entries.map(h => (
        <div key={h.id} style={{ margin: "40px 0", paddingTop: 32, borderTop: "1px solid #e8ddd4" }}>
          {h.photo && (
            <div style={{ position: "relative", width: "100%", height: 220, borderRadius: 14, overflow: "hidden", marginBottom: 20 }}>
              <Image src={`/hotels/${h.photo}`} alt={h.name} fill style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
          )}
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1c1917", marginBottom: 12 }}>
            {h.name}
          </h2>
          {ta.blurbs?.[h.id] && <ArticleBody text={ta.blurbs[h.id]} />}
          {ta.bestFor?.[h.id] && (
            <p style={{ fontSize: 14, color: "#292524", marginTop: 12 }}><strong>சிறந்தது:</strong> {ta.bestFor[h.id]}</p>
          )}
          <Link href={`/hotels/${h.id}`} style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, textDecoration: "none", display: "inline-block", marginTop: 8 }}>
            {h.name} பற்றிய முழு வழிகாட்டியைப் படிக்க →
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
