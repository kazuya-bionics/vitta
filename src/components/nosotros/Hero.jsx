import React from 'react'
import Spline from "@splinetool/react-spline/next";
import { Button } from '../home';

export const Hero = () => {
  return (
    <div className="h-screen flex flex-col gap-y-4 justify-center items-center relative overflow-hidden">
        
        <div className="absolute inset-0 pointer-events-none">
          <Spline
            scene="https://prod.spline.design/6KVndaDY-gWauCS0/scene.splinecode" 
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        {/* ✨ Contenido encima */}
        <div className="relative flex flex-col items-center justify-center gap-y-4 p-8 text-center">
          <h3 className="text-3xl text-rose-400 mix-blend-difference md:text-6xl font-bold uppercase">
            ¿Por qué Vitta es lo mejor para ti?
          </h3>
          <p className="text-sm mix-blend-exclusion text-white max-w-lg">
            Vitta está comprometido con una política justa y transparente. Mira todo lo que Vitta tiene para ti.
          </p>
          <Button
            mensaje=""
            soyPublico={true}
            styles="p-2 text-white text-sm flex justify-center items-center border-white hover:border-white/75 bg-black rounded-[45px] border-2 w-[120px]"
          >
            Cotiza aquí
          </Button>
        </div>
      </div>
  )
}
