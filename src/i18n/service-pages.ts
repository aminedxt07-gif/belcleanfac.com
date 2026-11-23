import type { Locale } from './config';
import type { FaqItem } from './seo';

export const SERVICE_KEYS = ['windows', 'floors', 'osmosis', 'buildings'] as const;
export type ServiceKey = (typeof SERVICE_KEYS)[number];

export const SERVICE_PATHS: Record<ServiceKey, Record<Locale, string>> = {
  windows: { fr: '/nettoyage-vitres-facades/', nl: '/nl/ramen-gevelreiniging/', en: '/en/window-facade-cleaning/' },
  floors: { fr: '/nettoyage-sols-industriels/', nl: '/nl/industriele-vloerreiniging/', en: '/en/industrial-floor-cleaning/' },
  osmosis: { fr: '/nettoyage-vitres-eau-osmosee/', nl: '/nl/ramen-wassen-osmosewater/', en: '/en/pure-water-window-cleaning/' },
  buildings: { fr: '/nettoyage-batiments-bureaux/', nl: '/nl/gebouwreiniging-kantoren/', en: '/en/building-office-cleaning/' },
};

export interface ServicePageContent {
  title: string; // <title>
  description: string; // meta description
  eyebrow: string;
  h1: string;
  intro: string;
  image: string;
  imageAlt: string;
  /** Short label used in cross-links and breadcrumbs. */
  label: string;
  cardDescription: string;
  schemaType: string;
  introTitle: string;
  points: string[];
  forWhomTitle: string;
  forWhom: string[];
  stepsTitle: string;
  steps: { title: string; text: string }[];
  equipmentTitle: string;
  equipment: string[];
  faq: FaqItem[];
}

const FR: Record<ServiceKey, ServicePageContent> = {
  windows: {
    title: 'Nettoyage de vitres et façades en hauteur | BCF Belgique',
    description:
      "Nettoyage de vitres et de façades en hauteur pour entreprises dans toute la Belgique : nacelle, camion élévateur, perches à eau osmosée, sablage doux, démoussage. Devis gratuit sous 24h.",
    eyebrow: 'Vitres & façades',
    h1: 'Nettoyage de vitres et de façades en hauteur pour entreprises',
    intro:
      "BCF nettoie les vitres, les châssis et les façades de bâtiments professionnels dans toute la Belgique, y compris aux étages élevés ou sur des accès difficiles. Nous choisissons le matériel selon le bâtiment : perches télescopiques, nacelle, camion élévateur ou élévateur ciseau.",
    image: '/images/vitres-facade-nacelle-chenilles.jpg',
    imageAlt: 'Nacelle sur chenilles utilisée par BCF pour nettoyer les vitres et la façade d’un bâtiment',
    label: 'Vitres & façades',
    cardDescription: 'Vitres en hauteur, châssis, sablage doux de façades, démoussage et graffitis.',
    schemaType: 'Window and facade cleaning',
    introTitle: 'Ce que nous nettoyons',
    points: [
      'Vitres, baies vitrées et façades vitrées, avec nettoyage des châssis et encadrements',
      'Façades en brique, pierre ou béton par sablage doux (sableuse IBIX)',
      'Démoussage et nettoyage de toitures',
      'Enlèvement de graffitis sans attaquer le support',
    ],
    forWhomTitle: 'Pour quels sites ?',
    forWhom: [
      'Concessions et show-rooms automobiles (nous intervenons notamment pour Aston Martin Zaventem et Van Mossel)',
      "Campus et bâtiments d'enseignement supérieur (VUB, KU Leuven)",
      "Hôtels et établissements haut de gamme (Hôtel Wiltcher's, Avenue Louise)",
      'Bureaux, sites industriels et logistiques, résidences collectives',
    ],
    stepsTitle: "Comment se déroule une intervention",
    steps: [
      { title: 'Votre demande', text: 'Vous nous décrivez le site : hauteur, surface vitrée, accès, fréquence souhaitée.' },
      { title: 'Devis sous 24h ouvrées', text: 'Nous choisissons la technique et le matériel adaptés, puis vous envoyons un devis gratuit.' },
      { title: 'Planification', text: "Nous fixons les créneaux selon votre activité, y compris en site occupé ou en horaires décalés." },
      { title: 'Intervention', text: 'Une équipe formée VCA réalise le nettoyage en sécurité, puis contrôle le résultat.' },
    ],
    equipmentTitle: 'Matériel utilisé',
    equipment: ['Camion élévateur', 'Élévateur ciseau', 'Nacelle sur chenilles', "Perches télescopiques à eau osmosée", 'Sableuse IBIX'],
    faq: [
      {
        q: 'À quelle hauteur pouvez-vous nettoyer des vitres ?',
        a: "Les perches télescopiques atteignent plusieurs dizaines de mètres depuis le sol. Au-delà ou pour les accès complexes, nous utilisons un camion élévateur, un élévateur ciseau ou une nacelle.",
      },
      {
        q: 'Intervenez-vous en dehors de Bruxelles ?',
        a: "Oui, nous intervenons dans toute la Belgique : Bruxelles, la Flandre et la Wallonie. Notre siège est à Londerzeel.",
      },
      {
        q: 'Le nettoyage des châssis est-il compris ?',
        a: "Oui, le nettoyage des châssis et encadrements est inclus dans nos prestations de nettoyage de vitres.",
      },
      {
        q: "Le sablage de façade abîme-t-il la brique ou la pierre ?",
        a: "Non, lorsqu'il est réalisé avec une sableuse professionnelle : la pression et le grain sont réglés selon le matériau, ce qui permet d'enlever salissures et graffitis sans endommager le support.",
      },
    ],
  },
  floors: {
    title: 'Nettoyage industriel de sols et entrepôts | BCF Belgique',
    description:
      "Nettoyage de sols industriels, entrepôts, halls de production et parkings par autolaveuse grande surface et haute pression, dans toute la Belgique. Devis gratuit sous 24h.",
    eyebrow: 'Sols & grandes surfaces',
    h1: 'Nettoyage industriel de sols, entrepôts et parkings',
    intro:
      "BCF entretient les sols béton et les grandes surfaces de sites industriels, logistiques et tertiaires dans toute la Belgique. Nous travaillons à l'autolaveuse grande surface et au matériel haute pression, en limitant l'impact sur votre activité.",
    image: '/images/autolaveuse-entrepot-hoogwerkers.jpg',
    imageAlt: 'Autolaveuse grande surface nettoyant le sol béton d’un entrepôt industriel',
    label: 'Sols industriels',
    cardDescription: 'Entrepôts, halls de production, parkings : autolaveuses et haute pression.',
    schemaType: 'Industrial floor cleaning',
    introTitle: 'Ce que nous nettoyons',
    points: [
      'Dégraissage et entretien des sols béton',
      'Entrepôts, halls industriels et zones de production',
      'Parkings et zones de stationnement, intérieurs et extérieurs',
      'Bureaux et espaces tertiaires et administratifs',
    ],
    forWhomTitle: 'Pour quels sites ?',
    forWhom: [
      'Sites industriels et de production (nous intervenons notamment pour SONOCO)',
      'Entrepôts et sites logistiques',
      'Garages, concessions et parkings',
      'Grands groupes de nettoyage qui nous sous-traitent des chantiers (GOM, Vebego, Group F)',
    ],
    stepsTitle: "Comment se déroule une intervention",
    steps: [
      { title: 'Votre demande', text: "Vous nous indiquez la surface, le type de sol, l'état de salissure et la fréquence souhaitée." },
      { title: 'Devis sous 24h ouvrées', text: "Nous sélectionnons les machines adaptées et vous proposons un devis gratuit, ponctuel ou récurrent." },
      { title: 'Planification', text: 'Les passages sont planifiés selon votre activité, y compris en horaires décalés.' },
      { title: 'Intervention', text: 'Nos équipes certifiées VCA nettoient, dégraissent et remettent le site en ordre.' },
    ],
    equipmentTitle: 'Matériel utilisé',
    equipment: ['Autolaveuse grande surface', 'Camion Karcher haute pression', 'Machine à vapeur', 'Nettoyage de tapis par injection/extraction'],
    faq: [
      {
        q: "À quelle fréquence faut-il nettoyer un sol d'entrepôt ?",
        a: "Cela dépend du trafic, de l'activité et du type de salissure. Nous vous détaillons les repères dans notre guide sur la fréquence d'entretien des sols industriels, puis nous ajustons la fréquence à votre site dans le devis.",
      },
      {
        q: 'Pouvez-vous intervenir sans arrêter notre activité ?',
        a: "Dans la plupart des cas oui : nous planifions les passages en horaires décalés ou par zones pour limiter l'impact sur votre exploitation.",
      },
      {
        q: 'Nettoyez-vous aussi les parkings ?',
        a: "Oui, les parkings intérieurs et extérieurs, au matériel haute pression ou à l'autolaveuse selon la surface.",
      },
      {
        q: 'Proposez-vous un contrat récurrent ?',
        a: "Oui. Nous intervenons de façon ponctuelle ou régulière, selon vos besoins. Le devis précise la fréquence retenue.",
      },
    ],
  },
  osmosis: {
    title: "Nettoyage de vitres à l'eau osmosée | BCF Belgique",
    description:
      "Nettoyage de vitres à l'eau osmosée (déminéralisée) par perches télescopiques : sans traces, sans détergent, depuis le sol, pour entreprises dans toute la Belgique.",
    eyebrow: "Nettoyage à l'eau osmosée",
    h1: "Nettoyage de vitres à l'eau osmosée, sans traces et sans nacelle",
    intro:
      "L'eau osmosée est débarrassée du calcaire et des minéraux : elle nettoie et rince la vitre sans détergent et sèche sans traces. Avec nos perches télescopiques, nous traitons vitres, vérandas et façades vitrées en hauteur directement depuis le sol.",
    image: '/images/nettoyage-vitres-perche-eau-osmosee.jpg',
    imageAlt: 'Technicien BCF nettoyant une vitre en hauteur avec une perche télescopique à eau osmosée',
    label: 'Eau osmosée',
    cardDescription: 'Vitres et façades vitrées sans traces, en hauteur, depuis le sol.',
    schemaType: 'Pure water (reverse-osmosis) window cleaning',
    introTitle: "Les avantages de l'eau osmosée",
    points: [
      'Zéro trace, zéro résidu calcaire',
      'Nettoyage sans détergent, sans danger pour les surfaces sensibles',
      "Perches télescopiques jusqu'à plusieurs dizaines de mètres depuis le sol",
      "Pas de nacelle ni d'échafaudage : intervention plus rapide et moins intrusive",
    ],
    forWhomTitle: 'Pour quels supports ?',
    forWhom: [
      'Vitrines et façades vitrées de bâtiments tertiaires',
      'Vérandas, auvents et verrières',
      'Vitres difficiles d’accès en hauteur',
      'Vitres de bureaux et de bâtiments publics',
    ],
    stepsTitle: "Comment se déroule une intervention",
    steps: [
      { title: 'Votre demande', text: 'Vous nous indiquez le type de vitrage, la hauteur et les contraintes du site.' },
      { title: 'Devis sous 24h ouvrées', text: 'Nous vérifions si le nettoyage depuis le sol suffit ou si un autre accès est nécessaire.' },
      { title: 'Intervention', text: "L'équipe nettoie et rince à l'eau osmosée, puis laisse sécher naturellement, sans essuyage." },
    ],
    equipmentTitle: 'Matériel utilisé',
    equipment: ["Système d'eau osmosée", 'Perches télescopiques', 'Camion élévateur pour les accès complexes'],
    faq: [
      {
        q: "Pourquoi l'eau osmosée ne laisse-t-elle pas de traces ?",
        a: "Parce qu'elle ne contient ni calcaire ni minéraux dissous : en séchant, elle ne dépose aucun résidu sur la vitre.",
      },
      {
        q: 'Faut-il ajouter un produit de nettoyage ?',
        a: "Non. Le nettoyage se fait sans détergent, ce qui convient aux surfaces sensibles.",
      },
      {
        q: 'Peut-on nettoyer des vitres très hautes sans nacelle ?',
        a: "Oui, jusqu'à plusieurs dizaines de mètres avec nos perches télescopiques. Pour les accès particuliers, nous passons à un camion élévateur.",
      },
    ],
  },
  buildings: {
    title: 'Nettoyage de bureaux et bâtiments pour entreprises | BCF',
    description:
      "Entretien de bureaux, résidences étudiantes, musées et bâtiments événementiels, nettoyage après chantier : nettoyage professionnel pour entreprises dans toute la Belgique.",
    eyebrow: 'Bâtiments & résidentiel collectif',
    h1: 'Nettoyage de bureaux, bâtiments tertiaires et résidentiel collectif',
    intro:
      "BCF assure l'entretien régulier ou ponctuel de bâtiments professionnels : bureaux, résidences étudiantes, musées et sites événementiels. Nos équipes sont formées aux exigences de chaque environnement et interviennent aussi en site occupé.",
    image: '/images/autolaveuse-hall-musee-evenementiel.jpg',
    imageAlt: 'Autolaveuse nettoyant le sol du hall d’un bâtiment événementiel',
    label: 'Bureaux & bâtiments',
    cardDescription: 'Bureaux, résidences étudiantes, musées et bâtiments événementiels.',
    schemaType: 'Building maintenance cleaning',
    introTitle: 'Ce que nous entretenons',
    points: [
      'Bureaux et immeubles tertiaires',
      'Résidences étudiantes et logements collectifs',
      'Musées et bâtiments événementiels',
      'Nettoyage ponctuel après chantier et entretien régulier ensuite',
    ],
    forWhomTitle: 'Pour quels clients ?',
    forWhom: [
      'Entreprises et gestionnaires de bureaux',
      'Syndics et gestionnaires de résidences collectives',
      'Établissements d’enseignement supérieur et résidences étudiantes',
      'Lieux culturels et événementiels',
    ],
    stepsTitle: "Comment se déroule une intervention",
    steps: [
      { title: 'Votre demande', text: 'Vous nous décrivez le bâtiment, les surfaces et le rythme souhaité.' },
      { title: 'Devis sous 24h ouvrées', text: 'Nous proposons une offre adaptée : entretien régulier ou intervention ponctuelle.' },
      { title: 'Planification', text: 'Les passages sont organisés pour ne pas gêner les occupants.' },
      { title: 'Intervention', text: 'Une équipe formée VCA réalise le nettoyage et vous rend le site prêt à l’usage.' },
    ],
    equipmentTitle: 'Matériel utilisé',
    equipment: ['Autolaveuse', 'Machine à vapeur', 'Nettoyage de tapis par injection/extraction'],
    faq: [
      {
        q: 'Proposez-vous le nettoyage après chantier ?',
        a: "Oui, nous réalisons le nettoyage ponctuel de fin de chantier, puis l'entretien régulier du bâtiment une fois en exploitation.",
      },
      {
        q: 'Pouvez-vous intervenir quand les locaux sont occupés ?',
        a: "Oui. Nous adaptons les horaires et l'organisation pour limiter la gêne : horaires décalés, passages par zones.",
      },
      {
        q: 'Travaillez-vous pour les particuliers ?',
        a: "Non, BCF travaille uniquement avec les entreprises et les professionnels (y compris syndics et gestionnaires de bâtiments).",
      },
    ],
  },
};

const NL: Record<ServiceKey, ServicePageContent> = {
  windows: {
    title: 'Ramen- en gevelreiniging op hoogte | BCF België',
    description:
      'Ramen- en gevelreiniging op hoogte voor bedrijven in heel België: hoogwerker, schaarlift, osmosewater-stangen, zacht zandstralen, ontmossen. Gratis offerte binnen 24 werkuren.',
    eyebrow: 'Ramen & gevels',
    h1: 'Ramen- en gevelreiniging op hoogte voor bedrijven',
    intro:
      'BCF reinigt ramen, kozijnen en gevels van professionele gebouwen in heel België, ook op hoge verdiepingen of moeilijk bereikbare plaatsen. We kiezen het materiaal volgens het gebouw: telescopische stangen, hoogwerker, hoogwerkervrachtwagen of schaarlift.',
    image: '/images/vitres-facade-nacelle-chenilles.jpg',
    imageAlt: 'Rupsen-hoogwerker van BCF bij het reinigen van de ramen en gevel van een gebouw',
    label: 'Ramen & gevels',
    cardDescription: 'Ramen op hoogte, kozijnen, zacht zandstralen van gevels, ontmossen en graffiti.',
    schemaType: 'Window and facade cleaning',
    introTitle: 'Wat wij reinigen',
    points: [
      'Ramen, glaspartijen en glazen gevels, inclusief kozijnen en omlijstingen',
      'Gevels in baksteen, natuursteen of beton door zacht zandstralen (IBIX-zandstraler)',
      'Ontmossen en reinigen van daken',
      'Graffiti verwijderen zonder de ondergrond aan te tasten',
    ],
    forWhomTitle: 'Voor welke sites?',
    forWhom: [
      'Autodealers en showrooms (o.a. Aston Martin Zaventem en Van Mossel)',
      'Campussen en hogeronderwijsgebouwen (VUB, KU Leuven)',
      "Hotels en prestigieuze instellingen (Hotel Wiltcher's, Louizalaan)",
      'Kantoren, industriële en logistieke sites, collectieve residenties',
    ],
    stepsTitle: 'Hoe verloopt een interventie',
    steps: [
      { title: 'Uw aanvraag', text: 'U beschrijft de site: hoogte, glasoppervlak, toegang, gewenste frequentie.' },
      { title: 'Offerte binnen 24 werkuren', text: 'Wij kiezen de gepaste techniek en het juiste materiaal en bezorgen u een gratis offerte.' },
      { title: 'Planning', text: 'We plannen volgens uw activiteit, ook op bewoonde sites of op afwijkende uren.' },
      { title: 'Interventie', text: 'Een VCA-opgeleide ploeg reinigt veilig en controleert het resultaat.' },
    ],
    equipmentTitle: 'Gebruikt materiaal',
    equipment: ['Hoogwerkervrachtwagen', 'Schaarlift', 'Rupsen-hoogwerker', 'Telescopische stangen met osmosewater', 'IBIX-zandstraler'],
    faq: [
      {
        q: 'Tot welke hoogte kunnen jullie ramen reinigen?',
        a: 'Telescopische stangen reiken tot enkele tientallen meters vanaf de grond. Voor moeilijkere toegangen gebruiken we een hoogwerkervrachtwagen, schaarlift of hoogwerker.',
      },
      {
        q: 'Werken jullie ook buiten Brussel?',
        a: 'Ja, we werken in heel België: Brussel, Vlaanderen en Wallonië. Ons hoofdkantoor ligt in Londerzeel.',
      },
      {
        q: 'Is het reinigen van de kozijnen inbegrepen?',
        a: 'Ja, het reinigen van kozijnen en omlijstingen zit inbegrepen bij onze ramenreiniging.',
      },
      {
        q: 'Beschadigt zandstralen baksteen of natuursteen?',
        a: 'Nee, met professioneel materiaal worden druk en korrel afgestemd op het materiaal, zodat vervuiling en graffiti verdwijnen zonder de ondergrond te beschadigen.',
      },
    ],
  },
  floors: {
    title: 'Industriële vloerreiniging en magazijnen | BCF België',
    description:
      'Reiniging van industriële vloeren, magazijnen, productiehallen en parkings met grote schrobzuigmachines en hogedruk in heel België. Gratis offerte binnen 24 werkuren.',
    eyebrow: 'Vloeren & grote oppervlakken',
    h1: 'Industriële reiniging van vloeren, magazijnen en parkings',
    intro:
      'BCF onderhoudt betonvloeren en grote oppervlakken van industriële, logistieke en tertiaire sites in heel België. We werken met grote schrobzuigmachines en hogedrukmateriaal, met zo weinig mogelijk hinder voor uw activiteit.',
    image: '/images/autolaveuse-entrepot-hoogwerkers.jpg',
    imageAlt: 'Grote schrobzuigmachine reinigt de betonvloer van een industrieel magazijn',
    label: 'Industriële vloeren',
    cardDescription: 'Magazijnen, productiehallen, parkings: schrobzuigmachines en hogedruk.',
    schemaType: 'Industrial floor cleaning',
    introTitle: 'Wat wij reinigen',
    points: [
      'Ontvetten en onderhouden van betonvloeren',
      'Magazijnen, industriehallen en productiezones',
      'Parkings en stalplaatsen, binnen en buiten',
      'Kantoren en tertiaire en administratieve ruimtes',
    ],
    forWhomTitle: 'Voor welke sites?',
    forWhom: [
      'Industriële en productiesites (o.a. SONOCO)',
      'Magazijnen en logistieke sites',
      'Garages, dealers en parkings',
      'Grote schoonmaakgroepen die ons als onderaannemer inschakelen (GOM, Vebego, Group F)',
    ],
    stepsTitle: 'Hoe verloopt een interventie',
    steps: [
      { title: 'Uw aanvraag', text: 'U geeft de oppervlakte, het type vloer, de vervuilingsgraad en de gewenste frequentie door.' },
      { title: 'Offerte binnen 24 werkuren', text: 'Wij kiezen de gepaste machines en bezorgen een gratis offerte, eenmalig of terugkerend.' },
      { title: 'Planning', text: 'De passages worden afgestemd op uw activiteit, ook op afwijkende uren.' },
      { title: 'Interventie', text: 'Onze VCA-gecertificeerde ploegen reinigen, ontvetten en laten de site netjes achter.' },
    ],
    equipmentTitle: 'Gebruikt materiaal',
    equipment: ['Grote schrobzuigmachine', 'Karcher-hogedrukwagen', 'Stoommachine', 'Tapijtreiniging met injectie/extractie'],
    faq: [
      {
        q: 'Hoe vaak moet een magazijnvloer gereinigd worden?',
        a: 'Dat hangt af van het verkeer, de activiteit en het type vervuiling. In onze gids over de onderhoudsfrequentie van industriële vloeren vindt u de richtlijnen; in de offerte stemmen we de frequentie af op uw site.',
      },
      {
        q: 'Kunnen jullie werken zonder onze activiteit stil te leggen?',
        a: 'In de meeste gevallen wel: we plannen de passages op afwijkende uren of per zone om de hinder te beperken.',
      },
      {
        q: 'Reinigen jullie ook parkings?',
        a: 'Ja, binnen- en buitenparkings, met hogedruk of schrobzuigmachine volgens de oppervlakte.',
      },
      {
        q: 'Bieden jullie een terugkerend contract aan?',
        a: 'Ja. We werken eenmalig of regelmatig, naargelang uw behoefte. De offerte vermeldt de gekozen frequentie.',
      },
    ],
  },
  osmosis: {
    title: 'Ramen wassen met osmosewater | BCF België',
    description:
      'Ramen wassen met osmosewater (gedemineraliseerd) via telescopische stangen: streeploos, zonder detergent, vanaf de grond, voor bedrijven in heel België.',
    eyebrow: 'Reiniging met osmosewater',
    h1: 'Ramen wassen met osmosewater: streeploos en zonder hoogwerker',
    intro:
      'Osmosewater bevat geen kalk of mineralen: het reinigt en spoelt het glas zonder detergent en droogt zonder strepen. Met onze telescopische stangen reinigen we ramen, veranda’s en glazen gevels op hoogte rechtstreeks vanaf de grond.',
    image: '/images/nettoyage-vitres-perche-eau-osmosee.jpg',
    imageAlt: 'BCF-technicus reinigt een raam op hoogte met een telescopische osmosewaterstang',
    label: 'Osmosewater',
    cardDescription: 'Streeploze ramen en glazen gevels op hoogte, vanaf de grond.',
    schemaType: 'Pure water (reverse-osmosis) window cleaning',
    introTitle: 'De voordelen van osmosewater',
    points: [
      'Geen strepen, geen kalkresten',
      'Reiniging zonder detergent, veilig voor gevoelige oppervlakken',
      'Telescopische stangen tot enkele tientallen meters vanaf de grond',
      'Geen hoogwerker of stellingen nodig: sneller en minder storend',
    ],
    forWhomTitle: 'Voor welke oppervlakken?',
    forWhom: [
      'Etalages en glazen gevels van tertiaire gebouwen',
      'Veranda’s, luifels en glasdaken',
      'Moeilijk bereikbare ramen op hoogte',
      'Ramen van kantoren en openbare gebouwen',
    ],
    stepsTitle: 'Hoe verloopt een interventie',
    steps: [
      { title: 'Uw aanvraag', text: 'U geeft het type beglazing, de hoogte en de beperkingen van de site door.' },
      { title: 'Offerte binnen 24 werkuren', text: 'We bekijken of reinigen vanaf de grond volstaat of dat een andere toegang nodig is.' },
      { title: 'Interventie', text: 'De ploeg reinigt en spoelt met osmosewater en laat natuurlijk drogen, zonder afdrogen.' },
    ],
    equipmentTitle: 'Gebruikt materiaal',
    equipment: ['Osmosewatersysteem', 'Telescopische stangen', 'Hoogwerkervrachtwagen voor moeilijke toegangen'],
    faq: [
      {
        q: 'Waarom laat osmosewater geen strepen na?',
        a: 'Omdat het geen kalk of opgeloste mineralen bevat: bij het drogen blijft er niets achter op het glas.',
      },
      {
        q: 'Moet er een reinigingsproduct bij?',
        a: 'Nee. De reiniging gebeurt zonder detergent, wat geschikt is voor gevoelige oppervlakken.',
      },
      {
        q: 'Kunnen heel hoge ramen zonder hoogwerker gereinigd worden?',
        a: 'Ja, tot enkele tientallen meters met onze telescopische stangen. Voor bijzondere toegangen schakelen we over op een hoogwerkervrachtwagen.',
      },
    ],
  },
  buildings: {
    title: 'Kantoor- en gebouwreiniging voor bedrijven | BCF',
    description:
      'Onderhoud van kantoren, studentenresidenties, musea en evenementiële gebouwen, reiniging na de bouw: professionele reiniging voor bedrijven in heel België.',
    eyebrow: 'Gebouwen & collectieve residenties',
    h1: 'Reiniging van kantoren, tertiaire gebouwen en collectieve residenties',
    intro:
      'BCF zorgt voor regelmatig of eenmalig onderhoud van professionele gebouwen: kantoren, studentenresidenties, musea en evenementiële sites. Onze ploegen zijn getraind voor de eisen van elke omgeving en werken ook op bewoonde sites.',
    image: '/images/autolaveuse-hall-musee-evenementiel.jpg',
    imageAlt: 'Schrobzuigmachine reinigt de vloer van de hal van een evenementieel gebouw',
    label: 'Kantoren & gebouwen',
    cardDescription: 'Kantoren, studentenresidenties, musea en evenementiële gebouwen.',
    schemaType: 'Building maintenance cleaning',
    introTitle: 'Wat wij onderhouden',
    points: [
      'Kantoren en tertiaire gebouwen',
      'Studentenresidenties en collectieve woningen',
      'Musea en evenementiële gebouwen',
      'Eenmalige reiniging na de bouw en nadien regelmatig onderhoud',
    ],
    forWhomTitle: 'Voor welke klanten?',
    forWhom: [
      'Bedrijven en kantoorbeheerders',
      'Syndici en beheerders van collectieve residenties',
      'Hogeronderwijsinstellingen en studentenresidenties',
      'Culturele en evenementiële locaties',
    ],
    stepsTitle: 'Hoe verloopt een interventie',
    steps: [
      { title: 'Uw aanvraag', text: 'U beschrijft het gebouw, de oppervlakten en het gewenste ritme.' },
      { title: 'Offerte binnen 24 werkuren', text: 'Wij stellen een aangepast voorstel op: regelmatig onderhoud of eenmalige interventie.' },
      { title: 'Planning', text: 'De passages worden georganiseerd om de gebruikers niet te storen.' },
      { title: 'Interventie', text: 'Een VCA-opgeleide ploeg reinigt en levert het gebouw gebruiksklaar op.' },
    ],
    equipmentTitle: 'Gebruikt materiaal',
    equipment: ['Schrobzuigmachine', 'Stoommachine', 'Tapijtreiniging met injectie/extractie'],
    faq: [
      {
        q: 'Doen jullie reiniging na de bouw?',
        a: 'Ja, we doen de eenmalige eindereiniging na werken, en nadien het regelmatig onderhoud van het gebouw in gebruik.',
      },
      {
        q: 'Kunnen jullie werken terwijl de lokalen bezet zijn?',
        a: 'Ja. We passen uren en organisatie aan om hinder te beperken: afwijkende uren, werken per zone.',
      },
      {
        q: 'Werken jullie voor particulieren?',
        a: 'Nee, BCF werkt enkel voor bedrijven en professionals (ook syndici en gebouwbeheerders).',
      },
    ],
  },
};

const EN: Record<ServiceKey, ServicePageContent> = {
  windows: {
    title: 'High-level window & facade cleaning | BCF Belgium',
    description:
      'High-level window and facade cleaning for businesses across Belgium: aerial platform, truck-mounted lift, pure-water poles, gentle sandblasting, moss removal. Free quote within 24 business hours.',
    eyebrow: 'Windows & facades',
    h1: 'High-level window and facade cleaning for businesses',
    intro:
      'BCF cleans the windows, frames and facades of commercial buildings across Belgium, including upper floors and hard-to-reach areas. We pick the equipment to suit the building: telescopic poles, aerial platform, truck-mounted lift or scissor lift.',
    image: '/images/vitres-facade-nacelle-chenilles.jpg',
    imageAlt: 'BCF tracked aerial platform cleaning the windows and facade of a building',
    label: 'Windows & facades',
    cardDescription: 'High-level windows, frames, gentle facade sandblasting, moss and graffiti removal.',
    schemaType: 'Window and facade cleaning',
    introTitle: 'What we clean',
    points: [
      'Windows, glazed walls and glass facades, including frames and surrounds',
      'Brick, stone or concrete facades by gentle sandblasting (IBIX sandblaster)',
      'Roof moss removal and cleaning',
      'Graffiti removal without damaging the surface',
    ],
    forWhomTitle: 'Which sites?',
    forWhom: [
      'Car dealerships and showrooms (including Aston Martin Zaventem and Van Mossel)',
      'Campuses and higher-education buildings (VUB, KU Leuven)',
      "Hotels and prestige venues (Hotel Wiltcher's, Avenue Louise)",
      'Offices, industrial and logistics sites, collective residences',
    ],
    stepsTitle: 'How a job works',
    steps: [
      { title: 'Your request', text: 'You describe the site: height, glazed area, access and preferred frequency.' },
      { title: 'Quote within 24 business hours', text: 'We choose the right technique and equipment and send you a free quote.' },
      { title: 'Scheduling', text: 'We plan around your activity, including occupied sites and off-hours.' },
      { title: 'The job', text: 'A VCA-trained team cleans safely and checks the result.' },
    ],
    equipmentTitle: 'Equipment',
    equipment: ['Truck-mounted lift', 'Scissor lift', 'Tracked aerial platform', 'Telescopic pure-water poles', 'IBIX sandblaster'],
    faq: [
      {
        q: 'How high can you clean windows?',
        a: 'Telescopic poles reach several tens of metres from the ground. For harder access we use a truck-mounted lift, a scissor lift or an aerial platform.',
      },
      {
        q: 'Do you work outside Brussels?',
        a: 'Yes, we work throughout Belgium: Brussels, Flanders and Wallonia. Our head office is in Londerzeel.',
      },
      {
        q: 'Is frame cleaning included?',
        a: 'Yes, cleaning of frames and surrounds is included in our window-cleaning service.',
      },
      {
        q: 'Does sandblasting damage brick or stone?',
        a: 'No. With professional equipment, pressure and grain are adjusted to the material, so grime and graffiti come off without damaging the surface.',
      },
    ],
  },
  floors: {
    title: 'Industrial floor & warehouse cleaning | BCF Belgium',
    description:
      'Cleaning of industrial floors, warehouses, production halls and car parks with large-area scrubber-dryers and high-pressure equipment across Belgium. Free quote within 24 business hours.',
    eyebrow: 'Floors & large surfaces',
    h1: 'Industrial cleaning of floors, warehouses and car parks',
    intro:
      'BCF maintains concrete floors and large surfaces at industrial, logistics and commercial sites across Belgium. We work with large-area scrubber-dryers and high-pressure equipment, keeping disruption to your operations to a minimum.',
    image: '/images/autolaveuse-entrepot-hoogwerkers.jpg',
    imageAlt: 'Large-area scrubber-dryer cleaning the concrete floor of an industrial warehouse',
    label: 'Industrial floors',
    cardDescription: 'Warehouses, production halls, car parks: scrubber-dryers and high pressure.',
    schemaType: 'Industrial floor cleaning',
    introTitle: 'What we clean',
    points: [
      'Degreasing and maintenance of concrete floors',
      'Warehouses, industrial halls and production areas',
      'Car parks and parking areas, indoor and outdoor',
      'Offices and commercial and administrative spaces',
    ],
    forWhomTitle: 'Which sites?',
    forWhom: [
      'Industrial and production sites (including SONOCO)',
      'Warehouses and logistics sites',
      'Garages, dealerships and car parks',
      'Major cleaning groups that subcontract jobs to us (GOM, Vebego, Group F)',
    ],
    stepsTitle: 'How a job works',
    steps: [
      { title: 'Your request', text: 'You tell us the surface area, floor type, soiling level and preferred frequency.' },
      { title: 'Quote within 24 business hours', text: 'We select the right machines and send a free quote, one-off or recurring.' },
      { title: 'Scheduling', text: 'Visits are planned around your activity, including off-hours.' },
      { title: 'The job', text: 'Our VCA-certified teams clean, degrease and leave the site in order.' },
    ],
    equipmentTitle: 'Equipment',
    equipment: ['Large-area scrubber-dryer', 'High-pressure Karcher truck', 'Steam machine', 'Carpet injection/extraction cleaning'],
    faq: [
      {
        q: 'How often should a warehouse floor be cleaned?',
        a: 'It depends on traffic, activity and the type of soiling. Our guide on industrial floor maintenance frequency gives benchmarks, and we then adjust the frequency to your site in the quote.',
      },
      {
        q: 'Can you work without stopping our operations?',
        a: 'In most cases yes: we schedule visits outside normal hours or zone by zone to limit disruption.',
      },
      {
        q: 'Do you also clean car parks?',
        a: 'Yes, indoor and outdoor car parks, with high-pressure equipment or a scrubber-dryer depending on the surface.',
      },
      {
        q: 'Do you offer recurring contracts?',
        a: 'Yes. We work on a one-off or regular basis, depending on your needs. The quote states the agreed frequency.',
      },
    ],
  },
  osmosis: {
    title: 'Pure-water (osmosis) window cleaning | BCF Belgium',
    description:
      'Reverse-osmosis (demineralised) water window cleaning with telescopic poles: streak-free, detergent-free, from the ground, for businesses across Belgium.',
    eyebrow: 'Pure-water cleaning',
    h1: 'Pure-water window cleaning: streak-free, no lift needed',
    intro:
      'Reverse-osmosis water is free of limescale and minerals: it cleans and rinses the glass without detergent and dries without streaks. With our telescopic poles we clean windows, verandas and glass facades at height directly from the ground.',
    image: '/images/nettoyage-vitres-perche-eau-osmosee.jpg',
    imageAlt: 'BCF technician cleaning a high window with a telescopic pure-water pole',
    label: 'Pure water',
    cardDescription: 'Streak-free windows and glass facades at height, from the ground.',
    schemaType: 'Pure water (reverse-osmosis) window cleaning',
    introTitle: 'Benefits of pure water',
    points: [
      'No streaks, no limescale residue',
      'Detergent-free cleaning, safe for sensitive surfaces',
      'Telescopic poles up to several tens of metres from the ground',
      'No lift or scaffolding: faster and less intrusive',
    ],
    forWhomTitle: 'Which surfaces?',
    forWhom: [
      'Shopfronts and glass facades of commercial buildings',
      'Verandas, canopies and glass roofs',
      'Hard-to-reach windows at height',
      'Windows of offices and public buildings',
    ],
    stepsTitle: 'How a job works',
    steps: [
      { title: 'Your request', text: 'You tell us the type of glazing, the height and any site constraints.' },
      { title: 'Quote within 24 business hours', text: 'We check whether cleaning from the ground is enough or another access is needed.' },
      { title: 'The job', text: 'The team cleans and rinses with pure water, then lets it dry naturally with no wiping.' },
    ],
    equipmentTitle: 'Equipment',
    equipment: ['Pure-water system', 'Telescopic poles', 'Truck-mounted lift for complex access'],
    faq: [
      {
        q: 'Why does pure water leave no streaks?',
        a: 'Because it contains no limescale or dissolved minerals: as it dries, nothing is left on the glass.',
      },
      {
        q: 'Do you need to add a cleaning product?',
        a: 'No. Cleaning is done without detergent, which suits sensitive surfaces.',
      },
      {
        q: 'Can very high windows be cleaned without a lift?',
        a: 'Yes, up to several tens of metres with our telescopic poles. For special access we switch to a truck-mounted lift.',
      },
    ],
  },
  buildings: {
    title: 'Office & building cleaning for businesses | BCF',
    description:
      'Maintenance of offices, student residences, museums and event venues, post-construction cleaning: professional cleaning for businesses across Belgium.',
    eyebrow: 'Buildings & collective residential',
    h1: 'Cleaning of offices, commercial buildings and collective residences',
    intro:
      'BCF provides regular or one-off maintenance of commercial buildings: offices, student residences, museums and event venues. Our teams are trained for the demands of each environment and also work on occupied sites.',
    image: '/images/autolaveuse-hall-musee-evenementiel.jpg',
    imageAlt: 'Scrubber-dryer cleaning the floor of an event building hall',
    label: 'Offices & buildings',
    cardDescription: 'Offices, student residences, museums and event venues.',
    schemaType: 'Building maintenance cleaning',
    introTitle: 'What we maintain',
    points: [
      'Offices and commercial buildings',
      'Student residences and collective housing',
      'Museums and event venues',
      'One-off post-construction cleaning, then regular maintenance',
    ],
    forWhomTitle: 'Which clients?',
    forWhom: [
      'Companies and office managers',
      'Property managers of collective residences',
      'Higher-education institutions and student residences',
      'Cultural and event venues',
    ],
    stepsTitle: 'How a job works',
    steps: [
      { title: 'Your request', text: 'You describe the building, the surfaces and the rhythm you need.' },
      { title: 'Quote within 24 business hours', text: 'We propose a tailored offer: regular maintenance or a one-off job.' },
      { title: 'Scheduling', text: 'Visits are organised so they do not disturb occupants.' },
      { title: 'The job', text: 'A VCA-trained team cleans and hands the building back ready for use.' },
    ],
    equipmentTitle: 'Equipment',
    equipment: ['Scrubber-dryer', 'Steam machine', 'Carpet injection/extraction cleaning'],
    faq: [
      {
        q: 'Do you offer post-construction cleaning?',
        a: 'Yes, we carry out one-off end-of-works cleaning, then regular maintenance once the building is in use.',
      },
      {
        q: 'Can you work while the premises are occupied?',
        a: 'Yes. We adapt hours and organisation to limit disruption: off-hours, zone-by-zone visits.',
      },
      {
        q: 'Do you work for private individuals?',
        a: 'No, BCF works only with businesses and professionals (including property and facility managers).',
      },
    ],
  },
};

export const SERVICE_PAGES: Record<Locale, Record<ServiceKey, ServicePageContent>> = { fr: FR, nl: NL, en: EN };

export const SERVICE_UI: Record<Locale, { related: string; relatedDesc: string; learnMore: string; allServices: string; ctaTitle: string; ctaDesc: string; guide: string; guideHref: string; guideLabel: string }> = {
  fr: {
    related: 'Nos autres prestations',
    relatedDesc: 'Découvrez le reste de notre offre pour les entreprises.',
    learnMore: 'Voir cette prestation',
    allServices: 'Tous nos services',
    ctaTitle: 'Un devis pour votre site ?',
    ctaDesc: 'Décrivez-nous votre besoin, nous revenons vers vous sous 24h ouvrées.',
    guide: 'Pour aller plus loin',
    guideHref: '/blog/',
    guideLabel: 'Lire nos guides pratiques',
  },
  nl: {
    related: 'Onze andere diensten',
    relatedDesc: 'Ontdek de rest van ons aanbod voor bedrijven.',
    learnMore: 'Bekijk deze dienst',
    allServices: 'Al onze diensten',
    ctaTitle: 'Een offerte voor uw site?',
    ctaDesc: 'Beschrijf uw behoefte, we komen binnen 24 werkuren bij u terug.',
    guide: 'Meer weten',
    guideHref: '/nl/blog/',
    guideLabel: 'Lees onze praktische gidsen',
  },
  en: {
    related: 'Our other services',
    relatedDesc: 'Discover the rest of our offer for businesses.',
    learnMore: 'View this service',
    allServices: 'All our services',
    ctaTitle: 'A quote for your site?',
    ctaDesc: 'Tell us what you need and we will get back to you within 24 business hours.',
    guide: 'Learn more',
    guideHref: '/en/blog/',
    guideLabel: 'Read our practical guides',
  },
};
