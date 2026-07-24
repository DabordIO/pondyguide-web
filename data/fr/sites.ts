export interface SiteFr {
  id: string;
  name: string;
  era: string;
  metaTitle?: string;
  metaDescription?: string;
  summary: string;
  history: string;
  highlights: string[];
  visitInfo?: {
    hours?: string;
    entry?: string;
    tip?: string;
  };
}

export const sitesFr: SiteFr[] = [
  {
    id: "promenade",
    name: "Promenade Beach",
    era: "Époque coloniale (XVIIIe–XXe s.)",
    metaTitle: "Promenade Beach, 1,5 km de front de mer à Pondichéry",
    metaDescription: "Une promenade de 1,5 km en bord de mer où les pêcheurs jettent leurs filets à l'aube et où trois siècles d'histoire bordent l'avenue Goubert.",
    summary:
      "Une promenade de 1,5 km en bord de mer où les pêcheurs jettent leurs filets à l'aube et où trois siècles d'histoire bordent le boulevard. Parcourez-la d'un bout à l'autre et toute l'histoire de Pondichéry se déroule en quinze minutes.",
    history:
      "**La mer qui a bâti la ville.** La côte de Coromandel est un cauchemar pour les marins : plate, sans relief, un ressac mortel, aucun port naturel. Les navires mouillaient au large et les marchandises rejoignaient la côte en petites embarcations à travers les vagues déferlantes. Les Français n'ont jamais résolu le problème du port, mais ils ont donné à Pondichéry un visage : un front de mer assez grandiose pour faire oublier aux visiteurs qu'il n'y avait pas de port derrière.\n\n**Les monuments, du nord au sud.** Nommée d'après le maire [Édouard Goubert](/fr/history/lives-and-legacies/edouard-goubert), la Promenade est un musée à ciel ouvert accidentel. En marchant vers le sud : le Monument aux Combattants (encore entretenu aujourd'hui par le Consulat de France) ; le jardin commémoratif de Jeanne d'Arc ; la statue de Dupleix (l'homme qui a failli faire de la France la maîtresse de l'Inde) ; la statue de Gandhi (l'homme qui a fait partir la Grande-Bretagne) ; la Douane circulaire, construite en 1827 au plus fort de la reconstruction de l'époque de la Restauration. Notre-Dame des Anges n'est pas sur la Promenade mais on aperçoit d'ici ses tours jumelles.\n\n**La digue.** Le muret de granit qui longe le front de mer n'est pas qu'une simple barrière. C'est le lieu de rassemblement commun de la ville. Les Pondichériens s'y perchent au crépuscule depuis des siècles.\n\n**Le Nouvel An.** C'est ici que la ville se rassemble pour le compte à rebours du [Nouvel An](/fr/festivals/new-year), aux côtés des ruelles du quartier français juste derrière.",
    highlights: [
      "Les statues de Dupleix et de Gandhi partagent le même boulevard : l'ambition coloniale française et l'indépendance indienne, sans que l'une n'efface l'autre. Placez-vous entre les deux.",
      "Cherchez le bâtiment circulaire de la Douane (1827) ; sa forme ronde n'a d'équivalent nulle part ailleurs dans la grille du quartier français.",
      "Le muret de granit : bas, simple, perpétuellement occupé au crépuscule. C'est ici que la ville vient respirer.",
    ],
    visitInfo: {
      hours: "Ouvert 24h/24 ; idéal à l'aube (pêcheurs, premiers promeneurs) et au crépuscule (toute la ville sort)",
      entry: "Gratuit",
      tip: "Marchez du nord au sud. Le rivage est rocheux, pas de baignade. Venez pour la marche, pas pour la plage.",
    },
  },
  {
    id: "ashram",
    name: "Ashram de Sri Aurobindo",
    era: "Fondé en 1926",
    metaTitle: "Ashram de Sri Aurobindo, haut lieu spirituel de Pondichéry",
    metaDescription: "Sri Aurobindo arriva à Pondichéry française en 1910, fuyant une inculpation britannique pour sédition, et y resta jusqu'à la fin de sa vie.",
    summary:
      "Un réfugié politique devenu philosophe de la transformation humaine. Sri Aurobindo arriva à Pondichéry en 1910, fuyant une inculpation britannique pour sédition. Le territoire français signifiait que la France ne pouvait pas le livrer. Il ne repartit jamais.",
    history:
      "**L'évasion.** Le 4 avril 1910, Sri Aurobindo Ghose descendit du SS Dupleix, nommé avec une ironie parfaite d'après l'homme qui avait tenté de garder l'Inde française. Il avait quitté Calcutta en secret pour échapper à une troisième poursuite pour sédition. La Pondichéry française offrait un véritable sanctuaire : le traité d'extradition franco-britannique interdisait l'extradition pour délits politiques. La Grande-Bretagne observait. Il resta.\n\n**La transformation.** Il se retira entièrement de la politique et se consacra au yoga et à la philosophie. L'Ashram fut officiellement établi le 24 novembre 1926, quand il se retira dans la réclusion et confia la gestion à [Mirra Alfassa](/fr/history/lives-and-legacies/mirra-alfassa) (la Mère), artiste née à Paris d'ascendance franco-égypto-turque, qui l'avait reconnu comme son guide spirituel en 1914. Sous sa direction, l'Ashram devint une ville dans la ville : école, imprimerie, ateliers, fermes, et la présence institutionnelle dominante du quartier français.\n\n**Le tombeau.** Sri Aurobindo mourut en 1950. Son samadhi, dans la cour principale, attire des centaines de milliers de pèlerins chaque année. L'Ashram possède encore un patrimoine immobilier considérable dans tout le quartier français.",
    highlights: [
      "Le navire sur lequel il arriva s'appelait le SS Dupleix ; les historiens en relèvent l'ironie depuis lors.",
      "Tenez-vous dans la cour principale : le samadhi est recouvert de fleurs par les visiteurs à toute heure. Le silence ici est authentique.",
      "Regardez les bâtiments autour de vous : l'Ashram possède une grande partie de cette rue. La rue de la Marine, l'artère la plus maritime du quartier français, est devenue une adresse spirituelle.",
    ],
    visitInfo: {
      hours: "Bâtiment principal : 8h00–12h00 et 14h00–18h00 (horaires variables)",
      entry: "Gratuit ; tenue correcte exigée, silence de rigueur",
      tip: "Retirez vos chaussures avant d'entrer dans la cour. Venez en milieu de matinée, quand les fleurs du samadhi sont les plus fraîches et la foule la plus clairsemée.",
    },
  },
  {
    id: "sacred-heart",
    name: "Basilique du Sacré-Cœur",
    era: "Construite de 1902 à 1907",
    metaTitle: "Basilique du Sacré-Cœur, église gothique française à Pondichéry",
    metaDescription: "Construite entre 1902 et 1907, cette basilique néo-gothique compte 28 vitraux expédiés de France jusqu'à Pondichéry.",
    summary:
      "La France a expédié 28 vitraux depuis une usine française jusqu'à une ville tropicale indienne, non par nécessité pratique, mais par affirmation. Construite de 1902 à 1907, consacrée le 17 décembre 1907, cette basilique proclame : nous sommes là pour durer.",
    history:
      "**L'ambition.** En 1902, la mission catholique française à Pondichéry avait déjà deux siècles d'existence et une grande confiance en elle-même. Les premiers missionnaires capucins avaient bâti de modestes chapelles en pierre de corail. Leurs successeurs bâtirent ceci : une basilique néo-gothique complète, longue de 50 mètres, large de 48, haute de 18, portée par 24 piliers massifs (capacité 2 000 personnes). L'architecte Télesphore Welter opta pour le style le plus coûteux et le plus explicitement européen disponible ; la construction fut supervisée par le père Fourcaud.\n\n**Le lien parisien.** La comparaison avec le Sacré-Cœur de Paris n'est pas fortuite. Les deux furent construits dans la même génération, dans le même style, comme des actes de confiance catholique française après un traumatisme national. Le Sacré-Cœur de Paris fut entamé en 1875 après la guerre franco-prussienne. La réponse de Pondichéry, dans une ville coloniale qui avait survécu à quatre occupations britanniques, suivit la même logique : bâtir en pierre ce que la politique ne peut défaire. Au-dessus de l'entrée, une inscription latine tirée de 2 Chroniques 7:16 : *Mes yeux et mon cœur seront toujours là.*\n\n**Le verre.** Les 28 panneaux de vitraux furent fabriqués en France et expédiés ici, représentant des saints associés à la dévotion au Sacré-Cœur. Dans une ville bâtie de pierre de corail locale, ce sont les objets les plus explicitement importés d'aucun bâtiment de la ville.",
    highlights: [
      "Levez les yeux vers la façade principale : quatre statues des évangélistes se dressent sur des lampadaires biographiques : Matthieu, Marc, Luc, Jean, chacun avec son symbole.",
      "Entrez en milieu de matinée : 28 panneaux de vitraux fabriqués en France inondent la nef de lumière colorée. Chacun expédié depuis la France.",
      "Cherchez l'inscription latine au-dessus de la porte d'entrée : 2 Chroniques 7:16, « Mes yeux et mon cœur seront toujours là. » Les bâtisseurs le pensaient au sens littéral.",
    ],
    visitInfo: {
      hours: "Généralement ouverte pendant les heures de jour ; vérifier les horaires de messe",
      entry: "Gratuit",
      tip: "Visitez en milieu de matinée quand la lumière du soleil traverse les vitraux depuis l'est. Tenue correcte exigée.",
    },
  },
  {
    id: "raj-nivas",
    name: "Lok Nivas",
    era: "Fondé en 1738 (reconstruit à partir de 1766)",
    metaTitle: "Lok Nivas, ancien palais du gouverneur à Pondichéry",
    metaDescription: "Utilisé jadis par Dupleix, détruit par les Britanniques, reconstruit par la France, il est aujourd'hui la résidence officielle du Lieutenant-Gouverneur de Pondichéry.",
    summary:
      "Le même bâtiment. Trois souverainetés. Dupleix s'en servit pour diriger un protectorat sur la moitié de l'Inde du Sud. Les Britanniques le rasèrent délibérément. La France le reconstruisit. L'Inde l'utilise aujourd'hui comme résidence officielle du Lieutenant-Gouverneur, rebaptisé Lok Nivas.",
    history:
      "**Le siège de l'ambition.** Le gouverneur Dumas en posa les fondations en 1738. [Dupleix](/fr/history/lives-and-legacies/dupleix) l'acheva et en fit le centre de commandement du projet français le plus ambitieux en Inde : un protectorat s'étendant du Carnatic à Hyderabad. Des princes indiens venaient ici négocier. Des envoyés impériaux moghols y étaient reçus. [Ananda Ranga Pillai](/fr/history/lives-and-legacies/ananda-ranga-pillai), le courtier et diariste de Dupleix, y consignait les allées et venues avec un détail intime.\n\n**La destruction délibérée.** Quand les Britanniques prirent Pondichéry en janvier 1761, ils ne se contentèrent pas de l'occuper : ils la rasèrent. Le palais, le Fort Louis, les églises, les entrepôts : tout fut systématiquement démoli en trois mois. C'était une politique, non un dommage collatéral. L'objectif était de s'assurer que la France ne puisse jamais retrouver une base opérationnelle.\n\n**Le retour.** La reconstruction commença en 1766. La structure française baroque d'origine fut reconstruite dans un style rococo, un bâtiment rectangulaire d'un seul étage avec des portiques latéraux, qui devint plus tard une résidence à deux étages. Après 1962, il fut rebaptisé Raj Nivas, puis Lok Nivas, et remis au Lieutenant-Gouverneur de l'Inde : même bâtiment, même fonction, près de 300 ans plus tard. À l'intérieur : des artefacts anciens, de la porcelaine, des objets en laiton et en argent, du mobilier ancien et un piano à queue.",
    highlights: [
      "La façade se voit le mieux depuis le parc Bharathi ; reculez et observez les proportions : ce bâtiment fut conçu pour impressionner les souverains indiens, et il le fait toujours.",
      "Vous vous tenez près de l'endroit où Dupleix recevait les envoyés impériaux moghols dans les années 1740. L'empire qu'il bâtissait ici ne vit jamais le jour. Celui de la Grande-Bretagne, si.",
      "Les quatre suites d'hôtes à l'intérieur portent les noms de Pondichéry, Karaikal, Mahé et Yanam : les quatre territoires de l'ancienne Inde française, réunis sous un même toit.",
    ],
    visitInfo: {
      hours: "Non ouvert au public (résidence officielle en activité)",
      entry: "Extérieur et façade visibles depuis le parc Bharathi",
      tip: "Se voit le mieux depuis le côté du parc à la lumière du matin. Le portail sud sur la rue François Martin est l'entrée principale.",
    },
  },
  {
    id: "museum",
    name: "Musée de Pondichéry",
    era: "Créé en 1983",
    metaTitle: "Musée de Pondichéry, poteries romaines et bronzes chola",
    metaDescription: "Le musée de Pondichéry expose des poteries romaines, des bronzes chola, des objets de l'époque de Dupleix et un véhicule associé à Subramania Bharathi.",
    summary:
      "Le musée le moins visité de Pondichéry. Pour 10 ₹, vous découvrez des poteries romaines venues d'Italie, des bronzes chola de qualité mondiale, un lit que l'on croit avoir appartenu à Dupleix, et un véhicule que Subramania Bharathi aimait. Prévoyez 90 minutes.",
    history:
      "**Deux mille ans avant les Français.** La galerie Arikamedu conserve des poteries arrétines romaines, une vaisselle à glaçure rouge d'Arezzo, en Italie, identifiable aux cachets des potiers imprimés dans l'argile. Pas une imitation locale : des importations directes. Ainsi que des amphores, des perles de verre, des trésors de pièces, des preuves matérielles que des marchands romains commerçaient sur cette côte dès le premier siècle avant notre ère. Et une épée rouillée retrouvée dans une urne funéraire au village d'Ousoudou, façonnée comme une lame romaine. 1 700 ans avant l'existence de la Compagnie française des Indes orientales.\n\n**Les bronzes.** Coulées en *panchaloga* (alliage de cinq métaux) selon la technique de la cire perdue, les figures chola et pallava de cette galerie sont d'un niveau international. Cherchez le Nataraja (Shiva dansant) ainsi que l'Umamaheswara et la Thiripurasundari en posture *tribhanga*, provenant de Sorakkudi. Ce sont des trésors découverts dans la région ; ils ont fini ici.\n\n**Les galeries françaises.** Deux salles recréent les intérieurs d'une maison du quartier français (salon, salle à manger, chambre) avec un mobilier hybride franco-tamoul : cadres français, sculptures tamoules, teck local. Dans la chambre : un lit que l'on croit avoir été utilisé par [Dupleix](/fr/history/lives-and-legacies/dupleix) lui-même. Dans la première galerie : une réplique de sa chaise, une presse d'imprimerie Gutenberg manuelle provenant de l'Imprimerie du Gouvernement, et un numéro de *Vijaya*, le premier quotidien tamoul, dirigé par le poète [Subramania Bharathi](/fr/history/lives-and-legacies/subramania-bharati) pendant ses années à Pondichéry.\n\n**La cour.** Une calèche à bœufs provenant des descendants du dewan Kanakaraya Mudaliar, l'homme qui aida les Français à établir leur comptoir en 1674. Et un *pousse-pousse* : un véhicule unique à direction mécanique actionnée par le passager, poussé de l'arrière et tiré par une corde à l'avant. Bharathi, semble-t-il, l'adorait.",
    highlights: [
      "Dans la galerie Arikamedu : cherchez la poterie arrétine avec les cachets des potiers. Ces marques furent imprimées dans l'argile à Arezzo, en Italie, il y a 2 000 ans.",
      "Dans la chambre : le lit que l'on croit être celui de Dupleix. L'homme qui gouverna la moitié de l'Inde y dormait, du moins le veut la légende.",
      "Dans la cour : cherchez le pousse-pousse. Un véhicule poussé de l'arrière et dirigé par le passager. Subramania Bharathi, le poète tamoul et combattant pour la liberté, en était fan.",
    ],
    visitInfo: {
      hours: "10h00–18h00, fermé le lundi",
      entry: "10 ₹ (adultes indiens), 5 ₹ (enfants de plus de 5 ans)",
      tip: "Photographie non autorisée à l'intérieur. La galerie des bronzes récompense un regard lent ; accordez-lui au moins 30 minutes. Les meilleurs 10 ₹ à dépenser à Pondichéry.",
    },
  },
  {
    id: "bharathi-park",
    name: "Parc Bharathi",
    era: "Époque coloniale (rebaptisé après 1962)",
    metaTitle: "Parc Bharathi, jardin français historique de Pondichéry",
    metaDescription: "Huit hectares de pelouses ombragées, de colonnes gréco-romaines et d'histoire coloniale font du parc Bharathi le cœur cérémoniel de Pondichéry.",
    summary:
      "Le cœur cérémoniel de la Pondichéry française, et son plus ancien jardin public. Huit hectares de pelouses ombragées, de colonnes gréco-romaines, et l'effigie de bronze d'un poète regardant la même place où les gouverneurs coloniaux recevaient autrefois les envoyés moghols. Venez pour la promenade matinale ; restez pour tout le reste.",
    history:
      "**Avant les Français, avant les Britanniques.** La plus ancienne histoire du parc Bharathi n'a rien à voir avec les Européens. Une courtisane nommée Aayi fit démolir sa propre maison et employa le terrain et ses économies pour bâtir un réservoir d'eau pour la ville, des siècles avant l'arrivée d'aucun drapeau. L'administration coloniale française, sous Napoléon III dans les années 1850, bâtit un pavillon gréco-romain au centre de sa place publique principale pour la commémorer. Quatre colonnes blanches. Un toit en dôme. Une légende tamoule préservée dans la pierre européenne. Ils l'appelèrent l'Aayi Mandapam, et il se dresse encore aujourd'hui au centre du parc, l'une des structures les plus photographiées de Pondichéry.\n\n**Le jardin de Napoléon.** Les Français aménagèrent cet espace vert comme le cœur cérémoniel de leur capitale coloniale, la place ouverte entre le palais du gouverneur, l'Assemblée législative, et les bâtiments administratifs. Ils l'appelaient Place du Gouvernement, bien que les habitants la connaissent familièrement sous le nom de Parc Napoléon. Quand Dupleix recevait princes indiens et envoyés moghols au palais, au nord, cette place était l'accès formel. Le Raj Nivas, l'Assemblée législative, le Secrétariat, le musée de Pondichéry : tous font face à ce parc. Trois siècles de pouvoir, disposés autour d'un jardin.\n\n**Le poète prend la place.** Après 1962, la Place du Gouvernement devint le parc Bharathi, rebaptisé en l'honneur de [Subramania Bharathi](/fr/history/lives-and-legacies/subramania-bharati), le poète, journaliste et combattant pour la liberté tamoul qui vécut à Pondichéry de 1908 à 1919. Il utilisa le territoire français comme sanctuaire juridique contre une arrestation britannique, écrivant certains de ses vers les plus célébrés en exil dans ces rues, la même faille juridique qui abrita [Sri Aurobindo](/fr/history/lives-and-legacies/sri-aurobindo). Une statue de bronze de Bharathi se dresse maintenant à l'entrée du parc : non pas un soldat, non pas un gouverneur, mais un poète. La place qui symbolisait autrefois l'autorité française porte désormais le nom de l'homme qui a contribué à la démanteler.\n\n**Le parc aujourd'hui.** Huit hectares de pelouses entretenues, de larges allées sablonneuses sous une canopée de manguiers, de tamariniers et de banians, des bancs de style colonial, et des parterres de fleurs qui changent de couleur avec les saisons. De petits plans d'eau attirent les oiseaux dans les massifs : moineaux, colombes, et si vous arrivez assez tôt, un martin-pêcheur ou un souimanga dans les arbustes en fleurs. Des papillons volent entre les fleurs. Des familles le dimanche matin, des joggeurs avant que la chaleur ne monte, des retraités lisant le journal sur des bancs ombragés : voilà à quoi devrait ressembler un parc urbain. Des événements culturels s'y déroulent toute l'année, concerts, lectures de poésie, expositions florales saisonnières. Et chaque soir, la fontaine musicale fonctionne avec des lumières et un son synchronisés. Gratuit. Ouvert à tous. Le meilleur spectacle du quartier français.",
    highlights: [
      "L'Aayi Mandapam au centre du parc : quatre colonnes classiques, un toit en dôme, une légende tamoule dans la pierre européenne. Bâti sous Napoléon III pour honorer une femme qui vécut ici des siècles avant lui. Lisez l'histoire sur la plaque, lentement.",
      "Regardez vers le nord, vers le Raj Nivas (autrefois Lok Nivas) : le bâtiment depuis lequel Dupleix gouvernait dans les années 1740 fait toujours face à ce parc. Trois souverainetés ; la même vue.",
      "Le soir : la fontaine musicale fonctionne avec une musique synchronisée et des lumières dansantes. Gratuit, ouvert à tous, le meilleur spectacle du quartier français.",
      "Le matin : arrivez avant 8h et vous partagerez les allées avec des joggeurs locaux, des groupes de yoga, et des résidents âgés lisant le journal sous les palmiers. Le parc avant la chaleur est un lieu différent.",
      "Le parc se trouve au centre du cœur administratif et culturel de Pondichéry. Le musée de Pondichéry est à 2 minutes à pied à l'est ; Rock Beach est à 5 minutes à pied au nord. Quatre bâtiments emblématiques visibles depuis un seul banc.",
    ],
    visitInfo: {
      hours: "Ouvert tous les jours de 6h00 à 20h00 ; la fontaine musicale fonctionne le soir",
      entry: "Gratuit",
      tip: "Deux visites valent mieux qu'une : le matin pour l'air frais, le chant des oiseaux et la vie locale sous les palmiers ; le soir pour la fontaine et la lumière dorée sur les façades coloniales. De novembre à février est la période idéale, humidité plus basse et chaleur gérable. Le parc couvre 3,2 hectares, plus grand qu'il n'y paraît depuis l'entrée.",
    },
  },
  {
    id: "notre-dame",
    name: "Notre-Dame des Anges",
    era: "Fondée en 1687 (bâtiment actuel 1851–1855)",
    metaTitle: "Notre-Dame des Anges, église du front de mer à Pondichéry",
    metaDescription: "La seule église de Pondichéry où la messe est célébrée en français, en anglais et en tamoul, sur un site occupé par des églises depuis 1687.",
    summary:
      "Sur ce site du front de mer depuis 1687 : quatre églises, le même emplacement. Les tours jumelles couleur crème sont le premier bâtiment colonial français que voient la plupart des visiteurs arrivant de Chennai. La seule église de Pondichéry où la messe est dite en français, en anglais et en tamoul.",
    history:
      "**Quatre églises, un seul site.** Les capucins bâtirent ici la première chapelle en 1707, un an après la mort de [François Martin](/fr/history/lives-and-legacies/francois-martin). Une deuxième fut construite de 1739 à 1758 sous les gouverneurs Dumas et [Dupleix](/fr/history/lives-and-legacies/dupleix), puis rasée par les Britanniques en 1761. Une troisième s'éleva de 1765 à 1770 ; son clocher carré et sa nef furent intégrés au bâtiment actuel. La quatrième et actuelle église fut construite de 1851 à 1855 par l'ingénieur Louis Guerre (1800–1865), dont la famille vivait à Pondichéry depuis le XVIIIe siècle. Les résidents tamouls appellent encore le site Capus Koil (« église des Capucins » en phonétique tamoule), en hommage à l'ordre qui lança tout cela en 1674.\n\n**L'ingénieur.** Louis Guerre bâtit aussi le phare et nombre des plus belles résidences du quartier. L'église repose sur un soubassement, accessible par deux escaliers symétriques d'une douzaine de marches chacun, et mesure 55 par 35 mètres. Sa coupole (polygonale, au-dessus de la croisée) diffuse une lumière douce à travers huit fenêtres à claire-voie en bleu, jaune et rouge au-dessus du maître-autel. Cet autel, en marbre blanc veiné de gris, fut offert par [François Gaudart](/fr/history/lives-and-legacies/francois-gaudart) ; il porte un bas-relief de la Cène en laiton forgé.\n\n**Jeanne d'Arc.** Entre l'église et la mer s'étend un petit jardin. En son centre : une Jeanne d'Arc de marbre, en armure, portant un étendard de bataille, installée en avril 1923, offerte par [François Gaudart](/fr/history/lives-and-legacies/francois-gaudart), homme politique et industriel. Jeanne chassa les Anglais de France ; les Anglais avaient rasé cette église en 1761. Sous le gouverneur [Charles Baron](/fr/history/lives-and-legacies/charles-baron) pendant la Seconde Guerre mondiale, la fête annuelle devint une commémoration gaulliste : la France libre se rassemblant autour d'une sainte-guerrière française médiévale, dans une église coloniale, sur le golfe du Bengale.\n\n**Noël et Pâques.** C'est l'une des trois églises qui célèbrent une veillée aux chandelles à [Noël](/fr/festivals/christmas) et à [Pâques](/fr/festivals/easter). À minuit, toutes les lumières du bâtiment s'éteignent et l'assemblée allume ses bougies ensemble.",
    highlights: [
      "Sur la façade : deux inscriptions latines. Au-dessus de la porte : DOMUS DEI (Maison de Dieu). Sur l'entablement : D.O.M. SUB INVOCATIONE DOMINAE ANGELORUM (Sous la protection de Notre-Dame des Anges). Comptez les 24 niches sur les tours : 12 apôtres alternant avec 12 urnes.",
      "À l'intérieur, devant l'autel : une pierre tombale du gouverneur de Calan, mort en 1850 alors qu'il venait de planifier cette église même. Il ne la vit jamais construite.",
      "Le jardin de Jeanne d'Arc entre l'église et la mer : à visiter idéalement à l'aube, quand la lumière vient de l'est directement sur le visage de la statue ; l'église fut alignée ainsi délibérément.",
    ],
    visitInfo: {
      hours: "Ouverte tous les jours pour les offices et les visiteurs ; tôt le matin de préférence",
      entry: "Gratuit",
      tip: "La messe du dimanche est célébrée en français, en anglais et en tamoul, la seule église de Pondichéry à le faire. Commencez votre promenade dans le quartier français ici et dirigez-vous vers le sud le long de la Promenade.",
    },
  },
  {
    id: "botanical-garden",
    name: "Jardin botanique",
    era: "Créé en 1826",
    metaTitle: "Jardin botanique, 1 500 variétés de plantes à Pondichéry",
    metaDescription: "Neuf hectares avec 1 500 variétés de plantes, des plantes fossiles, des arbres géants, un petit train, des fontaines chantantes et un parc fossile.",
    summary:
      "1 500 variétés de plantes réparties en 30 sections, dont des plantes fossiles et des arbres géants qui poussent depuis 1826. Neuf hectares d'ombre, un petit train, des fontaines chantantes, et un parc fossile. L'étape familiale la plus sous-estimée de Pondichéry.",
    history:
      "**Pourquoi 1826 ?** La France venait de récupérer Pondichéry définitivement après les guerres napoléoniennes. Les gouverneurs de la Restauration reconstruisaient les institutions de la ville : le Collège français (1826), le phare (1835), l'École de droit (1838). Le jardin botanique faisait partie du même programme, un investissement scientifique qui disait : nous restons. Dès 1829, trois ans à peine après sa création, 800 à 900 espèces y poussaient déjà.\n\n**Le scientifique.** En 1838, l'éminent botaniste français S.G. Perottet arriva et ajouta de nombreuses espèces nouvelles et rares, transformant le jardin en herbier vivant. Il relia Pondichéry aux réseaux du Muséum national d'Histoire naturelle de Paris. Après 1954, le ministère de l'Agriculture reprit l'entretien et le jardin est resté ouvert chaque jour depuis.\n\n**Les joyaux.** Des arbres géants plantés au XIXe siècle forment la canopée qui fait de ce jardin ce qu'il est. Des plantes fossiles, espèces anciennes antérieures de plusieurs millions d'années au jardin colonial, comptent parmi les choses les plus insolites que vous verrez. La Fête des Fleurs annuelle attire des amoureux de la nature de toute la région. Venez en hiver (novembre à février) pour les meilleures conditions.",
    highlights: [
      "Le parc fossile : des plantes qui existaient avant les humains, dans un jardin planté par des scientifiques coloniaux français. Le rapprochement est discrètement extraordinaire.",
      "Asseyez-vous sous l'un des géants du XIXe siècle et écoutez. Les oiseaux et les insectes de la canopée font le reste. Aucun panneau d'information nécessaire.",
      "Le soir : la fontaine musicale exécute des jets colorés aux formes et motifs variés, réglés sur la musique. La fontaine aux lotus voisine est l'alternative plus tranquille.",
    ],
    visitInfo: {
      hours: "10h00–17h00 tous les jours (week-ends compris)",
      entry: "20 ₹ (adultes), 10 ₹ (enfants)",
      tip: "Idéal de novembre à février quand la chaleur est gérable. Combinez avec le musée Pudhuvai juste à côté. Prévoyez au moins une heure ; les familles avec enfants voudront deux heures.",
    },
  },
  {
    id: "french-consulate",
    name: "Consulat de France",
    era: "Après 1962 (continuité institutionnelle depuis 1674)",
    metaTitle: "Consulat de France, mission française active à Pondichéry",
    metaDescription: "L'un des bâtiments coloniaux les plus rares au monde, la mission diplomatique active de la France sur son ancien territoire, établie ici depuis 1674.",
    summary:
      "Vous regardez le Consulat de France, l'un des bâtiments les plus rares au monde : la mission diplomatique active d'une puissance coloniale sur son ancien territoire. La France est ici depuis 1674. Elle n'est jamais tout à fait partie.",
    history:
      "Quand Pondichéry devint partie de l'Inde en 1962, environ 7 000 résidents choisirent de conserver la nationalité française : fonctionnaires, anciens militaires, familles hindoues, familles catholiques, et familles créoles qui avaient vécu sous le droit français pendant des générations. Leurs descendants forment aujourd'hui une diaspora franco-pondichérienne d'environ 50 000 personnes, vivant en mouvement entre la France et Pondichéry.\n\nLe Consulat sert cette communauté. Son devoir public le plus visible est le Monument aux Combattants sur la Promenade, qu'il entretient et pour lequel il organise la cérémonie annuelle de l'Armistice le 11 novembre, à laquelle assistent le Consul général de France et les dirigeants politiques de Pondichéry. Le 14 juillet, jour de la fête nationale française, des célébrations ont lieu au Consulat : la fête nationale observée, comme depuis des générations, sur la côte de Coromandel.\n\nLe traité de cession qui transféra Pondichéry à l'Inde contenait l'article XXVIII, garantissant le français comme langue officielle du territoire. La Gazette de l'État de Poudouchéry, journal officiel du gouvernement du Territoire de l'Union, conserve son titre français à ce jour. Pondichéry célèbre le jour de la Libération le 16 août, date du transfert de jure en 1962, et non le 15 août avec le reste de l'Inde. Le Consulat dispose aussi d'une antenne à Chennai couvrant la région élargie. Les services de visa sont gérés par un prestataire tiers plutôt qu'au Consulat directement.",
    highlights: [
      "L'une des rares missions diplomatiques françaises sur un ancien territoire français, dans le monde entier",
      "Sert la diaspora franco-pondichérienne d'environ 50 000 personnes",
      "Entretient le Monument aux Combattants sur l'avenue Goubert et organise la cérémonie de l'Armistice chaque 11 novembre",
      "Les célébrations du 14 juillet ont lieu ici chaque année",
      "Traité de cession (1962) : le français garanti comme langue officielle du territoire",
      "Pondichéry célèbre le jour de la Libération le 16 août, et non le 15 août avec le reste de l'Inde",
    ],
    visitInfo: {
      entry: "Ouvert uniquement aux ressortissants français et visiteurs enregistrés. Les services de visa sont gérés par un prestataire tiers, non directement au Consulat. Une antenne se trouve à Chennai.",
      tip: "Visitez le Monument aux Combattants le 11 novembre pour la cérémonie de l'Armistice. Si vous êtes à Pondichéry le 14 juillet, les célébrations ont lieu au Consulat. Le Consul général actuel est Etienne Rolland-Piegue.",
    },
  },
  {
    id: "war-memorial",
    name: "Monument aux Combattants",
    era: "Inauguré en 1938",
    metaTitle: "Monument aux Combattants, avenue Goubert à Pondichéry",
    metaDescription: "Le Monument aux Combattants honore les Pondichériens morts en combattant pour la France lors des Première et Seconde Guerres mondiales.",
    summary:
      "Vous vous tenez devant le Monument aux Combattants, sur l'avenue Goubert. Il commémore les Pondichériens morts en combattant pour la France lors des deux Guerres mondiales. Les noms qui y sont gravés incluent des soldats de Reddiarpalayam, de la communauté catholique tamoule, de familles françaises depuis des générations. Entretenu par le Consulat de France, c'est l'un des signes les plus visibles que la relation entre la France et Pondichéry ne s'est pas terminée en 1962.",
    history:
      "L'Inde française a fourni des soldats aux deux Guerres mondiales dans une proportion rarement mesurée à sa juste valeur. Pendant la Première Guerre mondiale, des milliers d'hommes des cinq comptoirs français servirent sur le front occidental, au Moyen-Orient, et aux Dardanelles. Pendant la Seconde Guerre mondiale, l'Inde française se rallia à la France libre du général de Gaulle en juillet 1940, sous le gouverneur [Charles Baron](/fr/history/lives-and-legacies/charles-baron), l'un des premiers territoires coloniaux au monde à le faire. Les soldats pondichériens allèrent ensuite servir en Afrique du Nord, en Italie, et en France même.\n\nLe monument se dresse sur l'avenue Goubert, au sud de l'extrémité occupée par le Raj Nivas. Inauguré en 1938, il est entretenu par le Consulat de France, dont la présence continue à Pondichéry est elle-même l'un des héritages les plus singuliers de la période coloniale. Chaque 11 novembre, jour de l'Armistice, une cérémonie s'y tient : le Consul général de France, le Lieutenant-Gouverneur de Pondichéry, et des vétérans ou leurs descendants se rassemblent au monument. C'est l'un des rares endroits en Inde où une commémoration militaire française est encore officiellement observée.\n\nLes noms sur le monument racontent une histoire que les récits officiels omettent souvent : des soldats tamouls, sujets nés français, qui traversèrent le monde pour combattre dans des guerres européennes. Le capitaine François Marius Xavier de Reddiarpalayam figure parmi eux. [Victor Simonel](/fr/history/lives-and-legacies/victor-simonel), qui a une rue dans le quartier français, figure parmi eux. Le monument est leur adresse permanente dans la ville.\n\nLe monument est aussi illuminé aux couleurs du drapeau tricolore pour la [Fête de la République](/fr/festivals/republic-day), le 26 janvier, avec le reste du front de mer.",
    highlights: [
      "Inauguré en 1938, entretenu aujourd'hui par le Consulat de France",
      "Commémore le service pendant les deux Guerres mondiales, y compris les volontaires de la France libre à partir de 1940",
      "L'Inde française fut parmi les premiers territoires coloniaux à se rallier à de Gaulle en juillet 1940",
      "Cérémonie annuelle de l'Armistice le 11 novembre, en présence du Consul général de France et du Lieutenant-Gouverneur de Pondichéry",
      "Parmi les noms : le capitaine François Marius Xavier de Reddiarpalayam et Victor Simonel, tous deux honorés par une rue du quartier français",
    ],
    visitInfo: {
      hours: "Ouvert 24h/24 (monument extérieur)",
      entry: "Gratuit",
      tip: "Venez le 11 novembre pour la cérémonie de l'Armistice. Lisez les noms sur le monument : ils sont la trace humaine de ce que signifiait être français et indien à la fois.",
    },
  },
  {
    id: "customs-building",
    name: "La Douane",
    era: "Construit au XIXe s., remanié vers 1940",
    metaTitle: "La Douane, bâtiment Art déco de la Promenade de Pondichéry",
    metaDescription: "Un bâtiment de douane colonial circulaire remanié dans les années 1940 avec des détails Art déco, aujourd'hui l'un des bâtiments les plus photographiés de la Promenade.",
    summary:
      "Un bâtiment colonial circulaire sur l'avenue Goubert, debout au bord du front de mer de Pondichéry depuis le XIXe siècle, veillant sur les marchandises qui passaient entre navire et rivage. Construit pour gérer le commerce maritime, remanié dans les années 1940 avec des détails Art déco, il arbore aujourd'hui le drapeau national indien, et c'est l'un des bâtiments les plus photographiés de la Promenade.",
    history:
      "**Le problème du port.** Pondichéry n'a jamais eu de port naturel. Les navires mouillaient au large et les marchandises rejoignaient la terre par petites embarcations à travers le ressac de Coromandel : un processus lent, coûteux, dangereux, qui définissait l'économie de toute la colonie. Gérer ce qui arrivait, l'évaluer, le taxer, l'enregistrer, c'était l'affaire de la Douane, bâtie sur l'avenue Goubert, au point où le front de mer rencontrait la vie commerciale du quartier français.\n\n**Le bâtiment.** La structure d'origine date du XIXe siècle, construite dans le style colonial classique qui caractérisait les bâtiments publics de Pondichéry à l'époque de la Restauration : hautes colonnes, grandes fenêtres, murs épais contre la chaleur tropicale. Sa forme circulaire ou arrondie la distinguait des blocs rectangulaires environnants, lui conférant une autorité visuelle immédiate sur le front de mer. Vers 1940, le bâtiment fut remanié, son registre supérieur acquérant les détails géométriques et l'ornementation épurée de l'Art déco, un style qui atteignait déjà sa phase tardive en France mais arrivait encore dans le monde colonial. Les deux vocabulaires cohabitent sans contradiction : proportions classiques en bas, raffinement Art déco en haut.\n\n**Ce qu'elle gérait.** Tout ce qui débarquait d'un navire et entrait à Pondichéry passait sous la juridiction administrative de ce bâtiment : textiles, épices, vin, machines, effets personnels, correspondance. Et tout ce qui repartait, aussi. Les recettes fiscales collectées ici finançaient une part significative de l'administration coloniale. Le bâtiment n'était pas simplement décoratif. C'était le système nerveux commercial de tout le comptoir, entre le port et la ville.\n\n**Après 1962.** Quand Pondichéry passa à l'Inde, le bâtiment continua son usage officiel. Aujourd'hui il fonctionne sous le gouvernement indien, le drapeau national flottant sur sa façade, sa fonction douanière et portuaire se poursuivant sous une forme modifiée. Le commerce qu'il supervise a changé ; le bâtiment, non. Il demeure sur la Promenade exactement là où les Français l'avaient placé, l'un des rares bâtiments publics coloniaux de l'avenue Goubert encore en usage officiel actif, et l'une des étapes les plus photographiées de la promenade du front de mer.",
    highlights: [
      "La forme circulaire n'a d'équivalent presque nulle part ailleurs dans la grille du quartier français. Reculez sur l'avenue Goubert et observez les proportions : conçu pour être vu depuis la mer, avant même d'atteindre le rivage.",
      "Deux moments architecturaux dans un seul bâtiment : classicisme colonial du XIXe siècle dans la structure, Art déco des années 1940 dans les détails supérieurs. Le remaniement eut lieu deux ans à peine avant que l'occupation japonaise de l'Indochine française ne change à jamais le monde colonial.",
      "Toujours en usage officiel. Le drapeau indien au-dessus d'une douane coloniale française, sur un front de mer où les Britanniques mouillaient jadis au large. Trois souverainetés, un seul bâtiment, toujours ouvert.",
    ],
    visitInfo: {
      hours: "Extérieur visible depuis l'avenue Goubert à toute heure (bâtiment gouvernemental actif, intérieur non public)",
      entry: "Gratuit à voir de l'extérieur",
      tip: "Se photographie le mieux le matin avec la lumière venant de l'est. Longez la Promenade d'ici vers le sud jusqu'à Notre-Dame des Anges pour la séquence complète du front de mer colonial.",
    },
  },
  {
    id: "dupleix-statue",
    name: "Statue de Dupleix",
    era: "Époque coloniale",
    metaTitle: "Statue de Dupleix, monument colonial français à Pondichéry",
    metaDescription: "La statue en bronze de Joseph François Dupleix se dresse sur le front de mer, commémorant le gouverneur qui faillit rendre la France dominante en Inde.",
    summary:
      "Il gagna la moitié de l'Inde pour la France, puis sa propre compagnie le renvoya. Debout sur le front de mer de ce qui est aujourd'hui un territoire de l'Union indienne, ce Dupleix de bronze se tient près de la mer : un homme dont l'empire ne fut jamais, toujours commémoré dans le pays qui lui a survécu.",
    history:
      "**L'ambition.** De 1742 à 1754, Dupleix dirigea l'Inde française selon une idée radicale : ne pas se contenter de commercer, mais soutenir les princes indiens avec des troupes françaises et empocher le territoire. À son apogée, il détenait l'autorité impériale moghole sur toute l'Inde du Sud, du fleuve Krishna au cap Comorin. Pondichéry était, sur le papier, la capitale du Deccan.\n\n**La trahison.** Ses propres patrons à Paris ne voulaient pas d'un empire ; ils voulaient des dividendes. En 1754, la Compagnie des Indes le rappela et envoya un remplaçant négocier la paix avec les Britanniques. Douze ans de travail se défirent en quelques mois après son départ.\n\n**La ruine.** Il passa ses neuf dernières années à Paris à se battre pour obtenir une compensation, de l'argent qu'il avait dépensé de sa propre poche au service de la France. La compagnie fit obstruction. Il mourut le 13 novembre 1763, ruiné, l'affaire toujours en cours. Le règlement final de sa succession ne fut clos qu'en 1789.",
    highlights: [
      "Il se tient près de la mer, tourné vers les navires qui apportèrent son ascension et le ramenèrent chez lui en disgrâce",
      "Il se tient en terre indienne. L'empire qu'il faillit bâtir devint celui d'un autre, et sa statue est toujours là.",
      "Retournez-vous : la rue Dupleix part vers l'ouest depuis cet endroit, la seule figure de Pondichéry honorée à la fois en bronze sur le front de mer et dans la grille des rues quotidienne.",
    ],
    visitInfo: {
      hours: "Ouvert 24h/24 (statue extérieure, avenue Goubert)",
      entry: "Gratuit",
      tip: "La meilleure lumière est tôt le matin, avec le soleil derrière vous du côté de la mer. La statue de Gandhi se trouve bien plus au nord, près de l'extrémité du Raj Nivas, et non juste à côté de celle-ci : deux hommes de siècles différents qui changèrent chacun le destin de l'Inde, partageant le même boulevard mais pas le même tronçon.",
    },
  },
  {
    id: "gandhi-statue",
    name: "Statue de Gandhi",
    era: "Inaugurée le 26 janvier 1965",
    metaTitle: "Statue de Gandhi, monument de 1965 sur l'avenue Goubert",
    metaDescription: "Inaugurée le 26 janvier 1965, la statue de Gandhi repose sur huit piliers de granit apportés du fort de Gingee à l'époque coloniale française.",
    summary:
      "Vous regardez la statue de Gandhi sur l'avenue Goubert, inaugurée le jour de la République, le 26 janvier 1965, et reposant sur huit piliers de granit vieux de plus de 300 ans. Les piliers furent apportés du fort de Gingee au Tamil Nadu à l'époque coloniale française. La place autour d'elle s'appelle Gandhi Thidal. Une légende locale raconte qu'un tunnel court sous la statue jusqu'au fort de Gingee. Il n'a jamais été ouvert.",
    history:
      "La statue de bronze, haute de 4 mètres, fut sculptée par Debiprasad Roy Choudhury de l'École d'art de Madras et inaugurée le jour de la République, le 26 janvier 1965, trois ans après le transfert de jure de Pondichéry à l'Inde. Elle se dresse sur l'avenue Goubert face à l'ancienne jetée du port, sur ce qu'on appelle aujourd'hui Gandhi Thidal, la place ouverte qui sert de principal lieu de Pondichéry pour les événements culturels et les célébrations nationales.\n\nLes huit piliers monolithiques de granit qui entourent la statue sont plus anciens que la ville elle-même sous sa forme française. Apportés du [fort de Gingee](/discover/explore/daytrip-gingee) au Tamil Nadu à l'époque coloniale française, ils précèdent la statue de plus de trois siècles. Le fort de Gingee fut l'une des grandes forteresses de l'Inde du Sud, tenue à différentes époques par les Marathes, les Moghols, les Français et les Britanniques. Les Français apportèrent ces piliers à Pondichéry ; ils finirent par servir de socle à un monument dédié à l'homme qui mit fin à l'Inde française.\n\nLa statue se dresse à quelques mètres de la statue de Dupleix au nord, et près de la statue de Nehru. Le rapprochement n'est pas planifié mais il est éloquent : Dupleix tenta d'empêcher la domination britannique sur l'Inde par la puissance militaire française. Gandhi démantela le pouvoir britannique par la résistance non violente. Nehru bâtit l'État indépendant qui suivit. Trois hommes, trois siècles, le même front de mer.\n\nLa légende locale ajoute un détail qu'aucun guide ne peut vérifier : un tunnel sous la statue, censé courir jusqu'au fort de Gingee. Il reste inaccessible.",
    highlights: [
      "Statue de bronze, haute de 4 mètres, sculptée par Debiprasad Roy Choudhury de l'École d'art de Madras. Inaugurée le jour de la République, le 26 janvier 1965.",
      "Les huit piliers de granit ont plus de 300 ans, apportés du fort de Gingee à l'époque coloniale française. Le fort que la France détint jadis encadre aujourd'hui la statue de l'homme qui mit fin à l'Inde française.",
      "La place s'appelle Gandhi Thidal : le principal espace de Pondichéry pour les événements culturels et les célébrations nationales.",
      "Face à l'ancienne jetée du port, où les navires mouillaient jadis au large et les marchandises arrivaient par petites embarcations à travers le ressac.",
      "Légende locale : un tunnel sous la statue mène au fort de Gingee. Il n'a jamais été ouvert.",
      "À quelques mètres : la statue de Dupleix au nord, la statue de Nehru à proximité. Trois siècles d'histoire indienne sur un seul boulevard.",
    ],
    visitInfo: {
      hours: "Ouvert 24h/24",
      entry: "Gratuit",
      tip: "Regardez les piliers avant de regarder la statue. Ils sont plus anciens que tout le reste de la Promenade et proviennent d'un fort que la France détint jadis. La statue est arrivée 300 ans plus tard.",
    },
  },
  {
    id: "joan-of-arc-statue",
    name: "Statue de Jeanne d'Arc",
    era: "1920",
    metaTitle: "Statue de Jeanne d'Arc, mémorial français à Pondichéry",
    metaDescription: "Cette statue en marbre blanc du jardin de Notre-Dame des Anges fut offerte en 1920 par l'industriel François Gaudart.",
    summary:
      "Vous regardez une statue en marbre blanc de Jeanne d'Arc dans le jardin de Notre-Dame des Anges, offerte en 1920 par François Gaudart, l'industriel le plus riche que l'Inde française ait jamais produit. Jeanne chassa les Anglais de France au XVe siècle. Les Anglais rasèrent Pondichéry en 1761. Le symbole était délibéré.",
    history:
      "La statue fut offerte par [François Gaudart](/fr/history/lives-and-legacies/francois-gaudart) (1844–1923), fondateur des Forges et ateliers Gaudart-Sainte-Élisabeth, une entreprise métallurgique qui employait à son apogée jusqu'à 4 000 travailleurs indiens. Quand Gaudart vendit l'entreprise en 1919 pour environ 75 millions de francs, ce fut l'une des plus importantes transactions privées de l'histoire de l'Inde française. Il reçut la Légion d'honneur en 1914 et mourut à Cannes en 1923, trois ans après avoir commandé cette statue.\n\nL'occasion fut la canonisation de Jeanne d'Arc par le pape Benoît XV le 16 mai 1920, deux ans après l'Armistice. L'image de Jeanne résonnait à Pondichéry avec une force particulière. Ces mêmes Anglais dont la Compagnie des Indes orientales avait assiégé cette ville quatre fois, l'avait rasée en 1761, et avait systématiquement démantelé la puissance française en Inde, venaient d'être vaincus lors de la Première Guerre mondiale. La Pucelle d'Orléans qui avait chassé les Anglais de France trouva un foyer naturel sur la côte de Coromandel.\n\nLa statue est positionnée pour s'aligner avec le lever du soleil et l'axe est-ouest de Notre-Dame des Anges, faisant du jardin une extension intentionnelle de l'église. Elle est en marbre blanc plutôt qu'en pierre de corail locale, un choix de matériau qui signale à la fois la richesse de Gaudart et son intention de bâtir quelque chose de permanent. Elle devint le point focal d'un rassemblement annuel le jour de la fête de Jeanne (30 mai). Sous le gouverneur gaulliste [Charles Baron](/fr/history/lives-and-legacies/charles-baron) pendant la Seconde Guerre mondiale, ce rassemblement devint un acte explicite de résistance et un point de ralliement pour le mouvement de la France libre en Inde française.\n\nLe jardin reste vivant avec la communauté française. La plupart des matins, des Franco-Pondichériens d'origine française à la retraite s'y rassemblent pour jouer à la pétanque sous la statue. Jeanne d'Arc les regarde. C'est l'une des scènes les plus discrètement françaises de Pondichéry.",
    highlights: [
      "Marbre blanc, non pierre de corail locale : Gaudart commanda quelque chose fait pour durer.",
      "Canonisée le 16 mai 1920 : l'occasion du don. Jeanne chassa les Anglais de France ; les Anglais rasèrent Pondichéry en 1761.",
      "Alignée sur l'axe du lever du soleil de Notre-Dame des Anges. Le jardin est une extension de l'église.",
      "Le donateur François Gaudart vendit son entreprise métallurgique en 1919 pour 75 millions de francs : la plus grande fortune privée que l'Inde française ait produite.",
      "Sous le gouverneur Baron pendant la Seconde Guerre mondiale, le rassemblement annuel de Jeanne d'Arc devint une commémoration gaulliste et une déclaration de résistance.",
      "Des Franco-Pondichériens à la retraite jouent encore à la pétanque dans ce jardin la plupart des matins. L'une des scènes les plus discrètement françaises de la ville.",
    ],
    visitInfo: {
      hours: "Visible 24h/24 depuis la rue Dumas ; église ouverte tous les jours",
      entry: "Gratuit",
      tip: "Venez le matin : la lumière est derrière la façade de l'église, l'alignement avec l'axe de l'autel est visible, et vous avez de bonnes chances de trouver une partie de pétanque en cours sous Jeanne d'Arc.",
    },
  },
  {
    id: "schoelcher-bust",
    name: "Buste de Victor Schoelcher",
    era: "Fin XIXe / début XXe siècle",
    metaTitle: "Buste de Victor Schoelcher, mémorial de l'abolition à Pondichéry",
    metaDescription: "Un mémorial rare en Asie du Sud à Victor Schoelcher, qui abolit l'esclavage dans tout l'Empire français le 27 avril 1848.",
    summary:
      "Vous regardez un buste de Victor Schoelcher (1804–1893), l'homme politique français qui abolit l'esclavage dans tout l'Empire français le 27 avril 1848. C'est l'une des commémorations abolitionnistes françaises les plus rares d'Asie du Sud. Schoelcher est célébré dans toutes les Antilles françaises. Il est moins connu ici, mais le décret qu'il signa s'appliquait aussi à Pondichéry.",
    history:
      "Victor Schoelcher fut le sous-secrétaire d'État à la Marine et aux Colonies du gouvernement provisoire de 1848 qui rédigea et fit adopter l'abolition de l'esclavage dans tous les territoires coloniaux français. Le décret fut signé le 27 avril 1848, deux mois après la révolution de Février qui renversa la monarchie de Juillet. Il s'appliquait de la Martinique et de la Guadeloupe à La Réunion, Mayotte, le Sénégal, et les comptoirs français en Inde.\n\nEn Inde française, l'abolition de 1848 revêtit une signification particulière. L'esclavage au sens propre n'était pas la forme de travail dominante dans le contexte tamoul, mais le décret renforça l'émancipation légale des travailleurs des castes les plus basses liés au service agricole et domestique dans des conditions proches du servage. Il renforça aussi le statut juridique de la communauté catholique tamoule des renonçants, qui avaient renoncé au droit personnel hindou et étaient régis par le droit civil français.\n\nSchoelcher fut républicain toute sa vie. Emprisonné par Napoléon III après le coup d'État de 1851, il revint à la vie publique sous la Troisième République et siégea comme sénateur jusqu'à sa mort en 1893. Son nom apparaît dans tout l'ancien monde français : une ville en Martinique, la Bibliothèque Schoelcher à Fort-de-France, des bustes et monuments dans les territoires qui se souviennent de ce que signifiait ce décret. Ce buste à Pondichéry est l'un des mémoriaux les plus discrets, mais le décret qu'il commémore ne fut pas discret pour ceux qu'il a libérés.",
    highlights: [
      "A aboli l'esclavage dans tout l'Empire français le 27 avril 1848, y compris les comptoirs français en Inde",
      "Le décret s'appliquait à Pondichéry : il renforça le statut légal des travailleurs tamouls liés et de la communauté renonçante",
      "Schoelcher fut emprisonné par Napoléon III en 1851, revint sous la Troisième République, siégea comme sénateur jusqu'en 1893",
      "Son nom figure sur une ville en Martinique, la Bibliothèque Schoelcher à Fort-de-France, et des monuments dans tout l'ancien monde français",
      "L'une des très rares commémorations abolitionnistes françaises en Asie du Sud",
    ],
    visitInfo: {
      hours: "Visible pendant les heures de jour",
      entry: "Gratuit",
      tip: "Schoelcher est un nom familier en Martinique et en Guadeloupe. À Pondichéry, il est presque oublié. Le contraste en dit long sur le fonctionnement de la mémoire coloniale.",
    },
  },
  {
    id: "old-lighthouse",
    name: "Phare de Pondichéry",
    era: "Construit en 1835–1836",
    metaTitle: "Ancien phare, balise coloniale de 1836 à Pondichéry",
    metaDescription: "Construit en 1836 et rouvert en juin 2026, l'ancien phare offre une vue panoramique sur le golfe du Bengale et le quartier français.",
    summary:
      "Construit en 1836 par l'ingénieur colonial Louis Guerre et haut de 29 mètres, l'ancien phare guida les navires à travers le ressac dangereux de Coromandel pendant 143 ans. Rouvert au public en juin 2026 après des décennies de fermeture, on peut désormais grimper jusqu'au sommet pour une vue panoramique sur le golfe du Bengale et le quartier français, puis redescendre vers le café qui a ouvert à l'intérieur.",
    history:
      "La côte de Coromandel présentait un problème de navigation qui tua des marins pendant des siècles : un rivage plat, sans relief, battu par le ressac, avec des bancs de sable mouvants, aucun port naturel, et rien de visible la nuit. L'existence commerciale de Pondichéry dépendait de la capacité des navires à trouver le mouillage au large en sécurité et à transférer les marchandises par petites embarcations à travers le ressac. Une lumière fiable sur ce rivage n'était pas un luxe.\n\nLouis Guerre, l'ingénieur colonial français le plus marquant de la période de la Restauration et de la monarchie de Juillet à Pondichéry, bâtit le phare de 1835 à 1836 sous le gouverneur Saint Simon. Haut de 29 mètres, avec des lampes à huile et des réflecteurs visibles à environ 24 kilomètres en mer, il donna aux navires approchants un repère de navigation nocturne pour la première fois. La base carrée, les murs épais en pierre de corail, et l'enduit ocre chaleureux le placent dans la même famille architecturale que tout autre bâtiment français important de l'époque.\n\nGuerre est remarquable par l'étendue de ce qu'il a bâti : le phare en 1836 et Notre-Dame des Anges sous sa forme actuelle de 1851 à 1855. Aucun autre ingénieur seul n'a laissé une marque aussi visible sur le patrimoine bâti du quartier français au XIXe siècle. Tenez-vous au phare et regardez vers le nord le long de la Promenade : la tour de l'église est visible d'ici. Mêmes mains, même pierre, même décennie.\n\nLe phare fonctionna pendant 143 ans, à travers deux guerres mondiales, l'indépendance de l'Inde, et le transfert de Pondichéry en 1962. Il fut désaffecté en 1979 quand un nouveau phare rayé noir et blanc fut construit à environ 2 km au sud, à Dubrayapet. Pendant des décennies il resta fermé au public, un point de repère sur la Promenade qui ne pouvait être admiré que de l'extérieur. En juin 2026 il rouvrit : les visiteurs peuvent désormais gravir l'escalier intérieur jusqu'au sommet pour une vue étendue sur le golfe du Bengale et les toits du quartier français en contrebas. Un café a ouvert à l'intérieur de la base du bâtiment, en faisant une étape naturelle pour s'asseoir et récupérer après la montée.",
    highlights: [
      "Construit en 1836 par Louis Guerre, qui conçut aussi Notre-Dame des Anges. Même ingénieur, même pierre de corail, même époque.",
      "Haut de 29 mètres, visible à 24 km en mer. Fonctionna 143 ans sans interruption.",
      "Rouvert en juin 2026 : grimpez au sommet pour la meilleure vue surélevée gratuite du golfe du Bengale et de la grille du quartier français depuis la Promenade.",
      "Un café est désormais ouvert dans la base. Redescendez de la montée, asseyez-vous, et regardez vers la mer.",
    ],
    visitInfo: {
      hours: "Vérifier localement les horaires actuels (rouvert en juin 2026)",
      entry: "Vérifier localement le tarif d'entrée actuel",
      tip: "Grimpez d'abord, café ensuite. La vue depuis le sommet est le meilleur panorama surélevé gratuit du quartier français. Le même ingénieur a bâti Notre-Dame des Anges : regardez vers le nord depuis le sommet et vous verrez directement ses tours jumelles.",
    },
  },
  {
    id: "european-cemetery",
    name: "Cimetière européen",
    era: "Vers 1700 – aujourd'hui",
    metaTitle: "Cimetière européen, terrain funéraire colonial à Pondichéry",
    metaDescription: "En usage depuis environ 1700, ce cimetière préserve les tombes de gouverneurs, missionnaires, marchands, et familles franco-pondichériennes.",
    summary:
      "Vous vous tenez au cimetière européen de la rue Victor Simonel, en usage depuis environ 1700 et l'un des plus anciens terrains funéraires coloniaux d'Inde du Sud. Gouverneurs, ingénieurs, missionnaires MEP, marchands, et trois siècles de familles franco-pondichériennes y reposent. Les pierres tombales sont une source historique primaire : elles confirment des dates, des liens de parenté, et des carrières que les archives papier dispersées entre Paris, Aix-en-Provence, et Pondichéry peuvent perdre.",
    history:
      "Le cimetière européen de la rue Victor Simonel est, comme l'a dit un observateur, l'« annuaire silencieux » de l'Inde française : un lieu où les inscriptions des pierres tombales confirment des dates, des liens de parenté, et des carrières que les archives papier dispersées entre Aix-en-Provence, Paris, et Pondichéry peuvent perdre. Il accueille les défunts coloniaux français depuis environ 1700.\n\nLes tombes les plus anciennes, en pierre de corail avec de simples inscriptions latines ou françaises, enregistrent la première génération de bâtisseurs coloniaux français : agents de la Compagnie des Indes, missionnaires MEP, et premières familles renonçantes. Les maladies tropicales tuaient les Européens en quelques mois ou quelques années ; épouses de gouverneurs, enfants, et fonctionnaires subalternes qui ne survécurent pas à leur première mousson remplissent cette section. Nombre des pierres les plus anciennes se sont gravement détériorées, endommagées par l'humidité, l'air salin côtier, et la négligence des années d'occupation britannique quand l'entretien fut abandonné.\n\nLe XIXe siècle est la période la mieux représentée. Les marchands les plus fortunés et les hauts fonctionnaires du long siècle de paix (1816 à 1954) bâtirent des monuments funéraires élaborés : sarcophages de marbre néoclassiques, enclos néo-gothiques à grilles de fer, obélisques, et urnes drapées. Le vocabulaire funéraire est entièrement français, totalement distinct de la pratique funéraire tamoule. C'est une expression physique de la même division sociale qui produisit le canal séparant le quartier français du quartier tamoul.\n\nUn second cimetière, attenant à la cathédrale de l'Immaculée Conception (« Samba Koil ») sur la rue Dumas, conserve les dépouilles épiscopales (300 ans d'évêques) et les tombes des pères MEP indiens et français.",
    highlights: [
      "En usage depuis environ 1700 : gouverneurs, ingénieurs, missionnaires MEP, marchands, et familles franco-pondichériennes.",
      "Monuments funéraires néoclassiques et néo-gothiques du XIXe siècle : sarcophages de marbre, obélisques, enclos à grilles de fer.",
      "Source primaire : les inscriptions des pierres tombales vérifient des dates et des carrières perdues des archives papier.",
      "Un cimetière séparé pour les évêques, à la cathédrale (« Samba Koil ») sur la rue Dumas, conserve 300 ans de dépouilles épiscopales.",
      "La rue Victor Simonel elle-même porte le nom d'un fonctionnaire colonial tué à Verdun pendant la Première Guerre mondiale.",
    ],
    visitInfo: {
      hours: "Heures de jour",
      entry: "Gratuit",
      tip: "Un site paisible, largement en dehors du circuit touristique. Cherchez les tombes en pierre de corail de la première période coloniale à côté des monuments de marbre plus grandioses du XIXe siècle.",
    },
  },
  {
    id: "golconde",
    name: "Golconde",
    era: "Achevé en 1942",
    metaTitle: "Golconde, bâtiment moderniste de l'Ashram à Pondichéry",
    metaDescription: "Achevé en 1942, Golconde fut le premier bâtiment en béton armé coulé sur place de l'Inde et demeure un jalon de l'architecture moderne.",
    summary:
      "Le premier bâtiment en béton armé coulé sur place de l'Inde, achevé en 1942 par un architecte américano-japonais arrivé comme chef de chantier et reparti comme disciple de Sri Aurobindo. Aucun refroidissement mécanique. La brise marine fait le travail. Golconde est une résidence privée de l'Ashram et l'un des bâtiments les plus significatifs de l'histoire de l'architecture moderne.",
    history:
      "**L'architecte et son apprenti.** Antonin Raymond était un architecte tchéco-américain venu au Japon en 1919 comme architecte de projet de Frank Lloyd Wright pour l'Hôtel Impérial de Tokyo. Il resta, fonda son propre cabinet, et prit un jeune assistant américano-japonais nommé George Nakashima. En travaillant pour Raymond, Nakashima parcourut le Japon et étudia les méthodes de construction traditionnelles. En 1936, Raymond l'envoya à Pondichéry pour trois ans superviser le dortoir Golconde pour l'Ashram de Sri Aurobindo. Raymond avait conçu le projet initial. Nakashima devait le construire.\n\n**Le bâtiment que personne d'autre n'aurait pu construire.** Golconde est le premier bâtiment en béton armé coulé sur place de l'Inde. Mais la première structurelle n'est pas toute l'histoire. Nakashima, travaillant sur le terrain dans une ville côtière tropicale qu'il n'avait jamais vue, modifia le projet de Raymond pour l'adapter au climat. Il ajouta une toiture voûtée préfabriquée et un plénum pour isoler du soleil. Il orienta la structure du nord au sud pour capter la brise du golfe du Bengale. Il spécifia des murs en béton à claire-voie ajustables, des coursives de ventilation traversant la section du bâtiment, et des portes coulissantes en teck à lattes horizontales. Le résultat est un bâtiment qui n'a nécessité aucun refroidissement mécanique depuis son achèvement. Il respire. Le vocabulaire moderniste des lignes droites et du béton coulé rencontre l'intelligence pratique d'un abri de marin.\n\n**L'équipe qui l'a construit.** Nakashima travailla avec des adeptes et résidents de l'Ashram, un mélange de travailleurs qualifiés et non qualifiés, la plupart sans expérience préalable en construction. Le bâtiment fut fait à la main sur plusieurs années. Des adeptes fondirent leurs propres ustensiles de laiton donnés pour couler la quincaillerie sur mesure des portes. Rien n'était importé qui pouvait être fait ici. L'architecte tchèque Francois Sammer travailla aussi aux côtés de Nakashima tout au long du projet.\n\n**Ce que l'Ashram lui fit.** En supervisant la construction, Nakashima s'absorba tant dans la philosophie et la vie quotidienne de l'Ashram qu'il devint disciple de [Sri Aurobindo](/fr/history/lives-and-legacies/sri-aurobindo). Il reçut le nom sanskrit de Sundarananda, signifiant celui qui se réjouit de la beauté. Il y pratiqua le Yoga Intégral, la philosophie de Sri Aurobindo du désintéressement et de l'action dédiée. L'effet sur son œuvre ultérieure fut permanent. Le mobilier que Nakashima conçut pour Golconde, les murs coulissants en teck qu'il fabriqua, la précision de chaque détail de construction, tout cela reflète ce qu'il en vint à comprendre comme le Karma Yoga : le travail comme pratique spirituelle, la beauté comme forme de dévotion. Il devint l'un des ébénistes les plus célébrés du XXe siècle, mais c'est à Pondichéry que cette vie a commencé.\n\n**Le bâtiment aujourd'hui.** Golconde reste en usage actif comme résidence privée pour les disciples de l'Ashram de Sri Aurobindo. Il n'est pas ouvert au public. En 2010, le cabinet vir.mueller architects publia une monographie sur le bâtiment, s'appuyant sur des photographies, plans de construction, et lettres et journaux d'archives inédits jusqu'alors. En 2023, la Fondation Nakashima organisa une exposition intitulée Golconde : L'introduction du modernisme en Inde, permettant aux visiteurs de découvrir virtuellement le bâtiment et d'apprendre l'histoire de sa construction. Le bâtiment lui-même reste ce qu'il a toujours été : un sanctuaire au bord côtier du golfe du Bengale, respirant toujours à travers ses murs à claire-voie, ne demandant toujours rien de plus que le vent.",
    highlights: [
      "Aucun refroidissement mécanique, achevé en 1942. Les murs à claire-voie de Nakashima, les coursives de ventilation, et l'orientation nord-sud captent le vent du golfe du Bengale et le font traverser le bâtiment. Une solution climatique qu'il fallut cinquante ans de plus au reste du monde pour nommer architecture durable.",
      "Des adeptes fondirent leurs propres ustensiles de laiton donnés pour couler la quincaillerie sur mesure des portes du bâtiment. Le bâtiment fut fait par les gens qui allaient y vivre, avec ce qu'ils avaient.",
      "Nakashima arriva comme chef de chantier et repartit comme Sundarananda, disciple de Sri Aurobindo. Le nom signifie celui qui se réjouit de la beauté. C'est le fil conducteur de tout ce qu'il créa pour le reste de sa vie.",
    ],
    visitInfo: {
      hours: "Non ouvert au public (résidence privée active pour les disciples de l'Ashram de Sri Aurobindo)",
      entry: "L'extérieur peut être aperçu depuis la rue de la Marine",
      tip: "La monographie de vir.mueller architects (2010) et l'exposition 2023 de la Fondation Nakashima sont les comptes rendus les plus complets du bâtiment pour ceux qui ne peuvent y entrer. Le bâtiment principal de l'Ashram de Sri Aurobindo, à quelques pas au sud, est ouvert aux visiteurs.",
    },
  },
  {
    id: "romain-rolland-library",
    name: "Bibliothèque Romain Rolland",
    era: "Fondée en 1827",
    metaTitle: "Bibliothèque Romain Rolland, fondée en 1827 à Pondichéry",
    metaDescription: "L'une des plus anciennes bibliothèques publiques d'Inde, conservant environ 400 000 documents en français, anglais et tamoul, dont des manuscrits.",
    summary:
      "Bienvenue à la Bibliothèque Romain Rolland, fondée en 1827 sous le nom de Bibliothèque Publique de Pondichéry, l'une des plus anciennes bibliothèques publiques d'Inde. Elle conserve environ 400 000 documents en français, anglais et tamoul, dont des manuscrits. Elle fut rebaptisée en 1966 en l'honneur de Romain Rolland, le lauréat français du prix Nobel qui correspondit avec Gandhi et Tagore et ne visita jamais Pondichéry. Son nom orne aussi une rue de la ville.",
    history:
      "La Bibliothèque Publique de Pondichéry fut fondée en 1827 sous le gouvernorat du comte Dupuy, dans le cadre du même investissement de l'époque de la Restauration dans les institutions civiles qui produisit aussi le Collège français. Dans un comptoir qui avait été rasé deux fois de mémoire vivante, une bibliothèque publique était une affirmation de permanence : ce n'était pas une garnison, c'était une ville.\n\nPendant près de 140 ans, elle porta le nom de Bibliothèque Publique. En 1966, durant les célébrations du centenaire de la naissance de [Romain Rolland](/fr/history/lives-and-legacies/romain-rolland) (1866–1944), elle fut rebaptisée en son honneur. Rolland était un écrivain français, lauréat du prix Nobel de littérature (1915), et l'une des voix françaises les plus importantes dans son engagement avec la pensée indienne. Il correspondit abondamment avec Gandhi et Tagore, écrivit des biographies des deux, et devint un symbole du lien intellectuel entre la France et l'Inde. Il ne vint jamais à Pondichéry, mais son nom orne désormais une rue et la bibliothèque principale de la ville.\n\nAujourd'hui, la bibliothèque conserve environ 400 000 documents : livres, revues, magazines, ouvrages en braille, et manuscrits français et anglais. Elle fait circuler environ 200 000 documents par an, ce qui en fait l'une des bibliothèques patrimoniales les plus activement utilisées d'Inde du Sud. Elle est ouverte au public et l'entrée est gratuite.",
    highlights: [
      "Fondée en 1827 par le gouverneur Dupuy : l'une des plus anciennes bibliothèques publiques d'Inde.",
      "Environ 400 000 documents dont des manuscrits français et anglais. Circulation annuelle : 200 000.",
      "Rebaptisée en 1966 pour Romain Rolland, lauréat français du prix Nobel qui correspondit avec Gandhi et Tagore.",
      "Rolland ne visita jamais Pondichéry. Son nom orne aussi l'une des rues principales du quartier français.",
      "Entrée gratuite. L'une des bibliothèques patrimoniales les plus activement utilisées d'Inde du Sud.",
    ],
    visitInfo: {
      hours: "Vérifier localement les horaires actuels",
      entry: "Gratuit",
      tip: "La collection de manuscrits français et tamouls est la partie la plus rare du fonds. Demandez au comptoir si vous souhaitez consulter des documents de l'époque coloniale.",
    },
  },
  {
    id: "hotel-de-ville",
    name: "La Mairie",
    era: "Construit en 1870–1871",
    metaTitle: "La Mairie, hôtel de ville français de 1870 à Pondichéry",
    metaDescription: "Construit en 1870 sur l'avenue Goubert, cet hôtel de ville néoclassique fut le principal symbole de l'autorité municipale française sur la côte de Coromandel.",
    summary:
      "Vous regardez la Mairie de Pondichéry, l'hôtel de ville construit en 1870 sur l'avenue Goubert face à la mer. Sa façade néoclassique blanche, ses colonnes, et ses détails en bois sculpté en firent le symbole le plus visible de l'autorité municipale française sur la côte de Coromandel. Une partie du bâtiment d'origine s'est effondrée en 2014 après de fortes pluies. Des travaux de restauration sont en cours depuis.",
    history:
      "Construit de 1870 à 1871 sur l'avenue Goubert, l'Hôtel de Ville fut le centre institutionnel de la vie municipale de la Pondichéry française. Sa façade néoclassique blanche, son avant-corps à colonnades, et son intérieur en bois sculpté l'inscrivaient fermement dans la tradition de l'architecture civique française : un bâtiment qui affirmait, visiblement, qu'il s'agissait d'une ville dotée d'un gouvernement, d'une salle du conseil, et d'une prétention à la permanence.\n\nLe bâtiment abrita le conseil municipal, les bureaux d'enregistrement, et l'appareil administratif du comptoir français pendant près d'un siècle. Après le transfert de jure de Pondichéry à l'Inde en 1962, il continua son usage, accueillant l'Assemblée législative de Pondichéry dans les années 1960 avant que l'Assemblée ne déménage rue Victor Simonel.\n\nEn octobre 2014, une large section de la structure d'origine s'effondra à la suite de fortes pluies de mousson, une combinaison d'âge, d'entretien différé, et de la vulnérabilité particulière des bâtiments en pierre de corail à une saturation prolongée. L'administration déménagea vers des bâtiments annexes. Des travaux de reconstruction et de restauration sont en cours depuis, visant à redonner au bâtiment une forme proche de l'originale.\n\nL'administration quotidienne de la municipalité de Pondichéry opère désormais depuis le n°1 de la rue Dumas, à quelques pas du front de mer. L'hôtel de ville lui-même, une fois restauré, demeure l'un des bâtiments civiques coloniaux les plus significatifs architecturalement d'Inde du Sud.",
    highlights: [
      "Construit en 1870 sur l'avenue Goubert, face à la mer : le symbole le plus visible de l'autorité municipale française à Pondichéry.",
      "Façade néoclassique blanche, colonnes, et détails en bois sculpté dans la tradition de l'architecture civique française.",
      "Abrita le conseil municipal, les bureaux d'enregistrement, et brièvement l'Assemblée législative de Pondichéry dans les années 1960.",
      "Une partie de la structure d'origine s'est effondrée en 2014 après de fortes pluies de mousson. La restauration est en cours depuis.",
      "La municipalité de Pondichéry opère désormais depuis le n°1 de la rue Dumas.",
    ],
    visitInfo: {
      hours: "Extérieur visible depuis l'avenue Goubert à toute heure. Accès intérieur selon l'état de la restauration.",
      entry: "Gratuit à voir de l'extérieur",
      tip: "Vérifiez l'état actuel de la restauration avant de visiter l'intérieur. La façade sur le front de mer est le principal attrait visuel.",
    },
  },
  {
    id: "manakula-vinayagar",
    name: "Temple Manakula Vinayagar",
    era: "Précoloniale (avant 1674)",
    metaTitle: "Temple Manakula Vinayagar, sanctuaire historique de Ganesh",
    metaDescription: "Un temple majeur dédié à Ganesh, antérieur à l'arrivée des Français en 1674, resté sur son site d'origine grâce à une résistance locale soutenue.",
    summary:
      "L'un des plus anciens temples hindous en activité continue de Pondichéry, établi avant l'arrivée des Français en 1674. Il resta sur son site historique tandis que la ville coloniale se développait autour de lui, survivant à toute tentative de relocalisation grâce à une résistance locale soutenue.",
    history:
      "À quelques pas de l'Institut français, le temple Manakula Vinayagar est l'un des plus anciens temples hindous en activité continue de Pondichéry. Établi avant l'arrivée des Français en 1674, il resta sur son site historique tandis que la ville coloniale se développait autour de lui et se dresse aujourd'hui comme l'un des monuments religieux et culturels les plus importants de la ville.\n\n**Histoire**\n\nLe temple était déjà établi quand la Compagnie française des Indes orientales fonda son comptoir à Pondichéry en 1674. Tandis que l'administration coloniale développait la ville selon un plan de rues planifié, les autorités tentèrent à plusieurs reprises au XVIIIe siècle de déplacer le sanctuaire. Ces propositions se heurtèrent à une opposition soutenue de la communauté hindoue locale, et le temple resta à son emplacement historique. Sa présence continue reflète à la fois la force de la vie religieuse locale et les limites de l'autorité coloniale à remodeler un paysage sacré déjà existant.\n\n**Le sanctuaire**\n\nLa divinité principale est Vinayagar, le nom tamoul de Ganesh, vénéré ici sous le nom de Manakula Vinayagar. Le gopuram plaqué or du temple est orné de nombreuses représentations de Ganesh, tandis que l'intérieur présente des piliers peints, des plafonds richement ornés, et une série de mandapams menant au sanctuaire. Des pujas quotidiennes se déroulent tout au long de la journée, attirant un flux constant de fidèles. Les offices du matin et du soir sont particulièrement empreints d'atmosphère, avec des chants, des cloches, et de la musique dévotionnelle emplissant le temple.\n\nC'est le temple au cœur de [Vinayaka Chaturthi](/fr/festivals/vinayaka-chaturthi), et l'une des premières étapes de prière au matin de [Deepavali](/fr/festivals/deepavali).",
    highlights: [
      "Établi avant l'arrivée des Français en 1674, c'est l'un des plus anciens temples en activité de Pondichéry.",
      "Les autorités coloniales tentèrent plusieurs fois de le relocaliser. La communauté locale refusa à chaque fois.",
      "Le gopuram plaqué or est orné de nombreuses représentations de Ganesh.",
    ],
    visitInfo: {
      hours: "5h45 à 12h30 et 16h00 à 21h30 (horaires variables les jours de fête)",
      entry: "Gratuit",
      tip: "La session du soir est particulièrement gratifiante, quand les lampes sont allumées et que le temple s'emplit d'encens, de chants, et de musique dévotionnelle.",
    },
  },
  {
    id: "white-town-streets",
    name: "Ville Blanche",
    era: "XVIIe–XXe siècle",
    metaTitle: "Ville Blanche, rues coloniales françaises de Pondichéry",
    metaDescription: "Demeures ocre jaune, rue Dupleix, rue Suffren, et rue Bussy composent l'un des paysages de rues coloniales françaises les mieux préservés au monde.",
    summary:
      "Une grille de demeures ocre jaune en pierre de corail, de murs de bougainvillées, et de rues nommées rue Dupleix, rue Suffren, rue Bussy. Le paysage de rues coloniales françaises le mieux préservé au monde, bâti sur un plan hollandais, rempli de noms français, dans une ville qui fait aujourd'hui partie de l'Inde.",
    history:
      "**Entrez dans la plus ancienne rue de l'Inde française.**\n\nMarchez vers le nord sur la rue de la Marine, la rue nommée non pas d'après une personne mais d'après la mer elle-même, l'institution sans laquelle Pondichéry n'aurait pu survivre. C'est le petit matin. L'air est frais venu du golfe du Bengale, chargé de jasmin et du sel léger de la marée de la veille. Des murs jaunes s'élèvent de chaque côté, leur enduit lisse et chaud dans la lumière nouvelle. Les bougainvillées tombent en cascades violettes sur des balcons en pierre de corail. Quelque part plus loin, quelqu'un déverrouille des fenêtres à volets. Des volets en bois vert, hauts de deux mètres cinquante, peints couleur de vieux verre de bouteille. Ils grincent en s'ouvrant. Les sons du matin arrivent : une sonnette de vélo, une cloche de temple, un appel à la prière au loin.\n\nVous venez d'entrer dans le paysage de rues coloniales françaises le mieux préservé sur terre. Mais la vérité plus profonde est que vous venez d'entrer dans quelque chose de bien plus étrange. La grille que vous parcourez n'a pas été conçue par les Français. Les bâtiments ne datent pas de l'époque de Dupleix ; ils furent reconstruits après que les Britanniques eurent détruit la ville en 1761. La rue sur laquelle vous marchez fut arpentée par un courtier tamoul qui écrivait en tamoul, et dont le journal est le plus beau portrait que nous ayons du monde colonial français. Rien dans le quartier français n'est simple. Tout y est étonnant.\n\n**Avant les Français, avant tout le monde**\n\nCette côte était ancienne bien avant l'arrivée d'aucun Européen. Les Romains vinrent les premiers, ou presque. Trois kilomètres au sud d'où vous vous trouvez, la rivière Ariyankuppam rencontre le golfe du Bengale à un site appelé Arikamedu, et dans la boue de cet ancien port, des archéologues ont trouvé de la poterie arrétine : une vaisselle à glaçure rouge fabriquée à Arezzo, en Italie, marquée des cachets de potiers vivants du temps où Auguste était empereur. Pas des imitations locales. Des originaux. Expédiés d'Italie jusqu'à cette côte précise, il y a environ deux mille ans. Les poètes tamouls du Sangam écrivaient sur les yavanas, les Romains, arrivant avec des navires chargés de vin et repartant avec du poivre et de fines étoffes. Pondichéry était une ville mondiale avant d'être une ville française.\n\nLes Pallavas tinrent cette côte, puis les Cholas, puis les Pandyas, puis Vijayanagar, puis le sultanat de Bijapur. Le nom tamoul local signifiait simplement « ville nouvelle », Puducherry : un lieu qui s'était déjà réinventé bien des fois avant l'arrivée des Européens. Quand un jeune marchand français nommé [François Martin](/fr/history/lives-and-legacies/francois-martin) posa pour la première fois les yeux sur cette bande côtière plate en 1674, ce qu'il vit fut un village de pêcheurs sur une crête dunaire, adossé à une lagune et un canal, s'étendant vers l'intérieur. Il vit autre chose aussi. Il vit que ce lieu pouvait être tenu.\n\n**Les six hommes qui bâtirent une ville**\n\nLa scène est presque impossible à croire. Nous sommes en septembre 1674. San Thomé, la place forte au nord de Madras que la France avait brièvement tenue, vient de se rendre aux Hollandais. L'amiral français a pris le large. Le supérieur de Martin a été rappelé. Martin se retrouve à Pondichéry avec six hommes. Six hommes et un village de pêcheurs sur le rivage le plus traître, le plus battu par le ressac, le plus dépourvu de port de tout l'océan Indien.\n\nSon protecteur, le gouverneur local Chirkhan Loudy, lui conseille de partir. Tout le monde lui conseille de partir. Martin reste. Son raisonnement, consigné dans ses Mémoires, est précis et presque magnifique de clarté : si la France abandonne ce site, elle ne sera jamais autorisée à y revenir, et les Hollandais l'occuperont immédiatement. Alors il reste. Il écrit des lettres. Il négocie. Il cultive Chirkhan avec la patience d'un homme qui comprend que ce qu'il bâtit prendra des décennies, non des mois. Les Hollandais envoient six navires de guerre en 1678. Martin, avec trente-trois hommes dont deux invalides, prépare les défenses et attend. Le commandant hollandais hésite. Les semaines passent. La paix de Nimègue arrive d'Europe comme un sursis. Les Hollandais repartent.\n\nC'est le véritable moment fondateur du quartier français. Non pas une déclaration, non pas une cérémonie, mais un homme qui refusa de partir.\n\nMartin passa les trois décennies suivantes à bâtir. Des rues, un fort, un canal, une industrie textile. Il mourut ici le 30 décembre 1706 et fut enterré au Fort Saint-Louis. Il ne retourna jamais en France. Il avait quitté Paris en 1665 à l'âge de trente ans, et cette ville fut son seul foyer pendant quarante ans. Une rue porte son nom : la rue François Martin. Marchez-y un matin et pensez à l'homme qui tint ce lieu avec six soldats pendant qu'un amiral prenait le large.\n\n**La ville qui parlait à Versailles**\n\nSous les successeurs de Martin, Pondichéry grandit tranquillement. Mais ce fut [Joseph François Dupleix](/fr/history/lives-and-legacies/dupleix), arrivant comme gouverneur général le 15 janvier 1742 sous vingt et un coups de canon, qui transforma cette modeste capitale coloniale en quelque chose que la cour de Versailles ne pouvait ignorer.\n\nDupleix avait une théorie. Il avait passé des années à Chandernagor au Bengale, observant l'Empire moghol se dissoudre en crises de succession, observant les princes indiens s'affronter avec des armées que quelques centaines de soldats formés à l'européenne pouvaient faire basculer. Il comprenait ce que ses supérieurs à Paris refusaient obstinément d'accepter : que la présence militaire était la condition préalable de la domination commerciale, non une distraction coûteuse. Soutenez le bon prince indien avec des troupes françaises, et vous récoltez non seulement des droits commerciaux mais aussi du territoire, des revenus, et la souveraineté.\n\nIl se mit à le pratiquer. En décembre 1749, le nouveau Nizam d'Hyderabad, Muzaffar Jang, vint en personne à Pondichéry, au Palais du Gouvernement en bordure du parc Bharathi, pour reconnaître son protecteur français. Des princes indiens venaient dans ces rues pour négocier. Des envoyés impériaux moghols étaient reçus dans cette ville. La concession formelle de l'empereur moghol fit de Dupleix le nawab et gouverneur de toute l'Inde du Sud, du fleuve Krishna au cap Comorin. Pondichéry était, sur le papier, la capitale du Deccan.\n\nUn témoin anonyme écrivit en 1746 : « Chaque jour, quand il sort de chez lui, il est précédé de deux drapeaux et d'une escorte d'une douzaine de gardes montés. Quand il défile en cérémonie, il est précédé de plus de cent cavaliers et de trois éléphants, sur lesquels ses drapeaux sont portés, et son carrosse est suivi d'une foule de cavaliers et de bouffons. » Ce n'était pas de la vanité. C'était une politique calculée. Pour être reconnu par les souverains indiens comme un acteur souverain, il fallait en avoir l'apparence. Dupleix en avait l'apparence. Et Pondichéry, pendant une brève et éclatante décennie, en fut le joyau : évoquée à Versailles, redoutée à Madras, stupéfiante pour chaque voyageur qui arrivait par petite embarcation à travers le ressac de Coromandel.\n\nLe gouverneur de Madras, Saunders, écrivit à la Compagnie britannique des Indes orientales en février 1751 : « Les Français s'efforcent de s'établir dans les lieux les plus commodes de la côte et posent les fondations d'un commerce avantageux sans le moindre égard pour les intérêts de leurs voisins. » Robert Clive, ancien comptable devenu commandant militaire, démantela la position française dans le Carnatic pièce par pièce. Paris choisit les dividendes plutôt que l'empire. En octobre 1754, Dupleix quitta Pondichéry à bord du Duc d'Orléans. Il ne devait jamais revenir. Il passa ses neuf dernières années à Paris à se battre contre la Compagnie pour obtenir une compensation et mourut ruiné en 1763, l'affaire toujours ouverte. La statue de bronze sur l'avenue Goubert le montre tel qu'il était à son apogée : face à la mer, vers les navires qui apportèrent son ascension et le ramenèrent chez lui en disgrâce. Il se tient en terre indienne. L'empire qu'il faillit bâtir devint celui d'un autre. Sa statue est toujours là.\n\n**L'homme qui observa tout et l'écrivit**\n\nPour comprendre Pondichéry au temps de Dupleix, il faut un livre : le Journal privé d'[Ananda Ranga Pillai](/fr/history/lives-and-legacies/ananda-ranga-pillai), douze volumes en tamoul, écrits par l'homme qui fut plus proche de Dupleix que quiconque en vie.\n\nPillai était le dubash, le courtier en chef et interprète de l'établissement français. Le mot combine des racines tamoules signifiant « deux langues », mais le rôle allait bien au-delà de la traduction : il gérait le volet indien de toutes les opérations commerciales, accordait du crédit, négociait avec les fonctionnaires locaux, et servait de service de renseignement social pour toute la colonie. Son journal enregistre tout. Les humeurs du gouverneur. Les mouvements des officiers français. Les ragots du bazar. Les conversations privées avec Dupleix lui-même, rapportées longuement avec une franchise qu'aucun document officiel ne pourrait égaler. Quand Dupleix parle amèrement de son rival La Bourdonnais, Pillai le consigne en discours direct : « C'est un homme d'un esprit d'une mesquinerie totale, et entièrement indifférent au coup porté à l'honneur français. »\n\nMais Pillai écrivit aussi l'un des plus beaux passages de l'histoire de l'Inde française, comparant les trois gouverneurs qu'il avait servis à des jardiniers : « Monsieur Lenoir travaillait comme un jardinier. Il enrichissait la terre, labourait, fertilisait et préparait ses récoltes. Il planta des arbres qui fleurirent et dont il apprécia les fruits durant son temps. Monsieur Dumas se contentait de dévorer la récolte. Du temps de Monsieur Dupleix, une tempête dévora le jardin. »\n\nSa maison se dresse encore dans le quartier français. Plan tamoul autour de cours intérieures, fine sculpture sur bois d'artisans tamouls, proportions coloniales françaises à l'étage supérieur. Passez devant et comprenez que c'est ce qu'était réellement le quartier français : ni français, ni tamoul, mais quelque chose qui n'avait jamais existé nulle part ailleurs sur terre.\n\n**L'année où tout fut détruit**\n\n16 janvier 1761. Les Britanniques entrent dans Pondichéry. Ils ne l'occupent pas. Ils la rasent.\n\nC'est le fait qui réécrit tout ce que vous pensiez savoir sur le quartier français. Les bâtiments que vous admirez aujourd'hui ne sont pas les bâtiments de Dupleix. Ce ne sont même pas les bâtiments que François Martin construisit. Les Britanniques passèrent trois mois à démolir systématiquement toute la ville, jusqu'aux fondations. Le palais, le Fort Louis, les églises, les entrepôts : tout disparut. Ce n'était pas un dommage collatéral ; c'était une politique. L'objectif était de s'assurer que la France ne puisse jamais retrouver une base opérationnelle sur la côte de Coromandel.\n\nLe gouverneur [Law de Lauriston](/fr/history/lives-and-legacies/law-de-lauriston) arriva en 1765 pour trouver des décombres là où s'était dressée une ville. Il aurait reconstruit 200 maisons européennes et 2 000 maisons tamoules en cinq mois, suivant l'ancien tracé des rues, parce que les rues elles-mêmes étaient la mémoire de la ville. La grille survécut. Les murs, non. Et voici l'ironie plus profonde : même cette grille célèbre n'était pas française. L'analyse minutieuse de Jean Deloche sur 279 plans de l'époque coloniale a établi que le tracé orthogonal en damier du quartier français fut conçu pendant l'occupation hollandaise de 1693 à 1699. Les Français récupérèrent la ville en 1699 et suivirent simplement le plan. Les noms des rues sont français. La grille en dessous est hollandaise.\n\nLes demeures ocre jaune en pierre de corail devant lesquelles vous passez aujourd'hui, leurs façades à volets peintes en moutarde, crème, et or pâle, datent en grande partie du siècle paisible qui suivit 1816. Ce sont des bâtiments de l'époque de la Restauration sur une grille hollandaise, dans une ville qui se souvient de tous ceux qui y sont jamais venus.\n\n**Le philosophe et le poète**\n\nLa ville coloniale française avait une qualité extraordinaire : c'était le seul territoire de cette côte que les Britanniques ne pouvaient toucher. Au début du XXe siècle, deux grands Indiens le choisirent pour cette raison.\n\nLe poète tamoul [Subramania Bharati](/fr/history/lives-and-legacies/subramania-bharati) arriva en 1908, fuyant les poursuites britanniques pour son journalisme révolutionnaire. Il écrivit ses poèmes les plus célébrés dans ces rues, soutenu par l'étrange sécurité d'une terre étrangère.\n\nPuis vint [Sri Aurobindo](/fr/history/lives-and-legacies/sri-aurobindo). Le 4 avril 1910, le philosophe et ancien nationaliste révolutionnaire descendit d'un navire dans le port de Pondichéry. Le navire s'appelait le SS Dupleix : une petite plaisanterie précise de l'histoire. Il avait quitté Calcutta en secret pour échapper à une troisième poursuite pour sédition. Le territoire français signifiait que la France ne pouvait le livrer. La Grande-Bretagne observait. Il resta. Il ne repartit jamais. Il se retira dans le silence, le yoga, et la philosophie. L'Ashram qu'il établit en 1926 devint une ville dans la ville. Les fleurs sur le samadhi dans la cour principale sont remplacées à toute heure par des pèlerins venus de toute l'Inde. Tenez-vous-y un matin. Le silence est authentique.\n\n**Les rues qui survécurent à tout**\n\nQuand Pondichéry passa à l'Inde le 16 août 1962, une chose remarquable se produisit : rien n'arriva aux panneaux de rue.\n\nLa rue Dupleix survécut. La rue Bussy survécut. La rue Lally-Tollendal survécut, nommée d'après le commandant français qui rendit cette ville en 1761, fut jugé pour trahison à Paris, et fut décapité. Sa rue se trouve aux côtés de celles de ses collègues ; la mémoire du quartier français est complète, non sélective. Les panneaux sont bilingues aujourd'hui : nom français au-dessus, translittération tamoule en dessous, à chaque coin de rue. Pondichéry est la seule ville d'Inde où les noms de rues coloniaux français ont survécu intacts à la décolonisation.\n\n**Comment la parcourir**\n\nVous avez environ deux heures avant que la chaleur ne monte et que les rues ne se remplissent de circulation. Commencez à Notre-Dame des Anges sur le front de mer et marchez vers le sud le long de la [rue Dumas](/fr/discover/white-town/rue-dumas). Regardez les façades : pierre de corail, enduit à la chaux, fenêtres à volets peintes en vert, bleu, et blanc. La pierre est locale, extraite de récifs coralliens sous-marins ; le savoir-faire est tamoul ; les proportions sont françaises. Rien n'est purement une seule chose. Tournez vers l'ouest sur la [rue Dupleix](/fr/discover/white-town/rue-dupleix). La Bibliothèque Romain Rolland, fondée en 1827, conserve 400 000 volumes et la mémoire d'une ville qui lisait en trois langues. Le parc Bharathi occupe l'espace où les envoyés moghols s'approchaient jadis du Palais du Gouverneur. L'Aayi Mandapam en son centre, quatre colonnes classiques sous un dôme, honore une courtisane tamoule nommée Aayi qui fit démolir sa propre maison pour bâtir un réservoir d'eau pour la ville, et que Napoléon III jugea digne d'un monument gréco-romain permanent. Colonnes européennes, légende indienne.\n\nRevenez au crépuscule. Le muret de granit bas le long du front de mer sera plein de monde : toute la ville vient y respirer à la fin de la journée. La lumière devient dorée sur les murs ocre. Le golfe du Bengale s'assombrit. Un prêtre à Notre-Dame des Anges ferme le portail latéral. Quelqu'un joue de la musique dans une cour derrière vous. Deux femmes âgées partagent les marches du socle de la statue de Dupleix, ne regardant pas du tout le bronze, juste la mer.\n\nCette ville observe la mer depuis que les Romains apportèrent du vin d'Italie et repartirent avec du poivre et de fines étoffes. Elle continuera de l'observer longtemps après votre départ.",
    highlights: [
      "Marchez d'abord dans la rue de la Marine : la rue la plus proche de la mer, nommée non pas d'après une personne mais d'après l'institution sans laquelle Pondichéry n'aurait pu survivre. Le bâtiment principal de l'Ashram de Sri Aurobindo lui fait face aujourd'hui.",
      "La maison d'Ananda Ranga Pillai : plan de cour tamoul, façade coloniale française. Le plus bel exemple d'architecture domestique interculturelle de la ville, et la demeure de l'homme dont le journal est le témoignage le plus intime de la Pondichéry de Dupleix.",
      "Regardez les panneaux de rue : bilingues français et tamoul, côte à côte. Pondichéry est la seule ville d'Inde où les noms de rues coloniaux français ont survécu intacts à la décolonisation.",
    ],
    visitInfo: {
      hours: "Rues ouvertes ; meilleure exploration 7h00–10h00 avant la circulation",
      entry: "Gratuit",
      tip: "Tout le quartier se parcourt à pied en 2 à 3 heures. Commencez à Notre-Dame des Anges et marchez vers le sud le long de la rue Dumas, puis coupez vers l'ouest sur la rue Dupleix. Procurez-vous une carte patrimoniale à l'office de tourisme ou à l'Institut français.",
    },
  },
  {
    id: "french-streets",
    name: "Promenade en Ville Blanche",
    era: "Époque coloniale (XVIIe–XXe s.)",
    metaTitle: "Circuit du quartier français, 2 km à travers Pondichéry",
    metaDescription: "Une boucle de deux kilomètres à travers le quartier colonial français préservé de Pondichéry, avec églises, statues, jardins, et monuments du front de mer.",
    summary:
      "Une boucle de deux kilomètres à travers la seule ville coloniale française d'Inde qui ait survécu intacte à la décolonisation. Des instituts de recherche orange, une église du front de mer où la messe est dite en trois langues, la statue de l'homme qui faillit faire de la France la maîtresse du sous-continent, et le parc d'un poète en son cœur. Prévoyez deux heures. Apportez de l'eau. Partez tôt.",
    history:
      "**Où commencer.** Commencez à l'Institut français de Pondichéry sur la [rue Dumas](/fr/discover/white-town/rue-dumas), le grand bâtiment orange qui s'annonce avant même que vous puissiez lire l'enseigne. Cette couleur est délibérée : l'architecture institutionnelle française avait pour habitude d'affirmer sa présence en ocre chaud et saturé, et ce bâtiment, l'un des rares centres de recherche français actifs en Inde, rappelle que la Pondichéry française ne s'est pas achevée avec la décolonisation. Elle s'est poursuivie comme érudition. L'Institut publie la plus belle carte patrimoniale du quartier français ; demandez à l'accueil avant de partir.\n\n**Le front de mer et ses monuments.** Marchez vers l'est jusqu'à l'[avenue Goubert](/fr/discover/white-town/avenue-goubert), la promenade qui fait face au golfe du Bengale. Le Monument aux Combattants se dresse ici, encore entretenu par le Consulat de France, dédié aux résidents de l'Inde française morts pour la France pendant la Première Guerre mondiale : des soldats tamouls qui combattirent à Verdun et aux Dardanelles sous un drapeau tricolore qu'ils n'avaient peut-être jamais vu avant d'embarquer. De l'autre côté de la route, la statue du Mahatma Gandhi se dresse au sein d'un cercle de piliers de granit, une structure blanche face à la mer, sur la même avenue où les gouverneurs français défilaient jadis en cérémonie. Un peu plus au sud, la statue de [Joseph François Dupleix](/fr/history/lives-and-legacies/dupleix) fait face à l'eau : l'homme qui gouverna Pondichéry de 1742 à 1754 et faillit faire de la France la puissance dominante en Inde. Il fut rappelé par sa propre compagnie, mourut ruiné à Paris, luttant encore contre ses créanciers. Sa statue a survécu à l'empire qu'il bâtit.\n\n**Jeanne d'Arc, sous les tropiques.** Entre le front de mer et Notre-Dame des Anges, un petit jardin abrite une Jeanne d'Arc de marbre, en armure, portant un étendard de bataille, offerte par des hommes politiques et industriels français en avril 1923. Elle chassa les Anglais de France. Les Britanniques avaient rasé cette même ville en 1761. Le choix du sujet n'était pas fortuit.\n\n**Le Café, à toute heure.** Sur la promenade, Le Café est le plus ancien café français de Pondichéry, ouvert vingt-quatre heures sur vingt-quatre, ce qui devient utile si vous arrivez avant l'aube pour marcher sur le front de mer pendant que les pêcheurs remontent leurs filets. Asseyez-vous face à la mer, commandez un café, et regardez la baie passer du noir au gris puis à l'or. Le temps que votre tasse soit vide, la ville se sera réveillée autour de vous.\n\n**L'église des trois langues.** Notre-Dame des Anges, dont vous apercevez les tours jumelles couleur crème depuis la promenade, se dresse sur ce site du front de mer depuis 1687, reconstruite quatre fois, et consacrée sous sa forme actuelle en 1855. C'est la seule église de Pondichéry où la messe est célébrée en tamoul, en anglais, et en français, les trois langues des trois siècles de la ville. Vingt-huit vitraux furent expédiés de France et installés dans un bâtiment fait de pierre de corail locale. La messe du matin commence à 5h30. Les grilles ferment à 20h00. La Jeanne d'Arc de marbre dans le jardin extérieur fait face à l'est, vers le soleil levant, vers la mer qui amena tout le monde ici.\n\n**Les érudits qui restèrent.** Retournez dans la grille et vous trouverez les institutions intellectuelles qui sont, sans doute, ce que la France a laissé de plus durable à Pondichéry. L'École française d'Extrême-Orient, universellement connue sous le nom d'EFEO, fondée à Hanoï en 1900 et présente à Pondichéry depuis 1955, se consacre à l'étude des civilisations asiatiques. Ses chercheurs ont documenté des temples, des inscriptions, et des manuscrits à travers l'Inde, l'Asie du Sud-Est, et l'Asie de l'Est. L'UNESCO a reconnu ses travaux sur l'art, l'architecture, et la littérature indiens. Ce n'est pas une archive coloniale qui prend la poussière ; c'est un centre vivant d'érudition en activité. L'Alliance française de Pondichéry, à quelques pas, propose des cours de langue et des programmes culturels qui sont depuis des décennies le cœur culturel français de la ville. Ce ne sont pas des monuments à un empire disparu. Ce sont des institutions actives.\n\n**La plus ancienne église du quartier.** La cathédrale de l'Immaculée Conception, connue localement sous le nom de Samba Kovil (« église du Saint » en tamoul), est l'une des plus anciennes églises de Pondichéry. Son caractère plus sobre et austère reflète la présence française plus ancienne : avant les vitraux et les tours jumelles, avant les grandes ambitions civiques du XIXe siècle. Les murs portent plus d'histoire que la signalétique ne le laisse entendre. Passez-y lentement.\n\n**L'homme qui écrivit la constitution.** Le B.R. Ambedkar Mani Mandabam rend hommage au Dr B.R. Ambedkar, le juriste, économiste, et réformateur social qui rédigea la Constitution de l'Inde. Il est juste qu'une ville dont l'identité repose sur la coexistence du français, du tamoul, et de l'indien dédie un bâtiment à l'homme qui donna à l'Inde son cadre constitutionnel d'égalité. Il aurait compris cette ville.\n\n**Le Lycée.** Le Lycée français international de Pondichéry éduque des enfants de trois à dix-huit ans selon le programme national français, la seule école de ce type en Inde du Sud. Des familles françaises, des familles tamoules, et des résidents internationaux y envoient leurs enfants. L'école rappelle vivant que la Pondichéry française n'est pas un sujet purement historique. C'est un sujet présent.\n\n**Le parc qui fut la place de Napoléon.** Le parc Bharathi est le cœur cérémoniel du quartier français : la place ouverte entourée par le Raj Nivas au nord (la résidence officielle du Lieutenant-Gouverneur, autrefois le palais du gouverneur français), l'Assemblée législative, le Secrétariat, et le musée de Pondichéry. En son centre se dresse l'Aayi Mandapam, quatre colonnes gréco-romaines sous un toit en dôme, bâti sous Napoléon III pour honorer une femme tamoule nommée Aayi qui fit démolir sa propre maison pour fournir de l'eau à la ville, des siècles avant l'arrivée des Français. Pierre européenne, légende indienne. Le parc est ouvert de 6h00 à 20h00. L'entrée est gratuite. Asseyez-vous sur un banc le matin et regardez la ville vivre sa routine : joggeurs, vendeurs, écoliers, retraités lisant le journal à l'ombre des manguiers.\n\n**Le musée qui récompense la lenteur.** Le musée de Pondichéry, à l'angle nord-est du parc Bharathi, conserve 81 sculptures de bronze chola de calibre international, de la poterie romaine importée d'Italie il y a deux mille ans, du mobilier colonial franco-tamoul, et un véhicule que le poète Subramania Bharathi aurait adoré. L'entrée coûte dix roupies et récompense quatre-vingt-dix minutes d'attention sans hâte. Ouvert de 10h00 à 17h00. La seule galerie des bronzes vaut le déplacement.\n\n**Après le circuit.** Les rues du quartier français sont à leur meilleur avant 10h : lumière douce, air frais, volets qui s'ouvrent, odeur de jasmin sur les murs en pierre de corail. Quand la chaleur monte, les vérandas profondes et les cafés patrimoniaux aux hauts plafonds du quartier offrent ombre et café corsé. Prenez n'importe quel virage au hasard hors de l'itinéraire principal et vous trouverez de la beauté dans toutes les directions. Nulle part ailleurs en Inde une ville comme celle-ci ne survit aussi intacte, aussi vivante, et aussi discrètement magnifique.",
    highlights: [
      "L'Institut français de Pondichéry sur la rue Dumas : le bâtiment orange est votre point de départ. Prenez leur carte patrimoniale à l'accueil avant de partir, c'est le meilleur guide de la grille.",
      "Dupleix et Gandhi partagent la même promenade : l'ambition coloniale et l'indépendance qui y mit fin, sans que l'un n'efface l'autre. Placez-vous entre les deux et faites face à la mer.",
      "Notre-Dame des Anges : la seule église de Pondichéry où la messe est célébrée en tamoul, en anglais, et en français. Arrivez tôt et vous pourrez peut-être assister à l'office de 5h30 avant que les touristes ne se réveillent.",
      "L'Aayi Mandapam au centre du parc Bharathi : quatre colonnes européennes au-dessus d'une légende indienne. Lisez la plaque lentement. L'histoire est meilleure que l'architecture.",
      "Le musée de Pondichéry : dix roupies, 81 bronzes chola, de la poterie romaine venue d'Italie, et un véhicule que Subramania Bharathi adorait. Le musée de calibre mondial le moins visité d'Inde du Sud.",
    ],
    visitInfo: {
      hours: "Rues ouvertes 24h/24 ; meilleure marche 6h00–10h00. Notre-Dame des Anges : 5h30–20h00. Parc Bharathi : 6h00–20h00. Musée de Pondichéry : 10h00–17h00",
      entry: "Gratuit (musée de Pondichéry : 10 ₹ adultes, 5 ₹ enfants)",
      tip: "Commencez à l'Institut français sur la rue Dumas et marchez dans le sens des aiguilles d'une montre vers la mer. Prévoyez deux heures pour les monuments et ajoutez quatre-vingt-dix minutes si vous entrez au musée de Pondichéry. Le Café sur la promenade est ouvert vingt-quatre heures sur vingt-quatre et fait une bonne étape petit-déjeuner avant que la chaleur ne monte.",
    },
  },
];
