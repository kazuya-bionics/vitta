import React from 'react'

export const Intersection_1 = () => {
  return (
    <div className='w-full h-screen relative overflow-hidden bg-brand flex justify-center items-center text-6xl'>
        <div className='z-10'>
            <h3 className=''>
                Protege a quienes amas
            </h3>
        </div>
        
        <div className='absolute blur-xl z-[1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent w-52 h-52 mix-blend-screen opacity-75 rounded-[45]'/>

        <div className="absolute w-full h-screen">
  {/* Círculo central */}
            <div
                style={{
                background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%)",
                }}
                className="absolute w-[1000px] h-[1000px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl rounded-full"
            ></div>

            {/* Círculo superior izquierdo */}
            <div
                style={{
                background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%)",
                }}
                className="absolute w-[1000px] h-[1000px] top-[-65%] right-[-35%] blur-2xl rounded-full"
            ></div>

            {/* Círculo inferior derecho */}
            <div
                style={{
                background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%)",
                }}
                className="absolute w-[1000px] h-[1000px] top-[45%] left-[-35%] blur-2xl rounded-full"
            ></div>
        </div>





    </div>
  )
}
