'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'
import * as THREE from 'three'

const LIME = '#84cc16'
const LIME_LIGHT = '#a3e635'

/* ── Layout ── */
const platforms = [
  { pos: [-2.5, 1.15, 0] as [number, number, number], label: 'Google Ads' },
  { pos: [-2.5, 0, 0] as [number, number, number], label: 'Meta Ads' },
  { pos: [-2.5, -1.15, 0] as [number, number, number], label: 'Sklik' },
]
const hub: [number, number, number] = [0, 0, 0]
const outputs = [
  { pos: [2.5, 0.65, 0] as [number, number, number], label: '+32 % ROAS' },
  { pos: [2.5, -0.65, 0] as [number, number, number], label: '−18 % CPA' },
]

const connectionDefs = [
  ...platforms.map((p) => ({ from: p.pos, to: hub })),
  ...outputs.map((o) => ({ from: hub, to: o.pos })),
]

/* ── Particle flow system ── */
const PPC = 80 // particles per connection
const TOTAL = PPC * connectionDefs.length

function ParticleStreams() {
  const pointsRef = useRef<THREE.Points>(null)

  const texture = useMemo(() => {
    const c = document.createElement('canvas')
    c.width = 32
    c.height = 32
    const ctx = c.getContext('2d')!
    const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
    g.addColorStop(0, 'rgba(255,255,255,1)')
    g.addColorStop(0.35, 'rgba(255,255,255,0.4)')
    g.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, 32, 32)
    return new THREE.CanvasTexture(c)
  }, [])

  const { positions, particleData } = useMemo(() => {
    const pos = new Float32Array(TOTAL * 3)
    const data: {
      conn: number
      progress: number
      speed: number
      xN: number
      yN: number
      zN: number
      phase: number
    }[] = []
    for (let c = 0; c < connectionDefs.length; c++) {
      for (let i = 0; i < PPC; i++) {
        data.push({
          conn: c,
          progress: Math.random(),
          speed: 0.1 + Math.random() * 0.14,
          xN: (Math.random() - 0.5) * 0.18,
          yN: (Math.random() - 0.5) * 0.18,
          zN: (Math.random() - 0.5) * 0.5,
          phase: Math.random() * Math.PI * 2,
        })
      }
    }
    return { positions: pos, particleData: data }
  }, [])

  const fromVecs = useMemo(
    () => connectionDefs.map((c) => new THREE.Vector3(...c.from)),
    [],
  )
  const toVecs = useMemo(
    () => connectionDefs.map((c) => new THREE.Vector3(...c.to)),
    [],
  )
  const tmp = useMemo(() => new THREE.Vector3(), [])

  useFrame(({ clock }, delta) => {
    const t = clock.getElapsedTime()
    for (let i = 0; i < TOTAL; i++) {
      const p = particleData[i]
      p.progress = (p.progress + delta * p.speed) % 1

      tmp.lerpVectors(fromVecs[p.conn], toVecs[p.conn], p.progress)

      // organic wiggle, strongest at midpoint
      const w = Math.sin(p.progress * Math.PI)
      tmp.x += Math.sin(t * 1.5 + p.phase) * p.xN * w
      tmp.y += Math.cos(t * 1.2 + p.phase) * p.yN * w
      tmp.z += Math.sin(t * 0.8 + p.phase * 2) * p.zN * w

      positions[i * 3] = tmp.x
      positions[i * 3 + 1] = tmp.y
      positions[i * 3 + 2] = tmp.z
    }
    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          usage={THREE.DynamicDrawUsage}
        />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        color={LIME_LIGHT}
        size={0.1}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

/* ── Small node marker ── */
function NodeMarker({
  position,
  label,
  size = 0.06,
  glow = 0.22,
}: {
  position: [number, number, number]
  label: string
  size?: number
  glow?: number
}) {
  return (
    <Float speed={1.6} floatIntensity={0.08} rotationIntensity={0}>
      <group position={position}>
        <mesh>
          <sphereGeometry args={[glow, 24, 24]} />
          <meshBasicMaterial color={LIME} transparent opacity={0.05} />
        </mesh>
        <mesh>
          <sphereGeometry args={[size, 16, 16]} />
          <meshBasicMaterial color={LIME_LIGHT} transparent opacity={0.55} />
        </mesh>
        <Text
          position={[0, -(size + 0.22), 0]}
          fontSize={0.13}
          color="white"
          fillOpacity={0.45}
          anchorX="center"
          anchorY="top"
        >
          {label}
        </Text>
      </group>
    </Float>
  )
}

/* ── Central hub ── */
function HubNode() {
  const wireRef = useRef<THREE.Mesh>(null)
  const pulseRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (wireRef.current) {
      wireRef.current.rotation.y = t * 0.12
      wireRef.current.rotation.x = t * 0.06
    }
    if (pulseRef.current) {
      pulseRef.current.scale.setScalar(1 + Math.sin(t * 1.2) * 0.08)
    }
  })

  return (
    <Float speed={1} floatIntensity={0.04} rotationIntensity={0}>
      <group position={hub}>
        {/* Outer pulse */}
        <mesh ref={pulseRef}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshBasicMaterial color={LIME} transparent opacity={0.04} />
        </mesh>
        {/* Wireframe shape */}
        <mesh ref={wireRef}>
          <icosahedronGeometry args={[0.28, 1]} />
          <meshBasicMaterial
            color={LIME}
            wireframe
            transparent
            opacity={0.18}
          />
        </mesh>
        {/* Core */}
        <mesh>
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshBasicMaterial color={LIME_LIGHT} transparent opacity={0.8} />
        </mesh>
      </group>
    </Float>
  )
}

/* ── Scene wrapper with subtle sway ── */
function SceneGroup() {
  const ref = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.08) * 0.04
    }
  })

  return (
    <group ref={ref}>
      <ParticleStreams />
      <HubNode />
      {platforms.map((p, i) => (
        <NodeMarker key={`p${i}`} position={p.pos} label={p.label} />
      ))}
      {outputs.map((o, i) => (
        <NodeMarker
          key={`o${i}`}
          position={o.pos}
          label={o.label}
          size={0.05}
          glow={0.18}
        />
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
