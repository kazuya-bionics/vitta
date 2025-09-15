import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Model } from "./Model"

export const CanvasContainer = () => {
  return (
    <div className="absolute top-20 left-0 w-full h-[55vh] z-10 pointer-events-none">
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