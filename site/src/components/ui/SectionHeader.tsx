import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  /** texto claro, para uso sobre fundo azul */
  inverted?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  inverted = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">
          {eyebrow}
        </p>
      )}
      <h2 className={cn("text-3xl sm:text-4xl", inverted && "text-white")}>
        {title}
      </h2>
      {align === "center" && <div className="gold-rule mx-auto mt-5" />}
      {subtitle && (
        <p className={cn("lede mt-5", inverted && "text-white/75")}>{subtitle}</p>
      )}
    </div>
  );
}
