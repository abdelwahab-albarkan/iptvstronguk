import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG, getWhatsAppContactUrl } from '@/data/site';
import { HEADER_CTA } from '@/data/navigation';
import { Navbar } from './Navbar';
import { MobileNav } from './MobileNav';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

interface HeaderProps {
  currentPath?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPath = '' }) => {
  return (
    <header className="site-header">
      <div className="container header-container">
        <Link href="/" className="brand-logo" aria-label={`${SITE_CONFIG.name} Home`}>
          <Logo height={38} priority />
        </Link>

        <Navbar currentPath={currentPath} />

        <div className="header-cta-group" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <ThemeToggle />

          <a
            href={getWhatsAppContactUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="header-whatsapp-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.45rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 700,
              background: 'var(--wa-soft-bg)',
              border: '1px solid #a7f3d0',
              color: 'var(--wa-soft-text)',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            aria-label="Direct WhatsApp Contact"
          >
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }}></span>
            <span>WhatsApp Support</span>
          </a>

          <Button href={HEADER_CTA.href} variant="primary" size="sm">
            {HEADER_CTA.label}
          </Button>

          <MobileNav currentPath={currentPath} />
        </div>
      </div>
    </header>
  );
};
