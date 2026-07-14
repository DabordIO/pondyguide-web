import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { historyArticles } from "@/data/history";
import { historyArticlesFr } from "@/data/fr/history";
import { institutionArticles } from "@/data/institutions";
import { institutionArticlesFr } from "@/data/fr/institutions";
import { figures } from "@/data/figures";
import { figuresFr } from "@/data/fr/figures";
import { truncate } from "@/lib/truncate";

export const metadata: Metadata = {
  title: "Histoire de Pondichéry, de Rome à l'Inde française",
  description: "Suivez l'histoire de Pondichéry, du commerce antique et de la domination française aux guerres, institutions et personnages qui ont façonné la ville.",
  alternates: {
    languages: {
      en: "/history",
      fr: "/fr/history",
      "x-default": "/history",
    },
  },
};

export default function HistoryPageFr() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 80px" }}>
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>Histoire</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        L'histoire de Pondichéry
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#6b6560", maxWidth: 640, lineHeight: 1.8, marginBottom: 48 }}>
        Peu de villes en Inde portent autant de strates que Pondichéry. Marchands romains, rois chola, Portugais, Hollandais, Britanniques et Français ont tous laissé leur empreinte sur un littoral qui a toujours refusé d'être ordinaire.
      </p>

      <Section id="the-full-story" title="L'histoire complète">
        <ArticleGrid items={historyArticlesFr.map(a => {
          const en = historyArticles.find(h => h.id === a.id);
          return { id: a.id, title: a.title, teaser: a.teaser ?? "", href: `/fr/history/${a.id}`, photo: en?.photo, photoFolder: en?.photoFolder ?? "history" };
        })} />
      </Section>

      <Section id="french-institutions" title="Institutions françaises">
        <ArticleGrid items={institutionArticlesFr.map(a => {
          const en = institutionArticles.find(h => h.id === a.id);
          return { id: a.id, title: a.title, teaser: a.teaser, href: `/fr/history/institutions/${a.id}`, photo: en?.photo, photoFolder: en?.photoFolder ?? "history" };
        })} />
      </Section>

      <Section id="lives-and-legacies" title="Vies & Héritages">
        <p style={{ fontSize: 14, color: "#6b6560", marginBottom: 20 }}>Les gouverneurs, soldats, savants et saints qui ont façonné la ville.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
          {figuresFr.map(fr => {
            const en = figures.find(f => f.id === fr.id);
            return (
              <Link key={fr.id} href={`/fr/history/lives-and-legacies/${fr.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 12, overflow: "hidden", display: "block" }}>
                {en?.photo && (
                  <div style={{ position: "relative", width: "100%", height: 140 }}>
                    <Image src={`/figures/${en.photo}`} alt={fr.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                  </div>
                )}
                <div style={{ padding: "12px 16px 16px" }}>
                  <p style={{ fontWeight: 700, color: "#1c1917", fontSize: 15, marginBottom: 4 }}>{fr.name}</p>
                  <p style={{ fontSize: 12, color: "#d4711a" }}>{fr.dates}</p>
                  <p style={{ fontSize: 13, color: "#6b6560", marginTop: 6, lineHeight: 1.5 }}>{fr.role}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>
    </div>
  );
}

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} style={{ marginBottom: 56, scrollMarginTop: 140 }}>
      <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917", marginBottom: 24, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>{title}</h2>
      {children}
    </div>
  );
}

function ArticleGrid({ items }: { items: { id: string; title: string; teaser: string; href: string; photo?: string; photoFolder?: string }[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
      {items.map(item => (
        <Link key={item.id} href={item.href} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
          {item.photo && (
            <div style={{ position: "relative", width: "100%", height: 160 }}>
              <Image src={`/${item.photoFolder}/${item.photo}`} alt={item.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
          )}
          <div style={{ padding: "16px 20px 16px" }}>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 8, lineHeight: 1.3 }}>{item.title}</p>
            <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.6 }}>{truncate(item.teaser, 120)}</p>
            <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 12 }}>Lire la suite →</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
