'use client'

import { Cloud } from 'lucide-react'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'marlon-site-info-seen'

type SiteInfoPopupProps = {
  locale: string
}

export function SiteInfoPopup({ locale }: SiteInfoPopupProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) !== 'true') {
        setIsVisible(true)
      }
    } catch {
      setIsVisible(true)
    }
  }, [])

  const dismiss = () => {
    setIsVisible(false)

    try {
      window.localStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // The popup remains dismissed for the current session.
    }
  }

  if (!isVisible) return null

  const isSpanish = locale.toLowerCase().startsWith('es')

  return (
    <aside
      aria-label={isSpanish ? 'Información del proyecto' : 'Project information'}
      className='fixed right-4 bottom-4 z-50 w-[min(22rem,calc(100vw-2rem))] animate-in fade-in slide-in-from-bottom-3 duration-500'
    >
      <div className='rounded-2xl border border-cyan-400/30 bg-slate-950/95 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-md'>
        <div className='flex items-start gap-3'>
          <div
            aria-hidden='true'
            className='relative mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-orange-300/30 bg-gradient-to-br from-orange-400/20 to-amber-500/10 text-[#f48120] shadow-inner shadow-orange-300/10'
          >
            <Cloud className='size-6' fill='currentColor' strokeWidth={1.8} />
            <span className='absolute right-1 bottom-1 size-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.9)]' />
          </div>

          <div className='min-w-0 flex-1'>
            <p className='mb-1 text-sm font-bold text-white'>{isSpanish ? 'Proyecto con propósito' : 'Built with purpose'}</p>
            <p className='text-xs leading-relaxed text-slate-300'>
              {isSpanish
                ? 'Esta web fue desarrollada con Cloudflare, Terraform, GitHub Actions y Next.js para demostrar un flujo real de CI/CD y prácticas DevOps.'
                : 'This website was built with Cloudflare, Terraform, GitHub Actions, and Next.js to demonstrate a real CI/CD workflow and DevOps practices.'}
            </p>
          </div>

          <button
            type='button'
            onClick={dismiss}
            aria-label={isSpanish ? 'Cerrar aviso' : 'Close notice'}
            className='rounded-md px-1.5 py-0.5 text-lg leading-none text-slate-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
          >
            ×
          </button>
        </div>

        <button
          type='button'
          onClick={dismiss}
          className='mt-3 w-full rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs font-semibold text-cyan-200 transition-colors hover:bg-cyan-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
        >
          {isSpanish ? 'Entendido' : 'Got it'}
        </button>
      </div>
    </aside>
  )
}
