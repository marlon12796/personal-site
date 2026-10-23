'use client';

import { useTranslations } from 'next-intl';
import Subtitle from '../Subtitle';
import { ExternalLink } from 'lucide-react';
import { ProfessionalCaseCarousel, type ProfessionalCaseSlide } from './ProfessionalCaseCarousel';

export const ListProjects: React.FC = () => {
	const h = useTranslations('home');
	const technologies = ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'];
	const crmSlides: ProfessionalCaseSlide[] = [
		{ src: '/projects/cear-crm/home.png', alt: 'Panel principal del CRM de CEAR Latinoamericano' },
		{ src: '/projects/cear-crm/ENTIDADES2.png', alt: 'Módulo de entidades del CRM de CEAR Latinoamericano' },
		{ src: '/projects/cear-crm/LEAD.png', alt: 'Módulo de leads del CRM de CEAR Latinoamericano' },
		{ src: '/projects/cear-crm/TAREAS.png', alt: 'Módulo de tareas del CRM de CEAR Latinoamericano' },
	];
	const mailerSlides: ProfessionalCaseSlide[] = [
		{ src: '/projects/mailer/home.png', alt: 'Panel principal del sistema Mailer' },
		{ src: '/projects/mailer/campaings.png', alt: 'Gestión de campañas del sistema Mailer' },
		{ src: '/projects/mailer/plantillas.png', alt: 'Gestión de plantillas del sistema Mailer' },
		{ src: '/projects/mailer/metrica.png', alt: 'Métricas del sistema Mailer' },
		{ src: '/projects/mailer/diseño.png', alt: 'Diseño del sistema Mailer' },
	];

	return (
		<section className='w-full px-4 my-16 max-w-screen-xl' id='projects'>
			<Subtitle text={h('projectsTitle')} />
			<span className='text-slate-300 block mt-4'>{h('projectsDescription')}</span>
			<article className='group relative mt-8 overflow-hidden rounded-3xl border border-cyan-300/20 bg-[#0a1220]/80 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-all hover:-translate-y-1 hover:border-cyan-300/45 sm:p-6'>
				<div className='pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl' />
				<div className='pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(103,232,249,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.08)_1px,transparent_1px)] [background-size:28px_28px]' />
				<div className='relative grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end'>
					<ProfessionalCaseCarousel />
					<div className='max-w-3xl'>
						<div className='mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300'>
							<span>{h('professionalCase.role')}</span>
							<span className='text-slate-600'>/</span>
							<span className='text-slate-500'>{h('professionalCase.type')}</span>
						</div>
						<h3 className='text-2xl font-bold tracking-tight text-white sm:text-3xl'>{h('professionalCase.title')}</h3>
						<p className='mt-2 text-base font-medium text-slate-300'>{h('professionalCase.subtitle')}</p>
						<p className='mt-4 max-w-2xl text-sm leading-7 text-slate-400'>{h('professionalCase.description')}</p>
						<div className='mt-6 flex flex-wrap gap-2'>
							{technologies.map((technology) => (
								<span key={technology} className='rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-slate-300'>
									{technology}
								</span>
							))}
						</div>
					</div>
					<a href='https://cearlatinoamericano.edu.pe/' target='_blank' rel='noreferrer' className='relative inline-flex w-fit items-center gap-2 rounded-xl bg-cyan-300 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200'>
						{h('professionalCase.visit')}
						<ExternalLink className='h-4 w-4' />
					</a>
				</div>
			</article>
			<article className='group relative mt-6 overflow-hidden rounded-3xl border border-amber-300/20 bg-[#0a1220]/80 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-all hover:-translate-y-1 hover:border-amber-300/45 sm:p-6'>
				<div className='pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl' />
				<div className='pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(251,191,36,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.08)_1px,transparent_1px)] [background-size:28px_28px]' />
				<div className='relative grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end'>
					<ProfessionalCaseCarousel slides={mailerSlides} />
					<div className='max-w-3xl'>
						<div className='mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300'>
							<span>{h('professionalCase.mailerRole')}</span>
							<span className='text-slate-600'>/</span>
							<span className='text-slate-500'>{h('professionalCase.type')}</span>
						</div>
						<h3 className='text-2xl font-bold tracking-tight text-white sm:text-3xl'>{h('professionalCase.mailerTitle')}</h3>
						<p className='mt-2 text-base font-medium text-slate-300'>{h('professionalCase.mailerSubtitle')}</p>
						<p className='mt-4 max-w-2xl text-sm leading-7 text-slate-400'>{h('professionalCase.mailerDescription')}</p>
						<div className='mt-6 flex flex-wrap gap-2'>
							{['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'].map((technology) => (
								<span key={technology} className='rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-slate-300'>
									{technology}
								</span>
							))}
						</div>
					</div>
				</div>
			</article>
			<article className='group relative mt-6 overflow-hidden rounded-3xl border border-violet-300/20 bg-[#0a1220]/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-all hover:-translate-y-1 hover:border-violet-300/45 sm:p-8'>
				<div className='pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl' />
				<div className='relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center'>
					<ProfessionalCaseCarousel slides={crmSlides} />
					<div>
						<div className='mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
							<span>{h('professionalCase.crmRole')}</span>
							<span className='text-slate-600'>/</span>
							<span className='text-slate-500'>{h('professionalCase.type')}</span>
						</div>
						<h3 className='text-2xl font-bold tracking-tight text-white sm:text-3xl'>{h('professionalCase.crmTitle')}</h3>
						<p className='mt-2 text-base font-medium text-slate-300'>{h('professionalCase.crmSubtitle')}</p>
						<p className='mt-4 text-sm leading-7 text-slate-400'>{h('professionalCase.crmDescription')}</p>
						<div className='mt-6 flex flex-wrap gap-2'>
							{technologies.map((technology) => (
								<span key={technology} className='rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-slate-300'>
									{technology}
								</span>
							))}
						</div>
					</div>
				</div>
			</article>
		</section>
	);
};
