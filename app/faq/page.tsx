import Link from "next/link";
import type { Metadata } from "next";
import { transportArticles } from "@/data/transport";
import { practicalTopics } from "@/data/practical";
import { aurovilleArticles } from "@/data/auroville";
import { restaurantGuides } from "@/data/restaurantGuides";
import { institutionArticles } from "@/data/institutions";
import { historyArticles } from "@/data/history";
import { hotelGuides } from "@/data/hotelGuides";
import FaqAnswer from "@/components/FaqAnswer";
import LanguageToggle from "@/components/LanguageToggle";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pondicherry Visitor FAQ",
  description: "Answers to the questions visitors ask most about getting to Pondicherry, Auroville, food, accommodation and practical planning.",
  alternates: {
    canonical: "/faq",
    languages: {
      en: "/faq",
      fr: "/fr/faq",
      "x-default": "/faq",
    },
  },
};

const findGuide = (id: string) => restaurantGuides.find(g => g.id === id);
const findHotelGuide = (id: string) => hotelGuides.find(g => g.id === id);
const findTransport = (id: string) => transportArticles.find(a => a.id === id);
const findAuroville = (id: string) => aurovilleArticles.find(a => a.id === id);
const findTopic = (id: string) => practicalTopics.find(t => t.id === id);
const findInstitution = (id: string) => institutionArticles.find(a => a.id === id);
const findHistory = (id: string) => historyArticles.find(a => a.id === id);

const chapters: { title: string; groups: { href: string; label: string; faq: { question: string; answer: string }[] }[] }[] = [
  {
    title: "Getting to Pondicherry",
    groups: [
      { href: "/plan/getting-here", label: "Getting Here", faq: [findTransport("by-air"), findTransport("road-trip-ecr"), findTransport("train")].flatMap(a => a?.faq ?? []) },
    ],
  },
  {
    title: "Local Transport",
    groups: [
      { href: "/plan/getting-around", label: "Getting Around", faq: [...(findTopic("getting-around")?.faq ?? []), ...(findTransport("bicycles-and-scooters")?.faq ?? [])] },
    ],
  },
  {
    title: "Auroville & Matrimandir",
    groups: [
      { href: "/discover/auroville/how-to-visit", label: "How to Visit Auroville", faq: findAuroville("how-to-visit")?.faq ?? [] },
      { href: "/discover/auroville/the-matrimandir", label: "The Matrimandir", faq: findAuroville("the-matrimandir")?.faq ?? [] },
    ],
  },
  {
    title: "Food & French Culture",
    groups: [
      { href: "/restaurants/guides/best-french-restaurants", label: "Best French Restaurants", faq: findGuide("french")?.faq ?? [] },
      { href: "/restaurants/guides/best-indian-and-tamil-restaurants", label: "Best Indian & Tamil Restaurants", faq: findGuide("indian-tamil")?.faq ?? [] },
      { href: "/restaurants/guides/best-cafes-and-bakeries", label: "Best Cafés & Bakeries", faq: findGuide("cafes-bakeries")?.faq ?? [] },
      { href: "/history/institutions/alliance-francaise", label: "Alliance Française de Pondichéry", faq: findInstitution("alliance-francaise")?.faq ?? [] },
      { href: "/history/the-handover-1954", label: "1954: The Handover", faq: findHistory("the-handover-1954")?.faq ?? [] },
    ],
  },
  {
    title: "Accommodation",
    groups: [
      { href: "/hotels/guides/best-heritage-hotels-pondicherry", label: "Best Heritage Hotels", faq: findHotelGuide("french-heritage")?.faq ?? [] },
      { href: "/hotels/guides/best-beach-resorts-near-pondicherry", label: "Best Beach Resorts", faq: findHotelGuide("coastal-wellness")?.faq ?? [] },
      { href: "/hotels/guides/best-family-hotels-pondicherry", label: "Best Family Hotels", faq: findHotelGuide("family")?.faq ?? [] },
    ],
  },
  {
    title: "Practical Information",
    groups: [
      { href: "/plan/practical", label: "Practical Information", faq: [...(findTopic("when-to-visit")?.faq ?? []), ...(findTopic("tourist-information")?.faq ?? []), ...(findTopic("practical-tips")?.faq ?? [])] },
    ],
  },
];

export default function FaqPage() {
  return (
    <div style={{ maxWidth: 820, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/faq" frHref="/fr/faq" current="en" />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq" }]} />
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>FAQ</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        Pondicherry Visitor FAQ
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 40, paddingBottom: 40, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        Answers to the questions visitors ask most, organised by topic. Each answer links to the full guide for more detail.
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
                  Read the full guide: {group.label} →
                </Link>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
