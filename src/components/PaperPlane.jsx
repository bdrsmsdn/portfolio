import { useEffect, useState } from 'react'

function generateFlight() {
  const w = window.innerWidth
  const h = window.innerHeight
  const fromLeft = Math.random() > 0.5
  const startX = fromLeft ? -60 : w + 60
  const endX = fromLeft ? w + 60 : -60
  const startY = 80 + Math.random() * (h * 0.6)
  const endY = 80 + Math.random() * (h * 0.6)

  // S-curve: control points swing opposite directions for a wavy path
  const cp1x = w * (0.2 + Math.random() * 0.1)
  const cp1y = startY + (Math.random() > 0.5 ? 1 : -1) * (100 + Math.random() * 150)
  const cp2x = w * (0.7 + Math.random() * 0.1)
  const cp2y = endY + (Math.random() > 0.5 ? 1 : -1) * (100 + Math.random() * 150)

  const d = `M ${startX},${startY} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${endX},${endY}`
  const duration = 5500 + Math.random() * 2500

  return { d, duration, id: Date.now() }
}

export default function PaperPlane() {
  const [flight, setFlight] = useState(null)

  useEffect(() => {
    let t1, t2

    const launch = () => {
      setFlight(generateFlight())
      // hide after flight + fade out time
      t2 = setTimeout(() => {
        setFlight(null)
        t1 = setTimeout(launch, 12000 + Math.random() * 15000)
      }, 9000)
    }

    // first launch after a delay
    t1 = setTimeout(launch, 6000 + Math.random() * 8000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (!flight) return null

  const { d, duration, id } = flight
  const pathId = `pp-path-${id}`
  const dur = `${duration}ms`
  const fadeDur = `${duration + 1800}ms`

  return (
    <svg
      key={id}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 45 }}
    >
      <defs>
        <path id={pathId} d={d} />
      </defs>

      {/*
        Spiral dashed trail:
        Two overlapping dash layers with the same cycle length (18px via pathLength=200)
        but offset by half a cycle → dashes of layer 2 fill the gaps of layer 1,
        creating a helical/spiral illusion on the curved path.
      */}

      {/* Trail layer 1 — long thin dashes */}
      <path
        d={d}
        fill="none"
        stroke="#8B5E3C"
        strokeWidth="1"
        strokeDasharray="8 10"
        strokeLinecap="round"
        strokeOpacity="0.35"
        pathLength="200"
        strokeDashoffset="200"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="200" to="0"
          dur={dur} fill="freeze"
        />
        <animate
          attributeName="stroke-opacity"
          values="0.35;0.35;0"
          keyTimes="0;0.72;1"
          dur={fadeDur} fill="freeze"
        />
      </path>

      {/* Trail layer 2 — short thick dashes, half-cycle offset */}
      <path
        d={d}
        fill="none"
        stroke="#8B5E3C"
        strokeWidth="2.5"
        strokeDasharray="3 15"
        strokeLinecap="round"
        strokeOpacity="0.6"
        pathLength="200"
        strokeDashoffset="200"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="200" to="0"
          dur={dur} fill="freeze"
        />
        <animate
          attributeName="stroke-opacity"
          values="0.6;0.6;0"
          keyTimes="0;0.72;1"
          dur={fadeDur} fill="freeze"
        />
      </path>

      {/* Paper plane — nose points right (+x), rotate="auto" aligns to path */}
      <g opacity="0.9">
        <animateMotion dur={dur} fill="freeze" rotate="auto">
          <mpath href={`#${pathId}`} />
        </animateMotion>
        {/* Upper wing */}
        <path d="M 14,0 L -10,-7 L -1,0 Z" fill="#8B5E3C" />
        {/* Lower wing — slightly darker for 3D depth */}
        <path d="M 14,0 L -10,7 L -1,0 Z" fill="#7a5133" />
        {/* Tail fold upper */}
        <path d="M -1,0 L -10,-7 L -11,-2 Z" fill="#4a2e1a" opacity="0.55" />
        {/* Tail fold lower */}
        <path d="M -1,0 L -10,7 L -11,2 Z" fill="#4a2e1a" opacity="0.35" />
        {/* Center crease line */}
        <line x1="14" y1="0" x2="-11" y2="0" stroke="#4a2e1a" strokeWidth="0.7" opacity="0.4" />
      </g>
    </svg>
  )
}
