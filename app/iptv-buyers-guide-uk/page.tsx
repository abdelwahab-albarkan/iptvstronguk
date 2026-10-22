import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { PAGE_METADATA_CONFIG } from '@/data/metadata';
import { constructPageMetadata } from '@/lib/metadata-utils';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CalloutBox } from '@/components/ui/CalloutBox';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ComparisonTable } from '@/components/sections/ComparisonTable';
import { FaqAccordion } from '@/components/sections/FaqAccordion';

export const metadata: Metadata = constructPageMetadata(PAGE_METADATA_CONFIG.buyersGuide);

export default function BuyersGuidePage() {
  const meta = PAGE_METADATA_CONFIG.buyersGuide;

  const evaluationPillars = [
    {
      title: '1. Transparent Billing & Fixed Pricing',
      description: 'A reputable streaming provider clearly publishes all subscription terms upfront in US Dollars (USD). Look for fixed-term commitments (such as 3, 6, or 12 months) without concealed auto-renewal mandates, surprise debit charges, or unrealistic "lifetime" fee structures.'
    },
    {
      title: '2. Standard Protocols (M3U & Xtream Codes)',
      description: 'Ensure the provider delivers standard M3U playlist URLs and Xtream Codes API credentials. This universal architecture allows you to choose your own trusted media player application from official app stores rather than forcing you onto unverified proprietary software.'
    },
    {
      title: '3. UK EPG Timezone Accuracy (GMT / BST)',
      description: 'A working Electronic Programme Guide (EPG) matters for everyday viewing. The provider should supply XMLTV guide data that lines up with Greenwich Mean Time (GMT) in winter and British Summer Time (BST) in summer, and explain how to fix an offset if one appears.'
    },
    {
      title: '4. Hardware Support Without Risky Modifications',
      description: 'A good service works on standard household hardware — Amazon Fire TV Stick, Samsung Tizen, LG webOS, Apple TV and Android TV — using player apps from official stores rather than modified third-party APKs.'
    },
    {
      title: '5. Support You Can Reach Before You Pay',
      description: 'Find out how support works before subscribing: which channel it uses (email, chat or tickets), roughly how quickly it replies, and whether it covers player setup and programme guide problems. A provider that cannot answer before you buy is unlikely to be easier to reach afterwards.'
    },
    {
      title: '6. Factual Business Claims & Honesty',
      description: 'Trustworthy services set realistic expectations. Be wary of "100% buffer-free" promises, static review badges that do not link to an independent platform, and customer counts you cannot verify.'
    }
  ];

  const questionsToAsk = [
    {
      q: 'Does the provider support standard Xtream Codes API or M3U playlist formats?',
      why: 'Why it matters: Standard protocols give you the freedom to choose your preferred media player (e.g. TiviMate, IPTV Smarters, or IBO Player) on your own device rather than relying on locked-down third-party APKs.'
    },
    {
      q: 'Is the Electronic Programme Guide (EPG) properly aligned with UK timezones (GMT / BST)?',
      why: 'Why it matters: If the EPG timezone offset is misconfigured, your on-screen TV guide schedule will be out of sync with actual live broadcast times, leading to missed programmes.'
    },
    {
      q: 'Are the subscription terms clearly stated without recurring direct debits?',
      why: 'Why it matters: Fixed-term prepaid packages ensure you are never surprised by unexpected recurring billing charges or difficult cancellation processes.'
    },
    {
      q: 'Can the service be configured on official store applications without sideloading?',
      why: 'Why it matters: Installing apps from official device app stores protects your home network and device security against unverified third-party code and potential malware.'
    },
    {
      q: 'What broadband speed do you recommend for HD and 4K?',
      why: 'Why it matters: A straight answer shows the provider understands real-world conditions. As a rough guide, allow around 10 Mbps per HD stream and around 25 Mbps for 4K, with headroom for other household use.'
    },
    {
      q: 'How do I contact support, and how quickly do you usually reply?',
      why: 'Why it matters: Setup problems are most likely in the first few days. Knowing the support channel and typical response time in advance saves frustration later.'
    },
    {
      q: 'What happens when my subscription period ends?',
      why: 'Why it matters: You should know in advance whether a plan simply ends or renews automatically, and how renewal is charged.'
    },
    {
      q: 'Do you have permission from the rights holders to distribute the channels you list?',
      why: 'Why it matters: In the UK, whether a service is lawful depends on content licensing, not on the technology used. See our guide to whether IPTV is legal in the UK for the background.'
    }
  ];

  const redFlagsDetailed = [
    {
      title: 'Unrealistic "Lifetime" Subscription Offers',
      description: 'Streaming infrastructure incurs continuous server, bandwidth, and maintenance overheads. Any provider offering a "lifetime subscription" for a low one-time payment is operating an unsustainable commercial model that frequently results in sudden service termination without recourse.'
    },
    {
      title: 'Mandatory Installation of Unverified APKs',
      description: 'If a provider requires you to disable your device security settings and install a modified or cracked APK file from an untrusted third-party server, you risk exposing your local network and personal credentials to malware or security breaches.'
    },
    {
      title: 'Fabricated Reviews and Static Trust Badges',
      description: 'Many rogue websites embed static images of Trustpilot 5-star ratings or customer testimonial counters without linking to legitimate, independently audited review platforms.'
    },
    {
      title: 'Guarantees of "Zero Buffering" or "100% Uptime"',
      description: 'Internet transmission involves multiple network variables—including residential ISP routing, local Wi-Fi congestion, and CDN hops. Reputable providers discuss realistic network requirements rather than making impossible technical guarantees.'
    },
    {
      title: 'False Claims Regarding VPN Legality',
      description: 'Some sellers claim that using a VPN makes accessing unlicensed streams legal. A VPN provides network privacy; it does not change copyright law or TV Licensing obligations.'
    },
    {
      title: 'Pressure Tactics and Untraceable Payments',
      description: 'Countdown timers, "only 3 left" messages and discounts that expire in minutes are designed to stop you comparing. Be equally wary of sellers who only accept gift cards or cryptocurrency, which leave you no way to dispute a charge.'
    }
  ];

  const hardwareEvaluation = [
    {
      device: 'Amazon Fire TV Stick',
      ease: 'High (Recommended)',
      setupType: 'Official Amazon Appstore applications (e.g. TiviMate, IPTV Smarters)',
      notes: 'Excellent hardware video decoding, responsive remote navigation, and simple Xtream Codes API integration. Best connected via 5GHz Wi-Fi or Ethernet adapter.'
    },
    {
      device: 'Samsung Smart TV (Tizen OS)',
      ease: 'Moderate',
      setupType: 'Samsung Apps Store players (e.g. Smart IPTV, IBO Player, IPTV Smarters)',
      notes: 'Operates directly on TV hardware (2017+ models). Some players use MAC-based web playlist upload. Older models may have memory limits with massive playlists.'
    },
    {
      device: 'LG Smart TV (webOS)',
      ease: 'Moderate',
      setupType: 'LG Content Store players (e.g. Smart IPTV, IBO Player, SS IPTV)',
      notes: 'Direct installation from LG store. Supports web-based playlist upload or direct Xtream API. Wired Ethernet connection recommended for best performance.'
    },
    {
      device: 'Apple TV / iOS Devices',
      ease: 'High',
      setupType: 'Apple App Store players (e.g. GSE Smart IPTV, IPTV Smarters Pro)',
      notes: 'Smooth UI, fast processor, and strict App Store security standards. M3U and Xtream Codes API supported natively.'
    },
    {
      device: 'PC / Mac Computers',
      ease: 'Very High',
      setupType: 'VLC Media Player, IPTV Smarters Pro, or browser-based players',
      notes: 'Quickest for testing stream URLs and credential validation. Keyboard and mouse make playlist management straightforward.'
    }
  ];

  const buyerFaqs = [
    {
      question: 'How do I choose the right streaming service for my household in the UK?',
      answer: 'Focus on transparent pricing in USD, verified compatibility with your devices (Fire TV, Samsung, LG), standard M3U/Xtream protocol support, accurate UK EPG feeds, and clear setup documentation. Avoid services making exaggerated performance claims or offering suspicious lifetime deals.'
    },
    {
      question: 'Do I need a specialized set-top box to stream in the UK?',
      answer: 'No. A good service works on standard household hardware such as an Amazon Fire TV Stick, Samsung or LG Smart TV, Apple TV or Android TV device, using player apps from the official app store.'
    },
    {
      question: 'Why is EPG timezone synchronisation critical for British viewers?',
      answer: 'The UK alternates between Greenwich Mean Time (GMT) in winter and British Summer Time (BST) in summer. A properly configured EPG ensures your programme schedule listings accurately reflect local broadcast times without a 1-hour display offset.'
    },
    {
      question: 'Should I start with a short or a long plan?',
      answer: 'A shorter plan lets you check how a service performs on your own network and devices before committing for longer. The trade-off is usually a higher monthly equivalent.'
    },
    {
      question: 'How can I get my home network ready for streaming?',
      answer: 'Connect your streaming device to 5GHz Wi-Fi or a wired Ethernet adapter, allow roughly 10 Mbps per HD stream (around 25 Mbps for 4K), and clear your player app’s cache from time to time.'
    },
    {
      question: 'Is the subscription price the only cost?',
      answer: 'Not always. Some Smart TV player apps charge their own one-off licence fee, paid to the app developer rather than the IPTV provider. Check this before you choose a player.'
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={meta.breadcrumbs} />

      {/* Hero Section */}
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs items={meta.breadcrumbs} />
          <SectionHeading
            isH1
            eyebrow="Consumer Guide"
            title={meta.h1}
            subtitle="A practical framework for judging any IPTV service in the UK: pricing, device compatibility, programme guide, support, legal questions and red flags. It explains how to evaluate providers; it does not rank them."
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container container-narrow">
          <CalloutBox variant="info" title="About this guide">
            <p>
              This guide is published by IPTV Strong UK, which sells an IPTV subscription. We have not tested or ranked other providers, and there are no affiliate links on this page. The criteria below apply to any service, including ours, so use them to check us too.
            </p>
          </CalloutBox>

          <h2>Why a Checklist Beats a Ranking</h2>
          <p>
            How well an IPTV service works for you depends on the provider&apos;s infrastructure, your broadband connection and the device and player app you use. Two households can have very different experiences with the same service, which is why a single &quot;best provider&quot; list is rarely useful.
          </p>
          <p>
            Searching for the best IPTV in the UK usually brings up ranking lists, some claiming weeks of testing and many carrying affiliate links. Instead of a ranking, this guide gives you a set of checks you can apply to any provider yourself, before you pay.
          </p>

          <div style={{ marginTop: '2.5rem', marginBottom: '3rem' }}>
            <h2>6 Core Standards for Evaluating a Streaming Provider</h2>
            <p>
              When researching streaming services, evaluate every potential provider against these six fundamental criteria:
            </p>

            <div className="grid-2" style={{ marginTop: '1.5rem' }}>
              {evaluationPillars.map((pillar, idx) => (
                <Card key={idx}>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-cyan-light)', marginTop: 0, marginBottom: '0.5rem' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.925rem', lineHeight: '1.6' }}>
                    {pillar.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <h2>Pricing Transparency: Fixed Terms vs Hidden Traps</h2>
          <p>
            Commercial clarity is one of the most reliable indicators of a professional service provider. Legitimate operators maintain transparent pricing published in local currency with clearly defined billing durations.
          </p>
          <ul>
            <li>
              <strong>Prepaid Fixed Terms:</strong> Reputable services offer fixed durations (e.g. 3 months, 6 months, or 1 year) that expire naturally unless you choose to renew. This eliminates the risk of unauthorized recurring bank charges or complicated cancellation procedures.
            </li>
            <li>
              <strong>No Hidden Activation Fees:</strong> All setup documentation and credential issuance should be included in the advertised price without surprise &quot;portal fees&quot; or checkout surcharges.
            </li>
            <li>
              <strong>Beware of &quot;Lifetime&quot; Subscriptions:</strong> Running streaming infrastructure has ongoing costs for servers, bandwidth and support. A &quot;lifetime&quot; package for a low one-off fee is hard to sustain, and such services can disappear without warning or refunds.
            </li>
            <li>
              <strong>Check How You Pay:</strong> Ask which payment methods are accepted. Sellers who only take gift cards or cryptocurrency leave you no way to dispute a charge if the service stops working.
            </li>
          </ul>

          <h2>How Much Does IPTV Cost in the UK?</h2>
          <p>
            There is no single price for IPTV in the UK. What you pay depends on how a provider structures its plans, so it helps to compare on the same basis. These are the main factors:
          </p>
          <ul>
            <li>
              <strong>Plan length:</strong> longer plans usually work out cheaper per month, but you pay more up front. A shorter plan lets you check performance on your own network and devices before committing.
            </li>
            <li>
              <strong>Number of connections:</strong> some providers price by how many devices can stream at the same time. Check what a plan allows before comparing headline prices.
            </li>
            <li>
              <strong>Player app licences:</strong> some player apps, particularly on Smart TVs, charge their own one-off fee to the app developer. This is separate from the subscription.
            </li>
            <li>
              <strong>What is included:</strong> programme guide (EPG) support, setup documentation and setup help all affect the value of a plan, not just the price.
            </li>
            <li>
              <strong>Extra charges:</strong> look for activation fees, renewal terms and payment surcharges, and treat very cheap &quot;lifetime&quot; deals with caution.
            </li>
          </ul>
          <p>
            To compare like with like, work out the monthly equivalent (total price divided by months) and check what each plan includes. For reference, IPTV Strong UK charges $39.99 for 3 months, $56.99 for 6 months, and $79.99 for 12 months, with the same service on every plan and no free trial. <Link href="/iptv-subscription-uk/">See our current subscription pricing</Link> for what is included, or compare against <Link href="/iptv-subscription-uk/#pricing-plans">our current pricing</Link> when you check other providers.
          </p>

          <h2>Device Compatibility &amp; Application Security</h2>
          <p>
            How a service connects to your television or streaming device is critical for both viewing convenience and cybersecurity:
          </p>
          <ul>
            <li>
              <strong>Official App Store Delivery:</strong> Legitimate providers design their stream credentials to work with recognised media players available in the Amazon Appstore, Samsung Apps Store, LG Content Store, Google Play Store, and Apple App Store.
            </li>
            <li>
              <strong>Avoiding Modified APKs:</strong> Disreputable sellers often require customers to download modified, cracked APK files from obscure URLs. These modified applications may contain malicious code capable of monitoring network traffic or compromising personal data.
            </li>
            <li>
              <strong>Cross-Device Flexibility:</strong> Standard Xtream Codes and M3U credentials allow you to use your subscription across compatible devices throughout your home, including your <Link href="/iptv-firestick-uk/">Amazon Firestick</Link> or <Link href="/iptv-smart-tv-uk/">Samsung &amp; LG Smart TV</Link>.
            </li>
          </ul>

          <h2>Hardware Comparison: Setup Difficulty by Device</h2>
          <p>
            Different streaming hardware offers varying levels of setup complexity and software flexibility:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.25rem', marginBottom: '2.5rem' }}>
            {hardwareEvaluation.map((hw, idx) => (
              <Card key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', margin: 0 }}>
                    {hw.device}
                  </h3>
                  <span className="badge badge-cyan">{hw.ease}</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--accent-cyan-light)', marginBottom: '0.4rem' }}>
                  <strong>App Source:</strong> {hw.setupType}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
                  {hw.notes}
                </p>
              </Card>
            ))}
          </div>

          <h2>Electronic Programme Guide (EPG) &amp; UK Timezone Offsets</h2>
          <p>
            An Electronic Programme Guide (EPG) is essential for modern television viewing, providing an interactive grid showing what is currently playing and scheduled next. In the United Kingdom, EPG integration presents unique regional requirements:
          </p>
          <ul>
            <li>
              <strong>XMLTV Standardization:</strong> The EPG feed should be delivered in clean XMLTV format, enabling your media player to parse programme titles, descriptions, and episode guides automatically.
            </li>
            <li>
              <strong>Daylight Saving Transitions:</strong> The UK switches between GMT and BST twice a year. XMLTV programme times carry a timezone offset, so with correct data and your device set to UK time, the guide should stay aligned when the clocks change.
            </li>
            <li>
              <strong>Catch-up &amp; Archive Navigation:</strong> Where supported by the player app and stream infrastructure, EPG data enables catch-up navigation to review previously aired broadcast programmes.
            </li>
          </ul>

          <CalloutBox variant="info" title="How the formats work">
            <p>
              For what M3U, Xtream Codes and EPG actually are, and which details each one needs, see our <Link href="/iptv-setup-uk/">guide to M3U, Xtream Codes and EPG</Link>.
            </p>
          </CalloutBox>

          <h2>Comparison: Reputable Standards vs Common Red Flags</h2>
          <p>
            Use this benchmark comparison table to evaluate any streaming service you encounter during your research:
          </p>

          <ComparisonTable />

          <h2>Questions to Ask Before Subscribing</h2>
          <p>
            Before giving payment details to any streaming provider, ask these questions. A good provider will answer them plainly:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.25rem', marginBottom: '2.5rem' }}>
            {questionsToAsk.map((item, idx) => (
              <Card key={idx}>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--accent-cyan-light)', marginTop: 0, marginBottom: '0.35rem' }}>
                  {item.q}
                </h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  {item.why}
                </p>
              </Card>
            ))}
          </div>

          <h2 id="red-flags">Red Flags to Watch For</h2>
          <p>
            The streaming market includes operators who make misleading claims to attract short-term subscribers. Be vigilant regarding the following indicators:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem', marginBottom: '2.5rem' }}>
            {redFlagsDetailed.map((flag, idx) => (
              <div key={idx} className="callout callout-warning">
                <div className="callout-title">
                  <span>⚠️ {flag.title}</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.925rem' }}>{flag.description}</p>
              </div>
            ))}
          </div>

          <h2>Where IPTV Strong UK Stands on These Criteria</h2>
          <p>
            Since we publish this guide, here is how our own service lines up. You can check each point before ordering:
          </p>
          <ul>
            <li><strong>Pricing:</strong> Three published durations in USD with 1 to 4 connections ($39.99 for 3 months, $56.99 for 6 months, $79.99 for 12 months), with the same service on each.</li>
            <li><strong>Formats:</strong> Standard M3U and Xtream Codes login details that work in player apps from official stores.</li>
            <li><strong>Programme guide:</strong> EPG support, with written guidance on fixing GMT/BST time offsets.</li>
            <li><strong>No free trial:</strong> No free trial is currently offered; the shortest plan is 3 months.</li>
            <li><strong>Documentation:</strong> Setup guides for <Link href="/iptv-firestick-uk/">Fire TV Stick</Link>, <Link href="/iptv-smart-tv-uk/">Samsung and LG TVs</Link> and <Link href="/iptv-setup-uk/">other players</Link>, plus a UK legal overview.</li>
          </ul>

          <h2>Legal &amp; Regulatory Awareness in the UK</h2>
          <p>
            Before subscribing to any service, it helps to understand the UK legal framework. The main pieces of legislation and organisations are:
          </p>
          <ul>
            <li><strong>Copyright, Designs and Patents Act 1988:</strong> Protects broadcasts, films and other creative works from unauthorised copying and distribution.</li>
            <li><strong>Communications Act 2003:</strong> Requires anyone in the UK who watches or records live TV on any device to be covered by a <strong>TV Licence</strong>.</li>
            <li><strong>Regulators and enforcement:</strong> <strong>Ofcom</strong> regulates broadcasting; the <strong>Crown Prosecution Service (CPS)</strong> prosecutes criminal cases in England and Wales; and the <strong>Federation Against Copyright Theft (FACT)</strong>, an industry body, works with rights holders and law enforcement.</li>
          </ul>

          <CalloutBox variant="compliance" title="Factual UK Legal Guide">
            <p>
              For a detailed, objective breakdown of UK broadcasting laws, copyright considerations, and TV Licensing rules, read our dedicated <Link href="/is-iptv-legal-uk/">Is IPTV Legal in the UK?</Link> guide.
            </p>
          </CalloutBox>

          <h2>Frequently Asked Questions</h2>
          <FaqAccordion items={buyerFaqs} idPrefix="buyers-faq" />

          {/* Bottom CTA */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <h2 style={{ fontSize: '1.5rem' }}>Compare IPTV Strong UK&apos;s Plans</h2>
            <p style={{ maxWidth: '600px', margin: '0.5rem auto 1.5rem', color: 'var(--text-secondary)' }}>
              If you have worked through the checklist and want to see how our plans measure up, the pricing page sets out every plan and what happens after you order.
            </p>
            <div className="cta-row">
              <Button href="/iptv-subscription-uk/" variant="primary" size="lg">
                Explore IPTV Strong UK Plans
              </Button>
              <Button href="/is-iptv-legal-uk/" variant="secondary" size="lg">
                Read the UK Legal Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
