'use client';

import Cake from '@/components/cake/Cake';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import styles from '@/styles/page.module.css';
import { useCallback, useState } from 'react';

export default function CakeDetail() {
  const [isCake, setIsCake] = useState(true);

  const onToggleCake = useCallback(() => {
    setIsCake((p) => !p);
  }, []);

  return (
    <>
      <section className="flex flex-col items-center">
        <Header>시은표 롤링케이크와</Header>
        <Header>편지를 확인해보r!</Header>
      </section>
      <section className="w-full h-full grid place-items-center relative">
        <div className={`${styles.letter} card`}>
          <article className="w-[80%] h-[40vh] border-2 border-black rounded-[20px] bg-white z-10">
            {isCake ? (
              <Cake className="w-full h-full" />
            ) : (
              <p className="p-3 font-neo text-effect_b overflow-auto h-full text-center break-keep">
                벌써 예나언니의 생일이 다가왔네 그 말은 즉슨 우리가 한 살 더 먹었다는 것..? 너무
                소름이다!! 생일 기념 나한테 맛있는 거 사주면ㅎㅎ 좋겠다~~~ㅎㅎㅎ 농담이구 생일
                정말로 축하해 내가 만든 케이크는 어때? 좀 귀여운 것 같아 재밌네 이거 기분 좋은 하루
                정말로 축하해 내가 만든 케이크는 어때? 좀 귀여운 것 같아 재밌네 이거 기분 좋은 하루
                정말로 축하해 내가 만든 케이크는 어때? 좀 귀여운 것 같아 재밌네 이거 기분 좋은 하루
                정말로 축하해 내가 만든 케이크는 어때? 좀 귀여운 것 같아 재밌네 이거 기분 좋은 하루
                보냈으면 좋겠다🌸🥳
              </p>
            )}
          </article>
          <article className="flex flex-col items-center gap-2 z-10">
            <h3 className="text-t1 text-gray-700 font-bold">Dear.예나</h3>
            <Button type="SMALL" color="red" onClick={onToggleCake}>
              {isCake ? '편지 읽어보기' : '케이크 보기'}
            </Button>
          </article>
          <article className="absolute top-0 left-0 w-full h-full z-0">
            <img
              src="/images/sparkle1.png"
              alt=""
              className="w-12 h-12 absolute bottom-[27%] left-3"
            />
            <img
              src="/images/sparkle2.png"
              alt=""
              className="w-12 h-12 absolute bottom-[28%] right-1"
            />
            <img
              src="/images/sparkle3.png"
              alt=""
              className="w-20 h-20 absolute bottom-[-5px] right-[-10px]"
            />
            <img
              src="/images/sparkle4.png"
              alt=""
              className="w-20 h-16 absolute top-[-5px] right-2"
            />
            <div className="bg-black w-1 h-1 rounded-full absolute top-5 left-[30%]" />
            <div className="bg-black w-[8px] h-[8px] rounded-full absolute bottom-[16%] left-[8%]" />
            <div className="bg-black w-[17px] h-[17px] rounded-full absolute bottom-[12%] left-[11%]" />
          </article>
        </div>
      </section>
    </>
  );
}
