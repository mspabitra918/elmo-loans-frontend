"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { api, ApiError } from "@/lib/api";
import { LOAN, BRAND, formatUSD } from "../../lib/constants";
// import {
//   computeLoanSummary,
//   formatUSDCents,
//   formatPaymentDate,
// } from "@/lib/loanMath";
import * as v from "../../lib/validation";
import type { ApplyPayload } from "../../lib/type";
import { StepBusinessBasics } from "./StepBusinessBasics";
import { StepFundingDetails } from "./StepFundingDetails";
import { StepFinancialSnapshot } from "./StepFinancialSnapshot";
import { StepContactIdentity } from "./StepContactIdentity";
import { Stepper, STEPS } from "./ui/Stepper";
import { api, ApiError } from "@/src/lib/api";
import { Check } from "./ui/Check";
import { StepReview } from "./StepReview";
import { MoveLeft, MoveRight } from "lucide-react";
import { toast } from "sonner";
import { ConfirmationScreen } from "./ConfirmationScreen";

export type Values = Record<string, string>;

export const initialValues: Values = {
  business_name: "",
  industry: "",
  time_in_business: "",
  province: "",
  funding_amount: "",
  loan_use: "",
  funding_timeline: "",
  monthly_revenue: "",
  business_bank: "",
  existing_debt: "",
  full_name: "",
  email: "",
  phone: "",
  consent_credit: "false",
  consent_contact: "false",
  consent_terms: "false",
};
interface ApplyFormProps {
  onSuccess: (firstName: string) => void;
}

export function ApplyForm({ onSuccess }: ApplyFormProps) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>(initialValues);
  const [consentCredit, setConsentCredit] = useState(false);
  const [consentTcpa, setConsentTcpa] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  // const setField = (name: string, value: string) => {
  //   setValues((prev) => ({ ...prev, [name]: value }));
  //   if (errors[name]) setErrors((e) => ({ ...e, [name]: "" }));
  // };

  const MAX_LOAN_AMOUNT = 250000;

  const setField = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));

    if (name === "loan_amount") {
      const amount = Number(value.replace(/,/g, ""));

      if (amount > MAX_LOAN_AMOUNT) {
        setErrors((prev) => ({
          ...prev,
          loan_amount: `Loan amount cannot exceed ${formatUSD(MAX_LOAN_AMOUNT)}.`,
        }));
        return;
      }
    }

    // Clear the error when the value becomes valid
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  function validateStep(current: number): Record<string, string> {
    const maps: Record<number, Record<string, v.Validator | undefined>> = {
      0: {
        business_name: v.required(),
        industry: v.required(),
        time_in_business: v.required(),
        province: v.required(),
      },
      1: {
        funding_amount: v.required(),
        loan_use: v.required(),
        funding_timeline: v.required(),
      },
      2: {
        monthly_revenue: v.required(),
        business_bank: v.required(),
        existing_debt: v.required(),
      },
      3: {
        full_name: v.required(),
        email: v.required(),
        phone: v.required(),
        consent_credit: v.accepted("Credit consent"),
        consent_contact: v.accepted("Contact consent"),
        consent_terms: v.accepted("Terms and Conditions"),
      },
      4: {},
    };
    return v.validateFields(values, maps[current]);
  }

  function next() {
    const stepErrors = validateStep(step);
    if (Object.keys(stepErrors).length) {
      setErrors(stepErrors);
      toast.error("Please complete all required fields.");
      return;
    }
    setErrors({});
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
  }

  async function submit() {
    setSubmitting(true);
    setSubmitError(null);

    const payload: ApplyPayload = {
      business_name: values.business_name.trim(),
      industry: values.industry.trim(),
      time_in_business: values.time_in_business.trim(),
      province: values.province.trim(),
      full_name: values.full_name.trim(),
      email: values.email.trim(),
      phone: values.phone,
      monthly_revenue: values.monthly_revenue.trim(),
      business_bank: values.business_bank.trim(),
      existing_debt: values.existing_debt.trim(),
      funding_amount: values.funding_amount.trim(),
      loan_use: values.loan_use.trim(),
      funding_timeline: values.funding_timeline.trim(),
    };

    try {
      await api.apply(payload);

      onSuccess(values.full_name.split(" ")[0]);
    } catch (err) {
      setSubmitError(
        err instanceof ApiError
          ? err.message
          : "Something went wrong submitting your application. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
      <div className="rounded-2xl border border-navy-100 bg-white shadow-card p-6 sm:p-12 px-4">
        <Stepper step={step} />

        <div className="mt-8">
          {step === 0 && (
            <StepBusinessBasics
              values={values}
              errors={errors}
              set={setField}
            />
          )}
          {step === 1 && (
            <StepFundingDetails
              values={values}
              errors={errors}
              set={setField}
            />
          )}
          {step === 2 && (
            <StepFinancialSnapshot
              values={values}
              errors={errors}
              set={setField}
            />
          )}
          {step === 3 && (
            <StepContactIdentity
              values={values}
              errors={errors}
              set={setField}
            />
          )}
          {step === 4 && <StepReview values={values} goToStep={setStep} />}
        </div>

        {submitError && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {submitError}
          </div>
        )}

        <div className="mt-8 flex items-center justify-between gap-3">
          {step > 0 ? (
            <button
              type="button"
              className="btn-secondary"
              onClick={back}
              disabled={submitting}
            >
              <MoveLeft /> Back
            </button>
          ) : (
            <span />
          )}
          {step < STEPS.length - 1 ? (
            <button type="button" className="btn-primary" onClick={next}>
              Next: {STEPS[step + 1]} <MoveRight />
            </button>
          ) : (
            <button
              type="button"
              className="btn-primary"
              onClick={submit}
              disabled={submitting}
            >
              {submitting ? "Submitting…" : "Submit application"}
            </button>
          )}
        </div>
      </div>

      <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-2xl border border-navy-100 bg-white shadow-card p-6">
          {/* <p className="text-sm font-medium text-navy-500">You’re requesting</p>
          <p className="mt-1 text-3xl font-bold text-navy-900">
            {formatUSD(Number(values.loan_amount) || 0)}
          </p> */}
          {/* <p className="mt-1 text-sm text-navy-500">
            over {values.loan_term} months · {LOAN.apr}% fixed APR
          </p> */}
          <ul className="mt-4 space-y-2 text-sm text-navy-600">
            <li className="flex items-center gap-2">
              <Check /> No collateral required
            </li>
            <li className="flex items-center gap-2">
              <Check /> {formatUSD(0)} upfront fees
            </li>
            <li className="flex items-center gap-2">
              <Check /> Funded within {LOAN.fundingHours} hours
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-navy-100 bg-navy-50 p-5 text-sm text-navy-600">
          <p className="font-medium text-navy-800">🔒 Your data is protected</p>
          <p className="mt-1.5 leading-relaxed">
            Submitted over TLS 1.3 and encrypted at rest with AES-256.
          </p>
        </div>
        {/* <p className="px-1 text-xs text-navy-400">
          Already applied?{" "}
          <Link
            href="/status"
            className="font-medium text-star-600 hover:underline"
          >
            Check your status
          </Link>
          .
        </p> */}
      </aside>
    </div>
  );
}

/* ---------- Steps ---------- */

export interface StepProps {
  values: Values;
  errors: Record<string, string>;
  set: (name: string, value: string) => void;
}
