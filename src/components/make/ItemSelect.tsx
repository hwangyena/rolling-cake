import styles from '@/styles/component.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';

import { SELECT_ITEM } from '@/lib/constant';
import Image from 'next/image';
import { memo, useEffect, useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { FreeMode } from 'swiper/modules';

type Props = {
  data: (keyof typeof SELECT_ITEM)[];
  noLabel?: boolean;
};

// TODO: select event
const ItemSelect = ({ data, noLabel }: Props) => {
  const [tab, setTab] = useState(data[0]);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    return setTab(data[0]);
  }, [data]);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  }, [tab]);

  return (
    <section className="mb-3">
      {noLabel ? null : (
        <div className="flex gap-3 mb-[16px] px-[20px]">
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
        {SELECT_ITEM[tab].data.map((item) => (
          <SwiperSlide className={`${styles.selectbox} ${tab === 'cream' ? 'p-1' : ''}`} key={item}>
            {tab === 'cream' ? (
              <div className="relative w-full h-full">
                {item === 'none' ? (
                  <div className={styles.x} />
                ) : (
                  <Image src={`/images/step/${item}.png`} alt="cream" fill />
                )}
              </div>
            ) : (
              <div className={`w-full h-full`} style={{ background: item }} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default memo(ItemSelect);
