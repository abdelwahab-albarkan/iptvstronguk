'use client';

import React from 'react';
import { openCookieSettings } from '@/data/cookies';

interface CookieSettingsButtonProps {
  className?: string;
  children?: React.ReactNode;
}

// Reopens the cookie preferences panel rendered by <CookieConsent />.
export const CookieSettingsButton: React.FC<CookieSettingsButtonProps> = ({ className = 'link-button', children = 'Cookie Settings' }) => (
  <button type="button" className={className} onClick={openCookieSettings} aria-haspopup="dialog">
    {children}
  </button>
);
