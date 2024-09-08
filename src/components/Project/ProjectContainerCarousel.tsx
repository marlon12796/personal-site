'use client'
import styles from '@/components/carousel/Carousel.module.css'
import useEmblaCarousel from 'embla-carousel-react'
import { CarouselButtons } from '../carousel/CarouselArrowButtons'
import { usePrevNextButtons } from '@/hooks/usePrevNextButtons'
export const ProjectContainerCarousel = ({ children }: { children: React.ReactNode }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: false, watchDrag: false })
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <div className={styles.embla}>
      <div className='overflow-hidden h-full' ref={emblaRef}>
        <ul className={`${styles['embla__container']}`}>{children}</ul>
      </div>
      <CarouselButtons onClick={onPrevButtonClick} typeButton='left' disabled={prevBtnDisabled} />
      <CarouselButtons onClick={onNextButtonClick} typeButton='right' disabled={nextBtnDisabled} />
    </div>
  )
}
