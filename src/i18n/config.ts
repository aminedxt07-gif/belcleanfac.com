export const LOCALES = ['fr', 'nl', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

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
    contact: 'Contact',
  },
  nl: {
    home: 'Home',
    services: 'Diensten',
    sectors: 'Sectoren & referenties',
    about: 'Over ons',
    contact: 'Contact',
  },
  en: {
    home: 'Home',
    services: 'Services',
    sectors: 'Sectors & references',
    about: 'About',
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

export const UI = {
  fr: {
    tagline: 'Spécialiste du nettoyage professionnel pour entreprises',
    ctaQuote: 'Demander un devis',
    ctaCall: 'Nous appeler',
    phone1: '+32 484 51 94 99',
    phone2: '+32 472 54 18 04',
    email: 'info@belcleanfac.be',
    address: "Kasteelstraat 16A, 1840 Londerzeel",
    coverage: 'Toute la Belgique',
    footerAbout:
      "Belgium Cleaning Facilities (BCF) est une société de nettoyage professionnel active dans toute la Belgique depuis 1998, spécialisée dans le nettoyage industriel, tertiaire et de façades pour les entreprises.",
    footerRights: 'Tous droits réservés.',
    footerLegal: 'Site réservé aux professionnels — BCF ne traite pas les demandes de particuliers.',
    langSwitchLabel: 'Langue',
  },
  nl: {
    tagline: 'Specialist in professionele reiniging voor bedrijven',
    ctaQuote: 'Offerte aanvragen',
    ctaCall: 'Bel ons',
    phone1: '+32 484 51 94 99',
    phone2: '+32 472 54 18 04',
    email: 'info@belcleanfac.be',
    address: 'Kasteelstraat 16A, 1840 Londerzeel',
    coverage: 'Heel België',
    footerAbout:
      'Belgium Cleaning Facilities (BCF) is een professioneel schoonmaakbedrijf dat sinds 1998 actief is in heel België, gespecialiseerd in industriële reiniging, tertiaire reiniging en gevelreiniging voor bedrijven.',
    footerRights: 'Alle rechten voorbehouden.',
    footerLegal: 'Deze site is uitsluitend bestemd voor professionals — BCF behandelt geen aanvragen van particulieren.',
    langSwitchLabel: 'Taal',
  },
  en: {
    tagline: 'Professional cleaning specialist for businesses',
    ctaQuote: 'Request a quote',
    ctaCall: 'Call us',
    phone1: '+32 484 51 94 99',
    phone2: '+32 472 54 18 04',
    email: 'info@belcleanfac.be',
    address: 'Kasteelstraat 16A, 1840 Londerzeel, Belgium',
    coverage: 'All of Belgium',
    footerAbout:
      'Belgium Cleaning Facilities (BCF) is a professional cleaning company active across Belgium since 1998, specialised in industrial, commercial and facade cleaning for businesses.',
    footerRights: 'All rights reserved.',
    footerLegal: 'This site is for businesses only — BCF does not handle requests from private individuals.',
    langSwitchLabel: 'Language',
  },
} as const;
