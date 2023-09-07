'use client';

import Cake from '@/components/cake/Cake';
import Card from '@/components/common/Card';
import Header from '@/components/common/Header';
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
        <Card
          type="complex"
          content="Dear. 예나"
          button={{
            label: isCake ? '편지 읽어보기' : '케이크 보기',
            onButtonClicked: onToggleCake,
          }}>
          {isCake ? (
            <Cake className="w-full h-full" />
          ) : (
            <p className="p-3 font-neo text-effect_b overflow-auto h-full text-center break-keep">
              벌써 예나언니의 생일이 다가왔네 그 말은 즉슨 우리가 한 살 더 먹었다는 것..? 너무
              소름이다!! 생일 기념 나한테 맛있는 거 사주면ㅎㅎ 좋겠다~~~ㅎㅎㅎ 농담이구 생일 정말로
              축하해 내가 만든 케이크는 어때? 좀 귀여운 것 같아 재밌네 이거 기분 좋은 하루 정말로
              축하해 내가 만든 케이크는 어때? 좀 귀여운 것 같아 재밌네 이거 기분 좋은 하루 정말로
              축하해 내가 만든 케이크는 어때? 좀 귀여운 것 같아 재밌네 이거 기분 좋은 하루 정말로
              축하해 내가 만든 케이크는 어때? 좀 귀여운 것 같아 재밌네 이거 기분 좋은 하루 보냈으면
              좋겠다🌸🥳
            </p>
          )}
        </Card>
      </section>
    </>
  );
}
