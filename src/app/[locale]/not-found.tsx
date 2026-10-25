import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { RandomTitle } from '@/components/RandomTitle'

const NotFoundPage = () => {
  const t = useTranslations('layout')

  return (
    <main className='relative isolate flex min-h-[80dvh] w-full grow items-center justify-center overflow-hidden px-4 py-16 animate-fadeIn'>
      <div className='pointer-events-none absolute inset-0 overflow-hidden' aria-hidden='true'>
        <span className='motion-safe:animate-pulse absolute left-[14%] top-[18%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_14px_4px_rgba(103,232,249,0.35)]' />
        <span className='motion-safe:animate-pulse absolute right-[18%] top-[28%] h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_16px_4px_rgba(196,181,253,0.3)] [animation-delay:700ms]' />
        <span className='motion-safe:animate-pulse absolute bottom-[24%] left-[24%] h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_16px_4px_rgba(110,231,183,0.3)] [animation-delay:1.2s]' />
      </div>

      <div className='relative z-10 flex w-full max-w-2xl flex-col items-center gap-6 text-center'>
        <div className='relative h-64 w-full max-w-md sm:h-72' aria-label='404 illustration' role='img'>
          <div className='absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl' />
          <svg
            viewBox='0 0 420 270'
            className='relative h-full w-full overflow-visible'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <defs>
              <linearGradient id='terminal-frame' x1='50' y1='30' x2='360' y2='205' gradientUnits='userSpaceOnUse'>
                <stop stopColor='#172554' />
                <stop offset='0.5' stopColor='#0F172A' />
                <stop offset='1' stopColor='#111827' />
              </linearGradient>
              <linearGradient id='terminal-screen' x1='90' y1='58' x2='330' y2='180' gradientUnits='userSpaceOnUse'>
                <stop stopColor='#071A2C' />
                <stop offset='1' stopColor='#07111F' />
              </linearGradient>
              <linearGradient id='keyboard' x1='100' y1='212' x2='315' y2='245' gradientUnits='userSpaceOnUse'>
                <stop stopColor='#334155' />
                <stop offset='1' stopColor='#111827' />
              </linearGradient>
              <filter id='error-glow' x='-50%' y='-50%' width='200%' height='200%'>
                <feGaussianBlur stdDeviation='5' result='blur' />
                <feMerge>
                  <feMergeNode in='blur' />
                  <feMergeNode in='SourceGraphic' />
                </feMerge>
              </filter>
            </defs>

            <path d='M61 204h298' stroke='#22D3EE' strokeOpacity='0.18' strokeWidth='2' strokeDasharray='5 8' />
            <rect
              x='57'
              y='28'
              width='306'
              height='181'
              rx='16'
              fill='url(#terminal-frame)'
              stroke='#22D3EE'
              strokeOpacity='0.5'
              strokeWidth='2'
              filter='url(#error-glow)'
            />
            <rect x='72' y='47' width='276' height='142' rx='9' fill='url(#terminal-screen)' stroke='#334155' strokeWidth='2' />

            <circle cx='80' cy='38' r='4' fill='#FB7185' />
            <circle cx='94' cy='38' r='4' fill='#FBBF24' />
            <circle cx='108' cy='38' r='4' fill='#34D399' />
            <text x='210' y='41' fill='#94A3B8' fontSize='9' textAnchor='middle' fontFamily='monospace'>
              marlon.dev — terminal
            </text>

            <text x='86' y='72' fill='#34D399' fontSize='11' fontFamily='monospace' opacity='0'>
              $ cd /lost-route
              <animate attributeName='opacity' begin='0.1s' dur='0.45s' fill='freeze' from='0' to='1' />
            </text>
            <text x='86' y='92' fill='#67E8F9' fontSize='11' fontFamily='monospace' opacity='0'>
              → searching for page...
              <animate attributeName='opacity' begin='0.65s' dur='0.45s' fill='freeze' from='0' to='1' />
            </text>
            <text x='86' y='112' fill='#FBBF24' fontSize='11' fontFamily='monospace' opacity='0'>
              ! route not found
              <animate attributeName='opacity' begin='1.2s' dur='0.45s' fill='freeze' from='0' to='1' />
            </text>
            <text x='86' y='139' fill='#A78BFA' fontSize='11' fontFamily='monospace' opacity='0'>
              const status = 404
              <animate attributeName='opacity' begin='1.75s' dur='0.45s' fill='freeze' from='0' to='1' />
            </text>
            <text x='86' y='159' fill='#CBD5E1' fontSize='11' fontFamily='monospace' opacity='0'>
              return home()
              <animate attributeName='opacity' begin='2.3s' dur='0.45s' fill='freeze' from='0' to='1' />
            </text>
            <rect x='177' y='150' width='7' height='14' rx='1' fill='#22D3EE'>
              <animate attributeName='opacity' values='1;0;1' dur='0.85s' repeatCount='indefinite' />
            </rect>

            <path d='M92 211h236l-24 30H116l-24-30Z' fill='url(#keyboard)' stroke='#475569' strokeWidth='2' />
            <path d='M119 218h181' stroke='#64748B' strokeWidth='2' strokeDasharray='8 5' />
            <path d='M148 229h126' stroke='#22D3EE' strokeOpacity='0.55' strokeWidth='3' strokeLinecap='round' />

            <g className='motion-safe:animate-bounce' style={{ animationDuration: '2.4s' }}>
              <animateTransform
                attributeName='transform'
                type='translate'
                values='0 0; 0 -8; 0 0'
                dur='2.4s'
                repeatCount='indefinite'
              />
              <path
                d='M331 89c17-13 30-8 35 5 4 11-2 24-15 27l-17-5-8-14 5-13Z'
                fill='#172554'
                stroke='#67E8F9'
                strokeWidth='2'
              />
              <circle cx='337' cy='101' r='3' fill='#67E8F9' />
              <circle cx='349' cy='101' r='3' fill='#A78BFA' />
              <path d='M340 112c4 3 8 3 12 0' stroke='#67E8F9' strokeWidth='2' strokeLinecap='round' />
              <path d='M340 86V76M354 89l6-8' stroke='#67E8F9' strokeWidth='2' strokeLinecap='round' />
              <circle cx='340' cy='75' r='3' fill='#FDE68A' />
            </g>

            <g className='motion-safe:animate-pulse'>
              <path d='M34 77h24M46 65v24' stroke='#C4B5FD' strokeWidth='2' strokeLinecap='round' />
              <path d='M367 174h18M376 165v18' stroke='#67E8F9' strokeWidth='2' strokeLinecap='round' />
            </g>
          </svg>
        </div>

        <RandomTitle />
        <p className='max-w-md text-lg text-slate-300 sm:text-xl'>{t('404.title')}</p>
        <Link
          href={'/'}
          className='group relative overflow-hidden rounded-md border border-cyan-400 bg-cyan-400/10 px-5 py-2.5 font-medium text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.15)] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/20 hover:shadow-[0_0_32px_rgba(34,211,238,0.3)] focus-visible:ring-2 focus-visible:ring-cyan-300'
        >
          <span className='absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/20 transition-all duration-700 group-hover:left-full' />
          {t('404.button')}
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
