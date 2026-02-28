import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    // Only on pointer devices (not touch-only)
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const SIZE = 380
    const pos = { x: -1000, y: -1000 }
    const cur = { x: -1000, y: -1000 }
    let raf

    const onMove = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const tick = () => {
      cur.x = lerp(cur.x, pos.x, 0.055)
      cur.y = lerp(cur.y, pos.y, 0.055)
      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate(${cur.x - SIZE / 2}px, ${cur.y - SIZE / 2}px)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 pointer-events-none"
      style={{
        width: '380px',
        height: '380px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,94,60,0.11) 0%, transparent 65%)',
        zIndex: 1,
        willChange: 'transform',
      }}
    />
  )
}
