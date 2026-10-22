import { PricingPlan } from '@/types';

// High-performance features included with every plan
const SHARED_PLAN_FEATURES = [
  '20,000+ Live UK & International 4K/FHD Channels',
  '60,000+ On-Demand Movies & TV Series (VOD)',
  'Complete UK & Global Live Sports Coverage (Football, Racing, Tennis & PPV)',
  'Anti-Freeze™ 9.3 Technology for Buffer-Free Streaming',
  '7-Day Catch-up & Electronic Programme Guide (EPG)',
  'Fast Setup on Firestick, Samsung/LG Smart TV, Android & Apple TV',
  'Instant 5-Minute Credentials Delivery via WhatsApp',
  '24/7 Dedicated Technical Support via WhatsApp & Email'
];

export const CONFIRMED_PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-3m',
    slug: '3-months',
    duration: '3 Months',
    durationMonths: 3,
    price: 39.99,
    currency: 'USD',
    calculatedMonthlyApprox: '$13.33/month',
    accountTiers: [
      { accounts: 1, price: 39.99, priceFormatted: '$39.99', monthlyEquiv: '$13.33/mo', badge: 'Solo Stream' },
      { accounts: 2, price: 59.99, priceFormatted: '$59.99', monthlyEquiv: '$20.00/mo', badge: 'Duo Stream' },
      { accounts: 3, price: 79.99, priceFormatted: '$79.99', monthlyEquiv: '$26.66/mo', badge: 'Family Pack' },
      { accounts: 4, price: 99.99, priceFormatted: '$99.99', monthlyEquiv: '$33.33/mo', badge: 'Multi-Room' }
    ],
    features: [
      'Active access for 3 full months',
      ...SHARED_PLAN_FEATURES
    ]
  },
  {
    id: 'plan-6m',
    slug: '6-months',
    duration: '6 Months',
    durationMonths: 6,
    price: 56.99,
    currency: 'USD',
    calculatedMonthlyApprox: '$9.50/month',
    accountTiers: [
      { accounts: 1, price: 56.99, priceFormatted: '$56.99', monthlyEquiv: '$9.50/mo', badge: 'Solo Stream' },
      { accounts: 2, price: 84.99, priceFormatted: '$84.99', monthlyEquiv: '$14.16/mo', badge: 'Duo Stream' },
      { accounts: 3, price: 109.99, priceFormatted: '$109.99', monthlyEquiv: '$18.33/mo', badge: 'Family Pack' },
      { accounts: 4, price: 134.99, priceFormatted: '$134.99', monthlyEquiv: '$22.50/mo', badge: 'Multi-Room' }
    ],
    features: [
      'Active access for 6 full months',
      ...SHARED_PLAN_FEATURES
    ]
  },
  {
    id: 'plan-12m',
    slug: '12-months',
    duration: '12 Months',
    durationMonths: 12,
    price: 79.99,
    currency: 'USD',
    calculatedMonthlyApprox: '$6.66/month',
    highlightBadge: 'MOST POPULAR — SAVE 40%',
    accountTiers: [
      { accounts: 1, price: 79.99, priceFormatted: '$79.99', monthlyEquiv: '$6.66/mo', badge: 'Best Seller' },
      { accounts: 2, price: 119.99, priceFormatted: '$119.99', monthlyEquiv: '$9.99/mo', badge: 'Duo VIP' },
      { accounts: 3, price: 149.99, priceFormatted: '$149.99', monthlyEquiv: '$12.50/mo', badge: 'Family VIP' },
      { accounts: 4, price: 179.99, priceFormatted: '$179.99', monthlyEquiv: '$15.00/mo', badge: 'Ultimate House' }
    ],
    features: [
      'Active access for 12 full months (Best Value)',
      'VIP Priority Server Routing',
      ...SHARED_PLAN_FEATURES
    ]
  }
];

export const PRICING_TERMS_NOTE = 'All subscription plans are priced in US dollars (USD). Choose between 1, 2, 3, or 4 simultaneous device connections. Activation credentials are provided within 5 minutes via WhatsApp with no contracts or hidden fees.';

export function findPlanBySlug(slug: string | null | undefined): PricingPlan | undefined {
  if (!slug) return undefined;
  if (slug === '1-year') return CONFIRMED_PRICING_PLANS.find(p => p.slug === '12-months');
  return CONFIRMED_PRICING_PLANS.find((plan) => plan.slug === slug);
}
