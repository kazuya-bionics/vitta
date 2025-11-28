import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout/Layout";

import Pixel from "@/lib/Pixel";
import GoogleAnalytics from "@/lib/GoogleAnalytics";

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
  icons: {
    icon: "/icon.png",       // 👈 detectará tu app/icon.png automáticamente
    apple: "/apple-icon.png" // opcional si tienes este archivo
  },
  openGraph: {
    title: "Vitta Seguro",
    description: "Studio especializado en desarrollo web moderno, aplicaciones inteligentes y soluciones basadas en inteligencia artificial. Creamos plataformas eficientes, seguras y escalables para empresas que buscan innovar.",
    url: "https://www.vittaseguro.com.mx",
    siteName: "Vitta Studio",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "https://www.vittaseguro.com.mx/assets/bgHeroSection.jpg",
        width: 1200,
        height: 630,
        alt: "Vitta Studio",
      },
    ],
  },
  other: {
    "fb:app_id": "2512341305832879",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-mx">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
