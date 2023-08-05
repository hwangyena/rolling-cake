'use client';

import Cake from '@/components/cake/Cake';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Tag from '@/components/common/Tag';
import { cakeList } from '@/lib/dummy';
import styles from '@/styles/main.module.css';
import { useRouter } from 'next/navigation';

export default function CakePage() {
  const router = useRouter();

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
        className={`w-full h-full px-[25px] pb-[20px] overflow-y-auto bg-white ${styles['green-gradient']}`}>
        {[].length === 0 ? (
          <div className="w-full h-full flex flex-col justify-around items-center">
            <Cake className="w-[80%] h-[70%]" />
            <Button type="BIG" className="">
              케이크 링크 공유하기
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3">
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
    </>
  );
}
