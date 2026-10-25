import { Cloud, CreditCard, Database, ExternalLink, GraduationCap, Layout, Server, ShieldCheck, Zap } from 'lucide-react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { CaseVideoPlayer } from '@/components/project/CaseVideoPlayer'
import { ProfessionalCaseCarousel, type ProfessionalCaseSlide } from '@/components/project/ProfessionalCaseCarousel'
import type { ArchitectureLayer } from '@/components/project/ProjectArchitectureBento'
import { ProjectArchitectureBento } from '@/components/project/ProjectArchitectureBento'
import { ProjectBottomCTA } from '@/components/project/ProjectBottomCTA'
import { ProjectBusinessChallenge } from '@/components/project/ProjectBusinessChallenge'
import { ProjectCaseHeader } from '@/components/project/ProjectCaseHeader'
import { ProjectCaseLayout } from '@/components/project/ProjectCaseLayout'
import { ProjectEngineeringChallenges } from '@/components/project/ProjectEngineeringChallenges'
import { ProjectGallerySection } from '@/components/project/ProjectGallerySection'
import { ProjectMetricsGrid } from '@/components/project/ProjectMetricsGrid'
import { CAMPUS_TECH_CATEGORIES, ProjectTechStackGrid } from '@/components/project/ProjectTechStackGrid'
import { type Locale, locales } from '@/i18n/config'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Campus Virtual CEAR Latinoamericano | Caso Profesional Full-Stack',
  description:
    'Arquitectura y desarrollo del Campus Virtual oficial de CEAR Latinoamericano durante una asignación estratégica de 5 meses con Next.js, NestJS, PostgreSQL, Redis, Niubiz y Docker.'
}

type Props = {
  params: Promise<{ locale: string }>
}

type Metric = { label: string; value: string }
type EngineeringItem = { title: string; description: string }

const campusSlides: ProfessionalCaseSlide[] = [
  {
    src: '/projects/campus/home-students.webp',
    alt: 'Vista Estudiante: Panel principal de asignaturas y cronograma de sesiones'
  },
  {
    src: '/projects/campus/home-admin.webp',
    alt: 'Vista Administrador: Dashboard general, métricas y control de accesos'
  },
  {
    src: '/projects/campus/estudiantes-admin-notas.webp',
    alt: 'Gestión Administrativa: Registro y ponderación de calificaciones de alumnos'
  },
  {
    src: '/projects/campus/exam-student.webp',
    alt: 'Módulo de Exámenes: Interfaz de evaluaciones interactivas para estudiantes'
  },
  {
    src: '/projects/campus/silabo-admin.webp',
    alt: 'Gestión Académica: Administración modular de sílabos y material didáctico'
  },
  {
    src: '/projects/campus/pagos-student.webp',
    alt: 'Módulo Financiero: Historial de pagos, comprobantes y cuotas del estudiante'
  },
  {
    src: '/projects/campus/users-admin.webp',
    alt: 'Seguridad y Accesos: Gestión de usuarios y control de roles (RBAC)'
  },
  {
    src: '/projects/campus/config-admin.webp',
    alt: 'Configuración del Sistema: Parámetros institucionales y de plataforma'
  }
]

const Page = async ({ params }: Props) => {
  const { locale } = await params
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'campusProject'
  })

  const metrics = t.raw('metrics') as Metric[]
  const businessPoints = t.raw('businessProblem.points') as string[]
  const engineeringChallenges = t.raw('engineeringChallenges.items') as EngineeringItem[]

  const architectureLayers: ArchitectureLayer[] = [
    {
      badge: 'Capa 01 • Experiencia de Usuario',
      badgeColor: 'text-teal-300 border-teal-400/30 bg-teal-400/10',
      colSpan: 'lg:col-span-7',
      gradient: 'from-[#0c222e]/80 via-[#07131e]/90 to-[#050b14]',
      icon: Layout,
      name: t('architecture.layers.frontend.name'),
      color: 'text-teal-400',
      borderColor: 'border-teal-400/30 hover:border-teal-400/60 shadow-[0_0_30px_rgba(45,212,191,0.08)]',
      chips: ['Next.js (App Router)', 'TypeScript', 'TanStack Query', 'Tailwind CSS'],
      details: t.raw('architecture.layers.frontend.details') as string[],
      dotColor: 'bg-teal-400',
      dotGlow: 'shadow-[0_0_8px_rgba(45,212,191,0.7)]'
    },
    {
      badge: 'Capa 02 • Seguridad & Core',
      badgeColor: 'text-cyan-300 border-cyan-400/30 bg-cyan-400/10',
      colSpan: 'lg:col-span-5',
      gradient: 'from-[#0a1e36]/80 via-[#071224]/90 to-[#050b14]',
      icon: Database,
      name: t('architecture.layers.backend.name'),
      color: 'text-cyan-400',
      borderColor: 'border-cyan-400/30 hover:border-cyan-400/60 shadow-[0_0_30px_rgba(34,211,238,0.08)]',
      chips: ['NestJS API', 'PostgreSQL ACID', 'Redis Cache', 'MFA + Magic Links'],
      details: t.raw('architecture.layers.backend.details') as string[],
      dotColor: 'bg-cyan-400',
      dotGlow: 'shadow-[0_0_8px_rgba(34,211,238,0.7)]'
    },
    {
      badge: 'Capa 03 • Fintech & Almacenamiento',
      badgeColor: 'text-indigo-300 border-indigo-400/30 bg-indigo-400/10',
      colSpan: 'lg:col-span-5',
      gradient: 'from-[#14163b]/80 via-[#0c0e25]/90 to-[#050b14]',
      icon: CreditCard,
      name: t('architecture.layers.fintech.name'),
      color: 'text-indigo-400',
      borderColor: 'border-indigo-400/30 hover:border-indigo-400/60 shadow-[0_0_30px_rgba(129,140,248,0.08)]',
      chips: ['Pasarela Niubiz', 'AWS S3', 'Google Meet', 'Streaming Local'],
      details: t.raw('architecture.layers.fintech.details') as string[],
      dotColor: 'bg-indigo-400',
      dotGlow: 'shadow-[0_0_8px_rgba(129,140,248,0.7)]'
    },
    {
      badge: 'Capa 04 • Infraestructura & Escala',
      badgeColor: 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10',
      colSpan: 'lg:col-span-7',
      gradient: 'from-[#0a261e]/80 via-[#061813]/90 to-[#050b14]',
      icon: Server,
      name: t('architecture.layers.devops.name'),
      color: 'text-emerald-400',
      borderColor: 'border-emerald-400/30 hover:border-emerald-400/60 shadow-[0_0_30px_rgba(52,211,153,0.08)]',
      chips: ['Docker Compose', 'VPS On-Premise', '200+ Concurrentes', 'Connection Pool'],
      details: t.raw('architecture.layers.devops.details') as string[],
      dotColor: 'bg-emerald-400',
      dotGlow: 'shadow-[0_0_8px_rgba(52,211,153,0.7)]'
    }
  ]

  // Unused import kept for reference — Cloud icon available if needed
  void Cloud

  return (
    <ProjectCaseLayout
      glows={[
        { color: 'bg-teal-500/15', className: '-top-32 -left-32 w-96 h-96' },
        {
          color: 'bg-cyan-500/10',
          className: 'top-1/3 -right-32 w-[32rem] h-[32rem]'
        },
        {
          color: 'bg-emerald-500/10',
          className: 'bottom-20 left-1/4 w-[28rem] h-[28rem]'
        }
      ]}
    >
      <ProjectCaseHeader
        backLabel={t('backText')}
        role={t('role')}
        type={t('type')}
        title={t('title')}
        institution={t('institution')}
        subtitle={t('subtitle')}
        accentColor='teal'
        accentRgba='45,212,191'
        media={
          <CaseVideoPlayer
            src='https://cearlatinoamericano.edu.pe/sisdocs/video-presentacion/campus_virtual.mp4'
            poster='/projects/campus/home-students.webp'
            title='Presentación Oficial del Campus Virtual'
            accentColor='teal'
          />
        }
        techStack={<ProjectTechStackGrid categories={CAMPUS_TECH_CATEGORIES} accentColor='teal' />}
        ctas={
          <div className='flex flex-wrap items-center gap-4'>
            <a
              href='https://campus.cearlatinoamericano.edu.pe/'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-400 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(45,212,191,0.35)] hover:bg-teal-300 transition-all hover:scale-[1.02]'
            >
              <GraduationCap className='w-4 h-4' />
              <span>{t('visitLive')}</span>
              <ExternalLink className='w-4 h-4' />
            </a>
          </div>
        }
      />

      <ProjectMetricsGrid metrics={metrics} accentColor='teal' />

      <ProjectBusinessChallenge
        title={t('businessProblem.title')}
        description={t('businessProblem.description')}
        points={businessPoints}
        accentColor='teal'
        gradient='from-[#0c1c2e] to-[#080e1a]'
      />

      <ProjectArchitectureBento
        title={t('architecture.title')}
        subtitle={t('architecture.subtitle')}
        layers={architectureLayers}
      />

      <ProjectEngineeringChallenges
        title={t('engineeringChallenges.title')}
        items={engineeringChallenges}
        icons={[Zap, ShieldCheck, Server]}
        accentColor='teal'
      />

      <ProjectGallerySection title={t('galleryTitle')} subtitle={t('gallerySubtitle')} accentColor='teal'>
        <ProfessionalCaseCarousel slides={campusSlides} />
      </ProjectGallerySection>

      <ProjectBottomCTA
        backLabel={t('backText')}
        accentColor='teal'
        externalCTA={{
          href: 'https://campus.cearlatinoamericano.edu.pe/',
          label: t('visitLive'),
          icon: GraduationCap
        }}
      />
    </ProjectCaseLayout>
  )
}

export default Page
