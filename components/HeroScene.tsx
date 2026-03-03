'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Environment } from '@react-three/drei'
import * as THREE from 'three'

function Blob() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <mesh ref={ref} scale={2}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#84cc16"
        roughness={0.15}
        metalness={0.8}
        distort={0.35}
        speed={1.2}
      />
    </mesh>
  )
}

export default function HeroScene() {
  return (
    <div className="hero-scene">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[3, 3, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-3, -1, 2]} intensity={0.4} color="#84cc16" />
        <Environment preset="city" />
        <Blob />
      </Canvas>
    </div>
  )
}
