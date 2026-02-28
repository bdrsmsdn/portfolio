export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Top-left large orb */}
      <div style={{
        position: 'absolute',
        width: '650px', height: '650px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,94,60,0.13) 0%, transparent 68%)',
        top: '-150px', left: '-150px',
        animation: 'floatA 24s ease-in-out infinite',
      }} />
      {/* Right-center orb */}
      <div style={{
        position: 'absolute',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,94,60,0.09) 0%, transparent 68%)',
        top: '35%', right: '-120px',
        animation: 'floatB 30s ease-in-out infinite',
      }} />
      {/* Bottom-left orb */}
      <div style={{
        position: 'absolute',
        width: '420px', height: '420px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,94,60,0.07) 0%, transparent 68%)',
        bottom: '5%', left: '15%',
        animation: 'floatC 20s ease-in-out infinite',
      }} />
    </div>
  )
}
