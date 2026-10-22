import React from 'react';
import { PricingPlan } from '@/types';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/data/site';

interface PricingCardProps {
  plan: PricingPlan;
  ctaText?: string;
  ctaHref?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  ctaText = `Choose ${plan.duration}`,
  ctaHref = SITE_CONFIG.purchaseChannel.plansUrl
}) => {
  const baseTier = plan.accountTiers[0] || { priceFormatted: `$${plan.price.toFixed(2)}`, accounts: 1 };

  return (
    <div className="pricing-card" id={plan.id}>
      <div>
        <div className="pricing-header">
          {plan.highlightBadge && (
            <span className="badge badge-popular" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
              {plan.highlightBadge}
            </span>
          )}
          <h3 className="pricing-duration">{plan.duration}</h3>
          <div className="pricing-price-row">
            <span className="pricing-currency">$</span>
            <span className="pricing-amount">{plan.price.toFixed(2)}</span>
          </div>
          <div className="pricing-total-note">
            From {baseTier.priceFormatted} for 1 Account
          </div>
          <div className="pricing-monthly-calc">
            {plan.calculatedMonthlyApprox}
          </div>
        </div>

        <ul className="pricing-features-list">
          {plan.features.map((feature, i) => (
            <li key={i} className="pricing-feature-item">
              <span className="pricing-check" aria-hidden="true">&#10003;</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <Button href="/iptv-subscription-uk/#pricing-plans" variant="primary">
          {ctaText}
        </Button>
      </div>
    </div>
  );
};
