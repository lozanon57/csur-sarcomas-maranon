import type { ReactNode } from 'react'

interface BadgeProps {
  variant?: string
  className?: string
  children: ReactNode
}

export function Badge({ variant = '', className = '', children }: BadgeProps) {
  return <span className={`badge ${variant} ${className}`.trim()}>{children}</span>
}
