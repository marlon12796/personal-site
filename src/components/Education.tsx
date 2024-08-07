import { EductionData } from '@/app/data/content/education'
import React from 'react'
import { EducationCard } from './EducationCard'
import { useTranslations } from 'next-intl'
const Education = () => {
  const t = useTranslations('about.eductionData')
  const keys = ['zegelIpaeInstitute', 'secondaryEducation', 'primaryEducation'] as const
  return (
    <div className='[margin-block-start:1.5rem] relative after:content-[" "] after:w-[0.2rem] after:h-full after:absolute after:bg-slate-200 after:inset-0 sm:after:inset-[0_0_auto_50%]'>
      {keys.map((key, index) => (
        <EducationCard
          title={t(`${key}.title`)}
          description={t(`${key}.description`)}
          key={key}
          headerIcon={EductionData[key]}
          even={(index + 1) % 2 === 0}
          time={t(`${key}.date`)}
        />
      ))}
    </div>
  )
}

export default Education
