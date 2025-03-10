import Image from 'next/image';
import AboutImage from '/public/static/about.avif';
import { ListEducation } from '@/components/education/ListEducation';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
type Props = {
	params: Promise<{ locale: string }>;
};
const Page = async ({ params }: Props) => {
	const locale = (await params).locale;
	setRequestLocale(locale);
	const t = await getTranslations('about');

	return (
		<main className='w-full  mb-16'>
			<section className='max-w-screen-xl px-4 [margin-inline:auto]'>
				<div className='text-slate-500 gap-x-4 items-center justify-between  md:flex md:gap-x-10'>
					<div className='space-y-5 sm:max-w-lg md:px-0 lg:max-w-xl'>
						<h2 className='text-4xl text-slate-300 font-extrabold md:text-5xl'>{t('heading')}</h2>
						<p>{t('description')}</p>
						<Link
							href='/static/cv.pdf'
							target='_blank'
							rel='noopener noreferrer'
							className='w-max group cursor-pointer relative flex gap-2 justify-between items-center overflow-hidden bg-gray-800 rounded-md border-2 border-slate-50 shadow-right-bottom-4 transition-all duration-300 active:shadow-right-bottom active:[translate:3px]'
						>
							<span className='[padding-inline-start:1em] font-semibold text-slate-300 '>{t('downloadCV')}</span>
							<span className='bg-black p-[0.35em] grid place-items-center'>
								<svg className='w-5 aspect-square fill-gray-300' id='bdd05811-e15d-428c-bb53-8661459f9307' viewBox='0 0 35 35'>
									<title>Cv</title>
									<path d='M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z' />
									<path d='M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z' />
									<path d='M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z' />
								</svg>
							</span>
						</Link>
					</div>
					<div className='relative w-full aspect-square mt-14 md:mt-0 md:max-w-xl '>
						<Image
							src={AboutImage}
							className=' md:rounded-tl-[108px] object-cover'
							fill
							sizes='(min-width:768px) 50vw ,80vw'
							alt='about image'
							placeholder='blur'
							priority
						/>
					</div>
				</div>
			</section>
			<section className='text-slate-500 max-w-screen-xl px-4 [margin-inline:auto] [padding-block-start:2em]'>
				<h2 className='text-2xl font-bold tracking-tight  text-slate-300 dark:text-zinc-100 sm:text-4xl'>{t('intro')}</h2>
				<p className='[padding-block-start:1.5em]'>{t('paragraph1')}</p>
				<p className='[padding-block-start:0.5em]'>{t('paragraph2')}</p>
				<p className='[padding-block-start:0.5em]'>{t('paragraph3')} </p>
			</section>
			<section className='max-w-screen-xl px-8 [margin-inline:auto] sm:px-4'>
				<h2 className='font-bold text-slate-300 text-center text-2xl [padding-block-start:0.5em] sm:text-4xl'>
					{t('education')}
				</h2>
				<ListEducation />
			</section>
		</main>
	);
};

export default Page;
