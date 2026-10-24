import { Pathnames } from 'next-intl/routing'

export const locales = ['en', 'es'] as const
export type Locale = (typeof locales)[number]
export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/about': {
    en: '/about',
    es: '/sobre-mi'
  },
  '/contact': {
    en: '/contact',
    es: '/contacto'
  },
  '/projects/cear-plataforma': {
    en: '/projects/cear-platform',
    es: '/proyectos/cear-plataforma'
  },
  '/projects/sistema-mailer': {
    en: '/projects/mailer-system',
    es: '/proyectos/sistema-mailer'
  },
  '/projects/crm-interno': {
    en: '/projects/internal-crm',
    es: '/proyectos/crm-interno'
  },
  '/projects/campus-virtual': {
    en: '/projects/virtual-campus',
    es: '/proyectos/campus-virtual'
  },
  '/experience/cear': {
    en: '/experience/cear',
    es: '/experiencia/cear'
  }
}
