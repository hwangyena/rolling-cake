'use client';

import Cake from '@/components/cake/Cake';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Tag from '@/components/common/Tag';
import Lock from '@/components/style/Lock';
import { useSaveUserId } from '@/hooks/cake';
import { getLocalStorage } from '@/lib/store';
import { cn } from '@/lib/utils';
import type { Cake as CakeType, User } from '@prisma/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';

type Props = {
  user: User;
  cakes: CakeType[];
  isOwn: boolean;
};

export default function HaveCakeClient({ cakes, user, isOwn }: Props) {
  const router = useRouter();

  useSaveUserId();

  const isMakeCake = useMemo(() => {
    const make = getLocalStorage<Record<string, boolean>>('rolling-cake:isMake');
    return !make[user.id] && !isOwn;
  }, [isOwn, user.id]);

  const handleCakeClicked = (cakeId: string) => {
    router.push(`/letter/${cakeId}`);
  };

  const onButtonClicked = useCallback(() => {
    router.push('/make?step=shape');
  }, [router]);

  return (
    <div className="relative flex flex-1 flex-col gap-8 overflow-hidden">
      <section className="flex flex-col items-center gap-3">
        <Header>{`${user.rollingCakeName}의 롤링케이크`}</Header>
        <Tag>{`${cakes.length}개의 케이크와 편지 도착!`}</Tag>
      </section>
      <section className={`green-gradient flex-1 overflow-y-auto px-[25px] py-[20px]`}>
        <div className={cn('grid grid-cols-3 gap-5', { 'mb-[110px]': isMakeCake })}>
          {cakes.map((cake, i) => (
            <button
              className="flex w-full flex-col items-center"
              key={i}
              onClick={() => handleCakeClicked(cake.id)}>
              {cake.cakeImageUrl ? (
                <div className="relative h-[90px] w-[80%]">
                  <Image src={cake.cakeImageUrl} alt="" fill className="object-cover" />
                </div>
              ) : (
                <Cake className="h-[90px] w-[80%]" theme={(cake.themeCake as ThemeCake).theme} /> // TODO: check
              )}
              <div className="mt-1 flex gap-1">
                {cake.isPrivate && <Lock />}
                <span className="text-b3">{cake.name}</span>
              </div>
            </button>
          ))}
        </div>
      </section>
      {isMakeCake && (
        <section
          className={'white-gradient absolute bottom-0 w-full px-[25px] pb-[20px] pt-[45px]'}>
          <Button type="BIG" onClick={onButtonClicked}>
            롤링케이크 만들어주기
          </Button>
        </section>
      )}
    </div>
  );
}
