import { ExperienceAndStack } from '@/components/home/ExperienceAndStack'
import { Hero } from '@/components/home/Hero'
import { ListProjects } from '@/components/project/ListProjects'
import { Technologies } from '@/components/technology/Technologies'
import { locales } from '@/i18n/config'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const dynamic = 'force-static'

type Props = {
  params: Promise<{ locale: string }>
}

const Home = async ({ params }: Props) => {
  await params
  return (
    <main className='flex min-h-screen flex-col items-center justify-between w-full'>
      <Hero />
      <ExperienceAndStack />
      <ListProjects />
      <Technologies />
    </main>
  )
}
export default Home
