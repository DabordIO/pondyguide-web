import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { restaurantGuides } from "@/data/restaurantGuides";
import { restaurantGuidesFr } from "@/data/fr/restaurantGuides";
import { restaurantGuidesTa } from "@/data/ta/restaurantGuides";
import { restaurants } from "@/data/restaurants";
import { restaurantsFr } from "@/data/fr/restaurants";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";

const READY_GUIDES_EN = restaurantGuides.filter(g => g.intro && g.blurbs);

function findGuide(slug: string) {
  const en = READY_GUIDES_EN.find(g => g.slug === slug);
  if (!en) return null;
  const fr = restaurantGuidesFr.find(g => g.id === en.id);
  if (!fr) return null;
  return { en, fr };
}

export async function generateStaticParams() {
  return READY_GUIDES_EN
    .filter(en => restaurantGuidesFr.some(g => g.id === en.id))
    .map(g => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = findGuide(slug);
  if (!entry) return {};
  const { en, fr } = entry;
  const hasTa = restaurantGuidesTa.some(g => g.id === en.id);
  return {
    title: fr.metaTitle ?? fr.title,
    description: fr.metaDescription,
    alternates: {
      languages: {
        en: `/restaurants/guides/${slug}`,
        fr: `/fr/restaurants/guides/${slug}`,
        ...(hasTa ? { ta: `/ta/restaurants/guides/${slug}` } : {}),
        "x-default": `/restaurants/guides/${slug}`,
      },
    },
  };
}

const PRICE = { budget: "₹", mid: "₹₹", upscale: "₹₹₹" };

export default async function RestaurantGuidePageFr({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = findGuide(slug);
  if (!entry) notFound();
  const { en: guide, fr } = entry;
  const hasTa = restaurantGuidesTa.some(g => g.id === guide.id);

  const entries = guide.restaurantIds
    .map(id => {
      const r = restaurants.find(r => r.id === id);
      const rFr = restaurantsFr.find(r => r.id === id);
      return r && rFr ? { en: r, fr: rFr } : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <div style={{ maxWidth: 780, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref={`/restaurants/guides/${guide.slug}`} taHref={hasTa ? `/ta/restaurants/guides/${guide.slug}` : undefined} frHref={`/fr/restaurants/guides/${guide.slug}`} current="fr" />
      <Link href="/fr/restaurants" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Restaurants</Link>

      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", margin: "24px 0 24px", lineHeight: 1.2 }}>
        {fr.title}
      </h1>

      {fr.intro && <ArticleBody text={fr.intro} />}

      {fr.quickPicks && fr.quickPicks.length > 0 && (
        <div style={{ margin: "32px 0", background: "#fff8f0", border: "1px solid #fed7aa", borderRadius: 12, padding: "20px 24px", overflowX: "auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 14 }}>Comment choisir</p>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <tbody>
              {fr.quickPicks.map((item, i) => (
                <tr key={i} style={{ borderBottom: i < fr.quickPicks!.length - 1 ? "1px solid #fed7aa" : "none" }}>
                  <td style={{ padding: "8px 12px 8px 0", color: "#292524" }}>{item.situation}</td>
                  <td style={{ padding: "8px 0", fontWeight: 700, color: "#1c1917" }}>{item.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {fr.whyHeading && fr.whyBody && (
        <>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", margin: "40px 0 16px" }}>
            {fr.whyHeading}
          </h2>
          <ArticleBody text={fr.whyBody} />
        </>
      )}

      {fr.bestFor && (
        <div style={{ margin: "40px 0", overflowX: "auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", marginBottom: 16 }}>En un coup d'œil</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #e8ddd4" }}>
                <th style={{ textAlign: "left", padding: "10px 12px", color: "#1c1917" }}>Restaurant</th>
                <th style={{ textAlign: "left", padding: "10px 12px", color: "#1c1917" }}>Idéal pour</th>
                <th style={{ textAlign: "left", padding: "10px 12px", color: "#1c1917" }}>Prix</th>
              </tr>
            </thead>
            <tbody>
              {entries.map(({ en, fr: rFr }) => (
                <tr key={en.id} style={{ borderBottom: "1px solid #e8ddd4" }}>
                  <td style={{ padding: "10px 12px", fontWeight: 600, color: "#1c1917" }}>{rFr.name}</td>
                  <td style={{ padding: "10px 12px", color: "#6b6560" }}>{fr.bestFor?.[en.id]}</td>
                  <td style={{ padding: "10px 12px", color: "#6b6560" }}>{PRICE[en.priceRange]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {entries.map(({ en, fr: rFr }) => (
        <div key={en.id} style={{ margin: "40px 0", paddingTop: 32, borderTop: "1px solid #e8ddd4" }}>
          {en.photo && (
            <div style={{ position: "relative", width: "100%", height: 220, borderRadius: 14, overflow: "hidden", marginBottom: 20 }}>
              <Image src={`/restaurants/${en.photo}`} alt={rFr.name} fill style={{ objectFit: "cover", objectPosition: en.photoPosition ?? "center" }} />
            </div>
          )}
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: "#1c1917", marginBottom: 12 }}>
            {rFr.name}
          </h2>
          {fr.blurbs?.[en.id] && <ArticleBody text={fr.blurbs[en.id]} />}
          {fr.bestFor?.[en.id] && (
            <p style={{ fontSize: 14, color: "#292524", marginTop: 12 }}><strong>Idéal pour :</strong> {fr.bestFor[en.id]}</p>
          )}
          <Link href={`/fr/restaurants/${en.id}`} style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, textDecoration: "none", display: "inline-block", marginTop: 8 }}>
            Lire notre guide complet sur {rFr.name} →
          </Link>
        </div>
      ))}

      {fr.faq && fr.faq.length > 0 && (
        <div style={{ margin: "48px 0" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", marginBottom: 20 }}>
            Questions fréquentes
          </h2>
          {fr.faq.map((item, i) => (
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
