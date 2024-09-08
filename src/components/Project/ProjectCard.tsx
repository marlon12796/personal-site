import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { ExternalLink, Github } from 'lucide-react'
import { PersonalProject } from '@/types'
import { technologies } from '@/app/data/Thecnologies'
import { Button } from '@/components/ui/Button'
import CustomTooltip from '@/components/ui/CustomTooltip'
import { Carousel } from '@/components/carousel/Carousel'

type Props = {
  project: PersonalProject
}
const ProjectCard = ({ project }: Props) => {
  return (
    <Card className='w-full max-w-full h-full rounded-xl bg-slate-950/50 border-slate-800 flex flex-col'>
      <CardHeader className='p-0  embla rounded-t-xl overflow-hidden aspect-[2/1] lg:min-h-[18rem]'>
        <Carousel
          slides={Array.from(Array(project.images.length).keys())}
          mainPath={project.mainPath}
          isCover={project.isCover}
        />
      </CardHeader>
      <CardContent className='pt-8'>
        <CardTitle className='text-slate-200'>{project.name}</CardTitle>
        <CardDescription className='text-slate-400 mt-4'>{project.description}</CardDescription>
        <div className='mt-4 inline-flex flex-wrap gap-1'>
          {project.stack.map(
            (x) =>
              Boolean(technologies[x]) && (
                <span key={x} className={`${technologies[x].bgColor} ${technologies[x].color} text-xs p-1 rounded-md`}>
                  {x}
                </span>
              )
          )}
        </div>
      </CardContent>
      <CardFooter className='flex justify-end gap-2 mt-auto '>
        {project.githubLink && (
          <CustomTooltip title='View source code'>
            <a href={project.githubLink} target='_blank' rel='noreferrer'>
              <Button variant='ghost' size='icon' className='hover:bg-violet-800/20' tabIndex={-1}>
                <Github className='text-violet-400' />
              </Button>
            </a>
          </CustomTooltip>
        )}

        {project.previewLink && (
          <CustomTooltip title='View live preview'>
            <a href={project.previewLink} target='_blank' rel='noreferrer'>
              <Button variant='ghost' size='icon' className='hover:bg-violet-800/20' tabIndex={-1}>
                <ExternalLink className='text-violet-400' />
              </Button>
            </a>
          </CustomTooltip>
        )}
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
