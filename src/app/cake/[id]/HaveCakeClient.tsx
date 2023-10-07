'use client';

import Cake from '@/components/cake/Cake';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Tag from '@/components/common/Tag';
import type { Cake as CakeType, User } from '@prisma/client';
import { useRouter } from 'next/navigation';
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
    <div className="relative flex-1 overflow-hidden flex flex-col gap-8">
      <section className="flex flex-col items-center gap-3">
        <Header>{`${user.rollingCakeName}의 롤링케이크`}</Header>
        <Tag>{`${cakes.length}개의 케이크와 편지 도착!`}</Tag>
      </section>
      <section className={`flex-1 px-[25px] py-[20px] overflow-y-auto green-gradient`}>
        <div className={`grid grid-cols-3 gap-5`}>
          {cakes.map((cake, i) => (
            <button
              className="w-full flex flex-col items-center"
              key={i}
              onClick={() => handleCakeClicked(cake.id)}>
              <Cake className="w-[80%] aspect-[2/3]" />
              <span className="text-b3">{cake.name}</span>
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
    </div>
  );
}
