interface Props {
  steps: string[];
  note?: string;
}

export function HowItWorksSteps({ steps, note }: Props) {
  return (
    <div className="mx-auto max-w-4xl">
      <ol className="grid gap-5 sm:grid-cols-2">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-4 rounded-card border border-line bg-white p-5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-sm font-semibold text-white">
              {i + 1}
            </span>
            <span className="pt-1.5 text-ink">{step}</span>
          </li>
        ))}
      </ol>
      {note && (
        <p className="mt-6 rounded-card bg-soft p-5 text-center leading-relaxed text-muted">
          {note}
        </p>
      )}
    </div>
  );
}
