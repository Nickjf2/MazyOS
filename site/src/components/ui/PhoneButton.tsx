"use client";

import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

// Clique para ligar. No celular abre o discador; no desktop, o app de chamadas.
// Dispara o evento phone_click para medição de conversão.

interface Props {
  label?: string;
  ctaPosition?: string;
  practiceArea?: string;
  pageType?: string;
  /** "ghost" = botão sobre fundo escuro | "link" = link discreto */
  variant?: "ghost" | "link";
  className?: string;
}

export function PhoneButton({
  label,
  ctaPosition = "body",
  practiceArea,
  pageType,
  variant = "ghost",
  className,
}: Props) {
  const text = label ?? site.whatsappDisplay;

  return (
    <a
      href={`tel:+${site.whatsappNumber}`}
      className={cn(
        variant === "ghost"
          ? "btn-ghost"
          : "inline-flex items-center gap-2 font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline",
        className,
      )}
      onClick={() =>
        trackEvent("phone_click", {
          practice_area: practiceArea,
          cta_position: ctaPosition,
          page_type: pageType,
          button_label: text,
        })
      }
    >
      <Phone className="h-[18px] w-[18px]" aria-hidden />
      {text}
    </a>
  );
}
