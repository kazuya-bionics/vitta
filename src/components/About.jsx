import React from 'react'

export const About = () => {
  return (
    <div className='w-full h-screen relative text-lg flex flex-col justify-center text-left font-medium'>
      
      
      {/* principal text */}
      <div className=''>
        <div className='flex justify-center items-center text-8xl gap-x-8'>
          <h3>WE</h3>
           {/* imagen */}
          <h3>ARE</h3>
        </div>
      </div>

      {/* right text */}
      <div className='absolute flex flex-col right-8 bottom-8 max-w-68 text-[10px] gap-y-4'>
        <h3>WE DON'T FOLLOW TRENDS, WE CREATE THEM. WE DESIGN WEBSITES THAT CAPTURE</h3>
        <h3>GLANCES, AWAKEN EMOTIONS, AND TURN EVERY CLICK INTO AN UNFORGETTABLE EXPERIENCE.</h3>
        <button className='bg-brand py-1 w-28'>SEE OUR PROJECTS</button>
      </div>
 
      {/* left Text */}
      <div className='absolute flex left-8 justify-center items-center gap-x-4 bottom-8 max-w-68 text-[10px] gap-y-4'>
        <div className='w-8 h-8 bg-gray-200 rounded-full'></div>
        <h3>LEON KAZUYA - DEVELOPER</h3>
      </div>

      {/* lateral text */}
      <h3 className=' absolute left-[-10px] top-1/2 translate-y-[-50%] rotate-[-90deg] text-[14px]'> our services </h3>

    </div>
  )
}
