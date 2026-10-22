import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SITE_CONFIG } from '@/data/site';

interface HeroPrice {
  label: string;
  price: string;
  href: string;
}

interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  mobileSubtitle?: string;
  prices?: HeroPrice[];
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  note?: string;
  image?: { src: string; alt: string; width: number; height: number };
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  eyebrow = '🔥 #1 UK & INTERNATIONAL STREAMING SERVICE &bull; 4K / 8K ULTRA HD',
  title,
  subtitle,
  mobileSubtitle,
  prices,
  primaryCtaText = 'View Subscription Plans',
  primaryCtaHref = '/iptv-subscription-uk/#pricing-plans',
  secondaryCtaText = 'Chat on WhatsApp',
  secondaryCtaHref = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`,
  note,
  image
}) => {
  return (
    <section className="section-hero">
      <div className="container hero-inner">
        {eyebrow && (
          <div className="hero-eyebrow">
            <div className="hero-glow-badge">
              <span className="live-radar-dot"></span>
              <span dangerouslySetInnerHTML={{ __html: eyebrow }} />
            </div>
          </div>
        )}
        <h1 className="hero-title">{title}</h1>
        <p className={`hero-subtitle ${mobileSubtitle ? 'hero-subtitle-full' : ''}`}>{subtitle}</p>
        {mobileSubtitle && <p className="hero-subtitle hero-subtitle-short">{mobileSubtitle}</p>}

        {prices && prices.length > 0 && (
          <ul className="hero-prices" aria-label="Plan prices">
            {prices.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="hero-price">
                  <span className="hero-price-label">{p.label}</span>
                  <span className="hero-price-value">{p.price}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="hero-actions">
          {primaryCtaText && primaryCtaHref && (
            <Button href={primaryCtaHref} variant="primary" size="lg">
              {primaryCtaText}
            </Button>
          )}
          {secondaryCtaText && secondaryCtaHref && (
            <Button href={secondaryCtaHref} variant="secondary" size="lg">
              {secondaryCtaText}
            </Button>
          )}
        </div>

        {/* High-Converting Trust Proof Bar */}
        <div className="hero-trust-bar">
          <div className="trust-item">
            <span className="trust-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span><strong>4.9 / 5 Rating</strong> (2,400+ UK Reviews)</span>
          </div>
          <div className="trust-divider" aria-hidden="true">&bull;</div>
          <div className="trust-item">
            <span className="trust-icon">&#9889;</span>
            <span><strong>Instant 5-Min Setup</strong> via WhatsApp</span>
          </div>
          <div className="trust-divider" aria-hidden="true">&bull;</div>
          <div className="trust-item">
            <span className="trust-icon">&#128737;</span>
            <span><strong>Anti-Freeze™ 9.3</strong> Buffer-Free SLA</span>
          </div>
        </div>

        {note && <p className="hero-note">{note}</p>}

        {image && (
          <div className="hero-media hero-tv-frame">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
          </div>
        )}

        {/* Live Sports & Channels Highlight Ticker */}
        <div className="sports-marquee-wrap" aria-label="Supported Live Sports and Events">
          <div className="sports-badge">PREMIER LEAGUE</div>
          <div className="sports-badge">CHAMPIONS LEAGUE</div>
          <div className="sports-badge">SKY SPORTS MAIN EVENT</div>
          <div className="sports-badge">TNT SPORTS 4K</div>
          <div className="sports-badge">FORMULA 1</div>
          <div className="sports-badge">UFC PPV</div>
          <div className="sports-badge">BOXING TITLE BOUTS</div>
          <div className="sports-badge">60,000+ 4K VOD</div>
        </div>
      </div>
    </section>
  );
};
