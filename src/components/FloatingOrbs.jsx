export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Top-left cyan orb */}
      <div
        style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(100,255,218,0.05) 0%, transparent 65%)',
          top: '-200px',
          left: '-200px',
          animation: 'orbitA 28s ease-in-out infinite',
        }}
      />
      {/* Right blue orb */}
      <div
        style={{
          position: 'absolute',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,195,247,0.04) 0%, transparent 65%)',
          top: '30%',
          right: '-150px',
          animation: 'orbitB 35s ease-in-out infinite',
        }}
      />
      {/* Bottom purple orb */}
      <div
        style={{
          position: 'absolute',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(187,134,252,0.04) 0%, transparent 65%)',
          bottom: '10%',
          left: '20%',
          animation: 'orbitC 22s ease-in-out infinite',
        }}
      />
    </div>
  )
}
