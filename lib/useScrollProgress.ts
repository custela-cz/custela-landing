'use client'

import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { MathUtils } from 'three'
import { SECTIONS, MORPH_CONFIG } from './constants'

export interface ScrollState {
  offset: number
  sectionIndex: number
  sectionProgress: number
  morphProgress: number
  shapeA: number
  shapeB: number
  noiseFreq: number
  noiseAmp: number
}

const sectionKeys = Object.keys(SECTIONS) as (keyof typeof SECTIONS)[]

export function useScrollProgress() {
  const scroll = useScroll()
  const state = useRef<ScrollState>({
    offset: 0,
    sectionIndex: 0,
    sectionProgress: 0,
    morphProgress: 0,
    shapeA: 0,
    shapeB: 0,
    noiseFreq: 1.5,
    noiseAmp: 0.15,
  })

  useFrame(() => {
    const offset = scroll.offset
    state.current.offset = offset

    // Determine current section
    let idx = 0
    for (let i = 0; i < sectionKeys.length; i++) {
      const sec = SECTIONS[sectionKeys[i]]
      if (offset >= sec.start && offset < sec.end) {
        idx = i
        break
      }
    }
    if (offset >= 1) idx = sectionKeys.length - 1
    state.current.sectionIndex = idx

    // Progress within current section (0–1)
    const sec = SECTIONS[sectionKeys[idx]]
    const sectionLen = sec.end - sec.start
    const raw = (offset - sec.start) / sectionLen
    state.current.sectionProgress = MathUtils.clamp(raw, 0, 1)

    // Morph progress: smooth transition
    const config = MORPH_CONFIG[idx]
    state.current.morphProgress = MathUtils.lerp(
      state.current.morphProgress,
      state.current.sectionProgress,
      0.05
    )
    state.current.shapeA = config.shapeA
    state.current.shapeB = config.shapeB
    state.current.noiseFreq = MathUtils.lerp(
      state.current.noiseFreq,
      config.noiseFreq,
      0.05
    )
    state.current.noiseAmp = MathUtils.lerp(
      state.current.noiseAmp,
      config.noiseAmp,
      0.05
    )
  })

  return state
}
