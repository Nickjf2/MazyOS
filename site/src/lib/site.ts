// Configuração central do site — fonte única de verdade institucional.
// Ver MASTER §2, §9, §20.

export const site = {
  name: "Flávia Machado Advogados Associados",
  shortName: "Flávia Machado Advocacia",
  url: "https://www.advogadojuizdefora.com.br",
  domain: "advogadojuizdefora.com.br",
  positioning: "Orientação jurídica clara para decisões urgentes e delicadas.",
  subPositioning:
    "Atendimento em Juiz de Fora e online nas áreas de Direito da Saúde, Família, Sucessões, Direito da Mulher e Direitos LGBTQIAPN+.",
  city: "Juiz de Fora",
  region: "MG",
  // Logos em /public. Enquanto o arquivo não existir, o header mostra o wordmark.
  logo: "/logo-horizontal.png", // logo horizontal (navy) — usada no header branco
  logoMono: "/logo-fm.png", // monograma FM
  // Número usado nos botões de WhatsApp do site (Dra. Flávia)
  whatsappNumber: "5532999885341",
  whatsappDisplay: "(32) 99988-5341",
  email: "flaviaadv@flaviamachado.com.br",
  // Contato direto das advogadas (exibido onde aparecem formas de contato)
  flavia: {
    name: "Dra. Flávia Machado",
    whatsappNumber: "5532999885341",
    whatsappDisplay: "(32) 99988-5341",
    email: "flaviaadv@flaviamachado.com.br",
  },
  marina: {
    name: "Dra. Marina Brinati",
    whatsappNumber: "5532984575885",
    whatsappDisplay: "(32) 98457-5885",
    email: "marinabrinati@hotmail.com",
  },
  instagram: "https://instagram.com/flaviamachadoadvocacia", // confirmar handle
  address: {
    street: "Av. Barão do Rio Branco, 2555 - sala 1305",
    district: "Centro",
    city: "Juiz de Fora",
    state: "MG",
    postalCode: "36010-011",
    country: "BR",
  },
  // Endereço completo em uma linha (para exibição) e links do Google Maps.
  addressFull:
    "Av. Barão do Rio Branco, 2555 - sala 1305 - Centro, Juiz de Fora - MG, 36010-011",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Fl%C3%A1via+Machado+Advogados+Associados+Av.+Bar%C3%A3o+do+Rio+Branco+2555+Juiz+de+Fora",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Fl%C3%A1via+Machado+Advogados+Associados,+Av.+Bar%C3%A3o+do+Rio+Branco,+2555,+Centro,+Juiz+de+Fora,+MG&output=embed&hl=pt-BR&z=16",
  hours: "Segunda a sexta, das 9h às 18h",
  // Medição. Estes IDs são públicos (aparecem no código da página).
  analytics: {
    ga4: "G-13MLE1G8LQ",
    googleAds: "", // AW-XXXXXXXXX — preencher quando a conversão do Ads for criada
  },
  trustBar:
    "Atendimento em Juiz de Fora e online • contato sigiloso • orientação jurídica clara",
  compliance:
    "As informações deste site possuem caráter exclusivamente informativo e não substituem a análise individual do caso por profissional habilitado.",
} as const;

// Para exibir as fotos: coloque os arquivos em /public/equipe/ e preencha "photo".
//   - Dra. Flávia (loira):  /public/equipe/flavia.jpg
//   - Dra. Marina (morena): /public/equipe/marina-vermelho.jpg
// Enquanto "photo" estiver vazio, o card mostra um avatar elegante de fallback.
export const team = [
  {
    name: "Dra. Flávia Vieira Machado",
    oab: "OAB/MG 57.701",
    experience: "Mais de 30 anos de atuação",
    bio: "Advogada com ampla experiência em demandas sensíveis, Direito da Saúde, Família, Sucessões, Direito da Mulher e causas de repercussão pública.",
    photo: "/equipe/flavia.jpg", // Dra. Flávia (loira)
  },
  {
    name: "Dra. Marina de Assis Siqueira Brinati",
    oab: "OAB/MG 167.831",
    experience: "Mais de 10 anos de experiência",
    bio: "Advogada com atuação em Direito da Saúde e ações judiciais relacionadas a tratamentos, cirurgias, medicamentos e terapias negadas.",
    photo: "/equipe/marina-vermelho-2.jpg", // Dra. Marina (morena)
  },
] as const;

export const mainNav = [
  { label: "Início", href: "/" },
  { label: "Saúde", href: "/areas/direito-da-saude" },
  { label: "Família", href: "/areas/direito-de-familia" },
  { label: "Sucessões", href: "/areas/inventario" },
  { label: "Mulher", href: "/areas/direito-da-mulher" },
  { label: "LGBTQIAPN+", href: "/areas/direitos-lgbtqia" },
  { label: "Mediação", href: "/mediacao" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
] as const;