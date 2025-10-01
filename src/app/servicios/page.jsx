import { Sticky } from "@/components/servicios/Sticky"
import heroImageMedic from "../../../public/assets/images/heroImageMedic.jpg"
import Image from "next/image"
import { Button } from "@/components/home"
import Spline from '@splinetool/react-spline/next';

const Servicios = () => {
  return (
    <main>
      <div className="h-screen flex flex-col gap-y-4 justify-center items-center relative z-10 overflow-hidden">  

        <div className="w-full h-svh absolute top-0 right-0">  
          <Spline
          scene="https://prod.spline.design/6KVndaDY-gWauCS0/scene.splinecode" 
          styles={{
            width: "100%", 
            height: "100vh"
          }}
          />
        </div>
        
        <div className="relative flex flex-col items-center justify-center gap-y-4 z-20 p-8 text-center">
          <h3 className="text-3xl md:text-6xl font-bold uppercase">Descubre todo lo que tenemos para cuidarte</h3>
          <p className="text-sm opacity-80 ">En vitta creemos que adquirir un seguro es mas que un acto de amor, damos todo por ti</p>
          <Button styles={"px-1 py-2 text-sm flex text-white/80 justify-center items-center border-white hover:border-white/75 bg-black rounded-[45px] border-2 w-[120px]"} soyPublico={true} mensaje={""}> Cotiza Ahora</Button>
        </div>
      </div>
      <Sticky/>
    </main>
  )
}

export default Servicios