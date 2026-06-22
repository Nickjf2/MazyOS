import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { SchemaMarkup } from "@/components/tracking/SchemaMarkup";
import { legalServiceSchema, localBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
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
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <SchemaMarkup schema={[legalServiceSchema(), localBusinessSchema()]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
