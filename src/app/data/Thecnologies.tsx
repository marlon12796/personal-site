import ChakraUIIcon from '@/components/svg/ChakraUIIcon'
import CSharpIcon from '@/components/svg/CSharpIcon'
import CSS3Icon from '@/components/svg/CSS3Icon'
import DockerIcon from '@/components/svg/DockerIcon'
import ExpressIcon from '@/components/svg/ExpressIcon'
import FigmaIcon from '@/components/svg/FigmaIcon'
import FirebaseIcon from '@/components/svg/FirebaseIcon'
import HTML5Icon from '@/components/svg/HTML5Icon'
import JavaScriptIcon from '@/components/svg/JavaScriptIcon'
import MUIIcon from '@/components/svg/MUIIcon'
import NextjsIcon from '@/components/svg/NextjsIcon'
import PrismaIcon from '@/components/svg/PrismaIcon'
import PythonIcon from '@/components/svg/PythonIcon'
import ReactIcon from '@/components/svg/ReactIcon'
import ReduxIcon from '@/components/svg/ReduxIcon'
import SupabaseIcon from '@/components/svg/SupabaseIcon'
import TailwindIcon from '@/components/svg/TailwindIcon'
import TypeScriptIcon from '@/components/svg/TypeScriptIcon'
import ViteIcon from '@/components/svg/ViteIcon'
import SQLIcon from '@/components/svg/SQLIcon'
import AngularIcon from '@/components/svg/AngularIcon'
import NestjsIcon from '@/components/svg/NestjsIcon'

export type TechnologyData = {
  color: string
  bgColor: string
  icon?: React.ReactNode
}

export const technologiesList = [
  'JavaScript',
  'TypeScript',
  'C#',
  'Python',
  'HTML',
  'CSS',
  'Vite',
  'React',
  'Redux Toolkit',
  'MUI',
  'Chakra UI',
  'Tailwind CSS',
  'Next.js',
  'Firebase',
  'Supabase',
  'Prisma',
  'Docker',
  'Figma',
  'Netlify',
  'Recoil',
  'Zustand',
  'NextAuth.js',
  'React Email',
  'React Hook Form',
  'SQL',
  'Angular',
  'Nestjs',
  'Express'
] as const
export type TechnologiesList = (typeof technologiesList)[number][]
export type TechnologyKeys = (typeof technologiesList)[number]
export const technologies: Record<(typeof technologiesList)[number], TechnologyData> = {
  JavaScript: {
    icon: <JavaScriptIcon />,
    bgColor: 'bg-yellow-400/20',
    color: 'text-yellow-100'
  },
  TypeScript: {
    icon: <TypeScriptIcon />,
    bgColor: 'bg-sky-500/20',
    color: 'text-sky-100'
  },
  'C#': {
    icon: <CSharpIcon />,
    bgColor: 'bg-purple-500/20',
    color: 'text-purple-100'
  },
  Python: {
    icon: <PythonIcon />,
    bgColor: 'bg-yellow-500/20',
    color: 'text-yellow-100'
  },
  HTML: {
    icon: <HTML5Icon />,
    bgColor: 'bg-orange-500/20',
    color: 'text-orange-100'
  },
  CSS: {
    icon: <CSS3Icon />,
    bgColor: 'bg-cyan-500/20',
    color: 'text-cyan-100'
  },
  Vite: {
    icon: <ViteIcon />,
    bgColor: 'bg-purple-500/20',
    color: 'text-purple-100'
  },
  React: {
    icon: <ReactIcon />,
    bgColor: 'bg-cyan-500/20',
    color: 'text-cyan-100'
  },
  'Redux Toolkit': {
    icon: <ReduxIcon />,
    bgColor: 'bg-purple-500/20',
    color: 'text-purple-100'
  },
  MUI: {
    icon: <MUIIcon />,
    bgColor: 'bg-sky-500/20',
    color: 'text-sky-100'
  },
  'Chakra UI': {
    icon: <ChakraUIIcon />,
    bgColor: 'bg-teal-500/20',
    color: 'text-teal-100'
  },
  'Tailwind CSS': {
    icon: <TailwindIcon />,
    bgColor: 'bg-sky-500/20',
    color: 'text-sky-100'
  },
  'Next.js': {
    icon: <NextjsIcon />,
    bgColor: 'bg-gray-400/20',
    color: 'text-gray-100'
  },
  Firebase: {
    icon: <FirebaseIcon />,
    bgColor: 'bg-amber-500/20',
    color: 'text-amber-100'
  },
  Supabase: {
    icon: <SupabaseIcon />,
    bgColor: 'bg-emerald-500/20',
    color: 'text-emerald-100'
  },

  Prisma: {
    icon: <PrismaIcon />,
    bgColor: 'bg-gray-400/20',
    color: 'text-gray-100'
  },
  Docker: {
    icon: <DockerIcon />,
    bgColor: 'bg-sky-500/20',
    color: 'text-sky-100'
  },
  Figma: {
    icon: <FigmaIcon />,
    bgColor: 'bg-pink-500/20',
    color: 'text-pink-100'
  },
  Netlify: {
    bgColor: 'bg-teal-500/20',
    color: 'text-teal-100'
  },
  Recoil: {
    bgColor: 'bg-sky-500/20',
    color: 'text-sky-100'
  },
  Zustand: {
    bgColor: 'bg-gray-500/20',
    color: 'text-gray-100'
  },
  'NextAuth.js': {
    bgColor: 'bg-cyan-500/20',
    color: 'text-cyan-100'
  },
  'React Email': {
    bgColor: 'bg-sky-500/20',
    color: 'text-sky-100'
  },
  'React Hook Form': {
    bgColor: 'bg-pink-500/20',
    color: 'text-pink-100'
  },
  SQL: {
    icon: <SQLIcon />,
    bgColor: 'bg-green-500/20',
    color: 'text-green-100'
  },

  Express: {
    icon: <ExpressIcon />,
    bgColor: 'bg-green-500/20',
    color: 'text-green-100'
  },
  Angular: {
    icon: <AngularIcon />,
    bgColor: 'bg-purple-500/20',
    color: 'text-green-100'
  },
  Nestjs: {
    icon: <NestjsIcon />,
    bgColor: 'bg-gray-400/20',
    color: 'text-teal-100'
  }
}
export const mainTechnologies: { [key: string]: TechnologiesList } = {
  'Front-end': ['HTML', 'CSS', 'React', 'Next.js', 'Vite', 'Redux Toolkit', 'MUI', 'Tailwind CSS', 'Angular'],
  'Back-end': ['Express', 'Prisma', 'Supabase', 'Firebase', 'SQL', 'Nestjs'],
  Languages: ['JavaScript', 'TypeScript', 'Python']
}
