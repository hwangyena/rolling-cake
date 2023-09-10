'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Cake from '../cake/Cake';
import Card from '../common/Card';
import styles from '@/styles/page.module.css';

import 'swiper/css';
import { useAtom } from 'jotai';
import { stepAtom } from '@/lib/store';

const StepShape = ({
  step,
  options,
  onShapeChanged,
}: {
  step: string;
  options: string[];
  onShapeChanged: (index: number) => void;
}) => {
  const [store] = useAtom(stepAtom);

  return (
    <article className="h-full pt-5 pb-12">
      <Swiper
        initialSlide={step === 'shape' && store.get('shape') === 'theme' ? 1 : 0}
        slidesPerView="auto"
        spaceBetween={20}
        className="swiper-card"
        centeredSlides
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
