'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scrollState } from './Scene'

const PARTICLE_COUNT = 400

export default function Particles() {
  const pointsRef = useRef<THREE.Points>(null)
  const timeRef = useRef(0)

  const { positions, randoms } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    const rand = new Float32Array(PARTICLE_COUNT)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
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

  useFrame((_, delta) => {
    if (!pointsRef.current) return
    const s = scrollState
    const geo = pointsRef.current.geometry
    const posArr = geo.attributes.position.array as Float32Array

    timeRef.current += delta

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      const r = randoms[i]
      const theta = r * Math.PI * 2 + timeRef.current * (0.05 + r * 0.1)
      const phi = Math.acos(2 * r - 1)

      if (s.sectionIndex === 6 && s.sectionProgress > 0.3) {
        const explodeFactor = (s.sectionProgress - 0.3) / 0.7
        const dist = 1.2 + explodeFactor * 3 * (0.5 + r)
        posArr[i3] = dist * Math.sin(phi) * Math.cos(theta)
        posArr[i3 + 1] = dist * Math.sin(phi) * Math.sin(theta)
        posArr[i3 + 2] = dist * Math.cos(phi)
      } else {
        const dist = 1.3 + Math.sin(timeRef.current * 0.2 + r * 10) * 0.1
        posArr[i3] = dist * Math.sin(phi) * Math.cos(theta + timeRef.current * 0.05)
        posArr[i3 + 1] = dist * Math.sin(phi) * Math.sin(theta + timeRef.current * 0.05)
        posArr[i3 + 2] = dist * Math.cos(phi)
      }
    }

    geo.attributes.position.needsUpdate = true
    pointsRef.current.rotation.y += delta * 0.015
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
        size={0.012}
        color="#BFFF37"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
