import { CAKE_SHAPE } from '@/lib/constant';
import SwiperWrapper from './SwiperWrapper';
import { SwiperClass, SwiperSlide } from 'swiper/react';
import Card from '../common/Card';
import { cn } from '@/lib/utils';
import Cake from '../cake/Cake';
import { useEntireStep } from '@/hooks/make';
import { useCallback } from 'react';

const StepShape = () => {
  const { isTheme, onEntireStepChanged } = useEntireStep();

  const onSlideChanged = useCallback(
    (slide: SwiperClass) => {
      const selectedValue = CAKE_SHAPE[slide.activeIndex].value;

      onEntireStepChanged(selectedValue as 'CUSTOM' | 'THEME');
    },
    [onEntireStepChanged],
  );

  return (
    <SwiperWrapper initialSlide={isTheme ? 1 : 0} onSlideChanged={onSlideChanged}>
      {CAKE_SHAPE.map((v) => (
        <SwiperSlide key={v.value}>
          {({ isActive }) => (
            <Card
              content={v.label}
              className={cn({
                "after: after:absolute after:left-0 after:top-0 after:z-[100] after:h-full after:w-full after:bg-black after:opacity-20 after:drop-shadow-black after:content-['']":
                  !isActive,
              })}>
              <Cake
                className="h-[90%] w-full"
                priority
                theme={v.value === 'THEME' ? 'harrypotter' : undefined}
              />
            </Card>
          )}
        </SwiperSlide>
      ))}
    </SwiperWrapper>
  );
};

export default StepShape;
