import Image from 'next/image'
import styles from './Carousel.module.css'

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`

type PropType = {
  imgSrc: string
  inView: boolean
  index: number
  isFirst: boolean
  isCover: boolean
}

export const LazyLoadImage: React.FC<PropType> = (props) => {
  const { imgSrc, inView, isCover } = props

  return (
    <div className={`${styles['embla__slide']} size-full relative`}>
      <Image
        src={props.isFirst ? imgSrc : inView ? imgSrc : PLACEHOLDER_SRC}
        alt='Your alt text'
        className={`size-full ${isCover ? 'object-cover' : 'object-contain'}`}
        height={500}
        width={500}
      />
    </div>
  )
}
