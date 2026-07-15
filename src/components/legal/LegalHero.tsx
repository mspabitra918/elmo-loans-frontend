interface Props {
  title: string;
  subtitle: string;
}

export default function LegalHero({ title, subtitle }: Props) {
  return (
    <section className="bg-black">
      <div className="container-x py-12 md:py-20 text-center">
        <h1 className="text-4xl font-bold text-white md:text-5xl">{title}</h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
          {subtitle}
        </p>
        {/* <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
          Questions Answered
        </span> */}
        <p className="mt-6  inline-flex rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
          Last Updated: July 2026
        </p>
      </div>
    </section>
  );
}
