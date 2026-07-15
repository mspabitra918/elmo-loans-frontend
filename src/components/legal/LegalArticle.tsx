import { ReactNode } from "react";

export interface LegalDocSection {
  /** Stable anchor id used by the table of contents and deep links. */
  id: string;
  /** Section heading shown next to its number badge and in the TOC. */
  title: string;
  /** Section body — plain prose, lists, cards, etc. */
  body: ReactNode;
}

interface LegalArticleProps {
  /** Lead paragraph shown above the numbered sections. */
  intro: ReactNode;
  sections: LegalDocSection[];
}

/**
 * Shared layout for the site's legal documents (Privacy, Terms, Cookies,
 * Accessibility). Renders a sticky "on this page" table of contents beside
 * numbered, anchor-linked sections so long policies stay navigable.
 */
export default function LegalArticle({ intro, sections }: LegalArticleProps) {
  return (
    <section className="container-x py-12 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">
        {/* Table of contents */}
        <aside className="hidden lg:block">
          <nav
            aria-label="On this page"
            className="sticky top-24 rounded-2xl border border-navy-100 bg-navy-50/60 p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-navy-700">
              On this page
            </p>
            <ol className="mt-4 space-y-2.5 text-sm">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex gap-2 text-navy-700 transition hover:text-emerald-700"
                  >
                    <span className="text-navy-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Document body */}
        <article className="max-w-3xl">
          <p className="text-lg leading-relaxed text-navy-800">{intro}</p>

          <div className="mt-10 space-y-12">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-t border-navy-100 pt-8 first:border-0 first:pt-0"
              >
                <h2 className="flex items-center gap-3 text-xl font-bold text-black md:text-2xl">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <div className="legal-prose mt-4 text-navy-800">
                  {section.body}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

interface ContactCardProps {
  heading?: string;
  email: string;
  phone?: string;
  addressLines?: string[];
}

/** Branded contact block reused at the end of each legal document. */
export function LegalContactCard({
  heading = "Contact Information",
  email,
  phone,
  addressLines,
}: ContactCardProps) {
  return (
    <div className="mt-6 rounded-2xl border border-navy-100 bg-navy-50/60 p-6">
      <h3 className="text-base font-semibold text-black">{heading}</h3>
      <dl className="mt-4 space-y-3 text-sm text-navy-800">
        <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
          <dt className="font-semibold text-black">Email:</dt>
          <dd>
            <a
              href={`mailto:${email}`}
              className="text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
            >
              {email}
            </a>
          </dd>
        </div>
        {phone && (
          <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
            <dt className="font-semibold text-black">Phone:</dt>
            <dd>{phone}</dd>
          </div>
        )}
        {addressLines && addressLines.length > 0 && (
          <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
            <dt className="font-semibold text-black">Address:</dt>
            <dd>
              {addressLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}
