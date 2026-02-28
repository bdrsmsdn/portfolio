export default function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl mb-6 text-[#8B5E3C] font-[cursive] relative inline-block">
      {children}
      <span className="block h-[2px] w-full bg-[#8B5E3C]/40 mt-1" />
    </h2>
  )
}
