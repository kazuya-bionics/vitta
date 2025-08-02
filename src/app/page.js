"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Image from "next/image"
import { About } from "@/components/home/About"
import { Loader } from "@/components/home/Loader"
 
import {Button} from "../components/home/Button"

import bgHeroSection from "../../public/assets/images/bgHeroSection.jpg"
import { Contact } from "@/components/home/Contact"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const containerHero = useRef(null)
  const heroTrigger = useRef(null)
  const heroAnotherTrigger = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerHero.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      },
    })

    tl.to(heroTrigger.current, {
      scale: 0.9,
      rotate: "1deg",
      filter: "blur(5px)",
      duration: 1
    })

    tl.from(
      heroAnotherTrigger.current,
      {
        scale: 0.92,
        rotate: "-2deg",
      },
      ">"
    )
  }, { dependencies: [], refs: [containerHero, heroTrigger, heroAnotherTrigger] })

  return (
    <main>
      <div ref={containerHero} className="relative h-[200vh] bg-black">
        <Hero heroTrigger={heroTrigger} />
        <HeroSection heroAnotherTrigger={heroAnotherTrigger} />
      </div>

      {/* <Loader/> */}

      <About />
      <Contact/>
    </main>
  )
}

// Hero component
const Hero = ({ heroTrigger }) => {
  return (
    <section
      ref={heroTrigger}
      className="h-screen bg-[#EFEEEA] sticky top-0 overflow-hidden flex justify-center px-8 z-0"
    >
      <div className="mt-16 flex flex-col justify-center items-center text-center gap-y-8">
        <div>
          <h3 className="text-5xl md:text-5xl hero-title">
            ¿No te responde tu asesor?
          </h3>
          <h3 className="text-5xl md:text-5xl hero-title">
            Nosotros te respaldamos
          </h3>
        </div>
        <div className="text-[10px] md:text-[14px] opacity-50">
          <p>
            Adquiere una asesoría gratuita en seguro de vida, auto y gastos
            médicos. No lo dejes
          </p>
          <p>para después y empieza hoy a cuidar tu futuro.</p>
        </div>
        <div className="flex text-[10px] md:text-[14px] gap-x-8 mb-12">
          <Button styles="p-2 bg-[#FE7743] text-white border-2 border-black rounded-[45px]" soyPublico={"no soy servidor publico"}>
            No soy servidor público
          </Button>
          <Button styles="p-2 border-2 border-black rounded-[45px]" soyPublico={""}>
            Habla con un asesor
          </Button>
        </div>
      </div>
    </section>
  )
}

// HeroSection component
const HeroSection = ({ heroAnotherTrigger }) => {
  return (
    <div ref={heroAnotherTrigger} className="h-screen flex flex-col gap-y-4 justify-center items-center relative z-10 overflow-hidden">
      
      <Image
        src={bgHeroSection}
        alt="Fondo sección héroe"
        fill
        className="object-cover object-center"
        priority
      />

     
      <div className="absolute inset-0 bg-black/50 z-10" />

     
      <div className="relative z-20 text-white p-8">
        <h2 className="text-6xl font-bold uppercase">Protege tu futuro</h2>
      </div>
    </div>
  )
}
