import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import FaqAnswer from "@/components/FaqAnswer";

export const metadata: Metadata = {
  title: "One Day in Pondicherry, A Complete Walking Itinerary",
  description: "A single well-paced day through the French Quarter: Bharathi Park at dawn, the Promenade, Manakula Vinayagar Temple, the museum, and Sri Aurobindo Ashram.",
  alternates: {
    canonical: "/plan/one-day-in-pondicherry",
    languages: {
      en: "/plan/one-day-in-pondicherry",
      fr: "/fr/plan/one-day-in-pondicherry",
      "x-default": "/plan/one-day-in-pondicherry",
    },
  },
};

const body = `**Morning: Bharathi Park and the seafront**

Start before 8am, while the shaded lawns of [Bharathi Park](/discover/landmarks/bharathi-park) still belong to the local joggers and morning walkers rather than the heat. At its centre stands the Aayi Mandapam, a white Greco-Roman monument built under Napoleon III to honour a courtesan said to have given away her own house and savings so the city could have its first water reservoir.

From the park, walk east to [Goubert Avenue](/discover/white-town/avenue-goubert), Pondicherry's seaside promenade, better known locally as Beach Road. Turn north for a few minutes to the [Gandhi statue](/discover/landmarks/gandhi-statue): thirteen feet of bronze sheltered beneath eight granite pillars brought from Gingee Fort. Continue on to the [French War Memorial](/discover/landmarks/war-memorial), and across the road, the elegant [Hôtel de Ville](/discover/landmarks/hotel-de-ville), Pondicherry's Town Hall, built in 1870 and one of the finest surviving civic buildings from the French period.

Retrace your steps south along the promenade to the small garden beside [Notre-Dame des Anges](/discover/landmarks/notre-dame), where the [statue of Joan of Arc](/discover/landmarks/joan-of-arc-statue) faces the Bay of Bengal. Then step inside the church itself: completed in 1855, its pale cream façade and barrel-vaulted interior make it one of White Town's most distinctive landmarks.

**Late morning: through the French Quarter**

Leave the seafront and head west into the French Quarter. Follow streets such as [Rue Dumas](/discover/white-town/rue-dumas), [Rue Romain Rolland](/discover/white-town/rue-romain-rolland), [Rue Suffren](/discover/white-town/rue-suffren), and [Rue Saint-Louis](/discover/white-town/rue-saint-louis), wandering south through a remarkably intact grid of colonial streets: pastel villas, high compound walls, louvred shutters, and cascades of bougainvillea. Quiet morning light is the best time to take in the architecture, before the traffic and the heat build. For the fuller version of this walk, with more streets and more stops, see [Walking the White Town](/discover/explore/walk-white-town).

Continue south until the streets bring you back toward the waterfront near the [Dupleix statue](/discover/landmarks/dupleix-statue), overlooking the Bay of Bengal. Here Beach Road curves inland and becomes South Boulevard, where a line of snack stalls, juice stands, and small cafés gathers beneath enormous shade trees. It's a good place to pause for a fresh coconut, a coffee, or a South Indian breakfast before continuing.

**Midday: the museum**

Rue Saint-Louis, one of the streets you just walked, is also home to the [Pondicherry Museum](/discover/landmarks/museum) — the most undervisited stop in the city and the best value: ₹10 gets you Roman Arretine pottery from Arikamedu, Chola and Pallava bronzes of real quality, and a cot said to have belonged to Dupleix himself. Allow 60 to 90 minutes if you want to do it properly. **It is closed on Mondays** — if your one day falls on a Monday, swap this slot for a longer stretch at Bharathi Park or move straight into lunch.

**Lunch**

The French Quarter has more good kitchens than a single meal can cover; see the full guide to [Pondicherry's best French restaurants](/restaurants/guides/best-french-restaurants) and pick whatever fits your afternoon.

**Afternoon: Sri Aurobindo Ashram**

The Ashram's afternoon session runs 14:00 to 18:00. Sri Aurobindo arrived in French Pondicherry in 1910, a political refugee the British could not extradite from French territory, and never left; the samadhi in the main courtyard still draws a steady stream of visitors. Dress respectfully, remove your shoes before the courtyard, and keep the silence that is genuinely observed here.

If you still have energy, the [Sacred Heart Basilica](/discover/landmarks/sacred-heart) is a short ride south: a full Neo-Gothic church with 28 stained-glass panels shipped from France, built as a deliberate statement of permanence in 1902–1907. Its own best light is mid-morning, so treat this stop as a bonus rather than the centrepiece of the day.

**Evening: back to the sea**

Close the day where the French Quarter always closes it: the Promenade, at dusk, when the whole city comes out to walk the sea wall. For dinner, work back through the same [restaurant guide](/restaurants/guides/best-french-restaurants) you used at lunch, or ask at your hotel for whatever is freshest that night.`;

const faqEntries = [
  {
    question: "Is one day enough for Pondicherry?",
    answer: "One day is enough to cover the White Town core properly: the Promenade, Bharathi Park, Notre-Dame des Anges, the museum, and Sri Aurobindo Ashram. It is not enough if you also want Auroville, which deserves its own day, or the beaches and day trips further out. Treat this itinerary as the French Quarter in full, not the whole of what the region offers.",
  },
  {
    question: "How much walking does this itinerary involve?",
    answer: "The White Town is compact and flat, roughly 3 to 4 km of walking across the full day if you follow this route end to end. Auto-rickshaws are cheap and easy to find if you want to skip a stretch, particularly between Bharathi Park and Sacred Heart Basilica.",
  },
  {
    question: "What if I only have half a day?",
    answer: "Keep the morning: Bharathi Park, Notre-Dame des Anges, the Promenade, and the walk through Rue Dupleix to Manakula Vinayagar Temple. That sequence alone covers the historical core without the museum or Ashram, which both reward a slower visit on a later trip.",
  },
];

export default function OneDayItineraryPage() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px 80px", position: "relative" }}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqEntries.map(item => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <LanguageToggle enHref="/plan/one-day-in-pondicherry" frHref="/fr/plan/one-day-in-pondicherry" current="en" />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Plan Your Visit", href: "/plan" }, { label: "One Day in Pondicherry", href: "/plan/one-day-in-pondicherry" }]} />
      <Link href="/plan" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Plan</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>One Day</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        One Day in Pondicherry
      </h1>

      <div style={{ position: "relative", width: "100%", height: 300, borderRadius: 12, overflow: "hidden", marginBottom: 32 }}>
        <Image src="/streets/generic.jpg" alt="A White Town street in Pondicherry, colonial facades under tree cover" fill sizes="(max-width: 768px) 100vw, 720px" style={{ objectFit: "cover" }} priority />
      </div>

      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        A single, well-paced route through the French Quarter, from dawn on the Promenade to dusk on the sea wall. Everything here is walkable, and every stop links through to the full story if you want to go deeper.
      </p>

      <div style={{ background: "#f8f8f6", border: "1px solid #e8ddd4", borderRadius: 12, padding: "16px 20px", marginBottom: 40 }}>
        <p style={{ fontSize: 14, color: "#292524", marginBottom: 6 }}><strong style={{ color: "#1c1917" }}>Pace: </strong>Unhurried but full — start by 7:30am to fit everything in.</p>
        <p style={{ fontSize: 14, color: "#292524", marginBottom: 6 }}><strong style={{ color: "#1c1917" }}>Distance: </strong>Roughly 3–4 km on foot, entirely flat, entirely within the White Town.</p>
        <p style={{ fontSize: 14, color: "#292524", marginBottom: 6 }}><strong style={{ color: "#1c1917" }}>Budget: </strong>Under ₹500 per person for entry fees (museum, Ashram are free or nominal); food and coffee on top.</p>
        <p style={{ fontSize: 14, color: "#292524" }}><strong style={{ color: "#1c1917" }}>Avoid: </strong>Starting on a Monday if the museum matters to you — it's closed.</p>
      </div>

      <ArticleBody text={body} />

      <div style={{ marginTop: 40 }}>
        <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1c1917", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>
          Frequently Asked Questions
        </h2>
        {faqEntries.map((item, i) => (
          <div key={i} style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#1c1917", marginBottom: 6 }}>{item.question}</p>
            <FaqAnswer text={item.answer} style={{ fontSize: 14, color: "#6b6560", lineHeight: 1.7 }} />
          </div>
        ))}
      </div>

      <AppBanner />
    </div>
  );
}
