'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { CarouselButtons, usePrevNextButtons } from './EmblaCarouselArrowButtons'
import { LazyLoadImage } from './EmblaCarouselLazyloadImage'
import styles from './Carousel.module.css'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

type PropType = {
  slides: number[]
  mainPath: string
  isCover: boolean
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, isCover } = props
  const [emblaRed, emblaApi] = useEmblaCarousel(options)
  const [slidesInView, setSlidesInView] = useState<number[]>([])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  const updateSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    setSlidesInView((slidesInView) => {
      if (slidesInView.length === emblaApi.slideNodes().length) {
        emblaApi.off('slidesInView', updateSlidesInView)
      }
      const inView = emblaApi.slidesInView().filter((index) => !slidesInView.includes(index))
      return slidesInView.concat(inView)
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    updateSlidesInView(emblaApi)
    emblaApi.on('slidesInView', updateSlidesInView)
    emblaApi.on('reInit', updateSlidesInView)
  }, [emblaApi, updateSlidesInView])

  return (
    <div className={styles.embla}>
      <div className='overflow-hidden h-full' ref={emblaRed}>
        <div className={styles['embla__container']}>
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
        </div>
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

export default EmblaCarousel
