import React from 'react'
import TechnologyItem from './TechnologyItem'
import { type TechnologiesList, technologies } from '@/app/data/Thecnologies'
interface TechnologyCategoryProps {
  category: string
  techList: TechnologiesList
}

const TechnologyCategory: React.FC<TechnologyCategoryProps> = ({ category, techList }) => (
  <div>
    <h3 className='text-md text-slate-500 mt-4 mb-2'>{category}</h3>
    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
      {techList.map((tech) => technologies[tech] && <TechnologyItem key={tech} tech={tech} />)}
    </ul>
  </div>
)

export default TechnologyCategory
