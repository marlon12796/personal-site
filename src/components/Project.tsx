import Subtitle from './Subtitle'
import ProjectCard from './ProjectCard'
import { useTranslations } from 'next-intl'
import { projects } from '@/app/data/content/projects'

const Projects = () => {
  const t = useTranslations('home.projects')
  const keys = ['project1', 'project2', 'project3', 'project4'] as const
  return (
    <section className='w-full px-4 my-16' id='projects'>
      <article className='mx-auto max-w-screen-xl w-full '>
        <Subtitle text='My projects' />
        <span className='text-slate-300 block mt-4'>Here are a few things I&apos;ve created during my free time. 🧑‍💻</span>
        <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 mt-8'>
          {keys.map((key) => (
            <ProjectCard
              key={key}
              project={{
                name: t(`${key}.name`),
                description: t(`${key}.description`),
                stack: projects[key].stack,
                images: projects[key].images,
                previewLink: t(`${key}.previewLink`),
                githubLink: t(`${key}.githubLink`)
              }}
            />
          ))}
        </div>
      </article>
    </section>
  )
}

export default Projects
