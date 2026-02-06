import { useRef } from "react"

import { useFrame } from "@react-three/fiber"

export const AnimatedBox = () => {
  const meshRef = useRef()
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.8
    meshRef.current.rotation.y += delta * 0.8
  })
  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshNormalMaterial color="#ffffff" />
    </mesh>
  )
}
