"use client";

import { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

export const World = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect(); // Cargar solo una vez
        }
      },
      { threshold: 0.3 } // Cargar cuando al menos 30% sea visible
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen flex justify-center items-center bg-[#F2F2F2] px-4 lg:px-8"
    >
      {/* Canvas Spline */}
      <div className="relative w-full max-w-4xl h-[400px] sm:h-[600px] md:h-[800px] lg:h-[1000px] flex justify-center items-center">
        {isVisible && (
          <Spline
            scene="https://prod.spline.design/cbj0E6ErjRkv7DoV/scene.splinecode"
            style={{ width: "100%", height: "100%", opacity: 0.5 }}
          />
        )}
      </div>

      {/* Texto centrado */}
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
