import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  text?: string;
  href: string;
  cta?: string;
  icon?: LucideIcon;
}

export function PracticeCard({ title, text, href, cta = "Saiba mais", icon: Icon }: Props) {
  return (
    <Link href={href} className="card-hover group flex h-full flex-col">
      {Icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-navy transition-colors group-hover:bg-navy group-hover:text-white">
          <Icon className="h-6 w-6" aria-hidden />
        </div>
      )}
      <h3 className="font-serif text-xl text-navy">{title}</h3>
      {text && <p className="mt-3 flex-1 leading-relaxed text-muted">{text}</p>}
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-brand-gold">
        {cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
