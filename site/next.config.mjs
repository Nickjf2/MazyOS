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
      "connect-src 'self' https://www.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://stats.g.doubleclick.net",
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
    // Preservar URLs antigas já indexadas (ver MASTER doc §8.2)
    return [
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
    ];
  },
};

export default nextConfig;