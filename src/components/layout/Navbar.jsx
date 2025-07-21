import Link from "next/link";
import { FaAlignCenter } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <div className='w-full fixed h-16 flex justify-between items-center top-0 px-8 z-10'>
        <Link href="#home">Vitta</Link>
        <ul className='hidden md:flex gap-x-4'>
            <li>Casos</li>
            <Link href="#about">Nosotros</Link>
            <li>Servicios</li>
        </ul>
        <button className='md:hidden text-lg'>
            <FaAlignCenter />
        </button>
        <Link href="#contact" className="border-2 border-black px-2 rounded-[45px]">Contact</Link>
    </div>
  )
}