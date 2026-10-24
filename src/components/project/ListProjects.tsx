'use client';

import { useTranslations } from 'next-intl';
import Subtitle from '../Subtitle';
import type { ProfessionalCaseSlide } from './ProfessionalCaseCarousel';
import { ProfessionalCaseCard } from './ProfessionalCaseCard';

export const ListProjects: React.FC = () => {
	const h = useTranslations('home');
	const defaultTech = ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'];

	const campusSlides: ProfessionalCaseSlide[] = [
		{ src: '/projects/campus/home-students.png', alt: 'Portal del estudiante: panel interactivo y cursos matriculados' },
		{ src: '/projects/campus/home-admin.png', alt: 'Panel de administración general: métricas y control de módulos' },
		{ src: '/projects/campus/estudiantes-admin-notas.png', alt: 'Gestión académica de notas y registros por alumno' },
		{ src: '/projects/campus/exam-student.png', alt: 'Módulo de evaluaciones y exámenes en línea para estudiantes' },
		{ src: '/projects/campus/silabo-admin.png', alt: 'Administración de sílabos, sesiones y contenidos lectivos' },
		{ src: '/projects/campus/pagos-student.png', alt: 'Módulo de pagos y seguimiento de cuotas académicas' },
		{ src: '/projects/campus/users-admin.png', alt: 'Gestión de usuarios y asignación de roles en la plataforma' },
	];
	const cearSlides: ProfessionalCaseSlide[] = [
		{ src: '/projects/cear/home.png', alt: 'Inicio de la plataforma CEAR Latinoamericano' },
		{ src: '/projects/cear/cursos.png', alt: 'Catálogo de cursos de CEAR Latinoamericano' },
		{ src: '/projects/cear/contacto.png', alt: 'Módulo de contacto y admisión de CEAR Latinoamericano' },
	];
	const mailerSlides: ProfessionalCaseSlide[] = [
		{ src: '/projects/mailer/home.png', alt: 'Panel principal del sistema Mailer' },
		{ src: '/projects/mailer/campaings.png', alt: 'Gestión de campañas del sistema Mailer' },
		{ src: '/projects/mailer/plantillas.png', alt: 'Gestión de plantillas del sistema Mailer' },
		{ src: '/projects/mailer/metrica.png', alt: 'Métricas del sistema Mailer' },
		{ src: '/projects/mailer/diseño.png', alt: 'Diseño del sistema Mailer' },
	];
	const crmSlides: ProfessionalCaseSlide[] = [
		{ src: '/projects/cear-crm/home.png', alt: 'Panel principal del CRM de CEAR Latinoamericano' },
		{ src: '/projects/cear-crm/ENTIDADES2.png', alt: 'Módulo de entidades del CRM de CEAR Latinoamericano' },
		{ src: '/projects/cear-crm/LEAD.png', alt: 'Módulo de leads del CRM de CEAR Latinoamericano' },
		{ src: '/projects/cear-crm/TAREAS.png', alt: 'Módulo de tareas del CRM de CEAR Latinoamericano' },
	];

	return (
		<section className='w-full px-4 my-16 max-w-screen-xl' id='projects'>
			<Subtitle text={h('projectsTitle')} />
			<span className='text-slate-300 block mt-4'>{h('projectsDescription')}</span>

			{/* CASO 1: CAMPUS VIRTUAL (TOP PROYECTO - ASIGNACIÓN 5 MESES) */}
			<ProfessionalCaseCard
				accent='teal'
				isFeatured={true}
				featuredText={h('professionalCase.campusDuration')}
				role={h('professionalCase.campusRole')}
				type={h('professionalCase.type')}
				badge={h('professionalCase.campusDuration')}
				title={h('professionalCase.campusTitle')}
				subtitle={h('professionalCase.campusSubtitle')}
				description={h('professionalCase.campusDescription')}
				technologies={defaultTech}
				videoSrc='https://cearlatinoamericano.edu.pe/sisdocs/video-presentacion/campus_virtual.mp4'
				videoPoster='/projects/campus/home-students.png'
				slides={campusSlides}
				caseStudyHref='/projects/campus-virtual'
				liveUrl='https://campus.cearlatinoamericano.edu.pe/'
				howItWasDoneText={h('professionalCase.howItWasDone')}
				visitText={h('professionalCase.campusVisit')}
			/>

			{/* CASO 2: PLATAFORMA WEB */}
			<ProfessionalCaseCard
				accent='cyan'
				role={h('professionalCase.role')}
				type={h('professionalCase.type')}
				title={h('professionalCase.title')}
				subtitle={h('professionalCase.subtitle')}
				description={h('professionalCase.description')}
				technologies={defaultTech}
				slides={cearSlides}
				caseStudyHref='/projects/cear-plataforma'
				liveUrl='https://cearlatinoamericano.edu.pe/'
				howItWasDoneText={h('professionalCase.howItWasDone')}
				visitText={h('professionalCase.visit')}
			/>

			{/* CASO 3: SISTEMA MAILER */}
			<ProfessionalCaseCard
				accent='amber'
				role={h('professionalCase.mailerRole')}
				type={h('professionalCase.type')}
				title={h('professionalCase.mailerTitle')}
				subtitle={h('professionalCase.mailerSubtitle')}
				description={h('professionalCase.mailerDescription')}
				technologies={['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker']}
				slides={mailerSlides}
				caseStudyHref='/projects/sistema-mailer'
				howItWasDoneText={h('professionalCase.howItWasDone')}
			/>

			{/* CASO 4: CRM INTERNO */}
			<ProfessionalCaseCard
				accent='violet'
				role={h('professionalCase.crmRole')}
				type={h('professionalCase.type')}
				title={h('professionalCase.crmTitle')}
				subtitle={h('professionalCase.crmSubtitle')}
				description={h('professionalCase.crmDescription')}
				technologies={defaultTech}
				slides={crmSlides}
				caseStudyHref='/projects/crm-interno'
				howItWasDoneText={h('professionalCase.howItWasDone')}
			/>
		</section>
	);
};
