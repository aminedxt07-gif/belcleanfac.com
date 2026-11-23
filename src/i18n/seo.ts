import { COMPANY, UI, PATHS, NAV_LABELS, LEGAL_LABELS, type Locale, type PageKey } from './config';

export const SITE = 'https://belcleanfac.be';

const abs = (p: string) => new URL(p, SITE).toString();

export const ID = {
  org: `${SITE}/#organization`,
  website: `${SITE}/#website`,
};

export interface FaqItem {
  q: string;
  a: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/** Organization + LocalBusiness: the single "entity" every other node points to. Emitted on every page. */
export function organizationNode() {
  return {
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
    '@id': ID.org,
    name: 'Belgium Cleaning Facilities',
    alternateName: ['BCF', COMPANY.legalName],
    legalName: COMPANY.legalName,
    url: SITE + '/',
    logo: {
      '@type': 'ImageObject',
      url: abs('/images/logo-bcf.png'),
    },
    image: abs('/images/bcf-camion-nacelle-facade-brique.jpg'),
    description:
      'Belgium Cleaning Facilities (BCF) is a professional cleaning company for businesses, active across Belgium: windows and facades at height, industrial floors, osmosis-water cleaning and building maintenance. VCA-certified workers.',
    vatID: COMPANY.vat,
    taxID: COMPANY.bce,
    email: COMPANY.email,
    telephone: ['+32478470859', '+32486091606'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kasteelstraat 16A',
      postalCode: '1840',
      addressLocality: 'Londerzeel',
      addressCountry: 'BE',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 51.0079, longitude: 4.2989 },
    areaServed: { '@type': 'Country', name: 'Belgium' },
    knowsLanguage: ['fr', 'nl', 'en'],
    knowsAbout: [
      'Commercial window cleaning',
      'Facade cleaning',
      'Industrial floor cleaning',
      'Reverse-osmosis (pure water) window cleaning',
      'Warehouse cleaning',
      'Post-construction cleaning',
      'Graffiti removal',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: '+32478470859',
        email: COMPANY.email,
        areaServed: 'BE',
        availableLanguage: ['French', 'Dutch', 'English'],
      },
    ],
    priceRange: 'On quote',
  };
}

export function websiteNode(locale: Locale) {
  return {
    '@type': 'WebSite',
    '@id': ID.website,
    url: SITE + '/',
    name: 'Belgium Cleaning Facilities',
    inLanguage: ['fr-BE', 'nl-BE', 'en'],
    publisher: { '@id': ID.org },
  };
}

export function webPageNode(opts: {
  locale: Locale;
  url: string;
  title: string;
  description: string;
  image: string;
  type?: string;
  hasBreadcrumb: boolean;
}) {
  const { locale, url, title, description, image, type = 'WebPage', hasBreadcrumb } = opts;
  return {
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: locale === 'fr' ? 'fr-BE' : locale === 'nl' ? 'nl-BE' : 'en',
    isPartOf: { '@id': ID.website },
    about: { '@id': ID.org },
    primaryImageOfPage: { '@type': 'ImageObject', url: abs(image) },
    ...(hasBreadcrumb ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
  };
}

export function breadcrumbNode(url: string, items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function faqNode(url: string, items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export interface ServiceSpec {
  name: string;
  description: string;
  serviceType: string;
  anchor?: string;
}

export function serviceNodes(locale: Locale, pageUrl: string, specs: ServiceSpec[]) {
  return specs.map((s) => ({
    '@type': 'Service',
    '@id': `${pageUrl}${s.anchor ? '#' + s.anchor : ''}-service`,
    name: s.name,
    description: s.description,
    serviceType: s.serviceType,
    provider: { '@id': ID.org },
    areaServed: { '@type': 'Country', name: 'Belgium' },
    audience: { '@type': 'BusinessAudience', name: 'Businesses and professionals' },
    url: s.anchor ? `${pageUrl}#${s.anchor}` : pageUrl,
  }));
}

/** Home > current page breadcrumb for static pages (blog posts build their own, with a third level). */
export function defaultBreadcrumb(locale: Locale, page: PageKey): BreadcrumbItem[] {
  if (page === 'home') return [];
  const nav = NAV_LABELS[locale] as Record<string, string>;
  const legal = LEGAL_LABELS[locale] as Record<string, string>;
  return [
    { name: nav.home, path: PATHS.home[locale] },
    { name: nav[page] ?? legal[page], path: PATHS[page][locale] },
  ];
}

export { UI };
