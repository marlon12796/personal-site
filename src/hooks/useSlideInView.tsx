import { useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'

export const useSlidesInView = (emblaApi?: EmblaCarouselType) => {
  const [slidesInView, setSlidesInView] = useState<number[]>([])

  const updateSlidesInView = useCallback(() => {
    if (!emblaApi) return
    setSlidesInView((prev) => {
      if (prev.length === emblaApi.slideNodes().length) {
        emblaApi.off('slidesInView', updateSlidesInView)
      }
      const inView = emblaApi.slidesInView().filter((index) => !prev.includes(index))
      return prev.concat(inView)
    })
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    updateSlidesInView()
    emblaApi.on('slidesInView', updateSlidesInView)
    emblaApi.on('reInit', updateSlidesInView)

    return () => {
      emblaApi?.off('slidesInView', updateSlidesInView)
      emblaApi?.off('reInit', updateSlidesInView)
    }
  }, [emblaApi, updateSlidesInView])

  return { slidesInView }
}
