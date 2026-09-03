import Script from "next/script";
import { site } from "@/lib/site";

// Medição para Google Analytics 4 e Google Ads.
// Os IDs entram por variável de ambiente (na Vercel: Settings > Environment Variables):
//   NEXT_PUBLIC_GA_ID        -> G-XXXXXXXXXX   (GA4)
//   NEXT_PUBLIC_GOOGLE_ADS_ID-> AW-XXXXXXXXX   (Google Ads)
// Enquanto não estiverem definidos, nada é carregado (site segue leve e sem cookies).
//
// Consentimento (LGPD): o estado inicial é NEGADO. Nenhum cookie de medição é
// gravado até a pessoa aceitar no aviso do rodapé — o <CookieConsent /> é quem
// envia o 'consent update'. Personalização de anúncio fica desligada sempre,
// porque o site trata de temas sensíveis (saúde, TEA, público LGBTQIAPN+).

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || site.analytics.ga4;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || site.analytics.googleAds;
  const primaryId = gaId || adsId;

  if (!primaryId) return null;

  return (
    <>
      <Script id="gtag-consent" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'granted',
            security_storage: 'granted',
            wait_for_update: 500
          });
          try {
            var escolha = localStorage.getItem('fm-consent');
            if (escolha === 'aceito') {
              gtag('consent', 'update', {
                ad_storage: 'granted',
                ad_user_data: 'granted',
                analytics_storage: 'granted'
              });
            }
          } catch (e) {}
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          ${gaId ? `gtag('config', '${gaId}', { allow_ad_personalization_signals: false });` : ""}
          ${adsId ? `gtag('config', '${adsId}', { allow_ad_personalization_signals: false });` : ""}
        `}
      </Script>
    </>
  );
}
