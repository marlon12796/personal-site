'use client'
import { useState } from 'react'

import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Link } from '@/app/navigation'
import { useTranslations } from 'next-intl'

export default function MobileNavbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations('layout')
  const toggleMenu = () => (isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true))
  const keys = ['home', 'about', 'contact'] as const
  return (
    <nav
      className={` pb-5 md:text-sm  ${
        isMenuOpen ? 'shadow-lg rounded-xl  shadow-blue-900  md:shadow-none md:border-none md:mx-2 md:mt-0' : ''
      }`}
    >
      <div className='gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8'>
        <div className='flex items-center justify-between py-5 md:block'>
          <Link href='/' className='text-white text-2xl'>
            Marlon.Dev
          </Link>
          <div className='md:hidden'>
            <button className='menu-btn text-gray-200 hover:text-gray-400' onClick={toggleMenu}>
              {isMenuOpen ? (
                <svg className='size-6' viewBox='0 0 20 20' fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              ) : (
                <svg fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className={`flex-1 mt-8 md:mt-0 md:flex md:justify-end ${isMenuOpen ? 'block' : 'hidden'} `}>
          <ul className='justify-center items-center space-y-6  text-lg md:flex md:space-x-6 md:space-y-0'>
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
        </div>
      </div>
    </nav>
  )
}
