import React from 'react'

import { Canvas } from '@react-three/fiber'
import { AnimatedSphere } from './three/AnimatedSphere'

export const About = () => {
  return (
    <section id='nosotros' className="w-full h-screen overflow-hidden">
      
      <div className='w-full h-[10vh] md:h-[13vh] flex justify-start items-center bg-blue-800 px-8 md:px-16'>
      </div>

      <div className='w-full h-[90vh] md:h-[87vh] bg-[#F2F5FF] flex flex-col justify-center md:items-start px-8 md:px-16 gap-y-4 md:gap-y-2 md:text-left'>
        <h3 className='text-2xl md:text-3xl font-semibold text-blue-950'>Somos <span className="text-blue-700">VITTA</span> Studio</h3>
        <p className="text-blue-900 mt-8">VITTA Studio es una agencia de diseño y desarrollo digital que se enfoca en crear soluciones innovadoras y personalizadas para empresas de todos los tamaños.</p>
        <p className="text-blue-900">Diseñamos y desarrollamos experiencias digitales que conectan marcas con personas. Nos enfocamos en crear soluciones visuales, funcionales y tecnológicas que generen impacto real.</p>
        <ul className='text-black w-full mt-8 flex flex-col gap-y-3 list-none'>
            <li><div className="w-4 h-4 bg-teal-400 rounded-full mr-2 inline-block align-middle"></div>Creatividad y diseño a la vanguardia</li>
            <li><div className="w-4 h-4 bg-purple-700 rounded-full mr-2 inline-block align-middle"></div>Soluciones centradas en el usuario</li>
            <li><div className="w-4 h-4 bg-yellow-400 rounded-full mr-2 inline-block align-middle"></div>Desarrollo ágil y eficiente</li>
        </ul>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg mt-8 hover:bg-blue-800 transition-colors">Ver proyectos</button>
      </div>
      <div className='absolute w-75 h-75 top-0 right-1/2 translate-x-1/2 translate-y-[-25%] md:translate-y-0'>
        <Canvas>
            <AnimatedSphere />
        </Canvas>
      </div>
    </section>
  )
}
