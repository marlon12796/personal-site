'server-only'

import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { type AbstractIntlMessages } from 'next-intl'
import { locales, type Locale } from '@/config'

const translationImports = {
  en: () => import('./locales/about/en.json'),
  es: () => import('./locales/about/es.json')
} as const satisfies Record<Locale, () => Promise<{ default: AbstractIntlMessages }>>

export function isValidLocale(locale: unknown): locale is Locale {
  return locales.some((l) => l === locale)
}

export default getRequestConfig(async (params) => {
  const baseLocale = new Intl.Locale(params.locale).baseName
  if (!isValidLocale(baseLocale)) notFound()

  const messages = (await translationImports[baseLocale]()).default
  return {
    messages
  }
})
