import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { PAGE_METADATA_CONFIG } from '@/data/metadata';
import { CONFIRMED_PRICING_PLANS } from '@/data/pricing';
import { SITE_CONFIG, getPlanCtaHref } from '@/data/site';
import { constructPageMetadata } from '@/lib/metadata-utils';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PricingGrid } from '@/components/sections/PricingGrid';
import { CalloutBox } from '@/components/ui/CalloutBox';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { ContentImage } from '@/components/ui/ContentImage';

export const metadata: Metadata = constructPageMetadata(PAGE_METADATA_CONFIG.subscription);

export default function SubscriptionPage() {
  const meta = PAGE_METADATA_CONFIG.subscription;
  const email = SITE_CONFIG.contact.supportEmail;
  const paymentList = SITE_CONFIG.paymentMethods.join(', ').replace(/, ([^,]*)$/, ' or $1');

  const planInclusionsDetailed = [
    {
      title: 'M3U & Xtream Codes Login Details',
      description: 'You receive an M3U playlist link and Xtream Codes details (server URL, username and password), so you can use whichever compatible player suits your device.'
    },
    {
      title: 'Programme Guide (EPG) Support',
      description: 'Programme guide data for use in your player app. The setup guide explains how to load it and how to correct a one-hour GMT/BST offset.'
    },
    {
      title: 'Wide Device Compatibility',
      description: 'Works in compatible player apps on Amazon Fire TV Stick, Samsung and LG Smart TVs, Apple TV, Android TV, phones, tablets and computers.'
    },
    {
      title: 'Fixed-Term Plans',
      description: 'Each plan covers a set period of 3, 6 or 12 months, priced as a single total.'
    },
    {
      title: 'Step-by-Step Setup Guides',
      description: 'Guides for Firestick, Samsung and LG TVs, plus a general guide to M3U, Xtream Codes and EPG for any other player.'
    },
    {
      title: 'Setup Help',
      description: 'Help with server details, player configuration and programme guide issues if the guides do not solve a problem.'
    }
  ];

  const orderSteps: { title: string; body: React.ReactNode }[] = [
    {
      title: 'Choose a subscription period',
      body: '3 months ($39.99), 6 months ($56.99) or 1 year ($79.99). Every plan includes the same service; only the length and total price differ.'
    },
    {
      title: 'Tell us about your application',
      body: 'Let us know whether you already have a player app or would like help choosing and setting one up.'
    },
    {
      title: 'Pick a preferred payment method',
      body: `Choose ${paymentList}. This is only a preference: nothing is charged on the website.`
    },
    {
      title: 'Send your order via WhatsApp',
      body: 'The “Order via WhatsApp” button opens a message with your choices already filled in, ready for you to send.'
    },
    {
      title: 'Receive payment instructions',
      body: 'Our team replies with instructions for your chosen payment method and the next steps.'
    },
    {
      title: 'Get your login details and set up',
      body: 'Once your order is confirmed, you receive your login details. Follow our guides, or ask for setup assistance where applicable.'
    }
  ];

  const considerations: { title: string; body: React.ReactNode }[] = [
    {
      title: 'Device compatibility',
      body: (
        <>
          Check that the service works on the devices you already own. IPTV Strong UK login details work in compatible player apps on Amazon Fire TV Stick, Samsung and LG Smart TVs, Apple TV, Android TV, phones, tablets and computers. See the <Link href="/iptv-firestick-uk/">Firestick setup guide</Link> or the <Link href="/iptv-smart-tv-uk/">Smart TV guide</Link> for device-specific steps.
        </>
      )
    },
    {
      title: 'Media player compatibility',
      body: 'The player app matters as much as the subscription. Check that it is available in your device’s official app store and supports the login format you plan to use.'
    },
    {
      title: 'Playlist and login formats',
      body: (
        <>
          You can connect with an M3U playlist link or with Xtream Codes details (server URL, username and password). Most TV apps offer an Xtream Codes login; some Smart TV apps ask you to upload an M3U link instead. Our <Link href="/iptv-setup-uk/">setup guide</Link> explains both.
        </>
      )
    },
    {
      title: 'Programme guide (EPG)',
      body: 'A working programme guide shows what is on and what is next. Every IPTV Strong UK plan includes EPG support, and the setup guide explains how to correct a one-hour offset when the clocks change between GMT and BST.'
    },
    {
      title: 'Setup assistance',
      body: 'If you are new to IPTV, it helps to know whether someone can guide you through setup. Our team can help with choosing an app, entering login details and programme guide issues where applicable.'
    },
    {
      title: 'Payment and support',
      body: 'Know how you will pay and how to reach the provider before ordering. Our payment methods and support channels are listed above.'
    }
  ];

  const deviceSupportMatrix = [
    {
      device: 'Amazon Fire TV Stick',
      exampleApps: 'TiviMate, IPTV Smarters Pro',
      protocol: 'Xtream Codes / M3U',
      guideLink: '/iptv-firestick-uk/',
      guideLabel: 'Firestick guide'
    },
    {
      device: 'Samsung Smart TV (Tizen, 2017 onwards)',
      exampleApps: 'Smart IPTV, IBO Player, IPTV Smarters',
      protocol: 'Xtream Codes / MAC-based playlist upload',
      guideLink: '/iptv-smart-tv-uk/',
      guideLabel: 'Smart TV guide'
    },
    {
      device: 'LG Smart TV (webOS 3.0 onwards)',
      exampleApps: 'Smart IPTV, IBO Player, SS IPTV',
      protocol: 'Xtream Codes / MAC-based playlist upload',
      guideLink: '/iptv-smart-tv-uk/',
      guideLabel: 'Smart TV guide'
    },
    {
      device: 'Apple TV, iPhone & iPad',
      exampleApps: 'GSE Smart IPTV, IPTV Smarters',
      protocol: 'Xtream Codes / M3U',
      guideLink: '/iptv-setup-uk/',
      guideLabel: 'General setup guide'
    },
    {
      device: 'Android TV, Google TV & Nvidia Shield',
      exampleApps: 'TiviMate, IPTV Smarters',
      protocol: 'Xtream Codes / M3U',
      guideLink: '/iptv-setup-uk/',
      guideLabel: 'General setup guide'
    },
    {
      device: 'Windows PC & Mac',
      exampleApps: 'VLC Media Player, IPTV Smarters',
      protocol: 'M3U / Xtream Codes',
      guideLink: '/iptv-setup-uk/',
      guideLabel: 'General setup guide'
    }
  ];

  const subscriptionFaqs = [
    {
      question: 'What is an IPTV subscription?',
      answer: 'An IPTV subscription is paid access, for a set period, to a service delivered over the internet rather than by aerial, satellite or cable. You receive login details, such as an M3U playlist link or Xtream Codes details, and enter them into a compatible player app. IPTV Strong UK plans run for 3, 6 or 12 months.'
    },
    {
      question: 'How much does an IPTV subscription cost in the UK?',
      answer: 'Prices vary between providers. IPTV Strong UK plans cost $39.99 for 3 months, $56.99 for 6 months, and $79.99 for 12 months, priced in US dollars (USD). Some player apps charge their own licence fee, which is paid to the app developer and is separate from your subscription.'
    },
    {
      question: 'How do I subscribe to IPTV Strong UK?',
      answer: 'Choose a plan above to open the order page, pick your application option and a preferred payment method, then press “Order via WhatsApp”. Our team replies with payment instructions and the next steps. You can also contact us by email.'
    },
    {
      question: 'Which payment methods are available?',
      answer: `${SITE_CONFIG.paymentMethods.join(', ').replace(/, ([^,]*)$/, ' and $1')}. You choose your preferred method on the order page, and instructions are sent after you contact us. No payment details are collected on this website.`
    },
    {
      question: 'Does IPTV Strong UK offer an IPTV free trial?',
      answer: 'No. IPTV Strong UK does not currently offer a free trial. You can choose from the 3-month, 6-month or 1-year subscription options and contact our team if you need help choosing or setting up your application.'
    },
    {
      question: 'Are the plans different apart from length?',
      answer: 'No. All three plans include the same service, login formats, programme guide support, setup guides and setup help. Only the length and total price differ.'
    },
    {
      question: 'How are the monthly figures worked out?',
      answer: 'They are the total price divided by the number of months, rounded to the nearest penny: $39.99 ÷ 3, $56.99 ÷ 6 and $79.99 ÷ 12. They are shown for comparison only; each plan is priced as a single total.'
    },
    {
      question: 'Can you help me choose an application?',
      answer: 'Yes, where applicable. Choose “I need help choosing and setting up an application” on the order page and our team will suggest options for your device. Whether a particular app works depends on the app and the device.'
    },
    {
      question: 'Does the subscription work with Firestick?',
      answer: 'Yes, with a compatible player app from the Amazon Appstore that supports Xtream Codes or M3U. Our Firestick setup guide walks through preparing the device, installing a player and entering your login details.'
    },
    {
      question: 'Can I use it on a Smart TV?',
      answer: 'Yes, on Samsung (Tizen) and LG (webOS) Smart TVs that can run a compatible player app. Some Smart TV apps connect through MAC-address playlist upload, and some charge their own licence fee. The Smart TV guide covers both.'
    },
    {
      question: 'What happens after I place an order?',
      answer: 'We reply on WhatsApp with payment instructions for your chosen method. Once your order is confirmed, your login details are issued with setup instructions. While you wait, you can install a player app using the device guides.'
    },
    {
      question: 'Do you support EPG?',
      answer: 'Yes. Every plan includes programme guide (EPG) support. Most players load the guide automatically with an Xtream Codes login; the setup guide explains how to add it with an M3U link and how to fix a one-hour time offset.'
    },
    {
      question: 'Can I get help with setup?',
      answer: 'Yes. Setup help covers server details, player configuration and programme guide issues where applicable. Contact us via WhatsApp or by email with your device model, player app and any error message.'
    },
    {
      question: 'Can I use my subscription on more than one device?',
      answer: 'You can enter your login details on any compatible device. The number of devices that can stream at the same time is not set out on this page, so ask about it before ordering if you plan to watch on several screens at once.'
    },
    {
      question: 'What happens when my plan ends?',
      answer: 'Your plan runs for the period you chose: 3, 6 or 12 months. If you want to know exactly when the period starts or how renewal works, ask before ordering.'
    },
    {
      question: 'Should I check IPTV subscription Reddit discussions?',
      answer: 'Reddit threads can include useful first-hand experiences, but they are often out of date and hard to verify. Whichever provider you consider, check current pricing, device compatibility, service terms and the legal position for yourself before paying.'
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={meta.breadcrumbs} />
      <SchemaOrg type="subscription" />

      {/* Hero */}
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs items={meta.breadcrumbs} />
          <SectionHeading
            isH1
            eyebrow="Plans & Pricing"
            title={meta.h1}
            subtitle="Three fixed-term plans for UK viewers, priced in US dollars (USD), with help choosing and setting up your application where applicable."
          />
        </div>
      </section>

      {/* Intro + plans */}
      <section className="section">
        <div className="container">
          <div className="container-narrow" style={{ margin: '0 auto 2.5rem', padding: 0 }}>
            <p style={{ fontSize: '1.05rem' }}>
              An IPTV subscription gives you login details that you enter into a compatible player app on your TV, streaming stick, phone or computer. IPTV Strong UK is an IPTV subscription service for UK households, with three plan lengths and the same service on every plan.
            </p>
            <p style={{ fontSize: '1.05rem', marginBottom: 0 }}>
              If you are comparing options for an IPTV subscription in the UK, this page sets out our prices, how ordering works, which payment methods we accept, what happens after you order and how we can help with setup.
            </p>
          </div>

          <PricingGrid
            id="pricing-plans"
            title="Choose Your Plan"
            subtitle="Choose the IPTV subscription period that suits your viewing setup. Every plan includes the same service; only the length and total price differ."
          />

          <div className="container-narrow" style={{ margin: '3rem auto 0', padding: 0 }}>
            <h2 style={{ fontSize: '1.5rem' }}>Plans and Prices at a Glance</h2>
            <div className="table-wrapper" style={{ overflowX: 'auto', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
              <table className="data-table plan-summary-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <caption className="sr-only">IPTV Strong UK subscription durations and multi-screen connection pricing tiers</caption>
                <thead>
                  <tr>
                    <th scope="col" style={{ padding: '1rem', background: 'var(--surface-2)', color: 'var(--ink)', fontWeight: 800, borderBottom: '1px solid var(--line)' }}>Duration</th>
                    <th scope="col" style={{ padding: '1rem', background: 'var(--surface-2)', color: 'var(--accent-ink)', fontWeight: 800, borderBottom: '1px solid var(--line)' }}>1 Connection</th>
                    <th scope="col" style={{ padding: '1rem', background: 'var(--surface-2)', color: 'var(--accent-ink)', fontWeight: 800, borderBottom: '1px solid var(--line)' }}>2 Connections</th>
                    <th scope="col" style={{ padding: '1rem', background: 'var(--surface-2)', color: 'var(--accent-ink)', fontWeight: 800, borderBottom: '1px solid var(--line)' }}>3 Connections</th>
                    <th scope="col" style={{ padding: '1rem', background: 'var(--surface-2)', color: 'var(--accent-ink)', fontWeight: 800, borderBottom: '1px solid var(--line)' }}>4 Connections</th>
                  </tr>
                </thead>
                <tbody>
                  {CONFIRMED_PRICING_PLANS.map((plan) => (
                    <tr key={plan.id} style={{ borderTop: '1px solid var(--line)' }}>
                      <td style={{ padding: '1rem', fontWeight: 800, color: 'var(--ink)' }}>{plan.duration}</td>
                      <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--ink-2)' }}>{plan.accountTiers[0].priceFormatted}</td>
                      <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--ink-2)' }}>{plan.accountTiers[1].priceFormatted}</td>
                      <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--ink-2)' }}>{plan.accountTiers[2].priceFormatted}</td>
                      <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--ink-2)' }}>{plan.accountTiers[3].priceFormatted}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <CalloutBox variant="info" title="Want to test live streams before subscribing?">
              <p>
                Connect directly with our support team on WhatsApp. We can verify compatibility for your Firestick, Smart TV, or mobile player and guide you through configuration before you subscribe.
              </p>
            </CalloutBox>
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="section section-surface">
        <div className="container container-narrow">
          <h2>What Every Plan Includes</h2>
          <p>
            The service is identical across all three plans:
          </p>

          <div className="grid-2" style={{ marginTop: '2rem' }}>
            {planInclusionsDetailed.map((item, idx) => (
              <Card key={idx}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginTop: 0, marginBottom: '0.4rem' }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container">
          <div className="how-intro">
            <span className="section-eyebrow">Ordering</span>
            <h2 id="what-happens-next">How an IPTV Subscription Works</h2>
            <p>
              Most IPTV subscriptions follow the same pattern: you pay for a period of access, receive login details and enter them into a player app. When you subscribe to IPTV with IPTV Strong UK, ordering takes six steps.
            </p>
          </div>

          <ol className="how-steps">
            {orderSteps.map((step, idx) => (
              <li key={step.title} className="how-step">
                <span className="how-step-number" aria-hidden="true">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="how-step-title">
                  <span className="sr-only">Step {idx + 1}: </span>
                  {step.title}
                </h3>
                <p className="how-step-body">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="cta-row" style={{ marginTop: '2rem' }}>
            <Button href="#pricing-plans" variant="primary" size="lg">
              Choose Your Plan
            </Button>
            <Button href="/order/" variant="secondary" size="lg">
              Order Now
            </Button>
          </div>
          <p className="container-narrow" style={{ margin: '1rem auto 0', padding: 0, textAlign: 'center', fontSize: '0.925rem' }}>
            The order page does not take payment or ask for card details; it simply prepares your WhatsApp message.
          </p>
        </div>
      </section>

      {/* Payment methods + support */}
      <section className="section section-surface">
        <div className="container container-narrow">
          <h2>Payment Methods and Support</h2>
          <div className="grid-2" style={{ marginTop: '1.5rem' }}>
            <Card>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginTop: 0, marginBottom: '0.5rem' }}>
                Payment methods
              </h3>
              <p style={{ fontSize: '0.925rem', marginBottom: '0.75rem' }}>
                You choose your preferred method on the order page. Payment instructions for it are sent after you contact us; no payment details are collected on this website.
              </p>
              <ul className="payment-chips" aria-label="Accepted payment methods">
                {SITE_CONFIG.paymentMethods.map((method) => (
                  <li key={method}>{method}</li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginTop: 0, marginBottom: '0.5rem' }}>
                Customer support
              </h3>
              <p style={{ fontSize: '0.925rem', marginBottom: '0.75rem' }}>
                Support is available through WhatsApp and email, for questions before you order and for help with setup where applicable.
              </p>
              <ul style={{ fontSize: '0.925rem', margin: 0, paddingLeft: '1.1rem' }}>
                <li>WhatsApp: use the button at the end of the <Link href="/order/">order page</Link></li>
                <li>Email: <a href={`mailto:${email}`}>{email}</a></li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* UK considerations */}
      <section className="section">
        <div className="container container-narrow">
          <h2>IPTV Subscription UK: What to Consider</h2>
          <p>
            Before you subscribe to IPTV in the UK, it is worth checking a few practical points. They apply to any UK IPTV subscription, not only ours.
          </p>

          <ContentImage
            src="/images/devices/smartphone-in-hand.jpg"
            alt="Smartphone held in one hand showing a video app, with a television in the background"
          />

          <div className="grid-2" style={{ marginTop: '2rem' }}>
            {considerations.map((item) => (
              <Card key={item.title}>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginTop: 0, marginBottom: '0.4rem' }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {item.body}
                </p>
              </Card>
            ))}
          </div>

          <CalloutBox variant="compliance" title="Before you subscribe">
            <p>
              Our <Link href="/iptv-buyers-guide-uk/">buyer&apos;s guide</Link> sets out the questions worth asking any provider, and our <Link href="/is-iptv-legal-uk/">legal information</Link> page explains copyright law and TV Licensing. If you watch live TV in the UK, you need to be covered by a TV Licence.
            </p>
          </CalloutBox>
        </div>
      </section>

      {/* Applications */}
      <section className="section section-surface">
        <div className="container container-narrow">
          <h2>Choose Your Application</h2>
          <p>
            A subscription gives you login details; the player app is what you watch through. IPTV Strong UK does not make or operate these apps. They are independent products from their own developers, and availability varies by app store, region and device model, so check the store listing on your device.
          </p>
          <p>
            If you are looking for an IPTV Smarters Pro subscription, note that IPTV Smarters Pro is a player app and does not come with channels of its own. You enter the login details from a service such as IPTV Strong UK into the app, using Xtream Codes or an M3U link. The same applies to the other apps listed below.
          </p>

          <ContentImage
            src="/images/devices/devices-collection.jpg"
            alt="Television, streaming stick, smartphone, tablet and laptop together in a living room"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
            {deviceSupportMatrix.map((item, idx) => (
              <Card key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', margin: 0 }}>
                    {item.device}
                  </h3>
                  <Link href={item.guideLink} className="btn btn-outline btn-sm">
                    {item.guideLabel} &rarr;
                  </Link>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--accent-cyan-light)', margin: '0 0 0.25rem 0' }}>
                  <strong>Example apps:</strong> {item.exampleApps}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                  <strong>Login format:</strong> {item.protocol}
                </p>
              </Card>
            ))}
          </div>

          <p>
            The apps above are examples, not endorsements. Not sure which one to use? Choose “I need help choosing and setting up an application” when you order and our team will help where applicable.
          </p>

          <h2>Frequently Asked Questions</h2>
          <FaqAccordion items={subscriptionFaqs} idPrefix="sub-faq" />

          {/* Bottom CTA */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <h2 style={{ fontSize: '1.5rem' }}>Ready to Subscribe?</h2>
            <p style={{ maxWidth: '600px', margin: '0.5rem auto 1.5rem', color: 'var(--text-secondary)' }}>
              Start your order now, or compare the three plans again first.
            </p>
            <div className="cta-row">
              <Button href="/order/" variant="primary" size="lg">
                Order Now
              </Button>
              <Button href="#pricing-plans" variant="secondary" size="lg">
                View Plans
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
