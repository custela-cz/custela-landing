'use client'

import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scrollState } from './Scene'
import { MORPH_CONFIG } from '@/lib/constants'
import morphVertexShader from './shaders/morphVertex.glsl'
import morphFragmentShader from './shaders/morphFragment.glsl'

export default function MorphGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)
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

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  useFrame((_, delta) => {
    if (!meshRef.current) return
    const mat = meshRef.current.material as THREE.ShaderMaterial
    const s = scrollState
    const config = MORPH_CONFIG[s.sectionIndex] || MORPH_CONFIG[0]

    mat.uniforms.uTime.value += delta
    mat.uniforms.uMorphProgress.value = THREE.MathUtils.lerp(
      mat.uniforms.uMorphProgress.value,
      s.sectionProgress,
      0.06
    )
    mat.uniforms.uNoiseFrequency.value = THREE.MathUtils.lerp(
      mat.uniforms.uNoiseFrequency.value,
      config.noiseFreq,
      0.04
    )
    mat.uniforms.uNoiseAmplitude.value = THREE.MathUtils.lerp(
      mat.uniforms.uNoiseAmplitude.value,
      config.noiseAmp,
      0.04
    )
    mat.uniforms.uShapeA.value = config.shapeA
    mat.uniforms.uShapeB.value = config.shapeB
    mat.uniforms.uMouse.value.set(
      THREE.MathUtils.lerp(mat.uniforms.uMouse.value.x, mouseRef.current.x, 0.03),
      THREE.MathUtils.lerp(mat.uniforms.uMouse.value.y, mouseRef.current.y, 0.03)
    )

    // Gentle rotation
    meshRef.current.rotation.y += delta * 0.08
    meshRef.current.rotation.x += delta * 0.04
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
