import type { Metadata } from "next";
import { site } from "./site";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  /** título já completo, sem sufixo do escritório */
  rawTitle?: boolean;
  /** landing pages de campanha ficam fora da busca orgânica (só tráfego pago) */
  noindex?: boolean;
}

export function pageMeta({
  title,
  description,
  path,
  rawTitle,
  noindex,
}: PageMetaInput): Metadata {
  const fullTitle = rawTitle ? title : `${title} | ${site.name}`;
  const url = `${site.url}${path}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}