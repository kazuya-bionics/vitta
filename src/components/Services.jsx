"use client"

import { useState, useRef, useEffect } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import { motion } from "motion/react"
import Link from "next/link"
import Image from 'next/image'

import imgAbout from "../../public/images/imgAbout.jpg"
import imgLandingPage from "../../public/images/imgLandingPage.jpg"
import imgWebApps from "../../public/images/ImgWebApps.jpg"
import imgAutomation from "../../public/images/imgAutomation.jpg"

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

export const Services = () => {

  const slides = [
    {
      title: "Landing pages",
      text: `We craft high-quality software optimized for speed, security, and seamless performance. 
             Our landing pages include refined animations and micro-interactions that enhance engagement 
             with smooth, responsive motion—creating interfaces that look polished, feel intuitive, 
             and convert effectively.`,
      image: imgLandingPage
    },
    {
      title: "Web Applications",
      text: `We design advanced web applications with scalable architecture, polished UI, seamless user 
             experience, and fast performance. Every interface is built to maximize clarity, precision, 
             and business impact.`,
      image: imgWebApps
    },
    {
      title: "AI Automation",
      text: `Our AI implementations automate workflows, generate insights, and reduce manual workload. 
             We create intelligent systems that integrate smoothly into your existing processes.`,
      image: imgAutomation
    }
  ]

  const [index, setIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const [shouldShowMore, setShouldShowMore] = useState(false)
  
  const textRef = useRef(null)
  const containerRef = useRef(null)

  // Detect if the text is exceeding the height
  useEffect(() => {
    if (textRef.current) {
      const exceeds = textRef.current.scrollHeight > textRef.current.clientHeight
      setShouldShowMore(exceeds)
    }
  }, [index])

  // Animation when slide changes
  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
    )
  }, [index])

  const nextSlide = () => {
    setExpanded(false)
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setExpanded(false)
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }


  return (
    <div id="services" className='w-full md:h-screen py-8 md:py-0 bg-brand flex justify-center items-center z-10'>
      <div className='bg-[#f2f2f2] w-[90%] h-[90%] py-4 md:p flex flex-col md:flex-row-reverse rounded-[15px]'>

        {/* IMAGE */}
        <div className='md:w-1/2 md:h-full relative flex justify-center items-center'>
          <Image
            key={slides[index].title}
            src={slides[index].image}
            alt="slide"
            className='w-[90%] h-[90%] rounded-[15px]'
          />
        </div>

        {/* TEXT */}
        <div className='md:w-1/2 md:h-full relative' ref={containerRef}>
          <div className='w-full md:h-full flex flex-col justify-center items-center text-center py-8 px-20 md:px-28 gap-y-8'>
            
            <h3 className='text-2xl md:text-3xl font-medium'>{slides[index].title}</h3>

            {/* TEXT WITH FIXED HEIGHT */}
            <p
              ref={textRef}
              className={`text-sm md:text-base overflow-hidden transition-all duration-300 ${
                expanded ? "max-h-[500px]" : "max-h-20"
              }`}
            >
              {slides[index].text}
            </p>

            {shouldShowMore && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-sm underline text-brand"
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            )}

            <Link href="https://wa.me/5215621375416">
              <button className='bg-brand py-1 w-28 text-sm md:text-base'>See more</button>
            </Link>
          </div>

          {/* ARROWS */}
          <div
            onClick={prevSlide}
            className="absolute top-1/2 translate-y-[-50%] left-8 w-8 text-2xl cursor-pointer h-8 flex justify-center items-center"
          >
            <FaArrowLeft />
          </div>

          <div
            onClick={nextSlide}
            className="absolute top-1/2 translate-y-[-50%] right-8 w-8 text-2xl cursor-pointer h-8 flex justify-center items-center"
          >
            <FaArrowRight />
          </div>

          {/* ROULETTE */}
          <motion.div className='absolute top-8 right-8 rounded-full'>
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
