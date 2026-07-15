import Link from "next/link";
import CookieSettingsLink from "./CookieSettingsLink";
import LegalArticle, {
  LegalContactCard,
  LegalDocSection,
} from "./LegalArticle";

const sections: LegalDocSection[] = [
  {
    id: "what-are-cookies",
    title: "What Are Cookies",
    body: (
      <p>
        Cookies are small text files placed on your device when you visit a
        website. They help websites function properly, remember your
        preferences, and understand how visitors use the site.
      </p>
    ),
  },
  {
    id: "types",
    title: "Types of Cookies We Use",
    body: (
      <>
        <h3>Essential cookies</h3>
        <p>
          Required for the website and application form to function — for
          example, maintaining your progress through the multi-step application.
          These cannot be disabled.
        </p>
        <h3>Analytics cookies</h3>
        <p>
          Help us understand how visitors use our website (e.g., Google
          Analytics) so we can improve the experience.
        </p>
        <h3>Advertising &amp; marketing cookies</h3>
        <p>
          Used to measure the effectiveness of our advertising campaigns (e.g.,
          Google Ads and Meta Ads pixels) and, where permitted, to show you
          relevant ads on other websites.
        </p>
      </>
    ),
  },
  {
    id: "managing-preferences",
    title: "Managing Your Cookie Preferences",
    body: (
      <p>
        When you first visit our website, you&apos;ll be shown a cookie consent
        banner allowing you to accept or customize which non-essential cookies
        you allow. You can change your preferences at any time via the{" "}
        <CookieSettingsLink className="font-medium text-emerald-700 underline underline-offset-2 hover:text-emerald-800" />{" "}
        link in our website footer. You can also manage or block cookies through
        your browser settings, though this may affect site functionality.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Cookies",
    body: (
      <>
        <p>
          Some cookies are placed by third-party services we use for analytics
          and advertising. These third parties have their own privacy policies
          governing their use of information collected through cookies. Examples
          include:
        </p>
        <ul>
          <li>Google Analytics</li>
          <li>Google Ads</li>
          <li>Meta (Facebook) Pixel</li>
        </ul>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Cookie Policy",
    body: (
      <p>
        We may update this Cookie Policy from time to time to reflect changes in
        technology, legal requirements, or our business practices. Any updates
        will be posted on this page with a revised effective date.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <>
        <p>
          Questions about our use of cookies? Contact us using the details
          below, or review how we handle personal information in our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
        <LegalContactCard
          email="hello@elmoloans.ca"
          phone="(416) 555-0199"
          addressLines={[
            "100 King Street West",
            "Suite 500",
            "Toronto, ON M5X 1A9",
          ]}
        />
      </>
    ),
  },
];

export default function CookieContent() {
  return (
    <LegalArticle
      intro="This Cookie Policy explains how Elmo Loans uses cookies and similar tracking technologies on our website."
      sections={sections}
    />
  );
}
