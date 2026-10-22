import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { PAGE_METADATA_CONFIG } from '@/data/metadata';
import { SITE_CONFIG, getWhatsAppContactUrl } from '@/data/site';
import { constructPageMetadata } from '@/lib/metadata-utils';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = constructPageMetadata(PAGE_METADATA_CONFIG.contact);

export default function ContactPage() {
  const meta = PAGE_METADATA_CONFIG.contact;
  const whatsappUrl = getWhatsAppContactUrl();

  return (
    <>
      <BreadcrumbSchema items={meta.breadcrumbs} />

      <section className="section-hero">
        <div className="container">
          <Breadcrumbs items={meta.breadcrumbs} />
          <SectionHeading
            isH1
            eyebrow="24/7 Technical Support"
            title={meta.h1}
            subtitle="Have questions about our UK & global subscription plans, device setup, or player app configuration? Our dedicated team is available 24/7 to assist you."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}
          >
            {/* WhatsApp Card */}
            <div
              style={{
                background: 'var(--card-bg)',
                border: '2px solid rgba(16, 185, 129, 0.4)',
                borderRadius: '16px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--card-shadow, 0 10px 30px rgba(0,0,0,0.05))'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'var(--wa-soft-bg)',
                    color: 'var(--wa-soft-text)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    marginBottom: '1rem'
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></span>
                  Fastest Response (&lt; 5 mins)
                </div>

                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>
                  WhatsApp Live Chat
                </h2>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Best for instant subscription activation, M3U/Xtream playlist delivery, and real-time step-by-step setup assistance for your Firestick, Smart TV, or Android device.
                </p>

                <div style={{ marginBottom: '1.5rem', fontSize: '1rem', fontWeight: 700 }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'block', fontWeight: 400 }}>WhatsApp Number:</span>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', textDecoration: 'none' }}>
                    {SITE_CONFIG.contact.whatsappFormatted}
                  </a>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  background: '#10b981',
                  borderColor: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontWeight: 700
                }}
              >
                Chat on WhatsApp Now
              </a>
            </div>

            {/* Email Card */}
            <div
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--card-shadow, 0 10px 30px rgba(0,0,0,0.05))'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'rgba(37, 99, 235, 0.1)',
                    color: '#2563eb',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    marginBottom: '1rem'
                  }}
                >
                  Formal Enquiries
                </div>

                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>
                  Email Support
                </h2>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  For corporate inquiries, billing clarifications, custom playlist configurations, or detailed technical troubleshooting queries.
                </p>

                <div style={{ marginBottom: '1.5rem', fontSize: '1rem', fontWeight: 700 }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'block', fontWeight: 400 }}>Support Email:</span>
                  <a href={`mailto:${SITE_CONFIG.contact.supportEmail}`} style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>
                    {SITE_CONFIG.contact.supportEmail}
                  </a>
                </div>
              </div>

              <a
                href={`mailto:${SITE_CONFIG.contact.supportEmail}`}
                className="btn btn-secondary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700
                }}
              >
                Send Us an Email
              </a>
            </div>
          </div>

          {/* Quick Help & Device Guides */}
          <div
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '3rem'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>
              Looking for Immediate Self-Service Setup Instructions?
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              You may find immediate answers in our detailed step-by-step device guides without waiting for a support agent:
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem'
              }}
            >
              <Link
                href="/iptv-firestick-uk/"
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  background: 'var(--bg-subtle, rgba(0,0,0,0.02))',
                  border: '1px solid var(--border-color)',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block'
                }}
              >
                <strong style={{ display: 'block', color: 'var(--accent-cyan)', marginBottom: '0.25rem' }}>
                  Fire TV Stick Guide →
                </strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  Downloader, TiviMate & IPTV Smarters setup
                </span>
              </Link>

              <Link
                href="/iptv-smart-tv-uk/"
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  background: 'var(--bg-subtle, rgba(0,0,0,0.02))',
                  border: '1px solid var(--border-color)',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block'
                }}
              >
                <strong style={{ display: 'block', color: 'var(--accent-cyan)', marginBottom: '0.25rem' }}>
                  Smart TV Guide →
                </strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  Samsung (Tizen) & LG (webOS) playlist activation
                </span>
              </Link>

              <Link
                href="/iptv-setup-uk/"
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  background: 'var(--bg-subtle, rgba(0,0,0,0.02))',
                  border: '1px solid var(--border-color)',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block'
                }}
              >
                <strong style={{ display: 'block', color: 'var(--accent-cyan)', marginBottom: '0.25rem' }}>
                  General Setup & EPG →
                </strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  M3U URLs, Xtream Codes & GMT/BST time fixes
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
