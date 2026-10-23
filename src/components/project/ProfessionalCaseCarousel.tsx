'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export type ProfessionalCaseSlide = {
  src: string
  alt: string
}

const defaultSlides: ProfessionalCaseSlide[] = [
  { src: '/projects/cear/home.png', alt: 'Página principal de CEAR Latinoamericano' },
  { src: '/projects/cear/cursos.png', alt: 'Sección de cursos de CEAR Latinoamericano' },
  { src: '/projects/cear/contacto.png', alt: 'Página de contacto de CEAR Latinoamericano' },
]

type ProfessionalCaseCarouselProps = {
  slides?: ProfessionalCaseSlide[]
}

export const ProfessionalCaseCarousel = ({ slides: customSlides = defaultSlides }: ProfessionalCaseCarouselProps) => {
  const [current, setCurrent] = useState(0)
  const slide = customSlides[current]

  const previous = () => setCurrent((index) => (index - 1 + customSlides.length) % customSlides.length)
  const next = () => setCurrent((index) => (index + 1) % customSlides.length)

  return (
    <div className='relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-[0_16px_45px_rgba(0,0,0,0.3)]'>
      <div className='relative aspect-[16/8] w-full'>
        <Image src={slide.src} alt={slide.alt} fill sizes='(max-width: 1024px) 100vw, 48vw' className='object-cover object-top transition-opacity duration-300' priority={current === 0} />
        <div className='absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 to-transparent' />
        <button type='button' onClick={previous} aria-label='Imagen anterior' className='absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-slate-950/70 text-white backdrop-blur transition hover:bg-cyan-300 hover:text-slate-950'>
          <ChevronLeft className='h-4 w-4' />
        </button>
        <button type='button' onClick={next} aria-label='Siguiente imagen' className='absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-slate-950/70 text-white backdrop-blur transition hover:bg-cyan-300 hover:text-slate-950'>
          <ChevronRight className='h-4 w-4' />
        </button>
        <div className='absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-slate-950/60 px-2 py-1.5 backdrop-blur'>
          {customSlides.map((item, index) => (
            <button key={item.src} type='button' onClick={() => setCurrent(index)} aria-label={`Ver imagen ${index + 1}`} className={`h-1.5 rounded-full transition-all ${index === current ? 'w-6 bg-cyan-300' : 'w-1.5 bg-white/50'}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
