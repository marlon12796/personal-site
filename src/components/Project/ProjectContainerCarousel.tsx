'use client'
import styles from '@/components/carousel/Carousel.module.css'
import useEmblaCarousel from 'embla-carousel-react'
import { usePrevNextButtons } from '@/hooks/usePrevNextButtons'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const ProjectContainerCarousel = ({ children }: { children: React.ReactNode }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: false, watchDrag: false })
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <div className={`${styles.embla} ${styles['embla_space-2']}`}>
      <div className='h-full' ref={emblaRef}>
        <ul className={`${styles['embla__container']}`}>{children}</ul>
      </div>
      <div className='flex w-fit gap-3 [margin-inline-start:auto] [margin-block-start:1.5rem]'>
        <Button
          variant='ghost'
          className='bg-slate-100 p-0 size-8 shadow-md flex disabled:cursor-not-allowed '
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        >
          <ChevronLeft className='text-black/60 m-auto ' />
        </Button>
        <Button
          variant='ghost'
          className='bg-slate-100 p-0 size-8 shadow-md flex disabled:cursor-not-allowed '
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        >
          <ChevronRight className='text-black/60 m-auto' />
        </Button>
      </div>
    </div>
  )
}
