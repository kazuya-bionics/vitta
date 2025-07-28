import casesImageTwo from "../../../public/assets/images/casesImageTwo.jpg"
import Image from "next/image"

const Nosotros = () => {
  return (
    <main>
      <div className="h-screen flex flex-col gap-y-4 justify-center items-center relative z-10 overflow-hidden">   
            <Image
              src={casesImageTwo}
              alt="Fondo sección héroe"
              fill
              className="object-cover object-center"
              priority
            />
      
           
            <div className="absolute inset-0 bg-black/50 z-10" />
      
           
            <div className="relative flex flex-col items-center justify-center gap-y-4 z-20 text-white p-8 text-center">
              <h3 className="text-6xl font-bold uppercase">Porque vitta es lo mejor para ti</h3>
              <h3 className="text-sm opacity-80 ">Vitta esta comprometido con el una politica justa y transparente, mira todo lo que vitta tiene para ti</h3>
              <button className="p-1 text-sm flex text-white/80 justify-center items-center border-white hover:border-white/75 bg-black rounded-[45px] border-2 w-[100px]"> cotiza aqui </button>
            </div>
          </div>
    </main>
  )
}

export default Nosotros