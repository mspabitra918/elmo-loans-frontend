"use client";

import { SelectField } from "../ui/fields";
import { StepHeading } from "./ui/StepHeading";
import { StepProps } from "./ApplyForm";

const LOAN_USES = [
  { value: "working_capital", label: "Working Capital" },
  { value: "payroll", label: "Payroll" },
  { value: "inventory", label: "Inventory" },
  { value: "equipment", label: "Equipment Purchase" },
  { value: "expansion", label: "Business Expansion" },
  { value: "marketing", label: "Marketing & Advertising" },
  { value: "cash_flow", label: "Cash Flow" },
  { value: "renovation", label: "Renovation" },
  { value: "debt_refinance", label: "Debt Consolidation / Refinance" },
  { value: "other", label: "Other" },
];

const FUNDING_TIMELINE = [
  { value: "asap", label: "As soon as possible" },
  { value: "within_week", label: "Within a week" },
  { value: "flexible", label: "I'm flexible" },
];

const MIN = 5000;
const MAX = 250000;

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(amount);

export function StepFundingDetails({ values, errors, set }: StepProps) {
  const amount = Number(values.funding_amount || MIN);

  return (
    <div className="space-y-8">
      <StepHeading
        title="Funding Details"
        sub="Step 2 of 5 — Tell us about the funding you need"
      />

      {/* Funding Amount */}
      <div>
        <label className="mb-3 block text-sm font-medium text-slate-900">
          How much funding do you need?
        </label>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-center">
            <p className="text-sm text-slate-500">Requested Amount</p>

            <h2 className="mt-2 text-4xl font-bold text-primary">
              {formatCurrency(amount)}
            </h2>
          </div>

          <input
            type="range"
            min={MIN}
            max={MAX}
            step={5000}
            value={amount}
            onChange={(e) => set("funding_amount", e.target.value)}
            className="mt-8 h-2 w-full cursor-pointer accent-emerald-600"
          />

          <div className="mt-2 flex justify-between text-sm text-slate-500">
            <span>$5K</span>
            <span>$250K</span>
          </div>
        </div>
      </div>

      <SelectField
        label="What's this funding for?"
        name="loan_use"
        value={values.loan_use}
        error={errors.loan_use}
        onChange={set}
        placeholder="Select a purpose"
        options={LOAN_USES}
      />

      <SelectField
        label="How soon do you need it?"
        name="funding_timeline"
        value={values.funding_timeline}
        error={errors.funding_timeline}
        onChange={set}
        placeholder="Select a timeline"
        options={FUNDING_TIMELINE}
      />
    </div>
  );
}
