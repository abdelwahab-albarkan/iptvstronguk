import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG, getWhatsAppContactUrl } from '@/data/site';
import { FOOTER_COLUMNS } from '@/data/navigation';
import { LEGAL_DISCLAIMER_TEXT } from '@/data/legal-references';
import { CookieSettingsButton } from './CookieSettingsButton';
import { Logo } from '@/components/ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div>
            <Link href="/" className="footer-logo" aria-label={`${SITE_CONFIG.name} Home`}>
              <Logo variant="white" height={40} />
            </Link>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
              {SITE_CONFIG.description}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem', marginBottom: '1rem' }}>
              <div>
                <span style={{ color: 'var(--text-muted)' }}>Email: </span>
                <a className="footer-contact-link" href={`mailto:${SITE_CONFIG.contact.supportEmail}`}>
                  {SITE_CONFIG.contact.supportEmail}
                </a>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)' }}>WhatsApp: </span>
                <a className="footer-contact-link" href={getWhatsAppContactUrl()} target="_blank" rel="noopener noreferrer" style={{ color: '#34d399', fontWeight: 600 }}>
                  {SITE_CONFIG.contact.whatsappFormatted}
                </a>
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                Availability: 24/7 Dedicated Support
              </div>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Target Region: United Kingdom (GB) &bull; Global CDN
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="footer-col-title">{FOOTER_COLUMNS.services.title}</h3>
            <ul className="footer-link-list">
              {FOOTER_COLUMNS.services.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Guides Column */}
          <div>
            <h3 className="footer-col-title">{FOOTER_COLUMNS.technical.title}</h3>
            <ul className="footer-link-list">
              {FOOTER_COLUMNS.technical.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance Column */}
          <div>
            <h3 className="footer-col-title">{FOOTER_COLUMNS.compliance.title}</h3>
            <ul className="footer-link-list">
              {FOOTER_COLUMNS.compliance.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-disclaimer">
            {LEGAL_DISCLAIMER_TEXT}
          </p>
          <div className="footer-legal">
            <nav aria-label="Legal">
              <ul className="footer-legal-links">
                <li><Link href="/terms/">Terms & Refund Policy</Link></li>
                <li><Link href="/privacy-policy/">Privacy Policy</Link></li>
                <li><CookieSettingsButton /></li>
              </ul>
            </nav>
            <p style={{ whiteSpace: 'nowrap', margin: 0 }}>
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
