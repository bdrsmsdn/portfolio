import { useEffect, useRef } from 'react'

const STAR_COUNT = 120

function randomBetween(a, b) {
  return a + Math.random() * (b - a)
}

export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let width = window.innerWidth
    let height = window.innerHeight
    let rafId

    // Generate stars once
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: randomBetween(0.3, 1.6),
      // teal-tinted vs pure white
      teal: Math.random() < 0.18,
      // twinkle phase offset so they don't all pulse together
      phase: Math.random() * Math.PI * 2,
      // twinkle speed (slower = subtler)
      speed: randomBetween(0.004, 0.014),
      // base opacity
      baseOpacity: randomBetween(0.25, 0.75),
      // twinkle amplitude
      amp: randomBetween(0.1, 0.35),
    }))

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    resize()
    window.addEventListener('resize', resize)

    let t = 0
    function draw() {
      ctx.clearRect(0, 0, width, height)

      for (const s of stars) {
        const opacity = s.baseOpacity + Math.sin(t * s.speed + s.phase) * s.amp
        const clamped = Math.max(0, Math.min(1, opacity))

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)

        if (s.teal) {
          ctx.fillStyle = `rgba(100, 255, 218, ${clamped * 0.7})`
        } else {
          ctx.fillStyle = `rgba(200, 214, 246, ${clamped})`
        }
        ctx.fill()
      }

      t++
      rafId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
