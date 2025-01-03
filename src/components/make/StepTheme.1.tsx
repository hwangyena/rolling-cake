'use client';

import { CAKE_THEME } from '@/lib/constant';
import { useStep } from '@/lib/hooks/make';
import { cn } from '@/lib/utils';
import { useCallback } from 'react';
import { SwiperClass, SwiperSlide } from 'swiper/react';

import Cake from '../cake/Cake';
import Card from '../common/Card';
import SwiperCard from './SwiperCard';

//lagacy _ DO NOT USE THIS CODE
export const StepTheme = () => {
  const { store, onStoreUpdate } = useStep();

  const onSlideChanged = useCallback(
    (slide: SwiperClass) => {
      const selectedValue = CAKE_THEME[slide.activeIndex].value;

      onStoreUpdate(selectedValue);
    },
    [onStoreUpdate],
  );

  return (
    <SwiperCard
      initialSlide={CAKE_THEME.findIndex((v) => v.value === store.theme)}
      onSlideChanged={onSlideChanged}>
      {CAKE_THEME.map((theme) => (
        <SwiperSlide key={theme.value}>
          {({ isActive }) => (
            <Card
              content={theme.label}
              className={cn({
                "relative after:absolute after:left-0 after:top-0 after:z-[100] after:h-full after:w-full after:rounded-lg after:bg-black after:opacity-20 after:drop-shadow-black after:content-['']":
                  !isActive,
              })}>
              <Cake className="h-full w-full" priority theme={theme.value as CakeTheme} />
            </Card>
          )}
        </SwiperSlide>
      ))}
    </SwiperCard>
  );
};
