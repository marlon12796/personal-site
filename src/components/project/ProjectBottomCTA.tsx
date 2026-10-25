/**
 * ProjectBottomCTA
 *
 * Shared bottom CTA bar: back-link on the left, optional external link / badge on the right.
 */

import type { LucideIcon } from 'lucide-react'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { MotionSection } from './ProjectCaseAnimations'

type ExternalCTA = {
  href: string
  label: string
  icon?: LucideIcon
}

type Props = {
  backLabel: string
  backHref?: string
  /** If provided, renders a real anchor link. If absent, renders a plain badge. */
  externalCTA?: ExternalCTA
  /** Badge-only (no link) label — shown when externalCTA is absent */
  badgeLabel?: string
  badgeIcon?: LucideIcon
  /** Tailwind colour fragment, e.g. "teal" or "amber" */
  accentColor: string
}

export function ProjectBottomCTA({
  backLabel,
  backHref = '/#projects',
  externalCTA,
  badgeLabel,
  badgeIcon: BadgeIcon,
  accentColor
}: Props) {
  return (
    <MotionSection className='pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4'>
      <Link
        href={backHref}
        className='inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors'
      >
        <ArrowLeft className='w-4 h-4' />
        <span>{backLabel}</span>
      </Link>

      {externalCTA ? (
        <a
          href={externalCTA.href}
          target='_blank'
          rel='noreferrer'
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-${accentColor}-400/30 bg-${accentColor}-400/10 text-${accentColor}-300 font-semibold text-sm hover:bg-${accentColor}-400/20 shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-colors`}
        >
          {externalCTA.icon && <externalCTA.icon className='w-4 h-4' />}
          <span>{externalCTA.label}</span>
          <ExternalLink className='w-4 h-4' />
        </a>
      ) : badgeLabel ? (
        <div
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-${accentColor}-400/30 bg-${accentColor}-400/10 text-${accentColor}-300 font-semibold text-sm shadow-[0_0_20px_rgba(0,0,0,0.2)]`}
        >
          {BadgeIcon && <BadgeIcon className='w-4 h-4' />}
          <span>{badgeLabel}</span>
        </div>
      ) : null}
    </MotionSection>
  )
}
