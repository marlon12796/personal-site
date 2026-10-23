'use client';

import React from 'react';
import { mainTechnologies } from '@/app/data/Thecnologies';
import Subtitle from '../Subtitle';
import { useTranslations } from 'next-intl';
import TechnologyCategory from './TechnologyCategory';

export const Technologies: React.FC = () => {
	const t = useTranslations('home');

	return (
		<section className='w-full mb-20'>
			<div className='mx-auto max-w-screen-xl px-4'>
				<div className='mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
					<div>
            <p className='mb-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300'>{t('stackLabel')}</p>
						<Subtitle text={t('techTitle')} />
					</div>
					<p className='max-w-md text-sm leading-relaxed text-slate-400'>{t('techDescription')}</p>
				</div>
				<div className='grid gap-4 md:grid-cols-12'>
					{Object.keys(mainTechnologies).map((category) => (
						<TechnologyCategory key={category} category={category} techList={mainTechnologies[category]} />
					))}
				</div>
			</div>
		</section>
	);
};
