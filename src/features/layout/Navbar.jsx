import { motion } from "motion/react"
import { useEffect, useState } from "react"

export const Navbar = ({ toggleMenu }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
      className={`
        fixed top-0 left-0 z-50
        w-full h-20
        flex justify-between items-center
        px-8 md:px-16
        font-medium text-sm text-white
        transition-all duration-500 ease-out
        ${
          scrolled
            ? "backdrop-blur-xl shadow-lg"
            : "backdrop-blur-0 bg-transparent"
        }
      `}
    >
      <a className="rounded-2xl flex justify-center items-center hover:text-blue-200 transition" href="/">
        <img src="/logo_white.svg" alt="VITTA Logo" className="w-20 h-20" />
        Studio
      </a>

      <ul className="gap-x-8 hidden md:flex">
        {["Nosotros", "Servicios", "Precios", "Showreel"].map(
          (item) => (
            <li key={item}>
              <a className="hover:text-blue-200 transition" href="/">
                {item}
              </a>
            </li>
          )
        )}
      </ul>

      <a className="hover:text-blue-200 transition hidden md:flex" href="#contacto">
        Dudas / Contacto
      </a>

      <button
        onClick={toggleMenu}
        className="md:hidden text-white p-2 rounded-tl-2xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </motion.div>
  )
}
