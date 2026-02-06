import { ParallaxText } from "./ParallaxText"
import logo from "../../../assets/images/logo.jpeg"
import { FaPlayCircle } from "react-icons/fa"

import { useState } from "react"
import { ShowreelVideo } from "./ShowreelVideo"

export const Showreel = () => {
  const [showVideo, setShowVideo] = useState(false)

  const handlePlayClick = () => {
    setShowVideo(true)
  }

  const handleCloseVideo = () => {
    setShowVideo(false)
  }

  return (
    <section
      id="showreel"
      className="
        relative w-full min-h-screen
        bg-black text-white overflow-hidden
        flex flex-col justify-center items-center
      "
    >
      {/* Marquee superior */}
      <div className="absolute top-0 left-0 w-full bg-blue-700 py-2">
        <ParallaxText baseVelocity={80}>VITTA</ParallaxText>
      </div>

      {/* Video */}
      <button onClick={handlePlayClick} className="flex items-center justify-center">
        <FaPlayCircle className="text-black/50 animate-pulse rounded-full backdrop-blur-md text-6xl z-20 cursor-pointer absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
        <img src={logo} alt="Vitta Logo" className="w-90 rounded-full max-w-full h-90 z-10" />
      </button>
      
      {showVideo && <ShowreelVideo onClose={handleCloseVideo} />}

      {/* Marquee inferior */}
      <div className="absolute bottom-0 left-0 w-full bg-blue-700 py-2">
        <ParallaxText baseVelocity={-80}>VITTA</ParallaxText>
      </div>
    </section>
  )
}
