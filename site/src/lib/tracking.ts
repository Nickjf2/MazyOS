"use client";

// Camada fina de tracking (MASTER §22). Eventos via dataLayer/gtag.
// Não personaliza anúncios para dados sensíveis (saúde, LGBTQIA+).

type EventName =
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "form_start"
  | "generate_lead"
  | "faq_open"
  | "cta_click"
  | "view_team";

interface EventParams {
  practice_area?: string;
  cta_position?: string;
  page_type?: string;
  city_target?: string;
  button_label?: string;
  page_slug?: string;
}

export function trackEvent(name: EventName, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };
  const payload = { city_target: "juiz_de_fora", ...params };
  if (typeof w.gtag === "function") {
    w.gtag("event", name, payload);
  } else if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: name, ...payload });
  }
}