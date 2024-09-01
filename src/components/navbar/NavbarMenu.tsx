import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import Link from 'next/link'
const NavbarMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const keys = ['home', 'about', 'contact'] as const
  const t = useTranslations('layout')

  const pathname = usePathname()
  return (
    <ul
      className={`justify-center items-center space-y-6  text-lg  md:space-x-6 md:space-y-0 flex-1 mt-8 md:mt-0 md:flex md:justify-end ${isMenuOpen ? 'block' : 'hidden'}`}
    >
      {keys.map((key, idx) => (
        <li
          key={idx}
          className={cn('text-gray-300 relative', {
            'text-gray-100 md:after:content-[" "] md:after:border-gray-300 md:after:absolute md:after:w-full md:after:h-full md:after:border-b md:after:top-0':
              t(`routes.${key}.path`) === pathname,
            'hover:text-gray-400': t(`routes.${key}.path`) !== pathname
          })}
        >
          <Link href={t(`routes.${key}.path`)} className='block'>
            {t(`routes.${key}.title`)}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavbarMenu
