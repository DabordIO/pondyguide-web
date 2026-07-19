export interface ExploreArticleFr {
  id: string;
  title: string;
  cardTitle?: string;
  teaser: string;
  duration?: string;
  body: string;
  highlights?: string[];
  visitInfo?: { hours?: string; entry?: string; tip?: string };
  metaTitle?: string;
  metaDescription?: string;
}

export const exploreArticlesFr: ExploreArticleFr[] = [
  // ── BALADES ─────────────────────────────────────────────────────────────────

  {
    id: "walk-white-town",
    metaTitle: "Itinéraire de balade à White Town, rues et monuments",
    metaDescription: "Une balade en autonomie à travers le quartier français de Pondichéry, entre villas coloniales, temples et la promenade du front de mer, en environ deux heures.",
    title: "Se promener dans White Town",
    cardTitle: "Balade à White Town",
    teaser:
      "Une balade en autonomie à travers le quartier français : rues coloniales, bâtiments patrimoniaux, temples, et la promenade du front de mer. Les deux meilleures heures que vous passerez à Pondichéry.",
    duration: "2 à 3 heures",
    body: `Le quartier français de Pondichéry est l'un des rares endroits en Inde où l'on peut marcher dans une rue de bâtiments coloniaux dont les noms d'origine figurent encore sur les plaques : [rue Dupleix](/fr/discover/white-town/rue-dupleix), [rue Bussy](/fr/discover/white-town/rue-bussy), [rue de la Bourdonnais](/fr/discover/white-town/labourdonnais-street). La grille de rues fut conçue dans les années 1690 et n'a pas changé depuis. Les noms ont survécu intacts à la décolonisation de 1962. Chaque nom de la grille est un chapitre de l'histoire de l'Inde française.

**Par où commencer**

Commencez à la Bibliothèque Romain Rolland, sur la rue transversale principale du quartier français. La bibliothèque fut fondée en 1827 et rebaptisée en 1966 en l'honneur du lauréat français du prix Nobel qui correspondit avec Gandhi. C'est l'une des plus anciennes bibliothèques publiques d'Inde et une manière tranquille d'entrer dans le quartier.

**Les rues**

Descendez vers le sud par la [rue Romain Rolland](/fr/discover/white-town/rue-romain-rolland) en direction du front de mer. Tournez dans la [rue Dupleix](/fr/discover/white-town/rue-dupleix) et parcourez-la sur toute sa longueur : les bâtiments y sont parmi les mieux conservés de White Town, avec des façades peintes, des fenêtres à volets, et des bougainvillées au-dessus des balcons. C'est la rue d'où viennent les photographies Instagram.\n\nÀ l'extrémité est de la rue Dupleix, vous atteignez l'[avenue Goubert](/fr/discover/white-town/avenue-goubert) et le front de mer. Marchez vers le nord le long de la promenade en direction de la statue de Gandhi (quatre mètres de bronze sur huit piliers monolithiques de granit venus du fort de Gingee, inaugurée le jour de la Fête de la République 1965) et du [Monument aux Combattants](/fr/discover/landmarks/war-memorial) (1938), où les noms des morts de Pondichéry lors des deux guerres mondiales sont gravés dans la pierre.

**Le temple**

Tournez vers l'ouest depuis la promenade, par n'importe laquelle des rues transversales, et vous trouverez le temple Manakula Vinayagar au milieu de la grille. Vieux de plus de 800 ans et dédié à Ganesh, il offre un contraste extraordinaire avec l'architecture coloniale environnante : tours peintes, piliers dorés, sols en marbre, et un flot constant de fidèles. L'entrée est gratuite ; les chaussures doivent être laissées à l'entrée.

**La promenade**

Revenez sur l'avenue Goubert à la fin de la balade. Le Café, le café en bord de mer de l'[Ashram de Sri Aurobindo](/fr/discover/landmarks/ashram), est l'endroit idéal pour s'asseoir avec un café et regarder la lumière changer sur l'eau. Le golfe du Bengale fait face à l'est : les levers de soleil ici valent le réveil matinal.`,
  },

  // ── ACTIVITÉS ─────────────────────────────────────────────────────────────

  {
    id: "activity-sunday-market",
    metaTitle: "Marché du dimanche de Pondichéry, rue Mahatma Gandhi",
    metaDescription: "Chaque dimanche, la rue Mahatma Gandhi se remplit de meubles d'occasion, de vieux appareils électroniques, de vêtements faits main, d'outils et de street food.",
    title: "Le marché du dimanche",
    cardTitle: "Marché du dimanche",
    teaser:
      "Chaque dimanche sur la rue Mahatma Gandhi : meubles d'occasion, appareils électroniques vintage, vêtements faits main, outils, et street food. L'une des expériences les plus locales de Pondichéry.",
    duration: "1 à 2 heures",
    body: `Le marché du dimanche de la rue Mahatma Gandhi ne s'adresse pas aux touristes, et c'est précisément ce qui le rend intéressant. Il se tient d'environ 10 heures jusqu'au début de l'après-midi et couvre tout ce qu'une ville produit et jette : meubles d'occasion, vieux Walkman et téléphones Nokia, vêtements faits main, outils de jardinage, accessoires en laiton, textiles anciens, bibelots, et un très bon choix de street food.\n\nLa foule est presque entièrement locale. Des familles du quartier tamoul, des retraités à la recherche de quelque chose de précis, des jeunes qui flânent sans intention particulière. Un dimanche donné, le marché contient toujours quelques trouvailles véritablement intéressantes au milieu d'un grand nombre qui ne le sont pas. Distinguer les unes des autres est l'essentiel de l'intérêt.\n\nLe marchandage est attendu. Les vendeurs annoncent un prix plus élevé et s'attendent à une contre-offre plus basse ; se retrouver au milieu est l'issue habituelle. Commencer à environ la moitié du prix demandé est une position raisonnable.\n\nLes stands de street food installés autour du marché méritent le détour : samosas, noix de coco fraîche, chaat, et fruits de saison à des prix nettement inférieurs à ceux des cafés du quartier français. Venez le ventre vide.`,
  },
  {
    id: "activity-botanical-gardens",
    metaTitle: "Jardin botanique de Pondichéry, histoire et points forts",
    metaDescription: "Fondé par les Français en 1826, ce jardin abrite plus de 1 500 espèces végétales, ainsi que des serres, un aquarium et un petit train.",
    title: "Le jardin botanique de Pondichéry",
    cardTitle: "Jardin botanique",
    teaser:
      "Fondé en 1826 par les Français pour étudier les plantes de la région. Plus de 1 500 espèces sur un site ovale, avec un petit train, des serres, et un aquarium. À visiter de préférence en semaine.",
    duration: "1 à 2 heures",
    body: `Le jardin botanique de Pondichéry fut créé en 1826 sous l'administration du gouverneur Dupuy, dans le cadre du même effort civique de l'époque de la Restauration qui produisit aussi la Bibliothèque Romain Rolland et le Collège français. L'objectif était scientifique : recueillir, étudier et classer les plantes et la faune de la côte de Coromandel et des Ghâts occidentaux.\n\nLe jardin, de forme ovale, compte environ 1 500 espèces d'arbres et de plantes disposées sur des pelouses avec des allées ombragées, des parterres de fleurs taillés, des serres, et un petit aquarium. Un petit train emprunte un parcours qui traverse une grotte et un tunnel, ce qui en fait une attraction appréciée des enfants.\n\nL'entrée coûte 50 roupies pour les visiteurs étrangers et 20 roupies pour les ressortissants indiens. Horaires d'ouverture : environ de 10 heures à 17 heures, tous les jours.\n\nLe jardin est calme les matinées de semaine et bondé le week-end et les jours fériés. Le festival agricole annuel, le deuxième week-end de février, attire un public nombreux : entrée gratuite, événements culturels, et un feu d'artifice en soirée au-dessus des pelouses.`,
  },
  {
    id: "activity-beach-lighthouse-walk",
    metaTitle: "Balade du phare et du village de pêcheurs, Pondichéry",
    metaDescription: "Marchez au sud depuis la promenade à travers un village de pêcheurs actif jusqu'au nouveau phare, en passant par des métiers à tisser, des entrepôts et des vues sur la mer.",
    title: "La balade du phare et du village de pêcheurs",
    teaser:
      "De la promenade vers le sud, à travers un village de pêcheurs actif, jusqu'au nouveau phare. Des entrepôts de tissus avec des métiers à tisser traditionnels, l'ancien phare sur sa base circulaire, et une vue à 360 degrés depuis le sommet pour 5 roupies.",
    duration: "1 à 2 heures",
    body: `La promenade de l'[avenue Goubert](/fr/discover/white-town/avenue-goubert) est le point de départ évident. Marchez vers le sud depuis la statue de Gandhi, en passant devant le buste de Schoelcher sur Port Road, en direction de l'ancien phare construit par l'ingénieur français Louis Guerre en 1835. L'ancien phare est aujourd'hui un simple monument plutôt qu'un phare en activité (il fut désaffecté en 1979), mais ses proportions restent élégantes : 29 mètres de haut sur une base circulaire blanche, visible à 15 miles en mer à l'époque de son fonctionnement.

**Deux itinéraires, une recommandation claire**

Il existe deux façons de rejoindre le nouveau phare. L'itinéraire direct passe devant le stade de cricket. L'autre traverse un petit village de pêcheurs et est plus long — mais pour beaucoup, il devient l'une de leurs balades préférées à Pondichéry.\n\nEn quittant la route moderne animée, on entre dans un monde de petites maisons carrées et de ruelles étroites partant dans toutes les directions. De part et d'autre de la rue poussiéreuse, des saris aux couleurs vives se balancent sur des fils à linge tandis que des enfants passent à vélo. Des chèvres errent partout, grignotant tout ce qui est à leur portée.\n\nÀ mesure que l'on s'enfonce dans le village, le contraste avec les cafés et pâtisseries chics du quartier français devient saisissant. Les ruelles débouchent finalement sur des entrepôts de tissus qui bordent la rue, avec des métiers à tisser traditionnels en bois visibles par les portes ouvertes. On y voit des femmes tirer et faire glisser de grands rouleaux de tissu à travers leurs métiers, selon des motifs qui n'ont guère changé depuis un siècle. Le bip occasionnel d'un téléphone portable est le seul rappel que l'on est bien au XXIe siècle.\n\nDes entrepôts de tissus, il ne faut que deux minutes de marche pour atteindre l'entrée du phare.

**Le phare**

Le nouveau phare de Dubrayapet (2 km au sud de White Town) est une tour rayée de noir et blanc construite dans les années 1970. Il commença à guider les navires en toute sécurité le long de la côte en 1979, quand l'ancien phare fut retiré du service. Retirez vos chaussures avant d'entrer — c'est obligatoire avant de monter.\n\nIl n'y a pas d'ascenseur. L'escalier en colimaçon de 250 marches mérite l'effort, et mérite qu'on s'y arrête : levez ou baissez les yeux en montant et les marches forment une spirale géométrique agréable à l'œil. Au sommet, une plateforme d'observation à 360 degrés embrasse tout Pondichéry, le golfe du Bengale, et la plaine basse qui s'étend vers l'ouest. L'entrée coûte 5 roupies, plus 25 roupies pour un appareil photo.\n\nHoraires d'ouverture : du mardi au dimanche, de 10h à 13h et de 15h à 18h. Fermé le lundi. Fermetures occasionnelles pour maintenance.

**Remarque sur la baignade :** la plage le long de la promenade de Pondichéry n'est pas sûre pour la baignade. Le courant est fort, des panneaux d'avertissement sont affichés, et des sauveteurs sont présents. La plage d'Auroville, à 30 km au nord, est la plage de baignade sûre la plus proche.`,
  },

  // ── EXCURSIONS ────────────────────────────────────────────────────────────

  {
    id: "daytrip-ousteri",
    metaTitle: "Lac Ousteri, oiseaux et zones humides près de Pondichéry",
    metaDescription: "À cinq kilomètres à l'ouest de la ville, Ousteri est le plus grand lac naturel d'eau douce de la région, une zone humide Ramsar abritant 170 espèces d'oiseaux.",
    title: "Le lac Ousteri",
    cardTitle: "Lac Ousteri",
    teaser:
      "Le plus grand lac naturel d'eau douce de la région de Pondichéry, à cinq kilomètres à l'ouest de la ville. Une zone humide Ramsar avec plus de 170 espèces d'oiseaux recensées, dont des flamants roses, des tantales indiens, et des pélicans à bec tacheté.",
    duration: "Demi-journée",
    body: `Ousteri (aussi orthographié Oussudu) est un lac d'eau douce peu profond couvrant environ 40 kilomètres carrés à la lisière ouest du territoire de l'Union de Pondichéry, à cheval sur la frontière avec le Tamil Nadu. Le lac et ses zones humides environnantes furent déclarés site Ramsar, une zone humide d'importance internationale, en 2002, et la zone relève d'un arrêté de protection de la faune qui restreint le développement sur ses rives.

**Les oiseaux**

Plus de 170 espèces d'oiseaux ont été recensées à Ousteri, ce qui en fait l'un des habitats aviaires les plus importants de la région de Pondichéry. Les mois d'hiver (de novembre à février) apportent des espèces migratrices venues d'Asie centrale et de l'Himalaya : des flamants roses sont présents en nombre en haute saison, aux côtés de tantales indiens, de pélicans à bec tacheté, de dendrocygnes siffleurs, de hérons pourpres, et de toute une gamme de limicoles. Des espèces résidentes, dont des martins-pêcheurs, des cormorans et des aigrettes, sont visibles toute l'année.\n\nLes visites tôt le matin offrent les meilleures observations : apportez des jumelles si vous en avez. Les meilleures positions se trouvent le long de la digue est, d'où l'on voit s'étendre l'eau libre vers l'ouest.

**Canotage**

Le NTR Boating Park, sur la rive est, propose des pédalos et des barques à rames pour accéder au lac. Les horaires sont généralement de 9h à 17h ; les barques peuvent être louées pour des tarifs modestes. La traversée en barque d'une partie du lac offre une vue plus rapprochée des oiseaux d'eau que les positions depuis la rive.

**Y accéder**

Ousteri se trouve à environ cinq kilomètres à l'ouest du centre-ville de Pondichéry, à 15 minutes en auto-rickshaw ou en scooter. Empruntez la route du lac Ousteri depuis Heritage Town. L'entrée du parc de canotage est symbolique. Les routes de digue extérieures sont librement accessibles.`,
  },

  {
    id: "daytrip-gingee",
    metaTitle: "Fort de Gingee, la Troie de l'Orient près de Pondichéry",
    metaDescription: "À soixante-dix kilomètres à l'ouest de Pondichéry, cette vaste forteresse s'étend sur trois collines de granit reliées par des murs, des portes et des bastions.",
    title: "Le fort de Gingee",
    cardTitle: "Fort de Gingee",
    teaser:
      "À soixante-dix kilomètres à l'ouest de Pondichéry, l'une des forteresses les plus redoutables d'Inde du Sud : trois collines de granit reliées par des murs et des bastions, surnommée la Troie de l'Orient par les Britanniques.",
    duration: "Journée complète",
    body: `Gingee (prononcé Senji) est l'une des forteresses les plus impressionnantes d'Inde du Sud et l'une des moins visitées au regard de son ampleur. Située à 70 kilomètres à l'ouest de Pondichéry, à environ 1h30 de route, le complexe fortifié couvre trois collines de granit distinctes reliées par d'immenses murailles, des bastions, et des douves, sur une superficie d'environ 11 kilomètres carrés.

**Histoire**

Construite par les Nayaks de Gingee au XVe siècle sur des fondations peut-être plus anciennes, la forteresse passa de mains en mains sans jamais tomber facilement. Shivaji s'en empara en 1677 et la trouva si impressionnante qu'il la qualifia de forteresse la plus imprenable d'Inde. Les Moghols l'assiégèrent pendant huit ans et ne la prirent finalement en 1698 que par la négociation plutôt que par la force. Les Français la tinrent brièvement au XVIIIe siècle, suivis par les Britanniques, qui la surnommèrent la Troie de l'Orient, une expression qui lui est restée depuis.

**Que voir**

Rajagiri est la plus haute des trois collines, avec 160 mètres, et porte les ruines les plus importantes à son sommet : un grenier, un palais, un temple, un chakra (pierre de forage), un bassin pour éléphants, et une salle d'audience perchée au bord de la falaise. La montée prend 45 à 60 minutes sur des marches en pierre abruptes et se révèle éprouvante sous la chaleur du jour.\n\nLa colline de Krishnagiri est plus basse et contient le complexe d'entrée principal, la salle d'audience aux mille piliers, un bassin, et un petit musée à sa base. L'enceinte intérieure de la forteresse sur cette colline est la section la plus photogénique.\n\nChandrayandurg relie les deux collines principales et contient des citernes d'eau et des murs défensifs.

**Y accéder**

Un scooter ou une voiture avec conducteur autonome est l'option la plus pratique : la route depuis Pondichéry via Tindivanam est directe. Des bus circulent depuis la gare routière principale de Pondichéry jusqu'à Gingee (changement à Villupuram ou Tindivanam). Le trajet en bus dure environ deux heures.

**Horaires et entrée**

Site classé par l'Archaeological Survey of India : ouvert tous les jours, de 9h à 17h30. Entrée à environ 40 roupies pour les ressortissants indiens, 600 roupies pour les visiteurs étrangers. Prévoyez une journée complète si vous comptez grimper à Rajagiri.`,
  },

  {
    id: "daytrip-arikamedu",
    metaTitle: "Arikamedu, l'ancien port romain près de Pondichéry",
    metaDescription: "À quatre kilomètres au sud du quartier français, des marchands romains échangeaient jadis des marchandises méditerranéennes contre du coton et des pierres précieuses.",
    title: "Arikamedu",
    cardTitle: "Arikamedu",
    teaser:
      "À quatre kilomètres au sud du quartier français, un ancien port où des marchands romains échangeaient des marchandises méditerranéennes contre du coton et des pierres précieuses indiennes. Des amphores romaines, de la céramique arétine, et une pierre gravée à l'effigie de l'empereur Auguste y ont été mises au jour.",
    duration: "Demi-journée",
    body: `**Occupation :** du IIe siècle avant notre ère environ jusqu'au VIIIe siècle de notre ère

À quatre kilomètres au sud du quartier français se trouve l'un des sites archéologiques les plus importants d'Inde. Au premier regard, Arikamedu est peu spectaculaire. Il n'y a ni ruines imposantes, ni grands temples, et peu d'indices suggérant que cette portion tranquille de rive, le long de la rivière Ariyankuppam, fut jadis un port international. Pourtant, sous ces bas monticules, les archéologues ont mis au jour des preuves indiscutables que des navires du monde romain commerçaient ici il y a deux mille ans.

De la vaisselle de table italienne fabriquée à Arezzo. Des amphores à vin romaines. Du verre méditerranéen. Une pierre précieuse gravée représentant l'empereur Auguste. Ce n'étaient pas des imitations locales, mais des objets ayant voyagé des milliers de kilomètres à travers la mer Rouge et l'océan Indien, arrivant sur la côte tamoule quelques décennies seulement après que Rome eut ouvert un commerce maritime direct avec l'Inde.

## L'ancien port

Arikamedu prospéra comme comptoir commercial du IIe siècle avant notre ère jusqu'au VIIIe siècle de notre ère. Sa plus grande prospérité se situe dans les premiers siècles avant et après notre ère, quand des marchands de la Méditerranée échangeaient vin, huile d'olive, céramique fine et objets de luxe contre des textiles de coton d'Inde du Sud, des perles, des pierres précieuses, des perles fines, et des épices.

Les fouilles ont révélé bien plus que des marchandises romaines importées. Les archéologues ont identifié des cuves de teinture où le coton fin était coloré pour l'exportation, des ateliers produisant les célèbres perles de verre indo-pacifiques échangées à travers l'Asie et la Méditerranée, ainsi que les traces d'une communauté animée d'artisans, de marchands, et de marins. La partie nord du site semble avoir contenu de grandes structures communautaires liées au port, tandis que le secteur sud était consacré à l'activité industrielle.

La littérature tamoule ancienne corrobore les preuves archéologiques. Des poèmes du Sangam décrivent des *yavanas*, des marchands étrangers généralement identifiés comme des Grecs et des Romains, arrivant avec du vin et repartant avec du poivre et des textiles fins. L'écrivain romain Pline l'Ancien se plaignait que Rome perdait chaque année des quantités considérables d'or au profit du commerce de luxe indien. Arikamedu fournit certaines des preuves archéologiques les plus claires que ce commerce était bien réel.

Le site est largement identifié à **Poduke**, le port commercial décrit dans le *Périple de la mer Érythrée* et plus tard par le géographe Ptolémée.

## Les fouilles d'Arikamedu

Bien que des découvertes locales aient déjà attiré l'attention plus tôt, Arikamedu entra dans l'archéologie mondiale en 1945, quand Sir Mortimer Wheeler fouilla le site et l'identifia comme une importante station commerciale indo-romaine. Ses découvertes d'amphores romaines et de céramique arétine transformèrent la compréhension du commerce maritime antique entre la Méditerranée et l'Inde.

De nouvelles fouilles menées par l'archéologue français Jean-Marie Casal entre 1947 et 1950 enrichirent considérablement le tableau, alors que Pondichéry était encore sous administration française. Entre 1989 et 1992, l'archéologue américaine Vimala Begley réexamina le site et démontra que l'histoire d'Arikamedu s'étendait bien au-delà de la période commerciale romaine. Loin d'être un établissement occupé pendant seulement quelques siècles, il était resté actif pendant plus de six cents ans, du IIe siècle avant notre ère jusqu'à environ le VIIIe siècle de notre ère.

Bon nombre des plus belles découvertes, notamment de la céramique arétine portant les cachets de potiers italiens, des amphores romaines, du verre, des perles, des pièces de monnaie, des objets en terre cuite, et des sculptures, sont aujourd'hui exposées au [musée de Pondichéry](/fr/discover/landmarks/museum). Certains objets recueillis lors des fouilles françaises sont conservés dans des musées en France.

## Visiter aujourd'hui

Arikamedu s'apprécie avec un peu d'imagination. Ce qui subsiste en surface est modeste : de bas terrassements, des vestiges de briques épars, et les fondations d'un vaste entrepôt en briques surplombant la rivière. C'était autrefois un port en activité où l'on déchargeait des cargaisons, teignait des textiles, fabriquait des perles, et où des marchands venus de cultures lointaines faisaient affaire.

Il y a peu d'installations pour les visiteurs et une interprétation limitée sur place, ce qui rend une visite au [musée de Pondichéry](/fr/discover/landmarks/museum) vivement recommandée avant de venir ici. Voir d'abord la céramique romaine, les amphores, les perles, et le verre aide à donner du relief au paysage.

Le site se trouve à environ quatre kilomètres au sud du quartier français, près d'Ariyankuppam, et se rejoint en auto-rickshaw en une vingtaine de minutes. L'entrée est gratuite, et les mois les plus frais, d'octobre à mars, offrent les conditions les plus agréables pour l'exploration. Une visite tôt le matin est particulièrement gratifiante, quand la rivière est calme et qu'il est plus facile d'imaginer le port qui reliait la côte tamoule au monde romain il y a deux mille ans.`,
    highlights: [
      "Le site lui-même n'a ni panneaux ni infrastructure. Visitez d'abord le musée de Pondichéry pour voir les objets trouvés, notamment la céramique arétine portant les cachets de potiers italiens.",
      "Cherchez le bas monticule près de l'estuaire de la rivière Ariyankuppam et les vestiges de l'entrepôt en briques. Ce fut un port en activité pendant plus de 600 ans.",
      "Le site pourrait être la « Poduke » décrite dans le Périple de la mer Érythrée et par Ptolémée, peut-être dérivée du tamoul « Potikai », signifiant « lieu de rencontre ».",
    ],
    visitInfo: {
      hours: "Accessible à tout moment (site protégé par l'ASI, non gardé)",
      entry: "Gratuit",
      tip: "À 4 km au sud sur la route côtière vers Ariyankuppam. Aucune signalétique ni installation sur place. Visitez d'abord le musée de Pondichéry : les découvertes d'Arikamedu qui y sont exposées rendent le site lui-même bien plus lisible.",
    },
  },

  {
    id: "daytrip-pichavaram",
    metaTitle: "Forêt de mangroves de Pichavaram, près de Pondichéry",
    metaDescription: "À soixante-cinq kilomètres au nord de Pouduchéry, ce vaste paysage de mangroves couvre 1 100 hectares de chenaux et d'îlots.",
    title: "La forêt de mangroves de Pichavaram",
    cardTitle: "Pichavaram",
    teaser:
      "L'un des paysages côtiers les plus remarquables d'Inde, à 65 kilomètres au nord de Pouduchéry. Plus de 1 100 hectares de chenaux de marée, de petites îles, et de forêt de mangroves, à explorer de préférence en barque à travers des passages à peine plus larges que l'embarcation elle-même.",
    duration: "Demi-journée à journée complète",
    body: `À environ 65 kilomètres au nord de Pouduchéry, Pichavaram est l'un des paysages côtiers les plus remarquables d'Inde. Ici, les rivières Vellar et Coleroon rejoignent le golfe du Bengale, créant un réseau complexe de chenaux de marée, de petites îles, et de forêts de mangroves qui s'étend sur plus de 1 100 hectares. Explorer ces voies d'eau en barque est l'une des excursions les plus mémorables au départ de Pouduchéry, offrant un contraste complet avec les rues coloniales et la promenade du front de mer de la ville.

Les mangroves forment un écosystème vivant où eau salée et eau douce se mêlent. De denses peuplements de palétuviers envoient des racines aériennes enchevêtrées qui stabilisent le rivage, servent de zones de reproduction pour les poissons et les crustacés, et créent un habitat important pour les oiseaux résidents et migrateurs. Beaucoup des étroites voies d'eau ne sont accessibles qu'en petites barques à rames, permettant aux visiteurs de glisser silencieusement sous la canopée feuillue, à travers des passages à peine plus larges que la barque elle-même.

## Explorer les mangroves

La meilleure façon de découvrir Pichavaram est sur l'eau. La Tamil Nadu Tourism Development Corporation (TTDC) exploite des services de bateaux depuis le Pichavaram Boat House, proposant à la fois des bateaux à moteur et des barques à rames traditionnelles. Les bateaux à moteur couvrent une plus grande zone en moins de temps, tandis que les barques à rames peuvent s'engager dans les chenaux les plus étroits, où la forêt semble presque enclose par des branches arquées et des racines entremêlées.

À mesure que la barque s'enfonce dans les mangroves, les bruits de la circulation disparaissent, remplacés par le chant des oiseaux, les éclaboussures de poissons, et le mouvement doux de la marée. L'eau calme et saumâtre reflète la dense canopée verte au-dessus, créant l'un des cadres naturels les plus paisibles de la côte de Coromandel.

## La faune

Pichavaram abrite une riche variété de faune et se révèle particulièrement gratifiant pour les observateurs d'oiseaux. Parmi les observations courantes : petites et grandes aigrettes, hérons cendrés et pourprés, hérons cabochons, cormorans, martins-pêcheurs, anhingas, et ibis noirs. Pendant les mois les plus frais, des oiseaux migrateurs enrichissent encore la diversité des espèces présentes dans les zones humides.

L'écosystème de mangrove abrite aussi des périophtalmes, des crabes, des crevettes, des mollusques, et de nombreuses espèces de poissons qui dépendent de ces eaux abritées durant une partie de leur cycle de vie. Bien que la forêt soit riche en faune, son plus grand attrait tient souvent à l'expérience même de se déplacer silencieusement à travers l'un des paysages de mangrove les mieux préservés d'Inde.

## Une excursion parfaite depuis Pouduchéry

Pichavaram se trouve à proximité de Chidambaram, ce qui permet de combiner facilement les deux destinations en une seule journée. Beaucoup de visiteurs passent la matinée à explorer les mangroves avant de poursuivre vers le magnifique temple de Nataraja, l'un des temples shivaïtes les plus importants d'Inde et un chef-d'œuvre de l'architecture chola.

Le trajet depuis Pouduchéry par l'East Coast Road prend environ une heure et demie à deux heures, en passant par des villages de pêcheurs, des marais salants, et des étendues du golfe du Bengale avant d'atteindre la réserve de mangroves.

## Quand visiter

Pichavaram peut se visiter toute l'année, mais les mois les plus agréables vont d'octobre à février, quand les températures sont plus basses et les oiseaux migrateurs présents. Le petit matin et la fin d'après-midi offrent la meilleure lumière pour la photographie et les conditions les plus plaisantes sur l'eau. Les visiteurs intéressés par l'observation des oiseaux devraient choisir les premiers départs de bateau de la journée, quand la forêt est la plus silencieuse.

## Informations pratiques

Le Pichavaram Boat House est géré par la Tamil Nadu Tourism Development Corporation. Barques à rames et bateaux à moteur sont disponibles, les tarifs dépendant du type de bateau et de la durée du trajet. Des rafraîchissements simples, des toilettes, et un parking sont disponibles sur place.

Prévoyez au moins deux à trois heures pour la visite, en particulier si vous choisissez une barque à rames à travers les étroits chenaux de mangrove. Des vêtements légers, de la crème solaire, de l'eau potable, et un répulsif à insectes sont recommandés, surtout pendant les mois les plus chauds.

**Distance depuis Pouduchéry :** environ 65 km

**Temps de trajet :** environ 1h30 à 2h

**Boat House :** généralement ouvert tous les jours d'environ 8h à 17h

**Meilleure expérience :** choisissez une barque à rames pour un trajet plus lent à travers les voies d'eau étroites, et combinez votre visite avec le temple de Nataraja à Chidambaram pour l'une des plus belles excursions au départ de Pouduchéry.`,
    visitInfo: {
      hours: "Généralement de 8h à 17h tous les jours (à vérifier sur place)",
      entry: "Par bateau ; tarifs variables selon le type de bateau",
      tip: "Choisissez une barque à rames pour les chenaux étroits. Partez tôt pour les oiseaux. Combinez avec le temple de Nataraja à Chidambaram le même jour.",
    },
  },

  {
    id: "daytrip-auroville",
    metaTitle: "Excursion à Auroville depuis Pondichéry, le Matrimandir",
    metaDescription: "Fondée en 1968 par Mirra Alfassa, Auroville est une cité expérimentale au nord de Pondichéry, centrée sur le Matrimandir.",
    title: "Excursion d'un jour : Auroville",
    cardTitle: "Auroville",
    teaser:
      "À 30 km au nord de Pondichéry : la cité expérimentale fondée en 1968 par Mirra Alfassa comme une ville n'appartenant à aucune nation. Le dôme doré du Matrimandir en est le centre visuel. Prévoyez au moins une demi-journée.",
    duration: "Demi-journée à journée complète",
    body: `Auroville fut fondée le 28 février 1968 par [Mirra Alfassa](/fr/history/lives-and-legacies/mirra-alfassa), connue sous le nom de la Mère, comme une cité destinée à n'appartenir à aucune nation et à incarner concrètement l'unité humaine. Environ 50 000 personnes assistèrent à la cérémonie d'inauguration ; des délégués de 124 pays versèrent symboliquement de la terre de leur pays natal dans une urne de marbre au centre du site.\n\nAujourd'hui, Auroville est une communauté active d'environ 3 500 résidents venus de 60 pays, vivant et travaillant sur un plateau boisé au nord de Pondichéry. On y trouve des fermes, des écoles, des ateliers, des maisons d'hôtes, des restaurants, et une industrie du logiciel. Elle est administrée par un conseil placé sous l'égide de l'UNESCO.

**Le Matrimandir**

Le dôme doré du Matrimandir est le centre architectural et spirituel d'Auroville. L'accès à l'intérieur est strictement encadré : il faut s'inscrire à l'avance au Centre d'accueil des visiteurs pour entrer dans la chambre de méditation. Les visiteurs d'un jour peuvent observer le dôme depuis le point de vue extérieur désigné, sans inscription préalable.\n\nLa chambre intérieure abrite une grande boule de cristal éclairée par un unique rayon de soleil suivi tout au long de la journée. Elle est conçue exclusivement pour la méditation silencieuse. La photographie y est interdite.

**Y accéder**

Auroville se trouve à environ 30 km au nord de la ville de Pondichéry, soit environ 30 à 40 minutes de route. L'auto-rickshaw ou le scooter loué sont les options les plus pratiques depuis White Town. Certaines maisons d'hôtes peuvent organiser un chauffeur pour une excursion d'une demi-journée combinant Auroville et les plages au nord de la ville.

**La plage d'Auroville**

La plage près d'Auroville est la plage de baignade sûre la plus proche de Pondichéry, avec une eau plus calme que la promenade rocheuse en ville. Plusieurs restaurants et cafés y sont installés à proximité. Si vous combinez la visite du Matrimandir avec un après-midi de plage, prévoyez une journée complète.`,
  },
  {
    id: "daytrip-mahabalipuram",
    metaTitle: "Excursion à Mahabalipuram depuis Pondichéry",
    metaDescription: "Découvrez les monuments pallava classés UNESCO, sculptés dans le granit au VIIe siècle, dont des temples-grottes et le temple du Rivage.",
    title: "Excursion d'un jour : Mahabalipuram",
    cardTitle: "Mahabalipuram",
    teaser:
      "Des monuments pallava classés UNESCO, sculptés dans le granit au VIIe siècle : temples-grottes, bas-reliefs, et un temple du Rivage dressé dans les vagues. Accessible en bus depuis la gare routière principale de Pondichéry.",
    duration: "Journée complète",
    body: `Mahabalipuram (Mamallapuram) est un site classé au patrimoine mondial de l'UNESCO sur la côte de Coromandel, à environ 90 km au nord de Pondichéry. Ce fut le port principal de la dynastie Pallava, qui contrôla une grande partie de l'Inde du Sud entre le IVe et le IXe siècle, et les monuments qui s'y trouvent comptent parmi les plus beaux exemples de sculpture sur pierre du haut Moyen Âge sud-indien.

**Que voir**

Le temple du Rivage se dresse sur une plateforme basse au bord de l'eau, construit au début du VIIIe siècle et aujourd'hui partiellement érodé par mille ans d'embruns. Ses proportions sont précises et son emplacement extraordinaire : un temple en granit dans les vagues.\n\nLa Descente du Gange (la Pénitence d'Arjuna) est un bas-relief couvrant la face d'une falaise de granit naturelle : le plus grand relief sculpté en plein air au monde, représentant un épisode du Mahabharata avec des éléphants, des dieux, des humains, et des animaux sculptés grandeur nature à même la roche.\n\nLes Pancha Rathas (Cinq Chars) sont une série de structures monolithiques taillées dans des blocs de pierre uniques, dans les formes de différents styles de temples. Ils ne furent jamais achevés ni utilisés comme temples : ce sont des exercices de forme architecturale.

**Y accéder**

Des bus partent de la gare routière principale de Pondichéry vers le nord en direction de Chennai, en passant par le carrefour de Mahabalipuram. Confirmez auprès du contrôleur avant de monter. Le trajet dure environ deux heures. Autre option : louer un chauffeur privé pour une excursion plus confortable ; certains circuits au départ de Chennai combinent Mahabalipuram et les temples de Kanchipuram.`,
  },

  // ── THÉMATIQUES ───────────────────────────────────────────────────────────

  {
    id: "theme-temples",
    metaTitle: "Temples et histoire du quartier tamoul de Pondichéry",
    metaDescription: "De l'autre côté du canal, temples, marchés et maisons familiales révèlent l'ancien établissement qui existait avant l'arrivée des Français en 1674.",
    title: "Les temples du quartier tamoul",
    teaser:
      "L'histoire la plus ancienne de la ville se trouve juste de l'autre côté du canal, dans les rues traditionnellement connues comme le quartier tamoul. Ici, temples, marchés, et maisons familiales révèlent un établissement bien antérieur à l'arrivée de la Compagnie française des Indes orientales en 1674.",
    duration: "2 à 3 heures",
    body: `Pour de nombreux visiteurs, le quartier français définit Pouduchéry. Pourtant, l'histoire la plus ancienne de la ville se trouve juste de l'autre côté du canal, dans les rues traditionnellement connues comme le quartier tamoul, aujourd'hui reconnu comme Heritage Town. Ici, temples, marchés, et maisons familiales révèlent un établissement bien antérieur à l'arrivée de la Compagnie française des Indes orientales en 1674.

Le canal, aujourd'hui appelé le Grand Canal, devint la ligne de partage entre deux mondes urbains. À l'est s'étendait la ville coloniale planifiée, avec ses larges avenues et ses bâtiments publics européens. À l'ouest, les quartiers tamouls continuèrent à se développer autour des temples, des marchés, et des communautés d'artisans. Il en résulte l'un des paysages urbains les plus singuliers d'Inde, où deux traditions ont évolué côte à côte tout en restant étroitement liées.

Explorer les temples du quartier tamoul offre un aperçu de la vie religieuse et culturelle qui a façonné Pouduchéry pendant des siècles.

**Temple Manakula Vinayagar**

Bien qu'il se trouve dans l'actuel quartier français, le temple Manakula Vinayagar appartient historiquement à l'ancien établissement tamoul. Le temple existait déjà quand les Français fondèrent Pondichéry en 1674, et il resta sur son site historique malgré les tentatives répétées de l'administration coloniale, au XVIIIe siècle, de le déplacer.

Dédié à Vinayagar, la forme tamoule de Ganesha, le temple est l'un des lieux de culte les plus visités de Pouduchéry. Son gopuram plaqué or, ses sculptures colorées, ses plafonds peints, et ses salles richement décorées en font l'un des intérieurs de temple les plus impressionnants de la ville. Des pujas quotidiennes s'y tiennent tout au long de la journée, les cérémonies du matin et du soir attirant les plus grands rassemblements de fidèles.

**Temple Sri Varadaraja Perumal**

Une courte marche dans le quartier tamoul mène au temple Sri Varadaraja Perumal, l'un des principaux temples vishnouites de Pouduchéry. Dédié à Vishnou sous la forme de Varadaraja Perumal, le temple est d'origine médiévale et continue de servir de centre de culte actif. Contrairement au temple Manakula Vinayagar, plus fréquenté, il offre une expérience plus paisible, permettant d'apprécier son architecture dravidienne traditionnelle et les rythmes de la vie quotidienne du temple.

**Temple Vedapureeswarar**

Dédié à Shiva, le temple Vedapureeswarar est l'un des sanctuaires shivaïtes les plus importants de Pouduchéry. Le temple actuel date du XVIIIe siècle, après la destruction d'un temple antérieur lors des conflits coloniaux des années 1740. Reconstruit par la communauté locale, il demeure un lieu de culte actif et un rappel important de la résilience des traditions religieuses de Pouduchéry pendant une période troublée de son histoire.

**Temple Siddhivinayakar**

Souvent appelé Elai Pillaiyar Koil, ou le « Temple des pauvres », le temple Siddhivinayakar est l'un des plus anciens sanctuaires de quartier de Heritage Town. Datant du début du XVIIIe siècle, il est dédié à Vinayagar et sert des générations de résidents locaux depuis. Modeste comparé au temple Manakula Vinayagar, il offre un aperçu de la vie dévotionnelle quotidienne, loin des sites les plus touristiques de la ville. Son gopuram du XIXe siècle s'élève au-dessus des rues environnantes, tandis que la cour intérieure paisible offre un contraste bienvenu avec l'agitation extérieure.

**Un court trajet qui en vaut la peine : le temple Sri Gokilambal Thirukameshwara, Villianur**

À environ huit kilomètres à l'ouest du centre-ville se dresse le temple Sri Gokilambal Thirukameshwara, l'un des temples les plus anciens et les plus importants de la région de Pouduchéry. D'origine chola, le temple est dédié à Shiva sous la forme de Thirukameshwara et à la déesse Gokilambal. Son vaste bassin sacré, son gopuram imposant, et ses larges cours en font l'un des plus beaux exemples d'architecture de temple dravidien du territoire de l'Union.

Le temple est particulièrement réputé pour sa [fête annuelle du char](/fr/festivals/villianur-car-festival), durant laquelle l'immense char de bois est tiré à travers les rues de Villianur par des milliers de fidèles. Les visiteurs en quête d'une compréhension plus profonde du patrimoine religieux de Pouduchéry trouveront ce court trajet largement justifié, offrant une perspective qui dépasse la ville coloniale pour rejoindre le passé tamoul, bien plus ancien, de la région.

**Visiter les temples**

Une fois par an, à l'occasion de [Masi Magam](/fr/festivals/masi-magam), des dizaines de temples de la ville sortent leurs divinités de ces mêmes sanctuaires en procession jusqu'à la plage de Vaithikuppam pour un bain rituel dans la mer, l'un des plus grands rassemblements religieux que connaisse le Quartier tamoul dans l'année.

Les visiteurs sont les bienvenus dans tous ces temples, à condition de respecter les usages locaux. Les chaussures doivent être retirées avant d'entrer dans l'enceinte du temple, et une tenue modeste couvrant les épaules et les genoux est attendue. Les règles de photographie varient d'un temple à l'autre, et peuvent aussi différer selon les parties d'un même temple ; il est donc toujours préférable de chercher des panneaux ou de demander l'autorisation.

Le sanctuaire le plus intérieur est généralement réservé aux fidèles hindous, mais les visiteurs de toutes confessions sont bienvenus dans les salles et cours extérieures, où ils peuvent observer l'architecture, les rituels, et la vie dévotionnelle avec respect.`,
  },
];

export function getExploreArticleFr(id: string): ExploreArticleFr | undefined {
  return exploreArticlesFr.find((a) => a.id === id);
}
