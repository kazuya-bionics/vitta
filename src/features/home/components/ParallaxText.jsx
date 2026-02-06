import { motion, useAnimationFrame, useMotionValue, useTransform } from "motion/react"
import { wrap } from "@motionone/utils"
import { useRef } from "react"

export const ParallaxText = ({ children, baseVelocity = 80 }) => {
  const baseX = useMotionValue(0)
  const contentRef = useRef(null)

  const x = useTransform(baseX, (v) => {
    if (!contentRef.current) return "0px"
    const width = contentRef.current.scrollWidth / 2
    return `${wrap(-width, 0, v)}px`
  })

  useAnimationFrame((_, delta) => {
    const moveBy = (baseVelocity * delta) / 1000
    baseX.set(baseX.get() - moveBy)
  })

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        ref={contentRef}
        className="flex whitespace-nowrap"
        style={{ x }}
      >
        {/* Bloque original */}
        <span className="mx-8 text-6xl md:text-8xl font-bold tracking-widest">
          {children}
        </span>
        <span className="mx-8 text-6xl md:text-8xl font-bold tracking-widest">
          {children}
        </span>
        <span className="mx-8 text-6xl md:text-8xl font-bold tracking-widest">
          {children}
        </span>

        {/* Duplicado exacto */}
        <span className="mx-8 text-6xl md:text-8xl font-bold tracking-widest">
          {children}
        </span>
        <span className="mx-8 text-6xl md:text-8xl font-bold tracking-widest">
          {children}
        </span>
        <span className="mx-8 text-6xl md:text-8xl font-bold tracking-widest">
          {children}
        </span>
      </motion.div>
    </div>
  )
}
