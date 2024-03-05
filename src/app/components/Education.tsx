import { EductionData } from '../data/content/education';
import React from 'react';
import { EducationCard } from './EducationCard';
const Education = () => {
	return (
		<div className='[margin-block-start:1.5rem] relative after:content-[" "] after:w-[0.2rem] after:h-full after:absolute after:bg-slate-200 after:inset-0 sm:after:inset-[0_0_auto_50%]'>
			{EductionData.map((education, index) => (
				<EducationCard
					title={education.title}
					description={education.description}
					key={education.title}
					headerIcon={education.icon}
					even={(index + 1) % 2 === 0}
				/>
			))}
		</div>
	);
};

export default Education;
