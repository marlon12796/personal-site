import Subtitle from './Subtitle'
import ProjectCard from './ProjectCard'
import { useTranslations } from 'next-intl'
import { projects } from '@/app/data/content/projects'

const Projects = () => {
  const t = useTranslations('home.projects')
  const h = useTranslations('home')
  const keys = ['project1', 'project2', 'project3', 'project4'] as const
  return (
    <section className='w-full px-4 my-16' id='projects'>
      <article className='mx-auto max-w-screen-xl w-full '>
        <Subtitle text={h('projectsTitle')} />
        <span className='text-slate-300 block mt-4'>{h('projectsDescription')}</span>
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
