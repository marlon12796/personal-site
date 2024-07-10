import Projects from '@/components/Project'
import Hero from '@/components/home/Hero'
import Technologies from '@/components/home/Thecnologies'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between '>
      <Hero />
      <Projects />
      <Technologies />
    </main>
  )
}
