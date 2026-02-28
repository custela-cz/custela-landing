'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useScrollProgress } from '@/lib/useScrollProgress'
import morphVertexShader from './shaders/morphVertex.glsl'
import morphFragmentShader from './shaders/morphFragment.glsl'

export default function MorphGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)
  const scrollState = useScrollProgress()
  const mouseRef = useRef({ x: 0, y: 0 })

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMorphProgress: { value: 0 },
      uNoiseFrequency: { value: 1.5 },
      uNoiseAmplitude: { value: 0.15 },
      uShapeA: { value: 0 },
      uShapeB: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    []
  )

  // Track mouse position
  if (typeof window !== 'undefined') {
    const handler = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    if (typeof window !== 'undefined' && !meshRef.current) {
      window.addEventListener('mousemove', handler, { passive: true })
    }
  }

  useFrame((_, delta) => {
    if (!meshRef.current) return
    const mat = meshRef.current.material as THREE.ShaderMaterial
    const s = scrollState.current

    mat.uniforms.uTime.value += delta
    mat.uniforms.uMorphProgress.value = THREE.MathUtils.lerp(
      mat.uniforms.uMorphProgress.value,
      s.morphProgress,
      0.08
    )
    mat.uniforms.uNoiseFrequency.value = THREE.MathUtils.lerp(
      mat.uniforms.uNoiseFrequency.value,
      s.noiseFreq,
      0.05
    )
    mat.uniforms.uNoiseAmplitude.value = THREE.MathUtils.lerp(
      mat.uniforms.uNoiseAmplitude.value,
      s.noiseAmp,
      0.05
    )
    mat.uniforms.uShapeA.value = s.shapeA
    mat.uniforms.uShapeB.value = s.shapeB
    mat.uniforms.uMouse.value.set(
      THREE.MathUtils.lerp(mat.uniforms.uMouse.value.x, mouseRef.current.x, 0.05),
      THREE.MathUtils.lerp(mat.uniforms.uMouse.value.y, mouseRef.current.y, 0.05)
    )

    // Gentle rotation
    meshRef.current.rotation.y += delta * 0.1
    meshRef.current.rotation.x += delta * 0.05
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 128, 128]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={morphVertexShader}
        fragmentShader={morphFragmentShader}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
