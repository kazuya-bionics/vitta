"use client"

import { motion } from "motion/react"

import Image from 'next/image'
import imgAbout from "../../public/images/imgAbout.jpg"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

export const Services = () => {
  return (
    <div className='w-full md:h-screen py-8 md:py-0 bg-brand flex justify-center items-center z-10'>
        <div className='bg-[#f2f2f2] w-[90%] h-[90%] py-4 md:p flex flex-col md:flex-row-reverse rounded-[15px]'>

            {/* image container */}

            <div className='md:w-1/2 md:h-full relative flex justify-center items-center'>
                <Image
                    src={imgAbout}
                    alt="hola"
                    className='w-[90%] h-[90%] rounded-[15px]'
                />
            </div>


            {/* text container */}
            <div className='md:w-1/2 md:h-full relative'>
                <div className='w-full md:h-full flex flex-col justify-center items-center text-center py-8 px-24 md:p-28 gap-y-8'>
                    <h3 className='text-2xl md:text-3xl font-medium'>Landing pages</h3>
                    <p className="text-sm md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia nemo, nesciunt et quis iste, maxime nulla ratione ea accusamus illo voluptatibus doloremque, in aliquid quo odio dolores necessitatibus itaque eveniet.</p>
                    <button className='bg-brand py-1 w-28 text-sm md:text-base'>See more</button>
                </div>

                {/* icons */}
                <div className="absolute top-1/2 translate-y-[-50%] left-8 w-8 text-2xl cursor-pointer h-8 flex justify-center items-center"><FaArrowLeft/></div>
                <div className="absolute top-1/2 translate-y-[-50%] right-8 w-8 text-2xl cursor-pointer h-8 flex justify-center items-center"><FaArrowRight/></div>

                {/* roulette */}
                <motion.div 
                    className='absolute top-8 right-8 rounded-full'>
                    
                    <svg viewBox="0 0 200 200" className="md:w-20 md:h-20 w-12 h-12">
                        <defs>
                        
                        <path id="circlePath" d="
                            M100,100
                            m-75,0
                            a75,75 0 1,1 150,0
                            a75,75 0 1,1 -150,0
                        " />
                        </defs>

                        <text fontSize="20" className=" uppercase tracking-widest font-semibold">
                        <textPath href="#circlePath" textLength="470">
                            VITTA VITTA VITTA VITTA 
                        </textPath>
                        </text>
                    </svg>
                </motion.div>
                <motion.div 
                    className='absolute md:hidden top-8 left-8 rounded-full'>
                    
                    <svg viewBox="0 0 200 200" className="md:w-20 md:h-20 w-12 h-12">
                        <defs>
                        
                        <path id="circlePath" d="
                            M100,100
                            m-75,0
                            a75,75 0 1,1 150,0
                            a75,75 0 1,1 -150,0
                        " />
                        </defs>

                        <text fontSize="20" className=" uppercase tracking-widest font-semibold">
                        <textPath href="#circlePath" textLength="470">
                            VITTA VITTA VITTA VITTA 
                        </textPath>
                        </text>
                    </svg>
                </motion.div>
            </div>

        </div>
    </div>
  )
}
