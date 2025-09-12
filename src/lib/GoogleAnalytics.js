'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const GA_MEASUREMENT_ID = 'G-SQYT1Y8PDJ';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const [isMexico, setIsMexico] = useState(false);

  // Detectar país del usuario (geolocalización por IP)
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          if (data.country_name === 'Mexico') {
            setIsMexico(true);
          }
        })
        .catch(err => console.error('Error geolocalización:', err));
    }
  }, []);

  // Registrar page_view solo si el usuario está en México
  useEffect(() => {
    if (isMexico && typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_MEASUREMENT_ID, { page_path: pathname });
    }
  }, [pathname, isMexico]);

  // Scripts solo en producción
  if (process.env.NODE_ENV !== 'production') return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
          `,
        }}
      />
    </>
  );
}
