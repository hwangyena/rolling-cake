'use client';

import Cake from '@/components/cake/Cake';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Tag from '@/components/common/Tag';
import { cakeList } from '@/lib/dummy';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

export default function CakePage() {
  const router = useRouter();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dummy: unknown[] = [];
  const isOwner = false;

  const isCakeEmpty = useMemo(() => dummy.length === 0, [dummy]);

  const handleCakeClicked = (i: number) => {
    router.push(`/cake/${i}`);
  };

  return (
    <>
      <section className="flex flex-col items-center gap-3 mb-[20px]">
        <Header>예나의 롤링케이크</Header>
        <Tag>{`11개의 케이크와 편지 도착!`}</Tag>
      </section>
      <section
        className={`w-full h-full px-[25px] pb-[20px] overflow-y-auto bg-white green-gradient`}>
        {isCakeEmpty ? (
          <div className="w-full h-full flex flex-col items-center pt-[10%] relative">
            <Cake className="w-[80%] h-[70%]" />
            {isOwner && (
              <div className="absolute bottom-[6vh] w-full">
                <Button type="BIG">케이크 링크 공유하기</Button>
              </div>
            )}
          </div>
        ) : (
          <div className={`grid grid-cols-3 gap-3 ${isCakeEmpty ? '' : 'pb-[100px]'}`}>
            {cakeList.map((cake, i) => (
              <button
                className="w-full flex flex-col items-center"
                key={i}
                onClick={() => handleCakeClicked(i)}>
                <Cake className="w-full h-[130px]" />
                <span className="text-b3">{cake.name}</span>
              </button>
            ))}
          </div>
        )}
      </section>
      {/* //TODO: if not owner thie cake & not make cake */}
      {!isOwner && (
        <section
          className={`absolute w-full bottom-0 px-[25px] pb-[5vh] py-[40px] ${
            isCakeEmpty ? '' : 'white-gradient'
          }`}>
          <Button type="BIG" onClick={() => router.push('/make')}>
            레터링 케이크 만들어주기
          </Button>
        </section>
      )}
    </>
  );
}
