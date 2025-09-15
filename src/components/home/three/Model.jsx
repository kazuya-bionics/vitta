import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";

export const Model = () => {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.x = Math.sin(t * 0.5) * 1.2;
    ref.current.position.y = Math.sin(t * 0.8) * 0.2 + 0.5; // bajamos de 1.5 a 0.5
    ref.current.rotation.y = t * 0.3;
    ref.current.rotation.x = t * 0.15;
    });

  return (
    <mesh ref={ref} >
      {/* Geometría por defecto de Three.js */}
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      {/* Material transparente tipo vidrio */}
      <MeshTransmissionMaterial
        thickness={0.5}
        roughness={0.1}
        transmission={1}      // transmisión máxima
        ior={1.5}
        chromaticAberration={0.0} // opcional
        backside={true}
        color="#ffffff" 
      />
    </mesh>
  );
}