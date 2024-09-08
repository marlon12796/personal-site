import { useTranslations } from 'next-intl'
import Subtitle from '../Subtitle'
import { ProjectGroup } from './ProjectGroup'
import { ProjectContainerCarousel } from './ProjectContainerCarousel'

export const ListProjects: React.FC = () => {
  const h = useTranslations('home')
  const keys = ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'] as const
  const chunkArray = (array: typeof keys, size: number) => {
    const chunks = []
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size))
    }
    return chunks
  }
  const groupedKeys = chunkArray(keys, 4)

  return (
    <section className='w-full px-4 my-16 max-w-screen-xl' id='projects'>
      <Subtitle text={h('projectsTitle')} />
      <span className='text-slate-300 block mt-4'>{h('projectsDescription')}</span>
      <ProjectContainerCarousel>
        {groupedKeys.map((group, index) => (
          <ProjectGroup group={group} key={index} />
        ))}
      </ProjectContainerCarousel>
    </section>
  )
}
{
  /* <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 mt-8'>
        {keys.map((key) => (
          <ProjectCard
            key={key}
            project={{
              name: t(`${key}.name`),
              description: t(`${key}.description`),
              stack: projects[key].stack,
              images: projects[key].images,
              previewLink: t(`${key}.previewLink`),
              githubLink: t(`${key}.githubLink`),
              mainPath: projects[key].mainPath,
              isCover: projects[key].isCover
            }}
          />
        ))}
      </div> */
}
