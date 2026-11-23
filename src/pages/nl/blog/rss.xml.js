import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { PATHS, BLOG } from '../../../i18n/config';

export async function GET(context) {
  const locale = 'nl';
  const posts = (await getCollection('blog', (p) => p.data.locale === locale && !p.data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Blog BCF — Belgium Cleaning Facilities',
    description: BLOG[locale].description,
    site: context.site ?? 'https://belcleanfac.be',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `${PATHS.blog[locale]}${post.data.slug}/`,
    })),
    customData: `<language>nl-be</language>`,
  });
}
