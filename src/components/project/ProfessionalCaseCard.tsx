'use client'

import { ArrowRight, ExternalLink, Star } from 'lucide-react'
import React from 'react'
import { pathnames } from '@/i18n/config'
import { Link, useRouter } from '@/i18n/navigation'
import { CaseVideoPlayer } from './CaseVideoPlayer'
import { ProfessionalCaseCarousel, type ProfessionalCaseSlide } from './ProfessionalCaseCarousel'

export type AccentColor = 'teal' | 'cyan' | 'amber' | 'violet'

export type ProfessionalCaseCardProps = {
  accent: AccentColor
  role: string
  type: string
  badge?: string
  title: string
  subtitle: string
  description: string
  technologies: string[]
  slides?: ProfessionalCaseSlide[]
  videoSrc?: string
  videoPoster?: string
  caseStudyHref: keyof typeof pathnames
  liveUrl?: string
  howItWasDoneText: string
  visitText?: string
  isFeatured?: boolean
  featuredText?: string
}

const colorConfig: Record<
  AccentColor,
  {
    cardBorder: string
    neonGlow: string
    topNeonLine: string
    glowBg: string
    patternRgba: string
    roleText: string
    badgeBorder: string
    badgeBg: string
    badgeText: string
    buttonOutline: string
    buttonSolid: string
  }
> = {
  teal: {
    cardBorder: 'border-teal-400/35 hover:border-teal-300/80',
    neonGlow: 'shadow-[0_0_30px_rgba(20,184,166,0.22)] hover:shadow-[0_0_60px_rgba(45,212,191,0.5)]',
    topNeonLine: 'bg-gradient-to-r from-transparent via-teal-300 to-transparent',
    glowBg: 'bg-teal-400/15',
    patternRgba: 'rgba(45,212,191,0.08)',
    roleText: 'text-teal-300',
    badgeBorder: 'border-teal-400/40',
    badgeBg: 'bg-teal-400/15',
    badgeText: 'text-teal-200',
    buttonOutline:
      'border-teal-400/50 bg-teal-400/15 text-teal-200 hover:bg-teal-400/30 hover:border-teal-300 shadow-[0_0_15px_rgba(45,212,191,0.2)]',
    buttonSolid: 'bg-teal-400 hover:bg-teal-300 text-slate-950 shadow-[0_0_20px_rgba(45,212,191,0.4)]'
  },
  cyan: {
    cardBorder: 'border-cyan-400/35 hover:border-cyan-300/80',
    neonGlow: 'shadow-[0_0_30px_rgba(6,182,212,0.22)] hover:shadow-[0_0_60px_rgba(6,182,212,0.5)]',
    topNeonLine: 'bg-gradient-to-r from-transparent via-cyan-300 to-transparent',
    glowBg: 'bg-cyan-400/15',
    patternRgba: 'rgba(103,232,249,0.08)',
    roleText: 'text-cyan-300',
    badgeBorder: 'border-cyan-400/40',
    badgeBg: 'bg-cyan-400/15',
    badgeText: 'text-cyan-200',
    buttonOutline:
      'border-cyan-400/50 bg-cyan-400/15 text-cyan-200 hover:bg-cyan-400/30 hover:border-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]',
    buttonSolid: 'bg-cyan-300 hover:bg-cyan-200 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
  },
  amber: {
    cardBorder: 'border-amber-400/35 hover:border-amber-300/80',
    neonGlow: 'shadow-[0_0_30px_rgba(245,158,11,0.22)] hover:shadow-[0_0_60px_rgba(245,158,11,0.5)]',
    topNeonLine: 'bg-gradient-to-r from-transparent via-amber-300 to-transparent',
    glowBg: 'bg-amber-400/15',
    patternRgba: 'rgba(251,191,36,0.08)',
    roleText: 'text-amber-300',
    badgeBorder: 'border-amber-400/40',
    badgeBg: 'bg-amber-400/15',
    badgeText: 'text-amber-200',
    buttonOutline:
      'border-amber-400/50 bg-amber-400/15 text-amber-200 hover:bg-amber-400/30 hover:border-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]',
    buttonSolid: 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.4)]'
  },
  violet: {
    cardBorder: 'border-violet-400/35 hover:border-violet-300/80',
    neonGlow: 'shadow-[0_0_30px_rgba(168,85,247,0.22)] hover:shadow-[0_0_60px_rgba(168,85,247,0.5)]',
    topNeonLine: 'bg-gradient-to-r from-transparent via-violet-300 to-transparent',
    glowBg: 'bg-violet-400/15',
    patternRgba: 'rgba(167,139,250,0.08)',
    roleText: 'text-violet-300',
    badgeBorder: 'border-violet-400/40',
    badgeBg: 'bg-violet-400/15',
    badgeText: 'text-violet-200',
    buttonOutline:
      'border-violet-400/50 bg-violet-400/15 text-violet-200 hover:bg-violet-400/30 hover:border-violet-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]',
    buttonSolid: 'bg-violet-400 hover:bg-violet-300 text-slate-950 shadow-[0_0_20px_rgba(168,85,247,0.4)]'
  }
}

export const ProfessionalCaseCard: React.FC<ProfessionalCaseCardProps> = ({
  accent,
  role,
  type,
  badge,
  title,
  subtitle,
  description,
  technologies,
  slides,
  videoSrc,
  videoPoster,
  caseStudyHref,
  liveUrl,
  howItWasDoneText,
  visitText,
  isFeatured,
  featuredText
}) => {
  const router = useRouter()
  const config = colorConfig[accent]

  return (
    <article
      onClick={(e) => {
        const target = e.target as HTMLElement
        if (target.closest('button') || target.closest('a')) return
        router.push(caseStudyHref)
      }}
      className={`group relative mt-8 cursor-pointer overflow-hidden rounded-3xl border ${config.cardBorder} bg-[#0a1220]/85 p-5 ${config.neonGlow} backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 sm:p-7`}
    >
      <Link href={caseStudyHref} className='absolute inset-0 z-0' aria-label={howItWasDoneText} />

      {/* Neon top accent line */}
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] ${config.topNeonLine} opacity-90`} />

      {/* Ambient background glow */}
      <div
        className={`pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full ${config.glowBg} blur-3xl transition-opacity group-hover:opacity-100`}
      />
      <div
        className='pointer-events-none absolute inset-0 opacity-25'
        style={{
          backgroundImage: `linear-gradient(${config.patternRgba} 1px, transparent 1px), linear-gradient(90deg, ${config.patternRgba} 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Featured Star Badge */}
      {isFeatured && (
        <div className='relative z-20 mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-gradient-to-r from-amber-500/20 via-teal-500/20 to-emerald-500/20 px-3.5 py-1 text-xs font-bold text-amber-200 shadow-[0_0_20px_rgba(251,191,36,0.35)] backdrop-blur-md'>
          <Star className='h-3.5 w-3.5 fill-amber-300 text-amber-300 animate-pulse' />
          <span>{featuredText || 'Top Proyecto Destacado'}</span>
        </div>
      )}

      <div className='relative z-10 grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end'>
        <div className='relative z-20'>
          {videoSrc ? (
            <CaseVideoPlayer
              src={videoSrc}
              poster={videoPoster || (slides && slides[0]?.src)}
              accentColor={accent}
              title={title}
            />
          ) : (
            <ProfessionalCaseCarousel
              slides={slides || []}
              aspect='aspect-[16/9.6]'
              showCaption={false}
              allowFullscreen={false}
            />
          )}
        </div>

        <div className='max-w-3xl pointer-events-none'>
          <div
            className={`mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${config.roleText}`}
          >
            <span>{role}</span>
            <span className='text-slate-600'>/</span>
            <span className='text-slate-500'>{type}</span>
            {badge && (
              <span
                className={`rounded-full border ${config.badgeBorder} ${config.badgeBg} px-2.5 py-0.5 text-[10px] font-bold ${config.badgeText}`}
              >
                {badge}
              </span>
            )}
          </div>
          <h3 className='flex items-center gap-2 text-2xl font-bold tracking-tight text-white sm:text-3xl'>
            {isFeatured && (
              <Star className='h-6 w-6 shrink-0 fill-amber-300 text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]' />
            )}
            <span>{title}</span>
          </h3>
          <p className='mt-2 text-base font-medium text-slate-300'>{subtitle}</p>
          <p className='mt-4 max-w-2xl text-sm leading-7 text-slate-400'>{description}</p>
          <div className='mt-6 flex flex-wrap gap-2'>
            {technologies.map((technology) => (
              <span
                key={technology}
                className='rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-slate-300'
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className='relative z-20 flex flex-wrap items-center gap-3'>
          <Link
            href={caseStudyHref}
            className={`relative inline-flex w-fit items-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold transition ${config.buttonOutline}`}
          >
            <span>{howItWasDoneText}</span>
            <ArrowRight className='h-4 w-4' />
          </Link>
          {liveUrl && (
            <a
              href={liveUrl}
              target='_blank'
              rel='noreferrer'
              className={`relative inline-flex w-fit items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition ${config.buttonSolid}`}
            >
              {visitText || 'Visitar sitio'}
              <ExternalLink className='h-4 w-4' />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
