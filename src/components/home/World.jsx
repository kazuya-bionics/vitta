"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Lazy load del componente Spline para que no se ejecute en SSR
const SplineLazy = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

export const World = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Intersection Observer para cargar Spline solo cuando el componente esté visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Solo cargamos una vez
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen relative flex justify-center items-center bg-[#F2F2F2] px-4 lg:px-8"
    >
      {/* Canvas Spline */}
      <div className="w-full max-w-4xl h-[800px] sm:h-[900px] md:h-[1000px] lg:h-[1200px] flex justify-center items-center">
        {isVisible && (
          <SplineLazy
            scene="https://prod.spline.design/m7LmZnZAPJcl8h4p/scene.splinecode"
            style={{
              width: "100%",
              height: "100%",
              opacity: 0.5,
            }}
          />
        )}
      </div>

      {/* Texto centrado sobre el canvas */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h3 className="text-2xl md:text-4xl font-bold opacity-75">
          PROTEGER Y AMAR ES IGUAL,
        </h3>
        <h3 className="text-2xl md:text-4xl font-bold mt-2 opacity-75">
          DA EL PRIMER PASO Y ASEGURATE HOY
        </h3>
      </div>
    </div>
  );
};
