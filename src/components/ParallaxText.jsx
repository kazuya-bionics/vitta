"use client"

import { useRef, useEffect, useState } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "motion/react"
import { wrap } from "@motionone/utils"

export const ParallaxText = ({ children, baseVelocity = 60 }) => {
  const baseX = useMotionValue(0)

  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  // refs para medir ancho real
  const textRef = useRef(null)
  const [wrapWidth, setWrapWidth] = useState(0)

  useEffect(() => {
    if (textRef.current) {
      setWrapWidth(textRef.current.offsetWidth)
    }
  }, [children])

  // posición X con wrap perfecto
  const x = useTransform(baseX, (v) =>
    wrapWidth ? `${wrap(-wrapWidth, 0, v)}px` : "0px"
  )

  const directionFactor = useRef(1)

  useAnimationFrame((t, delta) => {
    if (!wrapWidth) return

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    const vf = velocityFactor.get()

    // zona muerta para evitar vibración
    if (vf < -0.1) directionFactor.current = -1
    else if (vf > 0.1) directionFactor.current = 1

    moveBy += directionFactor.current * moveBy * vf

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="parallax">
  <motion.div className="scroller" style={{ x }}>
    {Array(3).fill(0).map((_, i) => (
      <span key={i} ref={i === 0 ? textRef : null}>
        {children}&nbsp;
      </span>
    ))}
  </motion.div>
</div>

  )
}
