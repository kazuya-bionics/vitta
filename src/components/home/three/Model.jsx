import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";

import { useControls } from "leva";

export const Model = () => {
  const ref = useRef();

  const modelProps = useControls({
      thickness: {value: 0.2, min: 0, max: 3, step: 0.05},
      roughness: {value:0, min:0, max: 1, step: 0.1},
      transmission : { value:0, min:0, max: 1, step: 0.1 },     // transmisión máxima
      ior: {value: 1.2, min:0 , max:3 , step:0.1},
      chromaticAberration: {value: 0.02, min: 0, max: 2},
      backside: {value: true}
  })

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
      <MeshTransmissionMaterial {...modelProps}/>
    </mesh>
  );
}