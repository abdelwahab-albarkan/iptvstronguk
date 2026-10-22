p_grid = r"src/components/sections/PricingGrid.tsx"

pricing_grid_code = """'use client';

import React, { useState } from 'react';
import { CONFIRMED_PRICING_PLANS, PRICING_TERMS_NOTE } from '@/data/pricing';
import { PricingPlan } from '@/types';
import { SITE_CONFIG, buildWhatsAppOrderUrl } from '@/data/site';
import Link from 'next/link';

interface PricingGridProps {
  id?: string;
  title?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaText?: string;
}

export const PricingGrid: React.FC<PricingGridProps> = ({
  id = 'pricing-plans',
  title = 'Select Your Subscription Plan',
  subtitle = 'Transparent pricing in USD with 1 to 4 simultaneous device connections. Instant 5-minute setup via WhatsApp with no contracts or hidden fees.',
}) => {
  // Default to 12 months (Best Value)
  const [selectedDurationId, setSelectedDurationId] = useState<string>('plan-12m');

  const activePlan = CONFIRMED_PRICING_PLANS.find((p) => p.id === selectedDurationId) || CONFIRMED_PRICING_PLANS[2];

  return (
    <section id={id} className="pricing-section-wrap" style={{ scrollMarginTop: '90px', padding: '4rem 0', background: 'var(--background-soft)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.45rem 1.1rem',
              borderRadius: '9999px',
              background: 'rgba(37, 99, 235, 0.08)',
              border: '1px solid rgba(37, 99, 235, 0.25)',
              color: '#2563eb',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}
          >
            ⚡ 4K / 8K ULTRA HD &bull; ZERO BUFFERING GUARANTEE
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 900, letterSpacing: '-0.02em', color: '#0f172a', marginBottom: '0.75rem' }}>
            {title}
          </h2>

          {subtitle && (
            <p style={{ maxWidth: '680px', margin: '0 auto', color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
              {subtitle}
            </p>
          )}

          {/* Interactive Duration Tabs */}
          <div
            className="duration-tabs-wrap"
            style={{
              display: 'inline-flex',
              background: '#e2e8f0',
              borderRadius: '9999px',
              padding: '0.35rem',
              marginTop: '2rem',
              gap: '0.4rem',
              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.06)',
              maxWidth: '100%',
              overflowX: 'auto'
            }}
            role="tablist"
            aria-label="Subscription Duration"
          >
            {CONFIRMED_PRICING_PLANS.map((plan) => {
              const isSelected = plan.id === selectedDurationId;
              return (
                <button
                  key={plan.id}
                  onClick={() => setSelectedDurationId(plan.id)}
                  role="tab"
                  aria-selected={isSelected}
                  style={{
                    padding: '0.75rem 1.75rem',
                    borderRadius: '9999px',
                    border: 'none',
                    fontWeight: 800,
                    fontSize: '0.98rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    background: isSelected ? '#ffffff' : 'transparent',
                    color: isSelected ? '#0f172a' : '#64748b',
                    boxShadow: isSelected ? '0 4px 15px rgba(0, 0, 0, 0.08)' : 'none',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem'
                  }}
                >
                  <span>{plan.duration}</span>
                  {plan.highlightBadge && (
                    <span
                      style={{
                        fontSize: '0.72rem',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                        color: '#ffffff',
                        fontWeight: 800,
                        padding: '0.2rem 0.55rem',
                        borderRadius: '9999px',
                        textTransform: 'uppercase',
                        boxShadow: '0 2px 6px rgba(37, 99, 235, 0.25)'
                      }}
                    >
                      SAVE 40%
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Accounts Grid for Active Duration */}
        <div
          className="pricing-card-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
            paddingTop: '1.5rem',
            marginBottom: '2.5rem'
          }}
        >
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

            return (
              <div
                key={tier.accounts}
                className={`pricing-card-box ${isPopular ? 'popular-card' : ''}`}
                style={{
                  background: '#ffffff',
                  border: isPopular ? '2px solid #2563eb' : '1px solid #e2e8f0',
                  borderRadius: '24px',
                  padding: '2.5rem 1.75rem 2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: isPopular
                    ? '0 12px 35px rgba(37, 99, 235, 0.12), 0 4px 12px rgba(0, 0, 0, 0.04)'
                    : '0 4px 20px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      padding: '0.35rem 1.1rem',
                      borderRadius: '9999px',
                      letterSpacing: '0.04em',
                      boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
                      whiteSpace: 'nowrap',
                      zIndex: 10
                    }}
                  >
                    ★ MOST POPULAR &bull; BEST VALUE
                  </div>
                )}

                {/* Header */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span
                      style={{
                        fontWeight: 900,
                        fontSize: '1.35rem',
                        color: '#0f172a',
                        fontFamily: "'Outfit', sans-serif"
                      }}
                    >
                      {tier.accounts} {tier.accounts === 1 ? 'Connection' : 'Connections'}
                    </span>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        background: 'rgba(37, 99, 235, 0.08)',
                        color: '#2563eb',
                        fontWeight: 800
                      }}
                    >
                      {tier.badge || `${tier.accounts} Screen`}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                    Full access for {activePlan.duration} on {tier.accounts} active device{tier.accounts > 1 ? 's' : ''} simultaneously.
                  </p>

                  {/* Price Row */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#2563eb', lineHeight: 1 }}>$</span>
                    <span style={{ fontSize: '3.1rem', fontWeight: 900, color: '#0f172a', fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>
                      {priceWhole}
                    </span>
                    <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>
                      {priceCents}
                    </span>
                    <span style={{ fontSize: '0.95rem', color: '#64748b', fontWeight: 600, marginLeft: '0.35rem' }}>
                      / {activePlan.duration}
                    </span>
                  </div>

                  {/* Monthly Equivalent Badge */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <span
                      style={{
                        fontSize: '0.85rem',
                        color: '#2563eb',
                        fontWeight: 800,
                        background: 'rgba(37, 99, 235, 0.08)',
                        border: '1px solid rgba(37, 99, 235, 0.2)',
                        padding: '0.28rem 0.75rem',
                        borderRadius: '9999px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <span>⚡</span>
                      <span>Just <strong>{tier.monthlyEquiv}</strong></span>
                    </span>
                  </div>

                  {/* Features List */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#1e293b' }}>
                      <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.12)', color: '#10b981', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.8rem', flexShrink: 0 }}>✓</span>
                      <span><strong>{tier.accounts} Active Screen{tier.accounts > 1 ? 's' : ''}</strong> (Simultaneous)</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#1e293b' }}>
                      <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.12)', color: '#10b981', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.8rem', flexShrink: 0 }}>✓</span>
                      <span>20,000+ Live UK &amp; World Channels</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#1e293b' }}>
                      <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.12)', color: '#10b981', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.8rem', flexShrink: 0 }}>✓</span>
                      <span>All UK Sports (Premier League &amp; TNT 4K)</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#1e293b' }}>
                      <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.12)', color: '#10b981', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.8rem', flexShrink: 0 }}>✓</span>
                      <span>60,000+ 4K Movies &amp; Series (VOD)</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#1e293b' }}>
                      <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.12)', color: '#10b981', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.8rem', flexShrink: 0 }}>✓</span>
                      <span>Anti-Freeze™ 9.3 Buffer-Free Tech</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#1e293b' }}>
                      <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.12)', color: '#10b981', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.8rem', flexShrink: 0 }}>✓</span>
                      <span>7-Day Catch-up &amp; Interactive EPG</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.92rem', color: '#1e293b' }}>
                      <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.12)', color: '#10b981', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.8rem', flexShrink: 0 }}>✓</span>
                      <span>Instant 5-Min WhatsApp Delivery</span>
                    </li>
                  </ul>
                </div>

                {/* Action Button */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp-order"
                    style={{
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      color: '#ffffff',
                      padding: '0.95rem 1.25rem',
                      borderRadius: '14px',
                      fontWeight: 800,
                      fontSize: '0.98rem',
                      textAlign: 'center',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.55rem',
                      boxShadow: '0 4px 15px rgba(16, 185, 129, 0.35)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                  >
                    <span>Order via WhatsApp</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                    </svg>
                  </a>

                  <Link
                    href={`/order/?plan=${activePlan.slug}&accounts=${tier.accounts}`}
                    style={{
                      fontSize: '0.85rem',
                      color: '#64748b',
                      textAlign: 'center',
                      textDecoration: 'none',
                      padding: '0.2rem 0',
                      fontWeight: 600
                    }}
                  >
                    Or configure in order form &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note Below Pricing */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '780px',
            margin: '0 auto',
            padding: '1.25rem 1.75rem',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            fontSize: '0.92rem',
            color: '#475569',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
          }}
        >
          <strong style={{ color: '#0f172a' }}>Activation Guarantee: </strong>
          {PRICING_TERMS_NOTE}
        </div>
      </div>
    </section>
  );
};
"""

with open(p_grid, "w", encoding="utf-8") as f:
    f.write(pricing_grid_code)

print("PricingGrid.tsx successfully rewritten with robust price rendering!")
