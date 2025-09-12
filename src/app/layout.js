import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout/Layout";

// Componentes de seguimiento
import Pixel from "@/lib/Pixel";
import GoogleAnalytics from "@/lib/GoogleAnalytics";

// Fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
const metadata = {
  title: "Vitta Seguro",
  description: "Protección confiable para servidores públicos y quienes aman",
  keywords: ["seguro de vida", "México", "protección servidores públicos", "Vitta Seguro"],
  fbAppId: "2512341305832879",
  ogImage: content="/assets/bgHeroSection.jpg",
  url: "https://www.vittaseguro.com.mx",
  locale: "es_MX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <head>
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="geo.region" content="MX" />
        <meta name="geo.placename" content="México" />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Vitta Seguro" />
        <meta property="fb:app_id" content={metadata.fbAppId} />

        {/* Google Analytics modular */}
        <GoogleAnalytics />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Facebook Pixel modular */}
        <Pixel />

        {/* Layout principal */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
