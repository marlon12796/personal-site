/**
 * ProjectCaseLayout
 *
 * Shared layout shell for all professional case study pages.
 * Handles:
 *   – Dark page bg
 *   – Up to 3 ambient glow blobs (colour-themed per project)
 *   – MotionContainer wrapper
 */
import { type ReactNode } from 'react'
import { MotionAmbientGlow, MotionContainer } from './ProjectCaseAnimations'

export type AmbientGlow = {
  color: string
  className: string
}

type Props = {
  glows: [AmbientGlow, AmbientGlow, AmbientGlow]
  children: ReactNode
}

export function ProjectCaseLayout({ glows, children }: Props) {
  return (
    <main className='relative w-full min-h-screen bg-[#070c16] text-slate-200 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      {glows.map((g, i) => (
        <MotionAmbientGlow key={i} color={g.color} className={g.className} />
      ))}
      <MotionContainer className='relative z-10 max-w-screen-xl mx-auto'>{children}</MotionContainer>
    </main>
  )
}
