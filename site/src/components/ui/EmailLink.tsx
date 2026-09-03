"use client";

import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";

// Link de e-mail que registra o clique. Existe porque o rodapé e a página de
// contato são server components e não podem pendurar onClick direto.

interface Props {
  email: string;
  label?: string;
  ctaPosition?: string;
  pageType?: string;
  className?: string;
}

export function EmailLink({
  email,
  label,
  ctaPosition,
  pageType,
  className,
}: Props) {
  return (
    <a
      href={`mailto:${email}`}
      className={cn("hover:text-brand-gold", className)}
      onClick={() =>
        trackEvent("email_click", {
          cta_position: ctaPosition,
          page_type: pageType,
          button_label: email,
        })
      }
    >
      {label ?? email}
    </a>
  );
}
