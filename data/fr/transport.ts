// Photos et catégories reprises de data/transport.ts — voir ce fichier pour les champs non traduits.

export interface TransportArticleFr {
  id: string;
  title: string;
  cardTitle?: string;
  teaser: string;
  body: string;
}

export const transportArticlesFr: TransportArticleFr[] = [
  // ── ARRIVER ────────────────────────────────────────────────────────────────

  {
    id: "bus-to-pondicherry",
    title: "Rejoindre Pondichéry en bus",
    cardTitle: "En bus",
    teaser:
      "Des liaisons fréquentes depuis Chennai toutes les 15 à 20 minutes sur la pittoresque East Coast Road, et des services de nuit depuis Bangalore arrivant tôt le matin. C'est ainsi que la plupart des visiteurs arrivent ici.",
    body: `**Depuis Chennai**

Chennai à Pondichéry, cela représente 150 kilomètres par l'East Coast Road (ECR), qui longe la baie du Bengale sur une grande partie de son tracé. L'ECR comme la National Highway 45, plus à l'intérieur des terres, prennent entre 3h30 et 4h30. L'ECR est l'option la plus pittoresque.

Les bus d'État (TNSTC, SETC, PRTC) coûtent entre 130 et 190 roupies et partent de CMBT (Koyambedu) dès 2h30 du matin, avec un nouveau départ toutes les 15 à 20 minutes. Ils sont basiques, sans climatisation, et certains quittent l'ECR pour éviter les péages, ce qui ajoute une heure au trajet. Demandez au receveur avant de monter.

Les cars privés climatisés (Fresh Bus, NueGo) prennent environ 3h30 et coûtent entre 230 et 1 200 roupies. Réservez via RedBus ou MakeMyTrip. Beaucoup embarquent à Adyar ou Thiruvanmiyur plutôt qu'à CMBT, alors confirmez l'arrêt avant de réserver.

Depuis l'aéroport de Chennai, prenez le métro de Meenambakkam jusqu'à CMBT (50 ₹, correspondance à Alandur), puis montez directement à bord.

**Depuis Bangalore**

Les bus suivent la NH 77 via Hosur, Krishnagiri, Tiruvannamalai et Tindivanam : 315 kilomètres, six à huit heures. La route passe à vue de l'Arunachala de Tiruvannamalai et du fort de Gingee.

La plupart des services sont de nuit, partant entre 20h et 23h30 depuis Madiwala, Shanti Nagar ou la gare routière de Majestic, pour arriver à la New Bus Stand de Pondichéry tôt le matin. Les opérateurs privés Kallada Travels, Sharma Transports et KPN Travels proposent des services couchette et assis (500 à 1 200 roupies). KSRTC et SETC sont des alternatives d'État fiables en entrée de gamme.

Réservez à l'avance via RedBus ou MakeMyTrip. À l'arrivée, utilisez Namma Yatri pour réserver un auto-rickshaw depuis la gare routière plutôt que de marchander au portail.`,
  },

  {
    id: "train",
    title: "Le train pour Pondichéry",
    cardTitle: "En train",
    teaser:
      "La gare de Pondichéry se trouve à cinq minutes de White Town en auto-rickshaw. Des trains directs relient Chennai et Bangalore ; les autres villes passent par la jonction de Villupuram.",
    body: `**La gare**

La gare de Pondichéry (code PDY) se trouve au centre-ville, à environ 15 minutes à pied de White Town ou cinq minutes en auto-rickshaw. C'est une gare modeste, sans les installations d'une grande jonction, mais y arriver vous place plus près de la plupart des hébergements que tout autre moyen de transport.

**Depuis Chennai**

Le MS PDY Express est un service direct quotidien depuis Chennai Egmore jusqu'à Pondichéry, en environ quatre à quatre heures et demie. Les tarifs varient selon la classe : la seconde classe non réservée coûte moins de 100 roupies ; la classe couchette (sleeper) tourne autour de 200 à 300 roupies ; les classes climatisées sont plus chères. Réservez 60 jours à l'avance via IRCTC (irctc.co.in) ou 12Go, car les places en classe réservée se remplissent vite les vendredis et dimanches.

**Depuis Bangalore**

Le Yesvantpur-Puducherry Weekly Express circule une fois par semaine, en environ 10 à 11 heures. C'est un trajet de nuit facile. Confirmez le jour de circulation actuel au moment de la réservation, car les horaires sont révisés selon les saisons.

**Via la jonction de Villupuram**

Si votre ville de départ n'a pas de liaison directe avec Pondichéry, rendez-vous à la jonction de Villupuram (VM), une grande gare ferroviaire à 37 kilomètres de Pondichéry. Depuis Villupuram, vous pouvez prendre un train local de correspondance jusqu'à PDY (45 à 55 minutes), un bus local, ou un taxi pour une heure de route. Villupuram dispose de bien plus de connexions depuis des villes de tout le sud de l'Inde et constitue une solution de repli fiable.`,
  },

  {
    id: "by-air",
    title: "Rejoindre Pondichéry en avion",
    cardTitle: "En avion",
    teaser:
      "Pondichéry dispose d'un petit aéroport domestique aux services très limités. Pour la plupart des visiteurs, le choix pratique est de prendre l'avion jusqu'à Chennai puis de poursuivre en bus ou en train.",
    body: `**L'aéroport de Pondichéry**

L'aéroport de Pondichéry (IATA : PNY) accueille un petit nombre de vols domestiques, principalement depuis Bangalore et Hyderabad. Les services sont limités et sujets à des changements saisonniers et des annulations. Pour vérifier si une liaison directe convient à vos dates, cherchez directement sur indigo.in ; les sites agrégateurs reflètent parfois lentement les changements d'horaires sur cette ligne.

**L'approche recommandée**

La plupart des visiteurs prennent l'avion jusqu'à l'aéroport international de Chennai (MAA), qui dessert toutes les grandes villes indiennes et des destinations internationales dont Dubaï, Singapour, Kuala Lumpur et Colombo. Depuis Chennai, Pondichéry se trouve à 3h30-4h en bus ou 4h-4h30 en train. Les deux options sont fréquentes, fiables et bon marché.

Depuis l'aéroport de Chennai, le métro depuis la station de Meenambakkam (juste devant le terminal, 50 ₹, correspondance à Alandur) vous mène à CMBT, d'où partent des bus pour Pondichéry toutes les 15 à 20 minutes tout au long de la journée. Un taxi réservé à l'avance depuis l'aéroport prend environ trois heures et coûte à partir de 2 500 roupies.`,
  },

  {
    id: "road-trip-ecr",
    title: "Road trip sur l'East Coast Road",
    cardTitle: "En voiture",
    teaser:
      "Les 150 kilomètres de route côtière entre Chennai et Pondichéry le long de la baie du Bengale forment l'un des grands trajets d'une journée du sud de l'Inde.",
    body: `**La route**

L'East Coast Road (ECR) descend de Chennai le long de la côte de Coromandel, longeant la baie du Bengale sur une grande partie de son tracé avant d'atteindre Pondichéry. Le trajet couvre environ 150 kilomètres et prend environ trois heures dans une circulation normale. La route traverse des villages de pêcheurs, de longues étendues de plage, et des bâtiments portant encore des traces visibles du tsunami de 2004. Il vaut mieux la parcourir de jour : évitez l'ECR de nuit, quand la route est mal éclairée et la circulation côtière imprévisible.

**Les haltes qui valent le détour**

Mahabalipuram (Mamallapuram), à environ 60 kilomètres au sud de Chennai, abrite le temple du Rivage et les sculptures rupestres de l'époque Pallava, classées à l'UNESCO. Elle forme une pause naturelle dans le trajet et peut facilement transformer une matinée de route en une journée complète. Au sud de Mahabalipuram, le littoral devient plus tranquille, avec un accès direct à la plage en plusieurs points avant que la route n'atteigne Pondichéry.

**L'alternative par l'intérieur des terres**

La National Highway 45 part de Chennai en passant par Tindivanam et est environ 10 kilomètres plus longue que l'ECR, mais offre un meilleur revêtement sur certaines sections. C'est le choix pratique si vous privilégiez l'heure d'arrivée plutôt que le paysage.

**Depuis d'autres villes**

Depuis Tiruchirappalli, le trajet couvre environ 175 kilomètres et prend quatre à quatre heures et demie. Les taxis réservés à l'avance depuis l'aéroport de Tiruchirappalli sont une option sensée pour les visiteurs arrivant par vol régional. Depuis Mysore, la route passe par Bangalore et prend environ huit heures.`,
  },

  {
    id: "private-taxi",
    title: "Taxi privé",
    cardTitle: "En taxi",
    teaser:
      "Un taxi réservé à l'avance depuis Chennai est l'option porte-à-porte la plus confortable, prenant trois à trois heures et demie sans correspondance à gérer.",
    body: `**Quand un taxi a du sens**

Un taxi privé est le bon choix quand vous voyagez avec des bagages, arrivez tard le soir, ou partagez le coût entre deux à quatre personnes. Il n'y a aucune correspondance à changer, aucun horaire à suivre, et le chauffeur vous attend à l'arrivée.

**Plateformes de réservation**

Savaari Car Rentals propose des taxis interurbains réservés à l'avance, avec des tarifs commençant généralement entre 9 et 13 roupies par kilomètre. MakeMyTrip couvre une gamme de véhicules, des petites citadines aux SUV. Uber Intercity permet des réservations à la demande ou programmées, avec un tarif fixe à partir d'environ 2 300 roupies pour le trajet Chennai-Pondichéry. Gozo Cabs est réputé pour ses réservations fiables en aller simple.

**Depuis l'aéroport de Chennai**

Des taxis prépayés officiels sont disponibles à tarif fixe dans le hall des arrivées. Pour Pondichéry, comptez 2 500 roupies ou plus au comptoir de l'aéroport. Une réservation Uber Intercity effectuée via l'application avant l'atterrissage coûte généralement moins cher et évite la file d'attente.

**Temps de trajet depuis d'autres villes**

Depuis Bangalore : environ six heures. Depuis Coimbatore : sept heures. Depuis Mysore : huit heures.`,
  },

  {
    id: "carpooling",
    title: "Pondichéry en covoiturage",
    cardTitle: "En covoiturage",
    teaser:
      "Le moyen le moins cher de rejoindre Pondichéry depuis Chennai, et le plus convivial. Une place partagée sur BlaBlaCar ou dans un taxi partagé local coûte 300 à 400 roupies et prend deux heures et demie à trois heures et demie.",
    body: `**BlaBlaCar**

La plateforme la plus pratique pour réserver une voiture partagée vers Pondichéry est BlaBlaCar, qui opère dans toute l'Inde et propose une offre régulière de conducteurs faisant le trajet vers Chennai. Une place vérifiée coûte généralement entre 300 et 400 roupies pour le trajet de deux heures et demie à trois heures et demie, selon la circulation et le point de dépose exact. Les conducteurs partent généralement du centre de Chennai ou de la zone de l'aéroport ; confirmez le point de rendez-vous lors de la réservation.

**Opérateurs de taxis partagés**

Des opérateurs locaux font circuler des Tata Sumo, Innova et berlines partagées entre Chennai et Pondichéry, la plupart partant près de la gare routière de Koyambedu ou de la zone de l'aéroport. Gmr Travels et Easy Call Taxi comptent parmi les opérateurs bien connus. Les places dans ces taxis partagés coûtent généralement dans la même fourchette que BlaBlaCar. Les véhicules se remplissent avant le départ, alors arrivez à l'heure au point de rendez-vous convenu.

**Depuis Auroville et les cités du nord**

Si vous vous rendez dans la région d'Auroville plutôt qu'à Pondichéry même, des services de transport partagé axés sur la communauté, dont les navettes STS, circulent entre Chennai et la région d'Auroville. Ils transportent plusieurs passagers et coûtent 1 500 à 2 000 roupies par voiture, divisées entre les occupants. Réservez à l'avance via les services d'accueil des visiteurs d'Auroville.

**Pourquoi c'est intéressant**

Un taxi privé depuis Chennai coûte 2 000 à 2 500 roupies pour la voiture entière. Une place BlaBlaCar coûte une fraction de ce prix et est souvent plus fiable que de négocier à l'aéroport. Vous partagez la route, les péages, et parfois une conversation. Le trajet prend à peu près le même temps dans les deux cas. La principale limite est la flexibilité : les covoiturages suivent l'horaire du conducteur, pas le vôtre.`,
  },

  // ── SE DÉPLACER SUR PLACE ──────────────────────────────────────────────────

  {
    id: "auto-rickshaw",
    title: "Les auto-rickshaws à Pondichéry",
    cardTitle: "Auto-rickshaws",
    teaser:
      "Les compteurs ne sont pas utilisés. Mettez-vous d'accord sur le prix avant de monter, utilisez les noms de rue plutôt que les repères touristiques, et gardez de petites coupures : la monnaie a tendance à disparaître.",
    body: `**Comment fonctionnent les prix**

Les compteurs des auto-rickshaws existent à Pondichéry mais sont rarement utilisés. Chaque trajet se négocie. Les tarifs dépendent de la distance, de l'heure de la journée, et de l'impression que vous donnez d'être un visiteur de première visite. Utilisez ce qui suit comme guide indicatif pour les jours ordinaires, hors festival :

Courts trajets dans White Town (1 à 2 km) : 50 à 100 roupies.
Entre White Town et la gare routière ou la gare ferroviaire (2 à 3 km) : 80 à 150 roupies.
Trajets plus longs à travers la ville (4 à 7 km) : 120 à 250 roupies.
White Town à Auroville (9 à 10 km) : 250 à 500 roupies.

Les week-ends de festival, la veille du Nouvel An et les jours fériés, les tarifs grimpent sensiblement.

**Avant de monter**

Mettez-vous d'accord sur le prix avant de monter. Ce n'est pas optionnel. Indiquez votre destination par son nom de rue ou un repère précis plutôt que par un raccourci touristique : demander « le quartier français » ou « la Promenade » signale quelqu'un qui ne connaît peut-être pas la distance réelle. Montrer la destination sur une carte, avec le trajet visible, tend à réduire considérablement les prix de départ gonflés.

Une fois d'accord, énoncez-le clairement : « Rue Dumas, 80 roupies ? » et attendez un hochement de tête.

**Location à la journée**

Louer un auto-rickshaw pour la journée afin de rejoindre la Chunnambar Boat House, Auroville, ou les plages excentrées est une alternative raisonnable à la location d'un scooter. Fixez l'itinéraire complet, le prix total et le nombre d'heures avant de partir. Ne laissez jamais le prix ouvert sur une location à la journée.

**Petite monnaie**

Gardez une réserve de billets de 20, 50 et 100 roupies. Si vous tendez à un chauffeur un billet de 500 roupies pour une course à 80 roupies, il annoncera fréquemment ne pas avoir de monnaie. Gardez de petites coupures et le problème ne se pose pas.

**Réserver par application**

Namma Yatri est l'application de réservation d'auto-rickshaws en mobilité ouverte la plus fiable du sud de l'Inde, mettant en relation directe avec les chauffeurs à des tarifs transparents et sans commission. Rapido propose des motos-taxis pour les voyageurs solo à un tarif plus bas. Uber propose la réservation d'auto-rickshaws avec un prix numérique fixe dans les principaux points de transit.`,
  },

  {
    id: "bicycles-and-scooters",
    title: "Vélos et scooters",
    cardTitle: "Vélos & scooters",
    teaser:
      "Les deux-roues sont la meilleure façon d'explorer Pondichéry. Les vélos conviennent à White Town, plate ; les scooters ouvrent l'accès à Auroville et aux plages excentrées. Louez toujours un véhicule à plaque jaune.",
    body: `**Vélos**

Pondichéry est entièrement plate, et le plan en damier de White Town rend le vélo presque sans effort. Un vélo permet de longer les façades coloniales, de s'arrêter à un café sans se soucier du stationnement, et de couvrir tout le quartier français en moins d'une heure.

Les vélos standards se louent entre 80 et 150 roupies par jour ; les vélos à vitesses ou de montagne coûtent 150 à 250 roupies. Une caution remboursable de 500 à 1 000 roupies plus une copie d'une pièce d'identité officielle (Aadhaar ou passeport) est la norme dans la plupart des points de location.

Le Sita Cultural Center, au 22 Kandappa Mudaliyar Street, dispose d'une flotte fiable de vélos propres. Des points de location se regroupent aussi près du Jardin botanique et le long de l'avenue Goubert. De nombreuses maisons d'hôtes boutique de White Town offrent des vélos gratuitement à leurs hôtes : demandez à votre arrivée.

**Scooters et motos**

Un scooter ouvre l'accès à Auroville, aux plages excentrées (Eden Beach, Paradise Beach à Chunnambar), et au tronçon de côte vers le nord en direction de Mahabalipuram. Les Honda Activa et Suzuki Access sont les véhicules de location standards ; les Royal Enfield Classic 350 sont disponibles si vous voulez quelque chose avec plus de caractère sur route ouverte.

Tarifs à la journée : mobylettes et petits scooters, 200 à 300 roupies ; scooters standards, 350 à 500 roupies, montant à 600 ou plus lors des longs week-ends de pointe ; Royal Enfield 350, 800 à 1 200 roupies.

**La règle de la plaque jaune**

C'est la chose la plus importante à savoir avant de louer un scooter à Pondichéry. Ne louez que des véhicules avec des plaques d'immatriculation commerciales jaunes sur fond noir. Les plaques privées blanches ne sont pas légalement autorisées à la location. Si la police de la circulation vous arrête sur une location à plaque privée, le véhicule peut être immédiatement saisi et vous risquez des amendes pour usage commercial non autorisé. Beaucoup de loueurs informels essaieront de vous remettre un scooter à plaque privée ; refusez et partez.

L'application Royal Brothers garantit des véhicules commerciaux légalement enregistrés avec assurance, et dispose de plusieurs points de retrait dans Pondichéry. Onn Bikes est une alternative économique opérant localement. Pour les boutiques physiques, la plus forte concentration de garages de location légitimes se trouve sur Mission Street, Nehru Street, et près de la gare ferroviaire. Si vous séjournez près d'Auroville, les boutiques sur Auroville Main Road près de Kuilapalayam se spécialisent dans les mobylettes robustes et les scooters électriques adaptés aux pistes forestières non goudronnées à l'intérieur de la cité.

**Avant de rouler**

Photographiez les rayures existantes du véhicule et vérifiez les pneus, les freins et les feux avant de quitter la boutique de location. Mettez-vous d'accord sur le niveau de carburant actuel : la plupart des locations sont remises presque vides. Votre premier arrêt sera une station-service. La station Indian Oil près de la New Bus Stand et la pompe HP sur SV Patel Salai sont toutes deux pratiques. Emportez votre contrat de location et votre permis de conduire, particulièrement sur la route entre Pondichéry et Auroville, où se trouve un poste de contrôle actif de la police à la frontière du territoire de l'Union. Le port du casque est obligatoire sur les grands axes.`,
  },
];

export function getTransportArticleFr(id: string): TransportArticleFr | undefined {
  return transportArticlesFr.find(a => a.id === id);
}
