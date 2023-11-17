'use client';

import { SwiperClass, SwiperSlide } from 'swiper/react';
import Cake from '../cake/Cake';
import Card from '../common/Card';

import { CAKE_THEME } from '@/lib/constant';
import { cn } from '@/lib/utils';
import { useCallback } from 'react';
import 'swiper/css';
import SwiperWrapper from './SwiperWrapper';
import { useStepStore } from '@/hooks/make';

const StepTheme = () => {
  const { store, onStoreUpdate } = useStepStore<ThemeCake>();

  const onSlideChanged = useCallback(
    (slide: SwiperClass) => {
      const selectedValue = CAKE_THEME[slide.activeIndex].value;

      onStoreUpdate(selectedValue);
    },
    [onStoreUpdate],
  );

  return (
    <SwiperWrapper
      initialSlide={CAKE_THEME.findIndex((v) => v.value === store.theme)}
      onSlideChanged={onSlideChanged}>
      {CAKE_THEME.map((v) => (
        <SwiperSlide key={v.value}>
          {/* TODO: Change theme 3d */}
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
      ))}
    </SwiperWrapper>
  );
};

export default StepTheme;
