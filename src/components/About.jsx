import React from 'react'

import Image from 'next/image'
import imgAbout from "../../public/images/imgAbout.jpg"

export const About = () => {
  return (
    <div id='work' className='w-full bg-white h-screen relative text-lg flex flex-col md:justify-center md:text-left justify-center items-center gap-y-8 font-medium overflow-hidden z-10'>
      
      
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
      <div className='md:absolute flex flex-col md:left-auto md:translate-x-0 md:right-8 md:bottom-8 bottom-28 max-w-68 text-[10px] gap-y-4 text-center md:text-left justify-center items-center md:items-start'>
        <h3>We are a creative web studio specialized in building visually striking, high-performance websites that elevate brands through design, storytelling, and motion.

Our focus is simple: transform ideas into digital experiences that feel alive. Every site we build blends clean layout design, refined animations, and thoughtful interactions that capture attention and guide users naturally.</h3>
        <h3>From modern landing pages to fully custom platforms, we combine aesthetics and functionality to deliver websites that not only look exceptional—but also engage, convert, and leave a lasting impression.</h3>
        <button className='bg-brand mt-3 md:mt-0 py-1 w-28'>SEE OUR PROJECTS</button>
      </div>
 
      {/* left Text */}
      <div className='absolute flex flex-col-reverse md:flex-row left-1/2 translate-x-[-50%] md:left-8 md:translate-x-0 justify-center items-center gap-x-4 bottom-8 max-w-68 text-[10px] gap-y-4'>
        <div className='w-8 h-8 bg-gray-200 rounded-full'></div>
        <h3>LEON KAZUYA - DEVELOPER</h3>
      </div>

      {/* lateral text */}
      <h3 className=' absolute left-[-10px] top-1/2 translate-y-[-50%] rotate-[-90deg] text-[14px]'> our services </h3>

    </div>
  )
}
