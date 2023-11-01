'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Cake from '../cake/Cake';
import Card from '../common/Card';

import { cn } from '@/lib/utils';
import 'swiper/css';

const StepShape = ({
  options,
  initialSlide,
  onShapeChanged,
}: {
  initialSlide?: number;
  options: { label: string; value: string }[];
  onShapeChanged: (value: string, index?: number) => void;
}) => {
  return (
    <article className="h-full pb-12 pt-5">
      <Swiper
        initialSlide={initialSlide}
        slidesPerView="auto"
        spaceBetween={20}
        className="swiper-card"
        centeredSlides
        onSlideChange={(slide) => {
          onShapeChanged(options[slide.activeIndex].value, slide.activeIndex);
        }}>
        {options.map((v) => (
          <SwiperSlide key={v.value}>
            {({ isActive }) => (
              <Card
                content={v.label}
                className={cn({
                  "after: after:drop-shadow-black after:absolute after:left-0 after:top-0 after:z-[100] after:h-full after:w-full after:bg-black after:opacity-20 after:content-['']":
                    !isActive,
                })}>
                <Cake className="h-[90%] w-full" priority />
              </Card>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default StepShape;
