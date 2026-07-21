import Script from "next/script";
import { site } from "@/lib/site";

// Medição para Google Analytics 4 e Google Ads.
// Os IDs entram por variável de ambiente (na Vercel: Settings > Environment Variables):
//   NEXT_PUBLIC_GA_ID        -> G-XXXXXXXXXX   (GA4)
//   NEXT_PUBLIC_GOOGLE_ADS_ID-> AW-XXXXXXXXX   (Google Ads)
// Enquanto não estiverem definidos, nada é carregado (site segue leve e sem cookies).

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || site.analytics.ga4;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || site.analytics.googleAds;
  const primaryId = gaId || adsId;

  if (!primaryId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${gaId ? `gtag('config', '${gaId}');` : ""}
          ${adsId ? `gtag('config', '${adsId}');` : ""}
        `}
      </Script>
    </>
  );
}
