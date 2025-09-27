import React from 'react'

export const Video = () => {
  return (
    <div className='w-full flex justify-center items-center'>
        <iframe
            src="https://www.youtube.com/embed/-kWGfVAriA8"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
                width: "90%",
                height: "100vh",
            }}
            title="Vitta Seguros - Video Corporativo"
        ></iframe>
    </div>
  )
}
