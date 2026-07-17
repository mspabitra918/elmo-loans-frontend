"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { api } from "@/src/lib/api";
import { formatUSD } from "@/src/lib/constants";
import { MoveLeft } from "lucide-react";
import { formattedNumber } from "@/src/components/form/StepContactIdentity";

interface AdminApplication {
  id: string;
  application_id: string;
  business_name: string;
  industry: string;
  time_in_business: string;
  province: string;
  funding_amount: string;
  loan_use: string;
  funding_timeline: string;
  monthly_revenue: string;
  business_bank: string;
  existing_debt: string;
  full_name: string;
  email: string;
  phone: string;
  status: string;
  ip_address: string;
  createdAt: string;
  updatedAt: string;
}
function formatDate(value?: string) {
  if (!value) return "—";
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? "—"
    : date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
}
export const timeInBusinessLabels: Record<string, string> = {
  less_than_3_months: "Less than 3 Months",
  "3_6_months": "3–6 Months",
  "6_months_1_year": "6 Months – 1 Year",
  "1_2_years": "1–2 Years",
  "2_plus_years": "2+ Years",
};

export const monthlyRevenueLabels: Record<string, string> = {
  under_8000: "Under $8,000",
  "8000_25000": "$8,000 – $25,000",
  "25000_75000": "$25,000 – $75,000",
  "75000_plus": "$75,000+",
};

export const fundingTimelineLabels: Record<string, string> = {
  asap: "ASAP",
  within_week: "Within a Week",
  flexible: "Flexible",
};

export default function ApplicationDetailsPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const [application, setApplication] = useState<AdminApplication | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchApplication = async () => {
      try {
        const data = await api.getApplication(id);
        setApplication(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, [id]);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (!application) {
    return <div className="p-6">Application not found.</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <div
        onClick={() => router.back()}
        className="rounded bg-gray-50 cursor-pointer hover:bg-gray-200 w-fit px-4 mb-5"
      >
        <MoveLeft />
      </div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Application</p>
          <h1 className="text-3xl font-bold text-slate-900">
            #{application.application_id}
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Submitted {formatDate(application.createdAt)}
          </p>
        </div>

        <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
          APPLICATION SUBMITTED
        </span>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Requested Funding</p>
          <h2 className="mt-2 text-4xl font-bold text-blue-600">
            {formatUSD(Number(application.funding_amount))}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Monthly Revenue</p>
          <h2 className="mt-2 text-2xl font-semibold">
            {monthlyRevenueLabels[application.monthly_revenue]}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Funding Timeline</p>
          <h2 className="mt-2 text-2xl font-semibold">
            {fundingTimelineLabels[application.funding_timeline]}
          </h2>
        </div>
      </div>

      {/* Details */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Applicant */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="mb-5 text-lg font-bold">👤 Applicant</h3>

          <Info label="Full Name" value={application.full_name} />
          <Info label="Email" value={application.email} />
          <Info label="Phone" value={formattedNumber(application.phone)} />
          <Info label="Province" value={application.province} />
        </div>

        {/* Business */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="mb-5 text-lg font-bold">🏢 Business</h3>

          <Info label="Business Name" value={application.business_name} />
          <Info label="Industry" value={application.industry} />
          <Info
            label="Time in Business"
            value={timeInBusinessLabels[application.time_in_business]}
          />
          <Info label="Business Bank" value={application.business_bank} />
        </div>

        {/* Loan */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="mb-5 text-lg font-bold">💰 Loan</h3>

          <Info label="Purpose" value={application.loan_use} />
          <Info label="Existing Debt" value={application.existing_debt} />
          <Info
            label="Timeline"
            value={fundingTimelineLabels[application.funding_timeline]}
          />
        </div>

        {/* Metadata */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="mb-5 text-lg font-bold">📄 Metadata</h3>

          <Info label="Application ID" value={application.application_id} />
          <Info label="UUID" value={application.id} />
          <Info label="IP Address" value={application.ip_address} />
          <Info label="Created" value={formatDate(application.createdAt)} />
          <Info label="Updated" value={formatDate(application.updatedAt)} />
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value?: string }) {
  return (
    <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="font-medium text-slate-900">{value || "-"}</span>
    </div>
  );
}
