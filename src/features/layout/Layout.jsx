import { Navbar } from "./Navbar"
import { Menu } from "./Menu"

import { useState } from "react"

// animation: https://motion.dev/examples/animate-presence
import { AnimatePresence } from "motion/react"

export const Layout = ({children}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
        <Navbar toggleMenu={toggleMenu} />

        <AnimatePresence>
          {isMenuOpen && <Menu />}
        </AnimatePresence>
        
        {children}
    </div>
  )
}
