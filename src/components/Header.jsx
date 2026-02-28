import { useEffect, useState } from 'react'

export default function Header({ name, role, location }) {
  const [typedName, setTypedName] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTypedName(name.slice(0, i + 1))
      i += 1
      if (i === name.length) clearInterval(interval)
    }, 60)
    return () => clearInterval(interval)
  }, [name])

  return (
    <section className="mb-24">
      <h1 className="text-5xl md:text-6xl text-[#8B5E3C] font-[cursive] tracking-wide">
        {typedName}
        <span className="inline-block w-[2px] h-8 bg-[#8B5E3C] ml-1 animate-pulse align-middle" />
      </h1>
      <p className="mt-3 text-lg italic">{role}</p>
      <p className="text-sm text-[#8B5E3C]">{location}</p>
      <div className="mt-6 flex items-center gap-6">
        <div className="h-[2px] w-28 bg-[#8B5E3C] opacity-40" />
        <a
          href="/Badra_Samsudin_Ramdan_Nugraha_CV.pdf"
          download
          className="px-4 py-2 text-sm border border-[#8B5E3C] text-[#8B5E3C] rounded-md hover:bg-[#8B5E3C] hover:text-white transition"
        >
          Download CV
        </a>
      </div>
    </section>
  )
}
