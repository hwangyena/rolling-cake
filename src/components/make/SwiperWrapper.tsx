import { Swiper, SwiperClass } from 'swiper/react';

import { PropsWithChildren, memo } from 'react';
import 'swiper/css';

type Props = {
  initialSlide?: number;
  onSlideChanged?: (swiper: SwiperClass) => void;
};

const SwiperWrapper = ({ initialSlide, onSlideChanged, children }: PropsWithChildren<Props>) => {
  return (
    <article className="h-full pb-12 pt-5">
      <Swiper
        initialSlide={initialSlide}
        slidesPerView="auto"
        spaceBetween={20}
        className="swiper-card"
        centeredSlides
        onSlideChange={onSlideChanged}>
        {/* {options.map((v) => (
          <SwiperSlide key={v.value}>
            {({ isActive }) => (
              <Card
                content={v.label}
                className={cn({
                  "after: after:absolute after:left-0 after:top-0 after:z-[100] after:h-full after:w-full after:bg-black after:opacity-20 after:drop-shadow-black after:content-['']":
                    !isActive,
                })}>
                <Cake className="h-[90%] w-full" priority />
              </Card>
            )}
          </SwiperSlide>
        ))} */}
        {children}
      </Swiper>
    </article>
  );
};

export default memo(SwiperWrapper);
