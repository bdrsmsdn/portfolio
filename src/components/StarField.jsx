import { useEffect, useRef } from 'react'

const STAR_COUNT = 120

function rand(a, b) { return a + Math.random() * (b - a) }

function spawnShooter(width, height) {
  // start from top edge or upper-left area
  const sx = rand(-width * 0.05, width * 0.75)
  const sy = rand(-20, height * 0.25)
  const angleDeg = rand(22, 52)          // trajectory: right + slightly down
  const angleRad = (angleDeg * Math.PI) / 180
  const speed    = rand(10, 20)
  const vx       = Math.cos(angleRad) * speed
  const vy       = Math.sin(angleRad) * speed
  const trailLen = rand(90, 200)
  const maxLife  = Math.ceil(trailLen / speed) + 25

  return { x: sx, y: sy, vx, vy, speed, trailLen, life: 0, maxLife, alpha: 0 }
}

export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W = window.innerWidth
    let H = window.innerHeight
    let rafId

    // ── Static twinkling stars ──────────────────────────────
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x:           Math.random() * W,
      y:           Math.random() * H,
      r:           rand(0.3, 1.6),
      teal:        Math.random() < 0.18,
      phase:       Math.random() * Math.PI * 2,
      speed:       rand(0.004, 0.014),
      baseOpacity: rand(0.25, 0.75),
      amp:         rand(0.1, 0.35),
    }))

    // ── Shooting stars ──────────────────────────────────────
    const shooters = []
    let nextSpawn  = Date.now() + rand(2500, 6000)

    function resize() {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width  = W
      canvas.height = H
    }
    resize()
    window.addEventListener('resize', resize)

    let t = 0

    function draw() {
      ctx.clearRect(0, 0, W, H)

      // — twinkling stars —
      for (const s of stars) {
        const op = Math.max(0, Math.min(1,
          s.baseOpacity + Math.sin(t * s.speed + s.phase) * s.amp))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.teal
          ? `rgba(100,255,218,${(op * 0.7).toFixed(3)})`
          : `rgba(200,214,246,${op.toFixed(3)})`
        ctx.fill()
      }

      // — spawn new shooter? —
      if (shooters.length < 2 && Date.now() >= nextSpawn) {
        shooters.push(spawnShooter(W, H))
        nextSpawn = Date.now() + rand(4000, 9000)
      }

      // — draw & update shooters —
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i]
        s.life++

        // fade in first 10 frames, fade out last 12 frames
        const fadeIn  = Math.min(1, s.life / 10)
        const fadeOut = Math.max(0, 1 - Math.max(0, s.life - (s.maxLife - 12)) / 12)
        s.alpha = Math.min(fadeIn, fadeOut)

        if (s.alpha > 0.01) {
          // tail → head gradient
          const nx  = s.vx / s.speed          // unit direction x
          const ny  = s.vy / s.speed          // unit direction y
          const tx  = s.x - nx * s.trailLen   // tail x
          const ty  = s.y - ny * s.trailLen   // tail y

          const grad = ctx.createLinearGradient(tx, ty, s.x, s.y)
          grad.addColorStop(0,   `rgba(255,255,255,0)`)
          grad.addColorStop(0.5, `rgba(210,235,255,${(s.alpha * 0.25).toFixed(3)})`)
          grad.addColorStop(1,   `rgba(255,255,255,${(s.alpha * 0.95).toFixed(3)})`)

          ctx.beginPath()
          ctx.moveTo(tx, ty)
          ctx.lineTo(s.x, s.y)
          ctx.strokeStyle = grad
          ctx.lineWidth   = 1.4
          ctx.lineCap     = 'round'
          ctx.stroke()

          // bright head dot
          ctx.beginPath()
          ctx.arc(s.x, s.y, 1.8, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255,255,255,${s.alpha.toFixed(3)})`
          ctx.fill()

          // soft glow around head
          const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 5)
          glow.addColorStop(0, `rgba(180,230,255,${(s.alpha * 0.55).toFixed(3)})`)
          glow.addColorStop(1, `rgba(180,230,255,0)`)
          ctx.beginPath()
          ctx.arc(s.x, s.y, 5, 0, Math.PI * 2)
          ctx.fillStyle = glow
          ctx.fill()
        }

        s.x += s.vx
        s.y += s.vy

        // remove when offscreen or expired
        if (s.life >= s.maxLife || s.x > W + 60 || s.y > H + 60) {
          shooters.splice(i, 1)
        }
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
