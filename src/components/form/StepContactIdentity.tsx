import Link from "next/link";
import { TextField } from "../ui/fields";
import { StepProps } from "./ApplyForm";
import { StepHeading } from "./ui/StepHeading";

export const formattedNumber = (value: string) => {
  let digits = value.replace(/\D/g, "");

  // Remove leading country code (1) if present
  if (digits.length === 11 && digits.startsWith("1")) {
    digits = digits.slice(1);
  }

  digits = digits.slice(0, 10);

  if (digits.length > 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  if (digits.length > 3) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }

  if (digits.length > 0) {
    return `(${digits}`;
  }

  return "";
};

export function StepContactIdentity({ values, errors, set }: StepProps) {
  return (
    <div className="space-y-8">
      <StepHeading
        title="Contact & Identity"
        sub="Step 4 of 5 — Tell us how to reach you"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <TextField
          label="Full Name"
          name="full_name"
          value={values.full_name}
          error={errors.full_name}
          onChange={set}
          placeholder="John Smith"
          autoComplete="name"
        />

        <TextField
          label="Email Address"
          name="email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={set}
          placeholder="john@company.com"
          autoComplete="email"
        />
      </div>

      <TextField
        label="Mobile Number"
        name="phone"
        value={values.phone}
        error={errors.phone}
        inputMode="tel"
        autoComplete="tel"
        placeholder="(416) 555-1234"
        onChange={(_, value) => set("phone", formattedNumber(value))}
      />

      {/* Consents */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="mb-5 text-lg font-semibold text-slate-900">
          Required Consents
        </h3>

        <div className="space-y-5">
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={values.consent_credit === "true"}
              onChange={(e) => set("consent_credit", String(e.target.checked))}
              className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600"
            />

            <span className="text-sm leading-6 text-slate-700">
              I consent to Elmo Loans verifying the information provided,
              including a credit check where applicable, in connection with this
              application.
            </span>
          </label>

          {errors.consent_credit && (
            <p className="text-sm text-red-600">{errors.consent_credit}</p>
          )}

          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={values.consent_contact === "true"}
              onChange={(e) => set("consent_contact", String(e.target.checked))}
              className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600"
            />

            <span className="text-sm leading-6 text-slate-700">
              I agree to be contacted by Elmo Loans by phone, text, or email
              regarding this application. Message and data rates may apply. I
              can withdraw my consent at any time.
            </span>
          </label>

          {errors.consent_contact && (
            <p className="text-sm text-red-600">{errors.consent_contact}</p>
          )}

          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={values.consent_terms === "true"}
              onChange={(e) => set("consent_terms", String(e.target.checked))}
              className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600"
            />

            <span className="text-sm leading-6 text-slate-700">
              I confirm I am an authorized signer for this business and have
              read and agree to the{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-emerald-600 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms"
                className="font-medium text-emerald-600 hover:underline"
              >
                Terms of Service
              </Link>
              .
            </span>
          </label>

          {errors.consent_terms && (
            <p className="text-sm text-red-600">{errors.consent_terms}</p>
          )}
        </div>
      </div>
    </div>
  );
}
