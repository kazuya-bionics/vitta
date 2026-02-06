

export const ShowreelVideo = ({ onClose }) => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 flex z-40 items-center justify-center bg-black/80 backdrop-blur-sm">
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-sm bg-gray-800 px-3 py-1 rounded hover:bg-gray-700 transition-opacity opacity-80 hover:opacity-100">
          Close
        </button>
        <video
        className="w-[80vw] h-[80vh] z-10"
        autoPlay
        playsInline
        preload="metadata"
      >
        <source src="/vitta.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
