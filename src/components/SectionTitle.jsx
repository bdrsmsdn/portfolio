export default function SectionTitle({ children, number }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      {number && (
        <span className="font-mono text-[#64FFDA] text-sm shrink-0">
          {number}.
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-[#CCD6F6] whitespace-nowrap">
        {children}
      </h2>
      <div className="flex-1 h-px bg-[#1E2D4A] max-w-xs" />
    </div>
  )
}
