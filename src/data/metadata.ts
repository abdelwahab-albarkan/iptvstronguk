import { PageMetaConfig } from '@/types';

export const PAGE_METADATA_CONFIG: Record<string, PageMetaConfig> = {
  home: {
    title: 'IPTV Strong UK | #1 UK & Worldwide 4K/8K Streaming Service',
    description: 'IPTV Strong UK delivers premium 4K Ultra HD streaming with 20,000+ live UK and global channels, all major live sports, and verified USD pricing for 1 to 4 connections.',
    path: '/',
    h1: 'UK & Global IPTV Streaming Service with Verified Pricing & 24/7 Setup Support',
    breadcrumbs: []
  },
  buyersGuide: {
    title: "IPTV Buyer's Guide UK: How to Evaluate Streaming Services",
    description: 'A practical UK guide to judging an IPTV service: pricing transparency, device compatibility, EPG, support, legal questions and red flags. No rankings.',
    path: '/iptv-buyers-guide-uk/',
    h1: "UK IPTV Buyer's Guide: How to Evaluate Streaming Providers",
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: "Buyer's Guide", path: '/iptv-buyers-guide-uk/' }
    ]
  },
  subscription: {
    title: 'IPTV Subscription UK | 4K Plans & Pricing | IPTV Strong UK',
    description: 'Explore IPTV Strong UK subscription plans for 3, 6, and 12 months with 1 to 4 connections. All live sports, 4K streams, and 5-minute WhatsApp setup included.',
    path: '/iptv-subscription-uk/',
    h1: 'IPTV Subscription UK & Global Plans',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Subscription', path: '/iptv-subscription-uk/' }
    ]
  },
  firestick: {
    title: 'IPTV for Firestick UK: Setup Guide & Compatible Apps | IPTV Strong UK',
    description: 'Step-by-step guide to setting up an IPTV player on an Amazon Fire TV Stick in the UK: preparing the device, entering login details, EPG and fixes.',
    path: '/iptv-firestick-uk/',
    h1: 'How to Set Up IPTV on an Amazon Fire TV Stick in the UK',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Firestick Guide', path: '/iptv-firestick-uk/' }
    ]
  },
  smartTv: {
    title: 'IPTV Smart TV UK: Samsung & LG Setup Guide | IPTV Strong UK',
    description: 'How to set up an IPTV player on Samsung (Tizen) and LG (webOS) Smart TVs in the UK, including MAC-based playlist upload, app licences and common fixes.',
    path: '/iptv-smart-tv-uk/',
    h1: 'How to Set Up IPTV on Samsung & LG Smart TVs',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Smart TV Guide', path: '/iptv-smart-tv-uk/' }
    ]
  },
  setup: {
    title: 'IPTV Setup UK: M3U, Xtream Codes & EPG Configuration Guide',
    description: 'What M3U, Xtream Codes and EPG mean, which details each one needs, and how to fix the most common IPTV setup errors on any compatible player app.',
    path: '/iptv-setup-uk/',
    h1: 'IPTV Setup Explained: M3U, Xtream Codes & EPG',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'General Setup', path: '/iptv-setup-uk/' }
    ]
  },
  legal: {
    title: 'Is IPTV Legal in the UK? Copyright, TV Licensing & the Law',
    description: 'IPTV technology is lawful; what matters is whether the content is licensed. A factual overview of UK copyright law, TV Licensing and official guidance.',
    path: '/is-iptv-legal-uk/',
    h1: 'Is IPTV Legal in the UK? A Clear, Factual Guide to Laws and Licensing',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Is IPTV Legal?', path: '/is-iptv-legal-uk/' }
    ]
  },
  privacy: {
    title: 'Privacy Policy | IPTV Strong UK',
    description: 'Read the IPTV Strong UK Privacy Policy covering website data, cookies, communications, enquiries and user privacy.',
    path: '/privacy-policy/',
    h1: 'Privacy Policy',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Privacy Policy', path: '/privacy-policy/' }
    ]
  },
  contact: {
    title: 'Contact Us | 24/7 UK WhatsApp & Email Support | IPTV Strong UK',
    description: 'Get in touch with IPTV Strong UK technical support for instant subscription activation, playlist configuration, Firestick or Smart TV setup help.',
    path: '/contact/',
    h1: 'Contact IPTV Strong UK Support',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact Us', path: '/contact/' }
    ]
  },
  terms: {
    title: 'Terms of Service & Refund Policy | IPTV Strong UK',
    description: 'Read our Terms of Service, 7-day money-back guarantee policy, streaming guidelines and acceptable use conditions.',
    path: '/terms/',
    h1: 'Terms of Service & Satisfaction Guarantee',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Terms of Service', path: '/terms/' }
    ]
  },
  order: {
    title: 'Complete Your Order | IPTV Strong UK',
    description: 'Choose your IPTV Strong UK plan, connection options and preferred payment method, then send your order via WhatsApp.',
    path: '/order/',
    h1: 'Complete Your Order',
    breadcrumbs: []
  }
};
