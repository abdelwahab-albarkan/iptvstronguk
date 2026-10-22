import { PurchaseChannelStatus } from '@/types';

export interface OrderOption {
  id: string;
  label: string;
  description?: string;
}

export const SITE_CONFIG = {
  name: 'IPTV Strong UK',
  tagline: 'Premium UK & Global IPTV Streaming Support & Subscription Service',
  description: 'IPTV Strong UK provides premium 4K & 8K streaming subscription plans in USD for 1 to 4 connections, with step-by-step setup guides for Amazon Fire TV, Smart TVs, Android, and Apple devices.',
  locale: 'en-GB',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://iptvstronguk.com',

  contact: {
    supportEmail: 'support@streamb4.com',
    whatsappNumber: '212625218443',
    whatsappFormatted: '+212 625 218 443'
  },

  purchaseChannel: {
    status: 'CONFIRMED' as PurchaseChannelStatus,
    defaultActionLabel: 'View Plans & Pricing',
    plansUrl: '/iptv-subscription-uk/#pricing-plans',
    orderPath: '/order/',
    nextStepsUrl: '/iptv-subscription-uk/#what-happens-next'
  },

  paymentMethods: [
    'PayPal',
    'Stripe',
    'Wise',
    'Western Union',
    'MoneyGram',
    'Bank Card'
  ],

  applicationOptions: [
    {
      id: 'have-app',
      label: 'I already have a player app (TiviMate, IPTV Smarters, IBO Player)'
    },
    {
      id: 'need-help',
      label: 'I need help choosing and setting up an application',
      description: 'Our technical support team assists you step-by-step on WhatsApp.'
    }
  ] as OrderOption[],

  orderNotice: {
    title: 'Instant 5-Minute Activation via WhatsApp',
    text: 'Select your preferred subscription duration and number of active connections below, then connect directly with our support team on WhatsApp to receive your M3U playlist & Xtream credentials.'
  },

  supportNotice: '24/7 dedicated support is available for credential entry, player configuration, EPG setup, and broadband optimization on all compatible devices.'
};

export function getPlanCtaHref(planSlug: string): string {
  const { status, orderPath, nextStepsUrl } = SITE_CONFIG.purchaseChannel;
  return status === 'CONFIRMED' && SITE_CONFIG.contact.whatsappNumber
    ? `${orderPath}?plan=${encodeURIComponent(planSlug)}`
    : nextStepsUrl;
}

export function getWhatsAppContactUrl(): string {
  return `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`;
}

export function buildWhatsAppOrderUrl(details: {
  plan: string;
  price: string;
  accounts?: number | string;
  application: string;
  paymentMethod: string;
}): string {
  const accountsText = details.accounts ? `${details.accounts} Account(s)` : '1 Account';
  const message = [
    `Hello ${SITE_CONFIG.name}, I would like to place an order.`,
    '',
    `Plan: ${details.plan} (${accountsText})`,
    `Price: ${details.price}`,
    `Application: ${details.application}`,
    `Payment method: ${details.paymentMethod}`,
    '',
    'Please send me the instant activation credentials and payment instructions.'
  ].join('\n');

  return `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
