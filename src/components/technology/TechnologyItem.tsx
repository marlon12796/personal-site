import React from 'react'
import { technologies, type TechnologyKeys } from '@/app/data/Thecnologies'
import { useTranslations } from 'next-intl'

interface TechnologyItemProps {
  tech: TechnologyKeys
  compact?: boolean
}

const TechnologyItem: React.FC<TechnologyItemProps> = ({ tech, compact = false }) => {
  const t = useTranslations('home')
  const labelKey = {
    'Responsive Design': 'technologyItems.responsiveDesign',
    Accessibility: 'technologyItems.accessibility',
    Performance: 'technologyItems.performance',
  }[tech as 'Responsive Design' | 'Accessibility' | 'Performance']

  return (
    <li className={`flex items-center rounded-2xl border border-white/5 bg-white/[0.04] transition-colors hover:bg-white/[0.08] ${compact ? 'gap-2 p-2' : 'gap-3 p-3'}`}>
      <span className={`flex shrink-0 items-center justify-center rounded-xl ${compact ? 'h-8 w-8 [&>svg]:!h-4 [&>svg]:!w-4 [&>img]:!h-4 [&>img]:!w-4' : 'h-12 w-12 [&>svg]:!h-7 [&>svg]:!w-7 [&>img]:!h-8 [&>img]:!w-8'} ${technologies[tech].bgColor}`}>
        {technologies[tech].icon}
      </span>
      <span className={`font-medium text-slate-200 ${compact ? 'text-xs' : 'text-sm'}`}>{labelKey ? t(labelKey) : tech}</span>
    </li>
  )
}

export default TechnologyItem
