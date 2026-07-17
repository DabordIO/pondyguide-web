export interface HotelGuideFr {
  id: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  intro?: string;
  whyHeading?: string;
  whyBody?: string;
  bestFor?: Record<string, string>;
  blurbs?: Record<string, string>;
  quickPicks?: { situation: string; recommendation: string }[];
  faq?: { question: string; answer: string }[];
}

export const hotelGuidesFr: HotelGuideFr[] = [
  {
    id: "french-heritage",
    title: "Les meilleurs hôtels patrimoniaux de Pondichéry",
    metaTitle: "5 meilleurs hôtels patrimoniaux de Pondichéry",
    metaDescription: "Cinq des meilleurs hôtels patrimoniaux de White Town, des demeures françaises restaurées à une maison de marchand tamoule vieille de 130 ans, avec ce que chacun fait de mieux.",
    intro:
      "Le plus grand avantage de White Town sur presque tout le reste de l'Inde, c'est que ses plus beaux bâtiments coloniaux ne sont pas enfermés dans un musée : ce sont des hôtels où l'on peut réellement dormir.\n\nCinq établissements définissent cette catégorie, et chacun restaure un fragment différent du passé multiple de Pondichéry : la résidence jaune moutarde d'un maire, la demeure coloniale d'un administrateur français, la maison de marchand tamoule vieille de 130 ans, une retraite boutique discrète, et une adresse en front de mer qui a la meilleure prétention au rituel quotidien le plus célèbre de la ville, la promenade du soir.\n\nIls ne sont pas interchangeables. Certains sont pensés pour la romance, d'autres pour l'histoire, et l'un vous place dans le quartier tamoul plutôt que dans le quartier français. Ce guide détaille ce que chacun fait de mieux, afin que vous puissiez associer l'hôtel au voyage plutôt que de choisir simplement le premier nom venu.",
    whyHeading: "Pourquoi les hôtels patrimoniaux de Pondichéry valent la dépense",
    whyBody:
      "Restaurer un bâtiment colonial vieux de 200 ans pour en faire un hôtel est un travail long et coûteux, et cela se voit au nombre restreint de ces établissements. La plupart ont commencé comme résidences privées : la maison d'un maire, la demeure d'un marchand, le domicile d'un fonctionnaire colonial, et les restaurations ont généralement conservé les murs épais enduits de chaux, les hauts plafonds et les cours ombragées qui rendaient ces bâtiments habitables sous la chaleur tropicale, bien avant l'existence de la climatisation.\n\nCette histoire est le véritable produit. Une chambre dans l'un de ces hôtels n'est pas qu'un simple hébergement : c'est ce qui se rapproche le plus, pour la plupart des visiteurs, de comprendre ce qu'était réellement la vie quotidienne dans la Pondichéry française, ou dans le quartier tamoul voisin. Les restaurants attachés à presque tous ces établissements prolongent cette même idée jusqu'à l'assiette, servant une cuisine franco-tamoule et créole que l'on ne trouve nulle part ailleurs en Inde.",
    bestFor: {
      "palais-de-mahe": "La meilleure adresse de luxe tout-en-un à White Town",
      "maison-perumal": "Découvrir le quartier tamoul de Pondichéry, pas seulement sa facette française",
      "le-dupleix": "Les passionnés d'histoire qui veulent dormir au cœur d'un vrai fragment du passé",
      "la-villa": "Une escapade romantique et discrète derrière des murs patrimoniaux",
      "the-promenade": "Se réveiller face à la mer, à deux pas de tout",
    },
    blurbs: {
      "palais-de-mahe":
        "Le Palais de Mahé est la référence de ce que devrait être un séjour patrimonial à White Town. Derrière sa façade jaune moutarde de la rue de Bussy, des arcades coloniales enserrent une piscine de cour qui reste fraîche même au plus fort de l'après-midi, et le rythme des lieux, petit-déjeuner qui s'étire tard le matin, baignade avant le déjeuner, dîner à l'étage au Mahé Bar, ne semble jamais précipité.\n\nC'est l'établissement pour lequel CGH Earth est le plus connu à Pondichéry, et cela se voit dans les détails : cuisine franco-tamoule et sud-indienne au restaurant du toit-terrasse, cocktails raffinés au bar, et un emplacement qui place presque tous les grands monuments de White Town à dix minutes à pied.",
      "maison-perumal":
        "Là où les autres hôtels patrimoniaux de cette liste se trouvent dans la White Town française, la Maison Perumal se situe dans le quartier tamoul, et c'est bien tout l'intérêt d'y séjourner. La demeure Chettiar vieille de 130 ans, avec ses portes en teck sculpté et ses sols d'inspiration Athangudi, raconte une histoire de Pondichéry plus ancienne que celle, coloniale, que la plupart des visiteurs découvrent en premier.\n\nLe restaurant justifie à lui seul une visite, même en séjournant ailleurs : une cuisine créole franco-tamoule qui marie fruits de mer locaux et technique française, dans une cour qui ressemble davantage à une maison familiale qu'à une salle à manger d'hôtel. Levez-vous tôt pour le marché aux fleurs et aux épices de la rue Jawaharlal Nehru, à quelques minutes à pied.",
      "le-dupleix":
        "Le Dupleix est moins un hôtel qu'une occasion de dormir au cœur d'un fragment précis de l'histoire de Pondichéry. Le bâtiment fut autrefois la demeure d'un maire français, et son nom commémore le gouverneur dont les ambitions impériales firent brièvement de cette ville la capitale de fait du Deccan. Des murs de maçonnerie épais et une paisible cour centrale lui donnent un caractère résidentiel et discret que les plus grands établissements patrimoniaux n'ont pas.\n\nSon emplacement fait une grande partie du travail : Notre-Dame des Anges, Raj Nivas et la statue en bronze de Dupleix sont tous à quelques pas, si bien qu'un séjour ici équivaut à une leçon d'histoire en autonomie, sans jamais ressembler à un devoir.",
      "la-villa":
        "La Villa est l'option discrète de cette liste, le genre d'adresse qui ne se révèle qu'une fois le portail franchi. Derrière de hauts murs patrimoniaux, une piscine isolée s'encadre d'une végétation tropicale, et le restaurant du même nom, l'un des plus respectés de White Town, propose une cuisine franco-tamoule et européenne de saison, aux hôtes comme aux dîneurs extérieurs.\n\nPeu de signalétique, aucune entrée grandiose : c'est exactement ce qui séduit les voyageurs en quête d'un séjour romantique et tranquille, loin de l'agitation d'un plus grand établissement. L'Ashram de Sri Aurobindo et l'Alliance Française sont tous deux à quelques minutes à pied.",
      "the-promenade":
        "Aucun hôtel de cette liste ne vous rapproche autant de la mer que The Promenade. Il se trouve juste en face de l'avenue Goubert, si bien que le rythme quotidien du front de mer pondichérien, pêcheurs à l'aube, marcheurs tout au long de la journée, toute la ville dehors pour le rituel du soir une fois la route fermée à la circulation, se déroule juste devant la porte.\n\nC'est aussi le choix le plus central de cette liste : cafés, galeries et monuments coloniaux de White Town sont tous à distance de marche facile, et Le Café, l'institution en front de mer gérée par l'Ashram, se trouve juste à l'extrémité nord de la promenade pour un premier café sans effort.",
    },
    quickPicks: [
      { situation: "Un séjour romantique et discret", recommendation: "La Villa" },
      { situation: "Les passionnés d'histoire qui veulent plus qu'une plaque", recommendation: "Le Dupleix" },
      { situation: "Découvrir la facette tamoule de Pondichéry, pas seulement française", recommendation: "Maison Perumal" },
      { situation: "Se réveiller à deux pas de la mer", recommendation: "The Promenade" },
      { situation: "Le meilleur choix polyvalent à White Town", recommendation: "Palais de Mahé" },
      { situation: "Premier séjour à Pondichéry, tout vouloir en un seul hôtel", recommendation: "Palais de Mahé ou The Promenade" },
    ],
    faq: [
      { question: "Quel est le meilleur hôtel patrimonial de Pondichéry ?", answer: "Cela dépend de ce que vous attendez de White Town. Le Palais de Mahé offre l'expérience de luxe la plus complète, tandis que Le Dupleix convient aux voyageurs qui souhaitent un séjour plus modeste, centré sur l'histoire." },
      { question: "Les hôtels patrimoniaux de Pondichéry sont-ils chers ?", answer: "La plupart se situent dans la gamme haut de gamme à luxe, reflétant le coût de la restauration de bâtiments de l'époque coloniale. Le Dupleix est généralement le plus accessible des cinq." },
      { question: "Vaut-il la peine de séjourner dans le quartier tamoul plutôt qu'à White Town ?", answer: "La Maison Perumal est le seul établissement de cette liste en dehors de White Town, et elle offre une facette de la ville authentiquement différente et moins touristique. La plupart des visiteurs de première visite restent toutefois mieux servis par une base à White Town." },
      { question: "Ces hôtels ont-ils leur propre restaurant ?", answer: "Oui, et dans plusieurs cas le restaurant est une destination à part entière, en particulier au Palais de Mahé, à La Villa et à la Maison Perumal." },
    ],
  },

  {
    id: "boutique",
    title: "Les meilleurs hôtels boutique de Pondichéry",
    metaTitle: "5 meilleurs hôtels boutique de Pondichéry",
    metaDescription: "Cinq des meilleurs hôtels boutique de Pondichéry, d'un toit-terrasse design à une destination gastronomique créole, avec ce que chacun fait de mieux.",
    intro:
      "Un bon séjour à Pondichéry n'a pas toujours besoin d'une grande façade coloniale et d'un spa complet. Les hôtels boutique de White Town prouvent le contraire : cinq établissements plus petits et plus personnels, où le caractère vient de l'architecture restaurée et d'une hospitalité sincère plutôt que de l'ampleur des installations.\n\nChacun fait quelque chose de différent. L'un se trouve dans la rue la plus intéressante de White Town. Un autre est construit autour de son propre restaurant. Un troisième offre la meilleure vue sur toit-terrasse du quartier. Ce guide détaille ce que chacun fait de mieux, pour choisir selon ce que vous attendez réellement du séjour plutôt que selon un simple classement d'étoiles.",
    whyHeading: "Ce qui distingue un hôtel boutique d'un hôtel patrimonial à Pondichéry",
    whyBody:
      "Les grands hôtels patrimoniaux de Pondichéry sont souvent des établissements plus vastes, gérés de façon professionnelle par des groupes hôteliers, avec l'ampleur et le raffinement que cela suppose. La catégorie boutique est plus petite par nature : d'anciennes résidences privées comptant une poignée de chambres, gérées avec un niveau d'attention personnelle qui ne fonctionne qu'à cette échelle.\n\nCe compromis mérite d'être compris avant de réserver. Vous renoncez à certaines installations, un hôtel de six chambres n'égalera jamais un établissement de trente chambres en équipements, mais vous gagnez un type d'hospitalité et d'intimité architecturale que les grandes propriétés ne peuvent reproduire. Plusieurs de ces hôtels sont d'ailleurs autant connus pour leur restaurant que pour leurs chambres, ce qui est inhabituel en dehors des adresses les plus établies de White Town.",
    bestFor: {
      "villa-shanti": "Être en plein cœur de la meilleure rue de White Town",
      "villa-helena": "Un séjour calme et personnel, avec une vraie culture de la véranda",
      "gratitude-heritage": "Une hospitalité chaleureuse et personnelle, à un budget encore modeste",
      "dune-de-lorient": "La cuisine créole franco-tamoule autant que la chambre",
      "petit-palais": "Des vues sur toit-terrasse par-dessus les toits de tuiles de White Town",
    },
    blurbs: {
      "villa-shanti":
        "Le plus grand atout de Villa Shanti, c'est son adresse. La rue Suffren est devenue peu à peu la rue la plus intéressante de White Town, bordée des galeries, boutiques de design et cafés qui définissent la facette créative du quartier, et l'hôtel se trouve en plein cœur de cette rue, derrière une façade patrimoniale qui ne laisse rien deviner du design contemporain à l'intérieur.\n\nLe restaurant de l'hôtel, qui partage sa direction avec La Villa, est une véritable destination à part entière plutôt qu'une simple commodité pour les hôtes, construit autour d'une cuisine franco-tamoule de saison et de l'une des meilleures cartes des vins de la ville. La rue Romain Rolland, l'une des plus belles rues de White Town pour l'architecture, court parallèlement à un pâté de maisons au nord.",
      "villa-helena":
        "Villa Helena échange l'ampleur contre l'intimité. C'est une demeure coloniale privée plutôt qu'un hôtel au sens conventionnel, et ses vérandas, un élément de l'architecture de White Town que la plupart des bâtiments ont perdu au fil des rénovations, sont encore bien vivantes : les matinées ici se passent à regarder le quartier s'éveiller depuis un balcon du premier étage plutôt qu'à consulter un itinéraire.\n\nC'est aussi l'une des bases les plus tranquilles de cette liste, à distance de marche de la Bibliothèque Romain Rolland et du parc Bharati plutôt qu'en plein cœur des rues les plus animées de White Town, ce qui convient aux voyageurs qui veulent du caractère patrimonial sans un flot constant de passants.",
      "gratitude-heritage":
        "Gratitude Heritage fait avec chaleur ce que d'autres établissements font avec l'ampleur. La demeure patrimoniale restaurée conserve ses proportions d'origine et son atmosphère domestique paisible, et l'hospitalité y penche vers le personnel plutôt que le poli : un personnel qui donne de vraies recommandations de restaurants et de galeries plutôt que de réciter un script, et un degré de familiarité tel que beaucoup d'hôtes finissent leur séjour en appelant l'équipe par son prénom.\n\nL'établissement se trouve à distance facile de la rue Dumas et de la rue Romain Rolland, deux des rues les plus architecturalement cohérentes de White Town, et à courte marche du musée de Pondichéry, ce qui en fait un bon choix pour les voyageurs qui veulent du caractère patrimonial sans les prix des hôtels patrimoniaux.",
      "dune-de-lorient":
        "Le restaurant de Dune de l'Orient est sans doute la raison de réserver ici. C'est l'une des introductions les plus claires à la cuisine créole franco-tamoule de Pondichéry en ville, bâtie sur des recettes qui marient technique française, ingrédients tamouls et produits côtiers, et y dîner équivaut à un cours accéléré sur cette tradition culinaire elle-même.\n\nLes chambres offrent le même équilibre entre architecture d'époque et confort, organisées autour de cours colorées à courte marche de Notre-Dame des Anges et des galeries indépendantes regroupées juste derrière. Un choix évident pour les voyageurs gourmands qui ne veulent pas choisir entre un bon hôtel et un bon repas.",
      "petit-palais":
        "Petit Palais offre quelque chose qu'aucun autre établissement boutique de cette liste ne propose : un toit-terrasse qui dévoile toute la grille française ordonnée de White Town, toits de tuiles, clochers d'église et un mince ruban argenté de la baie du Bengale à l'horizon. Une façon différente et surélevée de comprendre une ville que la plupart des visiteurs ne voient jamais qu'au niveau de la rue.\n\nLa piscine sur le toit fait de cette vue un lieu où l'on revient tout au long de la journée plutôt qu'on ne l'admire une seule fois, et l'emplacement de l'hôtel, proche du Jardin botanique, du musée de Pondichéry et du parc Bharati, garde la plupart des sites culturels de White Town à distance de marche facile.",
    },
    quickPicks: [
      { situation: "Être dans la meilleure rue de White Town", recommendation: "Villa Shanti" },
      { situation: "Un séjour patrimonial calme et personnel", recommendation: "Villa Helena" },
      { situation: "Une hospitalité chaleureuse à budget plus modeste", recommendation: "Gratitude Heritage" },
      { situation: "Les voyageurs gourmands", recommendation: "Dune de l'Orient" },
      { situation: "La meilleure vue de White Town", recommendation: "Petit Palais" },
      { situation: "Premier séjour à White Town, vouloir être central", recommendation: "Villa Shanti ou Petit Palais" },
    ],
    faq: [
      { question: "Quelle est la différence entre un hôtel patrimonial et un hôtel boutique à Pondichéry ?", answer: "La frontière est floue, mais en général les grands hôtels patrimoniaux sont des établissements de luxe plus polis et gérés professionnellement, tandis que ces options boutique sont plus petites et personnelles, souvent gérées avec l'intimité d'une maison privée." },
      { question: "Quel hôtel boutique convient le mieux aux gourmets ?", answer: "Dune de l'Orient et Villa Shanti ont tous deux des restaurants considérés comme des destinations à part entière, pas de simples salles à manger d'hôtel." },
      { question: "Ces hôtels sont-ils à distance de marche des principaux sites de White Town ?", answer: "Oui, les cinq se trouvent à l'intérieur ou immédiatement à côté de White Town, à distance de marche facile de la Promenade, de l'Ashram de Sri Aurobindo et des principales rues patrimoniales." },
      { question: "Quelle est l'option la plus abordable ?", answer: "Gratitude Heritage offre généralement du caractère patrimonial à un prix plus accessible que les autres établissements de cette liste." },
    ],
  },

  {
    id: "family",
    title: "Les meilleurs hôtels familiaux de Pondichéry",
    metaTitle: "5 meilleurs hôtels familiaux de Pondichéry",
    metaDescription: "Cinq hôtels adaptés aux familles à Pondichéry, avec de vraies piscines, de l'espace pour se déployer et un accès facile à White Town, Auroville et la côte.",
    intro:
      "Une demeure restaurée du XIXᵉ siècle avec trois chambres est un lieu merveilleux pour une lune de miel et un endroit véritablement compliqué à gérer avec des enfants, de la famille élargie ou une semaine de bagages. Ces cinq hôtels résolvent ce problème autrement : de l'espace, des piscines, du stationnement et des installations complètes, sans renoncer à un accès facile à White Town et à la côte.\n\nChacun mise sur un atout légèrement différent : l'un est pensé pour une arrivée en voiture, un autre pour un séjour prolongé, un autre encore est une institution locale fiable depuis des décennies. Ce guide détaille lequel convient le mieux à votre voyage.",
    whyHeading: "Pourquoi les familles s'en sortent mieux en dehors des hôtels patrimoniaux de White Town",
    whyBody:
      "Les demeures coloniales restaurées de White Town sont romantiques, mais la plupart n'ont pas été conçues en pensant aux enfants, à plusieurs générations ou à une semaine de bagages : escaliers étroits, poignée de chambres, et cours pensées pour le calme plutôt que pour l'activité. Les cinq hôtels de cette liste résolvent un autre problème : des séjours confortables, spacieux et tout compris, qui rendent un voyage de plusieurs jours à Pondichéry plus facile à gérer.\n\nCela ne signifie pas renoncer entièrement au caractère de la ville. Chacun de ces hôtels se trouve assez proche de White Town, de la Promenade ou d'Auroville pour faciliter les excursions à la journée, tout en offrant une piscine, un parking et de l'espace pour se déployer, que les établissements patrimoniaux boutique ne peuvent généralement pas égaler.",
    bestFor: {
      "accord-puducherry": "Un confort complet si vous arrivez en voiture",
      "the-residency-towers": "Un confort contemporain raffiné pour les longs séjours",
      "shenbaga-hotel": "Un établissement fiable et polyvalent, qui a fait ses preuves depuis des décennies",
      "anandha-inn": "Une base centrale et sans complications pour les visiteurs de première visite",
      "hotel-atithi": "Les road trips et l'accès facile aux marchés du quartier tamoul",
    },
    blurbs: {
      "accord-puducherry":
        "Accord Puducherry est pensé pour la partie du voyage qui n'est pas dédiée aux visites. Après les rues étroites de White Town, la foule des temples et la promenade en bord de mer, un hôtel spacieux et climatisé, avec une généreuse piscine et un parking facile, cesse de ressembler à un compromis pour devenir une bonne planification.\n\nC'est aussi l'une des meilleures bases pour combiner un séjour à Pondichéry avec des excursions à la journée : le Jardin botanique, la traversée en bateau de Chunnambar vers Paradise Beach et le centre d'accueil d'Auroville sont tous à distance confortable, ce qui en fait un choix pratique pour les familles voyageant en voiture.",
      "the-residency-towers":
        "The Residency Towers soigne les fondamentaux plutôt que de courir après une atmosphère coloniale : chambres spacieuses, service efficace, et une piscine sur le toit-terrasse réellement utile après une journée de visites sous la chaleur. Il convient aux familles et aux couples qui recherchent un confort fiable plus qu'un caractère patrimonial.\n\nSon emplacement garde White Town, la Promenade et le quartier tamoul tous à portée facile, et il se trouve près de la basilique du Sacré-Cœur et du musée de Pondichéry, deux des meilleures étapes culturelles pour une matinée avec des enfants.",
      "shenbaga-hotel":
        "Shenbaga est depuis des décennies l'un des hôtels complets fiables de Pondichéry, et il doit cette réputation à la constance plutôt qu'au spectaculaire. Il ne cherche pas à rivaliser avec les demeures patrimoniales de White Town, il se concentre sur des chambres confortables et un service qui fonctionne simplement, ce qui compte davantage que l'atmosphère lors d'un voyage en famille au programme chargé.\n\nSon emplacement en dehors du cœur colonial restauré signifie aussi que vous découvrez une facette plus quotidienne de Pondichéry, avec le parc Bharati, le temple de Manakula Vinayagar et le Monument aux morts français tous à courte distance en voiture ou à pied.",
      "anandha-inn":
        "La principale force d'Anandha Inn est simple : des décennies d'expérience à accueillir des familles et un emplacement qui facilite la planification du reste du voyage. Il se trouve juste au-delà du cœur patrimonial de White Town, assez proche pour un accès facile, mais connecté au rythme quotidien de Pondichéry, ses marchés, ses temples et ses cafés de quartier.\n\nC'est aussi une base sensée pour une excursion d'une demi-journée à Auroville, avec le centre d'accueil et la promenade ombragée jusqu'au point d'observation du Matrimandir à courte distance, et la fameuse glace fabriquée à Auroville à quelques minutes en voiture dans l'autre direction.",
      "hotel-atithi":
        "Hotel Atithi convient bien aux familles ou aux groupes en road trip à travers le Tamil Nadu, offrant des chambres confortables et une piscine sur le toit sans formalité superflue. Son emplacement près de la rue Mission et de la rue Nehru, le véritable cœur commercial de la ville plutôt que son centre touristique restauré, donne un sens plus ancré de la Pondichéry du quotidien.\n\nPour les lève-tôt, le marché aux poissons matinal voisin et un trajet vers le nord jusqu'à Serenity Beach offrent un début de journée mémorable et hors des sentiers battus, bien au-delà de l'itinéraire habituel de White Town.",
    },
    quickPicks: [
      { situation: "Arriver en voiture, vouloir des installations complètes", recommendation: "Accord Puducherry" },
      { situation: "Longs séjours, confort contemporain", recommendation: "The Residency Towers" },
      { situation: "Bon rapport qualité-prix avec des décennies de fiabilité", recommendation: "Shenbaga Hotel & Convention Centre" },
      { situation: "Visiteurs de première visite en quête d'une base centrale et simple", recommendation: "Anandha Inn" },
      { situation: "Road trip en famille dans le Tamil Nadu", recommendation: "Hotel Atithi" },
    ],
    faq: [
      { question: "Ces hôtels sont-ils à distance de marche de White Town ?", answer: "La plupart nécessitent un court trajet en voiture plutôt qu'une marche, ce qui est le compromis pour l'espace et les installations supplémentaires dont les familles ont généralement besoin. Anandha Inn et Hotel Atithi sont les plus proches du cœur patrimonial." },
      { question: "Ces hôtels ont-ils des piscines ?", answer: "Oui, les cinq disposent de piscines, généralement sur le toit-terrasse, ce qui compte beaucoup vu la chaleur de Pondichéry." },
      { question: "Lequel convient le mieux pour combiner Pondichéry avec Auroville ?", answer: "Accord Puducherry et Anandha Inn sont tous deux bien placés pour une excursion à la journée à Auroville en complément des visites en ville." },
      { question: "Ces hôtels sont-ils plus abordables que les établissements patrimoniaux de White Town ?", answer: "Généralement oui. Cette catégorie privilégie l'espace et les installations plutôt que l'architecture coloniale restaurée, ce qui se traduit habituellement par un prix inférieur à celui des hôtels patrimoniaux." },
    ],
  },

  {
    id: "backpacker",
    title: "Les meilleures auberges de Pondichéry pour routards",
    metaTitle: "5 meilleures auberges de Pondichéry pour routards",
    metaDescription: "Cinq des meilleures auberges et séjours économiques de Pondichéry, du cœur social de la scène routarde à des chambres calmes pour les longs séjours.",
    intro:
      "La scène routarde de Pondichéry s'est développée tranquillement aux côtés de ses hôtels patrimoniaux, et elle a son propre caractère : des vélos plutôt que des taxis, des excursions en scooter le long de la côte vers Auroville, et des auberges où un voyage en solo reste rarement solitaire bien longtemps.\n\nCes cinq établissements couvrent tout l'éventail, de l'auberge la plus sociale de la ville à des séjours économiques plus calmes pour les voyageurs qui veulent de l'intimité sans les prix des hôtels patrimoniaux. Ce guide détaille lequel convient à votre voyage, qu'il s'agisse de rencontrer du monde, de travailler à distance, ou simplement de trouver une chambre propre et bon marché entre deux visites.",
    whyHeading: "Pourquoi Pondichéry fonctionne si bien pour les routards",
    whyBody:
      "Pondichéry est assez compacte pour se couvrir à vélo, assez détendue pour que personne ne semble pressé, et assez proche d'Auroville et des plages du nord pour qu'une auberge ici serve aussi de base pour toute la région, pas seulement pour la ville elle-même. Cette combinaison a fait naître une véritable scène routarde autour de White Town et de ses abords, distincte de la clientèle des hôtels patrimoniaux du centre.\n\nLes cinq séjours de cette liste se répartissent en deux groupes : des auberges sociales, à dortoirs, construites autour de la rencontre d'autres voyageurs, et des séjours économiques plus calmes pour ceux qui veulent leur propre chambre sans payer le prix d'un hôtel patrimonial. Aucun n'est meilleur que l'autre : tout dépend du voyage que vous vivez.",
    bestFor: {
      "zostel-pondicherry": "L'auberge la plus sociale de la scène routarde",
      "micasa-hostels": "Un confort calme et durable pour les télétravailleurs",
      "time-travellers-hostel": "Les plans spontanés et une base facile pour les road trips",
      "hotel-coramandal-heritage": "Le caractère patrimonial à un vrai prix économique",
      "villa-krish": "Un séjour calme et indépendant, entre auberge et hôtel",
    },
    blurbs: {
      "zostel-pondicherry":
        "Zostel est le centre social de la scène routarde de Pondichéry, le genre d'auberge où les conversations du petit-déjeuner se transforment en tournées de cafés l'après-midi, et où quelqu'un a toujours une recommandation de plage, de restaurant ou d'événement à Auroville dont vous n'aviez pas entendu parler. De généreux espaces communs et un Wi-Fi fiable la rendent tout aussi adaptée aux nomades numériques qui s'installent pour un moment.\n\nElle se trouve un peu en dehors du cœur de White Town, ce qui convient à son approche de la ville axée sur le vélo : White Town, Rock Beach et la Promenade du soir sont tous à quelques coups de pédale, avec des trajets plus longs vers le nord menant à Serenity Beach et Auroville le long de l'East Coast Road.",
      "micasa-hostels":
        "Micasa échange l'activité constante contre quelque chose de plus calme : une auberge qui ressemble davantage à une maison accueillant peu à peu de nouveaux résidents qu'à un lieu de passage. Elle convient particulièrement aux voyageurs de longue durée et aux télétravailleurs, avec des espaces de travail confortables et une communauté qui se construit lentement plutôt que d'un seul coup.\n\nElle est bien placée pour explorer à pied les boulangeries de White Town et la Promenade du soir, et à courte marche de l'Alliance Française, rue Suffren, dont les projections de films et les expositions sont un bon moyen de rencontrer la scène créative de la ville.",
      "time-travellers-hostel":
        "Time Travellers a l'énergie libre et spontanée des meilleures auberges routardes, où les plans faits au petit-déjeuner sont abandonnés à midi pour quelque chose de mieux. Elle fonctionne particulièrement bien comme base pour explorer au-delà de la ville : louer un scooter pour la route côtière vers le nord, une excursion d'une journée à Auroville, ou même le trajet plus long jusqu'à Mahabalipuram.\n\nL'atmosphère est informelle et créative plutôt que polie, et elle convient bien aux voyageurs en solo et aux petits groupes qui préfèrent laisser la journée se dérouler plutôt que de figer un itinéraire.",
      "hotel-coramandal-heritage":
        "Hotel Coramandal Heritage est le rare établissement à offrir un véritable caractère de White Town à un prix réellement accessible. Les hauts plafonds et les proportions traditionnelles lui donnent l'atmosphère de l'un des séjours patrimoniaux les plus anciens du quartier, sans le prix qui accompagne habituellement un bâtiment colonial restauré.\n\nSon emplacement vous place au cœur des meilleures promenades matinales de White Town, devant l'Ashram de Sri Aurobindo et Focus Bookshop rue Suffren, avant que les rues ne se remplissent et que la chaleur ne s'installe, ce qui suffirait à justifier une réservation même sans compter le tarif avantageux.",
      "villa-krish":
        "Villa Krish se situe dans l'entre-deux d'un hôtel boutique et d'une auberge : plus de personnalité qu'un hôtel économique standard, plus d'intimité qu'un séjour animé en dortoir. Des chambres simples et confortables et un accueil chaleureux mais discret conviennent aux couples et aux voyageurs indépendants qui veulent passer leurs journées dehors plutôt que dans un espace commun.\n\nElle est à distance de marche facile de la Promenade, de l'Ashram de Sri Aurobindo et des ateliers d'artisans de la rue Suffren, ce qui en fait une base pratique pour les voyageurs qui veulent explorer White Town entièrement à pied.",
    },
    quickPicks: [
      { situation: "La plus sociale, la plus facile pour rencontrer du monde", recommendation: "Zostel Pondicherry" },
      { situation: "Longs séjours et télétravail", recommendation: "Micasa Hostels" },
      { situation: "Plans spontanés et road trips en scooter", recommendation: "Time Travellers Hostel" },
      { situation: "Caractère patrimonial à budget réel", recommendation: "Hotel Coramandal Heritage" },
      { situation: "Un séjour économique calme et indépendant", recommendation: "Villa Krish" },
    ],
    faq: [
      { question: "Quelle est la différence entre ces auberges et les hôtels économiques de Pondichéry ?", answer: "Zostel, Micasa et Time Travellers sont des auberges à dortoirs et espaces sociaux construites autour de la rencontre d'autres voyageurs. Hotel Coramandal Heritage et Villa Krish sont des séjours économiques plus calmes, en chambre privée, pour les voyageurs qui veulent tout de même leur propre espace." },
      { question: "Quelle auberge convient le mieux au télétravail ?", answer: "Micasa Hostels est la plus orientée vers les séjours longs et axés sur le travail, avec un Wi-Fi fiable et un espace de travail dédié." },
      { question: "Certaines sont-elles à distance de marche de White Town ?", answer: "Hotel Coramandal Heritage et Villa Krish se trouvent toutes deux à l'intérieur ou immédiatement à côté de White Town. Les trois auberges sont à un court trajet à vélo ou en scooter plutôt qu'à pied." },
      { question: "Pondichéry est-elle une bonne base pour les routards explorant plus loin ?", answer: "Oui. Serenity Beach, Auroville et même Mahabalipuram sont tous des excursions réalistes à la journée ou en scooter depuis chacun de ces cinq établissements, ce qui explique en partie pourquoi la scène routarde s'est développée dans cette partie de la ville." },
    ],
  },

  {
    id: "coastal-wellness",
    title: "Les meilleurs complexes balnéaires près de Pondichéry",
    metaTitle: "5 meilleurs complexes balnéaires près de Pondichéry",
    metaDescription: "Cinq des meilleurs complexes de plage, de lagune et de bien-être près de Pondichéry, d'un complexe à échelle familiale à un éco-village axé sur la durabilité.",
    intro:
      "Pondichéry ne se résume pas aux rues coloniales de White Town. Au sud comme au nord de la ville, le littoral s'ouvre sur des lagunes, des bosquets de filaos et des plages plus tranquilles, et cinq complexes et retraites tirent le meilleur parti de ce cadre, chacun avec sa propre idée de ce que devrait être une pause côtière.\n\nCertains sont pensés pour l'espace familial, d'autres pour un véritable isolement, et l'un mise pleinement sur l'art et la durabilité plutôt que sur une expérience de complexe conventionnelle. Ce guide détaille lequel convient à votre voyage, et s'il vaut la peine de le combiner avec quelques jours à White Town.",
    whyHeading: "Pourquoi quitter White Town pour la côte",
    whyBody:
      "White Town récompense la marche et l'exploration lente, mais c'est tout de même un centre-ville historique dense, et après quelques jours de rues coloniales et de cafés en cafés, beaucoup de visiteurs veulent l'inverse : de l'espace ouvert, une vraie piscine, et un tronçon de littoral qui ne soit pas partagé avec une promenade pleine de marcheurs du soir. C'est à cela que sert cette catégorie d'hôtels.\n\nChacun des cinq travaille une version légèrement différente de cette idée : un complexe en bord de lagune, un établissement balnéaire international, un complexe à échelle familiale, une retraite bien-être plus tranquille, et un éco-village axé sur l'art et la durabilité. Aucun ne remplace un séjour à White Town, mais combiné à l'un d'eux, il complète parfaitement un voyage à Pondichéry.",
    bestFor: {
      "le-pondy": "Entre la mer et la lagune, véritablement à l'écart de la ville",
      "radisson-resort": "La fiabilité d'une enseigne internationale avec un accès facile à Auroville",
      "club-mahindra": "Le complexe le plus spacieux pour un voyage familial multigénérationnel",
      "ocean-spray": "Une retraite tranquille en bord de lagune pour ralentir pleinement",
      "dune-eco-village": "L'art, la nature et la durabilité plutôt qu'un complexe standard",
    },
    blurbs: {
      "le-pondy":
        "Le Pondy marque le moment où un voyage à Pondichéry cesse d'être une affaire de cafés et de rues coloniales pour devenir une affaire de côte. Situé entre la baie du Bengale et les paisibles eaux calmes de Chunnambar, il est pensé pour ralentir : des villas ouvrant sur des jardins, des piscines privées ou la lagune, et une traversée en bateau vers Paradise Beach qui fait autant partie de l'expérience que la plage elle-même.\n\nC'est une véritable évasion plutôt qu'une base pratique, ce qui convient davantage aux couples et aux jeunes mariés qu'aux voyageurs qui veulent continuer à explorer White Town au jour le jour. La lumière changeante sur la lagune, pâle et immobile à l'aube, chaude et cuivrée le soir, suffit à elle seule à justifier le choix.",
      "radisson-resort":
        "Radisson Resort Pondicherry Bay offre ce qu'une enseigne internationale offre généralement : de larges pelouses, une architecture contemporaine et l'assurance d'un niveau constant, dans un cadre qui reste résolument côtier plutôt que corporate. Il convient aux familles et aux couples qui veulent de l'espace de complexe sans renoncer à un accès facile aux visites.\n\nSon emplacement se prête bien à la combinaison de détente et d'excursions : White Town, Serenity Beach et Auroville, y compris la zone d'observation du Matrimandir, sont tous à une distance raisonnable en voiture, ce qui en fait l'une des bases les plus pratiques de cette liste pour les visiteurs arrivant en voiture.",
      "club-mahindra":
        "Club Mahindra Puducherry est construit autour de l'espace : de larges pelouses, des jardins tropicaux et assez de place pour que chaque génération d'un voyage familial trouve son propre rythme, que ce soit la piscine, les jardins ou une véranda tranquille. Il s'agit moins de cocher les sites de Pondichéry que de vraies vacances en famille, sans hâte, sur la côte.\n\nCe tronçon de littoral appartient encore largement aux communautés de pêcheurs locales, et observer les bateaux partir en mer avant le lever du soleil puis revenir avec la pêche du matin est l'une des choses les plus apaisantes à faire sans même quitter le complexe.",
      "ocean-spray":
        "Ocean Spray est l'établissement le plus tranquille de cette liste, construit autour d'une vaste lagune plutôt que de la mer ouverte, avec un rythme qui se révèle progressivement plutôt que d'un seul coup. C'est un excellent choix pour les voyageurs en quête d'une véritable pause bien-être, regarder l'eau passer de l'argenté au bleu profond puis au cuivre au fil de la journée, plutôt qu'un complexe rempli d'activités.\n\nSa faune ailée mérite à elle seule le séjour pour les amateurs de nature, avec aigrettes, martins-pêcheurs et cormorans visitant régulièrement la lagune, en particulier aux heures plus calmes du matin et de fin d'après-midi.",
      "dune-eco-village":
        "Dune Eco Village & Spa est moins un complexe qu'une petite communauté axée sur la durabilité, où chaque cottage a son propre caractère et où sculptures et fragments architecturaux récupérés surgissent le long des chemins sans prévenir. C'est le choix évident pour les voyageurs qui veulent de l'art, de la nature et une façon de voyager vraiment différente plutôt qu'un séjour balnéaire standard.\n\nIl se trouve près de Serenity Beach pour une promenade matinale et sur la route vers les terres reforestées remarquables d'Auroville, ce qui en fait une base naturelle pour combiner bien-être et la communauté la plus singulière de la région, juste un peu plus haut sur la côte.",
    },
    quickPicks: [
      { situation: "Une escapade côtière romantique et totalement isolée", recommendation: "Le Pondy" },
      { situation: "Le confort d'une enseigne internationale avec un accès facile à Auroville", recommendation: "Radisson Resort Pondicherry Bay" },
      { situation: "Les vacances familiales multigénérationnelles", recommendation: "Club Mahindra Puducherry" },
      { situation: "Une véritable pause bien-être", recommendation: "Ocean Spray" },
      { situation: "Art, nature et durabilité", recommendation: "Dune Eco Village & Spa" },
    ],
    faq: [
      { question: "À quelle distance ces complexes se trouvent-ils de White Town ?", answer: "Les cinq se situent en dehors du centre de Pondichéry, généralement à 20 à 40 minutes de route, ce qui est le compromis pour un accès direct à la côte et aux lagunes." },
      { question: "Lequel de ces complexes convient le mieux à une lune de miel ?", answer: "Le Pondy est l'option la plus romantique et la plus isolée, située entre la mer et les eaux calmes de Chunnambar." },
      { question: "Certains conviennent-ils pour combiner un séjour côtier avec une visite d'Auroville ?", answer: "Oui, Radisson Resort Pondicherry Bay et Dune Eco Village & Spa sont tous deux bien placés pour une excursion à la journée à Auroville en complément du temps passé à la plage." },
      { question: "Vaut-il la peine de séjourner sur la côte plutôt qu'à White Town ?", answer: "Cela dépend du voyage. Si les rues patrimoniales et les cafés sont la priorité, restez à White Town. Si vous voulez du temps à la plage, du bien-être ou une vraie coupure avec les visites, ces cinq options conviennent mieux, idéalement en complément de quelques jours à White Town plutôt qu'à sa place." },
    ],
  },
];

export function getHotelGuideFr(id: string): HotelGuideFr | undefined {
  return hotelGuidesFr.find(g => g.id === id);
}
