import Image from "next/image"

import imgShowreel from "../../public/images/imgShowreel.jpg"
import { FaPlayCircle } from "react-icons/fa"

import {ParallaxText} from "./ParallaxText"

export const Showreel = () => {
  return (
    <div id="showreel" className='w-full py-24 relative bg-black text-white overflow-hidden'>
    
      <div className="mb-24 bg-accent py-2">
        <ParallaxText baseVelocity={60}> VITTA VITTA </ParallaxText>
      </div>
      
      <video
            className="w-full h-auto"
            controls
            playsInline
            preload="metadata"

          >
          <source src="/vitta.mp4" type="video/mp4" />
      </video>
          
      <div className="mt-20 bg-accent py-2">
        <ParallaxText baseVelocity={-60}> VITTA VITTA </ParallaxText>
      </div>
    
    </div>
  )
}
