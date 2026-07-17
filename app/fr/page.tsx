import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { historyArticles } from "@/data/history";
import { historyArticlesFr } from "@/data/fr/history";
import { institutionArticles } from "@/data/institutions";
import { institutionArticlesFr } from "@/data/fr/institutions";
import { figures } from "@/data/figures";
import { figuresFr } from "@/data/fr/figures";
import { streets } from "@/data/streets";
import { streetsFr } from "@/data/fr/streets";
import { sites } from "@/data/sites";
import { sitesFr } from "@/data/fr/sites";
import { truncate } from "@/lib/truncate";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "Guide de Pondichéry — en français",
  description: "L'histoire, les institutions françaises et les grandes figures de Pondichéry — en français.",
  alternates: {
    languages: {
      en: "/",
      fr: "/fr",
      "x-default": "/",
    },
  },
};

function SectionHeader({ title, href }: { title: string; href: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 16 }}>
      <Link href={href} className="section-heading-link">
        <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", lineHeight: 1.1, margin: 0 }}>{title}</h2>
      </Link>
      <Link href={href} aria-label={`Tout voir : ${title}`} style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600, whiteSpace: "nowrap", border: "1px solid #d4711a", borderRadius: 6, padding: "5px 12px", flexShrink: 0 }}>Tout voir →</Link>
    </div>
  );
}

function SectionIntro({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 620, lineHeight: 1.75, marginBottom: 40 }}>{children}</p>;
}

function ThreeGrid({ children }: { children: React.ReactNode }) {
  return <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>{children}</div>;
}

export default function FrenchHomePage() {
  const featuredHistoryIds = ["dupleix-gamble", "the-handover-1954", "can-anyone-become-french"];
  const featuredHistory = featuredHistoryIds
    .map(id => {
      const fr = historyArticlesFr.find(a => a.id === id);
      const en = historyArticles.find(a => a.id === id);
      return fr && en ? { fr, en } : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const featuredInstitutionIds = ["lycee-francais", "alliance-francaise", "foyer-du-soldat"];
  const featuredInstitutions = featuredInstitutionIds
    .map(id => {
      const fr = institutionArticlesFr.find(a => a.id === id);
      const en = institutionArticles.find(a => a.id === id);
      return fr && en ? { fr, en } : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const featuredFigureIds = ["ananda-ranga-pillai", "lally", "sri-aurobindo"];
  const featuredFigures = featuredFigureIds
    .map(id => {
      const fr = figuresFr.find(f => f.id === id);
      const en = figures.find(f => f.id === id);
      return fr && en ? { fr, en } : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const featuredStreetIds = ["rue-de-la-marine", "rue-dumas", "rue-suffren"];
  const featuredStreets = featuredStreetIds
    .map(id => {
      const fr = streetsFr.find(s => s.id === id);
      const en = streets.find(s => s.id === id);
      return fr && en ? { fr, en } : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const featuredSiteIds = ["sacred-heart", "museum", "manakula-vinayagar"];
  const featuredSites = featuredSiteIds
    .map(id => {
      const fr = sitesFr.find(s => s.id === id);
      const en = sites.find(s => s.id === id);
      return fr && en ? { fr, en } : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/" taHref="/ta" frHref="/fr" current="fr" />

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 72, paddingBottom: 64, borderBottom: "1px solid #e8ddd4" }}>
        <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2.75rem, 6vw, 4.5rem)", fontWeight: 700, color: "#1c1917", lineHeight: 1.1, marginBottom: 24, maxWidth: 800 }}>
          Pondichéry
        </h1>
        <p style={{ fontSize: "clamp(1.05rem, 2vw, 1.25rem)", color: "#6b6560", maxWidth: 680, lineHeight: 1.8 }}>
          Un lieu où marchands romains, royaumes tamouls, gouverneurs français et expériences spirituelles modernes ont tous laissé leur empreinte. Découvrez son histoire et son charme.
        </p>
      </section>

      {/* ── HISTORY ─────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 72 }}>
        <SectionHeader title="L'histoire de Pondichéry" href="/fr/history" />
        <SectionIntro>
          Peu de villes en Inde portent autant de strates que Pondichéry. Marchands romains, rois Chola, Portugais, Hollandais, Britanniques et Français ont tous marqué ce littoral qui a toujours refusé d'être ordinaire.
        </SectionIntro>
        <ThreeGrid>
          {featuredHistory.map(({ fr, en }) => (
            <Link key={fr.id} href={`/fr/history/${fr.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
              {en.photo && (
                <div style={{ position: "relative", width: "100%", height: 180 }}>
                  <Image src={`/${en.photoFolder ?? "history"}/${en.photo}`} alt={fr.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" style={{ objectFit: "cover" }} />
                </div>
              )}
              <div style={{ padding: "16px 18px 18px" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 8, lineHeight: 1.3 }}>{fr.title}</p>
                <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.6 }}>{truncate(fr.teaser, 115)}</p>
                <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 12 }}>Lire la suite →</p>
              </div>
            </Link>
          ))}
        </ThreeGrid>
      </section>

      {/* ── HOTELS ──────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 72 }}>
        <SectionHeader title="Où séjourner" href="/fr/hotels" />
        <SectionIntro>25 adresses soigneusement sélectionnées, des hôtels boutique patrimoniaux aux maisons d'hôtes économiques, pour tous les goûts.</SectionIntro>
        <ThreeGrid>
          {[
            { href: "/fr/hotels/palais-de-mahe", photo: "/hotels/palais-de-mahe.jpg", title: "Palais de Mahé", description: "L'adresse la plus romantique de White Town. Une façade jaune moutarde rue Law de Lauriston." },
            { href: "/fr/hotels/maison-perumal", photo: "/hotels/maison-perumal.jpg", title: "Maison Perumal", description: "Une demeure chettinad restaurée avec un soin extraordinaire. Calme, belle, sans hâte." },
            { href: "/fr/hotels/le-dupleix", photo: "/hotels/le-dupleix.jpg", title: "Le Dupleix", description: "Nommé d'après le gouverneur lui-même, dans la rue qui porte son nom." },
          ].map(h => (
            <Link key={h.href} href={h.href} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
              <div style={{ position: "relative", width: "100%", height: 180 }}>
                <Image src={h.photo} alt={h.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "14px 16px 18px" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 8, lineHeight: 1.3 }}>{h.title}</p>
                <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.6 }}>{h.description}</p>
                <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 12 }}>Lire la suite →</p>
              </div>
            </Link>
          ))}
        </ThreeGrid>
      </section>

      {/* ── LIVES & LEGACIES ────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 72 }}>
        <SectionHeader title="Vies et héritages" href="/fr/history/lives-and-legacies" />
        <SectionIntro>Les gouverneurs, soldats, érudits et saints qui ont façonné la ville.</SectionIntro>
        <ThreeGrid>
          {featuredFigures.map(({ fr, en }) => (
            <Link key={fr.id} href={`/fr/history/lives-and-legacies/${fr.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
              <div style={{ position: "relative", width: "100%", height: 280, background: "#f0ece6" }}>
                {en.photo && <Image src={`/figures/${en.photo}`} alt={fr.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" style={{ objectFit: "cover", objectPosition: "center top" }} />}
              </div>
              <div style={{ padding: "14px 16px 16px" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 15, marginBottom: 4, lineHeight: 1.3 }}>{fr.name}</p>
                <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginBottom: 6 }}>{en.dates}</p>
                <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.5 }}>{fr.role}</p>
              </div>
            </Link>
          ))}
        </ThreeGrid>
      </section>

      {/* ── FRENCH INSTITUTIONS ─────────────────────────────────────────────── */}
      <section style={{ marginBottom: 72 }}>
        <SectionHeader title="Institutions françaises" href="/fr/history/institutions" />
        <SectionIntro>Les centres d'excellence français qui poursuivent leur mission, certains sous administration indienne.</SectionIntro>
        <ThreeGrid>
          {featuredInstitutions.map(({ fr, en }) => (
            <Link key={fr.id} href={`/fr/history/institutions/${fr.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
              {en.photo && (
                <div style={{ position: "relative", width: "100%", height: 180 }}>
                  <Image src={`/${en.photoFolder ?? "history"}/${en.photo}`} alt={fr.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" style={{ objectFit: "cover" }} />
                </div>
              )}
              <div style={{ padding: "16px 18px 18px" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 8, lineHeight: 1.3 }}>{fr.title}</p>
                <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.6 }}>{truncate(fr.teaser, 115)}</p>
                <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 12 }}>Lire la suite →</p>
              </div>
            </Link>
          ))}
        </ThreeGrid>
      </section>

      {/* ── WHITE TOWN STREETS ──────────────────────────────────────────────── */}
      <section style={{ marginBottom: 72 }}>
        <SectionHeader title="Les rues du quartier français" href="/fr/discover/white-town" />
        <SectionIntro>40 rues, chacune nommée d'après un gouverneur ou un amiral. Chacune a son histoire.</SectionIntro>
        <ThreeGrid>
          {featuredStreets.map(({ fr, en }) => (
            <Link key={fr.id} href={`/fr/discover/white-town/${fr.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
              {en.photo && (
                <div style={{ position: "relative", width: "100%", height: 180 }}>
                  <Image src={`/streets/${en.photo}`} alt={en.altName ?? en.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" style={{ objectFit: "cover" }} />
                </div>
              )}
              <div style={{ padding: "16px 18px 18px" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 8, lineHeight: 1.3 }}>{en.altName ?? en.name}</p>
                <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.6 }}>{truncate(fr.summary, 115)}</p>
                <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 12 }}>Lire la suite →</p>
              </div>
            </Link>
          ))}
        </ThreeGrid>
      </section>

      {/* ── LANDMARKS ───────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 72 }}>
        <SectionHeader title="Monuments et sites historiques" href="/fr/discover/landmarks" />
        <SectionIntro>Églises, temples, musées, et bâtiments coloniaux — deux mille ans d'histoire locale.</SectionIntro>
        <ThreeGrid>
          {featuredSites.map(({ fr, en }) => (
            <Link key={fr.id} href={`/fr/discover/landmarks/${fr.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
              {en.photo && (
                <div style={{ position: "relative", width: "100%", height: 180 }}>
                  <Image src={`/sites/${en.photo}`} alt={fr.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" style={{ objectFit: "cover", objectPosition: en.photoPosition ?? "center" }} />
                </div>
              )}
              <div style={{ padding: "16px 18px 18px" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 8, lineHeight: 1.3 }}>{fr.name}</p>
                <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.6 }}>{truncate(fr.summary, 115)}</p>
                <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 12 }}>Lire la suite →</p>
              </div>
            </Link>
          ))}
        </ThreeGrid>
      </section>
    </div>
  );
}
