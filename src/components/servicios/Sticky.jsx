export const Sticky = () => {
  return (
    <div className="relative w-full">
      {/* Sección 1 */}
      <div className="h-screen sticky top-0 bg-black flex items-center justify-center">
        <h1 className="text-white text-4xl">Sección 1</h1>
      </div>

      {/* Espacio para cambiar de sección */}
      <div className="h-screen relative"></div>

      {/* Sección 2 */}
      <div className="h-screen sticky top-0 bg-white flex items-center justify-center">
        <h1 className="text-black text-4xl">Sección 2</h1>
      </div>

      <div className="h-screen relative"></div>

      {/* Sección 3 */}
      <div className="h-screen sticky top-0 bg-red-600 flex items-center justify-center">
        <h1 className="text-white text-4xl">Sección 3</h1>
      </div>

      <div className="h-screen relative"></div>
    </div>
  );
};
