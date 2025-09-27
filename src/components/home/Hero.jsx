'use client';

import Spline from '@splinetool/react-spline';
import { Button } from './Button';

export const Hero = () => {
  return (
    <div className="w-full h-screen relative bg-[#F2F2F2] flex items-center px-8">
      {/* Texto */}
      <div className="w-1/2 z-10 pr-8 flex flex-col justify-center pt-8 gap-y-4">
        <div className='border-2 border-black rounded-full text-sm p-2 w-52 mb-2'>
            Proteger tambien es amar
        </div>
        <div className='text-5xl font-semibold'>
            <h3>¿TU <span className='text-[var(--color-accent)]'>ASESOR</span> NO</h3>
            <h3>ESTÁ?</h3>
        </div>
        <div className='opacity-75 mb-2'>    
            <p>Contacta a nuestros asesores especializados en</p>
            <p>servidores públicos y conoce la seguridad de un</p>
            <p>trabajo bien hecho</p>
        </div>

        <div className="flex gap-x-4">
          <Button
            styles="bg-[var(--color-accent)] rounded-full text-sm text-white p-2 w-40"
            soyPublico={true}
          >
            Soy servidor público
          </Button>
          <Button
            styles="bg-[var(--color-accent)] rounded-full text-sm text-white p-2 w-40"
            soyPublico={false}
          >
            No lo soy
          </Button>
        </div>
        
        
        <div className='w-full h-[2px] bg-black mt-4'/>

        <div className='flex flex-col text-3xl'>
            <h3>100K+</h3>
            <div className='text-accent'>
                <p>Asegurados en</p>
                <p>mexico</p>
            </div>
        </div>

      </div>

      {/* Modelo Spline (50% exacto) */}
      <div className="w-1/2 h-screen">
        <Spline
          scene="https://prod.spline.design/iYt6P-rdpnjj8Fvk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Luz radial decorativa */}
      <div
        className="w-[50%] h-screen absolute left-[-30%] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(255,113,75,0.8) 0%, rgba(255,113,75,0) 100%)',
        }}
      />
    </div>
  );
};
