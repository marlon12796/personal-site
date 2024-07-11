'server-only'

import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { locales, type Locale } from '@/config'

export function isValidLocale(locale: unknown): locale is Locale {
  return locales.some((l) => l === locale)
}

export default getRequestConfig(async (params) => {
  const baseLocale = new Intl.Locale(params.locale).baseName
  if (!isValidLocale(baseLocale)) notFound()

  return {
    messages: {
      ...(await import(`./locales/contact/${baseLocale}.json`)).default,
      ...(await import(`./locales/about/${baseLocale}.json`)).default,
      ...(await import(`./locales/home/${baseLocale}.json`)).default
    }
  }
})
