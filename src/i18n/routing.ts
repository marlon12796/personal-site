import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import { locales, pathnames } from './config'

export const { Link, getPathname, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({
  locales,
  pathnames
})
