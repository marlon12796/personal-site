/**
 * ProjectMetricsGrid
 *
 * Shared Quick-Stats grid (2 cols mobile / 4 cols desktop).
 * The accent colour is injected via `accentColor` (Tailwind class fragment).
 */
import { MotionStaggerItem, MotionStaggerList } from './ProjectCaseAnimations'

type Metric = {
  label: string
  value: string
}

type Props = {
  metrics: Metric[]
  /** Tailwind colour fragment, e.g. "teal" or "amber" */
  accentColor: string
}

export function ProjectMetricsGrid({ metrics, accentColor }: Props) {
  return (
    <MotionStaggerList className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16'>
      {metrics.map((metric) => (
        <MotionStaggerItem key={metric.label}>
          <div
            className={`p-5 rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-${accentColor}-400/40 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-colors`}
          >
            <div className='text-xs font-mono uppercase tracking-wider text-slate-400 mb-1'>{metric.label}</div>
            <div className={`text-2xl font-bold font-mono text-${accentColor}-300 tracking-tight`}>{metric.value}</div>
          </div>
        </MotionStaggerItem>
      ))}
    </MotionStaggerList>
  )
}
