"use client"

import { FaArrowDown } from 'react-icons/fa6'
import { motion } from "motion/react"

export const Hero = () => {


  return (
    <div className='w-full overflow-hidden h-svh relative flex flex-col gap-y-16 justify-center items-center bg-bg'>
        
        {/* title */}

        <div className='text-5xl relative md:text-6xl md:px-4 font-black md:font-normal md:mb-16 text-center flex flex-col gap-y-3 z-10 bg-bg'>
            <h3>DIGITAL</h3>
            <h3>STORYTELLING</h3>
            <h3>THAT ELEVATES</h3>
            <h3>YOUT BRAND</h3>

        </div>
        <div className='absolute top-1/2 mt-6 md:-mt-6 translate-y-[50%] w-full h-1 bg-black'/>



        {/* ruleta de texto */}

        <motion.div 
          
          animate={{
            rotate:360,
            transition:{
              duration:10,
              ease: "linear",
              repeat:Infinity
            }
          }}
          className='md:absolute bottom-28 md:bottom-8 bg-brand rounded-full'>
          
          <svg viewBox="0 0 200 200" className="w-32 h-32">
            <defs>
              
              <path id="circlePath" d="
                M100,100
                m-75,0
                a75,75 0 1,1 150,0
                a75,75 0 1,1 -150,0
              " />
            </defs>

            <text fontSize="12" className=" uppercase tracking-widest font-semibold">
              <textPath href="#circlePath" textLength="470">
                DEVELOPMENT DESIGN ANIMATION
              </textPath>
            </text>
          </svg>
        </motion.div>

        
        {/* secciones con posicion absoluta */}

        <div className='absolute font-medium text-[9px] md:text-[10px] max-w-32 md:max-w-56 text-left bottom-8 left-8 gap-y-4 hidden md:flex md:flex-col'>
            <p>WE DON'T FOLLOW TRENDS, WE CREATE THEM. WE DESIGN WEBSITES THAT CAPTURE GLANCES AND TURN EVERY CLICK INTO AN UNFORGETTABLE EXPERIENCE.</p>
            <button className='bg-brand py-1 w-28'>SEE OUR PROJECTS</button>
        </div>

        <div className='absolute font-medium text-[10px] bottom-8 md:translate-0 md:right-8 right-1/2 translate-x-1/2 flex flex-col gap-y-4'>
            <p className='flex flex-col items-center gap-y-2 animate-bounce'>Scroll down <FaArrowDown/></p>
        </div>

    </div>
  )
}
