import { Check } from "lucide-react";

interface Props {
  title: string;
  items: string[];
  note?: string;
}

export function DocumentChecklist({ title, items, note }: Props) {
  return (
    <div className="mx-auto max-w-3xl rounded-card border border-line bg-soft p-7 sm:p-9">
      <h3 className="font-serif text-2xl text-navy">{title}</h3>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold">
              <Check className="h-3.5 w-3.5" />
            </span>
            <span className="text-ink">{item}</span>
          </li>
        ))}
      </ul>
      {note && <p className="mt-6 text-sm font-medium text-navy">{note}</p>}
    </div>
  );
}
