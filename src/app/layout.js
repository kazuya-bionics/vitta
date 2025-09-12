import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//anuncios 
import Pixel from "@/lib/Pixel";
import GoogleAnalytics from "@/lib/GoogleAnalytics";

//metadata
export const metadata = {
  title: 'Vitta Seguro',
  description: 'Protección confiable para servidores públicos y quienes aman',
  keywords: ['seguro de vida', 'México', 'protección servidores públicos', 'Vitta Seguro'],
  authors: [{ name: 'Vitta', url: 'https://www.vittaseguro.com.mx' }],
  openGraph: {
    title: 'Vitta Seguro',
    description: 'Protección confiable para servidores públicos y quienes aman',
    url: 'https://www.vittaseguro.com.mx',
    siteName: 'Vitta Seguro',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://www.vittaseguro.com.mx/assets/bgHeroSection.jpg',
        width: 1200,
        height: 630,
        alt: 'Vitta Seguro',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-mx">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics/>
        <Pixel/>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
