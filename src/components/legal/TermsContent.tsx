import Link from "next/link";
import LegalArticle, {
  LegalContactCard,
  LegalDocSection,
} from "./LegalArticle";

const sections: LegalDocSection[] = [
  {
    id: "eligibility",
    title: "Eligibility to Use This Website",
    body: (
      <p>
        You must be at least the age of majority in your province of residence
        and have the legal authority to act on behalf of the business you&apos;re
        applying for funding on behalf of.
      </p>
    ),
  },
  {
    id: "no-guarantee",
    title: "No Guarantee of Approval",
    body: (
      <p>
        Submitting an application does not guarantee loan approval. All
        applications are subject to Elmo Loans&apos; underwriting review, and we
        reserve the right to decline any application at our sole discretion. Any
        rate, term, or amount displayed on our website is illustrative only and
        not a binding offer until confirmed in writing following underwriting
        review.
      </p>
    ),
  },
  {
    id: "accuracy",
    title: "Accuracy of Information",
    body: (
      <p>
        You agree to provide accurate, current, and complete information in your
        application. Providing false or misleading information may result in
        denial of your application, revocation of any funding already extended,
        and potential legal consequences.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: (
      <p>
        All content on this website — including text, graphics, logos, and
        software — is the property of Elmo Loans or its licensors and is
        protected by Canadian and international copyright and trademark laws. You
        may not reproduce, distribute, or create derivative works from our
        content without written permission.
      </p>
    ),
  },
  {
    id: "prohibited-uses",
    title: "Prohibited Uses",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Use this website for any unlawful purpose.</li>
          <li>
            Submit fraudulent applications or misrepresent your identity or
            business.
          </li>
          <li>
            Attempt to interfere with the security or proper functioning of this
            website.
          </li>
          <li>
            Scrape, harvest, or collect information from this website without
            authorization.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    body: (
      <p>
        Our website may contain links to third-party websites. Elmo Loans is not
        responsible for the content, privacy practices, or terms of any
        third-party site.
      </p>
    ),
  },
  {
    id: "warranties",
    title: "Disclaimer of Warranties",
    body: (
      <p>
        This website and its content are provided &ldquo;as is&rdquo; without
        warranties of any kind, express or implied. Elmo Loans does not warrant
        that the website will be uninterrupted, error-free, or secure at all
        times.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: (
      <p>
        To the maximum extent permitted by law, Elmo Loans is not liable for any
        indirect, incidental, or consequential damages arising from your use of
        this website or our lending services, except as required by applicable
        Canadian law.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    body: (
      <p>
        These Terms are governed by the laws of the Province of Ontario and the
        federal laws of Canada applicable therein, without regard to conflict of
        law principles.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    body: (
      <p>
        We may update these Terms from time to time. Continued use of the
        website after changes are posted constitutes acceptance of the revised
        Terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <>
        <p>
          If you have questions regarding these Terms of Service, please contact
          us. For details on how we handle your information, see our{" "}
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

export default function TermsContent() {
  return (
    <LegalArticle
      intro={
        <>
          Welcome to Elmo Loans. These Terms of Service (&ldquo;Terms&rdquo;)
          govern your use of our website and application process. By using our
          website or submitting a loan application, you agree to these Terms.
        </>
      }
      sections={sections}
    />
  );
}
