'use client';

import Cake from '@/components/cake/Cake';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Tag from '@/components/common/Tag';
import type { Cake as CakeType, User } from '@prisma/client';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

type Props = {
  user: User;
  cakes: CakeType[];
  isOwn: boolean;
};

export default function HaveCakeClient({ cakes, user, isOwn }: Props) {
  const router = useRouter();

  const handleCakeClicked = (cakeId: string) => {
    router.push(`/letter/${cakeId}`);
  };

  const onButtonClicked = useCallback(() => {
    router.push('/make?step=shape');
  }, [router]);

  return (
    <>
      <section className="flex flex-col items-center gap-3 mb-[20px]">
        <Header>{`${user.rollingCakeName}의 롤링케이크`}</Header>
        <Tag>{`${cakes.length}개의 케이크와 편지 도착!`}</Tag>
      </section>
      <section
        className={`w-full h-full px-[25px] pb-[20px] overflow-y-auto bg-white green-gradient`}>
        <div className={`grid grid-cols-3 gap-3 pb-[100px]`}>
          {cakes.map((cake, i) => (
            <button
              className="w-full flex flex-col items-center"
              key={i}
              onClick={() => handleCakeClicked(cake.id)}>
              <Cake className="w-full h-[130px]" />
              {/* <span className="text-b3">{cake.letter}</span> */}
            </button>
          ))}
        </div>
      </section>
      {/* TODO: 만들고 들어온경우에도 hidden */}
      {!isOwn && (
        <section className={'absolute w-full bottom-0 px-[25px] pb-[5vh] py-[40px] white-gradient'}>
          <Button type="BIG" onClick={onButtonClicked}>
            롤링케이크 만들어주기
          </Button>
        </section>
      )}
    </>
  );
}
