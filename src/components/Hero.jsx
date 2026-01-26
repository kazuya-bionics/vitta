"use client"

import { FaArrowDown } from 'react-icons/fa6'
import { motion } from "motion/react"

import Link from 'next/link'

import { GlowOrb } from "./GlowOrb"

export const Hero = () => {


  return (
    <div className='w-full overflow-hidden h-screen relative flex flex-col gap-y-12 justify-center items-center bg-bg z-10'>
        
        {/* title */}
        
        <div className='text-5xl relative md:text-6xl md:px-4 font-black md:font-normal text-center flex flex-col gap-y-3 z-10 bg-bg'>
            <h3>Digital</h3>
            <h3>storytelling</h3>
            <h3>that <span className="drop-shadow-xl drop-shadow-brand">elevates</span></h3>
            <h3>your brand</h3>

        </div>
        
        <GlowOrb/>

        
        {/* secciones con posicion absoluta */}
      
        <p className=" md:hidden text-md opacity-60 text-center px-8 ">Vitta crea sitios web de alto rendimiento con animaciones avanzadas, diseñados estratégicamente a partir del branding de cada marca.</p>
        
        <div className='absolute font-medium text-[9px] md:text-[10px] max-w-32 md:max-w-56 text-left bottom-8 left-8 gap-y-4 hidden md:flex md:flex-col'>
            <p>Vitta crea sitios web de alto rendimiento con animaciones avanzadas, diseñados estratégicamente a partir del branding de cada marca.</p>
            <Link href="#services">
              <button className='bg-brand py-1 w-28'>SEE OUR PROJECTS</button>
            </Link>
        </div>

        <div className='md:absolute font-medium text-sm bottom-8 md:right-16 md:right-1/2 md:translate-x-1/2 flex flex-col gap-y-4'>
            <p className='flex flex-col items-center gap-y-2 animate-bounce'>Scroll down <FaArrowDown className="text-brand drop-shadow-brand drop-shadow-lg"/></p>
        </div>

    </div>
  )
}
