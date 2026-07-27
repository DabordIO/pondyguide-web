export interface RestaurantGuideFr {
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

export const restaurantGuidesFr: RestaurantGuideFr[] = [
  {
    id: "french",
    title: "Les meilleurs restaurants français de Pondichéry",
    metaTitle: "10 meilleurs restaurants français de Pondichéry",
    metaDescription: "Dix des meilleurs restaurants français de Pondichéry, des demeures patrimoniales aux classiques créoles, avec ce que chacun fait de mieux pour vous aider à choisir.",
    intro:
      "S'il y a un repas à ne pas presser à Pondichéry, c'est bien un repas français.\n\nEn marchant dans les rues chaulées du quartier français, on remarque vite que la restauration y prend une tournure différente de presque partout ailleurs en Inde. Les menus passent sans effort des classiques français aux plats d'inspiration locale, des villas coloniales se sont transformées en élégantes salles à manger, et des cafés débordent sur des rues tranquilles où s'attarder autour d'un café semble parfaitement naturel.\n\nMais tous les restaurants français n'offrent pas la même expérience. Certains sont parfaits pour une soirée romantique dans une demeure patrimoniale restaurée. D'autres conviennent mieux à un petit-déjeuner tranquille, un déjeuner détendu entre deux visites, ou simplement pour profiter de l'atmosphère sans s'engager dans un repas gastronomique formel.\n\nCe guide réunit dix des meilleurs restaurants français de Pondichéry, chacun offrant sa propre interprétation du patrimoine culinaire de la ville. Plutôt que de les classer du meilleur au moins bon, nous avons mis en avant ce que chacun fait particulièrement bien, afin que vous puissiez choisir celui qui correspond à vos plans. Pour plus de détails sur un restaurant en particulier, suivez les liens vers nos guides dédiés pour les horaires, l'emplacement, les prix et des conseils pratiques.",
    whyHeading: "Pourquoi Pondichéry est la capitale française de la gastronomie en Inde",
    whyBody:
      "L'influence française de Pondichéry n'a rien d'artificiel ou de créé pour les touristes. Elle est tissée dans l'histoire même de la ville.\n\nPendant près de trois siècles, Pondichéry fut la capitale de l'Inde française, laissant derrière elle bien plus qu'une architecture et des noms de rues distinctifs. La culture culinaire de la ville s'est développée à travers l'interaction quotidienne entre traditions françaises et cuisine tamoule, donnant naissance à des restaurants qui semblent indéniablement locaux plutôt qu'importés.\n\nAujourd'hui, cet héritage s'exprime de différentes façons. Certains restaurants préservent l'élégance de la restauration française dans de magnifiques bâtiments coloniaux restaurés. D'autres adoptent une approche plus contemporaine, alliant technique européenne, ingrédients et saveurs locales. Même de nombreux cafés de la ville doivent leur atmosphère autant au passé français de Pondichéry qu'à la culture moderne du café.\n\nLe résultat est une scène culinaire sans équivalent ailleurs en Inde, où la cuisine française n'est pas simplement disponible : elle fait partie de l'identité même de la ville.",
    bestFor: {
      "cafe-des-arts": "Le petit-déjeuner, les pauses café et une première découverte du quartier français",
      "coromandel-cafe": "Les longs déjeuners et une restauration haut de gamme détendue",
      "chez-pushpa": "Une introduction intime et riche en histoires à l'authentique cuisine créole familiale",
      "la-villa": "Les occasions spéciales et un dîner élégant centré sur les fruits de mer",
      "villa-helena": "Un cadre patrimonial paisible, à l'écart des rues les plus animées",
      "villa-shanti": "Le dîner sur patio et un plat signature remarquable",
      "carte-blanche": "Un cadre historique et la bouillabaisse créole de référence en ville",
      "les-saveurs": "Une expérience française classique et sans hâte",
      "1-rue-suffren": "Un café de jour qui devient l'une des meilleures sorties du soir à White Town",
      "rasa-table": "Un repas façon dégustation qui récompense les visites répétées",
    },
    blurbs: {
      "cafe-des-arts":
        "Peu d'endroits capturent aussi bien l'esprit détendu du quartier français de Pondichéry que Café des Arts. C'est le genre de lieu où les visiteurs prévoient souvent une brève pause café et finissent par rester bien plus longtemps, absorbés par le cadre et le rythme de vie plus lent devenu synonyme de ce quartier.\n\nSi le menu fait partie de l'attrait, l'expérience va au-delà de la nourriture. Pour beaucoup de voyageurs, Café des Arts n'est pas tant une case à cocher qu'un des cadres de café les plus reconnaissables de Pondichéry à savourer.",
      "coromandel-cafe":
        "Coromandel Café offre une vision plus contemporaine de la cuisine d'inspiration française, tout en restant fermement ancré dans le patrimoine de Pondichéry. C'est un excellent choix si vous cherchez un repas soigné dans un cadre élégant, sans la formalité qui accompagne parfois la haute gastronomie traditionnelle.\n\nQue vous vous arrêtiez pour déjeuner après avoir exploré les rues voisines ou que vous planifiiez un dîner, c'est l'une des adresses les plus constamment recommandées de la ville.",
      "chez-pushpa":
        "Chez Pushpa n'est pas un restaurant au sens habituel. C'est une expérience de dîner chez l'habitant à Ariyankuppam, juste au sud du centre de Pondichéry, où les hôtes réservent bien à l'avance pour manger à la table même de Pushpa. La cuisine y est la créole de Pondichéry dans ce qu'elle a de plus authentique : vadavoum de canard, courge à côtes aux crevettes en poriyal, et un menu qui change selon la saison et l'inspiration de Pushpa elle-même.\n\nCe qui distingue la soirée, c'est Pushpa elle-même, qui raconte les histoires derrière chaque plat en le servant. Pour les voyageurs en quête de plus qu'un simple repas, curieux de la tradition culinaire franco-tamoule, peu d'expériences en ville vont aussi loin.",
      "la-villa":
        "La Villa occupe une demeure coloniale du XIXe siècle méticuleusement restaurée à White Town, sa cour ombragée de bougainvilliers et ses intérieurs délibérément sobres. Elle est depuis longtemps considérée comme l'une des meilleures tables de Pondichéry, avec un menu centré sur les fruits de mer et bâti autour de la pêche locale la plus fraîche.\n\nLe curry de crevettes au lait de coco, servi dans une noix de coco fraîche, et les fusilli aux crevettes et poisson fumé comptent parmi les plats forts de la cuisine, soutenus par l'une des meilleures cartes des vins de la ville. Le service est délibérément sans hâte, faisant de La Villa un choix naturel quand l'occasion appelle quelque chose de mémorable.",
      "villa-helena":
        "Villa Helena occupe une villa coloniale restaurée où murs épais et hauts plafonds gardent la salle à manger naturellement fraîche, même quand les rues extérieures se réchauffent. Elle est plus calme que beaucoup d'autres restaurants patrimoniaux de White Town, et ce calme se ressent tout au long du repas.\n\nLa cuisine passe avec aisance de l'indo-français à l'international, avec une légèreté qui se révèle le mieux dans le carpaccio de poisson fumé et une crème caramel française classique pour conclure. Elle convient aussi bien à un petit-déjeuner sans hâte qu'à un dîner intime.",
      "villa-shanti":
        "Villa Shanti partage la propriété et la philosophie culinaire de La Villa, installée dans un bâtiment patrimonial restauré rue Suffren, autour de l'un des plus beaux patios ombragés de White Town. Le menu passe entre cuisine indienne raffinée, indo-française et européenne, laissant de bons produits locaux porter chaque plat.\n\nLa salade de crevettes et pomelo est devenue la signature du restaurant, et pour de bonnes raisons : elle équilibre la douceur des crevettes locales avec le mordant citronné du pomelo. Associée à l'une des cartes des vins les plus fournies de la ville, Villa Shanti figure invariablement parmi les meilleures tables de Pondichéry.",
      "carte-blanche":
        "Carte Blanche est le restaurant signature de l'Hôtel de l'Orient, installé dans l'une des plus grandes demeures des XVIIIe et XIXe siècles de White Town. Plafonds vertigineux, mobilier ancien et vérandas ombragées en font l'une des recréations les plus convaincantes de la Pondichéry de l'époque française qui subsistent en ville.\n\nLa cuisine se spécialise dans la gastronomie créole de Pondichéry, et la bouillabaisse créole, réinterprétation locale du classique ragoût de fruits de mer provençal, reste le plat pour lequel le restaurant est connu. Peu d'endroits offrent une introduction aussi complète au patrimoine créole de la ville dans un cadre aussi approprié.",
      "les-saveurs":
        "Les Saveurs est ce que Pondichéry offre de plus proche d'un restaurant français traditionnel au sens classique européen. Plutôt que de réinventer des plats familiers, la cuisine s'appuie sur une technique intemporelle et un rythme sans hâte, dans une gracieuse salle à manger coloniale de la rue Dumas.\n\nLes fruits de mer et les plats principaux non végétariens recueillent systématiquement les éloges les plus appuyés, et les desserts conservent le même souci de technique française classique jusqu'à la fin du repas. Une adresse qui récompense les visiteurs en quête de l'authentique plutôt que d'une interprétation fusion.",
      "1-rue-suffren":
        "1 Rue Suffren occupe un bâtiment colonial restauré qui change de personnalité au fil de la journée. De jour, c'est un café détendu, propice à un repas tranquille ou une heure avec un ordinateur portable. Le soir, il devient l'un des bars les plus prisés de White Town sans jamais perdre son charme décontracté.\n\nLa carte de cocktails est parmi les plus fournies de la ville, et le menu éclectique de la cuisine, entre fusion continentale, classiques indiens et cuisine réconfortante d'inspiration mondiale, convient aux groupes aux goûts variés. La brique apparente et le mobilier vintage donnent à l'espace une ambiance rétro qui ne bascule jamais dans le restaurant à thème.",
      "rasa-table":
        "Rasa Table fonctionne moins comme un restaurant conventionnel que comme une table de chef intimiste, nichée dans un espace discret de la tranquille rue de l'Évêché. La salle compacte garde l'attention sur la cuisine, avec un menu concis qui change selon la saison et l'inspiration propre du chef.\n\nLes portions sont réfléchies plutôt qu'ostentatoires, et l'échelle réduite du restaurant permet un service véritablement sans hâte tout au long du repas. Les réservations sont vivement recommandées, les places étant délibérément limitées.",
    },
    quickPicks: [
      { situation: "Un dîner romantique", recommendation: "La Villa" },
      { situation: "Une ambiance patrimoniale de quartier français", recommendation: "Café des Arts" },
      { situation: "Une expérience créole authentique", recommendation: "Chez Pushpa ou Carte Blanche" },
      { situation: "Des saveurs contemporaines et modernes", recommendation: "Coromandel Café" },
      { situation: "Un menu dégustation signé chef", recommendation: "Rasa Table" },
      { situation: "Un dîner raffiné", recommendation: "Villa Shanti ou Les Saveurs" },
      { situation: "Une retraite calme et paisible", recommendation: "Villa Helena" },
      { situation: "Combiner visites et repas", recommendation: "1 Rue Suffren" },
    ],
    faq: [
      { question: "Quel est le meilleur restaurant français de Pondichéry ?", answer: "Cela dépend de l'expérience recherchée. La Villa est souvent choisie pour les occasions spéciales, tandis que Café des Arts est un favori pour une restauration décontractée dans le quartier français." },
      { question: "La cuisine française est-elle chère à Pondichéry ?", answer: "Pas nécessairement. Si plusieurs restaurants français sont haut de gamme, il existe aussi des cafés et des options de milieu de gamme qui offrent une expérience d'inspiration française sans le prix de la haute gastronomie." },
      { question: "Faut-il réserver à l'avance ?", answer: "Les réservations sont recommandées pour les restaurants haut de gamme prisés, surtout le week-end. Chez Pushpa et Rasa Table ont des places limitées et exigent une réservation à l'avance." },
      { question: "Où se trouvent la plupart des restaurants français ?", answer: "Beaucoup des meilleurs restaurants français de Pondichéry sont concentrés dans et autour du quartier français (White Town), ce qui permet d'en explorer plusieurs à pied." },
      { question: "Où peut-on goûter la cuisine française à Pondichéry ?", answer: "La cuisine française se trouve principalement dans White Town, où plusieurs restaurants et cafés proposent des croissants, baguettes, crêpes, quiches, spécialités de fruits de mer et desserts à la française. De nombreux établissements associent les techniques françaises aux ingrédients locaux, créant ainsi une cuisine franco-tamoule originale. Les [rues Suffren](/fr/discover/white-town/rue-suffren) et [Dumas](/fr/discover/white-town/rue-dumas) ainsi que le quartier du front de mer sont particulièrement réputés pour leurs adresses traditionnelles et contemporaines." },
    ],
  },
  {
    id: "cafes-bakeries",
    title: "Les meilleurs cafés et boulangeries de Pondichéry",
    metaTitle: "13 meilleurs cafés et boulangeries de Pondichéry",
    metaDescription: "Treize des meilleurs cafés et boulangeries de Pondichéry, des cours patrimoniales aux haltes café en bord de mer, avec ce que chacun fait de mieux.",
    intro:
      "Certains de vos meilleurs souvenirs à Pondichéry ne naîtront pas d'un dîner fastueux. Ils commenceront par une tasse de café.\n\nPeut-être un petit-déjeuner dans une cour verdoyante nichée dans le quartier français. Peut-être un croissant feuilleté après une promenade matinale sur la Promenade, un après-midi paresseux entre gâteau et conversation, ou une glace du soir avant de rentrer à l'hôtel. Pondichéry a une culture du café qui parle autant de ralentir que de bien manger.\n\nLes cafés de la ville reflètent sa personnalité. Des boulangeries d'inspiration française côtoient de vieux cafés indiens à l'ancienne, des adresses brunch contemporaines partagent leurs rues avec des favoris de quartier, et les desserts artisanaux ne sont jamais loin. Certains sont des destinations en soi, d'autres l'excuse parfaite pour faire une pause entre l'exploration des rues patrimoniales, des galeries et des plages.\n\nCe guide réunit treize des meilleurs cafés et boulangeries de Pondichéry. Plutôt que de les classer du premier au dernier, nous avons mis en avant ce pour quoi chaque lieu est connu et à qui il convient le mieux. Si l'un d'eux attire votre attention, suivez le lien vers notre guide dédié pour plus de détails, y compris l'emplacement, les horaires et des conseils pratiques.",
    whyHeading: "Pourquoi Pondichéry a l'une des meilleures cultures du café en Inde",
    whyBody:
      "Pondichéry a toujours été une ville qui invite à s'attarder.\n\nSes larges boulevards, son architecture coloniale et son rythme de vie plus lent font que les cafés semblent un prolongement naturel des rues plutôt que de simples lieux pour prendre une boisson rapide. Le patrimoine français de la ville a influencé tout, des traditions de boulangerie à la culture du café, tandis que les goûts locaux ont façonné des menus qui mélangent avec aisance classiques européens et incontournables sud-indiens.\n\nLe résultat est une scène de cafés remarquablement diverse. Vous pouvez commencer la journée avec un café filtre traditionnel, savourer des pâtisseries fraîches au petit-déjeuner, vous installer dans un café élégant pour un long déjeuner, ou terminer la soirée avec une glace artisanale, le tout à quelques pas les uns des autres.\n\nQue vous voyagiez seul, travailliez à distance quelques heures, retrouviez des amis ou fuyiez simplement la chaleur de l'après-midi, il existe à Pondichéry un café pour chaque humeur.",
    bestFor: {
      "cafe-des-arts": "Petit-déjeuner et café dans une cour du quartier français",
      "bread-and-chocolate": "Boulangerie artisanale et un vrai petit-déjeuner",
      "coromandel-cafe": "Brunch élégant et longs déjeuners",
      "le-cafe": "Café avec vue sur mer",
      "the-french-loaf": "Pâtisseries et pain rapides et bon marché",
      "baker-street": "Pain frais et les meilleurs éclairs de la ville",
      "botanist-lounge": "Intérieurs botaniques et cocktails créatifs",
      "new-banana-cafe": "Galettes sur toit-terrasse et une tourte au poulet culte",
      "eat-my-cake": "Cheesecake et calme sur toit-terrasse",
      "indian-kaffe-express": "En-cas indiens économiques et petit-déjeuner occidental",
      "le-pondichery": "Café et pâtisseries face à l'océan",
      "gelateria-montecatini": "Glace à l'italienne sur la promenade",
      "cherrypond": "Café de jardin et bar à cocktails",
    },
    blurbs: {
      "cafe-des-arts":
        "Il y a des cafés qui servent du café, et il y a des cafés qui font partie de l'identité d'une ville. Café des Arts appartient à la seconde catégorie, niché dans une demeure restaurée au cœur du quartier français.\n\nC'est le genre de lieu où une pause café rapide se transforme en une heure, puis deux. Venez pour le petit-déjeuner avant que les rues ne s'animent, ou passez en milieu d'après-midi quand la cour s'installe dans son rythme le plus lent et le plus agréable.",
      "bread-and-chocolate":
        "Si votre matinée idéale commence par du pain frais, de bonnes pâtisseries et un café corsé, Bread & Chocolate mérite sa place sur la liste. L'endroit réunit boulangerie, chocolaterie, comptoir à glaces et salle sur toit-terrasse sous un même toit, ce qui explique en partie pourquoi il est devenu l'un des cafés à journée continue les plus fréquentés de Pondichéry.\n\nLes articles populaires s'épuisent avant l'heure du déjeuner, il vaut donc la peine d'arriver tôt, surtout le week-end. Les places sur le toit-terrasse restent le meilleur choix quand elles sont disponibles.",
      "coromandel-cafe":
        "Coromandel Café marie un élégant cadre de jardin à un menu servi toute la journée, aussi adapté au brunch qu'à un long déjeuner ou un café de l'après-midi entre deux visites.\n\nSoigné sans être formel, c'est l'une des recommandations les plus simples de White Town quand vous voulez un vrai repas assis plutôt qu'une collation rapide.",
      "le-cafe":
        "Le Café se trouve directement sur l'avenue Goubert, face à la baie du Bengale, et son principal atout est exactement ce que promet son emplacement : l'un des endroits les plus simples et les mieux situés pour s'asseoir au bord de mer à Pondichéry. Géré en association avec l'Ashram de Sri Aurobindo, il ne cherche pas à être un restaurant-destination.\n\nVenez pour un café et une collation légère plutôt qu'un repas complet, et si possible, calez votre visite sur l'heure dorée avant le coucher du soleil.",
      "the-french-loaf":
        "The French Loaf est une boulangerie et un café fiable de la rue Suffren, l'une des meilleures adresses économiques de White Town pour des pâtisseries fraîches, du pain, du café et des en-cas légers. L'établissement fait partie d'une chaîne de boulangeries plus vaste, mais n'a rien perdu des qualités qui font qu'une bonne boulangerie de quartier mérite qu'on y revienne.\n\nC'est un choix facile pour un petit-déjeuner bon marché, un déjeuner rapide ou un café de l'après-midi quand vous ne voulez pas payer les prix habituels de White Town.",
      "baker-street":
        "Baker Street est un pilier de la scène des cafés de White Town depuis des années, occupant un coin bien en vue de la rue Bussy. L'établissement mêle l'atmosphère d'une boulangerie de quartier à une carte de café accessible : pains frais, sandwichs, quiches, et un comptoir de pâtisseries garni d'éclairs et de croissants.\n\nLe sandwich au poulet et aux olives est le classique de la maison, et les éclairs comptent parmi les meilleurs de la ville, s'épuisant souvent avant l'heure du déjeuner. Les prix restent raisonnables vu la qualité de la boulangerie.",
      "botanist-lounge":
        "The Botanist Lounge occupe un espace magnifiquement restauré au sein de La Maison Rose, avec des spécimens botaniques conservés, du mobilier en rotin et un éclairage chaleureux qui font des intérieurs une attraction à part entière. L'endroit convient aussi bien à un café tranquille l'après-midi qu'à des cocktails au coucher du soleil.\n\nLa glace vegan à la mangue est devenue une sorte de signature, et la carte de cocktails est l'une des plus inventives de White Town. C'est l'un des rares cafés où le déjeuner glisse naturellement vers les verres du soir.",
      "new-banana-cafe":
        "New Banana Café occupe un toit-terrasse sans prétention de la rue Cazy et a bâti sa réputation tranquillement, surtout de bouche à oreille. Le menu penche vers une cuisine continentale réconfortante avec une touche française : galettes, quiches, et une tourte au poulet devenue quasi culte.\n\nUne grande partie du charme vient de Senthil, le propriétaire, souvent personnellement impliqué dans l'accueil des hôtes. Les prix comptent parmi les plus raisonnables de White Town.",
      "eat-my-cake":
        "Eat My Cake occupe un toit-terrasse tranquille de la rue Labourdonnais et a bâti sa réputation sur une pâtisserie constamment excellente. Né comme entreprise sociale formant et employant des femmes locales, il est devenu l'une des haltes les plus gratifiantes de Pondichéry pour un café et un dessert.\n\nLes cheesecakes comptent parmi les meilleurs de la ville, riches mais jamais écœurants, et les options véganes et sans gluten sont clairement indiquées, ce qui reste encore relativement rare dans la scène des cafés de Pondichéry.",
      "indian-kaffe-express":
        "The Indian Kaffe Express occupe une niche utile rue Dumas : une cuisine abordable et simple dans un cadre propre et accueillant, à une époque où de nombreux cafés voisins penchent vers le haut de gamme franco-européen. Le menu mélange masala chai, café filtre, gaufres, pancakes et en-cas indiens.\n\nCe ne sera pas le repas le plus mémorable de votre séjour, mais c'est une halte fiable et économique entre deux visites, particulièrement avec des familles.",
      "le-pondichery":
        "Le Pondichéry est le café décontracté au sein de l'hôtel The Promenade, et il occupe l'une des meilleures tables en front de mer de la ville. Les tables donnent directement sur Rock Beach et la baie du Bengale, permettant de prendre un café en observant pêcheurs et marcheurs matinaux le long de la promenade.\n\nLe menu est volontairement simple : espresso, café filtre, pâtisseries et en-cas légers. Les prix sont raisonnables vu la vue, et l'endroit fonctionne particulièrement bien comme halte pour un petit-déjeuner matinal avant que la promenade ne s'anime.",
      "gelateria-montecatini":
        "Gelateria Montecatini Terme sert des glaces à l'italienne à deux pas de la promenade, avec l'océan d'un côté et le quartier français juste derrière. C'est le genre d'endroit qui s'intègre naturellement à une balade du soir plutôt que d'exiger un détour spécial.\n\nRien de compliqué dans son attrait : de bonnes glaces, un bon emplacement, et une halte facile pour clore une journée de marche.",
      "cherrypond":
        "Cherrypond Garden Café & Bar occupe une cour verdoyante dans l'une des rues les plus agréables de White Town, offrant une pause loin des artères plus animées à proximité. Le cadre de jardin convient à tout, du café du matin aux verres du soir sous les arbres.\n\nLe menu marie classiques de café et une carte de boissons bien pensée, et l'atmosphère évolue naturellement au fil de la journée sans jamais perdre son caractère détendu.",
    },
    quickPicks: [
      { situation: "Votre première matinée à Pondichéry", recommendation: "Café des Arts" },
      { situation: "Un vrai petit-déjeuner de boulangerie", recommendation: "Bread & Chocolate" },
      { situation: "Un long brunch détendu", recommendation: "Coromandel Café" },
      { situation: "Un café au bord de mer", recommendation: "Le Café ou Le Pondichéry" },
      { situation: "Une pâtisserie rapide et économique", recommendation: "The French Loaf ou Baker Street" },
      { situation: "Gâteaux et desserts", recommendation: "Eat My Cake" },
      { situation: "Une glace authentique", recommendation: "Gelateria Montecatini Terme" },
      { situation: "Un cadre de jardin paisible", recommendation: "Cherrypond Garden Café & Bar" },
      { situation: "Des cocktails avec votre café", recommendation: "The Botanist Lounge" },
      { situation: "Économique et facile en famille", recommendation: "Indian Kaffe Express ou New Banana Café" },
    ],
    faq: [
      { question: "Quel est le café le plus célèbre de Pondichéry ?", answer: "Café des Arts est l'un des cafés les plus connus de la ville, particulièrement auprès des visiteurs explorant le quartier français. Son cadre patrimonial et son atmosphère détendue en ont fait un favori de Pondichéry." },
      { question: "Où trouver le meilleur petit-déjeuner à Pondichéry ?", answer: "Plusieurs cafés de cette liste sont populaires pour le petit-déjeuner, Bread & Chocolate, Coromandel Café et Café des Arts figurant parmi les choix les plus connus." },
      { question: "Y a-t-il de bonnes boulangeries à Pondichéry ?", answer: "Oui. Pondichéry a une solide tradition de boulangerie influencée par son patrimoine français, allant des boulangeries artisanales aux favoris de quartier servant pain, pâtisseries et gâteaux frais." },
      { question: "Quel café offre la meilleure vue sur mer ?", answer: "Le Café et Le Pondichéry sont les deux cafés où vous pouvez savourer un café directement au bord de l'eau, ce qui en fait des haltes populaires lors d'une promenade sur la Promenade." },
      { question: "Pondichéry se prête-t-elle bien au café-hopping ?", answer: "Oui. Beaucoup des meilleurs cafés et boulangeries de la ville sont à distance de marche les uns des autres, surtout autour du quartier français, ce qui permet d'en explorer plusieurs en une seule journée." },
      { question: "Quels sont les meilleurs quartiers de cafés à White Town ?", answer: "Les zones les plus populaires se trouvent autour des rues [Dumas](/fr/discover/white-town/rue-dumas), [Suffren](/fr/discover/white-town/rue-suffren), Romain Rolland et de la promenade du front de mer. On y trouve un mélange de boulangeries françaises, de cafés spécialisés, de salons de thé historiques et d'adresses modernes pour le brunch. Beaucoup sont installés dans d'anciens bâtiments coloniaux restaurés avec des cours intérieures et des terrasses ombragées. Le matin tôt et la fin d'après-midi sont des moments particulièrement agréables pour en profiter." },
      { question: "Peut-on trouver facilement des plats végétariens et végétaliens ?", answer: "Oui. Pondichéry convient très bien aux voyageurs végétariens et végétaliens. La cuisine traditionnelle du sud de l'Inde comprend de nombreux plats naturellement végétariens comme les idlis, les dosas, le sambar et les currys de légumes. Auroville et White Town comptent également de nombreux cafés proposant des repas végétaliens, des produits biologiques, des jus frais, des salades et une cuisine internationale végétarienne. La plupart des restaurants peuvent adapter les plats sur demande." },
    ],
  },
  {
    id: "indian-tamil",
    title: "Les meilleurs restaurants indiens et tamouls de Pondichéry",
    metaTitle: "6 meilleurs restaurants indiens et tamouls de Pondichéry",
    metaDescription: "Six des meilleurs restaurants indiens et tamouls de Pondichéry, des adresses économiques du quotidien à la gastronomie franco-tamoule patrimoniale, avec ce que chacun fait de mieux.",
    intro:
      "Les cafés français ont peut-être mis Pondichéry sur la carte culinaire, mais pour comprendre la ville, il faut s'attabler pour un vrai repas sud-indien.\n\nLes arômes d'épices fraîchement moulues, la simplicité réconfortante d'un dosa bien fait, l'assortiment généreux d'un repas tamoul traditionnel servi sur une feuille de bananier, et la richesse indéniable des currys régionaux racontent une histoire qui précède de plusieurs siècles les boulevards coloniaux. Si le quartier français attire l'essentiel de l'attention, certains des repas les plus mémorables de Pondichéry se trouvent dans des restaurants qui célèbrent les saveurs du Tamil Nadu et du sous-continent indien au sens large.\n\nCe sont les endroits où le petit-déjeuner commence tôt, où le café filtre est pris au sérieux, où les recettes s'enracinent dans la tradition, et où l'hospitalité semble souvent aussi importante que la nourriture elle-même.\n\nCe guide réunit six restaurants qui présentent différentes facettes de la cuisine indienne à Pondichéry. Certains se spécialisent dans les classiques sud-indiens, d'autres présentent la cuisine régionale dans un cadre plus raffiné, mais chacun offre une expérience résolument locale. Plutôt que de les classer du premier au dernier, nous avons mis en avant ce pour quoi chaque restaurant est le plus connu, afin que vous puissiez choisir celui qui convient à votre appétit et à votre itinéraire. Chaque fiche renvoie à notre guide dédié pour des informations pratiques, l'emplacement et des conseils de planification.",
    whyHeading: "Pourquoi la cuisine indienne de Pondichéry mérite la même attention",
    whyBody:
      "Il est facile d'arriver à Pondichéry en s'attendant à des croissants, des cafés et de la cuisine française. Et si ces expériences font indéniablement partie du charme de la ville, elles ne racontent qu'un chapitre de son histoire.\n\nBien avant l'arrivée des influences françaises, ce tronçon de la côte de Coromandel avait développé ses propres traditions culinaires riches, façonnées par la culture tamoule, l'agriculture locale et des générations de cuisine familiale. Aujourd'hui encore, le rythme de la vie quotidienne se reflète dans la nourriture : des adresses de petit-déjeuner animées servant idli et dosa au lever du soleil, de généreux repas végétariens à midi, et des plats régionaux réconfortants partagés en famille le soir.\n\nCe qui rend Pondichéry particulièrement gratifiante pour les gourmets, c'est la façon dont ces traditions coexistent avec son héritage colonial. Il n'est pas nécessaire de choisir entre cuisine française et indienne. Vous pouvez profiter des deux, souvent dans la même rue.\n\nQue vous cherchiez un authentique petit-déjeuner sud-indien, un repas végétarien traditionnel ou un restaurant qui célèbre le patrimoine local, ces six restaurants offrent une excellente introduction à l'identité culinaire indienne de la ville.",
    bestFor: {
      "indian-coffee-house": "Le petit-déjeuner sud-indien traditionnel et le café filtre",
      "maison-perumal": "La gastronomie patrimoniale franco-tamoule",
      "oh-pondi": "Les classiques tamouls décontractés du quotidien",
      "great-indian-cuisine": "La variété nord et sud-indienne",
      "podouke-heritage": "Une cuisine patrimoniale locale à un prix exceptionnel",
      "surguru-spot": "Les repas végétariens tamouls du quotidien",
    },
    blurbs: {
      "indian-coffee-house":
        "Peu de restaurants évoquent autant la nostalgie qu'Indian Coffee House. Membre d'un réseau coopératif de longue date présent dans toute l'Inde, il offre une expérience agréablement sans prétention et profondément ancrée dans le quotidien.\n\nC'est le genre d'endroit où les matinées commencent par des dosas croustillants, des idlis moelleux et une tasse de café filtre corsé, servis sans cérémonie mais avec une constance rassurante. Pour les visiteurs désireux de découvrir la culture culinaire quotidienne de la ville plutôt que son circuit touristique, c'est un excellent point de départ.",
      "maison-perumal":
        "Maison Perumal occupe une place unique dans la scène culinaire de Pondichéry. Installé dans une demeure Chettiar de 130 ans magnifiquement restaurée, il réunit élégance coloniale française et tradition culinaire tamoule à travers une cuisine franco-tamoule ancrée dans la communauté renonçante, ces familles catholiques franco-indiennes dont les cuisines se sont développées au carrefour des deux cultures.\n\nPlutôt que de présenter la cuisine tamoule comme une toile de fond, le restaurant en fait l'attraction principale, raffinée par la technique française mais jamais diluée. Un excellent choix si vous cherchez un repas à la fois résolument local et soigneusement pensé.",
      "oh-pondi":
        "Détendu, accueillant et ancré dans les saveurs locales, Oh Pondi! offre une introduction simple à la cuisine tamoule, sans chichi inutile.\n\nSon attrait tient à son accessibilité. Que vous vous arrêtiez pour déjeuner après avoir exploré la ville ou que vous cherchiez un dîner fiable mettant en valeur les classiques sud-indiens familiers, il offre une expérience facile qui convient aux familles, aux voyageurs en solo et aux visiteurs de première visite.",
      "great-indian-cuisine":
        "Comme son nom l'indique, The Great Indian Cuisine célèbre la diversité de la cuisine indienne plutôt que de se concentrer sur une seule tradition régionale, couvrant les classiques du nord et du sud sur Anna Salai.\n\nCela en fait une bonne option pour les groupes aux goûts différents ou les voyageurs désireux de goûter à un plus large éventail de saveurs indiennes en un seul repas. Son menu varié offre de la flexibilité sans perdre de vue la familiarité réconfortante qui définit une bonne hospitalité indienne.",
      "podouke-heritage":
        "Nommé d'après Podouke, l'ancien comptoir commercial identifié dans les textes gréco-romains et largement associé à la région de Pondichéry, Podouke Heritage Restaurant puise son inspiration dans les plus anciennes traditions culinaires de la ville plutôt que dans des réinterprétations modernes.\n\nL'accent est mis ici sur la connexion des visiteurs à l'identité locale autant qu'à la cuisine locale. Pour les voyageurs désireux de découvrir Pondichéry au-delà du quartier français, il offre une expérience culinaire résolument ancrée dans les traditions et le patrimoine de la région, à l'un des meilleurs rapports qualité-prix de la ville.",
      "surguru-spot":
        "Pour beaucoup de résidents, les meilleurs repas ne sont pas nécessairement les plus élaborés. Ce sont ceux dégustés régulièrement, préparés avec constance et servis sans prétention. Surguru Spot, rue Jawaharlal Nehru, incarne cette philosophie.\n\nC'est le genre de restaurant que les visiteurs découvrent souvent après avoir demandé aux locaux où ils mangent plutôt que où vont les touristes. Un cadre simple laisse toute la place à une cuisine végétarienne sud-indienne fiable, des dosas croustillants aux idlis moelleux, servie avec chaleur et efficacité.",
    },
    quickPicks: [
      { situation: "Votre premier authentique petit-déjeuner sud-indien", recommendation: "Indian Coffee House" },
      { situation: "Une expérience gastronomique patrimoniale franco-tamoule", recommendation: "Maison Perumal" },
      { situation: "Découvrir l'histoire locale à travers la cuisine", recommendation: "Podouke Heritage Restaurant" },
      { situation: "Un repas familial détendu", recommendation: "Oh Pondi!" },
      { situation: "Goûter à un large éventail de plats indiens", recommendation: "The Great Indian Cuisine" },
      { situation: "La cuisine végétarienne tamoule du quotidien", recommendation: "Surguru Spot" },
    ],
    faq: [
      { question: "Où trouver de la cuisine sud-indienne authentique à Pondichéry ?", answer: "Les six restaurants de ce guide offrent tous une cuisine indienne authentique, Indian Coffee House et Surguru Spot convenant particulièrement bien aux voyageurs en quête de saveurs sud-indiennes classiques." },
      { question: "Pondichéry n'est-elle connue que pour sa cuisine française ?", answer: "Pas du tout. Si son patrimoine français est l'une des attractions phares de la ville, Pondichéry possède aussi une riche tradition culinaire tamoule qui mérite la même attention. Explorer les deux facettes de sa culture culinaire offre une image bien plus complète de la ville." },
      { question: "Quel restaurant convient le mieux pour un petit-déjeuner sud-indien traditionnel ?", answer: "Indian Coffee House est un choix populaire pour les visiteurs souhaitant découvrir les classiques du petit-déjeuner sud-indien dans un cadre authentique." },
      { question: "Où peut-on savourer de la cuisine indienne dans un cadre patrimonial ?", answer: "Maison Perumal associe une demeure Chettiar patrimoniale à un menu franco-tamoul, ce qui en fait l'une des expériences culinaires les plus singulières de la ville." },
      { question: "Quels plats locaux faut-il goûter à Pondichéry ?", answer: "Les visiteurs devraient goûter le curry de poisson de Pondichéry, le masala de crevettes, les plats de crabe, les dosas, les idlis et les repas tamouls servis sur feuille de bananier. Une spécialité remarquable est la cuisine franco-tamoule, qui associe les techniques françaises aux ingrédients du sud de l'Inde. Les fruits de mer sont particulièrement appréciés grâce à la situation côtière. Pour le dessert, de nombreux cafés proposent des pâtisseries françaises ainsi que des douceurs indiennes traditionnelles." },
    ],
  },
  {
    id: "seafood",
    title: "Les meilleurs restaurants de fruits de mer de Pondichéry",
    metaTitle: "3 meilleurs restaurants de fruits de mer de Pondichéry",
    metaDescription: "Trois des meilleurs restaurants de fruits de mer de Pondichéry, des cuisines côtières dédiées à une table de coucher de soleil sur toit-terrasse, avec ce que chacun fait de mieux.",
    intro:
      "Peu de choses semblent plus appropriées à Pondichéry que de terminer la journée avec des fruits de mer frais.\n\nSituée le long de la baie du Bengale, la ville a toujours été façonnée par la mer. Les bateaux de pêche partent encore avant le lever du soleil, les marchés aux poissons s'animent chaque matin, et plusieurs restaurants de Pondichéry puisent leur inspiration dans les ingrédients qui arrivent sur la côte chaque jour. Si la ville est souvent célébrée pour ses cafés français et son architecture coloniale, ses fruits de mer font tout autant partie de son histoire locale.\n\nLes restaurants présentés ici offrent chacun une façon différente de découvrir la cuisine côtière de Pondichéry, d'une cuisine entièrement bâtie autour de la pêche du jour à une table sur toit-terrasse où les fruits de mer partagent le menu avec une vue imprenable sur le coucher du soleil. Plutôt que de les classer du premier au dernier, nous avons mis en avant ce qui rend chacun distinctif et à qui il convient le mieux. Chaque fiche renvoie à notre guide dédié pour des informations pratiques et des conseils de planification.",
    whyHeading: "Pourquoi les fruits de mer sont un incontournable à Pondichéry",
    whyBody:
      "La relation de Pondichéry avec la mer va bien au-delà de ses plages.\n\nPendant des générations, la baie du Bengale a façonné les moyens de subsistance locaux et les traditions culinaires de la ville. Poisson frais, crevettes, crabe et autres fruits de mer occupent une place de choix dans la cuisine régionale, tandis que l'histoire cosmopolite de Pondichéry a introduit des influences françaises, sud-indiennes et internationales qui continuent de façonner les menus des restaurants aujourd'hui.\n\nCette diversité signifie qu'il n'existe pas un « style unique » de fruits de mer à la pondichérienne. Certains restaurants se concentrent uniquement sur la pêche du jour, tandis que d'autres intègrent les fruits de mer à un menu plus large, aux côtés de vues panoramiques ou d'autres cuisines entièrement différentes. Ensemble, ils offrent quelques-unes des façons les plus agréables de découvrir la facette côtière de la ville.",
    bestFor: {
      "de-bluefin-seafood": "Les fruits de mer comme événement principal, pas comme option secondaire",
      "rendezvous": "Une restauration de fruits de mer détendue et centrale",
      "bay-of-buddha": "Vue sur le coucher du soleil avec des fruits de mer au menu",
    },
    blurbs: {
      "de-bluefin-seafood":
        "Quand les fruits de mer sont la raison même de votre repas plutôt qu'une simple option parmi d'autres, De Bluefin Seafood Restaurant est un point de départ naturel. Sa réputation repose sur l'attention accordée au poisson frais et aux crustacés, qu'ils méritent pleinement.\n\nC'est un favori pour les convives qui veulent que la pêche du jour, et non le décor, occupe le devant de la scène. Si votre priorité est un repas bâti autour des ingrédients les plus frais de la côte, c'est l'un des choix les plus solides de Pondichéry.",
      "rendezvous":
        "Rendezvous Café Restaurant marie une atmosphère détendue à un menu qui fait le pont entre restauration de café et spécialités de fruits de mer, le tout dans un emplacement central de White Town.\n\nC'est une halte facile lors de l'exploration du quartier français, que vous soyez en quête d'un déjeuner tranquille ou d'un dîner après une journée de visites. Il trouve un équilibre confortable entre accessibilité et atmosphère.",
      "bay-of-buddha":
        "Bay of Buddha couronne l'hôtel The Promenade avec l'un des cadres de toit-terrasse les plus spectaculaires de la ville, donnant sur la baie du Bengale, le vieux phare et Rock Beach. Sa véritable signature est un menu pan-asiatique bâti autour des dim sum et des satays, mais les plats de fruits de mer parcourent l'ensemble du menu, et arriver avant le coucher du soleil transforme le dîner en un véritable événement.\n\nIl faut le savoir avant d'y aller : ce n'est pas une cuisine entièrement dédiée aux fruits de mer comme l'est De Bluefin. C'est une destination sur toit-terrasse où de bons fruits de mer font partie d'un menu plus large et bien exécuté.",
    },
    quickPicks: [
      { situation: "Les fruits de mer comme événement principal", recommendation: "De Bluefin Seafood Restaurant" },
      { situation: "Un déjeuner détendu dans le quartier français", recommendation: "Rendezvous Café Restaurant" },
      { situation: "Vue sur le coucher du soleil pendant le repas", recommendation: "Bay of Buddha" },
    ],
    faq: [
      { question: "Où bien manger des fruits de mer à Pondichéry ?", answer: "Les trois restaurants de ce guide offrent chacun une vision différente des fruits de mer, d'un spécialiste dédié à une table sur toit-terrasse avec vue panoramique sur la mer." },
      { question: "Les fruits de mer sont-ils chers à Pondichéry ?", answer: "Pas nécessairement. De Bluefin et Rendezvous sont tous deux de milieu de gamme, tandis que Bay of Buddha se situe en haut de gamme vu son cadre sur toit-terrasse et son menu pan-asiatique." },
      { question: "Quel restaurant de fruits de mer offre la meilleure vue ?", answer: "Bay of Buddha est réputé pour associer son menu à des vues panoramiques sur la baie du Bengale depuis le toit-terrasse de l'hôtel The Promenade." },
    ],
  },
  {
    id: "international",
    title: "Les meilleurs restaurants internationaux de Pondichéry",
    metaTitle: "10 meilleurs restaurants internationaux de Pondichéry",
    metaDescription: "Dix des meilleurs restaurants internationaux de Pondichéry, du ramen japonais à la restauration sur toit-terrasse en passant par la bière artisanale, avec ce que chacun fait de mieux.",
    intro:
      "L'une des plus grandes forces de Pondichéry comme destination culinaire est qu'elle refuse de se laisser définir par une seule cuisine.\n\nAux côtés de ses cafés français célèbres et de ses traditions culinaires tamoules profondément ancrées, la ville a développé une scène gastronomique de plus en plus diverse, puisant son inspiration aux quatre coins du monde. Cuisine réconfortante japonaise, gastronomie européenne contemporaine, restaurants sur toit-terrasse, brasseries artisanales et menus d'inspiration mondiale coexistent avec aisance.\n\nPour les voyageurs restant plusieurs jours, cette variété devient particulièrement bienvenue. Après avoir exploré les classiques français et les plats sud-indiens locaux, beaucoup de visiteurs cherchent quelque chose de différent. Pondichéry a beaucoup à offrir.\n\nCe guide réunit dix restaurants qui présentent la facette internationale de la ville. Plutôt que de les classer du premier au dernier, nous nous sommes concentrés sur ce que chaque restaurant fait particulièrement bien et le type d'expérience culinaire à attendre.",
    whyHeading: "Pourquoi Pondichéry embrasse les saveurs du monde",
    whyBody:
      "Pondichéry a toujours été un carrefour de cultures.\n\nSon histoire de port de commerce international, puis de capitale de l'Inde française, a contribué à façonner une ville qui a longtemps accueilli des influences venues d'ailleurs. Aujourd'hui, cette ouverture se poursuit dans ses restaurants. Aux côtés des traditions françaises bien établies, chefs et restaurateurs puisent leur inspiration dans les cuisines d'Asie, d'Europe et d'ailleurs, créant une scène gastronomique étonnamment cosmopolite pour une ville de cette taille.\n\nQue vous ayez envie d'un bol réconfortant de ramen, d'un dîner sur toit-terrasse avec vue sur la mer, d'une bière artisanale brassée localement ou d'une cuisine contemporaine inventive, vous découvrirez que Pondichéry offre bien plus de variété que ce à quoi la plupart des visiteurs de première visite s'attendent.",
    bestFor: {
      "sola-bistro": "La cuisine méditerranéenne contemporaine",
      "boku-ramen": "La cuisine réconfortante japonaise",
      "bay-of-buddha": "La restauration pan-asiatique sur toit-terrasse",
      "1-rue-suffren": "Un café de jour qui devient un bar à cocktails animé",
      "the-spot": "Petites assiettes méditerranéennes et cocktails",
      "the-boho": "Gastronomie contemporaine et vie nocturne",
      "anthe-restaurant": "La gastronomie moderne raffinée",
      "mira": "La cuisine continentale dans un hôtel patrimonial",
      "catamaran-brewing": "Bière artisanale et cuisine décontractée",
      "mahe-bar": "Cocktails raffinés dans un cadre patrimonial",
    },
    blurbs: {
      "sola-bistro":
        "Sola Bistro apporte une sensibilité méditerranéenne moderne à un bâtiment patrimonial restauré de White Town. Pizzas à fermentation naturelle, pâtes fraîches et ingrédients de saison s'associent à une carte de cocktails réfléchie.\n\nIl est devenu l'un des restaurants les plus prisés de la ville pour un déjeuner ou un dîner sans hâte, trouvant un juste équilibre entre décontraction et occasion spéciale.",
      "boku-ramen":
        "Boku Ramen s'est attiré une clientèle fidèle à White Town en se concentrant sur une seule chose et en la faisant bien. Plutôt que de proposer un menu étendu, il garde le projecteur braqué sur des bols de ramen soigneusement préparés, inspirés des styles japonais classiques.\n\nC'est l'une des trouvailles les plus inattendues de la scène gastronomique de plus en plus diverse de Pondichéry, et une recommandation facile pour un vrai changement de rythme par rapport à la cuisine française ou tamoule.",
      "bay-of-buddha":
        "Bay of Buddha couronne l'hôtel The Promenade avec une vue imprenable sur la baie du Bengale, le vieux phare et Rock Beach. La cuisine puise dans les influences thaïlandaise, vietnamienne, chinoise et coréenne, avec les dim sum et les satays comme plats vedettes.\n\nArriver avant le coucher du soleil transforme le dîner en un véritable événement, et le cadre sur toit-terrasse est l'un des plus mémorables de White Town.",
      "1-rue-suffren":
        "1 Rue Suffren occupe un bâtiment colonial restauré qui change de personnalité au fil de la journée : un café détendu de jour, l'un des bars les plus prisés de White Town le soir. La cuisine propose un menu éclectique allant de la fusion continentale aux classiques indiens en passant par une cuisine réconfortante d'inspiration mondiale.\n\nLa carte de cocktails est parmi les plus fournies de la ville, et les intérieurs rétro, brique apparente et mobilier vintage, semblent authentiques plutôt que mis en scène.",
      "the-spot":
        "THE SPOT est le concept le plus décontracté du groupe Villa Shanti : un café, un bar à cocktails et une boutique artisanale sous un même toit, face à la côte de Coromandel, rue Dumas. Le menu penche vers de petites assiettes d'inspiration méditerranéenne pensées pour être partagées plutôt qu'un repas assis complet.\n\nIl récompense un après-midi tranquille plutôt qu'une visite éclair, et la boutique attenante vaut le détour pour ses textiles et céramiques régionaux.",
      "the-boho":
        "The Boho est devenu l'une des destinations culinaires les plus remarquables de Pondichéry en un temps remarquablement court, installé dans le bâtiment restauré de l'ancien théâtre Venus à Saram. Pensé pour toute une soirée plutôt qu'un repas rapide, il marie une cuisine contemporaine ambitieuse à une excellente carte de cocktails.\n\nÀ mesure que la nuit avance, l'atmosphère passe naturellement du dîner à une scène sociale plus animée, sans que la nourriture ni les boissons ne perdent en qualité. C'est l'un des choix les plus solides de la ville pour une soirée mémorable.",
      "anthe-restaurant":
        "ANTHÉ occupe un élégant bâtiment patrimonial de la rue Romain Rolland et s'est imposé comme l'une des principales destinations gastronomiques contemporaines de White Town. La cuisine adopte une approche gastronomique moderne, les fruits de mer occupant une place de choix parmi des plats de saison soigneusement composés.\n\nElle se situe dans un terrain d'entente confortable entre les grands restaurants d'hôtels patrimoniaux de la ville et sa culture de café plus décontractée, sophistiquée sans excès de formalité.",
      "mira":
        "Mira est le restaurant signature du Grand Hotel, rue Suffren, l'un des établissements patrimoniaux les mieux préservés de White Town. Le menu se concentre sur la cuisine continentale, les fruits de mer occupant une place de choix aux côtés de spécialités de saison.\n\nUne exécution fiable et une hospitalité soignée en font un choix solide pour un repas raffiné, sans la formalité affichée de certains restaurants d'hôtels de luxe.",
      "catamaran-brewing":
        "La scène de la bière artisanale de Pondichéry est encore relativement jeune, et Catamaran Brewing Company est l'un des lieux qui l'ont aidée à se faire connaître. Bières brassées maison, carte décontractée et ambiance de soirée facile la distinguent des cafés et bars à cocktails du quartier français.\n\nC'est le choix naturel si vous voulez une bière avec votre repas plutôt qu'un vin ou un cocktail.",
      "mahe-bar":
        "Le Mahé Bar est niché au sein du Palais de Mahé, l'un des plus beaux hôtels patrimoniaux de White Town, et offre une alternative apaisante à la vie nocturne plus animée de la ville. Service soigné et cocktails pensés avec soin priment sur le volume ou le spectacle.\n\nLe 12 Mile Limit signature, un mélange de rhum, whisky de seigle et brandy axé sur les spiritueux, rend hommage à la frontière maritime historique qui marquait autrefois les eaux territoriales françaises au large de la côte. Même pour ceux qui ne séjournent pas à l'hôtel, il mérite le détour pour un verre en soirée.",
    },
    quickPicks: [
      { situation: "Cuisine japonaise", recommendation: "Boku Ramen" },
      { situation: "Vue depuis un toit-terrasse", recommendation: "Bay of Buddha" },
      { situation: "Bière artisanale", recommendation: "Catamaran Brewing Company" },
      { situation: "Gastronomie contemporaine", recommendation: "ANTHÉ Restaurant, Sola Bistro ou Mira" },
      { situation: "Un repas détendu et facile", recommendation: "THE SPOT ou 1 Rue Suffren" },
      { situation: "Une soirée avec cocktails", recommendation: "Mahe Bar ou The Boho" },
    ],
    faq: [
      { question: "Pondichéry a-t-elle de bons restaurants internationaux ?", answer: "Oui. Aux côtés de ses traditions culinaires françaises et tamoules, Pondichéry compte un nombre croissant de restaurants servant une cuisine japonaise, européenne et d'inspiration mondiale." },
      { question: "Où trouver de la cuisine japonaise à Pondichéry ?", answer: "Boku Ramen se spécialise dans la cuisine réconfortante japonaise et propose quelque chose de résolument différent de la scène culinaire plus traditionnelle de la ville." },
      { question: "Existe-t-il des brasseries artisanales à Pondichéry ?", answer: "Oui. Catamaran Brewing Company associe une bière artisanale brassée localement à une expérience de restauration complète." },
      { question: "Quel restaurant international convient le mieux aux occasions spéciales ?", answer: "Plusieurs restaurants de ce guide conviennent aux célébrations ou aux soirées mémorables, en particulier Sola Bistro, ANTHÉ Restaurant, Mira et Bay of Buddha." },
    ],
  },
];

export function getRestaurantGuideFr(id: string): RestaurantGuideFr | undefined {
  return restaurantGuidesFr.find(g => g.id === id);
}
