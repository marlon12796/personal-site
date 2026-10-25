import 'server-only'

import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ locale }) => {
  const activeLocale = routing.locales.includes(locale as (typeof routing.locales)[number])
    ? (locale as (typeof routing.locales)[number])
    : routing.defaultLocale

  return {
    messages: {
      ...(await import(`../locales/contact/${activeLocale}.json`)).default,
      ...(await import(`../locales/about/${activeLocale}.json`)).default,
      ...(await import(`../locales/home/${activeLocale}.json`)).default,
      ...(await import(`../locales/layout/${activeLocale}.json`)).default,
      ...(await import(`../locales/projects/${activeLocale}.json`)).default,
      ...(await import(`../locales/experience/${activeLocale}.json`)).default
    },
    locale: activeLocale,
    defaultLocale: routing.defaultLocale,
    locales: routing.locales
  }
})
