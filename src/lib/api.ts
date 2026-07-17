import { getToken } from "./auth";
import { ApplyPayload, ContactsPayload, Loan } from "./type";

export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "https://elmo-loans-backend.vercel.app";

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  // Admin endpoints are guarded by JWT; attach the bearer token when one is
  // present (client-side only — getToken returns null during SSR, which is
  // fine for the public endpoints rendered on the server).
  const token = getToken();
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(init?.headers ?? {}),
    },
    // Status/lookup data must always be fresh.
    cache: "no-store",
  });

  if (!res.ok) {
    let message = `Request failed (${res.status})`;
    try {
      const body = await res.json();
      if (body?.message) {
        message = Array.isArray(body.message)
          ? body.message.join(", ")
          : body.message;
      }
    } catch {
      /* non-JSON error body — keep the default message */
    }
    throw new ApiError(message, res.status);
  }

  return res.json() as Promise<T>;
}

export const api = {
  async createContacts(payload: ContactsPayload) {
    const data = await request(`/contact/create`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    return data;
  },
  // Submit a new loan application. Returns the created loan (with its public
  // application_id and internal UUID).
  async apply(payload: ApplyPayload): Promise<ApplyPayload> {
    const data = await request<{ message: string; loan: ApplyPayload }>(
      "/loans/apply",
      { method: "POST", body: JSON.stringify(payload) },
    );
    return data.loan;
  },
};
