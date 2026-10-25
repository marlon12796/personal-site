import { TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface EducationCardTypes {
  title: string
  description: string
  even: boolean
  headerIcon: React.ReactNode
  time: string
}
export const EducationCard = ({ title, description, even, headerIcon, time }: EducationCardTypes) => {
  return (
    <article
      className={cn(
        'group relative mb-8 flex min-h-40 pl-12 sm:pl-0',
        {
          'sm:justify-end': even === true
        },
        { 'justify-start': even === false }
      )}
    >
      <div className='absolute left-5 top-7 z-20 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-xl border border-cyan-200/40 bg-slate-900 text-cyan-200 shadow-[0_0_0_5px_rgba(8,15,31,0.9),0_0_24px_rgba(34,211,238,0.45)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 sm:left-1/2'>
        <TrendingUp className='h-4 w-4' />
      </div>
      <div
        className={cn(
          'relative isolate w-full overflow-visible rounded-2xl border border-white/10 bg-slate-950/85 shadow-[0_18px_45px_rgba(0,0,0,0.3)] backdrop-blur-xl transition duration-500 [transform:rotateX(0deg)_rotateY(0deg)_translateZ(0)] hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_24px_55px_rgba(0,0,0,0.45),0_0_30px_rgba(34,211,238,0.12)] sm:w-[calc(50%-2.75rem)] sm:hover:[transform:rotateY(-2deg)_translateZ(10px)]',
          { 'sm:hover:[transform:rotateY(2deg)_translateZ(10px)]': even === true }
        )}
      >
        <div className='pointer-events-none absolute inset-0 z-0 translate-x-2 translate-y-2 rounded-2xl border border-cyan-300/10 bg-cyan-400/[0.04] shadow-[0_12px_0_rgba(34,211,238,0.04)]' />
        <div className='pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-40'>
          <div className='absolute -right-12 top-8 h-24 w-24 rotate-45 border border-white/10 [transform:rotate(45deg)_skew(-12deg,-12deg)]' />
          <div className='absolute bottom-4 left-4 h-10 w-10 border-b border-l border-cyan-300/20' />
        </div>
        <div className='absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl transition-opacity group-hover:opacity-100' />
        <header className='relative z-10 flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-cyan-400/15 via-violet-500/15 to-transparent px-4 py-4'>
          <span className='grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/10 text-cyan-200 shadow-inner shadow-white/10 [&>svg]:h-6 [&>svg]:w-6'>
            {headerIcon}
          </span>
          <div>
            <h3 className='text-sm font-bold uppercase tracking-wide text-slate-100'>{title}</h3>
            <time className='mt-1 block font-mono text-xs text-cyan-200/80'>{time}</time>
          </div>
        </header>
        <p className='relative z-10 px-4 py-5 text-sm leading-7 text-slate-300'>{description}</p>
      </div>
    </article>
  )
}
