import styles from '@/styles/component.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { SELECT_ITEM } from '@/lib/constant';
import { memo, useEffect, useState } from 'react';
import Image from 'next/image';

type Props = {
  data: (keyof typeof SELECT_ITEM)[];
  noLabel?: boolean;
};

// TODO: select event
const ItemSelect = ({ data, noLabel }: Props) => {
  const [tab, setTab] = useState(data[0]);

  useEffect(() => {
    return setTab(data[0]);
  }, [data]);

  return (
    <section className="px-[20px] mb-3">
      {noLabel ? null : (
        <div className="flex gap-3 mb-[16px]">
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
        spaceBetween={12}
        slidesOffsetAfter={5}>
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
