'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

/* ── Glowing data node (icosahedron with wireframe) ── */
function DataNode({ position, scale = 1, speed = 1, color = '#84cc16' }: {
  position: [number, number, number]
  scale?: number
  speed?: number
  color?: string
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const wireRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3 * speed
      meshRef.current.rotation.y += delta * 0.2 * speed
    }
    if (wireRef.current) {
      wireRef.current.rotation.x += delta * 0.3 * speed
      wireRef.current.rotation.y += delta * 0.2 * speed
    }
  })

  return (
    <Float speed={1.5 * speed} rotationIntensity={0.3} floatIntensity={0.8}>
      <group position={position}>
        <mesh ref={meshRef} scale={scale}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color={color} transparent opacity={0.08} />
        </mesh>
        <mesh ref={wireRef} scale={scale}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
        </mesh>
        {/* Core glow */}
        <mesh scale={scale * 0.15}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={0.7} />
        </mesh>
      </group>
    </Float>
  )
}

/* ── Orbiting ring ── */
function OrbitalRing({ radius, speed, tilt, color = '#84cc16' }: {
  radius: number
  speed: number
  tilt: [number, number, number]
  color?: string
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed
  })

  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, 0.008, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} />
    </mesh>
  )
}

/* ── Connection lines between nodes ── */
function Connections({ points }: { points: [number, number, number][] }) {
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions: number[] = []
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i][0] - points[j][0]
        const dy = points[i][1] - points[j][1]
        const dz = points[i][2] - points[j][2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < 4) {
          positions.push(...points[i], ...points[j])
        }
      }
    }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    return geo
  }, [points])

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#84cc16" transparent opacity={0.08} />
    </lineSegments>
  )
}

/* ── Floating particles around the scene ── */
function Particles({ count = 60 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const sz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6
      sz[i] = Math.random() * 2 + 0.5
    }
    return [pos, sz]
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02
      ref.current.rotation.x += delta * 0.01
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#84cc16"
        size={0.03}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  )
}

/* ── Central hub ── */
function CentralHub() {
  const outerRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.15
      outerRef.current.rotation.y = t * 0.1
      outerRef.current.scale.setScalar(1 + Math.sin(t * 0.8) * 0.05)
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.2
      innerRef.current.rotation.y = -t * 0.15
    }
  })

  return (
    <group>
      {/* Outer dodecahedron wireframe */}
      <mesh ref={outerRef}>
        <dodecahedronGeometry args={[1.4, 0]} />
        <meshBasicMaterial color="#84cc16" wireframe transparent opacity={0.15} />
      </mesh>
      {/* Inner icosahedron */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshBasicMaterial color="#84cc16" wireframe transparent opacity={0.25} />
      </mesh>
      {/* Core sphere */}
      <mesh>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshBasicMaterial color="#a3e635" transparent opacity={0.6} />
      </mesh>
      {/* Glow sphere */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#84cc16" transparent opacity={0.08} />
      </mesh>
    </group>
  )
}

/* ── Main scene ── */
export default function HeroScene() {
  const nodePositions: [number, number, number][] = [
    [2.5, 1.5, -1],
    [-2.2, 1.8, -0.5],
    [2.8, -1.2, 0.5],
    [-2.5, -1.5, -1],
    [0.8, 2.5, -1.5],
    [-1, -2.3, 0.8],
  ]

  return (
    <div className="hero-scene">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <CentralHub />

        {nodePositions.map((pos, i) => (
          <DataNode
            key={i}
            position={pos}
            scale={0.25 + (i % 3) * 0.12}
            speed={0.6 + (i % 2) * 0.4}
            color={i % 3 === 0 ? '#a3e635' : '#84cc16'}
          />
        ))}

        <Connections points={[[0, 0, 0], ...nodePositions]} />

        <OrbitalRing radius={2.2} speed={0.15} tilt={[0.3, 0, 0]} />
        <OrbitalRing radius={3.0} speed={-0.1} tilt={[0.8, 0.4, 0]} color="#a3e635" />
        <OrbitalRing radius={1.5} speed={0.2} tilt={[1.2, 0.2, 0.5]} />

        <Particles count={80} />
      </Canvas>
    </div>
  )
}
