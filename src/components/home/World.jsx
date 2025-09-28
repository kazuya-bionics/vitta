"use client"

import Spline from '@splinetool/react-spline';

export const World = () => {
  return (
    <div className='w-full px-8 h-screen flex justify-center items-center text-2xl flex-col relative'>
        <div className='text-center opacity-75 md:text-4xl'>
            <h3>
                PROTEGER Y AMAR ES IGUAL,
            </h3>
            <h3>
                DA EL PRIMER PASO Y ASEGURATE HOY
            </h3>
        </div> 
        <div className='w-[100%] opacity-50 h-screen flex justify-center items-center absolute'>
            <Spline
                styles={{
                    width: "100%",   // 👈 más delgado
                    height: "100%",
                }}
                scene="https://prod.spline.design/m7LmZnZAPJcl8h4p/scene.splinecode"
            />
        </div>
    </div>
  )
}
