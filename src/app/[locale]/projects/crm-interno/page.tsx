import { Database, Filter, Layout, Server, ShieldCheck, Users, Zap } from 'lucide-react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
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
import { CRM_TECH_CATEGORIES, ProjectTechStackGrid } from '@/components/project/ProjectTechStackGrid'
import { type Locale, locales } from '@/i18n/config'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'CRM Interno & Prospección RNP | Caso Profesional Full-Stack',
  description:
    'Arquitectura y desarrollo del CRM interno de CEAR Latinoamericano: gestión de +200k entidades RNP, pipeline de leads, control de tareas y sinergia con el Sistema Mailer con Next.js, NestJS, Drizzle y PostgreSQL.'
}

type Props = {
  params: Promise<{ locale: string }>
}

type Metric = { label: string; value: string }
type EngineeringItem = { title: string; description: string }

const crmSlides: ProfessionalCaseSlide[] = [
  {
    src: '/projects/cear-crm/home.webp',
    alt: 'Panel principal del CRM de CEAR Latinoamericano'
  },
  {
    src: '/projects/cear-crm/ENTIDADES2.webp',
    alt: 'Módulo de entidades RNP del CRM'
  },
  {
    src: '/projects/cear-crm/LEAD.webp',
    alt: 'Módulo de gestión y seguimiento de leads'
  },
  {
    src: '/projects/cear-crm/TAREAS.webp',
    alt: 'Módulo de asignación y control de tareas comerciales'
  }
]

const Page = async ({ params }: Props) => {
  const { locale } = await params
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'crmProject'
  })

  const metrics = t.raw('metrics') as Metric[]
  const businessPoints = t.raw('businessProblem.points') as string[]
  const engineeringChallenges = t.raw('engineeringChallenges.items') as EngineeringItem[]

  // 3-layer bento grid: Frontend & Tablas (7 cols), Backend & Drizzle (5 cols), DevOps & Ecosistema (full width)
  const architectureLayers: ArchitectureLayer[] = [
    {
      badge: 'Capa 01 • Frontend & Tablas Masivas',
      badgeColor: 'text-violet-300 border-violet-400/30 bg-violet-400/10',
      colSpan: 'lg:col-span-7',
      gradient: 'from-[#1d102e]/80 via-[#130820]/90 to-[#050b14]',
      icon: Layout,
      name: t('architecture.layers.frontend.name'),
      color: 'text-violet-400',
      borderColor: 'border-violet-400/30 hover:border-violet-400/60 shadow-[0_0_30px_rgba(139,92,246,0.08)]',
      chips: ['Next.js (App Router)', 'TypeScript', 'TanStack Table', 'TanStack Query', 'Zod Dual Validation'],
      details: t.raw('architecture.layers.frontend.details') as string[],
      dotColor: 'bg-violet-400',
      dotGlow: 'shadow-[0_0_8px_rgba(139,92,246,0.7)]'
    },
    {
      badge: 'Capa 02 • Core Backend & Drizzle ORM',
      badgeColor: 'text-purple-300 border-purple-400/30 bg-purple-400/10',
      colSpan: 'lg:col-span-5',
      gradient: 'from-[#220d2e]/80 via-[#150620]/90 to-[#050b14]',
      icon: Database,
      name: t('architecture.layers.backend.name'),
      color: 'text-purple-400',
      borderColor: 'border-purple-400/30 hover:border-purple-400/60 shadow-[0_0_30px_rgba(168,85,247,0.08)]',
      chips: ['NestJS API', 'Drizzle ORM', 'PostgreSQL (+200k RNP)', 'Roles & Permisos RBAC'],
      details: t.raw('architecture.layers.backend.details') as string[],
      dotColor: 'bg-purple-400',
      dotGlow: 'shadow-[0_0_8px_rgba(168,85,247,0.7)]'
    },
    {
      badge: 'Capa 03 • Infraestructura & Ecosistema Mailer',
      badgeColor: 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10',
      colSpan: 'lg:col-span-12',
      gradient: 'from-[#081e16]/80 via-[#05130e]/90 to-[#050b14]',
      icon: Server,
      name: t('architecture.layers.devops.name'),
      color: 'text-emerald-400',
      borderColor: 'border-emerald-400/30 hover:border-emerald-400/60 shadow-[0_0_30px_rgba(52,211,153,0.08)]',
      chips: ['Docker Compose', 'VPS On-Premise', 'Sinergia CRM ↔ Mailer', 'SSL / HTTPS Interno'],
      details: t.raw('architecture.layers.devops.details') as string[],
      dotColor: 'bg-emerald-400',
      dotGlow: 'shadow-[0_0_8px_rgba(52,211,153,0.7)]'
    }
  ]

  return (
    <ProjectCaseLayout
      glows={[
        { color: 'bg-violet-500/15', className: '-top-32 -left-32 w-96 h-96' },
        {
          color: 'bg-purple-500/10',
          className: 'top-1/3 -right-32 w-[32rem] h-[32rem]'
        },
        {
          color: 'bg-fuchsia-500/10',
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
        accentColor='violet'
        accentRgba='139,92,246'
        media={
          <div className='rounded-2xl border border-violet-400/20 shadow-[0_0_40px_rgba(139,92,246,0.18)] p-1 bg-white/[0.02]'>
            <ProfessionalCaseCarousel slides={crmSlides} />
          </div>
        }
        techStack={<ProjectTechStackGrid categories={CRM_TECH_CATEGORIES} accentColor='violet' />}
        ctas={
          <div className='inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-violet-400/30 bg-violet-400/10 text-violet-300 text-sm font-semibold shadow-[0_0_20px_rgba(139,92,246,0.25)]'>
            <Users className='w-4 h-4' />
            <span>Sistema Interno de Prospección & Asignación Comercial</span>
          </div>
        }
      />

      <ProjectMetricsGrid metrics={metrics} accentColor='violet' />

      <ProjectBusinessChallenge
        title={t('businessProblem.title')}
        description={t('businessProblem.description')}
        points={businessPoints}
        accentColor='violet'
        gradient='from-[#160d26] to-[#080e1a]'
      />

      <ProjectArchitectureBento
        title={t('architecture.title')}
        subtitle={t('architecture.subtitle')}
        layers={architectureLayers}
      />

      <ProjectEngineeringChallenges
        title={t('engineeringChallenges.title')}
        items={engineeringChallenges}
        icons={[Filter, Zap, ShieldCheck]}
        accentColor='violet'
      />

      <ProjectGallerySection title={t('galleryTitle')} subtitle={t('gallerySubtitle')} accentColor='violet'>
        <ProfessionalCaseCarousel slides={crmSlides} />
      </ProjectGallerySection>

      <ProjectBottomCTA
        backLabel={t('backText')}
        accentColor='violet'
        badgeLabel='Plataforma de Operaciones Comerciales de CEAR'
        badgeIcon={Users}
      />
    </ProjectCaseLayout>
  )
}

export default Page
