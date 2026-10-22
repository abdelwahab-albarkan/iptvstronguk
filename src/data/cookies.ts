// Cookie / storage consent configuration.
//
// No analytics or marketing tools are installed on this site. If one is added later:
//   1. set `configured: true` on its category below (this also updates the banner copy), and
//   2. only load the script after `hasConsent('<category>')` returns true, re-checking when the
//      CONSENT_CHANGE_EVENT fires.

export type ConsentCategoryId = 'necessary' | 'analytics' | 'marketing';

export interface ConsentCategory {
  id: ConsentCategoryId;
  title: string;
  description: string;
  // Whether any tool in this category is actually in use. Unconfigured categories stay off.
  configured: boolean;
  alwaysOn?: boolean;
}

export const CONSENT_CATEGORIES: ConsentCategory[] = [
  {
    id: 'necessary',
    title: 'Necessary',
    description: 'These cookies or storage technologies are required for essential website functionality and cannot be switched off.',
    configured: true,
    alwaysOn: true
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Would help us understand how visitors use the site. No analytics tools are currently used on this website, so this stays off.',
    configured: false
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Would be used for advertising or marketing measurement. No marketing or advertising trackers are currently used on this website, so this stays off.',
    configured: false
  }
];

export const hasOptionalCategories = CONSENT_CATEGORIES.some((c) => !c.alwaysOn && c.configured);

// Bump the version if the categories change materially, so visitors are asked again.
export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = 'iptvstronguk-consent';
export const CONSENT_CHANGE_EVENT = 'iptvstronguk:consent-change';
export const OPEN_COOKIE_SETTINGS_EVENT = 'iptvstronguk:open-cookie-settings';

export interface ConsentRecord {
  version: number;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  // Date the choice was saved; no personal information is stored.
  savedAt: string;
}

export function readConsent(): ConsentRecord | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    return parsed && parsed.version === CONSENT_VERSION ? parsed : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: { analytics: boolean; marketing: boolean }): ConsentRecord {
  const isConfigured = (id: ConsentCategoryId) => CONSENT_CATEGORIES.some((c) => c.id === id && c.configured);
  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    necessary: true,
    // A category can only be granted if something in it is actually in use.
    analytics: choice.analytics && isConfigured('analytics'),
    marketing: choice.marketing && isConfigured('marketing'),
    savedAt: new Date().toISOString()
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  } catch {
    // Storage unavailable (e.g. private mode): the choice still applies for this page view.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: record }));
  return record;
}

export function hasConsent(category: ConsentCategoryId): boolean {
  if (category === 'necessary') return true;
  const record = readConsent();
  return Boolean(record && record[category]);
}

export function openCookieSettings(): void {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}
