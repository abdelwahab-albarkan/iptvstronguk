import React from 'react';
import { SITE_CONFIG } from '@/data/site';
import { CONFIRMED_PRICING_PLANS } from '@/data/pricing';

interface SchemaOrgProps {
  type?: 'global' | 'subscription';
}

export const SchemaOrg: React.FC<SchemaOrgProps> = ({ type = 'global' }) => {
  const baseUrl = SITE_CONFIG.siteUrl || '';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: baseUrl || undefined,
    // Crawlable logo that works on a white background; needs an absolute URL, so only with a configured domain.
    logo: baseUrl ? `${baseUrl.replace(/\/$/, '')}/images/brand/iptvstronguk-logo.png` : undefined,
    email: SITE_CONFIG.contact.supportEmail,
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom'
    },
    knowsAbout: [
      'IPTV Technology',
      'Streaming Media Protocols',
      'Electronic Programme Guides',
      'UK Digital Broadcasting'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    inLanguage: SITE_CONFIG.locale,
    url: baseUrl || undefined
  };

  const subscriptionUrl = baseUrl
    ? `${baseUrl.replace(/\/$/, '')}/iptv-subscription-uk/`
    : undefined;

  // Prices and durations come straight from CONFIRMED_PRICING_PLANS ($39.99 / 3m, $56.99 / 6m, $79.99 / 12m).
  // No ratings or reviews are included: none exist to report.
  const productSchema = type === 'subscription' ? {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${SITE_CONFIG.name} IPTV Subscription`,
    description: 'Fixed-term IPTV subscription for UK viewers, available as 3-month, 6-month and 12-month plans. Every plan includes the same service.',
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.name
    },
    url: subscriptionUrl,
    // Absolute URLs only, so the image appears once NEXT_PUBLIC_SITE_URL is configured.
    image: baseUrl ? `${baseUrl.replace(/\/$/, '')}/images/home/living-room-hero.jpg` : undefined,
    offers: CONFIRMED_PRICING_PLANS.map((plan) => ({
      '@type': 'Offer',
      name: `${plan.duration} Plan`,
      price: plan.price.toFixed(2),
      priceCurrency: plan.currency,
      seller: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url: baseUrl || undefined
      },
      eligibleDuration: {
        '@type': 'QuantitativeValue',
        value: plan.durationMonths,
        unitCode: 'MON'
      },
      eligibleRegion: {
        '@type': 'Country',
        name: 'United Kingdom'
      },
      url: subscriptionUrl ? `${subscriptionUrl}#${plan.id}` : undefined,
      availability: 'https://schema.org/InStock'
    }))
  } : null;

  // The root layout already renders the global Organization + WebSite blocks,
  // so the subscription variant only adds the Product block.
  if (productSchema) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};
