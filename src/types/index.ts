export type PurchaseChannelStatus = 'CONFIRMED' | 'UNCONFIRMED';

export interface NavItem {
  label: string;
  href: string;
  isCTA?: boolean;
}

export interface AccountTier {
  accounts: number;
  price: number;
  priceFormatted: string;
  monthlyEquiv: string;
  badge?: string;
}

export interface PricingPlan {
  id: string;
  // URL value for the order page, e.g. /order/?plan=3-months
  slug: string;
  duration: string;
  durationMonths: number;
  price: number; // Base price for 1 account
  currency: 'USD';
  calculatedMonthlyApprox: string;
  highlightBadge?: string;
  accountTiers: AccountTier[];
  features: string[];
}

export interface LegalAuthority {
  name: string;
  acronym: string;
  role: string;
  category: 'official' | 'industry';
  officialUrl: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PageMetaConfig {
  title: string;
  description: string;
  path: string;
  h1: string;
  breadcrumbs: { name: string; path: string }[];
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
  tip?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconType?: string;
}
