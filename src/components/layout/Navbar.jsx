"use client"

import Link from "next/link"
import { FaAlignCenter } from "react-icons/fa6"
import { Menu } from "./Menu"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const openMenu = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <>
      <div className='w-full fixed h-16 flex justify-between items-center top-0 px-8 z-40'>
        <Link href="/" className="font-bold text-xl">Vitta</Link>
        <ul className='hidden md:flex gap-x-4'>
          <Link href="/casos">Casos</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/servicios">Servicios</Link>
        </ul>
        <button onClick={openMenu} className='md:hidden text-lg'>
          <FaAlignCenter />
        </button>
        <Link href="/#contact" className="border-2 border-black px-2 rounded-[45px]">Contact</Link>
      </div>

      <Menu isOpen={isOpen} />
    </>
  )
}
