import React from 'react'

export interface TechItem {
  name: string
  role?: string
  color?: string
  border?: string
  bg?: string
  icon: React.ReactNode
}

export interface TechCategory {
  title: string
  categoryBadge: string
  accent: string
  items: TechItem[]
}

export interface ProjectTechStackGridProps {
  categories: TechCategory[]
  accentColor?: 'cyan' | 'teal' | 'amber' | 'orange' | 'blue' | 'violet'
  className?: string
}

// -------------------------------------------------------------
// SVG Icons
// -------------------------------------------------------------

const NextJsIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 180 180' fill='none'>
    <circle cx='90' cy='90' r='90' fill='black' />
    <path d='M149.5 157.5L69.1 54H54v72h12.1V69.4l73.9 95.4c3.3-2.2 6.5-4.7 9.5-7.3z' fill='white' />
    <rect x='115' y='54' width='12' height='72' fill='white' />
  </svg>
)

const TypeScriptIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 128 128'>
    <rect width='128' height='128' rx='16' fill='#3178C6' />
    <path
      d='M66.4 78.4c2.8 4.4 7.2 7.2 13.2 7.2 6.8 0 10.4-3.6 10.4-8.8 0-6-4.8-8-12-10.8-10.4-4-17.6-9.6-17.6-21.2 0-11.6 9.2-20.4 22.8-20.4 8.8 0 15.6 3.2 19.6 9.6l-8.4 5.6c-2.4-4-6-6-11.2-6-6.4 0-9.6 3.2-9.6 7.6 0 4.8 4 6.8 11.2 9.6 12 4.8 18.4 10.4 18.4 22.8 0 13.6-10.4 21.6-24.8 21.6-11.2 0-19.2-4.4-23.6-11.6l11.6-5.2zM21.6 38.8h37.6v12.8H46.8v62H32.4v-62H21.6V38.8z'
      fill='#FFFFFF'
    />
  </svg>
)

const TailwindIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 256 154' fill='none'>
    <path
      d='M128 0C93.9 0 72.5 17.1 64 51.3c12.8-17.1 27.7-23.5 44.8-19.2 9.8 2.5 16.8 9.6 24.5 17.5 12.6 12.8 27.2 27.7 58.7 27.7 34.1 0 55.5-17.1 64-51.3-12.8 17.1-27.7 23.5-44.8 19.2-9.8-2.5-16.8-9.6-24.5-17.5C174.1 14.9 159.5 0 128 0z'
      fill='#06B6D4'
    />
  </svg>
)

const TanStackIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 256 256' fill='none'>
    <circle cx='128' cy='128' r='120' fill='#1C1C1E' stroke='#FF4154' strokeWidth='14' />
    <path
      d='M74 128C74 98.2 98.2 74 128 74s54 24.2 54 54-24.2 54-54 54'
      stroke='#FF4154'
      strokeWidth='18'
      strokeLinecap='round'
    />
    <circle cx='128' cy='128' r='22' fill='#FFD000' />
  </svg>
)

const UnlayerIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 24 24' fill='none' stroke='#F59E0B' strokeWidth='2'>
    <rect x='3' y='3' width='18' height='18' rx='2' />
    <path d='M3 9h18M9 21V9' />
  </svg>
)

const NestJsIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 256 256' fill='none'>
    <path
      d='M109.8 16.4C80.2 28.6 63.8 55.4 69.2 86.8c1.6 9.4 6.2 20.8 11.4 28.2l3.4 4.8-6.2 3.8C59.6 135 50.4 153.2 50 178.6c-.4 24.6 9.6 45 28.8 59 13.4 9.8 29.8 15.8 47.6 17.6 17.2 1.8 35.8-1.8 51.6-9.8 20.8-10.6 36.4-28.6 44-50.6 3.6-10.6 4.8-21.2 3.6-32.8-.8-7.8-3.4-17-6.2-22.6l-3.2-6.2 6-4.6c11.6-9 19.4-21.6 23-37.4 3-13.4 1.2-28.2-5-40.4-8.8-17.4-24.4-29.4-44.6-34.6-16.2-4.2-34-2.8-49.4 4.4l-4.4 2.2-4.4-2.4c-9.6-5.2-20.6-7.8-31.6-7.8-6 0-12 .8-17.4 2.8z'
      fill='#E0234E'
    />
  </svg>
)

const NodeJsIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 256 289' fill='none'>
    <path d='M128 0L8.7 68.9V206.8L128 275.7L247.3 206.8V68.9L128 0Z' fill='#333' />
    <path d='M128 17.5L232.1 77.6V197.9L128 258L23.9 197.9V77.6L128 17.5Z' fill='#68A063' />
    <path d='M128 66L176 94V150L128 178L80 150V94L128 66Z' fill='#fff' />
  </svg>
)

const ExpressIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 24 24' fill='none'>
    <rect width='24' height='24' rx='4' fill='#ffffff' fillOpacity='0.1' />
    <text
      x='50%'
      y='55%'
      dominantBaseline='middle'
      textAnchor='middle'
      fill='#ffffff'
      fontSize='11'
      fontWeight='900'
      fontFamily='monospace'
    >
      ex
    </text>
  </svg>
)

const PostgresIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 512 512'>
    <path
      d='M256 16C123.5 16 16 123.5 16 256s107.5 240 240 240 240-107.5 240-240S388.5 16 256 16zm-17.5 98.8c42.8 0 77.5 34.7 77.5 77.5 0 24.3-11.2 46-28.7 60.2 24.4 12.3 41.2 37.5 41.2 66.8 0 41.4-33.6 75-75 75-18.4 0-35.3-6.6-48.4-17.7-13.6 10.9-30.8 17.7-49.6 17.7-42.8 0-77.5-34.7-77.5-77.5 0-25.2 12-47.5 30.6-61.7-22.9-13.2-38.6-38-38.6-66.3 0-42.8 34.7-77.5 77.5-77.5 16.5 0 31.9 5.2 44.5 14 12.8-8.8 28.5-14 46.5-14z'
      fill='#4169E1'
    />
    <circle cx='210' cy='200' r='16' fill='#fff' />
    <circle cx='300' cy='200' r='16' fill='#fff' />
  </svg>
)

const RedisIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 256 220' fill='none'>
    <path
      d='M253.2 68.2L132.8 4.2C130-1.4 123.6-1.4 120.8 4.2L.4 68.2C-1.2 71 1.6 74.2 4.4 75.8l120.4 64c2.8 1.4 6.8 1.4 9.6 0l120.4-64c2.8-1.6 5.6-4.8 4-7.6z'
      fill='#DC382D'
    />
    <path
      d='M253.2 110.2L132.8 174.2c-2.8 1.4-6.8 1.4-9.6 0L2.8 110.2c-2.8-1.6-4-4.8-2.4-7.6 1.6-2.8 4.8-4 7.6-2.4l117.6 62.4c2.8 1.4 6.8 1.4 9.6 0l117.6-62.4c2.8-1.6 6-.4 7.6 2.4 1.6 2.8.4 6-2.4 7.6z'
      fill='#A41E11'
    />
  </svg>
)

const BullMQIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 24 24' fill='none' stroke='#F97316' strokeWidth='2'>
    <path d='M4 6h16M4 12h16M4 18h16' />
    <circle cx='8' cy='6' r='2' fill='#F97316' />
    <circle cx='16' cy='12' r='2' fill='#F97316' />
    <circle cx='10' cy='18' r='2' fill='#F97316' />
  </svg>
)

const InboxIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 24 24' fill='none' stroke='#EAB308' strokeWidth='2'>
    <polyline points='22 12 16 12 14 15 10 15 8 12 2 12' />
    <path d='M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z' />
  </svg>
)

const DockerIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 256 256' fill='none'>
    <path
      d='M247.6 112.4c-4.8-3.4-15.6-5.4-23.6-2.4-2.8-18.4-16.6-32.8-33.8-32.8-1.8 0-3.6.2-5.4.6-9.6-13.8-25.2-22.8-42.8-22.8-1.2 0-2.4 0-3.6.2V42c0-4.4-3.6-8-8-8h-24c-4.4 0-8 3.6-8 8v16.2c-1.4.2-2.8.4-4.2.8V42c0-4.4-3.6-8-8-8H62c-4.4 0-8 3.6-8 8v24.6C23.6 80.2 0 106.8 0 139.4c0 37.6 30.6 68.2 68.2 68.2 38.6 0 74.4-14.2 101.4-38.6 35.8-5.4 68.4-27.4 83.2-61.2 2-4.6-.4-10-5.2-12.4v-3z'
      fill='#2496ED'
    />
    <rect x='74' y='90' width='18' height='18' rx='2' fill='#fff' />
    <rect x='98' y='90' width='18' height='18' rx='2' fill='#fff' />
    <rect x='122' y='90' width='18' height='18' rx='2' fill='#fff' />
  </svg>
)

const VpsIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 24 24' fill='none' stroke='#10B981' strokeWidth='2'>
    <rect x='2' y='2' width='20' height='8' rx='2' />
    <rect x='2' y='14' width='20' height='8' rx='2' />
    <line x1='6' y1='6' x2='6.01' y2='6' strokeWidth='3' />
    <line x1='6' y1='18' x2='6.01' y2='18' strokeWidth='3' />
  </svg>
)

const SendGridIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 24 24' fill='none' stroke='#0284C7' strokeWidth='2'>
    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
    <polyline points='22,6 12,13 2,6' />
  </svg>
)

const ShieldLockIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 24 24' fill='none' stroke='#10B981' strokeWidth='2'>
    <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
  </svg>
)

const NiubizIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 24 24' fill='none' stroke='#0072CE' strokeWidth='2'>
    <rect x='2' y='5' width='20' height='14' rx='3' stroke='#0072CE' fill='#0072CE' fillOpacity='0.2' />
    <line x1='2' y1='10' x2='22' y2='10' stroke='#0072CE' />
    <circle cx='6.5' cy='14.5' r='1.5' fill='#FF5F00' stroke='none' />
    <circle cx='10' cy='14.5' r='1.5' fill='#EB001B' stroke='none' />
  </svg>
)

const AwsS3Icon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 256 256' fill='none'>
    <rect width='256' height='256' rx='32' fill='#E7157B' fillOpacity='0.15' />
    <path d='M60 90L128 50L196 90L128 130L60 90Z' fill='#E7157B' />
    <path d='M60 125L128 165L196 125M60 160L128 200L196 160' stroke='#E7157B' strokeWidth='16' strokeLinecap='round' />
  </svg>
)

const GlobeSeoIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 24 24' fill='none' stroke='#06B6D4' strokeWidth='2'>
    <circle cx='12' cy='12' r='10' />
    <line x1='2' y1='12' x2='22' y2='12' />
    <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />
  </svg>
)

const DualValidationIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 24 24' fill='none' stroke='#3B82F6' strokeWidth='2'>
    <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
    <polyline points='9 12 11 14 15 10' />
  </svg>
)

const DeployPipelineIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 24 24' fill='none' stroke='#10B981' strokeWidth='2'>
    <polyline points='16 18 22 12 16 6' />
    <polyline points='8 6 2 12 8 18' />
  </svg>
)

const DrizzleIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 24 24' fill='none'>
    <path d='M12 2L5 13h6l-2 9 9-13h-6l2-9z' fill='#C5F74F' />
  </svg>
)

const TableIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 24 24' fill='none' stroke='#A855F7' strokeWidth='2'>
    <rect x='3' y='3' width='18' height='18' rx='2' />
    <line x1='3' y1='9' x2='21' y2='9' />
    <line x1='3' y1='15' x2='21' y2='15' />
    <line x1='9' y1='3' x2='9' y2='21' />
  </svg>
)

const TasksFlowIcon = () => (
  <svg className='w-4 h-4 shrink-0' viewBox='0 0 24 24' fill='none' stroke='#F59E0B' strokeWidth='2'>
    <path d='M9 11l3 3L22 4' />
    <path d='M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11' />
  </svg>
)

// -------------------------------------------------------------
// Predefined Project Categories
// -------------------------------------------------------------

/** 1. Web de Formación Continua (CEAR Latinoamericano) */
export const CEAR_WEB_TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'Frontend & SEO',
    categoryBadge: 'Client & Crawlers',
    accent: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
    items: [
      {
        name: 'Next.js',
        role: 'App Router / SSR',
        border: 'border-white/15',
        bg: 'bg-white/[0.03]',
        icon: <NextJsIcon />
      },
      {
        name: 'TypeScript',
        role: 'Tipado Estricto',
        border: 'border-sky-500/20',
        bg: 'bg-sky-500/[0.04]',
        icon: <TypeScriptIcon />
      },
      {
        name: 'Tailwind CSS',
        role: 'Diseño & UI',
        border: 'border-cyan-500/20',
        bg: 'bg-cyan-500/[0.04]',
        icon: <TailwindIcon />
      },
      {
        name: 'SSR + ISR',
        role: 'Indexación Google',
        border: 'border-teal-500/20',
        bg: 'bg-teal-500/[0.04]',
        icon: <GlobeSeoIcon />
      }
    ]
  },
  {
    title: 'Backend & Base de Datos',
    categoryBadge: 'REST API & Leads',
    accent: 'text-blue-400 border-blue-400/30 bg-blue-400/10',
    items: [
      {
        name: 'Node.js',
        role: 'Runtime Server',
        border: 'border-emerald-500/20',
        bg: 'bg-emerald-500/[0.04]',
        icon: <NodeJsIcon />
      },
      {
        name: 'Express',
        role: 'REST API & Routing',
        border: 'border-slate-500/20',
        bg: 'bg-slate-500/[0.04]',
        icon: <ExpressIcon />
      },
      {
        name: 'PostgreSQL',
        role: 'Catálogo & Leads ACID',
        border: 'border-indigo-500/20',
        bg: 'bg-indigo-500/[0.04]',
        icon: <PostgresIcon />
      },
      {
        name: 'Validación Dual',
        role: 'Zod + Sanitización',
        border: 'border-blue-500/20',
        bg: 'bg-blue-500/[0.04]',
        icon: <DualValidationIcon />
      }
    ]
  },
  {
    title: 'DevOps & Servidor',
    categoryBadge: 'On-Premise & Deploy',
    accent: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
    items: [
      {
        name: 'Docker',
        role: 'Contenedores VPS',
        border: 'border-blue-500/20',
        bg: 'bg-blue-500/[0.04]',
        icon: <DockerIcon />
      },
      {
        name: 'VPS On-Premise',
        role: 'Servidor CEAR',
        border: 'border-emerald-500/20',
        bg: 'bg-emerald-500/[0.04]',
        icon: <VpsIcon />
      },
      {
        name: 'SSL / HTTPS',
        role: 'Certificados TLS',
        border: 'border-teal-500/20',
        bg: 'bg-teal-500/[0.04]',
        icon: <ShieldLockIcon />
      },
      {
        name: 'Deploy Pipeline',
        role: 'CI/CD & Git Deploy',
        border: 'border-green-500/20',
        bg: 'bg-green-500/[0.04]',
        icon: <DeployPipelineIcon />
      }
    ]
  }
]

/** 2. Sistema Mailer & Automatización de Leads */
export const MAILER_TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'Frontend & Builder',
    categoryBadge: 'Client & Templates',
    accent: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
    items: [
      {
        name: 'Next.js',
        role: 'App Router / SSR',
        border: 'border-white/15',
        bg: 'bg-white/[0.03]',
        icon: <NextJsIcon />
      },
      {
        name: 'TypeScript',
        role: 'Tipado Estricto',
        border: 'border-sky-500/20',
        bg: 'bg-sky-500/[0.04]',
        icon: <TypeScriptIcon />
      },
      {
        name: 'Unlayer SDK',
        role: 'Drag & Drop Builder',
        border: 'border-amber-500/20',
        bg: 'bg-amber-500/[0.04]',
        icon: <UnlayerIcon />
      },
      {
        name: 'Tailwind CSS',
        role: 'Diseño & Dark Theme',
        border: 'border-cyan-500/20',
        bg: 'bg-cyan-500/[0.04]',
        icon: <TailwindIcon />
      }
    ]
  },
  {
    title: 'Backend & Colas',
    categoryBadge: 'Async Workers & Inbox',
    accent: 'text-orange-400 border-orange-400/30 bg-orange-400/10',
    items: [
      {
        name: 'NestJS',
        role: 'Modular API / Core',
        border: 'border-red-500/20',
        bg: 'bg-red-500/[0.04]',
        icon: <NestJsIcon />
      },
      {
        name: 'BullMQ',
        role: 'Gestor de Colas',
        border: 'border-orange-500/20',
        bg: 'bg-orange-500/[0.04]',
        icon: <BullMQIcon />
      },
      {
        name: 'Redis',
        role: 'Broker en Memoria',
        border: 'border-rose-600/20',
        bg: 'bg-rose-600/[0.04]',
        icon: <RedisIcon />
      },
      {
        name: 'Inbox Pattern',
        role: 'Idempotencia 1K/min',
        border: 'border-yellow-500/20',
        bg: 'bg-yellow-500/[0.04]',
        icon: <InboxIcon />
      }
    ]
  },
  {
    title: 'Entregabilidad & Datos',
    categoryBadge: 'Cloud & On-Prem',
    accent: 'text-sky-400 border-sky-400/30 bg-sky-400/10',
    items: [
      {
        name: 'SendGrid API',
        role: 'Despacho & Webhooks',
        border: 'border-sky-500/20',
        bg: 'bg-sky-500/[0.04]',
        icon: <SendGridIcon />
      },
      {
        name: 'PostgreSQL',
        role: 'Leads & Métricas ACID',
        border: 'border-indigo-500/20',
        bg: 'bg-indigo-500/[0.04]',
        icon: <PostgresIcon />
      },
      {
        name: 'Docker VPS',
        role: 'Contenedores On-Prem',
        border: 'border-blue-500/20',
        bg: 'bg-blue-500/[0.04]',
        icon: <DockerIcon />
      },
      {
        name: 'DNS Hardened',
        role: 'SPF / DKIM / DMARC',
        border: 'border-emerald-500/20',
        bg: 'bg-emerald-500/[0.04]',
        icon: <ShieldLockIcon />
      }
    ]
  }
]

/** 3. Campus Virtual CEAR Latinoamericano */
export const CAMPUS_TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'Frontend & UI',
    categoryBadge: 'Client Layer',
    accent: 'text-teal-400 border-teal-400/30 bg-teal-400/10',
    items: [
      {
        name: 'Next.js',
        role: 'App Router / SSR',
        border: 'border-white/15',
        bg: 'bg-white/[0.03]',
        icon: <NextJsIcon />
      },
      {
        name: 'TypeScript',
        role: 'Tipado Estricto',
        border: 'border-sky-500/20',
        bg: 'bg-sky-500/[0.04]',
        icon: <TypeScriptIcon />
      },
      {
        name: 'TanStack Query',
        role: 'Caché & Async State',
        border: 'border-rose-500/20',
        bg: 'bg-rose-500/[0.04]',
        icon: <TanStackIcon />
      },
      {
        name: 'Tailwind CSS',
        role: 'Diseño & Accesibilidad',
        border: 'border-cyan-500/20',
        bg: 'bg-cyan-500/[0.04]',
        icon: <TailwindIcon />
      }
    ]
  },
  {
    title: 'Backend & Datos',
    categoryBadge: 'Server & Core',
    accent: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
    items: [
      {
        name: 'NestJS',
        role: 'Arquitectura Modular',
        border: 'border-red-500/20',
        bg: 'bg-red-500/[0.04]',
        icon: <NestJsIcon />
      },
      {
        name: 'Node.js',
        role: 'Runtime API REST',
        border: 'border-emerald-500/20',
        bg: 'bg-emerald-500/[0.04]',
        icon: <NodeJsIcon />
      },
      {
        name: 'PostgreSQL',
        role: 'Pool & Índices ACID',
        border: 'border-indigo-500/20',
        bg: 'bg-indigo-500/[0.04]',
        icon: <PostgresIcon />
      },
      {
        name: 'Redis',
        role: 'Caché de Picos',
        border: 'border-rose-600/20',
        bg: 'bg-rose-600/[0.04]',
        icon: <RedisIcon />
      }
    ]
  },
  {
    title: 'DevOps & Cloud',
    categoryBadge: 'Infra & Fintech',
    accent: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
    items: [
      {
        name: 'Docker',
        role: 'Contenedores VPS',
        border: 'border-blue-500/20',
        bg: 'bg-blue-500/[0.04]',
        icon: <DockerIcon />
      },
      {
        name: 'Niubiz API',
        role: 'Pasarela Pagos Online',
        border: 'border-sky-600/20',
        bg: 'bg-sky-600/[0.04]',
        icon: <NiubizIcon />
      },
      {
        name: 'AWS S3',
        role: 'Almacenamiento PDFs',
        border: 'border-pink-500/20',
        bg: 'bg-pink-500/[0.04]',
        icon: <AwsS3Icon />
      },
      {
        name: 'VPS On-Premise',
        role: 'Streaming & Soberanía',
        border: 'border-emerald-500/20',
        bg: 'bg-emerald-500/[0.04]',
        icon: <VpsIcon />
      }
    ]
  }
]

/** 4. CRM Interno & Prospección RNP */
export const CRM_TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'Frontend & Gestión de Datos',
    categoryBadge: 'Client & Data Tables',
    accent: 'text-violet-400 border-violet-400/30 bg-violet-400/10',
    items: [
      {
        name: 'Next.js',
        role: 'App Router / SSR',
        border: 'border-white/15',
        bg: 'bg-white/[0.03]',
        icon: <NextJsIcon />
      },
      {
        name: 'TypeScript',
        role: 'Tipado Estricto',
        border: 'border-sky-500/20',
        bg: 'bg-sky-500/[0.04]',
        icon: <TypeScriptIcon />
      },
      {
        name: 'TanStack Table',
        role: 'Tablas Masivas +200k',
        border: 'border-purple-500/20',
        bg: 'bg-purple-500/[0.04]',
        icon: <TableIcon />
      },
      {
        name: 'Tailwind CSS',
        role: 'UI & Dark Theme',
        border: 'border-cyan-500/20',
        bg: 'bg-cyan-500/[0.04]',
        icon: <TailwindIcon />
      }
    ]
  },
  {
    title: 'Backend & Base de Datos',
    categoryBadge: 'Core API & Drizzle',
    accent: 'text-purple-400 border-purple-400/30 bg-purple-400/10',
    items: [
      {
        name: 'NestJS',
        role: 'Modular API / Core',
        border: 'border-red-500/20',
        bg: 'bg-red-500/[0.04]',
        icon: <NestJsIcon />
      },
      {
        name: 'Drizzle ORM',
        role: 'Type-Safe High Perf',
        border: 'border-lime-500/20',
        bg: 'bg-lime-500/[0.04]',
        icon: <DrizzleIcon />
      },
      {
        name: 'PostgreSQL',
        role: '+200k Entidades RNP',
        border: 'border-indigo-500/20',
        bg: 'bg-indigo-500/[0.04]',
        icon: <PostgresIcon />
      },
      {
        name: 'Tareas & Flujos',
        role: 'Asignación & Bitácora',
        border: 'border-amber-500/20',
        bg: 'bg-amber-500/[0.04]',
        icon: <TasksFlowIcon />
      }
    ]
  },
  {
    title: 'DevOps & Ecosistema',
    categoryBadge: 'VPS & Integraciones',
    accent: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
    items: [
      {
        name: 'Docker Compose',
        role: 'Contenedores VPS',
        border: 'border-blue-500/20',
        bg: 'bg-blue-500/[0.04]',
        icon: <DockerIcon />
      },
      {
        name: 'VPS On-Premise',
        role: 'Servidor CEAR',
        border: 'border-emerald-500/20',
        bg: 'bg-emerald-500/[0.04]',
        icon: <VpsIcon />
      },
      {
        name: 'Sinergia Mailer',
        role: 'Sync Leads Calificados',
        border: 'border-orange-500/20',
        bg: 'bg-orange-500/[0.04]',
        icon: <SendGridIcon />
      },
      {
        name: 'SSL / HTTPS',
        role: 'Acceso Seguro Interno',
        border: 'border-teal-500/20',
        bg: 'bg-teal-500/[0.04]',
        icon: <ShieldLockIcon />
      }
    ]
  }
]

// -------------------------------------------------------------
// Component
// -------------------------------------------------------------

export const ProjectTechStackGrid: React.FC<ProjectTechStackGridProps> = ({
  categories,
  accentColor = 'teal',
  className = ''
}) => {
  const hoverBorder =
    {
      cyan: 'hover:border-cyan-400/30',
      teal: 'hover:border-teal-400/30',
      amber: 'hover:border-amber-400/30',
      orange: 'hover:border-orange-400/30',
      blue: 'hover:border-blue-400/30',
      violet: 'hover:border-violet-400/30'
    }[accentColor] ?? 'hover:border-white/20'

  const hoverItemBorder =
    {
      cyan: 'hover:border-cyan-400/40',
      teal: 'hover:border-teal-400/40',
      amber: 'hover:border-amber-400/40',
      orange: 'hover:border-orange-400/40',
      blue: 'hover:border-blue-400/40',
      violet: 'hover:border-violet-400/40'
    }[accentColor] ?? 'hover:border-white/40'

  const hoverItemText =
    {
      cyan: 'group-hover:text-cyan-300',
      teal: 'group-hover:text-teal-300',
      amber: 'group-hover:text-amber-300',
      orange: 'group-hover:text-orange-300',
      blue: 'group-hover:text-blue-300',
      violet: 'group-hover:text-violet-300'
    }[accentColor] ?? 'group-hover:text-white'

  return (
    <div className={`w-full ${className}`}>
      <div className='grid md:grid-cols-3 gap-4'>
        {categories.map((cat) => (
          <div
            key={cat.title}
            className={`p-4 rounded-2xl border border-white/10 bg-white/[0.02] ${hoverBorder} transition-colors`}
          >
            {/* Header de Categoría */}
            <div className='flex items-center justify-between mb-3 pb-2.5 border-b border-white/5'>
              <span className='text-sm font-bold text-white tracking-wide'>{cat.title}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium border ${cat.accent}`}>
                {cat.categoryBadge}
              </span>
            </div>

            {/* Lista estática limpia */}
            <div className='grid grid-cols-2 gap-2'>
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className={`flex items-center gap-2 p-2 rounded-xl border ${item.border ?? 'border-white/10'} ${item.bg ?? 'bg-white/[0.03]'} ${hoverItemBorder} hover:bg-white/[0.06] transition-all group`}
                >
                  <div className='shrink-0'>{item.icon}</div>
                  <div className='min-w-0 flex flex-col'>
                    <span
                      className={`text-xs font-semibold text-white truncate leading-tight ${hoverItemText} transition-colors`}
                    >
                      {item.name}
                    </span>
                    {item.role && <span className='text-[9px] font-mono text-slate-400 truncate leading-tight'>{item.role}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
