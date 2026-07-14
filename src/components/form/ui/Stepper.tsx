export const STEPS = [
  "Business Info",
  "Funding Details",
  "Financials",
  "Contact Info",
  "Review",
];
export function Stepper({ step }: { step: number }) {
  return (
    <ol className="flex items-center">
      {STEPS.map((label, i) => {
        const done = i < step;
        const active = i === step;
        return (
          <li key={label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center">
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition ${
                  done
                    ? "bg-navy-900 text-white"
                    : active
                      ? "bg-emerald-600 text-white"
                      : "bg-navy-100 text-navy-400"
                }`}
              >
                {done ? "✓" : i + 1}
              </span>
              <span
                className={`mt-1.5 hidden text-xs sm:block ${active ? "font-semibold text-navy-900" : "text-navy-400"}`}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <span
                className={`mx-1 h-0.5 flex-1 ${done ? "bg-navy-900" : "bg-navy-100"}`}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
