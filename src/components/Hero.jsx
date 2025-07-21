export const Hero = () => {
  return (
    <>
      <section id="home" className='w-full bg-white h-dvh  overflow-hidden flex justify-center px-8 -z-10'>
      
      <div className="mt-16 flex flex-col justify-center items-center text-center gap-y-8  max-w-[80vw]">
        
        <div>
          <h3 className="text-5xl md:text-5xl hero-title">No te responde tu asesor?</h3>
          <h3 className="text-5xl md:text-5xl hero-title">Nosotros te respaldamos</h3>
        </div>
        <div className="text-[10px] md:text-[14px] opacity-50">   
          <p>Adquiere una asesoria gratuita en seguro de vida, auto y gastos medicos, no lo dejes</p>
          <p>para despues y empieza hoy a cuidar tu futuro</p>
        </div>
        <div className="flex text-[10px] md:text-[14px] gap-x-8 mb-12">
          <button className="p-2 bg-black text-white border-2 border-black rounded-[45px]">No soy servidor publico</button>
          <button className="p-2  border-2 border-black rounded-[45px]">habla con un asesor</button>
        </div>
      </div>
    </section>
    </>
    
  )
}