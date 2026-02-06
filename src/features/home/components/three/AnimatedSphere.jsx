import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

import { MeshDistortMaterial, PointMaterial } from "@react-three/drei"
import { Environment } from "@react-three/drei"

export const AnimatedSphere = () => {
    const torusKnot = useRef()

    useFrame((state, delta) => {
        if (torusKnot.current) {
            torusKnot.current.rotation.x += delta * 0.2
            torusKnot.current.rotation.y += delta * 0.4
        } 
    })
    
  return (
    <>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <mesh ref={torusKnot}>
            <sphereGeometry args={[1, 32, 32]} />
            <MeshDistortMaterial color="red" attach="material" distort={0.4} speed={2} roughness={0.1} />
            <Environment preset="city"/>
        </mesh>
    </>
  )
}
