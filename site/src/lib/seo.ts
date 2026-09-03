import type { Metadata } from "next";
import { site } from "./site";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  /** título já escrito por inteiro — o nome do escritório não é acrescentado */
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
  const ogImage = {
    url: site.ogImage,
    width: 1200,
    height: 630,
    alt: site.name,
  };
  return {
    // "absolute" impede que o template de título do layout acrescente o nome do
    // escritório de novo — antes disso, páginas como /contato e /blog saíam com
    // o sufixo duplicado no resultado de busca.
    title: { absolute: fullTitle },
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
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [site.ogImage],
    },
  };
}