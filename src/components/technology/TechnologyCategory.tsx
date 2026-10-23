'use client'

import TechnologyItem from '@/components/technology/TechnologyItem'
import { type TechnologiesList, technologies } from '@/app/data/Thecnologies'
import { useTranslations } from 'next-intl'
interface TechnologyCategoryProps {
  category: string
  techList: TechnologiesList
}

const TechnologyCategory: React.FC<TechnologyCategoryProps> = ({ category, techList }) => {
  const t = useTranslations('home')
  const isCompact = category === 'UI & Performance'
  const isWide = category === 'Frontend' || category === 'Cloud & DevOps'
  const categoryKey = {
    Frontend: 'technologyCategories.frontend',
    Backend: 'technologyCategories.backend',
    'Cloud & DevOps': 'technologyCategories.cloudDevOps',
    'UI & Performance': 'technologyCategories.uiPerformance',
  } as const

  return (
    <div className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a1220]/80 shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-0.5 hover:border-cyan-300/30 ${
      isCompact ? 'p-4 sm:p-5 md:col-span-5' : `p-5 sm:p-6 ${isWide ? 'md:col-span-7' : 'md:col-span-5'}`
    }`}>
      <div className='absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-opacity group-hover:opacity-100' />
      <div className={`relative flex items-center justify-between gap-4 ${isCompact ? 'mb-3' : 'mb-5'}`}>
        <h3 className={`font-semibold tracking-tight text-slate-100 ${isCompact ? 'text-base' : 'text-xl'}`}>{t(categoryKey[category as keyof typeof categoryKey])}</h3>
        <span className='font-mono text-xs text-slate-500'>{String(techList.length).padStart(2, '0')}</span>
      </div>
      <ul className={`relative grid grid-cols-1 sm:grid-cols-2 ${isCompact ? 'gap-1.5' : 'gap-2'}`}>
        {techList.map((tech) => technologies[tech] && <TechnologyItem key={tech} tech={tech} compact={isCompact} />)}
      </ul>
    </div>
  )
}

export default TechnologyCategory
