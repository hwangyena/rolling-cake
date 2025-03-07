'use client';

import Cake from '@/components/cake/Cake';
import { BigButton } from '@/components/common/Button';
import Header from '@/components/common/Header';
import Tag from '@/components/common/Tag';
import Lock from '@/components/style/Lock';
import { cn } from '@/lib/utils';
import type { Cake as CakeType, User } from '@prisma/client';
import Image from 'next/image';
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
    router.push(`/make/${user.id}?step=sheet`);
  }, [router, user.id]);

  return (
    <div className="relative flex flex-1 flex-col gap-8 overflow-hidden">
      <section className="flex flex-col items-center gap-3">
        <Header>{`${user.rollingCakeName}의 롤링케이크`}</Header>
        <Tag>{`${cakes.length}개의 케이크와 편지 도착!`}</Tag>
      </section>
      <section className={`green-gradient flex-1 overflow-y-auto px-[25px] py-[20px]`}>
        <div className={cn('grid grid-cols-3 gap-5', { 'mb-[110px]': !isOwn })}>
          {cakes.map((cake, i) => (
            <button
              className="flex w-full flex-col items-center"
              key={i}
              onClick={() => handleCakeClicked(cake.id)}>
              {cake.cakeImageUrl ? (
                <div className="relative h-[90px] w-[80%]">
                  <Image
                    fill
                    src={cake.cakeImageUrl}
                    className="object-cover"
                    sizes="80%"
                    alt="cake"
                  />
                </div>
              ) : (
                <Cake className="h-[90px] w-[80%]" theme={(cake.themeCake as ThemeCake).theme} />
              )}
              <div className="mt-1 flex gap-1">
                {cake.isPrivate && <Lock small />}
                <span className="text-b3">{cake.name}</span>
              </div>
            </button>
          ))}
        </div>
      </section>
      {!isOwn && (
        <section
          className={'white-gradient absolute bottom-0 z-30 w-full px-[25px] pb-[20px] pt-[45px]'}>
          <BigButton onClick={onButtonClicked}>롤링케이크 만들어주기</BigButton>
        </section>
      )}
    </div>
  );
}
