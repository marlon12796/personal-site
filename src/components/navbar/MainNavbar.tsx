'use client'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Link } from '@/i18n/routing'
import styles from './Navbar.module.css'
import { MenuButton } from './MenuButton'
import NavbarMenu from './NavbarMenu'
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((menuOpen) => !menuOpen)
  return (
    <header className={`${styles.nav} sticky top-0 z-[500]`}>
      <nav
        className={cn(`md:text-sm gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex`, {
          'shadow-lg rounded-xl md:shadow-none md:border-none md:mx-2 md:mt-0': isMenuOpen
        })}
      >
        <div
          className={cn('flex items-center justify-between py-5  grow', {
            'grid grid-cols-2 ': isMenuOpen
          })}
        >
          <Link href='/' className='text-white text-2xl'>
            Marlon.Dev
          </Link>
          <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
          <NavbarMenu isMenuOpen={isMenuOpen} />
        </div>
      </nav>
    </header>
  )
}
