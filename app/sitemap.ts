import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/data/site';
import { PAGE_METADATA_CONFIG } from '@/data/metadata';

// lastModified is intentionally omitted: stamping every URL with the build time would tell
// search engines that unchanged pages changed. Add real per-page dates here if they are tracked.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.siteUrl ? SITE_CONFIG.siteUrl.replace(/\/$/, '') : '';

  const routes: { key: keyof typeof PAGE_METADATA_CONFIG; changeFrequency: 'weekly' | 'monthly' | 'yearly'; priority: number }[] = [
    { key: 'home', changeFrequency: 'weekly', priority: 1.0 },
    { key: 'subscription', changeFrequency: 'weekly', priority: 0.9 },
    { key: 'buyersGuide', changeFrequency: 'monthly', priority: 0.8 },
    { key: 'firestick', changeFrequency: 'monthly', priority: 0.8 },
    { key: 'smartTv', changeFrequency: 'monthly', priority: 0.8 },
    { key: 'setup', changeFrequency: 'monthly', priority: 0.8 },
    { key: 'legal', changeFrequency: 'monthly', priority: 0.7 },
    { key: 'contact', changeFrequency: 'monthly', priority: 0.6 },
    { key: 'terms', changeFrequency: 'yearly', priority: 0.4 },
    { key: 'privacy', changeFrequency: 'yearly', priority: 0.4 }
  ];

  const currentDate = new Date();

  return routes.map(({ key, changeFrequency, priority }) => ({
    url: `${baseUrl}${PAGE_METADATA_CONFIG[key].path}`,
    lastModified: currentDate,
    changeFrequency,
    priority
  }));
}
