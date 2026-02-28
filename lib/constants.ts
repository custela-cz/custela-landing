// Section breakpoints (0–1 scroll range mapped to 7 sections)
export const SECTIONS = {
  hero: { start: 0, end: 1 / 7 },
  platforms: { start: 1 / 7, end: 2 / 7 },
  problemSolution: { start: 2 / 7, end: 3 / 7 },
  dashboard: { start: 3 / 7, end: 4 / 7 },
  results: { start: 4 / 7, end: 5 / 7 },
  pricing: { start: 5 / 7, end: 6 / 7 },
  ctaFooter: { start: 6 / 7, end: 1 },
} as const

// Shape indices for the morph shader
export const SHAPES = {
  SPHERE: 0,
  TORUS: 1,
  ICOSAHEDRON: 2,
  PLANE: 3,
  CUBE: 4,
} as const

// Morph config per section: which shapes to blend, noise params
export const MORPH_CONFIG = [
  // Hero: breathing sphere
  { shapeA: SHAPES.SPHERE, shapeB: SHAPES.SPHERE, noiseFreq: 1.5, noiseAmp: 0.15 },
  // Platforms: sphere → torus
  { shapeA: SHAPES.SPHERE, shapeB: SHAPES.TORUS, noiseFreq: 2.0, noiseAmp: 0.1 },
  // Problem → Solution: torus → icosahedron
  { shapeA: SHAPES.TORUS, shapeB: SHAPES.ICOSAHEDRON, noiseFreq: 2.5, noiseAmp: 0.2 },
  // Dashboard: icosahedron → flat plane
  { shapeA: SHAPES.ICOSAHEDRON, shapeB: SHAPES.PLANE, noiseFreq: 1.0, noiseAmp: 0.05 },
  // Results: plane → cube
  { shapeA: SHAPES.PLANE, shapeB: SHAPES.CUBE, noiseFreq: 1.8, noiseAmp: 0.12 },
  // Pricing: cube → sphere
  { shapeA: SHAPES.CUBE, shapeB: SHAPES.SPHERE, noiseFreq: 1.5, noiseAmp: 0.1 },
  // CTA: sphere (explodes via particles)
  { shapeA: SHAPES.SPHERE, shapeB: SHAPES.SPHERE, noiseFreq: 3.0, noiseAmp: 0.3 },
] as const

// Colors
export const COLORS = {
  lime: '#BFFF37',
  limeRgb: [0.749, 1.0, 0.216] as const,
  dark: '#0A0A0A',
  white: '#FFFFFF',
} as const

// Total scroll pages for drei ScrollControls
export const SCROLL_PAGES = 7
