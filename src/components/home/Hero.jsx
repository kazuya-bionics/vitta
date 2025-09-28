'use client';

import Spline from '@splinetool/react-spline';
import { Button } from './Button';

export const Hero = () => {
  return (
    <div className="w-full min-h-screen relative bg-[#F2F2F2] flex flex-col lg:flex-row items-center px-4 lg:px-8 pt-8 lg:py-0">
      
      {/* Texto */}
      <div className="w-full h-screen lg:w-1/2 z-10 pr-0 lg:pr-8 flex flex-col justify-center gap-y-4">
        <div className="border-2 border-black rounded-full text-xs sm:text-sm p-2 sm:w-52 mb-2 text-center lg:text-left mx-auto lg:mx-0">
          Proteger también es amar
        </div>

        <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center lg:text-left">
          <h3>¿TU <span className="text-[var(--color-accent)]">ASESOR</span> NO</h3>
          <h3>ESTÁ?</h3>
        </div>

        <div className="opacity-75 mb-2 text-center lg:text-left text-sm sm:text-base">
          <p>Contacta a nuestros asesores especializados en</p>
          <p>servidores públicos y conoce la seguridad de un</p>
          <p>trabajo bien hecho</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-x-4 justify-center lg:justify-start">
          <Button
            styles="bg-[var(--color-accent)] rounded-full text-sm text-white p-2 w-full sm:w-40"
            soyPublico={true}
          >
            Soy servidor público
          </Button>
          <Button
            styles="bg-[var(--color-accent)] rounded-full text-sm text-white p-2 w-full sm:w-40"
            soyPublico={false}
          >
            No lo soy
          </Button>
        </div>

        <div className="w-full h-[2px] bg-black mt-4" />

        <div className="flex flex-col text-2xl sm:text-3xl items-center lg:items-start">
          <h3>100K+</h3>
          <div className="text-accent text-center lg:text-left">
            <p>Asegurados en</p>
            <p>México</p>
          </div>
        </div>
      </div>

      {/* Modelo Spline */}
      <div className="w-full lg:w-1/2 h-96 sm:h-96 lg:h-screen mt-8 lg:mt-0">
        <Spline
          scene="https://prod.spline.design/iYt6P-rdpnjj8Fvk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Luz radial decorativa */}
      <div
        className="w-[60%] hidden md:flex sm:w-[50%] h-[60%] sm:h-screen absolute left-[-30%] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(255,113,75,0.8) 0%, rgba(255,113,75,0) 100%)',
        }}
      />
    </div>
  );
};
