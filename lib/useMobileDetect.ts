'use client'

import { useState, useEffect } from 'react'

export function useMobileDetect() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      // UA-based check
      const ua = navigator.userAgent
      const mobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)

      // Screen width check
      const smallScreen = window.innerWidth < 768

      // WebGL2 capability check
      let noWebGL2 = false
      try {
        const canvas = document.createElement('canvas')
        const gl = canvas.getContext('webgl2')
        if (!gl) noWebGL2 = true
      } catch {
        noWebGL2 = true
      }

      setIsMobile(mobileUA || smallScreen || noWebGL2)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}
