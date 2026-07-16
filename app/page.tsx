import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { historyArticles } from "@/data/history";
import { institutionArticles } from "@/data/institutions";
import { figures } from "@/data/figures";
import { aurovilleArticles } from "@/data/auroville";
import { restaurants } from "@/data/restaurants";
import { truncate } from "@/lib/truncate";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "Pondy Guide: Travel, History and Heritage in Pondicherry",
  description: "An independent guide to Pondicherry, covering history, heritage streets, restaurants, hotels, festivals and practical travel advice.",
  alternates: {
    languages: {
      en: "/",
      ta: "/ta",
      fr: "/fr",
      "x-default": "/",
    },
  },
};

const PRICE_LABELS: Record<string, string> = { budget: "₹", mid: "₹₹", upscale: "₹₹₹" };

function SectionHeader({ title, href, h1 = false }: { title: string; href: string; h1?: boolean }) {
  const headingStyle = { fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1c1917", lineHeight: 1.1, margin: 0 };
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 16 }}>
      <Link href={href} className="section-heading-link">
        {h1 ? <h1 style={headingStyle}>{title}</h1> : <h2 style={headingStyle}>{title}</h2>}
      </Link>
      <Link href={href} aria-label={`See all: ${title}`} style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600, whiteSpace: "nowrap", border: "1px solid #d4711a", borderRadius: 6, padding: "5px 12px", flexShrink: 0 }}>See all →</Link>
    </div>
  );
}

function SectionIntro({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: "1.05rem", color: "#6b6560", maxWidth: 620, lineHeight: 1.75, marginBottom: 40 }}>{children}</p>;
}

function SubHeading({ label, href }: { label: string; href?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e8ddd4", paddingBottom: 12, marginBottom: 24 }}>
      <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917" }}>{label}</h3>
      {href && <Link href={href} style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600, whiteSpace: "nowrap", border: "1px solid #d4711a", borderRadius: 6, padding: "5px 12px", flexShrink: 0 }}>See all →</Link>}
    </div>
  );
}

function ArticleCard({ href, photo, photoFolder = "history", title, teaser, priority = false }: { href: string; photo?: string; photoFolder?: string; title: string; teaser: string; priority?: boolean }) {
  return (
    <Link href={href} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
      {photo && (
        <div style={{ position: "relative", width: "100%", height: 180 }}>
          <Image src={`/${photoFolder}/${photo}`} alt={title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" style={{ objectFit: "cover" }} priority={priority} />
        </div>
      )}
      <div style={{ padding: "16px 18px 18px" }}>
        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 8, lineHeight: 1.3 }}>{title}</p>
        <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.6 }}>{truncate(teaser, 115)}</p>
        <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 12 }}>Read more →</p>
      </div>
    </Link>
  );
}

function ThreeGrid({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
      {children}
    </div>
  );
}

export default function HomePage() {
  const featuredHistory = ["dupleix-gamble", "the-handover-1954", "can-anyone-become-french"]
    .map(id => historyArticles.find(a => a.id === id)).filter(Boolean) as typeof historyArticles;
  const featuredInstitutions = ["lycee-francais", "alliance-francaise", "foyer-du-soldat"]
    .map(id => institutionArticles.find(a => a.id === id)).filter(Boolean) as typeof institutionArticles;
  const featuredFigures = ["ananda-ranga-pillai", "lally", "sri-aurobindo"]
    .map(id => figures.find(f => f.id === id)).filter(Boolean) as typeof figures;
  const featuredAuroville = ["the-matrimandir", "arts-crafts", "how-to-visit"]
    .map(id => aurovilleArticles.find(a => a.id === id)).filter(Boolean) as typeof aurovilleArticles;
  const featuredRestaurants = ["coromandel-cafe", "indian-coffee-house", "de-bluefin-seafood"]
    .map(id => restaurants.find(r => r.id === id)).filter(Boolean) as typeof restaurants;

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/" taHref="/ta" frHref="/fr" current="en" />

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 72, paddingBottom: 64, borderBottom: "1px solid #e8ddd4" }}>
        <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2.75rem, 6vw, 4.5rem)", fontWeight: 700, color: "#1c1917", lineHeight: 1.1, marginBottom: 24, maxWidth: 800 }}>
          Pondicherry
        </h1>
        <p style={{ fontSize: "clamp(1.05rem, 2vw, 1.25rem)", color: "#6b6560", maxWidth: 680, lineHeight: 1.8 }}>
          A place where Roman traders, Tamil kingdoms, French governors, and modern spiritual experiments all left their mark. Uncover its history and explore its charms.
        </p>
      </section>

      {/* ── HISTORY ─────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 72 }}>
        <SectionHeader title="The Story of Pondicherry" href="/history" />
        <SectionIntro>
          Few towns in India carry as many layers as Pondicherry. Roman traders, Chola kings, Portuguese, Dutch, British, and French have all left their mark on a stretch of coastline that refused to be ordinary.
        </SectionIntro>
        <ThreeGrid>
          {featuredHistory.map((a, i) => (
            <ArticleCard key={a.id} href={`/history/${a.id}`} photo={a.photo} photoFolder={a.photoFolder ?? "history"} title={a.title} teaser={a.teaser} priority={i < 2} />
          ))}
        </ThreeGrid>
      </section>

      {/* ── HOTELS ──────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 72 }}>
        <SectionHeader title="Where to Stay" href="/hotels" />
        <SectionIntro>25 carefully chosen places to stay, from heritage boutique hotels to budget guesthouses, for every taste.</SectionIntro>
        <ThreeGrid>
          {[
            { href: "/hotels/palais-de-mahe", photo: "/hotels/palais-de-mahe.jpg", title: "Palais de Mahe", description: "The most romantic address in the White Town. A mustard-yellow façade on Rue Law de Lauriston." },
            { href: "/hotels/maison-perumal", photo: "/hotels/maison-perumal.jpg", title: "Maison Perumal", description: "A Chettinad mansion restored with extraordinary care. Quiet, beautiful, unhurried." },
            { href: "/hotels/le-dupleix", photo: "/hotels/le-dupleix.jpg", title: "Le Dupleix", description: "Named after the governor himself, on the street that carries his name." },
          ].map(h => (
            <Link key={h.href} href={h.href} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
              <div style={{ position: "relative", width: "100%", height: 180 }}>
                <Image src={h.photo} alt={h.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "14px 16px 18px" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 8, lineHeight: 1.3 }}>{h.title}</p>
                <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.6 }}>{h.description}</p>
                <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 12 }}>Read more →</p>
              </div>
            </Link>
          ))}
        </ThreeGrid>
      </section>

      {/* ── LIVES & LEGACIES ────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 72 }}>
        <SectionHeader title="Lives & Legacies" href="/history/lives-and-legacies" />
        <SectionIntro>The governors, soldiers, scholars, and saints who shaped the town.</SectionIntro>
        <ThreeGrid>
          {featuredFigures.map(f => (
            <Link key={f.id} href={`/history/lives-and-legacies/${f.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
              <div style={{ position: "relative", width: "100%", height: 280, background: "#f0ece6" }}>
                <Image src={`/figures/${f.photo}`} alt={f.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" style={{ objectFit: "cover", objectPosition: "center top" }} />
              </div>
              <div style={{ padding: "14px 16px 16px" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 15, marginBottom: 4, lineHeight: 1.3 }}>{f.name}</p>
                <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginBottom: 6 }}>{f.dates}</p>
                <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.5 }}>{f.role}</p>
              </div>
            </Link>
          ))}
        </ThreeGrid>
      </section>

      {/* ── RESTAURANTS ─────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 72 }}>
        <SectionHeader title="Restaurants in Pondicherry" href="/restaurants" />
        <SectionIntro>
          Pondicherry punches above its weight for food. French-influenced cafés, fresh seafood, Tamil homecooked thalis and enough coffee & ice cream to keep you going through the afternoon heat.
        </SectionIntro>
        <ThreeGrid>
          {featuredRestaurants.map(r => (
            <Link key={r.id} href={`/restaurants/${r.id}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
              {r.photo && (
                <div style={{ position: "relative", width: "100%", height: 180 }}>
                  <Image src={`/restaurants/${r.photo}`} alt={r.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" style={{ objectFit: "cover" }} />
                </div>
              )}
              <div style={{ padding: "14px 16px 18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                  <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, lineHeight: 1.3 }}>{r.name}</p>
                  <p style={{ fontSize: 13, color: "#6b6560", whiteSpace: "nowrap", marginLeft: 8 }}>{PRICE_LABELS[r.priceRange] ?? ""}</p>
                </div>
                <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.6 }}>{truncate(r.summary, 115)}</p>
                <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 12 }}>Read more →</p>
              </div>
            </Link>
          ))}
        </ThreeGrid>
      </section>

      {/* ── FRENCH INSTITUTIONS ─────────────────────────────────────────────── */}
      <section style={{ marginBottom: 72 }}>
        <SectionHeader title="French Institutions" href="/history/institutions" />
        <SectionIntro>The French centres of excellence that still carry on their work, some under Indian administration.</SectionIntro>
        <ThreeGrid>
          {featuredInstitutions.map(a => (
            <ArticleCard key={a.id} href={`/history/institutions/${a.id}`} photo={a.photo} photoFolder={a.photoFolder ?? "history"} title={a.title} teaser={a.teaser} />
          ))}
        </ThreeGrid>
      </section>

      {/* ── DISCOVER ────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 72 }}>
        <SectionHeader title="Explore the Town" href="/discover" />
        <SectionIntro>Four ways into Pondicherry: its streets, its monuments, its Tamil Quarter temples, and day trips that take you further.</SectionIntro>
        <ThreeGrid>
          {[
            { href: "/discover/white-town", photo: "/streets/rue-françois-martin.jpg", label: "White Town", title: "The French Quarter Streets", description: "40 streets named after governors and admirals. Each one has a story." },
            { href: "/discover/landmarks", photo: "/sites/customs-building.jpg", label: "Landmarks", title: "Sites & Heritage Buildings", description: "From the seafront promenade to Arikamedu's Roman-era ruins." },
            { href: "/discover/explore/theme-temples", photo: "/explore/temples-tamil-quarter.png", label: "Discover", title: "Temples of the Tamil Quarter", description: "The city's older history, just across the canal. Temples, markets, and streets that long predate the French." },
          ].map(s => (
            <Link key={s.href} href={s.href} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
              <div style={{ position: "relative", width: "100%", height: 180 }}>
                <Image src={s.photo} alt={s.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "14px 16px 16px" }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 5 }}>{s.label}</p>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 6, lineHeight: 1.3 }}>{s.title}</p>
                <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.55 }}>{s.description}</p>
              </div>
            </Link>
          ))}
        </ThreeGrid>
      </section>

      {/* ── WALKS, TRIPS & EXPERIENCES ──────────────────────────────────────── */}
      <section style={{ marginBottom: 72 }}>
        <SectionHeader title="Walks, Trips & Experiences" href="/discover/explore" />
        <SectionIntro>Places with no equivalent anywhere in India. Yours to explore at your own pace.</SectionIntro>
        <ThreeGrid>
          {[
            { href: "/discover/explore/walk-white-town", photo: "/explore/walking-tour-1.jpg", title: "Walking the White Town", teaser: "A self-guided walk through the French Quarter: colonial streets, heritage buildings, temples, and the seafront promenade. The best two hours you will spend in Pondicherry." },
            { href: "/discover/explore/daytrip-arikamedu", photo: "/explore/arikamedu.jpg", title: "Arikamedu", teaser: "Four kilometres south of the French Quarter, an ancient port where Roman traders exchanged Mediterranean goods for Indian cotton and gems. Roman amphorae, Arretine pottery, and a gemstone engraved with the Emperor Augustus were excavated here." },
            { href: "/discover/explore/activity-sunday-market", photo: "/explore/sunday-market.jpg", title: "The Sunday Market", teaser: "Every Sunday on Mahatma Gandhi Street: second-hand furniture, vintage electronics, handmade clothes, tools, and street food. One of the most local experiences in Pondicherry." },
          ].map(e => (
            <Link key={e.href} href={e.href} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
              <div style={{ position: "relative", width: "100%", height: 180 }}>
                <Image src={e.photo} alt={e.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "14px 16px 18px" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 8, lineHeight: 1.3 }}>{e.title}</p>
                <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.6 }}>{truncate(e.teaser, 115)}</p>
                <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 12 }}>Read more →</p>
              </div>
            </Link>
          ))}
        </ThreeGrid>
      </section>

      {/* ── AUROVILLE ───────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 72 }}>
        <SectionHeader title="Understanding Auroville" href="/discover/auroville" />
        <SectionIntro>
          Founded in 1968 on a plateau of eroded land north of Pondicherry, Auroville is home to around 3,400 people from more than 60 countries. It is neither a tourist attraction nor a spiritual retreat. Read before you visit.
        </SectionIntro>
        <ThreeGrid>
          {featuredAuroville.map(a => (
            <ArticleCard key={a.id} href={`/discover/auroville/${a.id}`} photo={a.photo} photoFolder="auroville" title={a.title} teaser={a.teaser} />
          ))}
        </ThreeGrid>
      </section>

      {/* ── FESTIVALS ───────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 72 }}>
        <SectionHeader title="Festival Calendar" href="/festivals" />
        <SectionIntro>Pondicherry celebrates constantly, and unusually. Each month is a feast.</SectionIntro>
        <ThreeGrid>
          {[
            { href: "/festivals/pongal", photo: "/festivals/pongal.jpg", label: "January", title: "Pongal", description: "The Tamil harvest festival: four days, rice pots boiling over, decorated cows, and kolam patterns at every door." },
            { href: "/festivals/bastille-day", photo: "/festivals/bastille-day.png", label: "July", title: "Bastille Day", description: "Pondicherry is one of the very few places outside France where July 14th is still celebrated in the streets." },
            { href: "/festivals/veerampattinam-car-festival", photo: "/festivals/veerampattinam-car-festival.jpg", label: "February–March", title: "Masi Magam", description: "The most spectacular festival in the Pondicherry calendar. Temple chariots, the sea, and a million people." },
          ].map(f => (
            <Link key={f.href} href={f.href} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
              <div style={{ position: "relative", width: "100%", height: 180 }}>
                <Image src={f.photo} alt={f.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "14px 16px 18px" }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4711a", marginBottom: 5 }}>{f.label}</p>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 17, marginBottom: 8, lineHeight: 1.3 }}>{f.title}</p>
                <p style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.6 }}>{f.description}</p>
              </div>
            </Link>
          ))}
        </ThreeGrid>
      </section>

      {/* ── PLAN ────────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionHeader title="Before You Go" href="/plan" />
        <SectionIntro>All you need to know before you arrive.</SectionIntro>
        <ThreeGrid>
          {[
            { href: "/plan/getting-here", photo: "/transport/puducherry-railway-station.jpg", title: "Getting Here", desc: "Bus from Chennai, train from Bangalore, the ECR coastal road." },
            { href: "/plan/getting-around", photo: "/transport/auto-rickshaw-white-town.jpg", title: "Getting Around", desc: "Auto-rickshaws, bicycles, scooters. The White Town is walkable." },
            { href: "/plan/healthcare", photo: "/healthcare/public-hospital.jpg", title: "Emergency", desc: "JIPMER, private clinics, pharmacies: what to know before you need it." },
          ].map(item => (
            <Link key={item.href} href={item.href} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
              <div style={{ position: "relative", width: "100%", height: 180 }}>
                <Image src={item.photo} alt={item.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "14px 16px 16px" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 16, marginBottom: 6 }}>{item.title}</p>
                <p style={{ fontSize: 13, color: "#6b6560", lineHeight: 1.55 }}>{item.desc}</p>
                <p style={{ fontSize: 14, color: "#d4711a", fontWeight: 600, marginTop: 10 }}>Read →</p>
              </div>
            </Link>
          ))}
        </ThreeGrid>
      </section>

    </div>
  );
}
