import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Model } from "./Model"

export const CanvasContainer = () => {
  return (
    <div className="absolute md:top-20 top-[30%] left-0 w-full md:h-[55vh] h-[30vh] z-10 pointer-events-none">
      <Canvas
        shadows
        camera={{ position: [0, 2, 6], fov: 50 }}
        gl={{ alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[3,5,2]} intensity={1} />


        <Model /> {/* tu objeto 3D */}

        <Environment preset="sunset" background={false} />

      </Canvas>
    </div>
  );
}