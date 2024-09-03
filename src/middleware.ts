import createMiddleware from 'next-intl/middleware'
import { type NextRequest, type NextResponse } from 'next/server'
import { pathnames, type Locale } from '@/i18n/config'

const nextIntlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es'],

  // Used when no locale matches
  defaultLocale: 'es' satisfies Locale,
  pathnames: pathnames
})

export default function (req: NextRequest): NextResponse {
  return nextIntlMiddleware(req)
}
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|es)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
}
