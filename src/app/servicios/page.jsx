import { Sticky } from "@/components/servicios/Sticky"
import heroImageMedic from "../../../public/assets/images/heroImageMedic.jpg"
import Image from "next/image"

const Servicios = () => {
  return (
    <main>
      <div className="h-screen flex flex-col gap-y-4 justify-center items-center relative z-10 overflow-hidden">   
        <Image
          src={heroImageMedic}
          alt="Fondo sección héroe"
          fill
          className="object-cover object-center"
          priority
        />
  
        
        <div className="absolute inset-0 bg-black/50 z-10" />
  
        
        <div className="relative flex flex-col items-center justify-center gap-y-4 z-20 text-white p-8 text-center">
          <h3 className="text-6xl font-bold uppercase">Descubre todo lo que tenemos para cuidarte</h3>
          <h3 className="text-sm opacity-80 ">En vitta creemos que adquirir un seguro es mas que un acto de amor, damos todo por ti</h3>
          <button className="p-1 text-sm flex text-white/80 justify-center items-center border-white hover:border-white/75 bg-black rounded-[45px] border-2 w-[100px]"> cotiza aqui </button>
        </div>
      </div>
      <Sticky/>
    </main>
  )
}

export default Servicios