import {
  CSS3Icon,
  CSharpIcon,
  ChakraUIIcon,
  DockerIcon,
  ExpressIcon,
  FigmaIcon,
  FirebaseIcon,
  HTML5Icon,
  JavaScriptIcon,
  MUIIcon,
  NextjsIcon,
  PrismaIcon,
  PythonIcon,
  ReactIcon,
  ReduxIcon,
  SQLIcon,
  SupabaseIcon,
  TailwindIcon,
  TypeScriptIcon,
  ViteIcon
} from '@/components/Svg'
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
  'Express'
] as const
export type TechnologiesList = (typeof technologiesList)[number][]
export type TechnologyKeys   = (typeof technologiesList)[number]
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
  }
}
export const mainTechnologies: { [key: string]: TechnologiesList } = {
  'Front-end': ['HTML', 'CSS', 'React', 'Next.js', 'Vite', 'Redux Toolkit', 'MUI', 'Tailwind CSS'],
  'Back-end': ['Express', 'Prisma', 'Supabase', 'Firebase', 'SQL'],
  Languages: ['JavaScript', 'TypeScript', 'Python']
}
