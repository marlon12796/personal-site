'use client'

import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { useState } from 'react'

export type ProfessionalCaseSlide = {
  src: string
  alt: string
}

const defaultSlides: ProfessionalCaseSlide[] = [
  {
    src: '/projects/cear/home.webp',
    alt: 'Página principal de CEAR Latinoamericano'
  },
  {
    src: '/projects/cear/cursos.webp',
    alt: 'Sección de cursos de CEAR Latinoamericano'
  },
  {
    src: '/projects/cear/contacto.webp',
    alt: 'Página de contacto de CEAR Latinoamericano'
  }
]

export type ProfessionalCaseCarouselProps = {
  slides?: ProfessionalCaseSlide[]
  aspect?: string
  showCaption?: boolean
  allowFullscreen?: boolean
}

export const ProfessionalCaseCarousel = ({
  slides: customSlides = defaultSlides,
  aspect = 'aspect-[16/9.6]',
  showCaption = true,
  allowFullscreen = true
}: ProfessionalCaseCarouselProps) => {
  const [current, setCurrent] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  if (customSlides.length === 0) return null
  const slide = customSlides[current]

  const previous = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrent((index) => (index - 1 + customSlides.length) % customSlides.length)
  }

  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrent((index) => (index + 1) % customSlides.length)
  }

  return (
    <>
      <div className='relative overflow-hidden rounded-2xl border border-white/10 bg-[#060b14] shadow-[0_16px_45px_rgba(0,0,0,0.35)]'>
        {/* Top neon accent line */}
        <div className='pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent' />

        <div className={`relative ${aspect} w-full overflow-hidden bg-slate-950`}>
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            decoding='async'
            fetchPriority={current === 0 ? 'high' : 'low'}
            loading={current === 0 ? 'eager' : 'lazy'}
            className='absolute inset-0 size-full object-contain object-center transition-all duration-300'
          />

          {/* Navigation controls */}
          <button
            type='button'
            onClick={previous}
            aria-label='Imagen anterior'
            className='absolute left-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-slate-950/80 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-cyan-400 hover:text-slate-950 shadow-lg'
          >
            <ChevronLeft className='h-5 w-5' />
          </button>

          <button
            type='button'
            onClick={next}
            aria-label='Siguiente imagen'
            className='absolute right-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-slate-950/80 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-cyan-400 hover:text-slate-950 shadow-lg'
          >
            <ChevronRight className='h-5 w-5' />
          </button>

          {/* Fullscreen zoom button */}
          {allowFullscreen && (
            <button
              type='button'
              onClick={(e) => {
                e.stopPropagation()
                setIsModalOpen(true)
              }}
              aria-label='Ver captura en alta resolución'
              title='Ver en tamaño completo'
              className='absolute top-3 right-3 z-20 grid h-9 w-9 place-items-center rounded-xl border border-white/20 bg-slate-950/75 text-slate-200 backdrop-blur-md transition-all hover:scale-105 hover:bg-white hover:text-slate-950 shadow-lg'
            >
              <Maximize2 className='h-4 w-4' />
            </button>
          )}

          {/* Slide indicator dots */}
          <div className='absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 backdrop-blur-md shadow-md'>
            {customSlides.map((item, index) => (
              <button
                key={item.src}
                type='button'
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrent(index)
                }}
                aria-label={`Ver imagen ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'w-6 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]'
                    : 'w-1.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Active slide caption */}
        {showCaption && slide.alt && (
          <div className='border-t border-white/10 bg-slate-950/90 px-4 py-2.5 text-center text-xs font-medium text-slate-300 backdrop-blur-sm'>
            <span className='font-mono text-cyan-400 mr-2'>
              [{current + 1}/{customSlides.length}]
            </span>
            {slide.alt}
          </div>
        )}
      </div>

      {/* Fullscreen High-Res Modal */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md'
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className='relative max-h-[92vh] max-w-[95vw] overflow-hidden rounded-2xl border border-white/20 bg-slate-950 shadow-2xl'
          >
            <button
              type='button'
              onClick={() => setIsModalOpen(false)}
              className='absolute top-4 right-4 z-30 rounded-full border border-white/20 bg-slate-950/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-md hover:bg-white hover:text-slate-950'
            >
              Cerrar ✕
            </button>

            <div className='relative h-[80vh] w-[90vw] max-w-6xl'>
              <img
                key={`modal-${slide.src}`}
                src={slide.src}
                alt={slide.alt}
                decoding='async'
                loading='lazy'
                className='absolute inset-0 size-full object-cover'
              />
            </div>

            <div className='border-t border-white/10 bg-slate-950 px-6 py-3 flex items-center justify-between text-xs text-slate-300'>
              <span>
                <strong className='text-cyan-400'>
                  [{current + 1} de {customSlides.length}]
                </strong>{' '}
                {slide.alt}
              </span>
              <div className='flex gap-2'>
                <button
                  type='button'
                  onClick={previous}
                  className='rounded-lg border border-white/15 px-3 py-1 hover:bg-white/10'
                >
                  ← Anterior
                </button>
                <button type='button' onClick={next} className='rounded-lg border border-white/15 px-3 py-1 hover:bg-white/10'>
                  Siguiente →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
