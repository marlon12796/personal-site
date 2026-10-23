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
    <div className='w-full max-w-full h-full rounded-2xl bg-[#0c1322]/85 border border-white/10 hover:border-cyan-500/30 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden group'>
      {/* Top Browser bar with dots */}
      <div className='flex items-center gap-1.5 px-4 py-2.5 bg-black/40 border-b border-white/5'>
        <span className='w-2.5 h-2.5 rounded-full bg-rose-500/80' />
        <span className='w-2.5 h-2.5 rounded-full bg-amber-500/80' />
        <span className='w-2.5 h-2.5 rounded-full bg-emerald-500/80' />
        <span className='text-[11px] text-slate-500 font-mono ml-2 truncate max-w-[200px]'>
          {project.mainPath}
        </span>
      </div>

      <div className='p-0 embla overflow-hidden aspect-[2/1] lg:min-h-[17rem] bg-black/30'>
        <Carousel
          slides={Array.from(Array(project.images.length).keys())}
          mainPath={project.mainPath}
          isCover={project.isCover}
            alt={project.name}
        />
      </div>

      <div className='p-6 flex flex-col flex-1'>
        <h3 className='text-xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors'>
          {project.name}
        </h3>
        <p className='text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4'>
          {project.description}
        </p>

        <div className='mt-auto flex flex-wrap gap-1.5 mb-5'>
          {project.stack.map(
            (x) =>
              Boolean(technologies[x]) && (
                <span
                  key={x}
                  className='text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300'
                >
                  {x}
                </span>
              )
          )}
        </div>

        <div className='flex items-center justify-between gap-3 pt-4 border-t border-white/5'>
          {project.previewLink ? (
            <a
              href={project.previewLink}
              target='_blank'
              rel='noreferrer'
              className='px-4 py-2 rounded-lg font-semibold text-xs bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all flex items-center gap-1.5'
            >
              <span>Live Demo</span>
              <ExternalLink className='w-3.5 h-3.5' />
            </a>
          ) : <div />}

          {project.githubLink && (
            <a
              href={project.githubLink}
              target='_blank'
              rel='noreferrer'
              className='px-4 py-2 rounded-lg font-medium text-xs border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:border-white/25 transition-all flex items-center gap-1.5'
            >
              <Github className='w-3.5 h-3.5 text-slate-400' />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
