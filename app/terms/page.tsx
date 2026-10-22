import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { PAGE_METADATA_CONFIG } from '@/data/metadata';
import { SITE_CONFIG } from '@/data/site';
import { constructPageMetadata } from '@/lib/metadata-utils';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = constructPageMetadata(PAGE_METADATA_CONFIG.terms);

const LAST_UPDATED = '25 October 2026';

export default function TermsPage() {
  const meta = PAGE_METADATA_CONFIG.terms;
  const email = SITE_CONFIG.contact.supportEmail;

  return (
    <>
      <BreadcrumbSchema items={meta.breadcrumbs} />

      <section className="section-hero">
        <div className="container">
          <Breadcrumbs items={meta.breadcrumbs} />
          <SectionHeading
            isH1
            eyebrow="Terms & Guarantee"
            title={meta.h1}
            subtitle="Transparent terms covering our subscription durations, acceptable device usage, and our 7-day money-back satisfaction guarantee."
          />
          <p className="policy-updated">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow policy-content">
          <h2 style={{ marginTop: 0 }}>1. Agreement to Terms</h2>
          <p>
            By purchasing or accessing a subscription service through {SITE_CONFIG.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree with any of these terms, please refrain from purchasing or using our services.
          </p>

          <h2>2. Subscription Plans & Connections</h2>
          <p>
            All subscription plans are fixed-term (3 months, 6 months, or 12 months) and are billed as a single, one-off upfront payment with zero automated recurring card debits.
          </p>
          <ul>
            <li><strong>Single Connection Plans:</strong> Allow one simultaneous active stream at any time.</li>
            <li><strong>Multi-Connection Plans (2, 3, or 4 Connections):</strong> Allow simultaneous streaming on up to the purchased number of devices within the same household.</li>
            <li>Sharing credentials publicly or exceeding the maximum concurrent connections will cause automated server protection to temporarily suspend access.</li>
          </ul>

          <h2>3. 7-Day Money-Back Satisfaction Guarantee</h2>
          <p>
            We take pride in our Anti-Freeze™ 9.3 streaming stability. If you encounter unresolved technical issues, persistent buffering, or stream incompatibility that our 24/7 technical support team cannot resolve within 7 days of your initial activation, you are eligible for a full refund.
          </p>
          <p>
            To request a refund under our satisfaction guarantee, simply contact our support team via WhatsApp or email with your registered playlist details.
          </p>

          <h2>4. Technical Support & Delivery</h2>
          <p>
            Activation credentials (M3U URL and Xtream Codes server details) are dispatched promptly within 5 to 15 minutes of payment confirmation via WhatsApp and/or email. Our technical team is available 24/7 to provide setup instructions for Amazon Firestick, Smart TVs, Android boxes, and iOS devices.
          </p>

          <h2>5. Broadband Requirements & Streaming Performance</h2>
          <p>
            High-definition (FHD) streaming requires a stable internet speed of at least 15 Mbps. 4K Ultra HD streaming requires at least 30 Mbps per active connection. While our cluster servers utilize adaptive bitrate streaming, broadband instability or local ISP routing issues are outside our direct server control.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have questions regarding these Terms or wish to inquire about our refund policy, please contact us:
          </p>
          <ul>
            <li><strong>WhatsApp Support:</strong> <a href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer">{SITE_CONFIG.contact.whatsappFormatted}</a></li>
            <li><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}
