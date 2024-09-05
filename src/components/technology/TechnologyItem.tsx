import React from 'react'
import { technologies, type TechnologyKeys } from '@/app/data/Thecnologies'

interface TechnologyItemProps {
  tech: TechnologyKeys
}

const TechnologyItem: React.FC<TechnologyItemProps> = ({ tech }) => (
  <li className='flex items-center gap-4 p-3 rounded-md bg-gradient-to-r from-slate-800 to-purple-900/10'>
    <span className={`[&>svg]:w-5 [&>svg]:aspect-square p-2 rounded-lg ${technologies[tech].bgColor}`}>
      {technologies[tech].icon}
    </span>
    <span className='text-slate-200 text-sm'>{tech}</span>
  </li>
)

export default TechnologyItem
