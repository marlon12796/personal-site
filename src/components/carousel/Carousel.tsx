'use client'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './Carousel.module.css'
import { usePrevNextButtons } from '@/hooks/usePrevNextButtons'
import { useDotButton } from '@/hooks/useDotButton'
import { LazyLoadImage } from './CarouselLazyloadImage'
import { CarouselButtons } from '@/components/carousel/CarouselArrowButtons';
import { DotButton } from '@/components/carousel/CarouselDotButton'
import { useSlidesInView } from '@/hooks/useSlideInView'

type PropType = {
  slides: number[]
  mainPath: string
  isCover: boolean
  options?: EmblaOptionsType
}

export const Carousel: React.FC<PropType> = (props) => {
  const { slides, options, isCover } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { slidesInView } = useSlidesInView(emblaApi)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <div className={styles.embla}>
      <div className='overflow-hidden h-full' ref={emblaRef}>
        <ul className={styles['embla__container']}>
          {slides.map((index) => (
            <LazyLoadImage
              key={index}
              index={index}
              isFirst={index === 0}
              isCover={isCover}
              imgSrc={`/projects/${props.mainPath}/${index + 1}.webp`}
              inView={slidesInView.indexOf(index) > -1}
            />
          ))}
        </ul>
      </div>
      <CarouselButtons onClick={onPrevButtonClick} typeButton='left' disabled={prevBtnDisabled} />
      <CarouselButtons onClick={onNextButtonClick} typeButton='right' disabled={nextBtnDisabled} />

      <div className='flex gap-1 absolute bottom-4 right-1/2 translate-x-1/2 bg-black/20 p-1 rounded-full'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'size-1.5 bg-white rounded-full '.concat(index === selectedIndex ? 'opacity-40' : '')}
          />
        ))}
      </div>
    </div>
  )
}
