interface ProgressBarProps {
  current: number
  total: number
  className?: string
}

export function ProgressBar({ current, total, className = '' }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100)
  return (
    <div className={`w-full bg-gray-100 rounded-full h-1.5 ${className}`}>
      <div
        className="bg-primary-500 h-1.5 rounded-full transition-all duration-300"
        style={{ width: `${pct}%` }}
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
      />
    </div>
  )
}
