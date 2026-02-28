'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'
import MorphGeometry from './MorphGeometry'
import Particles from './Particles'
import PostProcessing from './PostProcessing'

// Global scroll state readable from R3F (no drei ScrollControls)
export const scrollState = {
  offset: 0,       // 0–1
  sectionIndex: 0,
  sectionProgress: 0,
}

function ScrollTracker() {
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      scrollState.offset = maxScroll > 0 ? window.scrollY / maxScroll : 0

      // 7 sections
      const idx = Math.min(Math.floor(scrollState.offset * 7), 6)
      scrollState.sectionIndex = idx
      scrollState.sectionProgress = (scrollState.offset * 7) - idx
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return null
}

function CameraAnimation() {
  useFrame((state) => {
    // Gentle camera sway
    const t = state.clock.elapsedTime
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, Math.sin(t * 0.15) * 0.15, 0.02)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, Math.cos(t * 0.1) * 0.1, 0.02)
  })
  return null
}

export default function Scene() {
  return (
    <div className="canvas-container" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 3.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ScrollTracker />
        <CameraAnimation />
        <Suspense fallback={null}>
          <ambientLight intensity={0.15} />
          <pointLight position={[5, 5, 5]} intensity={0.4} color="#BFFF37" />
          <pointLight position={[-5, -3, 3]} intensity={0.2} color="#ffffff" />
          <MorphGeometry />
          <Particles />
          <PostProcessing />
        </Suspense>
      </Canvas>
    </div>
  )
}
