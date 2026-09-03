"use client";

// Camada fina de tracking (MASTER §22). Eventos via dataLayer/gtag.
// Não personaliza anúncios para dados sensíveis (saúde, LGBTQIAPN+).
//
// Cada evento vai para o GA4. Os que representam um contato de verdade também
// disparam a conversão correspondente no Google Ads, quando os rótulos
// estiverem preenchidos em site.analytics.adsLabels.
//
// Importante: as ações do Ads são nativas (gtag). NÃO importar essas mesmas
// conversões do GA4 na conta do Ads — contaria duas vezes.

import { site } from "./site";

type EventName =
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "form_start"
  | "generate_lead"
  | "faq_open";

interface EventParams {
  practice_area?: string;
  cta_position?: string;
  page_type?: string;
  city_target?: string;
  button_label?: string;
  page_slug?: string;
}

// Qual rótulo de conversão do Ads corresponde a cada evento.
// Eventos ausentes daqui existem só para análise no GA4.
const conversaoDoEvento: Partial<Record<EventName, keyof typeof site.analytics.adsLabels>> = {
  generate_lead: "formulario",
  whatsapp_click: "whatsapp",
  phone_click: "telefone",
  form_start: "inicioFormulario",
};

// Uma conversão por evento por carregamento de página. A contagem "Uma" na
// conta do Ads já protege, mas evitar o disparo repetido na origem mantém o
// relatório limpo — o botão flutuante de WhatsApp costuma receber vários
// cliques da mesma pessoa.
const jaEnviado = new Set<string>();

function enviarConversaoAds(name: EventName) {
  const id = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || site.analytics.googleAds;
  if (!id) return;

  const chave = conversaoDoEvento[name];
  if (!chave) return;

  const label = site.analytics.adsLabels[chave];
  if (!label) return;

  if (jaEnviado.has(name)) return;
  jaEnviado.add(name);

  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag !== "function") return;
  w.gtag("event", "conversion", { send_to: `${id}/${label}` });
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
  enviarConversaoAds(name);
}
