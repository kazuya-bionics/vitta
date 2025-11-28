import Image from "next/image"

import imgShowreel from "../../public/images/imgShowreel.jpg"
import { FaPlayCircle } from "react-icons/fa"

export const Showreel = () => {
  return (
    <div id="showreel" className='w-full h-screen relative overflow-hidden z-10'>
      
      {/* top carrousel */}

      <div className="h-20 w-full flex justify-center items-center absolute top-0 left-0 bg-[#2b2b2b] text-white text-6xl font-bold">
        <p className='text-nowrap'>VITTA VITTA VITTA VITTA VITTA VITTA VITTA</p>
      </div>

      {/* content */}

      <div className='w-full h-full flex flex-col relative justify-center items-center'>
        <div className='w-full absolute top-20 h-screen bg-black/75'></div>

        <div className="flex flex-col justify-center items-center z-10 text-white font-bold text-center text-3xl md:text-6xl">
          <h3>ARE YOU NOT FULLY</h3>
          <div className="flex justify-center items-center gap-x-4 bg-black py-1 px-20">
            <p className="text-brand text-sm md:text-xl">TOUCH PLAY</p>
            <FaPlayCircle className="border p-2 rounded-full text-4xl md:text-5xl font-normal animate-pulse"/>
          </div>
          <h3>CONVENCED?</h3>
        </div>

        <Image
          src={imgShowreel}
          alt="hola"
          loading="eager"
          className="w-full h-screen absolute top-20 md:top-8 left-0 -z-10 object-cover "
        />

      </div>

      {/* bottom carrousel */}

      <div className="h-20 w-full flex justify-center items-center absolute bottom-0 left-0 bg-[#2b2b2b] text-white text-6xl font-bold">
        <p className='text-nowrap'>VITTA VITTA VITTA VITTA VITTA VITTA VITTA</p>
      </div>
    </div>
  )
}
