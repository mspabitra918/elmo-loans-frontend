import type { Metadata } from "next";

export function createMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    metadataBase: new URL("https://www.elmoloans.ca"),

    alternates: {
      canonical: "/",
    },

    openGraph: {
      title,
      description,
      url: "https://www.elmoloans.ca",
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
