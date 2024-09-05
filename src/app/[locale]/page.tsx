import { Hero } from '@/components/home/Hero'
import Projects from '@/components/navbar/Project'
import Technologies from '@/components/technologies/Technologies'
import { unstable_setRequestLocale } from 'next-intl/server'
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
