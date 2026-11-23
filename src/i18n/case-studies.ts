import type { Locale } from './config';
import type { ServiceKey } from './service-pages';

export const CASE_KEYS = ['vub', 'wiltchers', 'aston'] as const;
export type CaseKey = (typeof CASE_KEYS)[number];

export const CASE_PATHS: Record<CaseKey, Record<Locale, string>> = {
  vub: {
    fr: '/realisations/nettoyage-vitres-campus-vub/',
    nl: '/nl/referenties/ramen-reinigen-campus-vub/',
    en: '/en/case-studies/vub-campus-window-cleaning/',
  },
  wiltchers: {
    fr: '/realisations/nettoyage-facade-hotel-wiltchers-avenue-louise/',
    nl: '/nl/referenties/gevelreiniging-hotel-wiltchers-louizalaan/',
    en: '/en/case-studies/wiltchers-hotel-facade-cleaning-avenue-louise/',
  },
  aston: {
    fr: '/realisations/nettoyage-atelier-aston-martin-zaventem/',
    nl: '/nl/referenties/werkplaatsreiniging-aston-martin-zaventem/',
    en: '/en/case-studies/aston-martin-zaventem-workshop-cleaning/',
  },
};

export interface CasePhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface CaseContent {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  label: string;
  cardSummary: string;
  image: string;
  imageAlt: string;
  facts: { label: string; value: string }[];
  sections: { title: string; paragraphs: string[]; list?: string[] }[];
  photos: CasePhoto[];
  related: ServiceKey[];
}

interface CaseUI {
  facts: string;
  photos: string;
  similarTitle: string;
  similarText: string;
  servicesLabel: string;
  moreCases: string;
  moreCasesDesc: string;
  read: string;
  allRefs: string;
  ctaTitle: string;
  ctaDesc: string;
  hubTitle: string;
  hubEyebrow: string;
  hubDesc: string;
}

export const CASE_UI: Record<Locale, CaseUI> = {
  fr: {
    facts: 'En bref',
    photos: 'Photos du chantier',
    similarTitle: 'Un site comparable à nettoyer ?',
    similarText: 'Décrivez-nous votre site : hauteur, surface, contraintes d’accès et d’horaires. Nous revenons vers vous sous 24 heures ouvrées avec un devis gratuit.',
    servicesLabel: 'Prestations concernées',
    moreCases: 'Autres réalisations',
    moreCasesDesc: 'D’autres chantiers réalisés par BCF.',
    read: 'Lire la réalisation',
    allRefs: 'Toutes nos références',
    ctaTitle: 'Un chantier à nous confier ?',
    ctaDesc: 'Décrivez-nous votre besoin, nous revenons vers vous sous 24h ouvrées.',
    hubTitle: 'Nos réalisations en détail',
    hubEyebrow: 'Réalisations',
    hubDesc: 'Trois chantiers expliqués : ce qui a été nettoyé, avec quel matériel et sous quelles contraintes.',
  },
  nl: {
    facts: 'In het kort',
    photos: 'Foto’s van de werf',
    similarTitle: 'Een vergelijkbare site te reinigen?',
    similarText: 'Beschrijf uw site: hoogte, oppervlakte, toegang en uurrooster. We komen binnen 24 werkuren bij u terug met een gratis offerte.',
    servicesLabel: 'Betrokken diensten',
    moreCases: 'Andere referenties',
    moreCasesDesc: 'Andere projecten van BCF.',
    read: 'Lees de referentie',
    allRefs: 'Al onze referenties',
    ctaTitle: 'Een project aan ons toevertrouwen?',
    ctaDesc: 'Beschrijf uw behoefte, we komen binnen 24 werkuren bij u terug.',
    hubTitle: 'Onze referenties in detail',
    hubEyebrow: 'Referenties',
    hubDesc: 'Drie projecten toegelicht: wat werd gereinigd, met welk materiaal en onder welke voorwaarden.',
  },
  en: {
    facts: 'At a glance',
    photos: 'Photos from the job',
    similarTitle: 'A similar site to clean?',
    similarText: 'Describe your site: height, surface area, access and scheduling constraints. We will get back to you within 24 business hours with a free quote.',
    servicesLabel: 'Related services',
    moreCases: 'More case studies',
    moreCasesDesc: 'Other jobs carried out by BCF.',
    read: 'Read the case study',
    allRefs: 'All our references',
    ctaTitle: 'A job to entrust to us?',
    ctaDesc: 'Tell us what you need and we will get back to you within 24 business hours.',
    hubTitle: 'Our work in detail',
    hubEyebrow: 'Case studies',
    hubDesc: 'Three jobs explained: what was cleaned, with which equipment and under what constraints.',
  },
};

const FR: Record<CaseKey, CaseContent> = {
  vub: {
    title: 'Nettoyage des vitres du campus de la VUB | Réalisation BCF',
    description:
      "BCF a nettoyé les vitres de l'ensemble du site de la VUB, à l'intérieur comme à l'extérieur : perches à eau osmosée, camion nacelle de 30 m, interventions très tôt le matin et de nuit.",
    eyebrow: 'Enseignement supérieur',
    h1: "Nettoyage des vitres de l'ensemble du site de la VUB",
    intro:
      "Pour la VUB (Vrije Universiteit Brussel), BCF a nettoyé les vitres de l'ensemble du site, à l'extérieur comme à l'intérieur. Certaines zones n'étaient accessibles que très tôt le matin, et plusieurs interventions ont dû être réalisées de nuit.",
    label: 'Campus VUB',
    cardSummary: "Vitres intérieures et extérieures de l'ensemble du site, avec accès très tôt le matin et de nuit.",
    image: '/images/vub-campus-1.jpg',
    imageAlt: "Camion nacelle BCF devant la verrière d'un bâtiment du campus de la VUB",
    facts: [
      { label: 'Client', value: 'VUB (Vrije Universiteit Brussel)' },
      { label: 'Prestation', value: "Nettoyage des vitres de l'ensemble du site, intérieur et extérieur" },
      { label: 'Matériel', value: "Perches à eau osmosée, camion nacelle de 30 m, raclette et mouilleur, échelle si nécessaire" },
      { label: 'Contraintes', value: 'Zones accessibles uniquement très tôt le matin, certaines interventions de nuit' },
    ],
    sections: [
      {
        title: 'La mission',
        paragraphs: [
          "Un campus universitaire cumule les difficultés : de grandes surfaces vitrées, des bâtiments de hauteurs très différentes et des lieux fréquentés toute la journée. BCF a pris en charge le nettoyage des vitres de l'ensemble du site, côté extérieur et côté intérieur.",
        ],
      },
      {
        title: 'Matériel et méthode',
        paragraphs: ["Nous avons choisi la technique en fonction de chaque vitrage :"],
        list: [
          "À l'extérieur, perches télescopiques à eau osmosée pour nettoyer sans traces directement depuis le sol.",
          "Pour les façades vitrées en hauteur, un camion nacelle de 30 mètres.",
          "À l'intérieur, raclette et mouilleur, avec une échelle lorsque la hauteur l'exigeait.",
        ],
      },
      {
        title: 'Les contraintes du site',
        paragraphs: [
          "Plusieurs zones n'étaient accessibles que très tôt le matin, et certaines prestations ont dû être réalisées de nuit. C'est un point que nous prenons en compte dès le devis : horaires, accès et organisation des équipes.",
        ],
      },
    ],
    photos: [
      { src: '/images/vub-campus-1.jpg', alt: "Camion nacelle BCF garé devant la verrière d'un bâtiment du campus de la VUB", caption: 'Nacelle devant une façade vitrée du campus' },
      { src: '/images/vub-campus-2.jpg', alt: "Bras de la nacelle BCF atteignant le haut de la façade vitrée d'un bâtiment de la VUB", caption: 'Nettoyage en hauteur avec le camion nacelle' },
      { src: '/images/vub-campus-3.jpg', alt: "Technicien BCF dans la nacelle en train de nettoyer une façade vitrée du campus de la VUB", caption: 'Technicien à l’œuvre dans la nacelle' },
    ],
    related: ['windows', 'osmosis'],
  },
  wiltchers: {
    title: "Nettoyage de façade de l'hôtel Wiltcher's, avenue Louise | BCF",
    description:
      "BCF a nettoyé la façade de l'hôtel Wiltcher's côté avenue Louise (élévateur ciseau, Karcher, traitement anti-moisissures) ainsi que la cour intérieure et ses vitres.",
    eyebrow: 'Hôtellerie de prestige',
    h1: "Nettoyage de la façade de l'hôtel Wiltcher's, avenue Louise",
    intro:
      "BCF est intervenu à l'hôtel Wiltcher's, en plein centre de Bruxelles : nettoyage complet de la façade donnant sur l'avenue Louise, puis nettoyage de la cour intérieure et de ses vitres.",
    label: "Hôtel Wiltcher's",
    cardSummary: "Façade avenue Louise, cour intérieure et vitres : élévateur ciseau, haute pression, traitement des moisissures.",
    image: '/images/wiltchers-nuit-camion-bcf.jpg',
    imageAlt: "Entrée de l'hôtel Wiltcher's de nuit avec le camion élévateur BCF devant la façade",
    facts: [
      { label: 'Client', value: "Hôtel Wiltcher's, avenue Louise, Bruxelles" },
      { label: 'Prestation', value: "Nettoyage complet de la façade côté avenue Louise, de la cour intérieure et de ses vitres" },
      { label: 'Matériel', value: "Élévateur ciseau, Karcher, produits spécifiques anti-moisissures, échafaudage, eau osmosée et perches" },
    ],
    sections: [
      {
        title: 'La mission',
        paragraphs: [
          "Pour un établissement haut de gamme, la façade est la première image de l'hôtel. BCF a réalisé le nettoyage complet de la façade côté avenue Louise, puis une seconde intervention dans la cour intérieure, vitres comprises.",
        ],
      },
      {
        title: 'Matériel et méthode',
        paragraphs: ["Chaque zone a demandé une approche différente :"],
        list: [
          "Façade avenue Louise : élévateur ciseau et nettoyage haute pression au Karcher, avec des produits spécifiques pour traiter les moisissures.",
          "Cour intérieure : échafaudage pour accéder aux surfaces, et eau osmosée appliquée avec des perches.",
          "Vitres de la cour intérieure : nettoyées à l'eau osmosée avec perches, sans traces.",
        ],
      },
      {
        title: "Ce que cette intervention montre",
        paragraphs: [
          "Une façade urbaine, en plein centre-ville, impose de choisir un matériel adapté à la configuration du lieu : accès, hauteur, voisinage et exigences d'un établissement haut de gamme. C'est exactement ce que nous préparons avant chaque chantier.",
        ],
      },
    ],
    photos: [
      { src: '/images/wiltchers-nuit-camion-bcf.jpg', alt: "Hôtel Wiltcher's de nuit, avec le camion élévateur BCF stationné devant l'entrée", caption: "L'entrée de l'hôtel Wiltcher's et le camion BCF" },
      { src: '/images/wiltchers-facade-nuit-entree.jpg', alt: "Façade de l'hôtel Wiltcher's éclairée de nuit, nacelle BCF déployée devant l'entrée", caption: 'Intervention en soirée devant la façade' },
    ],
    related: ['windows', 'floors'],
  },
  aston: {
    title: "Nettoyage de l'atelier Aston Martin Zaventem | Réalisation BCF",
    description:
      "BCF a réalisé le nettoyage complet de l'atelier Aston Martin à Zaventem : sols à la monobrosse puis à l'autolaveuse, ponts élévateurs, mobilier.",
    eyebrow: 'Automobile',
    h1: "Nettoyage complet de l'atelier Aston Martin à Zaventem",
    intro:
      "BCF a réalisé le nettoyage complet de l'atelier Aston Martin à Zaventem : sols, ponts de voiture, mobilier et équipements, dans un environnement où la propreté fait partie de l'image de la marque.",
    label: 'Aston Martin Zaventem',
    cardSummary: "Atelier complet : sols à la monobrosse puis à l'autolaveuse, ponts, mobilier.",
    image: '/images/aston-martin-zaventem.jpg',
    imageAlt: "Grand espace d'atelier Aston Martin à Zaventem avec voitures et sol nettoyé",
    facts: [
      { label: 'Client', value: 'Aston Martin Zaventem' },
      { label: 'Prestation', value: "Nettoyage complet de l'atelier : sols, ponts de voiture, mobilier" },
      { label: 'Matériel', value: 'Monobrosse puis autolaveuse grande surface' },
    ],
    sections: [
      {
        title: 'La mission',
        paragraphs: [
          "Dans un atelier automobile haut de gamme, tout se voit : le sol, les ponts, le mobilier. BCF a pris en charge le nettoyage complet du lieu, pour le remettre en état.",
        ],
      },
      {
        title: 'Matériel et méthode',
        paragraphs: ["Le nettoyage s'est fait en plusieurs étapes :"],
        list: [
          "Sols : passage à la monobrosse pour décoller les salissures incrustées, puis passage à l'autolaveuse pour rincer et aspirer.",
          "Ponts de voiture : nettoyés.",
          "Mobilier et équipements de l'atelier : nettoyés dans la foulée.",
        ],
      },
      {
        title: "Pourquoi cette méthode",
        paragraphs: [
          "La monobrosse agit en profondeur sur le sol, l'autolaveuse finalise en laissant une surface propre et rapidement sèche. Le même enchaînement s'applique aux entrepôts, halls industriels et garages.",
        ],
      },
    ],
    photos: [
      { src: '/images/aston-martin-zaventem.jpg', alt: "Sol de l'espace Aston Martin à Zaventem avec plusieurs véhicules alignés", caption: "L'atelier Aston Martin à Zaventem" },
      { src: '/images/aston-martin-zaventem-4.jpg', alt: "Sol de l'atelier Aston Martin en cours de lavage, avec mousse et traces de machine", caption: "Sol en cours de lavage" },
      { src: '/images/aston-martin-zaventem-5.jpg', alt: "Sol de l'atelier Aston Martin après passage de la machine, brillant et humide", caption: 'Après le passage de la machine' },
    ],
    related: ['floors', 'buildings'],
  },
};

const NL: Record<CaseKey, CaseContent> = {
  vub: {
    title: 'Ramen reinigen op de VUB-campus | Referentie BCF',
    description:
      'BCF reinigde de ramen van de volledige VUB-site, binnen en buiten: osmosewaterstangen, hoogwerker van 30 m, interventies zeer vroeg in de ochtend en ’s nachts.',
    eyebrow: 'Hoger onderwijs',
    h1: 'Ramen reinigen op de volledige VUB-site',
    intro:
      'Voor de VUB (Vrije Universiteit Brussel) reinigde BCF de ramen van de volledige site, zowel buiten als binnen. Sommige zones waren enkel zeer vroeg in de ochtend toegankelijk en meerdere interventies moesten ’s nachts gebeuren.',
    label: 'VUB-campus',
    cardSummary: 'Ramen binnen en buiten op de volledige site, met toegang vroeg in de ochtend en ’s nachts.',
    image: '/images/vub-campus-1.jpg',
    imageAlt: 'BCF-hoogwerker voor de glazen overkapping van een gebouw op de VUB-campus',
    facts: [
      { label: 'Klant', value: 'VUB (Vrije Universiteit Brussel)' },
      { label: 'Dienst', value: 'Ramen reinigen op de volledige site, binnen en buiten' },
      { label: 'Materiaal', value: 'Osmosewaterstangen, hoogwerker van 30 m, trekker en inwasser, ladder indien nodig' },
      { label: 'Voorwaarden', value: 'Zones enkel zeer vroeg in de ochtend toegankelijk, sommige interventies ’s nachts' },
    ],
    sections: [
      {
        title: 'De opdracht',
        paragraphs: [
          'Een universiteitscampus heeft veel uitdagingen: grote glasoppervlakken, gebouwen van zeer verschillende hoogte en plaatsen die de hele dag gebruikt worden. BCF nam de reiniging van de ramen van de volledige site op zich, aan de buiten- en binnenkant.',
        ],
      },
      {
        title: 'Materiaal en methode',
        paragraphs: ['We kozen de techniek per beglazing:'],
        list: [
          'Buiten: telescopische stangen met osmosewater om streeploos te reinigen vanaf de grond.',
          'Voor glazen gevels op hoogte: een hoogwerkervrachtwagen van 30 meter.',
          'Binnen: trekker en inwasser, met een ladder wanneer de hoogte dat vereiste.',
        ],
      },
      {
        title: 'De voorwaarden op de site',
        paragraphs: [
          'Verschillende zones waren enkel zeer vroeg in de ochtend toegankelijk en bepaalde prestaties moesten ’s nachts gebeuren. Daar houden we al in de offerte rekening mee: uren, toegang en organisatie van de ploegen.',
        ],
      },
    ],
    photos: [
      { src: '/images/vub-campus-1.jpg', alt: 'BCF-hoogwerker geparkeerd voor de glazen overkapping van een VUB-gebouw', caption: 'Hoogwerker voor een glazen gevel van de campus' },
      { src: '/images/vub-campus-2.jpg', alt: 'Arm van de BCF-hoogwerker tot bovenaan de glazen gevel van een VUB-gebouw', caption: 'Reiniging op hoogte met de hoogwerker' },
      { src: '/images/vub-campus-3.jpg', alt: 'BCF-technicus in de korf bij het reinigen van een glazen gevel op de VUB-campus', caption: 'Technicus aan het werk in de korf' },
    ],
    related: ['windows', 'osmosis'],
  },
  wiltchers: {
    title: 'Gevelreiniging hotel Wiltcher’s, Louizalaan | BCF',
    description:
      'BCF reinigde de gevel van hotel Wiltcher’s aan de Louizalaan (schaarlift, Karcher, behandeling tegen schimmel) en ook de binnenkoer met zijn ramen.',
    eyebrow: 'Prestigieuze hotellerie',
    h1: 'Gevelreiniging van hotel Wiltcher’s aan de Louizalaan',
    intro:
      'BCF werkte voor hotel Wiltcher’s in het centrum van Brussel: volledige reiniging van de gevel aan de Louizalaan, daarna de binnenkoer en de ramen ervan.',
    label: 'Hotel Wiltcher’s',
    cardSummary: 'Gevel aan de Louizalaan, binnenkoer en ramen: schaarlift, hogedruk, behandeling tegen schimmel.',
    image: '/images/wiltchers-nuit-camion-bcf.jpg',
    imageAlt: 'Ingang van hotel Wiltcher’s ’s nachts met de BCF-hoogwerkervrachtwagen ervoor',
    facts: [
      { label: 'Klant', value: 'Hotel Wiltcher’s, Louizalaan, Brussel' },
      { label: 'Dienst', value: 'Volledige reiniging van de gevel aan de Louizalaan, de binnenkoer en de ramen ervan' },
      { label: 'Materiaal', value: 'Schaarlift, Karcher, specifieke producten tegen schimmel, steiger, osmosewater en stangen' },
    ],
    sections: [
      {
        title: 'De opdracht',
        paragraphs: [
          'Voor een exclusief hotel is de gevel het eerste visitekaartje. BCF reinigde de volledige gevel aan de Louizalaan en voerde daarna een tweede interventie uit in de binnenkoer, inclusief de ramen.',
        ],
      },
      {
        title: 'Materiaal en methode',
        paragraphs: ['Elke zone vroeg een andere aanpak:'],
        list: [
          'Gevel Louizalaan: schaarlift en hogedrukreiniging met de Karcher, met specifieke producten tegen schimmel.',
          'Binnenkoer: steiger om de oppervlakken te bereiken en osmosewater aangebracht met stangen.',
          'Ramen van de binnenkoer: gereinigd met osmosewater en stangen, streeploos.',
        ],
      },
      {
        title: 'Wat deze interventie toont',
        paragraphs: [
          'Een stadsgevel in het centrum vraagt materiaal dat past bij de situatie: toegang, hoogte, buren en de eisen van een exclusief hotel. Dat bereiden we vóór elke werf voor.',
        ],
      },
    ],
    photos: [
      { src: '/images/wiltchers-nuit-camion-bcf.jpg', alt: 'Hotel Wiltcher’s ’s nachts met de BCF-hoogwerkervrachtwagen voor de ingang', caption: 'De ingang van hotel Wiltcher’s en de BCF-wagen' },
      { src: '/images/wiltchers-facade-nuit-entree.jpg', alt: 'Verlichte gevel van hotel Wiltcher’s ’s nachts met de BCF-hoogwerker voor de ingang', caption: 'Interventie ’s avonds voor de gevel' },
    ],
    related: ['windows', 'floors'],
  },
  aston: {
    title: 'Werkplaatsreiniging Aston Martin Zaventem | Referentie BCF',
    description:
      'BCF voerde de volledige reiniging van de Aston Martin-werkplaats in Zaventem uit: vloeren met eenschijfsmachine en schrobzuigmachine, autoliften, meubilair.',
    eyebrow: 'Automotive',
    h1: 'Volledige reiniging van de Aston Martin-werkplaats in Zaventem',
    intro:
      'BCF voerde de volledige reiniging van de Aston Martin-werkplaats in Zaventem uit: vloeren, autoliften, meubilair en uitrusting, in een omgeving waar netheid deel uitmaakt van het merkimago.',
    label: 'Aston Martin Zaventem',
    cardSummary: 'Volledige werkplaats: vloeren met eenschijfsmachine en schrobzuigmachine, liften, meubilair.',
    image: '/images/aston-martin-zaventem.jpg',
    imageAlt: 'Grote Aston Martin-werkplaats in Zaventem met wagens en gereinigde vloer',
    facts: [
      { label: 'Klant', value: 'Aston Martin Zaventem' },
      { label: 'Dienst', value: 'Volledige reiniging van de werkplaats: vloeren, autoliften, meubilair' },
      { label: 'Materiaal', value: 'Eenschijfsmachine, daarna grote schrobzuigmachine' },
    ],
    sections: [
      {
        title: 'De opdracht',
        paragraphs: [
          'In een exclusieve autowerkplaats valt alles op: de vloer, de liften, het meubilair. BCF nam de volledige reiniging op zich om de plek weer in topstaat te brengen.',
        ],
      },
      {
        title: 'Materiaal en methode',
        paragraphs: ['De reiniging verliep in meerdere stappen:'],
        list: [
          'Vloeren: eerst een eenschijfsmachine om ingebrande vuil los te maken, daarna de schrobzuigmachine om te spoelen en op te zuigen.',
          'Autoliften: gereinigd.',
          'Meubilair en uitrusting van de werkplaats: meteen mee gereinigd.',
        ],
      },
      {
        title: 'Waarom deze methode',
        paragraphs: [
          'De eenschijfsmachine werkt diep op de vloer, de schrobzuigmachine rondt af en laat een propere, snel droge ondergrond achter. Dezelfde aanpak geldt voor magazijnen, industriehallen en garages.',
        ],
      },
    ],
    photos: [
      { src: '/images/aston-martin-zaventem.jpg', alt: 'Vloer van de Aston Martin-ruimte in Zaventem met meerdere wagens op een rij', caption: 'De Aston Martin-werkplaats in Zaventem' },
      { src: '/images/aston-martin-zaventem-4.jpg', alt: 'Vloer van de Aston Martin-werkplaats tijdens het wassen, met schuim en machinesporen', caption: 'Vloer tijdens het wassen' },
      { src: '/images/aston-martin-zaventem-5.jpg', alt: 'Vloer van de Aston Martin-werkplaats na de machine, glanzend en nat', caption: 'Na de passage van de machine' },
    ],
    related: ['floors', 'buildings'],
  },
};

const EN: Record<CaseKey, CaseContent> = {
  vub: {
    title: 'Window cleaning across the VUB campus | BCF case study',
    description:
      'BCF cleaned the windows across the entire VUB site, inside and out: pure-water poles, 30 m truck-mounted lift, work very early in the morning and at night.',
    eyebrow: 'Higher education',
    h1: 'Window cleaning across the entire VUB site',
    intro:
      'For the VUB (Vrije Universiteit Brussel), BCF cleaned the windows across the entire site, outside and inside. Some areas were only accessible very early in the morning, and several jobs had to be carried out at night.',
    label: 'VUB campus',
    cardSummary: 'Interior and exterior windows across the whole site, with very early-morning and night access.',
    image: '/images/vub-campus-1.jpg',
    imageAlt: 'BCF truck-mounted lift in front of the glass atrium of a VUB campus building',
    facts: [
      { label: 'Client', value: 'VUB (Vrije Universiteit Brussel)' },
      { label: 'Service', value: 'Window cleaning across the whole site, inside and out' },
      { label: 'Equipment', value: 'Pure-water poles, 30 m truck-mounted lift, squeegee and wetter, ladder where needed' },
      { label: 'Constraints', value: 'Areas accessible only very early in the morning, some jobs at night' },
    ],
    sections: [
      {
        title: 'The job',
        paragraphs: [
          'A university campus combines several challenges: large glazed areas, buildings of very different heights and places used all day. BCF took charge of cleaning the windows across the whole site, on the outside and the inside.',
        ],
      },
      {
        title: 'Equipment and method',
        paragraphs: ['We chose the technique for each type of glazing:'],
        list: [
          'Outside: telescopic poles with pure water to clean streak-free from the ground.',
          'For high glass facades: a 30-metre truck-mounted lift.',
          'Inside: squeegee and wetter, with a ladder where the height required it.',
        ],
      },
      {
        title: 'Site constraints',
        paragraphs: [
          'Several areas were only accessible very early in the morning, and some work had to be done at night. We take this into account from the quote onwards: hours, access and team organisation.',
        ],
      },
    ],
    photos: [
      { src: '/images/vub-campus-1.jpg', alt: 'BCF truck-mounted lift parked in front of the glass atrium of a VUB building', caption: 'Lift in front of a glass facade on the campus' },
      { src: '/images/vub-campus-2.jpg', alt: 'BCF lift arm reaching the top of the glass facade of a VUB building', caption: 'High-level cleaning with the truck-mounted lift' },
      { src: '/images/vub-campus-3.jpg', alt: 'BCF technician in the basket cleaning a glass facade on the VUB campus', caption: 'Technician at work in the basket' },
    ],
    related: ['windows', 'osmosis'],
  },
  wiltchers: {
    title: "Hotel Wiltcher's facade cleaning, Avenue Louise | BCF",
    description:
      "BCF cleaned the facade of Hotel Wiltcher's on Avenue Louise (scissor lift, Karcher, mould treatment) as well as the inner courtyard and its windows.",
    eyebrow: 'Prestige hospitality',
    h1: "Facade cleaning at Hotel Wiltcher's, Avenue Louise",
    intro:
      "BCF worked at Hotel Wiltcher's in the heart of Brussels: a complete clean of the facade facing Avenue Louise, followed by the inner courtyard and its windows.",
    label: "Hotel Wiltcher's",
    cardSummary: 'Avenue Louise facade, inner courtyard and windows: scissor lift, high pressure, mould treatment.',
    image: '/images/wiltchers-nuit-camion-bcf.jpg',
    imageAlt: "Entrance of Hotel Wiltcher's at night with the BCF lift truck parked in front",
    facts: [
      { label: 'Client', value: "Hotel Wiltcher's, Avenue Louise, Brussels" },
      { label: 'Service', value: 'Complete cleaning of the Avenue Louise facade, the inner courtyard and its windows' },
      { label: 'Equipment', value: 'Scissor lift, Karcher, specific mould-treatment products, scaffolding, pure water and poles' },
    ],
    sections: [
      {
        title: 'The job',
        paragraphs: [
          "For a high-end hotel, the facade is its first impression. BCF carried out a complete clean of the facade facing Avenue Louise, then a second job in the inner courtyard, windows included.",
        ],
      },
      {
        title: 'Equipment and method',
        paragraphs: ['Each area needed a different approach:'],
        list: [
          'Avenue Louise facade: scissor lift and Karcher high-pressure cleaning, with specific products to treat mould.',
          'Inner courtyard: scaffolding to reach the surfaces, and pure water applied with poles.',
          'Courtyard windows: cleaned with pure water and poles, streak-free.',
        ],
      },
      {
        title: 'What this job shows',
        paragraphs: [
          'A city-centre facade calls for equipment suited to the location: access, height, neighbours and the demands of a high-end hotel. That is exactly what we plan before every job.',
        ],
      },
    ],
    photos: [
      { src: '/images/wiltchers-nuit-camion-bcf.jpg', alt: "Hotel Wiltcher's at night with the BCF lift truck parked in front of the entrance", caption: "The entrance of Hotel Wiltcher's and the BCF truck" },
      { src: '/images/wiltchers-facade-nuit-entree.jpg', alt: "Illuminated facade of Hotel Wiltcher's at night with the BCF lift deployed in front of the entrance", caption: 'Evening work in front of the facade' },
    ],
    related: ['windows', 'floors'],
  },
  aston: {
    title: 'Aston Martin Zaventem workshop cleaning | BCF case study',
    description:
      'BCF carried out the complete cleaning of the Aston Martin workshop in Zaventem: floors with single-disc machine then scrubber-dryer, car lifts, furniture.',
    eyebrow: 'Automotive',
    h1: 'Complete cleaning of the Aston Martin workshop in Zaventem',
    intro:
      "BCF carried out the complete cleaning of the Aston Martin workshop in Zaventem: floors, car lifts, furniture and equipment, in an environment where cleanliness is part of the brand's image.",
    label: 'Aston Martin Zaventem',
    cardSummary: 'Complete workshop: floors with single-disc machine then scrubber-dryer, lifts, furniture.',
    image: '/images/aston-martin-zaventem.jpg',
    imageAlt: 'Large Aston Martin workshop space in Zaventem with cars and a cleaned floor',
    facts: [
      { label: 'Client', value: 'Aston Martin Zaventem' },
      { label: 'Service', value: 'Complete workshop cleaning: floors, car lifts, furniture' },
      { label: 'Equipment', value: 'Single-disc machine, then large-area scrubber-dryer' },
    ],
    sections: [
      {
        title: 'The job',
        paragraphs: [
          'In a high-end car workshop, everything shows: the floor, the lifts, the furniture. BCF took charge of a complete clean to bring the place back to its best.',
        ],
      },
      {
        title: 'Equipment and method',
        paragraphs: ['The cleaning was done in several stages:'],
        list: [
          'Floors: a single-disc machine first to lift ingrained dirt, then the scrubber-dryer to rinse and pick up.',
          'Car lifts: cleaned.',
          "Workshop furniture and equipment: cleaned in the same visit.",
        ],
      },
      {
        title: 'Why this method',
        paragraphs: [
          'The single-disc machine works deep into the floor, and the scrubber-dryer finishes by leaving a clean, quickly dry surface. The same sequence applies to warehouses, industrial halls and garages.',
        ],
      },
    ],
    photos: [
      { src: '/images/aston-martin-zaventem.jpg', alt: 'Floor of the Aston Martin space in Zaventem with several cars lined up', caption: 'The Aston Martin workshop in Zaventem' },
      { src: '/images/aston-martin-zaventem-4.jpg', alt: 'Aston Martin workshop floor being washed, with foam and machine marks', caption: 'Floor during washing' },
      { src: '/images/aston-martin-zaventem-5.jpg', alt: 'Aston Martin workshop floor after the machine, glossy and wet', caption: 'After the machine has passed' },
    ],
    related: ['floors', 'buildings'],
  },
};

export const CASES: Record<Locale, Record<CaseKey, CaseContent>> = { fr: FR, nl: NL, en: EN };
