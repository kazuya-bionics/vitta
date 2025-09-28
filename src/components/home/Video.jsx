import React from 'react';

export const Video = () => {
  return (
    <div className="w-full relative flex justify-center items-center pb-16">
      <div className="relative w-full my-8 max-w-5xl" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src="https://www.youtube.com/embed/-kWGfVAriA8"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Vitta Seguros - Video Corporativo"
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
      <div className="w-[90%] h-16 bg-accent rounded-b-[45px] absolute bottom-0 left-1/2 -translate-x-1/2" />
    </div>
  );
};
