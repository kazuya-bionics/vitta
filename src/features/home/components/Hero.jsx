
// 3d Objects
import { 
  Canvas
} from "@react-three/fiber"
import { AnimatedBox } from "./three/AnimatedBox"

// icons
import { FaArrowDown, FaWhatsapp } from "react-icons/fa"

// animations
import { motion } from "motion/react"
import { Environment } from "@react-three/drei"

export const Hero = () => {

  return (
    <motion.div className="size-full bg-radial from-[#ACBFF7] to-[#0032CA] w-full h-screen overflow-hidden">
      {/* Principal Text */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-30 left-[50%] translate-x-[-50%] md:translate-x-0 md:left-16 md:top-[50%] md:translate-y-[-50%] text-4xl md:text-7xl font-bold z-10">
        <h3 className="text-white text-center">VITTA</h3>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute right-[50%] top-36 translate-x-[50%] md:translate-x-0 md:right-16 md:top-[50%] md:translate-y-[-50%] text-4xl md:text-7xl font-bold z-10 ">
        <h3 className="text-white text-center">STUDIO</h3>
      </motion.div>

      {/* 3d objects */}
      <Canvas>
        <AnimatedBox />
        <Environment preset="city" />
      </Canvas>


      
      {/* Bottom Info */}
      <div className="w-full py-4 absolute bottom-6 md:bottom-2 left-0 flex justify-center md:justify-between px-16 items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className=" text-white md:text-lg font-semibold flex flex-col items-center md:items-start text-center md:text-left">
          <h3>Diseñamos.</h3>
          <h3>Desarrollamos.</h3>
          <h3>Impactamos.</h3>
          <FaArrowDown className="mt-4 animate-bounce" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className=" text-white hidden md:flex flex-col gap-y-2 max-w-sm bg-white/10 p-4 rounded-lg gap-x-8">
          <h3 className="font-bold">Creative Solutions</h3>
          < p className="text-sm text-gray-200">
            buscamos soluciones creativas e innovadoras para cada uno de tus proyectos
          </p>
          <button className="bg-white text-blue-700 font-semibold px-3 py-1 rounded-lg w-max hover:bg-blue-700 hover:text-white transition-colors mt-1.5 text-sm"  >
            Conoce más
          </button>
        </motion.div>
      </div>

    </motion.div>
  )
}
