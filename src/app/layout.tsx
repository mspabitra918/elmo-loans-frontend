import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BRAND, LOAN } from "../lib/constants";
import { loanProductSchema, organizationSchema } from "../lib/schema";
import ConditionalLayout from "../layout/ConditionalLayout";
import { JsonLd } from "../layout/JsonLd";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${BRAND.domain}`;

export const metadata: Metadata = {
  icons: "/favicon.svg",
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND.name} — Personal Loans up to $10,000, Funded in 24 Hours`,
    template: `%s | ${BRAND.name}`,
  },
  description: `Unsecured personal loans from $2,000 to $10,000 at a fixed ${LOAN.apr}% APR. No collateral, $0 upfront fees, all credit tiers welcome. Funded within 24 hours, nationwide.`,
  keywords: [
    "personal loans",
    "unsecured personal loans",
    "bad credit personal loans",
    "fast personal loans",
    "24 hour funding loan",
    "fixed APR personal loan",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: BRAND.name,
    title: `${BRAND.name} — Personal Loans up to $10,000`,
    description: `Fixed ${LOAN.apr}% APR. No collateral. $0 upfront fees. Funded in 24 hours.`,
    url: SITE_URL,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      {/* Combined into a single body tag */}
      <body className="flex min-h-screen flex-col">
        <JsonLd data={[organizationSchema(), loanProductSchema()]} />
        <ConditionalLayout>{children}</ConditionalLayout>
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
