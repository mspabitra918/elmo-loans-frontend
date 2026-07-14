import type { Metadata } from "next";

const SITE_URL = "https://www.elmoloans.ca";

export function createMetadata(
  title: string,
  description: string,
  path = "/"
): Metadata {
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),

    alternates: {
      canonical: path,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Elmo Loans",
      locale: "en_CA",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}
