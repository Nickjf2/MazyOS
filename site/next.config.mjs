/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    // Política de segurança de conteúdo.
    //
    // 'unsafe-inline' em script-src é intencional: o Next injeta scripts inline
    // em toda página, e a alternativa (nonce por requisição via middleware)
    // obrigaria as 34 páginas a virarem dinâmicas, perdendo o cache estático.
    // A troca é consciente — o que a CSP fecha aqui é o resto: nada de <base>
    // sequestrado, nada de plugin, nada de envio de formulário para fora, e
    // nenhuma origem de script além do Google de medição.
    const csp = [
      "default-src 'self'",
      // gtag/GA4/Ads. googleadservices e doubleclick já entram para a conversão
      // do Ads não quebrar quando a campanha subir.
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // As fontes são servidas pelo próprio site (next/font).
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.google.com.br https://googleads.g.doubleclick.net https://maps.gstatic.com https://*.googleapis.com",
      // O GA4 alterna entre vários hosts de coleta conforme a região e a versão
      // do gtag. Faltando um deles, a medição some sem erro visível.
      "connect-src 'self' https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://*.googletagmanager.com https://www.google.com https://www.google.com.br https://*.g.doubleclick.net",
      // Mapa do escritório na página de contato.
      "frame-src https://maps.google.com https://www.google.com https://td.doubleclick.net",
      "frame-ancestors 'self'",
      "form-action 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; ");

    const seguranca = [
      { key: "Content-Security-Policy", value: csp },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value:
          "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
      },
      // Reforça o HSTS da Vercel incluindo subdomínios.
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains",
      },
      { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
      { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
      { key: "X-DNS-Prefetch-Control", value: "on" },
    ];

    return [
      { source: "/:path*", headers: seguranca },
      // A rota de leads nunca pode ser guardada em cache por proxy nenhum.
      {
        source: "/api/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, max-age=0" },
          { key: "X-Robots-Tag", value: "noindex" },
        ],
      },
    ];
  },
  async redirects() {
    // Migração do WordPress/Joomla anteriores (ver MASTER §8.2).
    //
    // URLs levantadas no Wayback Machine e conferidas em produção. Aqui ficam
    // SOMENTE as que têm substituto claro: índice antigo para índice novo,
    // área antiga para a área equivalente, ficha de advogada para a página
    // onde a bio dela passou a viver.
    //
    // Critério deliberado: preservar autoridade NÃO justifica destino
    // irrelevante. Conteúdo removido sem equivalente fica em 404 — é o sinal
    // correto para o Google e honesto para quem chega. Um redirect temático
    // frouxo vira soft 404 e ainda frustra a visita.
    //
    // Em 404 de propósito:
    //   - Serviços encerrados (Trabalhista, Empresarial, Civil, FGTS): mandar
    //     para /areas-de-atuacao seria fingir que ainda atendemos.
    //   - Os 12 posts e as 7 tags do blog antigo: os textos não existem mais.
    //     Se algum for reescrito, aí sim criar o 301 para o artigo novo.
    //   - /feed/ e /comments/feed/: são RSS, não HTML.
    //   - /wp-*, /xmlrpc.php: internas do WordPress.
    //
    // Aguardando decisão (ver auditoria):
    //   - /bethania-senra-e-padua e /ana-carolina-machado-moraes-grimaldi
    //     dependem de confirmação da Dra. Flávia.
    //
    // O Next normaliza a barra final antes de aplicar o redirect, então
    // /pagina/ chega como /pagina e o encadeamento resolve em 2 saltos.
    return [
      // Áreas com equivalente direto no site novo.
      {
        source: "/negativas-do-plano-de-saude",
        destination: "/areas/negativa-plano-saude",
        permanent: true,
      },
      {
        source: "/direito-da-mulher",
        destination: "/areas/direito-da-mulher",
        permanent: true,
      },
      {
        source: "/direito-de-familia-divorcio-alimentos-guarda-adocao-interdicao",
        destination: "/areas/direito-de-familia",
        permanent: true,
      },
      {
        source: "/direito-medico",
        destination: "/areas/direito-da-saude",
        permanent: true,
      },
      {
        source: "/direitos-dos-lgbt",
        destination: "/areas/direitos-lgbtqia",
        permanent: true,
      },
      {
        source: "/direitos-dos-lgbtqia-e-alteracao-de-nome",
        destination: "/areas/direitos-lgbtqia",
        permanent: true,
      },
      // Liberados agora que /areas/direito-do-consumidor existe. Antes o único
      // destino possível era a landing page de campanha, que é noindex —
      // redirecionar URL indexada para página bloqueada joga a autoridade fora.
      {
        source: "/direitos-do-consumidor",
        destination: "/areas/direito-do-consumidor",
        permanent: true,
      },
      {
        source: "/direitos-do-consumidor.html",
        destination: "/areas/direito-do-consumidor",
        permanent: true,
      },
      // A página cobre atraso, cancelamento e bagagem.
      {
        source: "/voos",
        destination: "/areas/direito-do-consumidor",
        permanent: true,
      },

      // Equipe: índices antigos e fichas de quem continua no escritório.
      // As fichas viraram cards na página de equipe — o conteúdo mudou de lugar,
      // não deixou de existir.
      {
        source: "/advogados-em-juiz-de-fora",
        destination: "/equipe",
        permanent: true,
      },
      {
        source: "/nossa-equipe",
        destination: "/equipe",
        permanent: true,
      },
      {
        source: "/nossa-equipe-de-advogados",
        destination: "/equipe",
        permanent: true,
      },
      {
        source: "/flavia-machado",
        destination: "/equipe",
        permanent: true,
      },
      {
        source: "/nossa-equipe/flavia-machado",
        destination: "/equipe",
        permanent: true,
      },
      {
        source: "/marina-de-assis-siqueira-brinati",
        destination: "/equipe",
        permanent: true,
      },
      {
        source: "/nossa-equipe/marina-de-assis-siqueira-brinati",
        destination: "/equipe",
        permanent: true,
      },

      // Páginas do site pré-WordPress: índice antigo para índice novo.
      {
        source: "/quem-somos.html",
        destination: "/sobre-o-escritorio",
        permanent: true,
      },
      {
        source: "/advocacia.html",
        destination: "/sobre-o-escritorio",
        permanent: true,
      },
      {
        source: "/2-uncategorised/1-nossa-empresa.html",
        destination: "/sobre-o-escritorio",
        permanent: true,
      },
      {
        source: "/servicos.html",
        destination: "/areas-de-atuacao",
        permanent: true,
      },
      {
        source: "/contato.html",
        destination: "/contato",
        permanent: true,
      },
      {
        source: "/noticias.html",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/my-blog",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/category/novidades",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;