import { SELECT_ITEM } from '@/lib/constant';
import styles from '@/styles/component.module.css';
import { memo, useEffect, useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import CheckButton from '../common/CheckButton';
import { useStep } from '@/hooks/make';

type Props = {
  data: (keyof typeof SELECT_ITEM)[];
  noLabel?: boolean;
};

const ItemSelect = ({ data, noLabel }: Props) => {
  const { store, onUpdate, step } = useStep();

  const [tab, setTab] = useState(data[0]);
  const [selected, setSelected] = useState<number[]>([]);

  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    return setTab(data[0]);
  }, [data]);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  }, [tab]);

  useEffect(() => {
    const selectedValue = (store.get(step) as Record<string, unknown>)[tab];
    const selectedIndex = SELECT_ITEM[tab].data.findIndex((v) => v === selectedValue);

    if (selectedIndex !== -1) {
      setSelected([selectedIndex]);
      return;
    }

    if (tab === 'item') {
      if (selectedValue && (selectedValue as string[]).length > 0) {
        const itemIndex = [];

        for (const item of selectedValue as string[]) {
          itemIndex.push(SELECT_ITEM.item.data.findIndex((v) => v === item));
        }
        setSelected(itemIndex);
      } else {
        setSelected([]);
      }
    }
  }, [step, store, tab]);

  const handleItemClicked = (selected: { value: string; index: number }) => {
    onUpdate({ [tab]: selected.value });
  };

  return (
    <section className="mb-3">
      {noLabel ? null : (
        <div className="mb-[16px] flex gap-3 px-[20px]">
          {data.map((tabItem) => (
            <span
              key={tabItem}
              className={`text-t1 font-bold ${tabItem === tab ? 'text-gray-700' : 'text-gray-500'}`}
              onClick={() => setTab(tabItem)}>
              {SELECT_ITEM[tabItem].label}
            </span>
          ))}
        </div>
      )}
      <Swiper
        className="step-box w-full"
        slidesPerView="auto"
        spaceBetween={10}
        freeMode
        slidesOffsetBefore={20}
        slidesOffsetAfter={20}
        modules={[FreeMode]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}>
        {SELECT_ITEM[tab].data.map((item, index) => (
          <SwiperSlide
            className={styles.selectbox}
            key={item}
            onClick={() => handleItemClicked({ value: item, index })}>
            <CheckButton item={item} selected={selected.includes(index)} type={tab} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default memo(ItemSelect);
