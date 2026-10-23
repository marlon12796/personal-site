'use client';

import { EductionData } from '@/app/data/content/education';
import { EducationCard } from '@/components/education/EducationCard';
import { useTranslations } from 'next-intl';
export const ListEducation = () => {
	const t = useTranslations('about.eductionData');
	const keys = ['zegelIpaeInstitute', 'secondaryEducation', 'primaryEducation'] as const;
	return (
		<div
			className='relative mt-10 w-full overflow-hidden px-0 py-8 [perspective:1400px] sm:py-12'
			style={{
				backgroundImage:
					'radial-gradient(circle at 1px 1px, rgba(103, 232, 249, 0.12) 1px, transparent 0)',
				backgroundSize: '22px 22px'
			}}
		>
			<div className='pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl' />
			<div className='pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl' />
			<div className='pointer-events-none absolute right-8 top-8 hidden h-24 w-24 rotate-45 border border-cyan-200/10 sm:block [transform:rotate(45deg)_skew(-12deg,-12deg)]' />
			<div className='pointer-events-none absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-fuchsia-400 opacity-70 shadow-[0_0_18px_rgba(34,211,238,0.7)] sm:left-1/2 sm:-translate-x-1/2' />
			<div className='pointer-events-none absolute left-1/2 top-1/4 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl' />
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
	);
};
