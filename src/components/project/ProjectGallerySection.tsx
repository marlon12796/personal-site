/**
 * ProjectGallerySection
 *
 * Shared screenshot gallery wrapper with an accent-coloured glow border.
 */
import type { ReactNode } from 'react'
import { MotionSection } from './ProjectCaseAnimations'

type Props = {
  title: string
  subtitle: string
  /** Tailwind colour fragment, e.g. "teal" or "amber" */
  accentColor: string
  /** The carousel (or any media) to render inside the bordered wrapper */
  children: ReactNode
}

export function ProjectGallerySection({ title, subtitle, accentColor, children }: Props) {
  return (
    <MotionSection className='mb-16'>
      <div className='mb-8'>
        <h2 className='text-2xl sm:text-3xl font-bold text-white mb-2'>{title}</h2>
        <p className='text-slate-400'>{subtitle}</p>
      </div>
      <div className={`rounded-2xl border border-${accentColor}-400/20 bg-white/[0.02] p-2 shadow-[0_0_35px_rgba(0,0,0,0.15)]`}>
        {children}
      </div>
    </MotionSection>
  )
}
