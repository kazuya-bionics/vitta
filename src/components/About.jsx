import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import imgAbout from "../../public/images/imgAbout.jpg"

export const About = () => {
  return (
    <div id='work' className='w-full bg-white md:h-screen py-40 md:py-0 relative text-lg flex flex-col md:justify-center md:text-left justify-center items-center gap-y-8 overflow-hidden z-10'>
      
      
      {/* principal text */}
      <div className=''>
        <div className='flex justify-center items-center text-5xl gap-x-4 md:text-8xl md:gap-x-8'>
          <h3>WE</h3>
           {/* imagen */}
           <Image
            src={imgAbout}
            loading="eager"
            className='w-20 md:w-40 hidden md:flex'
            alt='hello'
           />
          <h3>ARE</h3>
        </div>
      </div>

      {/* right text */}
      <div className='md:absolute flex flex-col md:left-auto md:translate-x-0 md:right-8 md:bottom-8 bottom-28 max-w-68 gap-y-4 md:text-[10px] text-center md:text-left justify-center items-center md:items-start'>
        <h3>Somos un estudio creativo especializado en construir sitios web visualmente impactantes y de alto rendimiento que elevan las marcas mediante diseño, narrativa y motion. Nuestro enfoque es simple: transformar ideas en experiencias digitales que se sientan vivas. Cada sitio que creamos combina un diseño limpio, animaciones refinadas e interacciones cuidadosamente pensadas que captan la atención y guían a los usuarios de manera natural.</h3>
        <h3>Desde landing pages modernas hasta plataformas completamente personalizadas, combinamos estética y funcionalidad para ofrecer sitios web que no solo lucen excepcionales, sino que también captan la atención, convierten visitantes y dejan una impresión duradera.</h3>
        <Link href="#showreel" className='bg-brand mt-3 md:mt-0 py-1 w-28 text-sm'>SEE OUR PROJECTS</Link>
      </div>
 
      {/* left Text */}
      <div className='absolute flex flex-col-reverse md:flex-row left-1/2 translate-x-[-50%] md:left-8 md:translate-x-0 justify-center items-center gap-x-4 bottom-8 max-w-68 text-[10px] gap-y-4'>
        <div className='w-8 h-8 bg-gray-200 rounded-full'></div>
        <h3>LEON KAZUYA - DEVELOPER</h3>
      </div>

      {/* lateral text */}
      <Link href="#services" className='absolute left-[-10px] top-1/2 translate-y-[-50%] rotate-[-90deg] text-[14px] drop-shadow-xl drop-shadow-brand' > our services </Link>

    </div>
  )
}
