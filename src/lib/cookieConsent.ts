// Shared cookie-consent state, persistence, and the event used to reopen the
// preferences banner from anywhere (e.g. the footer "Cookie Settings" link).

export type CookieCategory = "analytics" | "advertising";

export interface CookiePreferences {
  // Essential cookies are always on and cannot be disabled.
  essential: true;
  analytics: boolean;
  advertising: boolean;
}

export interface StoredConsent extends CookiePreferences {
  // Millisecond timestamp of when consent was last recorded.
  updatedAt: number;
  // Version lets us re-prompt everyone if the policy materially changes.
  version: number;
}

export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = "elmo-cookie-consent";
export const OPEN_COOKIE_SETTINGS_EVENT = "elmo:open-cookie-settings";

export const ACCEPT_ALL: CookiePreferences = {
  essential: true,
  analytics: true,
  advertising: true,
};

export const REJECT_NON_ESSENTIAL: CookiePreferences = {
  essential: true,
  analytics: false,
  advertising: false,
};

export function readConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    // Treat consent from an older policy version as missing so we re-prompt.
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(prefs: CookiePreferences): StoredConsent {
  const record: StoredConsent = {
    ...prefs,
    essential: true,
    updatedAt: Date.now(),
    version: CONSENT_VERSION,
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  } catch {
    // Storage can be unavailable (private mode, blocked). Fail silently — the
    // banner simply reappears next visit rather than breaking the page.
  }
  return record;
}

// Reopen the preferences banner from any component (footer link, etc.).
export function openCookieSettings(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}
