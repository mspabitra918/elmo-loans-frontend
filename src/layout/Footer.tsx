import Link from "next/link";
import CookieSettingsLink from "@/src/components/legal/CookieSettingsLink";
import {
  BRAND,
  LOAN,
  estimateMonthlyPayment,
  formatUSD,
  telHref,
} from "@/src/lib/constants";

export function Footer() {
  return (
    <footer className="md:mt-8 border-t border-navy-100 bg-white text-navy-100">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="text-lg font-bold text-black">
            Elmo
            <span className="text-emerald-700"> Loans</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-black">
            Modern, unsecured personal loans from {formatUSD(LOAN.minAmount)} to{" "}
            {formatUSD(LOAN.maxAmount)} at a fixed {LOAN.apr}% APR. No
            collateral, no upfront fees, funded within {LOAN.fundingHours}{" "}
            hours.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-emerald-700">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-black">
            <li>
              <Link
                className="hover:text-emerald-700"
                href="/lending-disclosures"
              >
                Lending Disclosures
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-emerald-700"
                href="/business-loans/ontario"
              >
                Business Loans
              </Link>
            </li>
            <li>
              <Link className="hover:text-emerald-700" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-emerald-700" href="/how-it-works">
                How It Works
              </Link>
            </li>
            <li>
              <Link className="hover:text-emerald-700" href="/loan-uses">
                Loan Uses
              </Link>
            </li>
            <li>
              <Link className="hover:text-emerald-700" href="/eligibility">
                Eligibility
              </Link>
            </li>
            <li>
              <Link className="hover:text-emerald-700" href="/apply">
                Apply Now
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-emerald-700">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm text-black">
            <li>
              <Link className="hover:text-emerald-700" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:text-emerald-700" href="/terms-of-service">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className="hover:text-emerald-700" href="/accessibility">
                Accessibility Statement
              </Link>
            </li>
            <li>
              <Link className="hover:text-emerald-700" href="/cookie-policy">
                Cookie Policy
              </Link>
            </li>
            {/* <li>
              <CookieSettingsLink className="hover:text-emerald-700" />
            </li> */}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-emerald-700">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-black">
            {/* <li>
              {BRAND.address.street}
              <br />
              {BRAND.address.city}, {BRAND.address.region}{" "}
              {BRAND.address.postalCode}
            </li> */}
            <li>
              <a className="hover:text-emerald-700" href={telHref(BRAND.phone)}>
                {BRAND.phone}
              </a>
            </li>
            <li>
              <a
                className="hover:text-emerald-700"
                href={`mailto:${BRAND.email}`}
              >
                {BRAND.email}
              </a>
            </li>
            <li> Monday – Friday: 9:00 AM – 6:00 PM EST</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-100">
        <div className="container-x py-6 text-xs leading-relaxed text-black">
          <p>
            © {BRAND.address.country === "CA" ? new Date().getFullYear() : ""}{" "}
            {BRAND.legalName}. All rights reserved.
          </p>
          <p className="mt-2 max-w-full">
            Representative example: A {formatUSD(100000)} loan with a fixed{" "}
            {LOAN.apr}% APR over a 24-month term requires estimated monthly
            payments of {formatUSD(estimateMonthlyPayment(100000, 24))}. All
            loans are subject to approval. {BRAND.name} is committed to
            protecting your privacy in compliance with the GLBA and CCPA. Loan
            terms, conditions, and eligibility requirements apply.
          </p>
        </div>
      </div>
    </footer>
  );
}
