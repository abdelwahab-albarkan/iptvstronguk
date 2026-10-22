import { NavItem } from '@/types';

export const MAIN_NAVIGATION: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Subscription', href: '/iptv-subscription-uk/' },
  { label: 'Buyer\'s Guide', href: '/iptv-buyers-guide-uk/' },
  { label: 'Firestick', href: '/iptv-firestick-uk/' },
  { label: 'Smart TV', href: '/iptv-smart-tv-uk/' },
  { label: 'Setup', href: '/iptv-setup-uk/' },
  { label: 'Is IPTV Legal?', href: '/is-iptv-legal-uk/' },
  { label: 'Contact Us', href: '/contact/' }
];

// Grouped menu used by the desktop dropdown and the mobile drawer.
export type NavIconName = 'home' | 'plans' | 'guide' | 'stick' | 'tv' | 'setup' | 'legal' | 'contact';

export interface MenuItem {
  label: string;
  href: string;
  icon: NavIconName;
  description?: string;
}

export const MENU_PRIMARY: MenuItem[] = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Subscription', href: '/iptv-subscription-uk/', icon: 'plans', description: 'Plans from $39.99 for 3 months' }
];

export const MENU_GUIDES: MenuItem[] = [
  { label: 'Buyer\'s Guide', href: '/iptv-buyers-guide-uk/', icon: 'guide', description: 'How to judge any IPTV service' },
  { label: 'Firestick', href: '/iptv-firestick-uk/', icon: 'stick', description: 'Set up on an Amazon Fire TV Stick' },
  { label: 'Smart TV', href: '/iptv-smart-tv-uk/', icon: 'tv', description: 'Samsung and LG Smart TV setup' },
  { label: 'Setup', href: '/iptv-setup-uk/', icon: 'setup', description: 'M3U, Xtream Codes and EPG explained' }
];

export const MENU_INFO: MenuItem[] = [
  { label: 'Is IPTV Legal?', href: '/is-iptv-legal-uk/', icon: 'legal', description: 'UK law and TV Licensing' },
  { label: 'Contact', href: '/contact/', icon: 'contact', description: '24/7 WhatsApp & Email Support' }
];

export const HEADER_CTA: NavItem = {
  label: 'View Plans',
  href: '/iptv-subscription-uk/',
  isCTA: true
};

export const FOOTER_COLUMNS = {
  services: {
    title: 'Service & Plans',
    links: [
      { label: 'Subscription Plans', href: '/iptv-subscription-uk/' },
      { label: 'IPTV Buyer\'s Guide UK', href: '/iptv-buyers-guide-uk/' },
      { label: 'UK Legality & Safety Guide', href: '/is-iptv-legal-uk/' },
      { label: '24/7 Support & Contact', href: '/contact/' }
    ]
  },
  technical: {
    title: 'Device & Setup Guides',
    links: [
      { label: 'Amazon Firestick Guide', href: '/iptv-firestick-uk/' },
      { label: 'Samsung & LG Smart TV Guide', href: '/iptv-smart-tv-uk/' },
      { label: 'Playlist & EPG Configuration', href: '/iptv-setup-uk/' }
    ]
  },
  compliance: {
    title: 'Compliance & Standards',
    links: [
      { label: 'Terms & Refund Policy', href: '/terms/' },
      { label: 'UK Broadcasting Overview', href: '/is-iptv-legal-uk/#broadcasting-law' },
      { label: 'TV Licensing & Live Stream Law', href: '/is-iptv-legal-uk/#tv-licensing' },
      { label: 'Evaluating Legitimate Providers', href: '/iptv-buyers-guide-uk/#red-flags' }
    ]
  }
};
