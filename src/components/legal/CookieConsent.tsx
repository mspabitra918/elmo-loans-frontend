"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ACCEPT_ALL,
  CookiePreferences,
  OPEN_COOKIE_SETTINGS_EVENT,
  REJECT_NON_ESSENTIAL,
  readConsent,
  writeConsent,
} from "@/src/lib/cookieConsent";

export default function CookieConsent() {
  // `visible` is only ever set inside effects so server and first client render
  // agree (nothing rendered), avoiding a hydration mismatch.
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // On mount: show the banner only if no valid consent is stored yet. Reading
  // localStorage can't happen during render (SSR has no window), so this state
  // is intentionally initialized here in an effect.
  useEffect(() => {
    const stored = readConsent();
    if (!stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only gate
      setVisible(true);
    } else {
      setAnalytics(stored.analytics);
      setAdvertising(stored.advertising);
    }
  }, []);

  // Let the footer "Cookie Settings" link reopen the banner in customize mode,
  // pre-filled with the visitor's current choices.
  useEffect(() => {
    const open = () => {
      const stored = readConsent();
      setAnalytics(stored?.analytics ?? false);
      setAdvertising(stored?.advertising ?? false);
      setCustomizing(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);
  }, []);

  // Move focus into the dialog when it opens so keyboard users land in context.
  useEffect(() => {
    if (visible) panelRef.current?.focus();
  }, [visible]);

  const persist = useCallback((prefs: CookiePreferences) => {
    writeConsent(prefs);
    setAnalytics(prefs.analytics);
    setAdvertising(prefs.advertising);
    setVisible(false);
    setCustomizing(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="mx-auto max-w-3xl rounded-2xl border border-navy-200 bg-white p-6 shadow-lift focus:outline-none sm:p-7"
      >
        <h2
          id="cookie-consent-title"
          className="text-lg font-bold text-black"
        >
          We value your privacy
        </h2>

        <p id="cookie-consent-desc" className="mt-2 text-sm text-navy-800">
          We use essential cookies to run this website and, with your consent,
          analytics and advertising cookies to improve our service and measure
          our campaigns. You can accept all, reject non-essential cookies, or
          choose which categories to allow. See our{" "}
          <Link
            href="/cookie-policy"
            className="font-medium text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
          >
            Cookie Policy
          </Link>
          .
        </p>

        {customizing && (
          <fieldset className="mt-5 space-y-3 border-t border-navy-100 pt-5">
            <legend className="sr-only">Cookie categories</legend>

            <ConsentRow
              title="Essential cookies"
              description="Required for the website and application form to function. Always on."
              checked
              disabled
            />
            <ConsentRow
              title="Analytics cookies"
              description="Help us understand how visitors use the site so we can improve it."
              checked={analytics}
              onChange={setAnalytics}
            />
            <ConsentRow
              title="Advertising cookies"
              description="Measure our advertising and, where permitted, show you relevant ads."
              checked={advertising}
              onChange={setAdvertising}
            />
          </fieldset>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
          {customizing ? (
            <button
              type="button"
              className="btn-primary"
              onClick={() =>
                persist({ essential: true, analytics, advertising })
              }
            >
              Save preferences
            </button>
          ) : (
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setCustomizing(true)}
            >
              Customize
            </button>
          )}

          <button
            type="button"
            className="btn-secondary"
            onClick={() => persist(REJECT_NON_ESSENTIAL)}
          >
            Reject non-essential
          </button>

          <button
            type="button"
            className="btn-primary"
            onClick={() => persist(ACCEPT_ALL)}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}

interface ConsentRowProps {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

function ConsentRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: ConsentRowProps) {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 h-4 w-4 shrink-0 accent-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
      />
      <span>
        <span className="block text-sm font-semibold text-black">{title}</span>
        <span className="block text-sm text-navy-700">{description}</span>
      </span>
    </label>
  );
}
