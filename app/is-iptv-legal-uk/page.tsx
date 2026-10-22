import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { PAGE_METADATA_CONFIG } from '@/data/metadata';
import { constructPageMetadata } from '@/lib/metadata-utils';
import { UK_LEGAL_AUTHORITIES, LEGAL_DISCLAIMER_TEXT } from '@/data/legal-references';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CalloutBox } from '@/components/ui/CalloutBox';
import { AuthorityCitation } from '@/components/sections/AuthorityCitation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FaqAccordion } from '@/components/sections/FaqAccordion';

export const metadata: Metadata = constructPageMetadata(PAGE_METADATA_CONFIG.legal);

export default function LegalPage() {
  const meta = PAGE_METADATA_CONFIG.legal;

  const legalFaqs = [
    {
      question: 'Is IPTV technology inherently illegal in the United Kingdom?',
      answer: 'No. IPTV (Internet Protocol Television) is a way of delivering television over the internet, used by telecoms operators, public service broadcasters and commercial streaming platforms. Whether a particular service is lawful depends on whether it has permission from the rights holders to distribute the content it carries.'
    },
    {
      question: 'Do I need a TV Licence to watch live streams over the internet in the UK?',
      answer: 'Yes. Under the Communications Act 2003, you must hold a valid UK TV Licence if you watch or record live television broadcasts on any channel, service, or device (including smart TVs, computers, tablets, phones, or streaming boxes), regardless of whether the transmission is received via an aerial, satellite, cable, or the internet.'
    },
    {
      question: 'Does using a VPN make unauthorized streaming legal in the UK?',
      answer: 'No. A Virtual Private Network (VPN) encrypts the connection between your device and the internet, but it does not change copyright law. Content that is unlicensed without a VPN is still unlicensed with one.'
    },
    {
      question: 'What are the risks of using unverified or rogue streaming providers?',
      answer: 'Risks include sudden shutdowns with no refund, payment fraud, apps that contain malware, and exposure to copyright infringement.'
    },
    {
      question: 'Can viewers break the law, or only sellers?',
      answer: 'UK prosecutions have mostly targeted people who sell or distribute unlicensed streams, under copyright law and, in some cases, fraud law. That does not make watching unlicensed content lawful, and official UK guidance encourages consumers to use licensed sources. For advice on your own situation, speak to a qualified legal professional.'
    },
    {
      question: 'Where can I find official UK government advice regarding copyright and streaming?',
      answer: 'Official guidance is published by the Intellectual Property Office (IPO) on GOV.UK, Ofcom, TV Licensing, and the Federation Against Copyright Theft (FACT).'
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
            eyebrow="UK Regulatory &amp; Compliance"
            title={meta.h1}
            subtitle="A clear, objective examination of UK broadcasting legislation, copyright frameworks, TV Licensing rules, and official regulatory guidance."
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container container-narrow">
          <CalloutBox variant="compliance" title="Regulatory Disclaimer">
            <p>{LEGAL_DISCLAIMER_TEXT}</p>
          </CalloutBox>

          <h2>Understanding IPTV: The Technology vs The Content</h2>
          <p>
            When discussing the legality of streaming in the United Kingdom, it is essential to distinguish between <strong>the underlying technology</strong> and <strong>the content being transmitted</strong>.
          </p>
          <p>
            <strong>Internet Protocol Television (IPTV)</strong> is a technological framework that transmits television content and video streams over standard Internet Protocol (IP) networks, rather than traditional terrestrial aerials, satellite dishes, or cable formats. Major UK broadcasters and telecommunications companies use IPTV technology daily to deliver catch-up TV and live broadcast streams.
          </p>
          <p>
            <strong>The technology itself is lawful.</strong> Legal issues arise when content is distributed, sold or accessed without the permission of the people who own the rights to it.
          </p>

          <h2>The UK Legal Framework: Copyright &amp; Digital Media</h2>
          <p>
            In the United Kingdom, intellectual property and broadcast rights are governed by several primary pieces of legislation:
          </p>
          <ul>
            <li>
              <strong>Copyright, Designs and Patents Act 1988:</strong> The main UK copyright statute. It protects literary, dramatic, musical and artistic works, as well as broadcasts, films and sound recordings, against unauthorised copying and distribution.
            </li>
            <li>
              <strong>Digital Economy Act 2017:</strong> Raised the maximum prison sentence for online copyright infringement from two years to ten years.
            </li>
            <li>
              <strong>Communications Act 2003:</strong> Governs telecommunications, digital broadcast transmission standards, and the statutory requirement for television licensing.
            </li>
          </ul>

          <div style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
            <h2 id="tv-licensing">UK TV Licensing Requirements</h2>
            <p>
              In the United Kingdom, TV Licensing regulations apply to all live broadcast reception, regardless of the physical transmission technology used:
            </p>

            <Card style={{ marginTop: '1rem', padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-cyan-light)', marginTop: 0 }}>
                When is a TV Licence Legally Required?
              </h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Under the Communications Act 2003, you must be covered by a valid TV Licence if you:
              </p>
              <ul style={{ marginBottom: '0.75rem', fontSize: '0.925rem' }}>
                <li>Watch or record programmes as they are being shown on TV, on any channel.</li>
                <li>Watch or stream programmes live on an online TV service (including broadcast channels streamed over the internet).</li>
                <li>Download or watch any BBC programmes on BBC iPlayer.</li>
              </ul>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                This requirement applies to any device used, including Smart TVs, Amazon Firesticks, computers, tablets, and smartphones.
              </p>
            </Card>
          </div>

          <h2 id="broadcasting-law">Official UK Regulatory &amp; Enforcement Authorities</h2>
          <p>
            These official bodies and one industry organisation publish guidance on broadcasting, copyright and TV Licensing in the UK. Each card is labelled so you can tell government and statutory bodies apart from industry groups:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem', marginBottom: '2.5rem' }}>
            {UK_LEGAL_AUTHORITIES.map((authority, idx) => (
              <AuthorityCitation key={idx} authority={authority} />
            ))}
          </div>

          <h2>Recognising Rogue Providers and Consumer Risks</h2>
          <p>
            Consumers should be aware of the practical risks associated with unverified streaming operations that distribute unauthorized content:
          </p>
          <div className="grid-2" style={{ marginTop: '1.25rem', marginBottom: '2rem' }}>
            <Card>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--status-warning-text)', marginTop: 0 }}>Financial and Payment Risks</h3>
              <p style={{ fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>
                Unverified services often operate anonymously from unregulated jurisdictions without consumer protection laws, making dispute resolution or refunds impossible when services suddenly terminate.
              </p>
            </Card>
            <Card>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--status-warning-text)', marginTop: 0 }}>Device Security Risks</h3>
              <p style={{ fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>
                Services requiring users to sideload unverified third-party APKs or disable device security safeguards risk exposing home networks and personal data to malware or spyware.
              </p>
            </Card>
          </div>

          <CalloutBox variant="info" title="How to Evaluate Providers Responsibly">
            <p>
              For the questions to ask any provider, including whether it is licensed to show the channels it lists, see our <Link href="/iptv-buyers-guide-uk/">IPTV buyer&apos;s guide</Link>.
            </p>
          </CalloutBox>

          <h2>Frequently Asked Questions Regarding UK Legality</h2>
          <FaqAccordion items={legalFaqs} idPrefix="legal-faq" />

          {/* Bottom CTA */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <h2 style={{ fontSize: '1.5rem' }}>Next Steps</h2>
            <p style={{ maxWidth: '600px', margin: '0.5rem auto 1.5rem', color: 'var(--text-secondary)' }}>
              Use the buyer&apos;s guide to check any provider, or see how IPTV Strong UK&apos;s plans are priced.
            </p>
            <div className="cta-row">
              <Button href="/iptv-buyers-guide-uk/" variant="primary" size="lg">
                Read the Buyer&apos;s Guide
              </Button>
              <Button href="/iptv-subscription-uk/" variant="secondary" size="lg">
                View Subscription Plans
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
