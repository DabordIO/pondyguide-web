import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pondy Guide — Pondicherry Travel & Heritage Guide",
  description: "The definitive English-language guide to Pondicherry. History, heritage streets, restaurants, hotels, festivals, and practical travel information.",
};

function SectionHeading({ label, title, href }: { label: string; title: string; href: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 24, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>
      <div>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b45309", marginBottom: 4 }}>{label}</p>
        <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1c1917" }}>{title}</h2>
      </div>
      <Link href={href} style={{ fontSize: 13, color: "#b45309", textDecoration: "none", fontWeight: 600, whiteSpace: "nowrap" }}>See all →</Link>
    </div>
  );
}

function PhotoCard({ href, photo, label, title, description }: { href: string; photo: string; label?: string; title: string; description: string }) {
  return (
    <Link href={href} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 14, overflow: "hidden", display: "block" }}>
      <div style={{ position: "relative", width: "100%", height: 180 }}>
        <Image src={photo} alt={title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
      </div>
      <div style={{ padding: "14px 16px 16px" }}>
        {label && <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#b45309", marginBottom: 5 }}>{label}</p>}
        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 16, marginBottom: 6, lineHeight: 1.3 }}>{title}</p>
        <p style={{ fontSize: 13, color: "#78716c", lineHeight: 1.55 }}>{description}</p>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#1c1917", padding: "80px 24px 72px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#f97316", marginBottom: 16 }}>
            pondyguide.com
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2.2rem, 6vw, 3.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 24 }}>
            Pondicherry, properly told.
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#a8a29e", lineHeight: 1.8, maxWidth: 560, margin: "0 auto 40px" }}>
            A serious guide to one of India&apos;s most layered towns — its French colonial history, its streets, its food, and what to do when you get there.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/history" style={{ background: "#f97316", color: "#fff", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 10, textDecoration: "none" }}>
              Start with History
            </Link>
            <Link href="/discover" style={{ background: "rgba(255,255,255,0.08)", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 10, textDecoration: "none" }}>
              Explore the Town
            </Link>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 80px" }}>

        {/* History */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="History" title="The Story of Pondicherry" href="/history" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            <PhotoCard href="/history/before-the-french" photo="/history/before-the-french.png" label="Ancient History" title="Before the French" description="Two thousand years of a world-famous shore — Roman traders, Chola kings, and the ruins at Arikamedu." />
            <PhotoCard href="/history/dupleix-gamble" photo="/history/british-siege-of-Dupleix-pondicherry.jpg" label="The French Era" title="Dupleix's Gamble" description="The man who almost gave France an empire in India — and the siege that ended everything." />
            <PhotoCard href="/history/the-handover-1954" photo="/history/the-transfer.webp" label="Independence" title="1954: The Handover" description="The peaceful end of three centuries of French rule — and what it meant for the people who stayed." />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginTop: 16 }}>
            <PhotoCard href="/history/lives-and-legacies/dupleix" photo="/figures/dupleix.jpg" label="Lives & Legacies" title="Joseph François Dupleix" description="Governor-General of French India, architect of an empire that never was." />
            <PhotoCard href="/history/lives-and-legacies/ananda-ranga-pillai" photo="/figures/ananda-ranga-pillai.png" label="Lives & Legacies" title="Ananda Ranga Pillai" description="Dupleix's broker, interpreter, and the man who recorded it all in his diary." />
            <PhotoCard href="/history/lives-and-legacies/lally" photo="/figures/lally.png" label="Lives & Legacies" title="Comte de Lally" description="The general who lost Pondicherry — and was executed in Paris for it." />
          </div>
        </section>

        {/* Discover */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Discover" title="Explore the Town" href="/discover" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            <PhotoCard href="/discover/white-town" photo="/streets/rue-dumas.jpg" label="White Town" title="The French Quarter Streets" description="43 streets named after governors and admirals. Each one has a story." />
            <PhotoCard href="/discover/landmarks" photo="/sites/promenade.jpg" label="Landmarks" title="Sites & Heritage Buildings" description="From the seafront promenade to Arikamedu's Roman-era ruins." />
            <PhotoCard href="/discover/auroville" photo="/auroville/matrimandir.jpg" label="Auroville" title="The Experiment at Auroville" description="3,400 people from 60 countries. Founded 1968. Still running." />
            <PhotoCard href="/discover/explore" photo="/explore/walking-tour.jpg" label="Things to Do" title="Walks, Day Trips & Experiences" description="Self-guided walks, mangrove forests, Roman ruins, and cooking classes." />
          </div>
        </section>

        {/* Restaurants */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Eat" title="Restaurants" href="/restaurants" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            <PhotoCard href="/restaurants/cafe-des-arts" photo="/restaurants/cafe-des-arts.jpg" label="Garden Café" title="Café des Arts" description="One of the great shaded terraces of the White Town. Coffee, crêpes, and a slow morning." />
            <PhotoCard href="/restaurants/villa-shanti" photo="/restaurants/villa-shanti.jpg" label="French Quarter" title="Villa Shanti" description="A colonial house turned restaurant — seafood, French techniques, Tamil ingredients." />
            <PhotoCard href="/restaurants/maison-perumal" photo="/restaurants/maison-perumal.jpg" label="Heritage Hotel" title="Maison Perumal" description="Chettinad cooking in a restored heritage house. One of the best dining rooms in town." />
          </div>
        </section>

        {/* Hotels */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Stay" title="Hotels" href="/hotels" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            <PhotoCard href="/hotels/palais-de-mahe" photo="/hotels/palais-de-mahe.jpg" label="Heritage" title="Palais de Mahe" description="The most romantic address in the White Town. A mustard-yellow façade on Rue Law de Lauriston." />
            <PhotoCard href="/hotels/maison-perumal" photo="/hotels/maison-perumal.jpg" label="Heritage" title="Maison Perumal" description="A Chettinad mansion restored with extraordinary care. Quiet, beautiful, unhurried." />
            <PhotoCard href="/hotels/le-dupleix" photo="/hotels/le-dupleix.jpg" label="Heritage" title="Le Dupleix" description="Named after the governor himself, on the street that carries his name." />
          </div>
        </section>

        {/* Festivals */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Calendar" title="Festivals" href="/festivals" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            <PhotoCard href="/festivals/pongal" photo="/festivals/pongal.jpg" label="January" title="Pongal" description="The Tamil harvest festival — four days, rice pots boiling over, decorated cows, and kolam patterns at every door." />
            <PhotoCard href="/festivals/bastille-day" photo="/festivals/bastille-day.png" label="July" title="Bastille Day" description="Pondicherry is one of the very few places outside France where July 14th is still celebrated in the streets." />
            <PhotoCard href="/festivals/veerampattinam-car-festival" photo="/festivals/veerampattinam-car-festival.jpg" label="February–March" title="Masi Magam" description="The most spectacular festival in the Pondicherry calendar. Temple chariots, the sea, and a million people." />
          </div>
        </section>

        {/* Plan */}
        <section style={{ marginBottom: 64 }}>
          <SectionHeading label="Plan" title="Before You Go" href="/plan" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
            {[
              { href: "/plan/getting-here", title: "Getting Here", desc: "Bus from Chennai, train from Bangalore, the ECR coastal road." },
              { href: "/plan/getting-around", title: "Getting Around", desc: "Auto-rickshaws, bicycles, scooters. The White Town is walkable." },
              { href: "/plan/healthcare", title: "Healthcare", desc: "JIPMER, private clinics, pharmacies — what to know before you need it." },
              { href: "/plan/practical", title: "Practical", desc: "Currency, SIM cards, dress code, water, tipping." },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none", background: "#fff", border: "1px solid #e8ddd4", borderRadius: 12, padding: "18px 18px 16px", display: "block" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, color: "#1c1917", fontSize: 16, marginBottom: 6 }}>{item.title}</p>
                <p style={{ fontSize: 13, color: "#78716c", lineHeight: 1.55 }}>{item.desc}</p>
                <p style={{ fontSize: 12, color: "#b45309", fontWeight: 600, marginTop: 10 }}>Read →</p>
              </Link>
            ))}
          </div>
        </section>

      </div>

      {/* App CTA */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ background: "#1c1917", borderRadius: 20, padding: "48px 40px", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f97316", marginBottom: 10 }}>The Pondy App</p>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "#fff", marginBottom: 12, lineHeight: 1.3 }}>
              The whole guide, offline, in your pocket.
            </p>
            <p style={{ fontSize: 15, color: "#a8a29e", lineHeight: 1.7 }}>
              Maps, street stories, restaurant picks, hotel guides — everything on this site works offline on the Pondy App.
            </p>
          </div>
          <Link href="/about" style={{ background: "#f97316", color: "#fff", fontWeight: 700, fontSize: 16, padding: "16px 32px", borderRadius: 12, textDecoration: "none", whiteSpace: "nowrap" }}>
            Get the Pondy App →
          </Link>
        </div>
      </section>
    </>
  );
}
