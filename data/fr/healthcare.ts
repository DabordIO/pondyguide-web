// Photos et catégories reprises de data/healthcare.ts — voir ce fichier pour les champs non traduits.

export interface HealthcareArticleFr {
  id: string;
  title: string;
  teaser: string;
  body: string;
}

export const healthcareArticlesFr: HealthcareArticleFr[] = [
  {
    id: "public-hospitals",
    title: "Hôpitaux publics",
    teaser:
      "JIPMER est l'un des instituts médicaux les plus prestigieux d'Inde et fournit des soins d'urgence gratuits 24h/24. L'Hôpital général, au centre-ville, est l'option la plus rapide depuis White Town.",
    body: `**Numéros d'urgence**

Ambulance : 108 (gratuit, 24h/24, envoyé dans toute la ville)
Police : 100
Urgence générale : 112
Pompiers : 101

Appelez le 108 pour toute situation mettant la vie en danger. Le service envoie des ambulances dans tout Pondichéry gratuitement.

**JIPMER**

Le Jawaharlal Institute of Postgraduate Medical Education and Research est l'une des institutions médicales autonomes les plus prestigieuses d'Inde et l'établissement de plus haut niveau à Pondichéry. Il fonctionne comme une véritable cité médicale, gérant tout, des consultations courantes aux chirurgies complexes. Le bloc des services médicaux d'urgence, ouvert 24h/24, dispose de laboratoires de proximité, d'un scanner CT et d'équipes de traumatologie dédiées.

Adresse : JIPMER Campus Road, Gorimedu, Dhanvantari Nagar, Puducherry 605006.
Urgences et accidents 24h/24 : +91 83000 83933 / +91 413 2296568.
Standard principal de l'hôpital : +91 413 2296000 / +91 413 2296500.

Les traitements et consultations dans les sections générales sont entièrement gratuits ou fortement subventionnés par le gouvernement central. En raison de cela, les services de consultation externe généraux font face à une forte affluence quotidienne. Pour les cas non urgents, attendez-vous à des temps d'attente importants. Pour de véritables urgences, rendez-vous directement au bloc des accidents.

**Indira Gandhi Government General Hospital**

Connu localement sous le nom de GH, c'est l'hôpital d'État historique en bordure de la ville patrimoniale, très accessible pour quiconque séjourne à White Town ou dans le centre de Pondichéry. Il prend en charge la médecine générale, l'orthopédie, les traumatismes d'urgence et les diagnostics de base.

Adresse : No. 1 Rue Victor Simonel Street, Puducherry 605001, près de l'Assemblée législative.
Contact : +91 413 2337070 / +91 413 2229350.

Les consultations et médicaments d'urgence de base sont gratuits pour tous les patients sans rendez-vous. Pour les situations non urgentes simples lorsque vous logez à White Town, c'est l'option la plus accessible.

**Rajiv Gandhi Government Women and Children Hospital**

L'établissement d'État principal pour les soins maternels et pédiatriques, équipé d'unités de soins intensifs néonatals et de services pédiatriques spécialisés. Pertinent pour les voyageurs avec nourrissons ou jeunes enfants, ou pour des situations médicales liées à la grossesse.

Adresse : Ellaipillaichavady Main Road, Puducherry 605005, en face du complexe multisports.
Contact : +91 413 2201341.
Les soins sont gratuits dans le cadre du système d'État.`,
  },

  {
    id: "private-hospitals",
    title: "Cliniques privées",
    teaser:
      "PIMS, sur l'ECR, est le choix privilégié des expatriés et résidents d'Auroville ayant besoin de soins de standard privé. L'hôpital Cluny, à White Town, est excellent pour les maladies de niveau intermédiaire et les consultations.",
    body: `**PIMS (Pondicherry Institute of Medical Sciences)**

Situé sur la frange côtière nord, en direction de l'East Coast Road, PIMS est un hôpital privé haut de gamme géré par la Madras Medical Mission. Il offre des installations privées impeccables, des standards internationaux pour les patients, et une aile d'urgence dédiée ouverte 24h/24. C'est le choix privilégié des expatriés et des résidents de longue durée d'Auroville qui ont besoin de soins du secteur privé.

Adresse : Kalathumettupathai, Ganapathichettikulam Village, Kalapet, Puducherry 605014, sur l'autoroute ECR.
Accueil de l'hôpital : +91 413 2651111 / +91 413 2656271.
Urgences et accidents 24h/24 : +91 413 2651482.
Numéro vert gratuit : 1800 425 9009.

Les frais de consultation externe privée vont généralement de 250 à 500 roupies par visite, hors examens diagnostiques, tarifs de chambre privée et frais de pharmacie. Une assurance voyage est conseillée si vous anticipez avoir besoin de soins de niveau PIMS.

**Hôpital Cluny (St. Joseph's Cluny Hospital)**

Un hôpital caritatif magnifiquement entretenu, géré par les Sœurs de Saint-Joseph de Cluny, situé au centre de White Town. Cluny est particulièrement apprécié pour son personnel infirmier bienveillant, son environnement propre et sa facilité d'accès depuis n'importe quel point du quartier français. C'est une excellente option pour les maladies de niveau intermédiaire, les petites sutures, les consultations générales et les analyses de laboratoire.

Adresse : 4 Romain Rolland Street, White Town, Puducherry 605001.
Contact : +91 413 2334057.

Les frais de consultation sont abordables selon n'importe quel standard, généralement entre 150 et 300 roupies.

**Cliniques dentaires**

Pour les urgences dentaires ou les problèmes courants pendant votre séjour, des cliniques dentaires privées indépendantes sont disponibles dans White Town et Heritage Town. Le Mahatma Gandhi Post Graduate Institute of Dental Sciences est la principale option institutionnelle. Des cabinets dentaires privés comme Deen Dental opèrent aussi au centre-ville.

Consultation dentaire type : 250 à 500 roupies. Plombages standards : 800 à 1 500 roupies. Traitement d'urgence d'un canal radiculaire dans une clinique privée haut de gamme : 3 500 à 6 000 roupies.

**Cliniques générales privées**

Pour les affections mineures (fièvre, troubles digestifs, réactions cutanées), des cliniques privées indépendantes à White Town et Heritage Town proposent des consultations sans rendez-vous. Comptez entre 200 et 400 roupies pour une consultation diagnostique simple. Votre hôtel ou maison d'hôtes peut vous recommander la clinique la plus proche.`,
  },

  {
    id: "pharmacies",
    title: "Pharmacies",
    teaser:
      "Les pharmacies sont nombreuses et ouvertes tard. Les médicaments de base sont disponibles sans ordonnance. Les antibiotiques et médicaments réglementés nécessitent une ordonnance valide signée par un médecin agréé.",
    body: `**Trouver une pharmacie**

Les pharmacies sont faciles à trouver dans tout Pondichéry, identifiables par leurs enseignes lumineuses en croix médicale verte ou rouge. Les grandes chaînes comme Apollo Pharmacy et MedPlus exploitent plusieurs points de vente dans toute la ville, certains ouverts 24h/24. Les pharmacies indépendantes sont également répandues à White Town et Heritage Town. Nehru Street offre une bonne concentration de pharmacies pour les besoins courants.

**Ce que vous pouvez acheter sans ordonnance**

Pour les besoins de santé de voyage courants, une large gamme de médicaments est disponible sans ordonnance ni justificatif : paracétamol, antiacides, antihistaminiques, sels de réhydratation orale (SRO), antalgiques de base, crèmes antiseptiques, crème solaire et répulsif anti-insectes. Emporter des sachets de SRO par précaution est judicieux : ils sont bon marché et utiles pour se réhydrater après une journée chaude ou un épisode de troubles digestifs.

**Exigences d'ordonnance**

La réglementation pharmaceutique moderne en Inde est strictement appliquée. Les médicaments réglementés, antibiotiques, somnifères et médicaments psychiatriques ne seront pas délivrés sans une ordonnance physique signée par un praticien médical agréé, portant son cachet officiel d'enregistrement au conseil médical. Cela s'applique uniformément chez Apollo, MedPlus et les pharmacies indépendantes.

Si vous avez une condition chronique ou prenez des médicaments réguliers, emportez l'ordonnance originale de votre pays d'origine ainsi que le nom générique (chimique) exact de chaque médicament, pas seulement le nom de marque. Les noms de marque varient considérablement d'un pays à l'autre, et un pharmacien travaillant à partir du nom générique peut identifier l'équivalent correct bien plus fiablement.

**Accès aux médicaments en urgence**

Si vous avez besoin d'une ordonnance pour quelque chose d'urgent et ne pouvez pas vous rendre à l'hôpital, les consultations en clinique privée à White Town peuvent délivrer une ordonnance valide le jour même, pour des frais de 200 à 400 roupies. C'est plus rapide que d'attendre dans la file d'un service de consultation externe d'hôpital public pour une situation non urgente.`,
  },
];

export function getHealthcareArticleFr(id: string): HealthcareArticleFr | undefined {
  return healthcareArticlesFr.find(a => a.id === id);
}
