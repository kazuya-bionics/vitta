"use client";

import Link from "next/link";
import { FaAlignRight } from "react-icons/fa6";
import { Menu } from "./Menu";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PageTransition } from "./PageTransition";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const pathname = usePathname();

  // Cada vez que cambia la ruta, dispara la animación
  useEffect(() => {
    setShowTransition(true); // Animación de entrada
    setIsOpen(false);        // Cierra menú si estaba abierto

    // Desactiva animación después de 800ms (duración de la máscara)
    const timeout = setTimeout(() => setShowTransition(false), 800);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {/* PageTransition siempre envuelto en AnimatePresence */}
      <PageTransition show={showTransition} />

      <div className="w-full fixed h-16 flex justify-between items-center top-0 px-8 z-40">
        <Link href="/" className="font-semibold text-lg">Vitta</Link>

        <ul className="hidden bg-white rounded-[45] text-md drop-shadow-lg p-2 md:flex gap-x-4">
          <Link href="/casos">Casos</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/servicios">Servicios</Link>
        </ul>

        <div className="flex gap-x-2 justify-center items-center">
          <button
            onClick={() => setIsOpen(prev => !prev)}
            className={`md:hidden rounded-full ${isOpen ? "bg-accent" : "bg-brand"} p-2 text-lg`}
          >
            <FaAlignRight />
          </button>
          <Link className="hidden md:flex" href="/#contacto">
            Contacto
          </Link>
        </div>
      </div>

      <Menu isOpen={isOpen} />
    </>
  );
};
