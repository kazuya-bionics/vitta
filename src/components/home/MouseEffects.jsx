"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export const MouseEffects = () => {
  const cursor = useRef(null)
  const pos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    const updateCursor = () => {
      gsap.to(cursor.current, {
        x: pos.current.x,
        y: pos.current.y,
        xPercent: -50, // centra horizontalmente
        yPercent: -50, // centra verticalmente
        duration: .8,
      })
    }

    gsap.ticker.add(updateCursor)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      gsap.ticker.remove(updateCursor)
    }
  }, [])

  return (
    <div
      ref={cursor}
      className="w-8 h-8 bg-white mix-blend-difference fixed top-0 left-0 z-40 rounded-full pointer-events-none"
    />
  )
}
