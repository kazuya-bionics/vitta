"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import Image from "next/image"

import heroImageLife from "../../../public/assets/images/heroImageLife.jpg"
import heroImageCar from "../../../public/assets/images/heroImageCar.jpg"

import ScrollTrigger from "gsap/dist/ScrollTrigger"
import SplitText from "gsap/dist/SplitText"

export const About = () => {
  const container = useRef(null)

  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(SplitText)


 useGSAP(() => {
  const paragraphs = gsap.utils.toArray("section p")

  paragraphs.forEach((text) => {
    const split = new SplitText(text, { type: "chars" })

    const img = text.parentElement.querySelector("img")

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play play reverse reverse",
        scrub: 2
      },
    })

    tl.from(split.chars, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.005,
      ease: "power2.out",
    })
    .from(img, {
      opacity: 0,
      y: 100,
      duration: 2,
    }, "<") // Comienza al mismo tiempo que el texto
  })
}, { scope: container })


  return (
    <section ref={container} id="about" className="w-full bg-[#121212] text-white">
      <div className="w-full h-screen grid gap-4 place-content-center relative px-8">
        <span className="text-5xl z-10 font-bold opacity-50">01 QUIENES SOMOS</span>
        <p className="z-10">
          En vitta, creemos que proteger la vida es uno de los actos más humanos y valientes que existen. Somos una agencia especializada en seguros de vida con la misión de ayudarte a cuidar lo más valioso: las personas que amas.
        </p>
        <Image 
          className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          src={heroImageLife}
          alt="Imagen vida"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="w-full h-screen grid gap-4 place-content-center relative px-8">
        <span className="text-5xl z-10 font-bold opacity-50">02</span>
        <p className="z-10">
          Contamos con un equipo de asesores comprometidos, con amplia experiencia en el sector y una profunda vocación de servicio.
        </p>
        <button className="p-1 overflow-hidden border-2 rounded-[45px] border-white hover:opacity-85 z-10 w-[220px]"><p>Conoce nuestros servicios</p></button>
        <Image
          className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          src={heroImageCar}
          alt="Imagen auto"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
    </section>
  )
}
