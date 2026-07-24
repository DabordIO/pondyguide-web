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

Commencez avant 8h, tant que les pelouses ombragées de [Bharathi Park](/fr/discover/landmarks/bharathi-park) appartiennent encore aux joggeurs et promeneurs matinaux plutôt qu'à la chaleur. Au centre se dresse l'Aayi Mandapam, un monument blanc de style gréco-romain construit sous Napoléon III pour honorer une courtisane qui aurait donné sa propre maison et ses économies pour offrir à la ville son premier réservoir d'eau.

Depuis le parc, marchez vers l'est jusqu'à l'[avenue Goubert](/fr/discover/white-town/avenue-goubert), la promenade en bord de mer de Pondichéry, plus connue localement sous le nom de Beach Road. Tournez vers le nord pendant quelques minutes jusqu'à la [statue de Gandhi](/fr/discover/landmarks/gandhi-statue) : treize pieds de bronze abrités sous huit piliers de granit rapportés du fort de Gingee. Continuez jusqu'au [Monument aux morts français](/fr/discover/landmarks/war-memorial), puis, de l'autre côté de la route, l'élégant [Hôtel de Ville](/fr/discover/landmarks/hotel-de-ville) de Pondichéry, construit en 1870, l'un des plus beaux bâtiments civils subsistant de la période française.

Revenez sur vos pas vers le sud le long de la promenade jusqu'au petit jardin situé en face de [Notre-Dame des Anges](/fr/discover/landmarks/notre-dame), bordé par la promenade et la rue Dumas, où la [statue de Jeanne d'Arc](/fr/discover/landmarks/joan-of-arc-statue) fait face à l'église, dos tourné à la baie du Bengale. Puis entrez dans l'église elle-même : achevée en 1855, sa façade crème et son intérieur voûté en berceau en font l'un des monuments les plus caractéristiques du White Town.

**Fin de matinée : à travers le quartier français**

Quittez le front de mer et dirigez-vous vers l'ouest, dans le quartier français lui-même. Suivez des rues comme la [Rue Dumas](/fr/discover/white-town/rue-dumas), la [Rue Romain Rolland](/fr/discover/white-town/rue-romain-rolland), la [Rue Suffren](/fr/discover/white-town/rue-suffren) et la [Rue Saint-Louis](/fr/discover/white-town/rue-saint-louis), en descendant vers le sud à travers une grille coloniale remarquablement intacte : villas aux couleurs pastel, hauts murs d'enceinte, volets persiennés, cascades de bougainvillées. La lumière calme du matin est le meilleur moment pour apprécier l'architecture, avant que la circulation et la chaleur ne s'installent. Pour la version complète de cette promenade, avec davantage de rues et d'arrêts, voir [La promenade du White Town](/fr/discover/explore/walk-white-town).

Continuez vers le sud jusqu'à ce que les rues vous ramènent vers le front de mer, près de la [statue de Dupleix](/fr/discover/landmarks/dupleix-statue), qui domine la baie du Bengale. C'est ici que Beach Road s'incurve vers l'intérieur des terres et devient South Boulevard, où une rangée d'étals, de stands de jus de fruits et de petits cafés s'installe sous d'immenses arbres ombragés. C'est un bon endroit pour faire une pause : une noix de coco fraîche, un café, ou un petit-déjeuner sud-indien, avant de continuer.

**Midi : le musée**

La Rue Saint-Louis, l'une des rues que vous venez de parcourir, abrite aussi le [Musée de Pondichéry](/fr/discover/landmarks/museum) : l'endroit le plus sous-visité de la ville et le meilleur rapport qualité-prix. ₹10 vous donnent accès à de la poterie romaine arétine d'Arikamedu, à des bronzes Chola et Pallava de grande qualité, et à un lit que l'on dit avoir appartenu à Dupleix lui-même. Prévoyez 60 à 90 minutes pour bien en profiter. **Il est fermé le lundi** — si votre journée tombe un lundi, remplacez ce créneau par un temps plus long à Bharathi Park ou passez directement au déjeuner.

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

      <div style={{ position: "relative", width: "100%", height: 300, borderRadius: 12, overflow: "hidden", marginBottom: 32 }}>
        <Image src="/streets/generic.jpg" alt="Une rue du White Town à Pondichéry, façades coloniales sous les arbres" fill sizes="(max-width: 768px) 100vw, 720px" style={{ objectFit: "cover" }} priority />
      </div>

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
