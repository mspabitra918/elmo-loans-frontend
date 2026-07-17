"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { api, DEFAULT_PAGE_SIZE } from "@/src/lib/api";
import type { AdminMessage } from "@/src/lib/type";
import { useDebounced } from "@/src/lib/useDebounced";
import { Pagination, SearchInput } from "@/src/components/admin/DataToolbar";
import { formatDateTime } from "@/src/lib/constants";

// function formatDateTime(value?: string) {
//   if (!value) return "—";
//   const date = new Date(value);
//   return Number.isNaN(date.getTime())
//     ? "—"
//     : date.toLocaleString(undefined, {
//         year: "numeric",
//         month: "short",
//         day: "numeric",
//         hour: "numeric",
//         minute: "2-digit",
//       });
// }

export default function AdminMessagesPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState<AdminMessage[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const debouncedQuery = useDebounced(query);

  useEffect(() => {
    setPage(1);
  }, [debouncedQuery]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    api
      .getMessages({ q: debouncedQuery, page, limit: DEFAULT_PAGE_SIZE })
      .then((data) => {
        if (cancelled) return;
        setRows(data.items);
        setTotal(data.total);
        setError(null);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(
          err instanceof Error ? err.message : "Could not load messages",
        );
        setRows([]);
        setTotal(0);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [debouncedQuery, page]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-navy-900">Messages</h1>
          <p className="mt-1 text-sm text-navy-700">
            Enquiries submitted through the contact form.
          </p>
        </div>
        <SearchInput
          value={query}
          onChange={setQuery}
          placeholder="Search name, email, phone, text…"
        />
      </div>

      {error && (
        <p
          role="alert"
          className="mt-6 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700"
        >
          {error}
        </p>
      )}

      <div className="mt-6 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-lift">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-navy-100 bg-navy-50/60">
              <tr className="text-navy-700">
                <th className="px-4 py-3 font-medium">From</th>
                <th className="px-4 py-3 font-medium">Message</th>
                <th className="px-4 py-3 font-medium">Received</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={3} className="px-4 py-12 text-center">
                    <Loader2
                      className="mx-auto size-5 animate-spin text-navy-300"
                      aria-label="Loading"
                    />
                  </td>
                </tr>
              ) : rows.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-12 text-center text-navy-700"
                  >
                    {debouncedQuery
                      ? `No messages match “${debouncedQuery}”.`
                      : "No messages yet."}
                  </td>
                </tr>
              ) : (
                rows.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-navy-100 last:border-0 align-top hover:bg-navy-50/50"
                  >
                    <td className="px-4 py-3">
                      <div className="font-medium text-navy-900">
                        {row.full_name}
                      </div>
                      <div className="text-xs text-navy-700">{row.email}</div>
                      <div className="text-xs text-navy-700">{row.number}</div>
                    </td>
                    <td className="max-w-md px-4 py-3 text-navy-800">
                      <p className="whitespace-pre-wrap">{row.message}</p>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-navy-700">
                      {formatDateTime(row.created_at)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <Pagination
          page={page}
          limit={DEFAULT_PAGE_SIZE}
          total={total}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
