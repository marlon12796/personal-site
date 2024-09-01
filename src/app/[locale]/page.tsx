import Technologies from '@/components/Technologies/Technologies'
import Hero from '@/components/Home/Hero'
import { unstable_setRequestLocale } from 'next-intl/server'
import Projects from '@/components/Navbar/Project'
type Props = {
  params: { locale: string }
}

const Home = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale)
  return (
    <main className='flex min-h-screen flex-col items-center justify-between '>
      <Hero />
      <Projects />
      <Technologies />
    </main>
  )
}
export default Home
