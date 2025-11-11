"use client";

import Link from "next/link";
import { FaAlignRight } from "react-icons/fa6";
import { Menu } from "./Menu";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Cada vez que cambia la ruta, dispara la animación
  return (
    <>
      {/* PageTransition siempre envuelto en AnimatePresence */}

      <div className="w-full fixed h-20 flex justify-between items-center top-0 px-8 z-40 font-medium">
        <Link href="/" className="font-bold text-lg">VITTA</Link>

        <ul className="hidden bg-white rounded-[45] text-md drop-shadow-lg py-2 px-4 md:flex gap-x-1">
          <Link href="/casos" className="hover:bg-black hover:text-white py-1 px-3 rounded-full transition duration-300">Work</Link>
          <Link href="/nosotros" className="hover:bg-black hover:text-white py-1 px-3 rounded-full transition duration-300">Showreel</Link>
          <Link href="/servicios" className="hover:bg-black hover:text-white py-1 px-3 rounded-full transition duration-300">Services</Link>
          <Link href="/servicios" className="hover:bg-black hover:text-white py-1 px-3 rounded-full transition duration-300">Blog</Link>
        </ul>

        <div className="flex gap-x-2 justify-center items-center">
          <button
            onClick={() => setIsOpen(prev => !prev)}
            className="text-xl md:hidden p-2 bg-white rounded-full"
          >
            <FaAlignRight />
          </button>
          <Link className="hidden md:flex" href="/#contacto">
            <button className="rounded-md px-3 py-1 m-1 overflow-hidden relative group cursor-pointer  font-medium">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-black transition duration-300 group-hover:text-white ease">Contact</span>
            </button>
          </Link>
        </div>
      </div>

      <Menu isOpen={isOpen} />
    </>
  );
};
