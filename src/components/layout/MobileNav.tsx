'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HEADER_CTA, MENU_GUIDES, MENU_INFO, MENU_PRIMARY, MenuItem } from '@/data/navigation';
import { SITE_CONFIG, getWhatsAppContactUrl } from '@/data/site';
import { Logo } from '@/components/ui/Logo';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { NavIcon } from './NavIcon';

interface MobileNavProps {
  currentPath?: string;
}

const FOCUSABLE = 'a[href], button:not([disabled])';
const normalise = (path: string) => path.replace(/\/$/, '') || '/';

export const MobileNav: React.FC<MobileNavProps> = ({ currentPath }) => {
  const pathname = usePathname();
  const activeRoute = normalise(currentPath || pathname);
  const [isOpen, setIsOpen] = useState(false);
  // The drawer is portalled to <body>: the sticky header uses backdrop-filter, which would otherwise
  // become the containing block for position:fixed and squeeze the drawer to the header's height.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const closeDrawer = useCallback((returnFocus = false) => {
    setIsOpen(false);
    if (returnFocus) window.setTimeout(() => toggleButtonRef.current?.focus(), 0);
  }, []);

  // Close when the route changes (e.g. browser back).
  useEffect(() => setIsOpen(false), [pathname]);

  // Dialog behaviour: initial focus, focus trap, Escape, background scroll lock.
  useEffect(() => {
    if (!isOpen) return;
    const drawer = drawerRef.current;
    drawer?.querySelector<HTMLElement>('.mobile-drawer-close')?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeDrawer(true);
        return;
      }
      if (e.key !== 'Tab' || !drawer) return;
      const items = Array.from(drawer.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, closeDrawer]);

  const renderItem = (item: MenuItem) => {
    const active = normalise(item.href) === activeRoute;
    return (
      <li key={item.href}>
        <Link
          href={item.href}
          className={`mobile-menu-item ${active ? 'active' : ''}`}
          aria-current={active ? 'page' : undefined}
          onClick={() => closeDrawer()}
        >
          <span className="nav-item-icon"><NavIcon name={item.icon} /></span>
          <span className="nav-item-text">
            <span className="nav-item-label">{item.label}</span>
            {item.description && <span className="nav-item-desc">{item.description}</span>}
          </span>
        </Link>
      </li>
    );
  };

  return (
    <>
      <button
        ref={toggleButtonRef}
        type="button"
        className="mobile-nav-toggle"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
        aria-label="Open navigation menu"
      >
        <span className="hamburger" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      {isOpen && mounted && createPortal(
        <div className="mobile-drawer-overlay" onClick={() => closeDrawer(true)}>
          <div
            id="mobile-navigation-drawer"
            ref={drawerRef}
            className="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-drawer-header">
              <Link href="/" className="brand-logo" onClick={() => closeDrawer()} aria-label={`${SITE_CONFIG.name} Home`}>
                <Logo height={32} />
              </Link>
              <button type="button" onClick={() => closeDrawer(true)} className="mobile-drawer-close" aria-label="Close menu">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <nav aria-label="Mobile Navigation" className="mobile-drawer-body">
              <ul className="mobile-menu-list">{MENU_PRIMARY.map(renderItem)}</ul>

              <p className="mobile-menu-heading">Guides</p>
              <ul className="mobile-menu-list">{MENU_GUIDES.map(renderItem)}</ul>

              <p className="mobile-menu-heading">Info</p>
              <ul className="mobile-menu-list">{MENU_INFO.map(renderItem)}</ul>
            </nav>

            <div className="mobile-drawer-footer">
              <Link href={HEADER_CTA.href} className="btn btn-primary btn-block" onClick={() => closeDrawer()}>
                {HEADER_CTA.label}
                <NavIcon name="arrow" size={18} />
              </Link>
              <div className="mobile-drawer-contact">
                <a href={getWhatsAppContactUrl()} target="_blank" rel="noopener noreferrer" className="mobile-contact-link">
                  <WhatsAppIcon size={18} className="whatsapp-icon" />
                  WhatsApp
                </a>
                <a href={`mailto:${SITE_CONFIG.contact.supportEmail}`} className="mobile-contact-link">
                  <NavIcon name="mail" size={18} />
                  Email us
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
