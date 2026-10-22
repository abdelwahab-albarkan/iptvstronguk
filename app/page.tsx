import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { PAGE_METADATA_CONFIG } from '@/data/metadata';
import { constructPageMetadata } from '@/lib/metadata-utils';
import { HeroSection } from '@/components/sections/HeroSection';
import { PricingGrid } from '@/components/sections/PricingGrid';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { CalloutBox } from '@/components/ui/CalloutBox';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { getPlanCtaHref } from '@/data/site';
import { CONFIRMED_PRICING_PLANS } from '@/data/pricing';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = constructPageMetadata(PAGE_METADATA_CONFIG.home);

export default function HomePage() {
  const meta = PAGE_METADATA_CONFIG.home;

  const quickFacts = [
    { label: 'Plans', value: 'From $39.99 / 3 months', href: '/iptv-subscription-uk/' },
    { label: 'Device guides', value: 'Fire TV, Samsung, LG', href: '/iptv-firestick-uk/' },
    { label: 'Login formats', value: 'M3U & Xtream Codes', href: '/iptv-setup-uk/' },
    { label: 'UK legal context', value: 'Official sources cited', href: '/is-iptv-legal-uk/' }
  ];

  const serviceOfferings = [
    {
      title: 'Made for UK Viewers',
      description: 'Guides written for UK households and devices, including how to keep programme guide times correct when the clocks change between GMT and BST.'
    },
    {
      title: 'Clear, Fixed Pricing',
      description: 'Three straightforward plans: $39.99 (~£31) for 3 months, $56.99 (~£45) for 6 months, and $79.99 (~£63) for 12 months. Transparent USD rates with 1 to 4 connections and zero hidden contract fees.'
    },
    {
      title: 'Standard Login Formats',
      description: 'Your login works as an M3U playlist link or as Xtream Codes details, so you can use a compatible player app that suits your device.'
    },
    {
      title: 'Device Setup Guides',
      description: 'Step-by-step instructions for Amazon Fire TV Stick and Samsung (Tizen) and LG (webOS) Smart TVs, using apps from each device’s official store.'
    },
    {
      title: 'Honest Buyer Guidance',
      description: 'A buyer’s guide that explains how to judge any IPTV service — pricing, compatibility, support and red flags — rather than ranking providers.'
    },
    {
      title: 'UK Legal Context',
      description: 'A plain-English overview of UK copyright law and TV Licensing, with links to Ofcom, the IPO, TV Licensing and other official sources.'
    }
  ];

  const homepageFaqs = [
    {
      question: 'What is IPTV Strong UK?',
      answer: 'IPTV Strong UK is a UK-focused IPTV subscription service. It offers three fixed-term plans priced in USD and publishes setup guides for common UK devices, a buyer’s guide and an overview of the UK legal position.'
    },
    {
      question: 'What subscription plans are available?',
      answer: 'There are three subscription durations with 1 to 4 connections: 3 months from $39.99 ($13.33/mo), 6 months from $56.99 ($9.50/mo), and 12 months from $79.99 ($6.66/mo). All prices are in US dollars (USD).'
    },
    {
      question: 'Is there a free trial?',
      answer: 'No free trial is currently offered. The shortest plan is 3 months for $39.99.'
    },
    {
      question: 'How do I order?',
      answer: 'Choose a plan to open the order page, tell us about your setup and pick a payment method, then send your order via WhatsApp. We reply with payment instructions and next steps.'
    },
    {
      question: 'Which devices can I use?',
      answer: 'Any device that runs a player app supporting M3U playlists or Xtream Codes logins. We publish guides for Amazon Fire TV Stick and Samsung and LG Smart TVs; the general setup guide also covers players on Apple TV, Android TV and computers.'
    },
    {
      question: 'What broadband speed do I need?',
      answer: 'As a rough guide, allow around 10 Mbps for each HD stream and around 25 Mbps for 4K, plus headroom for anything else using your connection. A wired Ethernet connection or 5GHz Wi-Fi is usually more stable than 2.4GHz Wi-Fi.'
    },
    {
      question: 'Do I need a TV Licence?',
      answer: 'If you watch or record live TV on any channel, or use BBC iPlayer, on any device in the UK, you need to be covered by a TV Licence. This applies however the programmes reach you, including over the internet.'
    }
  ];

  return (
    <>
      {/* Hero: what it is, who it's for, primary and secondary action */}
      <HeroSection
        eyebrow="UK IPTV Service"
        title={meta.h1}
        subtitle="IPTV Strong UK offers fixed-term IPTV plans for UK viewers — $39.99 for 3 months, $56.99 for 6 months or $79.99 for a year — with plain-English guides for setting up on Amazon Fire TV, Samsung and LG Smart TVs and other compatible player apps."
        mobileSubtitle="Fixed-term plans priced in USD, with setup help for Fire TV, Samsung and LG TVs."
        prices={CONFIRMED_PRICING_PLANS.map((plan) => ({
          label: plan.duration,
          price: formatPrice(plan.price),
          href: getPlanCtaHref(plan.slug)
        }))}
        primaryCtaText="View Plans"
        primaryCtaHref="#subscription-overview"
        secondaryCtaText="Read Buyer's Guide"
        secondaryCtaHref="/iptv-buyers-guide-uk/"
        note="Verified USD Pricing &bull; Instant 5-Minute Activation via WhatsApp"
        image={{
          src: '/images/home/living-room-hero.jpg',
          alt: 'Bright, modern UK living room with a wall-mounted TV above a wooden media unit',
          width: 1344,
          height: 768
        }}
      />

      {/* Quick facts */}
      <div className="container" style={{ marginTop: '-1.5rem', marginBottom: '1.5rem' }}>
        <div className="quick-facts-grid">
          {quickFacts.map((fact) => (
            <Link key={fact.label} href={fact.href} className="trust-stat-box trust-stat-link">
              <span className="trust-stat-label">{fact.label}</span>
              <span className="trust-stat-val">{fact.value}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Plans */}
      <section className="section section-surface">
        <div className="container">
          <PricingGrid
            id="subscription-overview"
            title="Choose a Plan Length"
          />
        </div>
      </section>

      {/* What IPTV Strong UK offers */}
      <section className="section">
        <div className="container">
          <div className="split-intro">
            <div className="split-intro-text">
              <span className="section-eyebrow">What You Get</span>
              <h2>What IPTV Strong UK Offers</h2>
              <p>
                IPTV Strong UK is a UK IPTV service for households that already have, or plan to buy, an Amazon Fire TV Stick, a Samsung or LG Smart TV, or another device that runs a compatible player app. As well as the subscription itself, we explain setup, how to judge any IPTV provider and the legal context in plain English, and our team can help with setup where applicable.
              </p>
            </div>
            <div className="split-intro-media">
              <Image
                src="/images/home/family-watching-tv.jpg"
                alt="Family relaxing together on a sofa while watching TV at home"
                width={1344}
                height={768}
                sizes="(max-width: 900px) 100vw, 560px"
              />
            </div>
          </div>

          <FeatureGrid features={serviceOfferings} columns={3} />
        </div>
      </section>

      {/* How it works (6 steps) */}
      <HowItWorks />

      {/* Device guides */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-eyebrow">Devices &amp; Setup</span>
            <h2>Setup Guides for Popular UK Devices</h2>
            <p style={{ maxWidth: '720px', margin: '0.5rem auto 0' }}>
              Pick your device for step-by-step instructions, or start with the general setup guide if you want to understand the login formats first.
            </p>
          </div>

          <div className="grid-3">
            <Card className="card-with-media">
              <div className="card-media">
                <Image src="/images/home/streaming-device-remote.jpg" alt="Streaming box and remote control in front of a television" width={1344} height={768} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 380px" />
              </div>
              <h3 style={{ marginTop: 0 }}>Amazon Fire TV Stick</h3>
              <p>
                Prepare your Fire TV Stick, install a compatible player from the Amazon Appstore and enter your login details.
              </p>
              <Link href="/iptv-firestick-uk/" className="btn btn-outline btn-sm">
                Firestick guide &rarr;
              </Link>
            </Card>

            <Card className="card-with-media">
              <div className="card-media">
                <Image src="/images/home/smart-tv-living-room.jpg" alt="Large flat-screen smart TV on a media unit in a living room" width={1344} height={768} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 380px" />
              </div>
              <h3 style={{ marginTop: 0 }}>Samsung &amp; LG Smart TVs</h3>
              <p>
                Install a player from the Samsung or LG app store, including how MAC-address playlist upload works.
              </p>
              <Link href="/iptv-smart-tv-uk/" className="btn btn-outline btn-sm">
                Smart TV guide &rarr;
              </Link>
            </Card>

            <Card className="card-with-media">
              <div className="card-media">
                <Image src="/images/home/tv-phone-tablet.jpg" alt="Television, smartphone and tablet side by side in a bright room" width={1344} height={768} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 380px" />
              </div>
              <h3 style={{ marginTop: 0 }}>M3U, Xtream Codes &amp; EPG</h3>
              <p>
                What each login format is, which details it needs, and how to fix the most common setup errors on any player.
              </p>
              <Link href="/iptv-setup-uk/" className="btn btn-outline btn-sm">
                General setup guide &rarr;
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Buyer guidance */}
      <section className="section section-surface">
        <div className="container container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-eyebrow">Before You Buy</span>
            <h2>How to Judge Any IPTV Service</h2>
            <p>
              Whichever provider you consider, including us, check the basics before paying. Our buyer&apos;s guide explains each point in detail.
            </p>
          </div>

          <Card style={{ padding: '2rem' }}>
            <ul className="checklist">
              <li className="checklist-item">
                <span className="checklist-icon" aria-hidden="true">✓</span>
                <span><strong>Clear USD pricing:</strong> the full price and plan length are shown before you pay.</span>
              </li>
              <li className="checklist-item">
                <span className="checklist-icon" aria-hidden="true">✓</span>
                <span><strong>Standard formats:</strong> M3U or Xtream Codes details that work in player apps from official stores.</span>
              </li>
              <li className="checklist-item">
                <span className="checklist-icon" aria-hidden="true">✓</span>
                <span><strong>A working programme guide:</strong> EPG listings that match UK time through GMT and BST.</span>
              </li>
              <li className="checklist-item">
                <span className="checklist-icon" aria-hidden="true">✓</span>
                <span><strong>Realistic claims:</strong> no &quot;zero buffering&quot; guarantees, fake review badges or &quot;lifetime&quot; deals.</span>
              </li>
            </ul>

            <div style={{ marginTop: '1.5rem' }}>
              <Link href="/iptv-buyers-guide-uk/" className="btn btn-secondary">
                Read the Buyer&apos;s Guide &rarr;
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Legal */}
      <section className="section">
        <div className="container container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-eyebrow">Legal Context</span>
            <h2>IPTV and UK Law</h2>
          </div>

          <CalloutBox variant="compliance" title="Technology vs content licensing">
            <p style={{ marginBottom: '0.75rem' }}>
              IPTV is a way of delivering television over the internet, and the technology itself is lawful. Whether a particular service is lawful depends on whether the content it carries is licensed by the rights holders.
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              Under the Communications Act 2003, anyone in the UK who watches or records live TV on any device needs to be covered by a TV Licence.
            </p>
            <p style={{ margin: 0 }}>
              For copyright law, TV Licensing and links to official guidance, read <Link href="/is-iptv-legal-uk/">Is IPTV legal in the UK?</Link>
            </p>
          </CalloutBox>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-surface">
        <div className="container container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-eyebrow">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <FaqAccordion items={homepageFaqs} idPrefix="home-faq" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginTop: 0, marginBottom: '1rem' }}>
              Compare the Three Plans
            </h2>
            <p style={{ maxWidth: '650px', margin: '0 auto 2rem', color: 'var(--text-secondary)' }}>
              3 months for $39.99, 6 months for $56.99 or 1 year for $79.99. See what&apos;s included and what happens after you order.
            </p>
            <div className="cta-row">
              <Button href="/iptv-subscription-uk/" variant="primary" size="lg">
                View Plans
              </Button>
              <Button href="/iptv-buyers-guide-uk/" variant="secondary" size="lg">
                Read Buyer&apos;s Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
