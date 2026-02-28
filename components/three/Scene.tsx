'use client'

import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import { Suspense, ReactNode } from 'react'
import MorphGeometry from './MorphGeometry'
import Particles from './Particles'
import PostProcessing from './PostProcessing'
import { SCROLL_PAGES } from '@/lib/constants'

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#BFFF37" />
      <pointLight position={[-5, -3, 3]} intensity={0.3} color="#ffffff" />
      <MorphGeometry />
      <Particles />
      <PostProcessing />
    </>
  )
}

interface SceneProps {
  children: ReactNode
}

export default function Scene({ children }: SceneProps) {
  return (
    <div className="canvas-container">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 3.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ScrollControls pages={SCROLL_PAGES} damping={0.25}>
            <SceneContent />
            <Scroll html style={{ width: '100%' }}>
              {children}
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}
