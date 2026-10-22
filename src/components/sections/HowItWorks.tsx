import React from 'react';
import Link from 'next/link';
import { CONFIRMED_PRICING_PLANS } from '@/data/pricing';
import { SITE_CONFIG, getWhatsAppContactUrl } from '@/data/site';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { formatUSDWithGBP } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

// Six-step "How It Works" section for the homepage. Server-rendered; hover effects are CSS only.
export const HowItWorks: React.FC = () => {
  const email = SITE_CONFIG.contact.supportEmail;

  const steps: { title: string; body: React.ReactNode; links?: React.ReactNode }[] = [
    {
      title: 'Choose Your Device',
      body: 'Start with the TV, Fire TV device, Smart TV, phone, tablet or other compatible device you plan to use.'
    },
    {
      title: 'Check Your Setup',
      body: 'Make sure your device, internet connection and preferred player are suitable for the viewing experience you want.'
    },
    {
      title: 'Choose Your Player',
      body: 'Use a compatible media player and check that it supports the login method and features you need.',
      links: (
        <>
          <Link href="/iptv-firestick-uk/">Firestick players</Link>
          <Link href="/iptv-smart-tv-uk/">Smart TV players</Link>
        </>
      )
    },
    {
      title: 'Get Your Setup Ready',
      body: 'Follow the relevant setup guide for your device, or ask our team for help choosing and setting up an application where applicable.',
      links: <Link href="/iptv-setup-uk/">Setup guide</Link>
    },
    {
      title: 'Choose Your Subscription',
      body: (
        <>
          Select the subscription period that suits you:
          <span className="how-step-prices">
            {CONFIRMED_PRICING_PLANS.map((plan) => (
              <span key={plan.id} className="how-step-price">
                <span>{plan.duration}</span>
                <strong>{formatUSDWithGBP(plan.price)}</strong>
              </span>
            ))}
          </span>
        </>
      ),
      links: (
        <Link href="/iptv-subscription-uk/" className="btn btn-primary btn-sm">
          View Plans
        </Link>
      )
    },
    {
      title: 'Get Support',
      body: `Need help? Contact ${SITE_CONFIG.name} via WhatsApp or email and our team can assist with setup and configuration where applicable.`,
      links: (
        <>
          <a href={getWhatsAppContactUrl()} target="_blank" rel="noopener noreferrer" className="whatsapp-link">
            <WhatsAppIcon size={18} className="whatsapp-icon" />
            WhatsApp
          </a>
          <a href={`mailto:${email}`}>{email}</a>
        </>
      )
    }
  ];

  return (
    <section className="section section-surface how-it-works" aria-labelledby="how-it-works-title">
      <div className="container">
        <div className="how-intro">
          <span className="section-eyebrow">A Simple Way to Get Started</span>
          <h2 id="how-it-works-title">How It Works</h2>
          <p>
            Getting started with {SITE_CONFIG.name} is simple. Choose your device, check your setup, select a plan and contact our team for assistance.
          </p>
        </div>

        <ol className="how-steps">
          {steps.map((step, idx) => (
            <li key={step.title} className="how-step">
              <span className="how-step-number" aria-hidden="true">{String(idx + 1).padStart(2, '0')}</span>
              <h3 className="how-step-title">
                <span className="sr-only">Step {idx + 1}: </span>
                {step.title}
              </h3>
              <p className="how-step-body">{step.body}</p>
              {step.links && <div className="how-step-links">{step.links}</div>}
            </li>
          ))}
        </ol>

        <div className="how-cta">
          <h3 className="how-cta-title">Ready to get started?</h3>
          <p>Choose your subscription and complete your order through our simple WhatsApp order process.</p>
          <Button href="/iptv-subscription-uk/" variant="primary" size="lg">
            View Plans
          </Button>
        </div>
      </div>
    </section>
  );
};
