"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6"

import Image from "next/image"
import aboutImage from "../../public/images/imgAbout.jpg"

export const Contact = () => {
  return (
    <div id="contact" className='w-full md:h-screen p-4 md:p-0 z-10 bg-white flex justify-center items-center'>
      <div className='w-[95vw] h-[93vh] border-2 relative p-8 z-10 flex flex-col-reverse justify-center gap-y-4 items-center'>
        
        {/* logo + text */}
        <div className='absolute md:text-4xl text-xl gap-x-4 font-medium left-8 top-8 flex justify-center items-center'>
          
          <motion.div 
          
          animate={{
            rotate:360,
            transition:{
              duration:10,
              ease: "linear",
              repeat:Infinity
            }
          }}
          className='bg-brand rounded-full'>
          
          <svg viewBox="0 0 200 200" className="md:w-40 md:h-40 w-12 h-12 p-2">
            <defs>
              
              <path id="circlePath" d="
                M100,100
                m-75,0
                a75,75 0 1,1 150,0
                a75,75 0 1,1 -150,0
              " />
            </defs>

            <text className="md:text-3xl text-4xl uppercase tracking-widest font-semibold">
              <textPath href="#circlePath" textLength="470">
                VITTA VITTA VITTA
              </textPath>
            </text>
          </svg>
        </motion.div>

          <div>
            <h3>WE ARE</h3>
            <h3>VITTA</h3>
            <h3>STUDIO</h3>
          </div>
        </div>

        {/* right text */}
        <div className="md:w-2/5 md:h-2/5 md:absolute right-8 bottom-0 md:text-2xl text-xl font-medium flex flex-col justify-evenly">

          <div className="w-full border-b-2">
            <Link href="#">TALK WITH US</Link>
          </div>
          <div className="w-full border-b-2">
            <Link href="#">ABOUT</Link>
          </div>
          <div className="w-full">
            <Link href="#">BLOG</Link>
          </div>

          <div className="absolute md:right-0 right-8 bottom-8 border-t-2 border-r-2 border-l-2 p-2 gap-x-4 flex md:text-3xl text-xl">
            <Link href="https://www.instagram.com/vitta.studios">
              <FaInstagram/>
            </Link>
            <Link href="https://www.facebook.com/vitta.studios">
              <FaFacebook/>
            </Link>
            <Link href="https://x.com/leon_kazuya">
              <FaTwitter/>
            </Link>
          </div>
        </div>

        <div className="md:absolute right-8 top-8 md:w-1/2 md:h-1/2 w-[75vw] h-[30vh] py-2 md:py-0 flex justify-center items-center bg-bg">
          <Image 
            src={aboutImage}
            className="w-[95%] h-[90%]"
            alt=""
          />
        </div>

      </div>
    </div>
  )
}
