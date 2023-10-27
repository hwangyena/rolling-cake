'use client';

import styles from '@/styles/page.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Cake from '../cake/Cake';
import Card from '../common/Card';

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
    <article className="h-full pt-5 pb-12">
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
              <Card content={v.label} className={`${isActive ? '' : styles.dimmed}`}>
                <Cake className="w-full h-[90%]" priority />
              </Card>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default StepShape;
