import { Pathnames } from 'next-intl/routing'

export const locales = ['en', 'es'] as const
export type Locale = (typeof locales)[number]
export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/about': {
    en: '/about',
    es: '/sobre-nosotros'
  },
  '/contact': {
    en: '/contact',
    es: '/contacto'
  }
}
