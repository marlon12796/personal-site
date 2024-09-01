import Projects from '@/components/Project'
import Technologies from '@/components/Technologies/Technologies'
import Hero from '@/components/home/Hero'
import { unstable_setRequestLocale } from 'next-intl/server'
type Props = {
  params: { locale: string }
}

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)
  return (
    <main className='flex min-h-screen flex-col items-center justify-between '>
      <Hero />
      <Projects />
      <Technologies />
    </main>
  )
}
