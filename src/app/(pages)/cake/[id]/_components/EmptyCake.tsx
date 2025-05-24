import { User } from '@prisma/client';
import Image from 'next/image';
import React from 'react';

import Header from '@components/common/Header';

import ShareButton from './ShareButton';

type Props = {
  user: User;
  isOwn: boolean;
};

const EmptyCake = ({ user, isOwn }: Props) => {
  return (
    <div className="flex flex-col h-[calc(100%-92px)] justify-between">
      <section className="mb-[20px] flex flex-col items-center gap-3">
        <Header>{`${user.rollingCakeName}의 롤링케이크`}</Header>
      </section>
      <section className="flex w-full flex-col items-center justify-center">
        <div className="relative aspect-square w-[70%]">
          <Image fill src="/images/empty.png" alt="empty" priority />
        </div>
      </section>
      <section className={'w-full px-[20px] pb-[50px] flex gap-3 flex-col items-center'}>
        <span className="text-b2 text-gray7">케이크 보관함이 텅 비었네...</span>
        <ShareButton isOwn={isOwn} userId={user.id} />
      </section>
    </div>
  );
};

export default EmptyCake;
