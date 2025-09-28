import React from 'react';

export const Intersection_1 = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden bg-brand flex justify-center items-center text-3xl sm:text-4xl lg:text-5xl">
      
      {/* Texto central */}
      <div className="z-10 text-center px-4 sm:px-8">
        <h3>Protege a quienes amas</h3>
      </div>

      {/* Luz central difusa */}
      <div className="absolute blur-xl z-[1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent w-36 sm:w-44 h-36 sm:h-44 mix-blend-screen opacity-75 rounded-[45]"/>

      {/* Círculos de fondo */}
      <div className="absolute w-full h-full">
        <div
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%)",
          }}
          className="absolute w-[80vw] sm:w-[1000px] h-[80vw] sm:h-[1000px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl rounded-full"
        ></div>

        <div
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%)",
          }}
          className="absolute w-[60vw] sm:w-[1000px] h-[60vw] sm:h-[1000px] top-[-45%] sm:top-[-65%] right-[-25%] sm:right-[-35%] blur-2xl rounded-full"
        ></div>

        <div
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%)",
          }}
          className="absolute w-[60vw] sm:w-[1000px] h-[60vw] sm:h-[1000px] top-[30%] sm:top-[45%] left-[-25%] sm:left-[-35%] blur-2xl rounded-full"
        ></div>
      </div>

      {/* Plan vida boxes más hacia el centro */}
      <div className="p-2 opacity-60 absolute top-28 right-12 text-white text-base sm:text-xl rounded-[45]">Plan Vida</div>
      <div className="p-2 bg-black opacity-45 absolute top-20 left-12 text-white text-base sm:text-xl rounded-[45]">Plan Auto</div>
      <div className="p-2 opacity-60 absolute bottom-28 left-12 text-white text-base sm:text-xl rounded-[45]">Plan GMM</div>
      <div className="p-2 bg-black opacity-45 absolute bottom-20 right-12 text-white text-base sm:text-xl rounded-[45]">Plan Ahorro</div>

      {/* Cuadros blancos de esquinas más pequeños */}
      <div className="w-40 sm:w-56 rounded-tr-[45] h-12 sm:h-16 bg-white absolute left-0 bottom-0"></div>
      <div className="w-40 sm:w-56 rounded-bl-[45] h-12 sm:h-16 bg-white absolute right-0 top-0"></div>
    </div>
  );
};
