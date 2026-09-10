"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink, whatsappAriaLabel } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/tracking";

// Botão flutuante presente em todas as páginas (MASTER §9.3).
//
// O anel pulsante é uma camada separada atrás do botão: assim quem tiver
// "reduzir movimento" ligado no sistema vê o botão parado, sem perder nada.

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
      className="group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl ring-4 ring-whatsapp/20 transition-transform hover:scale-105 hover:bg-whatsapp-dark sm:h-[72px] sm:w-[72px]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-whatsapp motion-safe:animate-ping-lento"
      />
      <MessageCircle className="relative h-8 w-8 sm:h-9 sm:w-9" aria-hidden />
    </a>
  );
}
