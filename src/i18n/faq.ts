import type { Locale } from './config';
import type { FaqItem } from './seo';

type FaqSet = { eyebrow: string; title: string; description: string; items: FaqItem[] };

export const HOME_FAQ: Record<Locale, FaqSet> = {
  fr: {
    eyebrow: 'Questions fréquentes',
    title: 'Tout savoir sur BCF et nos prestations',
    description: 'Les réponses aux questions que les entreprises nous posent le plus souvent.',
    items: [
      {
        q: "Qui est Belgium Cleaning Facilities (BCF) ?",
        a: "Belgium Cleaning Facilities (BCF) est une société de nettoyage professionnel basée à Londerzeel, active dans toute la Belgique et dirigée par un gérant qui travaille dans le nettoyage depuis 1998. Elle intervient exclusivement pour les entreprises : nettoyage de vitres et de façades en hauteur, de sols industriels, d'entrepôts, de parkings et de bâtiments tertiaires. Ses ouvriers sont certifiés VCA.",
      },
      {
        q: 'Dans quelles régions de Belgique intervenez-vous ?',
        a: "Nous intervenons dans toute la Belgique : Bruxelles, la Flandre et la Wallonie. Notre siège est situé à Londerzeel (Brabant flamand) et nos équipes se déplacent sur votre site, quelle que soit sa localisation.",
      },
      {
        q: 'Quels types de nettoyage professionnel proposez-vous ?',
        a: "Nous réalisons le nettoyage de vitres et de façades en hauteur, le nettoyage à l'eau osmosée, le sablage doux de façades et l'enlèvement de graffitis, le nettoyage industriel de sols (entrepôts, halls de production, parkings), ainsi que l'entretien de bâtiments tertiaires, résidentiels collectifs et événementiels.",
      },
      {
        q: 'Travaillez-vous pour les particuliers ?',
        a: "Non. BCF travaille uniquement avec les entreprises et les professionnels : industries, sites logistiques, hôtels, établissements d'enseignement, concessions automobiles, syndics et gestionnaires de bâtiments.",
      },
      {
        q: 'Comment obtenir un devis et sous quel délai ?',
        a: "Remplissez le formulaire de devis en ligne ou appelez-nous au +32 478 47 08 59. Un membre de notre équipe vous recontacte sous 24 heures ouvrées avec une proposition adaptée à votre site. Le devis est gratuit.",
      },
      {
        q: 'Comment nettoyez-vous des vitres et façades en hauteur ?',
        a: "Selon l'accessibilité du bâtiment, nous utilisons un camion élévateur, un élévateur ciseau, une nacelle ou des perches télescopiques couplées à un système à eau osmosée qui permet de nettoyer depuis le sol. Chaque intervention est préparée pour rester sûre et sans traces.",
      },
      {
        q: 'Quelles certifications possédez-vous ?',
        a: "Nos ouvriers sont certifiés VCA (Safety Checklist Contractors), la référence en matière de sécurité sur les sites industriels, logistiques et institutionnels. Nos nacelles sont contrôlées par Vinçotte et nous sommes membres de l'UGBN/ABSU, la fédération du secteur. Nous sommes également sous-traitant de grands groupes de nettoyage tels que GOM, Vebego et Group F.",
      },
    ],
  },
  nl: {
    eyebrow: 'Veelgestelde vragen',
    title: 'Alles over BCF en onze diensten',
    description: 'Antwoorden op de vragen die bedrijven ons het vaakst stellen.',
    items: [
      {
        q: 'Wie is Belgium Cleaning Facilities (BCF)?',
        a: 'Belgium Cleaning Facilities (BCF) is een professioneel schoonmaakbedrijf uit Londerzeel, actief in heel België, met een zaakvoerder die sinds 1998 in de schoonmaak werkt. BCF werkt uitsluitend voor bedrijven: ramen- en gevelreiniging op hoogte, industriële vloerreiniging, magazijnen, parkings en tertiaire gebouwen. De arbeiders van BCF zijn VCA-gecertificeerd.',
      },
      {
        q: 'In welke regio’s van België werken jullie?',
        a: 'Wij werken in heel België: Brussel, Vlaanderen en Wallonië. Ons hoofdkantoor ligt in Londerzeel (Vlaams-Brabant) en onze ploegen komen ter plaatse, waar uw site ook gelegen is.',
      },
      {
        q: 'Welke soorten professionele reiniging bieden jullie aan?',
        a: 'Wij doen ramen- en gevelreiniging op hoogte, reiniging met osmosewater, zacht zandstralen van gevels en graffitiverwijdering, industriële vloerreiniging (magazijnen, productiehallen, parkings) en onderhoud van tertiaire, collectieve residentiële en evenementiële gebouwen.',
      },
      {
        q: 'Werken jullie ook voor particulieren?',
        a: 'Nee. BCF werkt enkel voor bedrijven en professionals: industrie, logistieke sites, hotels, onderwijsinstellingen, autodealers, syndici en gebouwbeheerders.',
      },
      {
        q: 'Hoe vraag ik een offerte aan en binnen welke termijn?',
        a: 'Vul het online offerteformulier in of bel ons op +32 478 47 08 59. Een medewerker contacteert u binnen 24 werkuren met een voorstel op maat van uw site. De offerte is gratis.',
      },
      {
        q: 'Hoe reinigen jullie ramen en gevels op hoogte?',
        a: 'Afhankelijk van de bereikbaarheid van het gebouw gebruiken wij een hoogwerkervrachtwagen, een schaarlift, een hoogwerker of telescopische stangen met een osmosewatersysteem waarmee we vanaf de grond kunnen reinigen. Elke interventie wordt voorbereid om veilig en streeploos te verlopen.',
      },
      {
        q: 'Over welke certificaten beschikt BCF?',
        a: 'Onze arbeiders zijn VCA-gecertificeerd (Safety Checklist Contractors), de veiligheidsreferentie op industriële, logistieke en institutionele sites. Onze hoogwerkers worden gekeurd door Vinçotte en wij zijn lid van de ABSU/UGBN, de beroepsfederatie. Wij zijn ook onderaannemer van grote schoonmaakgroepen zoals GOM, Vebego en Group F.',
      },
    ],
  },
  en: {
    eyebrow: 'Frequently asked questions',
    title: 'Everything you need to know about BCF',
    description: 'Answers to the questions businesses ask us most often.',
    items: [
      {
        q: 'Who is Belgium Cleaning Facilities (BCF)?',
        a: 'Belgium Cleaning Facilities (BCF) is a professional cleaning company based in Londerzeel, active across Belgium and run by a manager who has worked in cleaning since 1998. It works exclusively for businesses: high-level window and facade cleaning, industrial floors, warehouses, car parks and commercial buildings. Its workers are VCA certified.',
      },
      {
        q: 'Which areas of Belgium do you cover?',
        a: 'We operate throughout Belgium: Brussels, Flanders and Wallonia. Our head office is in Londerzeel (Flemish Brabant) and our teams travel to your site wherever it is located.',
      },
      {
        q: 'What types of professional cleaning do you offer?',
        a: 'We clean windows and facades at height, offer reverse-osmosis (pure water) cleaning, gentle facade sandblasting and graffiti removal, industrial floor cleaning (warehouses, production halls, car parks) and maintenance of commercial, collective residential and event buildings.',
      },
      {
        q: 'Do you work for private individuals?',
        a: 'No. BCF works only with businesses and professionals: industry, logistics sites, hotels, educational institutions, car dealerships, property managers and facility managers.',
      },
      {
        q: 'How do I get a quote, and how quickly?',
        a: 'Fill in the online quote form or call us on +32 478 47 08 59. A member of our team will get back to you within 24 business hours with a proposal tailored to your site. Quotes are free.',
      },
      {
        q: 'How do you clean windows and facades at height?',
        a: 'Depending on how accessible the building is, we use a truck-mounted lift, a scissor lift, an aerial platform or telescopic poles combined with a pure-water system that lets us clean from the ground. Every job is planned to be safe and streak-free.',
      },
      {
        q: 'Which certifications does BCF hold?',
        a: 'Our workers are VCA certified (Safety Checklist Contractors), the safety standard on industrial, logistics and institutional sites. Our aerial lifts are inspected by Vinçotte and we are members of UGBN/ABSU, the cleaning industry federation. We are also a subcontractor for major cleaning groups such as GOM, Vebego and Group F.',
      },
    ],
  },
};

export const SERVICES_FAQ: Record<Locale, FaqSet> = {
  fr: {
    eyebrow: 'Questions fréquentes',
    title: 'Vos questions sur nos services de nettoyage',
    description: 'Techniques, matériel et organisation : les réponses avant de demander votre devis.',
    items: [
      {
        q: "Qu'est-ce que le nettoyage de vitres à l'eau osmosée ?",
        a: "C'est un nettoyage à l'eau déminéralisée (osmosée), débarrassée du calcaire et des minéraux. Appliquée avec des perches télescopiques, elle nettoie et rince la vitre sans détergent et sèche sans traces ni résidus, directement depuis le sol, sans nacelle ni échafaudage.",
      },
      {
        q: 'Jusqu\'à quelle hauteur pouvez-vous nettoyer des vitres ?',
        a: "Les perches télescopiques permettent de nettoyer plusieurs dizaines de mètres depuis le sol. Pour les accès plus complexes, nous utilisons un camion élévateur, un élévateur ciseau ou une nacelle, selon la configuration du bâtiment.",
      },
      {
        q: 'Le sablage de façade abîme-t-il le support ?',
        a: "Non, lorsqu'il est réalisé avec une sableuse professionnelle (nous utilisons une sableuse IBIX) : la pression et le grain de l'abrasif sont réglés selon le matériau (brique, pierre, béton). Cette technique permet d'enlever graffitis et salissures sans endommager le support.",
      },
      {
        q: 'Comment nettoyez-vous un entrepôt ou un sol industriel ?',
        a: "Nous utilisons des autolaveuses grande surface et du matériel haute pression pour dégraisser et entretenir les sols béton d'entrepôts, de halls de production et de parkings. Nous pouvons intervenir en horaires décalés pour limiter l'impact sur votre activité.",
      },
      {
        q: 'Faites-vous le nettoyage après chantier ?',
        a: "Oui. Nous assurons le nettoyage ponctuel de fin de chantier pour des bâtiments tertiaires, résidentiels collectifs et industriels, ainsi que l'entretien régulier une fois le site en exploitation.",
      },
      {
        q: 'Combien coûte un nettoyage professionnel ?',
        a: "Le prix dépend de la surface, de la hauteur et de l'accessibilité, de l'état de salissure, du matériel nécessaire et de la fréquence d'intervention. C'est pourquoi chaque devis est établi sur mesure et gratuit : décrivez-nous votre site et nous revenons vers vous sous 24 heures ouvrées.",
      },
    ],
  },
  nl: {
    eyebrow: 'Veelgestelde vragen',
    title: 'Uw vragen over onze reinigingsdiensten',
    description: 'Technieken, materiaal en organisatie: de antwoorden vóór u een offerte aanvraagt.',
    items: [
      {
        q: 'Wat is ramen wassen met osmosewater?',
        a: 'Dat is reiniging met gedemineraliseerd (osmose)water, zonder kalk en mineralen. Met telescopische stangen reinigt en spoelt het het glas zonder detergent en droogt het zonder strepen of resten, rechtstreeks vanaf de grond, zonder hoogwerker of stellingen.',
      },
      {
        q: 'Tot welke hoogte kunnen jullie ramen reinigen?',
        a: 'Met telescopische stangen reinigen we tot enkele tientallen meters vanaf de grond. Voor moeilijkere toegangen gebruiken we een hoogwerkervrachtwagen, een schaarlift of een hoogwerker, afhankelijk van het gebouw.',
      },
      {
        q: 'Beschadigt zandstralen van gevels de ondergrond?',
        a: 'Nee, wanneer het gebeurt met professioneel materiaal (wij gebruiken een IBIX-zandstraler): druk en korrel van het schuurmiddel worden afgestemd op het materiaal (baksteen, natuursteen, beton). Zo verwijderen we graffiti en vervuiling zonder de ondergrond te beschadigen.',
      },
      {
        q: 'Hoe reinigen jullie een magazijn of industriële vloer?',
        a: 'Wij gebruiken grote schrobzuigmachines en hogedrukmateriaal om betonvloeren van magazijnen, productiehallen en parkings te ontvetten en te onderhouden. We kunnen op afwijkende uren werken om uw activiteit zo weinig mogelijk te hinderen.',
      },
      {
        q: 'Doen jullie ook reiniging na de bouw?',
        a: 'Ja. Wij zorgen voor eenmalige eindereiniging na werken in tertiaire, collectieve residentiële en industriële gebouwen, en voor regelmatig onderhoud zodra de site in gebruik is.',
      },
      {
        q: 'Wat kost professionele reiniging?',
        a: 'De prijs hangt af van de oppervlakte, hoogte en bereikbaarheid, de mate van vervuiling, het benodigde materiaal en de frequentie. Daarom is elke offerte gratis en op maat: beschrijf uw site en wij komen binnen 24 werkuren bij u terug.',
      },
    ],
  },
  en: {
    eyebrow: 'Frequently asked questions',
    title: 'Your questions about our cleaning services',
    description: 'Techniques, equipment and organisation: answers before you request a quote.',
    items: [
      {
        q: 'What is reverse-osmosis (pure water) window cleaning?',
        a: 'It is cleaning with demineralised (reverse-osmosis) water, free of limescale and minerals. Applied with telescopic poles, it cleans and rinses the glass without detergent and dries without streaks or residue, directly from the ground, with no lift or scaffolding.',
      },
      {
        q: 'How high can you clean windows?',
        a: 'Telescopic poles let us clean several tens of metres up from the ground. For harder-to-reach areas we use a truck-mounted lift, a scissor lift or an aerial platform, depending on the building.',
      },
      {
        q: 'Does facade sandblasting damage the surface?',
        a: 'No, when it is done with professional equipment (we use an IBIX sandblaster): the pressure and the grain of the abrasive are adjusted to the material (brick, stone, concrete). This removes graffiti and grime without damaging the substrate.',
      },
      {
        q: 'How do you clean a warehouse or industrial floor?',
        a: 'We use large-area scrubber-dryers and high-pressure equipment to degrease and maintain concrete floors in warehouses, production halls and car parks. We can work outside normal hours to limit disruption to your operations.',
      },
      {
        q: 'Do you offer post-construction cleaning?',
        a: 'Yes. We carry out one-off end-of-works cleaning for commercial, collective residential and industrial buildings, as well as regular maintenance once the site is in use.',
      },
      {
        q: 'How much does professional cleaning cost?',
        a: 'The price depends on surface area, height and access, the level of soiling, the equipment required and the frequency of service. That is why every quote is free and tailored: describe your site and we will get back to you within 24 business hours.',
      },
    ],
  },
};
