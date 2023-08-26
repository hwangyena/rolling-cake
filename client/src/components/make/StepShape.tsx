'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Cake from '../cake/Cake';
import Card from '../common/Card';
import styles from '@/styles/page.module.css';

import 'swiper/css';

const StepShape = ({
  options,
  onShapeChanged,
}: {
  options: string[];
  onShapeChanged: (index: number) => void;
}) => {
  return (
    <article className="h-full pt-5 pb-12">
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        className="swiper-card"
        slidesOffsetBefore={20}
        slidesOffsetAfter={20}
        onSlideChange={(slide) => onShapeChanged(slide.activeIndex)}>
        {options.map((v, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <Card type="simple" content={v} className={`${isActive ? '' : styles.dimmed}`}>
                <Cake className="w-full h-[90%]" />
              </Card>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default StepShape;
