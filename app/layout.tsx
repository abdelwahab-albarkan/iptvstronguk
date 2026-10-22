import React from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieConsent } from '@/components/layout/CookieConsent';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { PAGE_METADATA_CONFIG } from '@/data/metadata';
import { constructPageMetadata } from '@/lib/metadata-utils';
import { SITE_CONFIG } from '@/data/site';

export const metadata: Metadata = {
  ...constructPageMetadata(PAGE_METADATA_CONFIG.home),
  // Absolute canonical/OG URLs once NEXT_PUBLIC_SITE_URL is configured.
  metadataBase: SITE_CONFIG.siteUrl ? new URL(SITE_CONFIG.siteUrl) : undefined
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" data-theme="light" suppressHydrationWarning>
      <head>
        {/* Apply the saved theme before first paint to avoid a light/dark flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}"
          }}
        />
        <SchemaOrg type="global" />
      </head>
      <body>
        {/* First in the DOM so keyboard users reach the banner first; it is shown fixed at the bottom. */}
        <CookieConsent />
        <div className="site-wrapper">
          <Header />
          <main className="main-content" id="main-content">
            {children}
          </main>
          <Footer />
        </div>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
