"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import { useRef, useEffect } from "react"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6"

export const Menu = ({ isOpen, onClose }) => {
  const container = useRef(null)
  const tl = useRef(null)

  gsap.registerPlugin(useGSAP)
  const { contextSafe } = useGSAP()

  // HOVER ANIMATION
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

  // MENU ANIMATION
  useGSAP(() => {

    gsap.set(".text-link", {
      opacity: 0,
      yPercent: 100
    })

    gsap.set(container.current, {
      height: 0,
      pointerEvents: "none"
    })

    tl.current = gsap.timeline({
      paused: true,
      defaults: { ease: "power2.inOut", duration: .8 }
    })
    .to(container.current, {
      height: "100svh",
      pointerEvents: "auto"
    })
    .to(".text-link", {
      opacity: 1,
      yPercent: 0,
      stagger: .06
    }, ".3")

  }, [container])

  useEffect(() => {
    isOpen ? tl.current.play() : tl.current.reverse()
  }, [isOpen])

const handleClick = () => {
  if (isOpen) {
    tl.current.reverse();   // ⬅️ Ejecuta animación reverse
  }      // ⬅️ Cambia el estado para que funcione
};


  return (
    <div
      ref={container}
      className="w-full h-[0px] overflow-hidden flex flex-col justify-center px-8 bg-brand/72 backdrop-blur-sm fixed z-30 top-0 left-0"
    >
      <ul className="flex flex-col gap-y-8 text-5xl font-black uppercase">
        {["Work", "Showreel", "Services", "Contact"].map((item, index) => (
          <li
            key={index}
            onMouseEnter={onHoverLink}
            onMouseLeave={onUnhoverLink}
            className="open-menu-link py-1 overflow-hidden h-14 relative flex flex-col"
          >
            <Link
              className="text-link"
              href={`/#${item.toLowerCase()}`}
              onClick={handleClick}
            >
              {item.toLowerCase()}
            </Link>

            <Link
              className="text-link"
              href={`/#${item.toLowerCase()}`}
              onClick={handleClick}
            >
              {item.toLowerCase()}
            </Link>
          </li>
        ))}
      </ul>

      <div className="absolute left-0 bottom-0 h-20 w-full flex justify-between items-center px-8 font-semibold">
        <div className="px-3 rounded-full bg-white py-1">
          News
        </div>

        <div className="text-2xl flex gap-x-2">
          <Link href="/" className="bg-white p-2 rounded-full" onClick={onClose}><FaFacebook /></Link>
          <Link href="/" className="bg-white p-2 rounded-full" onClick={onClose}><FaInstagram /></Link>
          <Link href="/" className="bg-white p-2 rounded-full" onClick={onClose}><FaYoutube /></Link>
        </div>
      </div>
    </div>
  )
}
