import React from 'react'

export const About = () => {
  return (
    <div className='flex flex-col justify-center py-16 gap-y-16'>
      <div className='w-full flex flex-col gap-y-8 px-8 max-w-3/4'>
        <h3 className='font-semibold text-3xl'>QUIENES SOMOS</h3>
        <p className="text-md">
          En vitta, creemos que proteger la vida es uno de los actos más humanos y valientes que existen. Somos una agencia especializada en seguros de vida con la misión de ayudarte a cuidar lo más valioso: las personas que amas.
        </p>
      </div>
      <div className='w-full h-20 bg-black'/>
      <div className='w-full flex ml-[25%] flex-col justify-center gap-y-4 px-8 max-w-3/4'>
        <p className="text-md">
          En vitta, creemos que proteger la vida es uno de los actos más humanos y valientes que existen. Somos una agencia especializada en seguros de vida con la misión de ayudarte a cuidar lo más valioso: las personas que amas.
        </p>
        <button className='border-b-2 w-[100px]'>About Us <span>/</span></button>
      </div>
    </div>
  )
}