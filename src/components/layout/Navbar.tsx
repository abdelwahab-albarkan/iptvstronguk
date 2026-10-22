'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MENU_GUIDES, MENU_INFO, MENU_PRIMARY } from '@/data/navigation';
import { NavIcon } from './NavIcon';

interface NavbarProps {
  currentPath?: string;
}

const normalise = (path: string) => path.replace(/\/$/, '') || '/';

export const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const pathname = usePathname();
  const activeRoute = normalise(currentPath || pathname);
  const isActive = (href: string) => normalise(href) === activeRoute;
  const guidesActive = MENU_GUIDES.some((item) => isActive(item.href));

  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number>();
  const lastPointer = useRef<string>('mouse');

  // Close on navigation, outside click and Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Hover support for mouse users, with a short delay so the panel does not flicker.
  const onEnter = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const onLeave = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    closeTimer.current = window.setTimeout(() => setOpen(false), 150);
  };

  const navLink = (label: string, href: string) => (
    <Link key={href} href={href} className={`nav-link ${isActive(href) ? 'active' : ''}`} aria-current={isActive(href) ? 'page' : undefined}>
      {label}
    </Link>
  );

  return (
    <nav className="desktop-nav" aria-label="Main Navigation">
      {MENU_PRIMARY.map((item) => navLink(item.label, item.href))}

      <div className="nav-dropdown-wrap" ref={wrapRef} onPointerEnter={onEnter} onPointerLeave={onLeave}>
        <button
          ref={toggleRef}
          type="button"
          className={`nav-link nav-dropdown-toggle ${guidesActive ? 'active' : ''}`}
          aria-expanded={open}
          aria-controls="nav-guides-panel"
          onPointerDown={(e) => { lastPointer.current = e.pointerType; }}
          onKeyDown={() => { lastPointer.current = 'keyboard'; }}
          onClick={() => {
            // A mouse hover has already opened the panel, so a click must not immediately close it again.
            if (lastPointer.current === 'mouse' && open) return;
            setOpen((v) => !v);
          }}
        >
          Guides
          <NavIcon name="chevron" size={16} className="nav-dropdown-chevron" />
        </button>

        {/* Always in the HTML so the guide links stay crawlable; hidden visually until opened. */}
        <div id="nav-guides-panel" className="nav-dropdown" data-open={open}>
          <ul className="nav-dropdown-list">
            {MENU_GUIDES.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-dropdown-item ${isActive(item.href) ? 'active' : ''}`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span className="nav-item-icon"><NavIcon name={item.icon} /></span>
                  <span className="nav-item-text">
                    <span className="nav-item-label">{item.label}</span>
                    {item.description && <span className="nav-item-desc">{item.description}</span>}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {MENU_INFO.map((item) => navLink(item.label, item.href))}
    </nav>
  );
};
