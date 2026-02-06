import { motion } from "motion/react"

export const Menu = () => {
  return (
    <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
        exit={{ scaleX: 0, opacity: 0 , transition: { duration: 0.5, ease: "easeInOut", delay: 1 } }}
        className='fixed w-full h-screen bg-gray-800/90 backdrop-blur-sm top-0 left-0 z-30 flex flex-col items-center justify-center gap-y-8 text-white text-3xl font-medium uppercase'>
          
        <div className='overflow-hidden relative'>
          <motion.a 
            initial={{  y: 100 }} 
            animate={{  y: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }} 
            exit={{ y:100, transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 } }} href="#nosotros" 
            className='hover:opacity-100 opacity-50 block transition-opacity duration-200'>Nosotros</motion.a>
        </div>

        <div className='overflow-hidden relative'>
          <motion.a 
            initial={{  y: 100 }} 
            animate={{  y: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }} 
            exit={{ y:100, transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 } }} href="#servicios" 
            className='hover:opacity-100 opacity-50 block transition-opacity duration-200'>Servicios</motion.a>
        </div>

        <div className='overflow-hidden relative'>
          <motion.a 
            initial={{ y: 100 }} 
            animate={{ y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } }} 
            exit={{ y:100, transition: { duration: 0.8, ease: "easeInOut", delay: 0.3 } }} href="#precios" 
            className='hover:opacity-100 opacity-50 block transition-opacity duration-200'>Precios</motion.a>
        </div>

        <div className='overflow-hidden relative'>
          <motion.a 
            initial={{ y: 100 }} 
            animate={{ y: 0, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" } }} 
            exit={{ y:100, transition: { duration: 0.8, ease: "easeInOut", delay: 0.4 } }} href="#showreel" 
            className='hover:opacity-100 opacity-50 block transition-opacity duration-200'>Showreel</motion.a>
        </div>

        <div className='overflow-hidden relative'>
          <motion.a 
            initial={{ y: 100 }} 
            animate={{ y: 0, transition: { duration: 0.8, delay: 0.5, ease: "easeOut" } }} 
            exit={{ y:100, transition: { duration: 0.8, ease: "easeInOut", delay: 0.5 } }} href="#contacto" 
            className='hover:opacity-100 opacity-50 block transition-opacity duration-200'>Contacto</motion.a>
        </div>

    </motion.div>
  )
}
