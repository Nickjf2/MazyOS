import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { HideOnLanding } from "@/components/layout/HideOnLanding";
import { SchemaMarkup } from "@/components/tracking/SchemaMarkup";
import { Analytics } from "@/components/tracking/Analytics";
import { CookieConsent } from "@/components/tracking/CookieConsent";
import { legalServiceSchema, localBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";

// Títulos. Lora tem contraste moderado entre traço fino e grosso, então
// aguenta tanto um h1 de 60px quanto um título de cartão de 18px sem que as
// hastes finas sumam — que era o problema da Playfair Display nos tamanhos
// menores. As variáveis não citam o nome da fonte de propósito: trocar a face
// no futuro não deve exigir mexer no Tailwind nem no CSS.
const fonteTitulos = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Corpo, botões e interface.
const fonteCorpo = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Advocacia em ${site.city}`,
    template: `%s | ${site.name}`,
  },
  description: site.subPositioning,
  keywords: [
    "advogado Juiz de Fora",
    "advogado plano de saúde Juiz de Fora",
    "advogado direito da saúde Juiz de Fora",
    "advogado inventário Juiz de Fora",
    "advogado família Juiz de Fora",
    "advogada direito da mulher Juiz de Fora",
  ],
  authors: [{ name: site.name }],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fonteTitulos.variable} ${fonteCorpo.variable}`}>
      <body>
        <Analytics />
        <SchemaMarkup schema={[legalServiceSchema(), localBusinessSchema()]} />
        <HideOnLanding>
          <Header />
        </HideOnLanding>
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  );
}
