'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import * as THREE from 'three'

/* ── Noise helpers (simplex-like) ── */
const NOISE_GLSL = /* glsl */ `
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
`

const vertexShader = /* glsl */ `
  ${NOISE_GLSL}
  uniform float uTime;
  uniform float uSpeed;
  uniform float uNoiseStrength;
  uniform float uNoiseFreq;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vDisplacement;

  void main() {
    float displacement = snoise(position * uNoiseFreq + uTime * uSpeed)
                       + snoise(position * uNoiseFreq * 2.0 + uTime * uSpeed * 0.6) * 0.5;
    displacement *= uNoiseStrength;
    vDisplacement = displacement;

    vec3 newPosition = position + normal * displacement;
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelViewMatrix * vec4(newPosition, 1.0)).xyz;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vDisplacement;

  void main() {
    // Fresnel effect — bright at edges
    vec3 viewDir = normalize(-vPosition);
    float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.0);

    // Color mix based on displacement + time
    float t = vDisplacement * 2.0 + 0.5;
    vec3 color = mix(uColor1, uColor2, smoothstep(0.2, 0.8, t));
    color = mix(color, uColor3, fresnel * 0.7);

    // Inner glow
    float glow = fresnel * 0.6 + 0.15;

    // Subtle pulse
    glow += sin(uTime * 1.5) * 0.03;

    gl_FragColor = vec4(color, glow);
  }
`

/* ── Morphing blob mesh ── */
function MorphBlob() {
  const meshRef = useRef<THREE.Mesh>(null)
  const matRef = useRef<THREE.ShaderMaterial>(null)

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uSpeed: { value: 0.25 },
    uNoiseStrength: { value: 0.3 },
    uNoiseFreq: { value: 1.5 },
    uColor1: { value: new THREE.Color('#4d7c0f') },  // dark lime
    uColor2: { value: new THREE.Color('#84cc16') },  // lime
    uColor3: { value: new THREE.Color('#d9f99d') },  // light lime (fresnel edge)
  }), [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = t
    }
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.08
      meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.1
    }
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.8, 64]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  )
}

/* ── Glow ring around the blob ── */
function GlowRing({ radius, speed, opacity, tilt }: {
  radius: number; speed: number; opacity: number; tilt: [number, number, number]
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) ref.current.rotation.z = state.clock.getElapsedTime() * speed
  })

  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, 0.01, 16, 128]} />
      <meshBasicMaterial color="#84cc16" transparent opacity={opacity} />
    </mesh>
  )
}

/* ── Orbiting dots ── */
function OrbitDots({ count = 40, radius = 2.6 }: { count?: number; radius?: number }) {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = (i / count) * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = radius + (Math.random() - 0.5) * 0.8
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [count, radius])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.02
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#84cc16" size={0.04} transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

/* ── Main scene ── */
export default function HeroScene() {
  return (
    <div className="hero-scene">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 40 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <MorphBlob />

        <GlowRing radius={2.6} speed={0.12} opacity={0.12} tilt={[0.4, 0, 0]} />
        <GlowRing radius={3.0} speed={-0.08} opacity={0.07} tilt={[1.1, 0.3, 0]} />

        <OrbitDots count={50} radius={2.8} />
      </Canvas>
    </div>
  )
}
