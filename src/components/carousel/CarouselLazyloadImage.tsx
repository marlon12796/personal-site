import Image from "next/image";
import styles from "./Carousel.module.css";
import { urlGeneretePreview } from "@/utils/utils";

type PropType = {
  imgSrc: string;
  inView: boolean;
  index: number;
  isFirst: boolean;
  isCover: boolean;
  alt: string;
};

export const LazyLoadImage: React.FC<PropType> = (props) => {
  const { imgSrc, inView, isCover, alt } = props;
  const imageSrc = props.isFirst
    ? imgSrc
    : inView
      ? imgSrc
      : urlGeneretePreview();

  return (
    <li className={`${styles["embla__slide"]} size-full relative`}>
      <Image
        src={imageSrc}
        alt={`${alt} screenshot`}
        className={`size-full ${isCover ? "object-cover" : "object-contain"}`}
        height={500}
        width={500}
        quality={90}
        loading={props.isFirst ? "eager" : "lazy"}
      />
    </li>
  );
};
