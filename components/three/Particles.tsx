'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useScrollProgress } from '@/lib/useScrollProgress'

const PARTICLE_COUNT = 500

export default function Particles() {
  const pointsRef = useRef<THREE.Points>(null)
  const scrollState = useScrollProgress()

  const { positions, randoms } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    const rand = new Float32Array(PARTICLE_COUNT)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Distribute on sphere surface
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 1.2 + Math.random() * 0.5
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
      rand[i] = Math.random()
    }
    return { positions: pos, randoms: rand }
  }, [])

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSectionIndex: { value: 0 },
      uSectionProgress: { value: 0 },
      uColor: { value: new THREE.Color('#BFFF37') },
    }),
    []
  )

  useFrame((_, delta) => {
    if (!pointsRef.current) return
    const s = scrollState.current
    const geo = pointsRef.current.geometry
    const posArr = geo.attributes.position.array as Float32Array

    uniforms.uTime.value += delta
    uniforms.uSectionIndex.value = s.sectionIndex
    uniforms.uSectionProgress.value = s.sectionProgress

    const time = uniforms.uTime.value

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      const r = randoms[i]
      const theta = r * Math.PI * 2 + time * (0.1 + r * 0.2)
      const phi = Math.acos(2 * r - 1)

      if (s.sectionIndex === 6 && s.sectionProgress > 0.3) {
        // CTA section: explode outward
        const explodeFactor = (s.sectionProgress - 0.3) / 0.7
        const dist = 1.2 + explodeFactor * 4 * (0.5 + r)
        posArr[i3] = dist * Math.sin(phi) * Math.cos(theta)
        posArr[i3 + 1] = dist * Math.sin(phi) * Math.sin(theta)
        posArr[i3 + 2] = dist * Math.cos(phi)
      } else if (s.sectionIndex === 1) {
        // Platforms: orbit around torus path
        const orbitR = 1.3 + r * 0.3
        const speed = 0.3 + r * 0.2
        posArr[i3] = orbitR * Math.cos(theta + time * speed)
        posArr[i3 + 1] = (r - 0.5) * 0.6 + Math.sin(time * 0.5 + r * 6) * 0.1
        posArr[i3 + 2] = orbitR * Math.sin(theta + time * speed)
      } else if (s.sectionIndex === 2) {
        // Problem/Solution: scatter then reconverge
        const scatter = s.sectionProgress < 0.5
          ? s.sectionProgress * 2
          : 2 - s.sectionProgress * 2
        const dist = 1.2 + scatter * 1.5 * r
        posArr[i3] = dist * Math.sin(phi) * Math.cos(theta)
        posArr[i3 + 1] = dist * Math.sin(phi) * Math.sin(theta)
        posArr[i3 + 2] = dist * Math.cos(phi)
      } else {
        // Default: gentle orbit
        const dist = 1.3 + Math.sin(time * 0.3 + r * 10) * 0.15
        posArr[i3] = dist * Math.sin(phi) * Math.cos(theta + time * 0.1)
        posArr[i3 + 1] = dist * Math.sin(phi) * Math.sin(theta + time * 0.1)
        posArr[i3 + 2] = dist * Math.cos(phi)
      }
    }

    geo.attributes.position.needsUpdate = true
    pointsRef.current.rotation.y += delta * 0.02
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#BFFF37"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
