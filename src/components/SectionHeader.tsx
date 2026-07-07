import type { ReactNode } from 'react'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  rightSlot?: ReactNode
}

export function SectionHeader({ title, subtitle, rightSlot }: SectionHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-3">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
      </div>
      {rightSlot}
    </div>
  )
}
