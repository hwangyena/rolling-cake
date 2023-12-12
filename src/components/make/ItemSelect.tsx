import { memo, useEffect, useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SELECT_ITEM } from '@/lib/constant';
import { isDisabledFont, isObject } from '@/lib/utils';
import styles from '@/styles/component.module.css';
import { useStepStore } from '@/hooks/make';
import CheckButton from '../common/CheckButton';

import 'swiper/css';
import 'swiper/css/free-mode';

type Props = {
  data: Item[];
  noLabel?: boolean;
};

const ItemSelect = ({ data, noLabel }: Props) => {
  const { step, store, onStoreUpdate } = useStepStore();

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
    const storedValue = store[step];

    if (!isObject(storedValue)) {
      return;
    }

    // FIXME: best practice ???
    const selectedValue = (storedValue as unknown as Record<Item, unknown>)[tab];
    const selectedIndex = SELECT_ITEM[tab].data.findIndex((v) => v === selectedValue);

    if (tab === 'item') {
      if (!selectedValue) {
        return;
      }

      const itemIndex = [];
      for (const item of selectedValue as string[]) {
        itemIndex.push(SELECT_ITEM.item.data.findIndex((v) => v === item));
      }
      setSelected(itemIndex);
      return;
    }

    setSelected([selectedIndex]);
  }, [step, store, tab]);

  const handleItemClicked = (value: string) => {
    onStoreUpdate({ [tab]: value });
  };

  return (
    <section className="mb-3">
      {noLabel ? null : (
        <div className="mb-[16px] flex gap-3 px-[20px]">
          {data.map((tabItem) => (
            <span
              key={tabItem}
              className={`cursor-pointer text-t1 font-bold ${
                tabItem === tab ? 'text-gray-700' : 'text-gray-500'
              }`}
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
            key={item}
            className={styles.selectbox}
            onClick={() => !isDisabledFont(store, tab, item) && handleItemClicked(item)}>
            <CheckButton
              item={item}
              selected={selected.includes(index)}
              type={tab}
              disabled={isDisabledFont(store, tab, item)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default memo(ItemSelect);
