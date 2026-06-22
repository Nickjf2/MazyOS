import { site, team } from "./site";

// JSON-LD helpers (MASTER §23). Renderizados via <SchemaMarkup />.

export function legalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.name,
    url: site.url,
    telephone: `+${site.whatsappNumber}`,
    email: site.email,
    areaServed: ["Juiz de Fora", "Zona da Mata", "Minas Gerais", "Brasil"],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    founder: team.map((t) => ({ "@type": "Person", name: t.name })),
    knowsAbout: [
      "Direito da Saúde",
      "Plano de Saúde",
      "Inventário e Sucessões",
      "Direito de Família",
      "Direito da Mulher",
      "Direitos LGBTQIA+",
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: site.name,
    image: `${site.url}/og-default.jpg`,
    url: site.url,
    telephone: `+${site.whatsappNumber}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    openingHours: "Mo-Fr 08:00-18:00",
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}