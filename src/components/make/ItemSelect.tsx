import { SELECT_ITEM } from '@/lib/constant';
import { useStep, useStepStore } from '@/lib/hooks/make';
import { isDisabledFont, isObject } from '@/lib/utils';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import CheckButton from '../common/CheckButton';

import 'swiper/css';

type Props = {
  noLabel?: boolean;
};

const ItemSelect = ({ noLabel }: Props) => {
  const { stepData } = useStep();
  const { step, store, onStoreUpdate } = useStepStore();

  const [tab, setTab] = useState((stepData!.select ?? [])[0]);
  const [selected, setSelected] = useState<number[]>([]);

  const swiperRef = useRef<SwiperType | null>(null);
  const selectData = useMemo(() => stepData!.select ?? [], [stepData]);

  useEffect(() => {
    return setTab(selectData[0]);
  }, [selectData]);

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
          {selectData.map((tabItem) => (
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
            className="h-[50px] w-[50px] shrink-0 rounded-sm border-[1.3px] border-black bg-white shadow-card"
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
