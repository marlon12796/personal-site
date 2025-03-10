import Image from 'next/image';
import { ContactForm } from '@/components/ContactForm';
import { iconsMethod } from '@/app/data/content/contact';
import imgSetup from '/public/static/setup.webp';
import { getTranslations } from 'next-intl/server';
import { Toaster } from '@/components/ui/sonner';
import { setRequestLocale } from 'next-intl/server';
type Props = {
	params: Promise<{ locale: string }>;
};
const Page = async ({ params }: Props) => {
	const locale = (await params).locale;
	setRequestLocale(locale);
	const t = await getTranslations('contact');
	const keys = ['email', 'phone'] as const;
	return (
		<main className='grow grid'>
			<div className='max-w-screen-xl w-full grid content-center mx-auto px-4 '>
				<div className='relative flex flex-col  md:flex-row-reverse gap-6 md:items-center'>
					<div className='relative min-h-[14rem] md:basis-[40%] md:[min-block-size:15rem]'>
						<Image src={imgSetup} fill alt='setup pc' className='object-cover' sizes='75vw' priority placeholder='blur' />
					</div>
					<div className='space-y-3 px-2 basis-[60%] '>
						<h2 className='text-indigo-600 font-semibold '>{t('heading')}</h2>
						<p className='text-3xl animate-background-shine font-semibold sm:text-4xl  bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text  text-transparent'>
							{t('subheading')}
						</p>
						<p className='text-slate-400'>{t('description')}</p>
					</div>
				</div>

				<div>
					<ul className='mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24'>
						{keys.map((key) => (
							<li key={key}>
								<h3 className='text-slate-300 text-lg font-medium'>{t(`methods.${key}.title`)}</h3>
								<div className='mt-3 flex items-center gap-x-3'>
									<div className='flex-none text-gray-200'>{iconsMethod[key]}</div>
									<p className='flex-none text-gray-200'>{t(`methods.${key}.contact`)}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
				<ContactForm />
				<Toaster />
			</div>
		</main>
	);
};

export default Page;
