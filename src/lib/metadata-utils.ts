import { SITE_CONFIG } from '@/data/site';
import { PageMetaConfig } from '@/types';
import type { Metadata } from 'next';

// Shared social preview image (an existing homepage asset). Only emitted when NEXT_PUBLIC_SITE_URL
// is configured, because Open Graph images need an absolute URL and we never invent a domain.
const SOCIAL_IMAGE = {
  path: '/images/home/living-room-hero.jpg',
  width: 1344,
  height: 768,
  alt: 'Bright, modern UK living room with a wall-mounted TV above a wooden media unit'
};

export function constructPageMetadata(config: PageMetaConfig): Metadata {
  const baseUrl = SITE_CONFIG.siteUrl ? SITE_CONFIG.siteUrl.replace(/\/$/, '') : '';
  const canonicalUrl = baseUrl ? `${baseUrl}${config.path}` : config.path;
  const socialImages = baseUrl
    ? [{ url: `${baseUrl}${SOCIAL_IMAGE.path}`, width: SOCIAL_IMAGE.width, height: SOCIAL_IMAGE.height, alt: SOCIAL_IMAGE.alt }]
    : undefined;

  return {
    title: config.title,
    description: config.description,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      // Open Graph expects language_TERRITORY (en_GB), not the BCP 47 form used for <html lang>.
      locale: SITE_CONFIG.locale.replace('-', '_'),
      type: 'website',
      images: socialImages
    },
    twitter: {
      card: socialImages ? 'summary_large_image' : 'summary',
      title: config.title,
      description: config.description,
      images: socialImages?.map((image) => image.url)
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  };
}
