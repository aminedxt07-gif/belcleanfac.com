export const LOCALES = ['fr', 'nl', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const GA_MEASUREMENT_ID = 'G-3MY5B4KPQY';

export const COOKIE_CONSENT: Record<Locale, { message: string; accept: string; decline: string; privacyLink: string; manage: string }> = {
  fr: {
    message:
      "Nous utilisons des cookies de mesure d'audience pour comprendre comment notre site est utilisé. Vous pouvez accepter ou refuser leur utilisation.",
    accept: 'Accepter',
    decline: 'Refuser',
    privacyLink: 'En savoir plus',
    manage: 'Gérer les cookies',
  },
  nl: {
    message:
      'We gebruiken cookies om het bezoekersverkeer van onze site te meten. U kunt het gebruik ervan aanvaarden of weigeren.',
    accept: 'Aanvaarden',
    decline: 'Weigeren',
    privacyLink: 'Meer weten',
    manage: 'Cookies beheren',
  },
  en: {
    message: 'We use audience-measurement cookies to understand how our site is used. You can accept or decline their use.',
    accept: 'Accept',
    decline: 'Decline',
    privacyLink: 'Learn more',
    manage: 'Manage cookies',
  },
};

export const LOCALE_LABELS: Record<Locale, string> = {
  fr: 'FR',
  nl: 'NL',
  en: 'EN',
};

// Canonical page keys shared across languages, mapped to each locale's URL.
export const PATHS = {
  home: { fr: '/', nl: '/nl/', en: '/en/' },
  services: { fr: '/services/', nl: '/nl/diensten/', en: '/en/services/' },
  sectors: { fr: '/secteurs/', nl: '/nl/sectoren/', en: '/en/sectors/' },
  about: { fr: '/a-propos/', nl: '/nl/over-ons/', en: '/en/about/' },
  blog: { fr: '/blog/', nl: '/nl/blog/', en: '/en/blog/' },
  contact: { fr: '/contact/', nl: '/nl/contact/', en: '/en/contact/' },
  legal: { fr: '/mentions-legales/', nl: '/nl/wettelijke-vermeldingen/', en: '/en/legal-notice/' },
  privacy: { fr: '/politique-de-confidentialite/', nl: '/nl/privacybeleid/', en: '/en/privacy-policy/' },
  terms: { fr: '/conditions-generales/', nl: '/nl/algemene-voorwaarden/', en: '/en/terms-and-conditions/' },
} as const;

export type PageKey = keyof typeof PATHS;

export function path(page: PageKey, locale: Locale): string {
  return PATHS[page][locale];
}

export const NAV_LABELS: Record<Locale, Record<PageKey, string>> = {
  fr: {
    home: 'Accueil',
    services: 'Services',
    sectors: 'Secteurs & références',
    about: 'À propos',
    blog: 'Blog',
    contact: 'Contact',
  },
  nl: {
    home: 'Home',
    services: 'Diensten',
    sectors: 'Sectoren & referenties',
    about: 'Over ons',
    blog: 'Blog',
    contact: 'Contact',
  },
  en: {
    home: 'Home',
    services: 'Services',
    sectors: 'Sectors & references',
    about: 'About',
    blog: 'Blog',
    contact: 'Contact',
  },
};

export const LEGAL_LABELS: Record<Locale, { legal: string; privacy: string; terms: string }> = {
  fr: { legal: 'Mentions légales', privacy: 'Confidentialité', terms: 'CGV' },
  nl: { legal: 'Wettelijke vermeldingen', privacy: 'Privacybeleid', terms: 'Algemene voorwaarden' },
  en: { legal: 'Legal notice', privacy: 'Privacy policy', terms: 'Terms & conditions' },
};

export const COMPANY = {
  legalName: 'Belgium Cleaning Facilities SRL',
  brandName: 'Belgium Cleaning Facilities (BCF)',
  legalForm: 'Société à responsabilité limitée (SRL/BV)',
  bce: '0704.995.703',
  vat: 'BE 0704.995.703',
  address: 'Kasteelstraat 16A, 1840 Londerzeel',
  email: 'info@belcleanfac.be',
  phone1: '+32 484 51 94 99',
  phone2: '+32 472 54 18 04',
};

export const FORM = {
  fr: {
    heading: 'Demandez votre devis gratuit',
    subheading:
      "Décrivez-nous votre besoin : un membre de notre équipe commerciale vous recontacte sous 24h ouvrées avec une proposition adaptée.",
    name: 'Nom et prénom',
    company: 'Entreprise',
    email: 'Email professionnel',
    phone: 'Téléphone',
    serviceType: "Type de prestation",
    serviceOptions: [
      'Vitres & façades',
      'Sols & grandes surfaces industrielles',
      'Interventions spécialisées (sinistre, sablage, dépoussiérage)',
      'Nettoyage tertiaire / résidentiel collectif',
      'Autre / je ne sais pas encore',
    ],
    buildingType: 'Type de site',
    message: 'Votre demande',
    messagePlaceholder: 'Surface approximative, fréquence souhaitée, urgence éventuelle...',
    submit: 'Envoyer ma demande',
    sending: 'Envoi en cours...',
    success: 'Merci ! Votre demande a bien été envoyée, nous revenons vers vous rapidement.',
    error: "Une erreur est survenue. Vous pouvez aussi nous écrire directement à info@belcleanfac.be.",
    required: 'Champ obligatoire',
    b2bNotice: 'Ce formulaire est réservé aux entreprises et professionnels.',
  },
  nl: {
    heading: 'Vraag uw gratis offerte aan',
    subheading:
      'Beschrijf uw behoefte: een medewerker van ons commercieel team contacteert u binnen 24 werkuren met een aangepast voorstel.',
    name: 'Naam en voornaam',
    company: 'Bedrijf',
    email: 'Professioneel e-mailadres',
    phone: 'Telefoon',
    serviceType: 'Type dienst',
    serviceOptions: [
      'Ramen & gevels',
      'Vloeren & grote industriële oppervlakken',
      'Gespecialiseerde interventies (schade, zandstralen, stofafname)',
      'Tertiaire / collectieve residentiële reiniging',
      'Anders / nog niet zeker',
    ],
    buildingType: 'Type site',
    message: 'Uw aanvraag',
    messagePlaceholder: 'Geschatte oppervlakte, gewenste frequentie, eventuele urgentie...',
    submit: 'Aanvraag versturen',
    sending: 'Bezig met verzenden...',
    success: 'Bedankt! Uw aanvraag is verzonden, we nemen snel contact met u op.',
    error: 'Er is een fout opgetreden. U kan ons ook rechtstreeks mailen op info@belcleanfac.be.',
    required: 'Verplicht veld',
    b2bNotice: 'Dit formulier is uitsluitend bestemd voor bedrijven en professionals.',
  },
  en: {
    heading: 'Request your free quote',
    subheading:
      'Tell us what you need: a member of our team will get back to you within 24 business hours with a tailored proposal.',
    name: 'Full name',
    company: 'Company',
    email: 'Business email',
    phone: 'Phone',
    serviceType: 'Type of service',
    serviceOptions: [
      'Windows & facades',
      'Floors & large industrial surfaces',
      'Specialised interventions (disaster cleanup, sandblasting, dust removal)',
      'Commercial / collective residential cleaning',
      'Other / not sure yet',
    ],
    buildingType: 'Site type',
    message: 'Your request',
    messagePlaceholder: 'Approximate surface area, desired frequency, any urgency...',
    submit: 'Send my request',
    sending: 'Sending...',
    success: "Thank you! Your request has been sent, we'll get back to you shortly.",
    error: 'Something went wrong. You can also email us directly at info@belcleanfac.be.',
    required: 'Required field',
    b2bNotice: 'This form is for businesses and professionals only.',
  },
} as const;

export const BLOG = {
  fr: {
    eyebrow: 'Blog & conseils',
    title: "Actualités et conseils sur le nettoyage professionnel",
    description:
      "Conseils d'experts, bonnes pratiques et actualités BCF pour vous aider à entretenir vos sites professionnels : façades, sols industriels, entrepôts et bâtiments tertiaires.",
    readMore: "Lire l'article",
    backToBlog: 'Retour au blog',
    publishedOn: 'Publié le',
    updatedOn: 'Mis à jour le',
    minRead: 'min de lecture',
    empty: 'Aucun article disponible pour le moment.',
    relatedCta: 'Un projet de nettoyage professionnel ?',
    relatedCtaDescription: 'Contactez notre équipe pour obtenir un devis gratuit adapté à votre site.',
  },
  nl: {
    eyebrow: 'Blog & advies',
    title: 'Nieuws en advies over professionele reiniging',
    description:
      'Expertadvies, goede praktijken en BCF-nieuws om u te helpen bij het onderhoud van uw professionele sites: gevels, industriële vloeren, magazijnen en tertiaire gebouwen.',
    readMore: 'Artikel lezen',
    backToBlog: 'Terug naar blog',
    publishedOn: 'Gepubliceerd op',
    updatedOn: 'Bijgewerkt op',
    minRead: 'min. leestijd',
    empty: 'Momenteel geen artikels beschikbaar.',
    relatedCta: 'Een professioneel schoonmaakproject?',
    relatedCtaDescription: 'Neem contact op met ons team voor een gratis offerte op maat van uw site.',
  },
  en: {
    eyebrow: 'Blog & insights',
    title: 'News and advice on professional cleaning',
    description:
      'Expert advice, best practices and BCF news to help you maintain your business sites: facades, industrial floors, warehouses and commercial buildings.',
    readMore: 'Read the article',
    backToBlog: 'Back to blog',
    publishedOn: 'Published on',
    updatedOn: 'Updated on',
    minRead: 'min read',
    empty: 'No articles available at the moment.',
    relatedCta: 'A professional cleaning project?',
    relatedCtaDescription: 'Contact our team for a free quote tailored to your site.',
  },
} as const;

export const UI = {
  fr: {
    tagline: 'Spécialiste du nettoyage professionnel pour entreprises',
    ctaQuote: 'Demander un devis',
    ctaCall: 'Nous appeler',
    phone1: '+32 478 47 08 59',
    phone2: '+32 486 09 16 06',
    email: 'info@belcleanfac.be',
    address: "Kasteelstraat 16A, 1840 Londerzeel",
    coverage: 'Toute la Belgique',
    footerAbout:
      "Belgium Cleaning Facilities (BCF) est une société de nettoyage professionnel active dans toute la Belgique, spécialisée dans le nettoyage industriel, tertiaire et de façades pour les entreprises. Notre gérant travaille dans le métier depuis 1998.",
    footerRights: 'Tous droits réservés.',
    footerLegal: 'Site réservé aux professionnels — BCF ne traite pas les demandes de particuliers.',
    langSwitchLabel: 'Langue',
    badgeVca: 'Ouvriers VCA',
  },
  nl: {
    tagline: 'Specialist in professionele reiniging voor bedrijven',
    ctaQuote: 'Offerte aanvragen',
    ctaCall: 'Bel ons',
    phone1: '+32 478 47 08 59',
    phone2: '+32 486 09 16 06',
    email: 'info@belcleanfac.be',
    address: 'Kasteelstraat 16A, 1840 Londerzeel',
    coverage: 'Heel België',
    footerAbout:
      'Belgium Cleaning Facilities (BCF) is een professioneel schoonmaakbedrijf dat actief is in heel België, gespecialiseerd in industriële reiniging, tertiaire reiniging en gevelreiniging voor bedrijven. Onze zaakvoerder werkt sinds 1998 in het vak.',
    footerRights: 'Alle rechten voorbehouden.',
    footerLegal: 'Deze site is uitsluitend bestemd voor professionals — BCF behandelt geen aanvragen van particulieren.',
    langSwitchLabel: 'Taal',
    badgeVca: 'VCA-arbeiders',
  },
  en: {
    tagline: 'Professional cleaning specialist for businesses',
    ctaQuote: 'Request a quote',
    ctaCall: 'Call us',
    phone1: '+32 478 47 08 59',
    phone2: '+32 486 09 16 06',
    email: 'info@belcleanfac.be',
    address: 'Kasteelstraat 16A, 1840 Londerzeel, Belgium',
    coverage: 'All of Belgium',
    footerAbout:
      'Belgium Cleaning Facilities (BCF) is a professional cleaning company active across Belgium, specialised in industrial, commercial and facade cleaning for businesses. Our manager has worked in the trade since 1998.',
    footerRights: 'All rights reserved.',
    footerLegal: 'This site is for businesses only — BCF does not handle requests from private individuals.',
    langSwitchLabel: 'Language',
    badgeVca: 'VCA workers',
  },
} as const;
