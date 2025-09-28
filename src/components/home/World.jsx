"use client";

import Spline from '@splinetool/react-spline';

export const World = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      {/* Canvas Spline de fondo con opacidad */}
      <div className="absolute inset-0 opacity-50 flex justify-center items-center">
        <Spline
          styles={{
            width: "100%",
            height: "100%",
          }}
          scene="https://prod.spline.design/m7LmZnZAPJcl8h4p/scene.splinecode"
        />
      </div>

      {/* Texto centrado sobre el canvas con opacidad */}
      <div className="relative text-center opacity-60 md:opacity-60 px-4">
        <h3 className="text-2xl md:text-4xl font-bold">
          PROTEGER Y AMAR ES IGUAL,
        </h3>
        <h3 className="text-2xl md:text-4xl font-bold mt-2">
          DA EL PRIMER PASO Y ASEGURATE HOY
        </h3>
      </div>
    </div>
  );
};
