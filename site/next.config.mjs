/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
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