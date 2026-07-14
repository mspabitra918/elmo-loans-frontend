export function SummaryItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-xs font-medium uppercase tracking-wide text-navy-400">
        {label}
      </dt>
      <dd className="text-base font-semibold text-navy-900">{value}</dd>
    </div>
  );
}
