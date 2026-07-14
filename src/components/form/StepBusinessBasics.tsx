import { SelectField, TextField } from "../ui/fields";
import { StepProps } from "./ApplyForm";
import { StepHeading } from "./ui/StepHeading";

const INDUSTRIES = [
  { value: "construction", label: "Construction" },
  { value: "transportation", label: "Transportation & Logistics" },
  { value: "retail", label: "Retail" },
  { value: "restaurant", label: "Restaurant & Food Service" },
  { value: "healthcare", label: "Healthcare" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "professional_services", label: "Professional Services" },
  { value: "technology", label: "Technology" },
  { value: "hospitality", label: "Hospitality" },
  { value: "real_estate", label: "Real Estate" },
  { value: "other", label: "Other" },
];

const TIME_IN_BUSINESS = [
  {
    value: "less_than_3_months",
    label: "Less than 3 months",
  },
  {
    value: "3_6_months",
    label: "3–6 months",
  },
  {
    value: "6_months_1_year",
    label: "6 months–1 year",
  },
  {
    value: "1_2_years",
    label: "1–2 years",
  },
  {
    value: "2_plus_years",
    label: "2+ years",
  },
];

const CANADIAN_PROVINCES = [
  { value: "AB", label: "Alberta" },
  { value: "BC", label: "British Columbia" },
  { value: "MB", label: "Manitoba" },
  { value: "NB", label: "New Brunswick" },
  { value: "NL", label: "Newfoundland and Labrador" },
  { value: "NS", label: "Nova Scotia" },
  { value: "NT", label: "Northwest Territories" },
  { value: "NU", label: "Nunavut" },
  { value: "ON", label: "Ontario" },
  { value: "PE", label: "Prince Edward Island" },
  { value: "QC", label: "Quebec" },
  { value: "SK", label: "Saskatchewan" },
  { value: "YT", label: "Yukon" },
];

export function StepBusinessBasics({ values, errors, set }: StepProps) {
  return (
    <div className="space-y-6">
      <StepHeading
        title="Business Basics"
        sub="Step 1 of 5 — Tell us about your business"
      />

      <TextField
        label="Legal Business Name"
        name="business_name"
        value={values.business_name}
        error={errors.business_name}
        onChange={set}
        placeholder="e.g. Smith's Trucking Inc."
      />

      <SelectField
        label="Industry"
        name="industry"
        value=""
        error={errors.industry}
        onChange={set}
        placeholder="Select your industry"
        options={INDUSTRIES}
        hint="Don't see an exact match? Choose the closest option—it won't affect your eligibility."
      />

      <SelectField
        label="Time in Business"
        name="time_in_business"
        value={values.time_in_business}
        error={errors.time_in_business}
        onChange={set}
        placeholder="Select time in business"
        options={TIME_IN_BUSINESS}
      />

      <SelectField
        label="Province of Operation"
        name="province"
        value={values.province}
        error={errors.province}
        onChange={set}
        placeholder="Select province"
        options={CANADIAN_PROVINCES}
      />
    </div>
  );
}
