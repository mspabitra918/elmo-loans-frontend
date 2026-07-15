import Link from "next/link";
import LegalArticle, {
  LegalContactCard,
  LegalDocSection,
} from "./LegalArticle";

const sections: LegalDocSection[] = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: (
      <>
        <p>We collect the following types of information:</p>
        <ul>
          <li>
            <strong>Application information:</strong> legal business name,
            business registration details, industry, time in business, revenue
            information, banking information, and details about your requested
            loan amount and purpose.
          </li>
          <li>
            <strong>Identity information:</strong> name, date of birth,
            government-issued ID, and contact details of the business owner or
            authorized signer.
          </li>
          <li>
            <strong>Financial information:</strong> bank statements, credit
            information obtained through credit bureaus (with your consent), and
            other financial details relevant to underwriting your application.
          </li>
          <li>
            <strong>Technical information:</strong> IP address, browser type,
            device information, and website usage data collected through cookies
            and similar technologies (see our{" "}
            <Link href="/cookie-policy">Cookie Policy</Link>).
          </li>
          <li>
            <strong>Communications:</strong> records of calls, emails, and
            messages between you and Elmo Loans.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    body: (
      <>
        <p>We use your information to:</p>
        <ul>
          <li>Evaluate your loan application and make lending decisions.</li>
          <li>Verify your identity and the information you&apos;ve provided.</li>
          <li>
            Communicate with you about your application, account, or inquiries.
          </li>
          <li>Comply with legal and regulatory obligations.</li>
          <li>Improve our website and services.</li>
          <li>
            With your consent, send you marketing communications about our
            products (see Marketing Communications below).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-share",
    title: "How We Share Your Information",
    body: (
      <>
        <p>
          We do not sell your personal information. We may share your
          information with:
        </p>
        <ul>
          <li>
            Credit bureaus, to obtain and report credit information as part of
            underwriting.
          </li>
          <li>
            Service providers who help us operate our business (e.g., identity
            verification, payment processing, IT hosting), bound by
            confidentiality obligations.
          </li>
          <li>Regulators and legal authorities, where required by law.</li>
          <li>
            A successor entity, in the event of a merger, acquisition, or sale
            of business assets.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "retention-security",
    title: "Data Retention & Security",
    body: (
      <p>
        We retain your personal information only as long as necessary to fulfill
        the purposes described in this policy, meet legal and regulatory
        record-keeping requirements, and resolve disputes. We use
        industry-standard technical and organizational safeguards, including
        encryption and access controls, to protect your information from
        unauthorized access, loss, or misuse.
      </p>
    ),
  },
  {
    id: "consent-rights",
    title: "Consent and Your Rights",
    body: (
      <>
        <p>
          By submitting an application, you consent to the collection, use, and
          disclosure of your information as described in this policy. Under
          PIPEDA, you have the right to:
        </p>
        <ul>
          <li>Access the personal information we hold about you.</li>
          <li>Request correction of inaccurate information.</li>
          <li>
            Withdraw consent for marketing communications at any time (see
            Marketing Communications below).
          </li>
          <li>
            File a complaint with the Office of the Privacy Commissioner of
            Canada if you believe your privacy rights have been violated.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "marketing-casl",
    title: "Marketing Communications (CASL Compliance)",
    body: (
      <p>
        We will only send you marketing emails, texts, or calls if you&apos;ve
        given express consent, in accordance with Canada&apos;s Anti-Spam
        Legislation (CASL). Every marketing message includes a way to
        unsubscribe or withdraw consent, and we&apos;ll honour that request
        promptly.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <p>
        Our website uses cookies and similar technologies. See our{" "}
        <Link href="/cookie-policy">Cookie Policy</Link> for full details on
        what we use and how to manage your preferences.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. Material changes
        will be posted on this page with an updated effective date.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <>
        <p>
          Questions about this policy or your personal information? Contact our
          Privacy Officer using the details below.
        </p>
        <LegalContactCard
          heading="Privacy Officer"
          email="privacy@elmoloans.ca"
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

export default function LegalSection() {
  return (
    <LegalArticle
      intro={
        <>
          Elmo Loans (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) is
          committed to protecting your privacy. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your personal information when
          you visit our website or apply for a business loan, in accordance with
          Canada&apos;s Personal Information Protection and Electronic Documents
          Act (PIPEDA).
        </>
      }
      sections={sections}
    />
  );
}
