'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  CONSENT_CATEGORIES,
  OPEN_COOKIE_SETTINGS_EVENT,
  hasOptionalCategories,
  readConsent,
  saveConsent
} from '@/data/cookies';

const FOCUSABLE = 'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const CookieConsent: React.FC = () => {
  // null until mounted, so server and client render the same markup.
  const [showBanner, setShowBanner] = useState<boolean | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [draft, setDraft] = useState({ analytics: false, marketing: false });
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setShowBanner(readConsent() === null);

    const onOpen = () => {
      const saved = readConsent();
      setDraft({ analytics: Boolean(saved?.analytics), marketing: Boolean(saved?.marketing) });
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      setPanelOpen(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpen);
  }, []);

  // Expose the open banner's height so fixed elements (the WhatsApp button) can sit above it.
  const bannerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = document.documentElement;
    const banner = bannerRef.current;
    if (!showBanner || !banner) {
      root.style.removeProperty('--cookie-banner-offset');
      return;
    }
    const update = () => root.style.setProperty('--cookie-banner-offset', `${banner.offsetHeight}px`);
    update();
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null;
    observer?.observe(banner);
    return () => {
      observer?.disconnect();
      root.style.removeProperty('--cookie-banner-offset');
    };
  }, [showBanner]);

  const closePanel = useCallback(() => {
    setPanelOpen(false);
    // Return focus to whatever opened the panel (banner or footer link).
    window.setTimeout(() => {
      const target = returnFocusRef.current;
      if (target && document.body.contains(target)) target.focus();
    }, 0);
  }, []);

  const decide = (choice: { analytics: boolean; marketing: boolean }) => {
    saveConsent(choice);
    setShowBanner(false);
    if (panelOpen) closePanel();
  };

  const openFromBanner = (e: React.MouseEvent<HTMLButtonElement>) => {
    returnFocusRef.current = e.currentTarget;
    const saved = readConsent();
    setDraft({ analytics: Boolean(saved?.analytics), marketing: Boolean(saved?.marketing) });
    setPanelOpen(true);
  };

  // Dialog behaviour: initial focus, focus trap, Escape to close, background scroll lock.
  useEffect(() => {
    if (!panelOpen) return;
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closePanel();
        return;
      }
      if (e.key !== 'Tab' || !dialog) return;
      const items = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
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
  }, [panelOpen, closePanel]);

  const bannerText = hasOptionalCategories
    ? 'We use cookies and similar technologies to keep this website working properly and, where you allow it, to understand how visitors use the site. You can accept or manage your preferences.'
    : 'We use cookies and similar technologies only to keep this website working properly, such as remembering this choice. We do not currently use analytics or marketing cookies. You can accept or manage your preferences.';

  const bannerTextShort = hasOptionalCategories
    ? 'We use essential cookies and, if you allow it, optional ones.'
    : 'We only use essential storage, e.g. to remember this choice. No tracking cookies.';

  return (
    <>
      {/* Stays mounted under the dialog so focus can return to "Manage Preferences". */}
      {showBanner && (
        <section ref={bannerRef} className="cookie-banner" aria-labelledby="cookie-banner-title">
          <div className="cookie-banner-inner">
            <div className="cookie-banner-copy">
              <p id="cookie-banner-title" className="cookie-banner-title">Your privacy matters</p>
              <p className="cookie-banner-text">
                <span className="cookie-text-full">{bannerText}</span>
                <span className="cookie-text-short">{bannerTextShort}</span>{' '}
                <Link href="/privacy-policy/">Privacy Policy</Link>
              </p>
            </div>
            {/* Phones show shorter labels so the banner fits in one compact strip. */}
            <div className="cookie-banner-actions">
              <button type="button" className="btn btn-primary btn-sm" onClick={() => decide({ analytics: true, marketing: true })}>
                <span className="cookie-label-full">Accept All</span>
                <span className="cookie-label-short">Accept</span>
              </button>
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => decide({ analytics: false, marketing: false })}>
                <span className="cookie-label-full">Reject Non-Essential</span>
                <span className="cookie-label-short">Reject</span>
              </button>
              <button type="button" className="btn btn-outline btn-sm" onClick={openFromBanner}>
                <span className="cookie-label-full">Manage Preferences</span>
                <span className="cookie-label-short">Settings</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {panelOpen && (
        <div className="cookie-overlay" onClick={closePanel}>
          <div
            ref={dialogRef}
            className="cookie-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-dialog-title"
            aria-describedby="cookie-dialog-desc"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cookie-dialog-header">
              <h2 id="cookie-dialog-title" className="cookie-dialog-title">Cookie preferences</h2>
              <button type="button" className="cookie-dialog-close" onClick={closePanel} aria-label="Close cookie preferences">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <p id="cookie-dialog-desc" className="cookie-dialog-desc">
              Choose which categories you allow. You can change this at any time from &quot;Cookie Settings&quot; in the footer. See our <Link href="/privacy-policy/" onClick={closePanel}>Privacy Policy</Link> for details.
            </p>

            <ul className="cookie-categories">
              {CONSENT_CATEGORIES.map((c) => {
                const locked = Boolean(c.alwaysOn) || !c.configured;
                const checked = c.alwaysOn ? true : c.configured && draft[c.id as 'analytics' | 'marketing'];
                const inputId = `cookie-cat-${c.id}`;
                return (
                  <li key={c.id} className="cookie-category">
                    <div className="cookie-category-head">
                      <label htmlFor={inputId} className="cookie-category-title">{c.title}</label>
                      <span className="cookie-switch-wrap">
                        <span className="cookie-switch-state">
                          {c.alwaysOn ? 'Always on' : c.configured ? (checked ? 'On' : 'Off') : 'Not used'}
                        </span>
                        <input
                          id={inputId}
                          type="checkbox"
                          role="switch"
                          className="cookie-switch"
                          checked={checked}
                          disabled={locked}
                          aria-describedby={`${inputId}-desc`}
                          onChange={(e) => setDraft((d) => ({ ...d, [c.id]: e.target.checked }))}
                        />
                      </span>
                    </div>
                    <p id={`${inputId}-desc`} className="cookie-category-desc">{c.description}</p>
                  </li>
                );
              })}
            </ul>

            <div className="cookie-dialog-actions">
              <button type="button" className="btn btn-primary" onClick={() => decide(draft)}>
                Save Preferences
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => decide({ analytics: true, marketing: true })}>
                Accept All
              </button>
              <button type="button" className="btn btn-outline" onClick={() => decide({ analytics: false, marketing: false })}>
                Reject Non-Essential
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
