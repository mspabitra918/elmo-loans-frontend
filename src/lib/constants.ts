// Central source of truth for the business rules from the brief. Keeping these
// in one place means the marketing copy, JSON-LD schema, and form validation
// never drift apart.

export const BRAND = {
  name: "Elmo Loans",
  legalName: "Elmo Loans, LLC",
  domain: "northstarlend.com",
  tagline: "Modern personal loans, funded in 24 hours.",
  phone: "(416) 555-0199",
  email: "hello@elmoloans.ca",
  address: {
    street: "100 King St W, Suite 5600",
    city: "Toronto",
    region: "ON",
    postalCode: "M5X 1A9",
    country: "CA",
  },
  geo: { lat: 34.0509, lng: -118.2551 },
} as const;

export const LOAN = {
  minAmount: 5000,
  maxAmount: 250000,
  apr: 10, // % fixed APR
  collateral: false,
  upfrontFees: 0,
  fundingHours: `24 - 72`,
  // Available term lengths in months.
  terms: [12, 24, 36, 48, 60],
} as const;

// The five sequential milestones a user can see on their status page, in order.
// DECLINED is a terminal off-ramp handled separately.
export const LIFECYCLE_STAGES = [
  {
    key: "APPLICATION_SUBMITTED",
    label: "Application Submitted",
    blurb:
      "Your details are safely stored. Next, connect your bank to verify your account.",
  },
  {
    key: "PHONE_VERIFICATION_PENDING",
    label: "Phone Verification",
    blurb: "A loan specialist will confirm a few details with you by phone.",
  },
  {
    key: "SIGN_LOAN_AGREEMENT",
    label: "Sign Agreement",
    blurb: "Review and e-sign your loan agreement from this portal.",
  },
  {
    key: "VERIFICATION_DEPOSIT",
    label: "Verification Deposit",
    blurb:
      "A small micro-deposit confirms your routing details before funding.",
  },
  {
    key: "FUNDED",
    label: "Funded",
    blurb: "Your funds are on the way — typically within 24 hours via ACH.",
  },
] as const;

// BANK_VERIFICATION_PENDING is a real backend status but is treated as part of
// the first milestone from the user's point of view (it just means "go verify").
export const STATUS_TO_STAGE_INDEX: Record<string, number> = {
  APPLICATION_SUBMITTED: 0,
  BANK_VERIFICATION_PENDING: 0,
  PHONE_VERIFICATION_PENDING: 1,
  SIGN_LOAN_AGREEMENT: 2,
  VERIFICATION_DEPOSIT: 3,
  FUNDED: 4,
  DECLINED: -1,
};

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/loan-uses", label: "Loan Uses" },
  { href: "/eligibility", label: "Eligibility" },
  { href: "/faq", label: "FAQ" },

  { href: "/contact", label: "Contact" },
] as const;

export function formatUSD(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

// Tel-href safe version of a display phone number ("(747) 330-5650" -> "+17473305650").
export function telHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return `tel:+1${digits.replace(/^1/, "")}`;
}

export function estimateMonthlyPayment(principal: number, term = 24): number {
  const r = LOAN.apr / 100 / 12;
  const n = term;
  if (principal <= 0) return 0;
  const factor = Math.pow(1 + r, n);
  return (principal * r * factor) / (factor - 1);
}

export function clampAmount(value: number): number {
  if (Number.isNaN(value)) return LOAN.minAmount;
  return Math.min(LOAN.maxAmount, Math.max(LOAN.minAmount, value));
}

export const US_STATES = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
  { value: "DC", label: "District of Columbia" },
];
export const FAQS = [
  {
    question: "What credit score do I need to qualify?",
    answer:
      "There's no fixed minimum credit score required to apply. Elmo Loans looks at your business's overall financial picture — including current revenue and cash flow — alongside your credit history, so approval isn't decided by your score alone.",
  },
  {
    question: "What can I use the loan for?",
    answer: `Any legitimate business purpose — working capital,
equipment, inventory, expansion, payroll, marketing, debt consolidation, renovations, or unexpected
expenses. See our full Loan Uses page for details.`,
  },
  {
    question: "How fast will I get funded?",
    answer: `Most approved applications are funded within 24 to 72 hours,
depending on how quickly your documentation is verified.`,
  },
  {
    question: "What documents do I need to apply?",
    answer: `At a minimum, you'll need proof of business
registration, recent business bank statements, and valid ID for the business owner or authorized
signer. We'll let you know if anything else is needed for your specific file.`,
  },
  {
    question: "Is there a cost to apply?",
    answer: `No. There's no cost to submit an application or receive an offer.`,
  },
  {
    question: "Will applying affect my credit score? ",
    answer: `Checking your eligibility does not require a hard
credit inquiry. We'll clearly tell you before any step that could affect your credit score.`,
  },
  {
    question: "What are your rates?",
    answer: `Business loan rates and total cost of borrowing are disclosed clearly
in every offer before you accept, expressed as an annual percentage rate as required under Canadian
law. Rates vary based on your business's financial profile and are capped in line with federal
lending regulations. See our Lending Disclosures page for full details.`,
  },
  {
    question: "Do you lend to new or newer businesses?",
    answer: `Yes, in many cases — even businesses younger
than 3 months may qualify depending on financials and industry. The fastest way to know is to
apply.`,
  },
  {
    question: "Which provinces do you serve?",
    answer: `Elmo Loans currently serves [list confirmed provinces —
see brief §5.2/§10]. Coverage is expanding — check our locations pages for the most current list.`,
  },
  {
    question: "Elmo Loans a direct lender or a broker?",
    answer: `Elmo Loans is a direct lender. Your application
is reviewed and funded by us — it isn't shopped around to third-party lenders.`,
  },
] as const;
