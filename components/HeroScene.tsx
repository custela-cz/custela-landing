'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text, Line } from '@react-three/drei'
import * as THREE from 'three'

const LIME = '#84cc16'
const LIME_LIGHT = '#a3e635'

const platforms = [
  { pos: [-2.2, 1.1, 0] as [number, number, number], label: 'Google Ads' },
  { pos: [-2.2, 0, 0] as [number, number, number], label: 'Meta Ads' },
  { pos: [-2.2, -1.1, 0] as [number, number, number], label: 'Sklik' },
]

const outputs = [
  { pos: [2.2, 0.6, 0] as [number, number, number], label: '+32 % ROAS' },
  { pos: [2.2, -0.6, 0] as [number, number, number], label: '−18 % CPA' },
]

const HUB: [number, number, number] = [0, 0, 0]

/* ── Platform / output node ── */
function Node({ position, label, coreSize = 0.1, glowSize = 0.28 }: {
  position: [number, number, number]
  label: string
  coreSize?: number
  glowSize?: number
}) {
  return (
    <Float speed={1.8} floatIntensity={0.1} rotationIntensity={0}>
      <group position={position}>
        <mesh>
          <sphereGeometry args={[glowSize, 32, 32]} />
          <meshBasicMaterial color={LIME} transparent opacity={0.06} />
        </mesh>
        <mesh>
          <sphereGeometry args={[coreSize, 16, 16]} />
          <meshBasicMaterial color={LIME} transparent opacity={0.55} />
        </mesh>
        <Text
          position={[0, -(coreSize + 0.22), 0]}
          fontSize={0.14}
          color="white"
          fillOpacity={0.5}
          anchorX="center"
          anchorY="top"
        >
          {label}
        </Text>
      </group>
    </Float>
  )
}

/* ── Central Custela hub ── */
function Hub() {
  const wireRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (wireRef.current) {
      wireRef.current.rotation.y = t * 0.15
      wireRef.current.rotation.x = t * 0.08
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(t * 1.2) * 0.06)
    }
  })

  return (
    <Float speed={1.2} floatIntensity={0.06} rotationIntensity={0}>
      <group position={HUB}>
        <mesh ref={glowRef}>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshBasicMaterial color={LIME} transparent opacity={0.04} />
        </mesh>
        <mesh ref={wireRef}>
          <icosahedronGeometry args={[0.3, 1]} />
          <meshBasicMaterial color={LIME} wireframe transparent opacity={0.2} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshBasicMaterial color={LIME_LIGHT} transparent opacity={0.65} />
        </mesh>
      </group>
    </Float>
  )
}

/* ── Animated data particles flowing along a connection ── */
function DataFlow({ from, to, speed = 0.25, count = 3 }: {
  from: [number, number, number]
  to: [number, number, number]
  speed?: number
  count?: number
}) {
  const fromVec = useMemo(() => new THREE.Vector3(...from), [from])
  const toVec = useMemo(() => new THREE.Vector3(...to), [to])
  const refs = useRef<(THREE.Mesh | null)[]>([])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    for (let i = 0; i < count; i++) {
      const mesh = refs.current[i]
      if (!mesh) continue
      const progress = ((t * speed + i / count) % 1)
      mesh.position.lerpVectors(fromVec, toVec, progress)
      ;(mesh.material as THREE.MeshBasicMaterial).opacity =
        Math.sin(progress * Math.PI) * 0.55
    }
  })

  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <mesh key={i} ref={(el) => { refs.current[i] = el }}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color={LIME_LIGHT} transparent />
        </mesh>
      ))}
    </>
  )
}

/* ── Whole scene with subtle rotation ── */
function SceneGroup() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.05
    }
  })

  const connections = useMemo(() => [
    ...platforms.map((p) => ({ from: p.pos, to: HUB })),
    ...outputs.map((o) => ({ from: HUB, to: o.pos })),
  ], [])

  return (
    <group ref={groupRef}>
      <Hub />

      {platforms.map((p, i) => (
        <Node key={`p-${i}`} position={p.pos} label={p.label} />
      ))}

      {outputs.map((o, i) => (
        <Node
          key={`o-${i}`}
          position={o.pos}
          label={o.label}
          coreSize={0.07}
          glowSize={0.2}
        />
      ))}

      {connections.map((c, i) => (
        <group key={`c-${i}`}>
          <Line
            points={[c.from, c.to]}
            color={LIME}
            transparent
            opacity={0.1}
            lineWidth={1}
          />
          <DataFlow
            from={c.from}
            to={c.to}
            speed={0.2 + i * 0.03}
          />
        </group>
      ))}
    </group>
  )
}

export default function HeroScene() {
  return (
    <div className="hero-scene">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <SceneGroup />
      </Canvas>
    </div>
  )
}
