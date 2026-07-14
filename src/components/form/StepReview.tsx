import { CheckCircle2, Pencil } from "lucide-react";
import { StepHeading } from "./ui/StepHeading";
import { StepProps, Values } from "./ApplyForm";

type Props = StepProps & {
  goToStep: (step: number) => void;
};

function Row({
  label,
  value,
}: {
  label: string;
  value: string | number | undefined;
}) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-slate-100 py-3 last:border-none">
      <span className="text-sm text-slate-500">{label}</span>

      <span className="text-right font-medium text-slate-900">
        {value || "—"}
      </span>
    </div>
  );
}

function Card({
  title,
  onEdit,
  children,
}: {
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

        <button
          type="button"
          onClick={onEdit}
          className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium hover:bg-slate-50"
        >
          <Pencil className="h-4 w-4" />
          Edit
        </button>
      </div>

      <div className="px-6 py-2">{children}</div>
    </div>
  );
}
type StepReviewProps = {
  values: Values;
  goToStep: (step: number) => void;
};
export function StepReview({ values, goToStep }: StepReviewProps) {
  return (
    <div className="space-y-8">
      <StepHeading
        title="Review Your Application"
        sub="Step 5 of 5 — Please review everything before submitting."
      />

      {/* Business */}
      <Card title="Business Information" onEdit={() => goToStep(0)}>
        <Row label="Business Name" value={values.business_name} />

        <Row label="Industry" value={values.industry} />

        <Row label="Time in Business" value={values.time_in_business} />

        <Row label="Province" value={values.province} />
      </Card>

      {/* Funding */}
      <Card title="Funding Details" onEdit={() => goToStep(1)}>
        <Row
          label="Funding Amount"
          value={`$${Number(values.funding_amount || 0).toLocaleString()}`}
        />

        <Row label="Funding Purpose" value={values.loan_use} />

        <Row label="Funding Timeline" value={values.funding_timeline} />
      </Card>

      {/* Financial */}
      <Card title="Financial Snapshot" onEdit={() => goToStep(2)}>
        <Row label="Monthly Revenue" value={values.monthly_revenue} />

        <Row label="Business Bank" value={values.business_bank} />

        <Row label="Existing Debt" value={values.existing_debt} />
      </Card>

      {/* Contact */}
      <Card title="Contact Information" onEdit={() => goToStep(3)}>
        <Row label="Full Name" value={values.full_name} />

        <Row label="Email" value={values.email} />

        <Row label="Phone" value={values.phone} />
      </Card>

      {/* Confirmation */}
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 text-emerald-600" />

          <div>
            <h3 className="font-semibold text-emerald-900">
              You&apos;re ready to submit
            </h3>

            <p className="mt-1 text-sm text-emerald-800">
              By submitting this application, you confirm that all information
              provided is accurate to the best of your knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
