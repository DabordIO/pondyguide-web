import type { Metadata } from "next";
import AppBanner from "@/components/AppBanner";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  title: "À propos de Pondy Guide et de ses créateurs",
  description: "Découvrez comment deux amis aux racines familiales à Pondichéry ont créé un guide indépendant centré sur l'histoire et le lieu.",
  alternates: {
    languages: {
      en: "/about",
      fr: "/fr/about",
      "x-default": "/about",
    },
  },
};

export default function AboutPageFr() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "56px 24px 80px", position: "relative" }}>
      <LanguageToggle enHref="/about" frHref="/fr/about" current="fr" />
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: 12 }}>À propos</p>
      <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "#1c1917", marginBottom: 32, lineHeight: 1.2 }}>
        Pourquoi ce guide existe
      </h1>
      <div style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "#292524" }}>
        <p style={{ marginBottom: "1.25rem" }}>
          Pondy Guide a été créé par deux amis dont le lien avec Pondichéry dépasse largement celui d'un simple séjour de vacances. Tous deux ont des racines familiales dans la ville remontant à plusieurs générations, et tous deux ont grandi avec un attachement particulier pour ses rues, son histoire, et les couches de vie que la plupart des visiteurs n'ont jamais l'occasion de découvrir.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          L'idée était simple : donner à ceux qui viennent à Pondichéry la possibilité de découvrir bien plus que la surface des choses. Pas seulement où manger et où loger, mais qui a bâti ce lieu, les troupes qui se sont battues pour lui, les familles qui sont parties, celles qui sont restées, et ce que font leurs descendants aujourd'hui.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          L'histoire de Pondichéry est véritablement extraordinaire, et une grande partie reste mal documentée là où les touristes cherchent habituellement. Nous avons voulu changer cela, à notre modeste échelle.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          Ce guide a été réalisé avec soin, avec l'aide précieuse d'archives historiques, bien qu'aucun de nous ne soit historien, et avec un profond respect pour une ville qui compte énormément pour nous deux depuis l'enfance.
        </p>

        <div style={{ borderTop: "1px solid #e7e5e4", margin: "2rem 0" }} />

        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: "0.75rem" }}>Restaurants</p>
        <p style={{ marginBottom: "1.25rem" }}>
          Notre choix de restaurants reflète ce que nous, en tant que résidents, considérons comme un bon endroit pour passer un moment de qualité. C'est aussi une reconnaissance du travail des chefs qui font de leur mieux pour des clients qu'ils espèrent revoir, et non pour le visiteur pressé d'un week-end. Nous pensons que les 38 restaurants sélectionnés conviennent aussi bien aux résidents qu'aux visiteurs venus d'Inde ou de l'étranger.
        </p>

        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: "0.75rem" }}>Hôtels</p>
        <p style={{ marginBottom: "1.25rem" }}>
          Établir la liste des hôtels a été la partie la plus difficile de ce projet, juste après la rédaction des articles historiques. Pourquoi ? Parce que notre objectif n'était pas de fournir une liste exhaustive de tous les hôtels, mais d'indiquer aux visiteurs les établissements qu'ils peuvent réserver en toute confiance. De plus, nous avons décidé de limiter cette liste à seulement 25 adresses et, comme aucun de nous n'y a personnellement séjourné, la tâche s'est révélée encore plus ardue. La meilleure méthode a donc été de constituer une liste par bouche-à-oreille, puis de vérifier par nous-mêmes lors de visites à des amis qui y avaient séjourné.
        </p>

        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4711a", marginBottom: "0.75rem" }}>Une note sur notre indépendance</p>
        <p style={{ marginBottom: "1.25rem" }}>
          Aucun des restaurants ou hôtels sélectionnés n'a été contacté au préalable, et nous n'avons aucun partenariat rémunéré avec l'un d'entre eux. Si vous dirigez l'un de ces établissements et souhaitez qu'il soit retiré de la liste, contactez-nous. Comme nous pensons que notre crédibilité repose sur une écriture indépendante, merci de ne pas nous demander de modifier la façon dont nous avons décrit votre établissement. En revanche, si vous souhaitez changer la photo que nous avons utilisée, envoyez-nous-en une au format paysage, dans le format de votre choix, mais de préférence pas plus de 1 Mo.
        </p>
      </div>
      <AppBanner />
    </div>
  );
}
