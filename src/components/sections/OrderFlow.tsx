'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CONFIRMED_PRICING_PLANS } from '@/data/pricing';
import { SITE_CONFIG, buildWhatsAppOrderUrl } from '@/data/site';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { PricingPlan } from '@/types';

interface OrderFlowProps {
  initialPlanId?: string | null;
  initialAccounts?: number;
  onPlanChange?: (plan: PricingPlan) => void;
  labelledBy?: string;
}

export const OrderFlow: React.FC<OrderFlowProps> = ({
  initialPlanId = 'plan-12m',
  initialAccounts = 1,
  onPlanChange,
  labelledBy
}) => {
  const [planId, setPlanId] = useState<string | null>(initialPlanId || 'plan-12m');
  const [accounts, setAccounts] = useState<number>(initialAccounts || 1);
  const [applicationId, setApplicationId] = useState<string | null>('have-app');
  const [paymentMethod, setPaymentMethod] = useState<string | null>('PayPal');

  useEffect(() => {
    if (initialPlanId) setPlanId(initialPlanId);
  }, [initialPlanId]);

  const selectPlan = (p: PricingPlan) => {
    setPlanId(p.id);
    onPlanChange?.(p);
  };

  const plan = CONFIRMED_PRICING_PLANS.find((p) => p.id === planId) || CONFIRMED_PRICING_PLANS[2];
  const activeTier = plan.accountTiers.find((t) => t.accounts === accounts) || plan.accountTiers[0];
  const application = SITE_CONFIG.applicationOptions.find((o) => o.id === applicationId);

  const isComplete = Boolean(plan && application && paymentMethod);

  const whatsappUrl = isComplete && application && paymentMethod
    ? buildWhatsAppOrderUrl({
        plan: plan.duration,
        price: activeTier.priceFormatted,
        accounts: accounts,
        application: application.label,
        paymentMethod
      })
    : null;

  return (
    <section className="order-flow" aria-labelledby={labelledBy}>
      <div className="order-notice" role="note" aria-labelledby="order-notice-title">
        <p id="order-notice-title" className="order-notice-title">{SITE_CONFIG.orderNotice.title}</p>
        <p className="order-notice-text">{SITE_CONFIG.orderNotice.text}</p>
      </div>

      <p className="order-intro">
        Configure your subscription options below, then connect directly with our support team on WhatsApp. Setup credentials are delivered within 5 minutes.
      </p>

      {/* Summary Box */}
      <div className="order-selected" aria-live="polite">
        <span className="order-selected-label">Configured Subscription</span>
        <span className="order-selected-plan">
          <span className="order-selected-name">
            {plan.duration} &bull; {accounts} Connection{accounts > 1 ? 's' : ''}
          </span>
          <span className="order-selected-price">{activeTier.priceFormatted}</span>
        </span>
      </div>

      {/* Step 1: Duration */}
      <fieldset className="order-step">
        <legend className="order-step-title">
          <span className="order-step-num" aria-hidden="true">1</span>
          Choose Subscription Duration
        </legend>
        <div className="order-plan-list">
          {CONFIRMED_PRICING_PLANS.map((p) => {
            const isChecked = p.id === plan.id;
            const tierForP = p.accountTiers.find((t) => t.accounts === accounts) || p.accountTiers[0];
            return (
              <label
                key={p.id}
                className={`order-option order-option-plan ${isChecked ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name="order-plan"
                  value={p.id}
                  checked={isChecked}
                  onChange={() => selectPlan(p)}
                />
                <span className="order-option-body">
                  <span className="order-option-name">
                    {p.duration}
                    {p.highlightBadge && <span className="order-option-badge">BEST VALUE</span>}
                  </span>
                  <span className="order-option-calc">
                    From {tierForP.priceFormatted} ({tierForP.monthlyEquiv})
                  </span>
                </span>
                <span className="order-option-price">{tierForP.priceFormatted}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Step 2: Connections */}
      <fieldset className="order-step">
        <legend className="order-step-title">
          <span className="order-step-num" aria-hidden="true">2</span>
          Select Simultaneous Screen Connections
        </legend>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem', marginTop: '0.75rem' }}>
          {[1, 2, 3, 4].map((num) => {
            const isSel = accounts === num;
            const t = plan.accountTiers.find((x) => x.accounts === num) || plan.accountTiers[0];
            return (
              <button
                type="button"
                key={num}
                onClick={() => setAccounts(num)}
                style={{
                  padding: '1rem 0.75rem',
                  borderRadius: '12px',
                  border: isSel ? '2px solid var(--accent-ink)' : '1px solid var(--line)',
                  background: isSel ? 'var(--selected-bg)' : 'var(--surface)',
                  color: 'var(--ink)',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.2s ease',
                  boxShadow: isSel ? '0 4px 15px rgba(37, 99, 235, 0.15)' : '0 2px 6px rgba(0, 0, 0, 0.03)'
                }}
              >
                <div style={{ fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.25rem', color: isSel ? 'var(--accent-ink)' : 'var(--ink)' }}>
                  {num} {num === 1 ? 'Device' : 'Devices'}
                </div>
                <div style={{ color: isSel ? 'var(--accent-ink)' : 'var(--ink-3)', fontSize: '0.9rem', fontWeight: 700 }}>
                  {t.priceFormatted}
                </div>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Step 3: Application setup */}
      <fieldset className="order-step">
        <legend className="order-step-title">
          <span className="order-step-num" aria-hidden="true">3</span>
          Application &amp; Device Setup
        </legend>
        <div className="order-option-list">
          {SITE_CONFIG.applicationOptions.map((opt) => {
            const isChecked = opt.id === applicationId;
            return (
              <label
                key={opt.id}
                className={`order-option ${isChecked ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name="order-app"
                  value={opt.id}
                  checked={isChecked}
                  onChange={() => setApplicationId(opt.id)}
                />
                <span className="order-option-body">
                  <span className="order-option-name">{opt.label}</span>
                  {opt.description && (
                    <span className="order-option-desc">{opt.description}</span>
                  )}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Step 4: Payment method */}
      <fieldset className="order-step">
        <legend className="order-step-title">
          <span className="order-step-num" aria-hidden="true">4</span>
          Preferred Payment Method
        </legend>
        <div className="order-payment-grid">
          {SITE_CONFIG.paymentMethods.map((method) => {
            const isChecked = method === paymentMethod;
            return (
              <label
                key={method}
                className={`order-payment-option ${isChecked ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name="order-payment"
                  value={method}
                  checked={isChecked}
                  onChange={() => setPaymentMethod(method)}
                />
                <span className="order-payment-name">{method}</span>
              </label>
            );
          })}
        </div>
        <p className="order-payment-note">
          Payment instructions are provided directly on WhatsApp once your credentials and devices are confirmed. No payment is processed on this site.
        </p>
      </fieldset>

      {/* CTA section */}
      <div className="order-cta-wrap">
        {whatsappUrl ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg btn-whatsapp"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              boxShadow: '0 8px 25px rgba(16, 185, 129, 0.45)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.65rem',
              fontSize: '1.05rem',
              fontWeight: 800,
              padding: '1.1rem 2rem',
              borderRadius: '14px',
              color: '#ffffff',
              textDecoration: 'none'
            }}
          >
            <WhatsAppIcon size={24} />
            <span>Complete Order on WhatsApp ({activeTier.priceFormatted})</span>
          </a>
        ) : (
          <button type="button" disabled className="btn btn-primary btn-lg btn-disabled">
            Please complete all options above
          </button>
        )}

        <p className="order-support-note">
          Need assistance or custom connections? Message our WhatsApp support directly at{' '}
          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent-ink)', fontWeight: 600 }}
          >
            {SITE_CONFIG.contact.whatsappFormatted || '+212 625 218 443'}
          </a>
        </p>
      </div>
    </section>
  );
};
