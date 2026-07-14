export function StepHeading({ title, sub }: { title: string; sub: string }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-star-600">
        {sub}
      </p>
      <h2 className="mt-1 text-2xl font-bold">{title}</h2>
    </div>
  );
}
