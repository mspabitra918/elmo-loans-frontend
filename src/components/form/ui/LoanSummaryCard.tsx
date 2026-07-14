// Repayment preview shown on the final review step so the borrower sees exactly
// what they'll owe — monthly payment, total interest, and the first/last due

import { LOAN } from "../../../lib/constants";
import { SummaryItem } from "./SummaryItem";

// dates — before submitting. Hidden until a valid amount + term are chosen.
export function LoanSummaryCard({
  amount,
  term,
}: {
  amount: number;
  term: number;
}) {
  if (!amount || !term) {
    return (
      <div className="rounded-2xl border border-navy-100 bg-white p-5 text-sm text-navy-500">
        Choose a loan amount and term in Step 1 to see your repayment summary.
      </div>
    );
  }

  //   const summary = computeLoanSummary(amount, term, LOAN.apr);

  return (
    <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white">
      <div className="border-b border-navy-100 bg-navy-50 px-5 py-4">
        <p className="text-sm font-semibold uppercase tracking-wider text-star-600">
          Your repayment summary
        </p>
        <p className="mt-1 text-3xl font-bold text-navy-900">
          {/* {formatUSDCents(summary.monthlyPayment)} */}
          <span className="ml-1 text-base font-medium text-navy-500">
            / month
          </span>
        </p>
        <p className="mt-1 text-sm text-navy-500">
          {term} monthly payments · {LOAN.apr}% fixed APR
        </p>
      </div>
      <dl className="grid grid-cols-2 gap-x-4 gap-y-4 p-5 text-sm">
        {/* <SummaryItem label="Loan amount" value={formatUSD(summary.principal)} /> */}
        <SummaryItem label="Loan term" value={`${term} months`} />
        {/* <SummaryItem
          label="Total interest"
          value={formatUSDCents(summary.totalInterest)}
        />
        <SummaryItem
          label="Total to repay"
          value={formatUSDCents(summary.totalPayment)}
        />
        <SummaryItem
          label="First payment"
          value={formatPaymentDate(summary.firstPaymentDate)}
        />
        <SummaryItem
          label="Final payment"
          value={formatPaymentDate(summary.lastPaymentDate)} */}
        {/* /> */}
      </dl>
      <p className="border-t border-navy-100 px-5 py-3 text-xs leading-relaxed text-navy-400">
        Payments are due on the 10th of each month. Your first installment is
        the 10th of next month. This is an estimate based on a {LOAN.apr}% fixed
        APR; your final terms are confirmed in your loan agreement.
      </p>
    </div>
  );
}
