import { Hero } from '@/components/home/Hero'
import { ListProjects } from '@/components/project/ListProjects'
import { Technologies } from '@/components/technology/Technologies'
import { unstable_setRequestLocale } from 'next-intl/server'
type Props = {
  params: { locale: string }
}

const Home = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale)
  return (
    <main className='flex min-h-screen flex-col items-center justify-between '>
      <Hero />
      <ListProjects />
      <Technologies />
    </main>
  )
}
export default Home
