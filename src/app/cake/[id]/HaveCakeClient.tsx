'use client';

import Cake from '@/components/cake/Cake';
import Header from '@/components/common/Header';
import Tag from '@/components/common/Tag';
import type { Cake as CakeType, User } from '@prisma/client';
import { useRouter } from 'next/router';

type Props = {
  user: User;
  cakes: CakeType[];
};

export default function HaveCakeClient({ cakes, user }: Props) {
  const router = useRouter();

  const handleCakeClicked = (cakeId: string) => {
    router.push(`/letter/${cakeId}`);
  };

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
    </>
  );
}
