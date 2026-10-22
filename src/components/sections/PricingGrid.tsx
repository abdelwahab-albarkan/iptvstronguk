'use client';

import React, { useState } from 'react';
import { CONFIRMED_PRICING_PLANS, PRICING_TERMS_NOTE } from '@/data/pricing';
import { buildWhatsAppOrderUrl } from '@/data/site';
import Link from 'next/link';

interface PricingGridProps {
  id?: string;
  title?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaText?: string;
}

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2.5 6.2l2.4 2.4 4.6-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BoltIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>
);

export const PricingGrid: React.FC<PricingGridProps> = ({
  id = 'pricing-plans',
  title = 'Select Your Subscription Plan',
  subtitle = 'Transparent pricing in USD with 1 to 4 simultaneous device connections. Instant 5-minute setup via WhatsApp with no contracts or hidden fees.',
}) => {
  // Default to 12 months (Best Value)
  const [selectedDurationId, setSelectedDurationId] = useState<string>('plan-12m');

  const activePlan = CONFIRMED_PRICING_PLANS.find((p) => p.id === selectedDurationId) || CONFIRMED_PRICING_PLANS[2];

  return (
    <section id={id} className="pg-section">
      <div className="container">
        {/* Section Header */}
        <header className="pg-header">
          <span className="pg-eyebrow">
            <BoltIcon /> 4K / 8K ULTRA HD &bull; ZERO BUFFERING GUARANTEE
          </span>

          <h2 className="pg-title">{title}</h2>

          {subtitle && <p className="pg-subtitle">{subtitle}</p>}

          {/* Interactive Duration Tabs */}
          <div className="pg-tabs" role="tablist" aria-label="Subscription Duration">
            {CONFIRMED_PRICING_PLANS.map((plan) => {
              const isSelected = plan.id === selectedDurationId;
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelectedDurationId(plan.id)}
                  role="tab"
                  aria-selected={isSelected}
                  className={`pg-tab ${isSelected ? 'is-active' : ''}`}
                >
                  <span className="pg-tab-label">{plan.duration}</span>
                  {plan.highlightBadge && <span className="pg-tab-save">SAVE 40%</span>}
                </button>
              );
            })}
          </div>
        </header>

        {/* Account tiers for the active duration */}
        <div className="pg-grid">
          {activePlan.accountTiers.map((tier) => {
            const isPopular = tier.accounts === 1 && activePlan.slug === '12-months';
            const priceWhole = Math.floor(tier.price);
            const priceCents = (tier.price % 1).toFixed(2).substring(1);
            const displayPriceFormatted = `$${tier.price.toFixed(2)}`;

            const whatsappUrl = buildWhatsAppOrderUrl({
              plan: activePlan.duration,
              price: displayPriceFormatted,
              accounts: tier.accounts,
              application: 'Preferred App (TiviMate / IPTV Smarters / Smart TV)',
              paymentMethod: 'PayPal / Card / Wise / Crypto'
            });

            const features = [
              <><strong>{tier.accounts} Active Screen{tier.accounts > 1 ? 's' : ''}</strong> (Simultaneous)</>,
              <>20,000+ Live UK &amp; World Channels</>,
              <>All UK Sports (Premier League &amp; TNT 4K)</>,
              <>60,000+ 4K Movies &amp; Series (VOD)</>,
              <>Anti-Freeze™ 9.3 Buffer-Free Tech</>,
              <>7-Day Catch-up &amp; Interactive EPG</>,
              <>Instant 5-Min WhatsApp Delivery</>
            ];

            return (
              <article key={tier.accounts} className={`pg-card ${isPopular ? 'is-popular' : ''}`}>
                {isPopular && <div className="pg-ribbon">★ MOST POPULAR &bull; BEST VALUE</div>}

                <div className="pg-card-head">
                  <h3 className="pg-card-name">
                    {tier.accounts} {tier.accounts === 1 ? 'Connection' : 'Connections'}
                  </h3>
                  <span className="pg-card-badge">{tier.badge || `${tier.accounts} Screen`}</span>
                </div>

                <p className="pg-card-desc">
                  Full access for {activePlan.duration} on {tier.accounts} active device{tier.accounts > 1 ? 's' : ''} simultaneously.
                </p>

                <div className="pg-price" aria-label={`${displayPriceFormatted} for ${activePlan.duration}`}>
                  <span className="pg-price-cur">$</span>
                  <span className="pg-price-whole">{priceWhole}</span>
                  <span className="pg-price-cents">{priceCents}</span>
                </div>
                <div className="pg-price-term">for {activePlan.duration}</div>

                <span className="pg-monthly">
                  <BoltIcon /> Just <strong>{tier.monthlyEquiv}</strong>
                </span>

                <ul className="pg-features">
                  {features.map((feature, i) => (
                    <li key={i}>
                      <span className="pg-check"><CheckIcon /></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pg-actions">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="pg-btn-wa">
                    <span>Order via WhatsApp</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                  </a>
                  <Link href={`/order/?plan=${activePlan.slug}&accounts=${tier.accounts}`} className="pg-link">
                    Or configure in order form &rarr;
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Note Below Pricing */}
        <div className="pg-note">
          <strong>Activation Guarantee: </strong>
          {PRICING_TERMS_NOTE}
        </div>
      </div>
    </section>
  );
};
