// Sections, photos et identifiants repris de data/practical.ts — voir ce fichier pour les champs non traduits.

export interface PracticalTopicFr {
  id: string;
  title: string;
  summary: string;
  body: string;
  faq?: { question: string; answer: string }[];
}

export const practicalTopicsFr: PracticalTopicFr[] = [
  // ── TRANSPORT ──────────────────────────────────────────────────────────────

  {
    id: "getting-to-pondicherry",
    title: "Se rendre à Pondichéry",
    summary:
      "Pondichéry est à 3 heures de Chennai par la route ou le rail. Il n'existe pas de liaison aérienne directe digne de ce nom : prenez l'avion jusqu'à Chennai, puis un bus ou un train vers le sud.",
    body: `**En bus depuis Chennai**

Le bus d'État depuis la gare routière CMBT de Chennai jusqu'à Pondichéry prend environ quatre heures et coûte environ 190 roupies. C'est basique : pas de climatisation, rangées de cinq sièges, fenêtres ouvertes. Achetez votre billet auprès du receveur à bord. Le bus dépose au terminal d'État de Pondichéry, à 30-45 minutes à pied de White Town (ou 10 minutes en auto-rickshaw).

Des bus privés circulent sur le même trajet avec plus de confort : climatisation, meilleurs sièges, et parfois des couchettes pour les services de nuit. Réservez via Abhibus, Redbus, ou la plateforme 12Go. Vérifiez toujours les points de prise en charge et de dépose : les bus privés utilisent rarement le terminal d'État.

**En train**

La gare de Pondichéry se trouve au centre-ville, à environ 15 minutes à pied de White Town ou cinq minutes en auto-rickshaw. Des liaisons ferroviaires directes relient Pondichéry à Chennai, Mangalore, et quelques villes du sud de l'Inde. Réservez 60 jours à l'avance via 12Go ou IRCTC : les billets s'épuisent vite sur les trajets populaires.

**En taxi**

Un taxi privé depuis Chennai prend environ trois heures et constitue l'option la plus flexible si vous voyagez avec des bagages ou arrivez tard. Depuis Bengaluru : six heures. Depuis Coimbatore : sept heures. Depuis Mysore : huit heures. Réservez via 12Go ou organisez-le à l'avance via votre hébergement.

**En avion**

Prenez l'avion jusqu'à l'aéroport international de Chennai, qui dessert toutes les grandes villes indiennes et un certain nombre de destinations internationales (Dubaï, Kuala Lumpur, Colombo). Pondichéry dispose d'un petit aéroport aux services programmés très limités : ne comptez pas dessus.

**En savoir plus**

Pour le détail complet des trajets, tarifs et plateformes de réservation pour chaque option, consultez notre guide complet pour [se rendre à Pondichéry](/fr/plan/getting-here).`,
  },
  {
    id: "getting-around",
    title: "Se déplacer à Pondichéry",
    summary:
      "White Town et le quartier français sont compacts et se découvrent au mieux à pied. Les auto-rickshaws couvrent tout le reste. Les autos partagés suivent des itinéraires fixes à très bas prix.",
    body: `**À pied**

Le quartier français est assez petit pour être traversé en 20 minutes à pied. Presque tout, à White Town (cafés, rues patrimoniales, la promenade, temples, sites), se trouve à 10-15 minutes à pied de n'importe quel point du quadrillage. La marche est la bonne façon de l'explorer. Partez tôt le matin : dès 7h, la lumière est superbe et les rues quasiment vides.

**En auto-rickshaw**

Les auto-rickshaws constituent le principal moyen de transport entre White Town et le reste de Pondichéry (la gare, le terminal de bus, le quartier tamoul). Hélez-en un dans la rue et mettez-vous d'accord sur un prix avant de monter. Pour de courtes distances dans le centre, 50 à 100 roupies est habituel.

**En auto partagé**

Les auto-rickshaws partagés fonctionnent comme des minibus informels : faites signe à l'un d'eux, indiquez votre destination, et payez à l'arrivée si le chauffeur va dans cette direction. Les tarifs sont très bas. L'auto partagé de la rue Bussy jusqu'au carrefour de Mission Street, par exemple, coûte environ 50 roupies pour deux personnes avec bagages.

**À vélo**

De nombreuses maisons d'hôtes et hôtels louent des vélos, un excellent moyen d'explorer White Town et de rouler jusqu'au phare ou le long de la promenade. Le terrain est entièrement plat. Le vélo est aussi le moyen idéal pour atteindre les zones excentrées d'Auroville.

**En scooter**

Plusieurs agences de location près de White Town louent scooters et motos à la journée. Les tarifs tournent généralement entre 300 et 500 roupies par jour, plus le carburant. Il vous faudra un permis valide et une certaine confiance dans les conditions de circulation indiennes.

**En Uber**

Uber opère à Pondichéry. Il vous faudra une carte SIM indienne ou une eSIM pour l'utiliser.

**En savoir plus**

Pour les tarifs, les trajets et les applications de réservation des auto-rickshaws, vélos et scooters, consultez notre guide complet pour [se déplacer à Pondichéry](/fr/plan/getting-around).`,
    faq: [
      { question: "Pondichéry se visite-t-elle facilement à pied ?", answer: "Oui. Le quartier historique de White Town est compact et particulièrement agréable à découvrir à pied. La plupart des bâtiments coloniaux, cafés, boutiques, églises et la promenade du bord de mer se trouvent à courte distance les uns des autres. La marche est souvent la meilleure façon d'apprécier l'architecture et l'ambiance. En revanche, pour les plages éloignées du centre, [Auroville](/fr/discover/auroville) ou les villages voisins, un scooter, un vélo, un auto-rickshaw ou un taxi sera plus pratique." },
    ],
  },

  // ── SERVICES ───────────────────────────────────────────────────────────────

  {
    id: "tourist-information",
    title: "Informations touristiques",
    summary:
      "Pondichéry est l'une des destinations de vacances les plus détendues d'Inde. Son mélange d'architecture coloniale française, de patrimoine tamoul, de promenades en bord de mer et de culture du café crée une atmosphère sans équivalent ailleurs dans le pays.",
    body: `Pondichéry est l'une des destinations de vacances les plus détendues d'Inde. Son mélange d'architecture coloniale française, de boulevards bordés d'arbres, de patrimoine tamoul, de promenades en bord de mer et de culture du café crée une atmosphère sans équivalent ailleurs dans le pays. Bien que la ville soit facile à explorer, connaître quelques coutumes locales et conseils pratiques vous aidera à profiter de votre visite tout en évitant des désagréments inutiles.

**Cartes et guides**

L'Institut Français de Pondichéry produit la meilleure carte patrimoniale du réseau de rues de White Town, disponible dans un petit nombre de librairies et d'institutions culturelles du quartier français.

**Visites guidées**

Des visites guidées à pied du quartier français avec déjeuner sont proposées via Get Your Guide et des opérateurs locaux. Des visites de marché avec cours de cuisine et des excursions à la journée depuis Chennai sont également réservables. Une visite guidée est particulièrement utile lors d'une première visite : les noms de rues et l'histoire des bâtiments sont suffisamment denses pour qu'une explication humaine enrichisse considérablement l'expérience.

**Le Consulat de France**

Pour les ressortissants français et les visiteurs immatriculés, le [Consulat de France](/fr/history/institutions/consulate-general) se trouve en front de mer, [avenue Goubert](/fr/discover/white-town/avenue-goubert). Il traite les services consulaires mais pas les demandes touristiques générales. Les services de visa pour les ressortissants indiens demandant un visa français sont gérés par un prestataire tiers, pas directement par le consulat. Le consulat dispose aussi d'une antenne à Chennai.

**Argent et paiements**

Il est rarement nécessaire de porter beaucoup d'espèces sur soi. La plupart des hôtels, restaurants, supermarchés, cafés, stations-service et boutiques acceptent les paiements UPI ainsi que les cartes de débit et de crédit. Les petits vendeurs de rue, stands de plage et quelques marchés locaux peuvent encore préférer les espèces, il est donc conseillé de garder 500 à 1 000 roupies en petites coupures pour les achats mineurs.

Les distributeurs automatiques sont largement disponibles dans toute la ville, notamment autour de Mission Street, Jawaharlal Nehru Street, Anna Salai, Heritage Town et la gare routière. Pendant les longs week-ends et jours fériés, certains distributeurs peuvent temporairement manquer d'espèces, alors retirer de l'argent avant les grandes fêtes est une précaution sensée.

Contrairement à de nombreuses destinations touristiques, le marchandage est rare dans les boutiques à prix fixe et les enseignes de marque. La négociation n'est acceptable que dans certains marchés de rue et étals de souvenirs, mais doit toujours se faire poliment.

**Rester en sécurité**

Pondichéry est généralement considérée comme l'une des villes les plus sûres pour les touristes. Familles, couples et voyageurs en solo trouvent généralement l'atmosphère détendue et accueillante. Néanmoins, les précautions de base s'appliquent comme partout ailleurs.

Évitez de laisser téléphones portables, portefeuilles ou sacs à main sans surveillance sur la plage ou en dînant en extérieur. Gardez vos objets de valeur en sécurité, particulièrement dans les marchés bondés et pendant les festivals. Si vous roulez à scooter, ne laissez jamais casques ou sacs suspendus au véhicule lorsqu'il est garé.

La promenade du bord de mer reste animée jusque tard le soir, mais les plages plus tranquilles hors de la ville deviennent isolées après le coucher du soleil. Si vous visitez des plages comme Paradise Beach, Serenity Beach ou Auroville Beach, rentrez avant qu'il ne se fasse trop tard, sauf en groupe.

Les femmes voyageant seules rapportent généralement des expériences positives à Pondichéry. S'habiller modestement en dehors des zones de plage, éviter les routes désertes tard le soir, et utiliser des taxis ou auto-rickshaws autorisés après la tombée de la nuit sont des précautions sensées.

**Sécurité en mer**

La mer le long du littoral de Pondichéry peut sembler calme, mais les courants sous-marins sont souvent plus forts qu'ils n'y paraissent. La promenade de Rock Beach est protégée par de gros blocs de granit et ne convient pas à la baignade.

La baignade n'est plus sûre que dans les plages désignées où les autorités locales l'autorisent, comme Paradise Beach et certaines parties de Serenity Beach, et même là, les visiteurs doivent suivre les drapeaux d'avertissement et les instructions des sauveteurs.

Évitez d'entrer dans la mer par mauvais temps, forte pluie ou après des alertes cycloniques. Ne sous-estimez jamais les courants de baïne, particulièrement pendant la saison de la mousson du nord-est.

Les enfants doivent toujours rester sous la surveillance d'un adulte près de l'eau.

**Nourriture et restauration**

Pondichéry propose de tout, des repas tamouls authentiques aux boulangeries françaises, en passant par les restaurants de fruits de mer, cafés et cuisine internationale.

Les fruits de mer sont généralement les plus frais pendant la principale saison de pêche, bien que la disponibilité puisse varier selon les conditions météorologiques. Si vous avez des allergies alimentaires, informez-en le restaurant avant de commander. Les options végétariennes et véganes sont largement disponibles dans toute la ville.

Les soirées de week-end peuvent être extrêmement animées dans les restaurants populaires, particulièrement à White Town. Les réservations sont recommandées pendant les vacances et les longs week-ends.

L'alcool ne peut être consommé qu'à l'intérieur d'établissements licenciés ou de lieux privés. Boire de l'alcool sur la voie publique, les plages ou la promenade est interdit et peut entraîner des sanctions.

**Coutumes et étiquette locales**

Pondichéry a une identité culturelle unique où les traditions tamoules se mêlent au patrimoine français. Les visiteurs sont chaleureusement accueillis, et un comportement respectueux est apprécié partout.

En entrant dans les temples, les chaussures doivent toujours être retirées. La photographie à l'intérieur des temples peut être restreinte, alors observez les panneaux avant de prendre des photos.

Près de l'[Ashram de Sri Aurobindo](/fr/discover/landmarks/ashram), les visiteurs sont priés de garder le silence. Conversations bruyantes, musique et photographies inutiles doivent être évitées. Beaucoup de personnes visitent l'Ashram pour méditer et se recueillir plutôt que pour faire du tourisme.

Les églises doivent également être visitées avec respect. Pendant les offices, les visiteurs doivent rester silencieux et éviter d'interrompre les fidèles.

Les démonstrations d'affection en public, acceptables dans certains pays, peuvent attirer une attention indésirable dans les zones plus conservatrices.

**Photographie**

La photographie est l'un des points forts de toute visite à Pondichéry. White Town, la Promenade, les bâtiments coloniaux colorés, les églises et les plages offrent d'excellentes occasions de photos mémorables.

Cependant, demandez toujours la permission avant de photographier des résidents locaux, des pêcheurs au travail, des vendeurs de rue ou des enfants. Respectez la vie privée et évitez d'obstruer les routes ou les entrées en prenant des photos.

Certains musées, bâtiments religieux et bureaux gouvernementaux peuvent interdire la photographie ou facturer des frais d'appareil photo.

La photographie par drone est réglementée par les règles de l'aviation indienne. Faire voler des drones près de bâtiments gouvernementaux, d'installations militaires ou de zones réglementées est interdit sans les autorisations nécessaires.

**Shopping**

Le shopping à Pondichéry va de l'artisanat et des produits en papier fait main à la poterie, l'encens, les textiles, les articles en cuir et les chocolats fabriqués localement.

Les boutiques d'artisanat gérées par l'État et les enseignes établies ont généralement des prix fixes. Les petits stands de rue peuvent permettre un marchandage limité, mais une négociation agressive n'est ni attendue ni appréciée.

Si vous achetez de l'artisanat ou des œuvres d'art coûteuses, demandez une facture en bonne et due forme.

**Familles et personnes âgées**

Pondichéry convient particulièrement bien aux vacances en famille, car la plupart des attractions sont proches les unes des autres et faciles d'accès.

Les parents devraient emporter chapeaux, eau potable et crème solaire pour les enfants, particulièrement pendant les visites de l'après-midi. Les visiteurs âgés trouveront peut-être les heures matinales et vespérales plus confortables pour marcher le long de la promenade ou explorer White Town.

De nombreux cafés et restaurants proposent des menus adaptés aux enfants, tandis que parcs et espaces ouverts offrent des lieux agréables où les familles peuvent se détendre.

**Accessibilité**

Plusieurs hôtels modernes, centres commerciaux et restaurants proposent rampes et ascenseurs pour les visiteurs à mobilité réduite. Cependant, les bâtiments patrimoniaux plus anciens et certaines rues étroites de White Town peuvent présenter des trottoirs inégaux ou des marches.

Les visiteurs en fauteuil roulant devraient vérifier l'accessibilité directement auprès des hôtels et attractions avant leur visite.

**Festivals et périodes d'affluence**

Pondichéry devient particulièrement animée pendant les célébrations du Nouvel An, Noël, les longs week-ends et les grands jours fériés. L'occupation hôtelière augmente sensiblement pendant ces périodes, et les temps d'attente dans les restaurants s'allongent.

La ville célèbre aussi les festivals tamouls avec enthousiasme, et les processions locales peuvent temporairement affecter la circulation autour des temples.

Si vous préférez des visites plus tranquilles, prévoyez de visiter les attractions populaires tôt le matin.

**Tourisme responsable**

Le charme de Pondichéry dépend des visiteurs qui aident à préserver son patrimoine et sa beauté naturelle.

Évitez de jeter des déchets sur les plages ou dans les espaces publics. Jetez vos déchets uniquement dans les poubelles prévues à cet effet. Ne grimpez pas sur les monuments patrimoniaux ni sur le muret de granit le long de la promenade, cela peut être dangereux.

Soutenez les artisans locaux en achetant des produits authentiquement faits main plutôt que des souvenirs produits en masse. Respectez les quartiers résidentiels en gardant un niveau sonore bas, particulièrement tôt le matin et tard le soir.

La faune, y compris les oiseaux le long de la côte, doit être observée sans être dérangée.

**Conseils de voyage utiles**

• La plupart des attractions sont proches les unes des autres, ce qui fait de la marche l'une des meilleures façons de découvrir White Town.

• La circulation est généralement plus légère que dans la plupart des grandes villes indiennes, mais les week-ends et jours fériés peuvent devenir congestionnés autour de la Promenade et de Mission Street.

• Des toilettes publiques sont disponibles dans plusieurs lieux touristiques, zones commerçantes et grands espaces publics, bien qu'il soit conseillé d'emporter des mouchoirs et du gel hydroalcoolique.

• La couverture du réseau mobile est généralement fiable dans toute la ville.

• Emportez crème solaire, lunettes de soleil et une gourde réutilisable pour les visites.

• Des chaussures confortables rendent l'exploration des rues patrimoniales bien plus agréable.

• Le lever et le coucher du soleil sur la baie du Bengale comptent parmi les points forts de Pondichéry. Arriver un peu en avance garantit la meilleure expérience.

Un peu de préparation change beaucoup de choses à Pondichéry. Respectez les coutumes locales, faites attention près de la mer, restez hydraté, et ralentissez suffisamment pour apprécier le mélange unique d'histoire, de spiritualité et de charme côtier de la ville. Avec son atmosphère accueillante et son rythme tranquille, Pondichéry récompense les visiteurs qui l'explorent avec attention plutôt qu'en se pressant.`,
    faq: [
      { question: "Pondichéry est-elle sûre pour les familles ?", answer: "Oui. Elle est largement considérée comme l'une des destinations les plus sûres du sud de l'Inde pour les vacances en famille." },
      { question: "Puis-je utiliser UPI partout ?", answer: "La plupart des commerces acceptent UPI, bien qu'il soit recommandé de garder un peu d'espèces pour les achats mineurs." },
      { question: "Le marchandage est-il attendu ?", answer: "Seulement dans certains marchés de rue. Les boutiques à prix fixe ne négocient pas." },
      { question: "Puis-je boire de l'alcool sur la plage ?", answer: "Non. La consommation d'alcool dans les lieux publics, y compris les plages et la promenade, est interdite." },
      { question: "Les plages sont-elles ouvertes la nuit ?", answer: "L'accès public est généralement disponible, mais la baignade après la tombée de la nuit est dangereuse et déconseillée." },
      { question: "Puis-je tout photographier ?", answer: "La plupart des lieux extérieurs se prêtent à la photographie, mais respectez toujours les restrictions à l'intérieur des lieux religieux, musées et locaux gouvernementaux." },
      { question: "Pondichéry est-elle sûre pour les voyageurs seuls ?", answer: "Pondichéry est généralement considérée comme une destination sûre pour les voyageurs seuls, y compris les femmes. Les principales zones touristiques sont animées pendant la journée, et White Town est habituellement bien fréquenté. Comme partout, il est conseillé d'éviter les endroits isolés tard le soir, de garder ses objets de valeur en sécurité et d'utiliser des moyens de transport fiables. Des précautions de voyage habituelles suffisent généralement pour un séjour confortable." },
    ],
  },
  {
    id: "healthcare-emergency",
    title: "Santé et urgences",
    summary:
      "Pondichéry dispose de bonnes installations hospitalières selon les standards du sud de l'Inde. JIPMER est l'un des meilleurs hôpitaux publics d'Inde. Emportez eau en bouteille, crème solaire et répulsif anti-insectes dès le premier jour.",
    body: `**Hôpitaux**

L'Hôpital général de Pondichéry se trouve rue Victor Simonnel, au centre-ville. JIPMER (Jawaharlal Institute of Postgraduate Medical Education and Research) est un grand hôpital universitaire public au sud du centre-ville, et l'un des meilleurs hôpitaux publics du sud de l'Inde. Les hôpitaux privés incluent le Pondicherry Institute of Medical Sciences (PIMS).

**Pharmacie**

Plusieurs pharmacies opèrent dans le centre-ville. La plupart ferment vers 21h ; vérifiez localement les options ouvertes 24h/24 actuelles. Nehru Street offre une bonne concentration de pharmacies pour les besoins de base.

**Médecins privés**

Des consultations médicales privées sont disponibles dans toute la ville. Votre hôtel peut vous orienter vers la clinique la plus proche. Les frais de consultation sont sensiblement inférieurs à ceux des pays occidentaux.

**Numéros d'urgence**

Police : 100
Ambulance : 108
Pompiers : 101
Urgence générale : 112

**Sécurité générale**

Pondichéry est une ville sûre pour les visiteurs. Les précautions urbaines habituelles s'appliquent : faites attention à vos affaires dans les marchés bondés, utilisez des tarifs négociés pour les rickshaws, et gardez une copie de votre passeport plutôt que l'original. Les rues de White Town sont largement calmes après 22h ; évitez de marcher seul tard le soir dans des zones peu familières.

**En savoir plus**

Pour la liste complète des hôpitaux, cliniques privées et pharmacies, consultez notre guide complet de la [santé à Pondichéry](/fr/plan/healthcare).`,
  },
  {
    id: "sun-water-health",
    title: "Soleil et santé",
    summary:
      "Ne buvez que de l'eau en bouteille ou filtrée. Le soleil est intense toute l'année. Les insectes transmettent la dengue pendant les mois de mousson, le répulsif est donc important après le crépuscule.",
    body: `**Eau**

Ne buvez jamais l'eau du robinet à Pondichéry. Utilisez toujours de l'eau en bouteille scellée ou de l'eau bouillie et filtrée. Dans les stands de street food et les petits restaurants locaux, évitez les boissons servies avec glaçons : la glace est rarement faite avec de l'eau filtrée. Dans les cafés orientés touristes et les bons restaurants, la glace est généralement sûre, mais demandez en cas de doute.

**Chaleur**

Même pendant les mois plus frais de décembre et janvier, les températures de midi en plein soleil sont importantes. De mars à juin, la chaleur est intense : évitez de sortir entre 11h et 16h si possible. Programmez les visites de temples et les balades à White Town tôt le matin (avant 9h) ou en fin d'après-midi (après 16h). Emportez de l'eau, portez un chapeau, et réappliquez la crème solaire toutes les deux heures.

**Insectes et dengue**

Pondichéry se trouve dans une région où la dengue constitue un risque connu, particulièrement de juillet à novembre, pendant et après la mousson. Appliquez un répulsif anti-insectes (à base de DEET ou équivalent) avant de sortir le soir. Des vêtements amples à manches longues au crépuscule aident considérablement. Si une forte fièvre soudaine apparaît après votre retour de voyage, mentionnez vos antécédents de voyage à un médecin.

**Estomac**

Si vous n'êtes pas habitué à une cuisine très épicée, abordez les deux premiers jours de street food en douceur. La cuisine sud-indienne à Pondichéry est excellente mais peut être plus relevée que ne le suggère la description du menu. Emportez des sels de réhydratation orale (SRO) par précaution : ils sont vendus dans n'importe quelle pharmacie et utiles pour se réhydrater rapidement après une journée chaude.`,
  },

  // ── CONSEILS ───────────────────────────────────────────────────────────────

  {
    id: "when-to-visit",
    title: "Quand visiter",
    summary:
      "D'octobre à mars, c'est la saison sèche et la meilleure période pour visiter. La mousson (juillet à octobre) apporte de fortes pluies et quelques fermetures, mais aussi des prix plus bas et une beauté différente.",
    body: `**Octobre à mars (recommandé)**

La saison sèche est la principale période de visite. Les températures vont du milieu des vingt degrés en décembre-janvier au milieu des trente degrés en mars. Réservez votre hébergement bien à l'avance, surtout le week-end, quand les visiteurs domestiques venus de Chennai remplissent les hôtels. Le festival agricole annuel des jardins botaniques a lieu le deuxième week-end de février, avec entrée gratuite et feu d'artifice en soirée.

**Avril à juin (saison chaude)**

D'avril à juin, il fait très chaud, avec des températures atteignant régulièrement 38 à 40 degrés Celsius. C'est la période la plus calme pour le tourisme. Si vous voyagez pendant cette fenêtre, réservez matins et soirs aux activités extérieures et reposez-vous pendant les heures de l'après-midi.

**Juillet à octobre (mousson)**

De fortes précipitations arrivent dès juillet, portées par la mousson du sud-ouest, et Pondichéry reçoit aussi la mousson du nord-est en octobre et novembre. Certains restaurants, cafés et maisons d'hôtes réduisent leurs horaires ou ferment. Les prix sont plus bas et la réservation à l'avance moins critique. La côte peut être spectaculaire lors d'un orage, et les couleurs des bâtiments du quartier français sont plus vives sous la pluie.

**Semaine vs week-end**

Pondichéry est une destination de week-end prisée des habitants de Chennai, ce qui signifie que les cafés et rues du quartier français sont nettement plus animés les samedis et dimanches. Si vous pouvez arriver en semaine, l'atmosphère est plus calme et les tables plus faciles à trouver.`,
    faq: [
      { question: "Quelle est la meilleure période pour visiter Pondichéry ?", answer: "La période la plus agréable s'étend de novembre à février, lorsque les températures sont plus douces et l'humidité moins élevée. Cette saison est idéale pour les promenades, les plages et la découverte d'[Auroville](/fr/discover/auroville). De mars à juin, la chaleur peut être importante, tandis qu'octobre et novembre connaissent parfois des pluies liées à la mousson du nord-est. Les voyageurs recherchant un climat confortable privilégient généralement les mois d'hiver." },
    ],
  },
  {
    id: "dress-and-comfort",
    title: "Code vestimentaire",
    summary:
      "Des vêtements légers en coton ou en lin conviennent au climat toute l'année. Les temples et l'ashram exigent épaules et genoux couverts. Les meilleures heures pour marcher sont avant 9h et après 16h.",
    body: `**S'habiller pour le climat**

Pondichéry est chaude toute l'année. Le coton ou le lin léger, en coupe ample, est le choix le plus pratique : les matières synthétiques retiennent la chaleur et deviennent vite inconfortables. Emportez une couche pour les restaurants et taxis climatisés, qui peuvent être très froids par contraste. Les soirées appellent des vêtements légers à manches longues, autant pour se protéger des insectes que pour la chaleur.

**Code vestimentaire des temples et de l'ashram**

Dans tous les temples hindous, couvrez épaules et genoux : cela s'applique aux hommes comme aux femmes. Shorts et hauts sans manches ne sont pas acceptables sur les sites religieux. La plupart des temples demandent aussi de retirer ses chaussures avant d'entrer ; laissez-les à l'entrée ou dans la zone désignée. À l'[Ashram de Sri Aurobindo](/fr/discover/landmarks/ashram), une tenue modeste et respectueuse est exigée : pas de shorts, pas d'épaules dénudées.

**Chaussures**

Des chaussures confortables et faciles à retirer sont un atout pratique. Vous les retirerez à répétition dans les temples, certains restaurants et maisons, ainsi qu'à l'ashram. Sandales ou mocassins conviennent bien. Les rues de White Town sont largement plates, mais certaines ruelles plus anciennes ont des surfaces inégales : de bonnes chaussures comptent.

**Le bon moment pour marcher**

La plus belle lumière du quartier français tombe entre 6h et 9h. Les rues sont calmes, l'air plus frais, et les bougainvilliers contre les façades jaunes et ocres sont à leur plus éclatant. La fin d'après-midi, d'environ 16h au crépuscule, est la deuxième meilleure fenêtre. Le soleil de midi en été est féroce : ne le sous-estimez pas.`,
  },
  {
    id: "opening-hours",
    title: "Horaires d'ouverture",
    summary:
      "Organisez-vous autour d'horaires de fermeture précis : le dernier ferry pour Paradise Beach part à 16h et le Centre d'accueil d'Auroville ferme à 17h30. L'ashram suit un programme quotidien strict.",
    body: `**Ashram de Sri Aurobindo**

L'ashram est ouvert de 8h à midi et de 14h à 18h la plupart des jours. Mettez votre téléphone en silencieux avant d'entrer. Retirez vos chaussures à l'entrée. Gardez le silence près du samadhi, l'espace de méditation central. La photographie n'est pas appropriée à l'intérieur des bâtiments de l'ashram.

**Auroville**

Les véhicules privés ne sont pas autorisés à l'intérieur de la zone principale d'Auroville pour les visiteurs de passage. Garez-vous au Centre d'accueil et marchez ou prenez la navette depuis là. Le Centre d'accueil est ouvert de 9h à 17h30 tous les jours. Les observations du [Matrimandir](/fr/discover/auroville/the-matrimandir) (la sphère dorée de méditation au cœur d'Auroville) nécessitent un laissez-passer récupéré en personne au Centre d'accueil : les laissez-passer ne peuvent pas être réservés en ligne. Arrivez tôt car les places sont limitées. Plus d'informations sur auroville.org.

**Chunnambar Boat House et Paradise Beach**

Le dernier ferry public de la Chunnambar Boat House vers Paradise Beach part à 16h. Si vous le manquez, il n'y a aucun autre moyen d'atteindre la plage. Prévoyez aussi du temps pour le trajet retour : le dernier bateau quitte la plage à 17h. Vérifiez les horaires actuels à la maison des bateaux à votre arrivée, car les horaires varient parfois selon la saison.

**Musée de Pondichéry**

Ouvert de 10h à 17h, fermé le lundi. La photographie n'est pas autorisée à l'intérieur. Les collections archéologiques et coloniales françaises méritent bien une heure de votre temps — consultez notre [guide complet du musée](/fr/discover/landmarks/museum) pour savoir ce qui y est exposé.

**Jardin botanique**

Ouvert de 10h à 17h, fermé le mardi. Le jardin est petit mais agréable tôt le matin. L'aquarium au sein du complexe du jardin a des horaires séparés. Pour en savoir plus, consultez notre [guide du Jardin botanique](/fr/discover/landmarks/botanical-garden).

**Phare d'Auroville**

Ouvert aux visiteurs jusqu'à 17h. Le phare offre les meilleures vues surélevées de la côte de Coromandel dans la région. Prévoyez 30 minutes pour la visite.`,
  },
  {
    id: "practical-tips",
    title: "Bon à savoir",
    summary:
      "Devise, marchandage, temples, photographie, pourboire, langue, statut de territoire de l'Union, et le marché du dimanche.",
    body: `**Devise**

La roupie indienne (INR) est la seule devise acceptée. Les distributeurs automatiques sont disponibles dans tout White Town et le centre de Pondichéry. Les cartes sont acceptées dans la plupart des restaurants et hôtels orientés touristes du quartier français. Emportez des espèces pour les marchés, auto-rickshaws, temples et petits restaurants : le paiement par carte n'est pas universel. Le paiement UPI par QR code devient de plus en plus courant dans les boutiques locales.

**Statut de territoire de l'Union**

Pondichéry est un territoire de l'Union indienne, distinct du Tamil Nadu, ce qui a une conséquence pratique pour les visiteurs : alcool, parfum et cigarettes y sont soumis à des taxes plus basses que dans l'État environnant. Bière, vin et spiritueux sont plus ouvertement disponibles dans les restaurants et boutiques. Les parfums français de bonne qualité des boutiques locales sont sensiblement moins chers qu'au Tamil Nadu ou dans la majeure partie de l'Inde continentale.

**Marchandage**

Attendu sur les marchés et lors de la négociation des tarifs d'auto-rickshaw. Dans les boutiques et restaurants avec prix affichés, le prix est fixe. Au marché du dimanche et sur les étals de rue, le marchandage est la norme : commencez à environ la moitié de ce que vous êtes prêt à payer et trouvez un compromis.

**Baignade**

Ne vous baignez pas à la Promenade (Rock Beach) ni sur le front de mer principal. Les courants le long de la côte de Pondichéry sont forts et le ressac peut être trompeur. Paradise Beach à Chunnambar est plus calme mais nécessite tout de même de la prudence : ne nagez que dans les zones désignées et respectez les avertissements locaux.

**Temples**

Tous les temples hindous exigent de retirer ses chaussures avant d'entrer. La plupart demandent que les épaules et les genoux soient couverts. Certains temples restreignent l'accès au sanctuaire intérieur aux non-hindous ; des panneaux à l'entrée vous l'indiqueront. Un petit don dans la boîte de collecte est de coutume.

**Photographie**

Le quartier français est magnifique à photographier et personne n'objectera aux photos de bâtiments et de rues. À l'intérieur des temples, les règles de photographie varient : cherchez les panneaux ou demandez avant de lever votre appareil. Le musée de Pondichéry n'autorise pas la photographie à l'intérieur.

**Pourboire**

Non attendu dans les petits restaurants locaux ou les stands de street food. Dans les cafés et restaurants orientés touristes, 10 % est apprécié mais pas obligatoire. Arrondissez les tarifs d'auto-rickshaw si le chauffeur a été serviable.

**Langue**

Le tamoul est la langue locale. Le français reste en usage dans certains contextes institutionnels mais n'est pas largement parlé dans la rue. L'anglais est largement compris dans le quartier français et dans la plupart des commerces orientés touristes.

**Marché du dimanche**

Le marché du dimanche sur Mahatma Gandhi Street se tient d'environ 10h jusque dans l'après-midi. Meubles d'occasion, électronique vintage, vêtements, outils et street food. Très fréquenté, entièrement local, et qui mérite le détour.`,
    faq: [
      { question: "Combien de jours faut-il prévoir pour Pondichéry ?", answer: "Deux à trois jours suffisent pour découvrir les principales attractions, notamment White Town, la promenade, les cafés, les marchés et [Auroville](/fr/discover/auroville). Un séjour de quatre à cinq jours permet de profiter des plages voisines, des activités culturelles, des cours de français, du vélo, du yoga et d'une découverte plus détendue. Beaucoup de voyageurs considèrent qu'un long week-end offre un excellent équilibre entre visites et repos." },
      { question: "Peut-on utiliser des cartes bancaires internationales à Pondichéry ?", answer: "Oui. La plupart des hôtels, restaurants, cafés et grandes boutiques de White Town et des zones touristiques acceptent les cartes bancaires internationales. En revanche, les petits commerces locaux, les marchés, les auto-rickshaws et certaines maisons d'hôtes peuvent préférer les espèces ou les moyens de paiement numériques indiens. Il est donc utile d'avoir une somme raisonnable en roupies indiennes pour les petites dépenses et les lieux n'acceptant pas les cartes." },
      { question: "Quelles sont les règles concernant l'alcool à Pondichéry ?", answer: "Pondichéry est connue pour appliquer des taxes sur l'alcool souvent plus faibles que dans de nombreux États indiens, ce qui rend les boissons alcoolisées relativement abordables. L'alcool peut être acheté dans des magasins agréés et consommé dans des restaurants et bars autorisés. La consommation dans les lieux publics est interdite, et les voyageurs doivent respecter les règles locales concernant l'âge légal et la consommation. Si vous transportez de l'alcool hors du territoire, les règles de l'État de destination s'appliqueront." },
      { question: "Puis-je transporter de l'alcool acheté à Pondichéry ?", answer: "L'alcool acheté à Pondichéry peut généralement être transporté pour une consommation personnelle, mais les quantités autorisées dépendent de la réglementation de l'État dans lequel vous entrez. Les États voisins peuvent imposer des limites, et les quantités excessives peuvent être saisies lors des contrôles. Il est conseillé de conserver les reçus d'achat et d'éviter de transporter de grandes quantités. Pour une information fiable, consultez les règles d'accise en vigueur dans votre État de destination." },
    ],
  },
];

export function getPracticalTopicFr(id: string): PracticalTopicFr | undefined {
  return practicalTopicsFr.find(t => t.id === id);
}
