"use client"

import { 
  FaFacebook,
  FaInstagram,
  FaTiktok
 } from "react-icons/fa6";

export const Contact = () => {
  return (
    <div className='w-full px-8 h-[40dvh] sticky bottom-0 z-[-1] bg-[#FFBF48] text-[10px] md:text-md'>
      <div className='flex flex-col absolute top-10 gap-4'>
        <h3 className='text-sm font-bold'>Contact</h3>
        <div>
          <p className='border-b border-black'>Leon Kazuya</p>
          <p>kazuya.economics@gmail.com</p>
          <p>720 527 4302</p>
        </div>
        <div>
          <p className='border-b border-black'>Javier Labastida</p>
          <p>720 527 4302</p>
        </div>
      </div>
      <div className='absolute right-0 top-0 w-[50dvw] h-[40dvh] flex justify-center gap-x-6 md:gap-x-20 items-center text-white text-xl md:text-4xl bg-[#161616]'>
        <div>
          <FaInstagram />
        </div>
        <div>
          <FaTiktok />
        </div>
        <div>
          <FaFacebook/>
        </div>
      </div>
    </div>
  )
}
