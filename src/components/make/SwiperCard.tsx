import { Swiper, SwiperClass } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { PropsWithChildren, memo } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

type Props = {
  initialSlide?: number;
  onSlideChanged?: (swiper: SwiperClass) => void;
};

const SwiperCard = ({ initialSlide, onSlideChanged, children }: PropsWithChildren<Props>) => {
  return (
    <article className="h-full pb-12 pt-5">
      <Swiper
        initialSlide={initialSlide}
        slidesPerView="auto"
        navigation
        spaceBetween={20}
        className="swiper-card"
        centeredSlides
        onSlideChange={onSlideChanged}
        modules={[Navigation]}>
        {children}
      </Swiper>
    </article>
  );
};

export default memo(SwiperCard);
