"use client";

import { openCookieSettings } from "@/src/lib/cookieConsent";

export default function CookieSettingsLink({
  className,
}: {
  className?: string;
}) {
  return (
    <button type="button" className={className} onClick={openCookieSettings}>
      Cookie Settings
    </button>
  );
}
