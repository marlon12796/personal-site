import { cn } from '@/lib/utils';
import { TrendingUp } from 'lucide-react';
interface EducationCardTypes {
	title: string;
	description: string;
	even: boolean;
	headerIcon: React.ReactNode;
	time: string;
}
export const EducationCard = ({ title, description, even, headerIcon, time }: EducationCardTypes) => {
	return (
		<article
			className={cn(
				'[margin-block-end:1.8rem] relative flex [min-block-size:10rem] ',
				{
					'justify-end': even === true,
				},
				{ 'justify-end sm:justify-start': even === false }
			)}
		>
			<div className='w-12 aspect-square absolute  inset-0 sm:inset-[auto_50%] grid place-items-center rounded-full bg-slate-400 [translate:-50%] z-50 '>
				<TrendingUp width={28} height={28} />
			</div>
			<div
				className={cn(
					'w-[90%] sm:w-[45%] relative bg-slate-100 rounded-md shadow-md after:content-[" "] after:absolute after:w-3 after:aspect-square after:bg-indigo-600 after:rounded-sm after:rotate-45',
					{ 'after:inset-[1.25rem_auto_auto_-0.25rem]': even === true },
					{ 'after:inset-[1.25rem_-0.25rem] sm:after:inset-[1.25rem_-0.25rem_auto_auto]': even === false }
				)}
			>
				<header className='[padding-block:0.5em] [padding-inline:1em] flex gap-x-4 items-center  bg-indigo-600 rounded-t-md'>
					<span className='w-8 aspect-square text-black'>{headerIcon}</span>
					<div>
						<h3 className='uppercase font-bold text-stone-900'>{title}</h3>
						<time className='text-sm text-stone-200'>{`(${time})`}</time>
					</div>
				</header>
				<p className='[padding-block:0.5em] [padding-inline:1em] text-slate-700'>{description}</p>
			</div>
		</article>
	);
};
