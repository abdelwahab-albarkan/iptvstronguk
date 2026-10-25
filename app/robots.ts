import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/data/site';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = (SITE_CONFIG.siteUrl || 'https://iptvstronguk.com').replace(/\/$/, '');
  const isDisallowed = process.env.NEXT_PUBLIC_DISABLE_INDEXING === 'true';

  return {
    rules: isDisallowed
      ? {
          userAgent: '*',
          disallow: '/'
        }
      : {
          userAgent: '*',
          allow: '/',
          disallow: ['/order/']
        },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}

