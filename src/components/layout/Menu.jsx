"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import { useRef, useEffect } from "react"

export const Menu = ({ isOpen }) => {
  const container = useRef(null)
  const tl = useRef(null)

  gsap.registerPlugin(useGSAP)
  const { contextSafe } = useGSAP()

  // Efecto hover por item
  const onHoverLink = contextSafe((event) => {
    const links = event.currentTarget.querySelectorAll(".text-link")
    gsap.to(links, {
      yPercent: -100,
      duration: 0.5,
      borderBottom: 100,
      ease: "expo.out",
      stagger: 0.05
    })
  })

  const onUnhoverLink = contextSafe((event) => {
    const links = event.currentTarget.querySelectorAll(".text-link")
    gsap.to(links, {
      yPercent: 0,
      borderBottom: 0,
      duration: 0.5,
      ease: "expo.out",
      stagger: 0.05
    })
  })

  // Crear la animación una sola vez
  useGSAP(() => {

    gsap.set(".text-link",{
      opacity:0,
      yPercent: 100
    })

    // Comienza cerrado (oculto)
    gsap.set(container.current, {
      height: 0,
      pointerEvents: "none"
    })

    tl.current = gsap.timeline({
      paused: true,
      defaults: { ease: "power2.inOut", duration: .8 }
    })
      .to(container.current, {
        height: "100lvh",
        pointerEvents: "auto"
      }) 
      .to(".text-link", {
        opacity: 1,
        yPercent: 0,
        stagger: .06
      }, ".3")

  }, [container])

  // Reproduce o revierte cuando cambia `isOpen`
  useEffect(() => {
    isOpen ? tl.current.play() : tl.current.reverse()
  }, [isOpen])

  return (
    <div
      ref={container}
      className="w-full h-[0px] overflow-hidden flex flex-col justify-center px-8 bg-rose-500/75 backdrop-blur-lg fixed z-30 top-0 left-0"
    >
      <ul className="flex flex-col gap-y-8 text-5xl font-black uppercase">
        {["Casos", "Nosotros", "Servicios", "Contacto"].map((item, index) => (
          <li
            key={index}
            onMouseEnter={onHoverLink}
            onMouseLeave={onUnhoverLink}
            className="open-menu-link py-1 overflow-hidden h-14 relative flex flex-col"
          >
            <Link className="text-link" href={item.toLowerCase() === 'contacto' ? '/#contacto' : `/${item.toLowerCase()}`}>{item}</Link>
            <Link className="text-link" href={item.toLowerCase() === 'contacto' ? '/#contacto' : `/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
