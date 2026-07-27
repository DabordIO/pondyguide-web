import Link from "next/link";
import type { Metadata } from "next";
import { transportArticlesFr } from "@/data/fr/transport";
import { practicalTopicsFr } from "@/data/fr/practical";
import { aurovilleArticlesFr } from "@/data/fr/auroville";
import { restaurantGuidesFr } from "@/data/fr/restaurantGuides";
import { institutionArticlesFr } from "@/data/fr/institutions";
import { historyArticlesFr } from "@/data/fr/history";
import { hotelGuidesFr } from "@/data/fr/hotelGuides";
import FaqAnswer from "@/components/FaqAnswer";
import LanguageToggle from "@/components/LanguageToggle";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "FAQ Visiteurs de Pondichéry",
  description: "Réponses aux questions les plus posées par les visiteurs sur l'arrivée à Pondichéry, Auroville, la gastronomie, l'hébergement et l'organisation pratique du séjour.",
  alternates: {
    canonical: "/fr/faq",
    languages: {
      en: "/faq",
      fr: "/fr/faq",
      "x-default": "/faq",
    },
  },
};

const findGuide = (id: string) => restaurantGuidesFr.find(g => g.id === id);
const findHotelGuide = (id: string) => hotelGuidesFr.find(g => g.id === id);
const findTransport = (id: string) => transportArticlesFr.find(a => a.id === id);
const findAuroville = (id: string) => aurovilleArticlesFr.find(a => a.id === id);
const findTopic = (id: string) => practicalTopicsFr.find(t => t.id === id);
const findInstitution = (id: string) => institutionArticlesFr.find(a => a.id === id);
const findHistory = (id: string) => historyArticlesFr.find(a => a.id === id);

const chapters: { title: string; groups: { href: string; label: string; faq: { question: string; answer: string }[] }[] }[] = [
  {
    title: "Rejoindre Pondichéry",
    groups: [
      { href: "/fr/plan/getting-here", label: "Arriver", faq: [findTransport("by-air"), findTransport("road-trip-ecr"), findTransport("train")].flatMap(a => a?.faq ?? []) },
    ],
  },
  {
    title: "Se déplacer sur place",
    groups: [
      { href: "/fr/plan/getting-around", label: "Se déplacer", faq: [...(findTopic("getting-around")?.faq ?? []), ...(findTransport("bicycles-and-scooters")?.faq ?? [])] },
    ],
  },
  {
    title: "Auroville & Matrimandir",
    groups: [
      { href: "/fr/discover/auroville/how-to-visit", label: "Comment visiter Auroville", faq: findAuroville("how-to-visit")?.faq ?? [] },
      { href: "/fr/discover/auroville/the-matrimandir", label: "Le Matrimandir", faq: findAuroville("the-matrimandir")?.faq ?? [] },
    ],
  },
  {
    title: "Gastronomie & culture française",
    groups: [
      { href: "/fr/restaurants/guides/best-french-restaurants", label: "Meilleurs restaurants français", faq: findGuide("french")?.faq ?? [] },
      { href: "/fr/restaurants/guides/best-indian-and-tamil-restaurants", label: "Meilleurs restaurants indiens et tamouls", faq: findGuide("indian-tamil")?.faq ?? [] },
      { href: "/fr/restaurants/guides/best-cafes-and-bakeries", label: "Meilleurs cafés et boulangeries", faq: findGuide("cafes-bakeries")?.faq ?? [] },
      { href: "/fr/history/institutions/alliance-francaise", label: "Alliance française de Pondichéry", faq: findInstitution("alliance-francaise")?.faq ?? [] },
      { href: "/fr/history/the-handover-1954", label: "1954 : la passation", faq: findHistory("the-handover-1954")?.faq ?? [] },
    ],
  },
  {
    title: "Hébergement",
    groups: [
      { href: "/fr/hotels/guides/best-heritage-hotels-pondicherry", label: "Meilleurs hôtels patrimoniaux", faq: findHotelGuide("french-heritage")?.faq ?? [] },
      { href: "/fr/hotels/guides/best-beach-resorts-near-pondicherry", label: "Meilleurs complexes balnéaires", faq: findHotelGuide("coastal-wellness")?.faq ?? [] },
      { href: "/fr/hotels/guides/best-family-hotels-pondicherry", label: "Meilleurs hôtels familiaux", faq: findHotelGuide("family")?.faq ?? [] },
    ],
  },
  {
    title: "Informations pratiques",
    groups: [
      { href: "/fr/plan/practical", label: "Informations pratiques", faq: [...(findTopic("when-to-visit")?.faq ?? []), ...(findTopic("tourist-information")?.faq ?? []), ...(findTopic("practical-tips")?.faq ?? [])] },
    ],
  },
];

export default function FaqPageFr() {
  return (
    <div style={{ maxWidth: 820, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/faq" frHref="/fr/faq" current="fr" />
      <Breadcrumbs items={[{ label: "Accueil", href: "/fr" }, { label: "FAQ", href: "/fr/faq" }]} />
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>FAQ</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        FAQ visiteurs de Pondichéry
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 40, paddingBottom: 40, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        Réponses aux questions les plus posées par les visiteurs, classées par thème. Chaque réponse renvoie vers le guide complet pour plus de détails.
      </p>

      {chapters.map(chapter => {
        const totalFaq = chapter.groups.reduce((n, g) => n + g.faq.length, 0);
        if (totalFaq === 0) return null;
        return (
          <div key={chapter.title} style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1c1917", marginBottom: 24, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>
              {chapter.title}
            </h2>
            {chapter.groups.filter(g => g.faq.length > 0).map(group => (
              <div key={group.href + group.label} style={{ marginBottom: 32 }}>
                {chapter.groups.length > 1 && (
                  <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#a8a29e", marginBottom: 14 }}>
                    {group.label}
                  </p>
                )}
                {group.faq.map((item, i) => (
                  <div key={i} style={{ marginBottom: 18 }}>
                    <p style={{ fontSize: 15, fontWeight: 700, color: "#1c1917", marginBottom: 6 }}>{item.question}</p>
                    <FaqAnswer text={item.answer} style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.7 }} />
                  </div>
                ))}
                <Link href={group.href} style={{ fontSize: 13, color: "#d4711a", fontWeight: 600, textDecoration: "none" }}>
                  Lire le guide complet : {group.label} →
                </Link>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
