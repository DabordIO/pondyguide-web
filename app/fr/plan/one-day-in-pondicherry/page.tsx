import Link from "next/link";
import type { Metadata } from "next";
import ArticleBody from "@/components/ArticleBody";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import FaqAnswer from "@/components/FaqAnswer";

export const metadata: Metadata = {
  title: "Une journée à Pondichéry, itinéraire complet",
  description: "Une journée bien rythmée dans le quartier français : Bharathi Park à l'aube, le Bord de mer, le temple Manakula Vinayagar, le musée et l'Ashram de Sri Aurobindo.",
  alternates: {
    canonical: "/fr/plan/one-day-in-pondicherry",
    languages: {
      en: "/plan/one-day-in-pondicherry",
      fr: "/fr/plan/one-day-in-pondicherry",
      "x-default": "/plan/one-day-in-pondicherry",
    },
  },
};

const body = `**Matin : Bharathi Park et le front de mer**

Commencez avant 8h, tant que les pelouses ombragées de [Bharathi Park](/fr/discover/landmarks/bharathi-park) appartiennent encore aux joggeurs et promeneurs matinaux plutôt qu'à la chaleur. Au centre, trouvez l'Aayi Mandapam : quatre colonnes gréco-romaines construites sous Napoléon III pour honorer une courtisane qui donna sa propre maison et ses économies pour offrir à la ville son premier réservoir d'eau, des siècles avant l'arrivée des Français.

Depuis le parc, marchez vers le nord jusqu'à [Notre-Dame des Anges](/fr/discover/landmarks/notre-dame), l'église aux tours jumelles qui se dresse sur ce site en bord de mer depuis 1687, à travers quatre reconstructions. Tôt le matin est le meilleur moment : la lumière arrive de l'est directement sur la statue de Jeanne d'Arc dans le jardin entre l'église et la mer, et le conseil de visite de l'église elle-même est de commencer ici une promenade dans le White Town.

Depuis Notre-Dame, dirigez-vous vers le sud le long du Bord de mer. Vous passerez devant le [Monument aux morts français](/fr/discover/landmarks/war-memorial), la statue de Dupleix, et la statue de Gandhi, treize pieds de bronze sur huit piliers de granit extraits du fort de Gingee. Le muret de granit bas qui longe le front de mer est le lieu de rassemblement de la ville depuis des siècles ; il vaut la peine de s'y arrêter même à cette heure matinale.

Faites une pause café à l'[Indian Coffee House](/fr/restaurants/indian-coffee-house), une institution à l'ancienne plutôt qu'un café conçu pour les photos.

**Fin de matinée : dans la grille du White Town**

Quittez le Bord de mer vers l'ouest pour entrer dans le quartier français lui-même. La [Rue Dupleix](/fr/discover/white-town/rue-dupleix) possède les façades les mieux conservées du quartier : murs peints, fenêtres à volets, bougainvillées sur les balcons. Pour la version complète de cette promenade, avec davantage de rues et d'arrêts, voir [La promenade du White Town](/fr/discover/explore/walk-white-town).

Suivez la grille jusqu'au temple Manakula Vinayagar, vieux de plus de 800 ans et dédié à Ganesh : piliers dorés, tours peintes, et un flot constant de fidèles au milieu du plan colonial. Entrée gratuite ; laissez vos chaussures à la porte.

**Midi : le musée**

Le [Musée de Pondichéry](/fr/discover/landmarks/museum) est l'endroit le plus sous-visité de la ville et le meilleur rapport qualité-prix : ₹10 vous donnent accès à de la poterie romaine arétine d'Arikamedu, à des bronzes Chola et Pallava de grande qualité, et à un lit que l'on dit avoir appartenu à Dupleix lui-même. Prévoyez 60 à 90 minutes pour bien en profiter. **Il est fermé le lundi** — si votre journée tombe un lundi, remplacez ce créneau par un temps plus long à Bharathi Park ou passez directement au déjeuner.

**Déjeuner**

Le quartier français compte plus de bonnes tables qu'un seul repas ne peut en couvrir ; consultez le guide complet des [meilleurs restaurants français de Pondichéry](/fr/restaurants/guides/best-french-restaurants) et choisissez selon votre après-midi.

**Après-midi : l'Ashram de Sri Aurobindo**

La session de l'après-midi de l'Ashram se déroule de 14h à 18h. Sri Aurobindo arriva dans le Pondichéry français en 1910, réfugié politique que les Britanniques ne pouvaient extrader du territoire français, et n'en repartit jamais ; le samadhi dans la cour principale attire toujours un flot constant de visiteurs. Habillez-vous avec respect, retirez vos chaussures avant d'entrer dans la cour, et respectez le silence qui y est véritablement observé.

S'il vous reste de l'énergie, la [Basilique du Sacré-Cœur](/fr/discover/landmarks/sacred-heart) se trouve à un court trajet vers le sud : une église néo-gothique complète avec 28 vitraux expédiés depuis la France, construite comme une affirmation délibérée de permanence en 1902–1907. Sa meilleure lumière est en milieu de matinée, considérez donc cet arrêt comme un bonus plutôt que le point central de la journée.

**Soir : retour à la mer**

Terminez la journée là où le quartier français la termine toujours : le Bord de mer, au crépuscule, quand toute la ville sort marcher sur la digue. Pour le dîner, reprenez le même [guide des restaurants](/fr/restaurants/guides/best-french-restaurants) utilisé au déjeuner, ou demandez à votre hôtel ce qu'il y a de plus frais ce soir-là.`;

const faqEntries = [
  {
    question: "Une journée suffit-elle pour Pondichéry ?",
    answer: "Une journée suffit pour couvrir correctement le cœur du White Town : le Bord de mer, Bharathi Park, Notre-Dame des Anges, le musée et l'Ashram de Sri Aurobindo. Ce n'est pas suffisant si vous voulez aussi voir Auroville, qui mérite sa propre journée, ou les plages et excursions plus lointaines. Considérez cet itinéraire comme le quartier français dans son intégralité, pas comme l'ensemble de ce que la région propose.",
  },
  {
    question: "Combien de marche cet itinéraire implique-t-il ?",
    answer: "Le White Town est compact et plat, environ 3 à 4 km de marche sur la journée complète si vous suivez cet itinéraire du début à la fin. Les auto-rickshaws sont bon marché et faciles à trouver si vous souhaitez sauter un tronçon, en particulier entre Bharathi Park et la Basilique du Sacré-Cœur.",
  },
  {
    question: "Et si je n'ai qu'une demi-journée ?",
    answer: "Gardez la matinée : Bharathi Park, Notre-Dame des Anges, le Bord de mer, et la marche par la Rue Dupleix jusqu'au temple Manakula Vinayagar. Cette séquence couvre à elle seule le cœur historique, sans le musée ni l'Ashram, qui méritent tous deux une visite plus lente lors d'un prochain séjour.",
  },
];

export default function OneDayItineraryPageFr() {
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
      <LanguageToggle enHref="/plan/one-day-in-pondicherry" frHref="/fr/plan/one-day-in-pondicherry" current="fr" />
      <Breadcrumbs items={[{ label: "Accueil", href: "/fr" }, { label: "Préparer", href: "/fr/plan" }, { label: "Une journée à Pondichéry", href: "/fr/plan/one-day-in-pondicherry" }]} />
      <Link href="/fr/plan" style={{ fontSize: 13, color: "#d4711a", textDecoration: "none", fontWeight: 600 }}>← Préparer</Link>

      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", margin: "20px 0 12px" }}>Une journée</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#1c1917", marginBottom: 16, lineHeight: 1.2 }}>
        Une journée à Pondichéry
      </h1>
      <p style={{ fontSize: "1.05rem", color: "#6b6560", lineHeight: 1.75, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid #e8ddd4", fontStyle: "italic" }}>
        Un itinéraire unique et bien rythmé à travers le quartier français, de l'aube sur le Bord de mer au crépuscule sur la digue. Tout est accessible à pied, et chaque étape renvoie vers l'histoire complète si vous voulez approfondir.
      </p>

      <div style={{ background: "#f8f8f6", border: "1px solid #e8ddd4", borderRadius: 12, padding: "16px 20px", marginBottom: 40 }}>
        <p style={{ fontSize: 14, color: "#292524", marginBottom: 6 }}><strong style={{ color: "#1c1917" }}>Rythme : </strong>Tranquille mais complet — commencez à 7h30 pour tout faire.</p>
        <p style={{ fontSize: 14, color: "#292524", marginBottom: 6 }}><strong style={{ color: "#1c1917" }}>Distance : </strong>Environ 3 à 4 km à pied, entièrement plat, entièrement dans le White Town.</p>
        <p style={{ fontSize: 14, color: "#292524", marginBottom: 6 }}><strong style={{ color: "#1c1917" }}>Budget : </strong>Moins de ₹500 par personne pour les entrées (musée et Ashram gratuits ou presque) ; repas et café en plus.</p>
        <p style={{ fontSize: 14, color: "#292524" }}><strong style={{ color: "#1c1917" }}>À éviter : </strong>Commencer un lundi si le musée vous tient à cœur — il est fermé.</p>
      </div>

      <ArticleBody text={body} />

      <div style={{ marginTop: 40 }}>
        <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#1c1917", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid #e8ddd4" }}>
          Questions fréquentes
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
