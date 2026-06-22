"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

interface Props {
  context?: string;
  label?: string;
  ctaPosition?: string;
  practiceArea?: string;
  pageType?: string;
  variant?: "whatsapp" | "ghost";
  className?: string;
}

export function WhatsAppButton({
  context = "geral",
  label = "Falar com a equipe",
  ctaPosition = "body",
  practiceArea,
  pageType,
  variant = "whatsapp",
  className,
}: Props) {
  return (
    <a
      href={whatsappLink(context)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(variant === "ghost" ? "btn-ghost" : "btn-whatsapp", className)}
      onClick={() =>
        trackEvent("whatsapp_click", {
          practice_area: practiceArea,
          cta_position: ctaPosition,
          page_type: pageType,
          button_label: label,
        })
      }
    >
      <MessageCircle className="h-[18px] w-[18px]" aria-hidden />
      {label}
    </a>
  );
}
