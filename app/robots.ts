import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/data/site';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = (SITE_CONFIG.siteUrl || 'https://iptvstronguk.com').replace(/\/$/, '');
  const isProductionLive = process.env.NEXT_PUBLIC_ENABLE_INDEXING === 'true';

  return {
    rules: isProductionLive
      ? {
          userAgent: '*',
          allow: '/',
          disallow: ['/order/']
        }
      : {
          userAgent: '*',
          disallow: '/'
        },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}

