import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 w-10 h-10 border border-[#64FFDA] text-[#64FFDA]
        rounded-lg flex items-center justify-center hover:bg-[#64FFDA]/10
        transition-all duration-300 z-50 backdrop-blur-sm bg-[#050B18]/60 ${
          visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
    >
      <FiArrowUp size={16} />
    </button>
  )
}
