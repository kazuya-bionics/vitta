import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout/Layout";

// anuncios
import Pixel from "@/lib/Pixel";
import GoogleAnalytics from "@/lib/GoogleAnalytics";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vitta Seguro",
  description: "Protección confiable para servidores públicos y quienes aman",
  openGraph: {
    title: "Vitta Seguro",
    description: "Protección confiable para servidores públicos y quienes aman",
    url: "https://www.vittaseguro.com.mx",
    siteName: "Vitta Seguro",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "https://www.vittaseguro.com.mx/assets/bgHeroSection.jpg",
        width: 1200,
        height: 630,
        alt: "Vitta Seguro",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-mx">
      <Head>
        {/* Forzamos meta con "property" */}
        <meta property="fb:app_id" content="2512341305832879" />
        <meta
          property="og:image"
          content="https://www.vittaseguro.com.mx/assets/bgHeroSection.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Vitta Seguro" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleAnalytics />
        <Pixel />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
