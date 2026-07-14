import { SelectField } from "../ui/fields";
import { StepHeading } from "./ui/StepHeading";
import { StepProps } from "./ApplyForm";

const MONTHLY_REVENUE = [
  { value: "under_8000", label: "Under $8,000" },
  { value: "8000_25000", label: "$8,000 – $25,000" },
  { value: "25000_75000", label: "$25,000 – $75,000" },
  { value: "75000_plus", label: "$75,000+" },
];

const CANADIAN_BANKS = [
  { value: "rbc", label: "Royal Bank of Canada (RBC)" },
  { value: "td", label: "TD Canada Trust" },
  { value: "scotiabank", label: "Scotiabank" },
  { value: "bmo", label: "Bank of Montreal (BMO)" },
  { value: "cibc", label: "CIBC" },
  { value: "national_bank", label: "National Bank of Canada" },
  { value: "desjardins", label: "Desjardins" },
  { value: "other", label: "Other" },
];

export function StepFinancialSnapshot({ values, errors, set }: StepProps) {
  return (
    <div className="space-y-6">
      <StepHeading
        title="Financial Snapshot"
        sub="Step 3 of 5 — Tell us about your business finances"
      />

      <SelectField
        label="Average Monthly Revenue"
        name="monthly_revenue"
        value={values.monthly_revenue}
        error={errors.monthly_revenue}
        onChange={set}
        placeholder="Select monthly revenue"
        options={MONTHLY_REVENUE}
      />

      <SelectField
        label="Which bank does your business use?"
        name="business_bank"
        value={values.business_bank}
        error={errors.business_bank}
        onChange={set}
        placeholder="Select your bank"
        options={CANADIAN_BANKS}
      />

      {/* Existing Debt */}
      <div>
        <label className="mb-3 block text-sm font-medium text-slate-900">
          Does your business have existing debt?
        </label>

        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => set("existing_debt", "yes")}
            className={`rounded-xl border px-5 py-3 font-medium transition ${
              values.existing_debt === "yes"
                ? "border-emerald-500 bg-emerald-600 text-white"
                : "border-slate-300 bg-white hover:border-primary"
            }`}
          >
            Yes
          </button>

          <button
            type="button"
            onClick={() => set("existing_debt", "no")}
            className={`rounded-xl border px-5 py-3 font-medium transition ${
              values.existing_debt === "no"
                ? "border-emerald-500 bg-emerald-600 text-white"
                : "border-slate-300 bg-white hover:border-primary"
            }`}
          >
            No
          </button>
        </div>

        {errors.existing_debt && (
          <p className="mt-2 text-sm text-red-600">{errors.existing_debt}</p>
        )}
      </div>
    </div>
  );
}
