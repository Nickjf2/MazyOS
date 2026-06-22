"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink, whatsappAriaLabel } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/tracking";

// Botão flutuante presente em todas as páginas (MASTER §9.3).
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("geral")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={whatsappAriaLabel}
      onClick={() =>
        trackEvent("whatsapp_click", { cta_position: "floating_button" })
      }
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-105 hover:bg-whatsapp-dark sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
