import { Button } from "../home"
import Spline from '@splinetool/react-spline/next';

export const Hero = () => {
  return (
    <div className="h-screen flex flex-col gap-y-4 justify-center items-center relative overflow-hidden">   
        <div className="relative mix-blend-overlay z-10 flex flex-col items-center justify-center gap-y-4 p-8 text-center">
          <h3 className="text-3xl md:text-6xl font-bold uppercase">Vitta te acompaña</h3>
          <h3 className="text-sm opacity-80 ">Conoce lo que nuestros expertos han hecho para cambiar el mundo!</h3>
          <Button mensaje={""} styles={"p-1 text-sm flex text-white/80 justify-center items-center border-white hover:border-white/75 bg-black rounded-[45px] border-2 w-[120px]"} soyPublico={true}> Cotiza Ahora</Button>
        </div>
        <div className="absolute inset-0 pointer-events-none">
            <Spline
            scene="https://prod.spline.design/6KVndaDY-gWauCS0/scene.splinecode" 
            style={{ width: "100%", height: "100%" }}
            />
        </div>
      </div>
  )
}
