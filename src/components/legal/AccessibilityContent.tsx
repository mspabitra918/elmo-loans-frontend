import LegalArticle, {
  LegalContactCard,
  LegalDocSection,
} from "./LegalArticle";

const sections: LegalDocSection[] = [
  {
    id: "commitment",
    title: "Our Commitment",
    body: (
      <>
        <p>
          We are working to ensure our website conforms to WCAG 2.0 Level AA —
          the standard referenced under AODA&apos;s Information and
          Communications Standard — including:
        </p>
        <ul>
          <li>Text alternatives for images and non-text content.</li>
          <li>Keyboard-operable navigation and forms.</li>
          <li>Sufficient colour contrast for readability.</li>
          <li>Clear, consistent navigation and page structure.</li>
          <li>
            Compatibility with screen readers and other assistive technology.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "feedback",
    title: "Feedback",
    body: (
      <p>
        If you encounter an accessibility barrier on our website, or need
        information in an alternate format, please contact us using the details
        below. We&apos;ll respond and work to address the issue as quickly as
        possible.
      </p>
    ),
  },
  {
    id: "ongoing-work",
    title: "Ongoing Work",
    body: (
      <p>
        Accessibility is an ongoing effort. We periodically review our website
        against WCAG standards and update this statement as our practices
        evolve.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Need Assistance?",
    body: (
      <>
        <p>
          If you experience difficulty accessing any part of our website or need
          information in an alternative format, we&apos;d be happy to help.
          Please contact us using the details below.
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

export default function AccessibilityContent() {
  return (
    <LegalArticle
      intro="Elmo Loans is committed to ensuring our website is accessible to everyone, including people with disabilities, in line with Ontario's Accessibility for Ontarians with Disabilities Act (AODA) and the Web Content Accessibility Guidelines (WCAG)."
      sections={sections}
    />
  );
}
