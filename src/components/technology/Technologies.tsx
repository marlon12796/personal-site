import React from 'react';
import { mainTechnologies } from '@/app/data/Thecnologies';
import Subtitle from '../Subtitle';
import { useTranslations } from 'next-intl';
import TechnologyCategory from './TechnologyCategory';

export const Technologies: React.FC = () => {
	const t = useTranslations('home');

	return (
		<section className='w-full  mb-16'>
			<div className='mx-auto px-4 max-w-screen-xl'>
				<Subtitle text={t('techTitle')} />
				<div className='flex flex-col'>
					{Object.keys(mainTechnologies).map((category) => (
						<TechnologyCategory key={category} category={category} techList={mainTechnologies[category]} />
					))}
				</div>
			</div>
		</section>
	);
};
