import { User } from '@prisma/client';
import Image from 'next/image';
import React from 'react';

import Header from '@components/common/Header';
import Tag from '@components/common/Tag';

import ShareButton from './ShareButton';

const ZERO_CAKE_OWN = '0개의 케이크와 편지 도착!';
const ZERO_CAKE = '정성가득한 편지와 케이크를 선물하세요!';

type Props = {
  user: User;
  isOwn: boolean;
};

const EmptyCake = ({ user, isOwn }: Props) => {
  return (
    <>
      <section className="mb-[20px] flex flex-col items-center gap-3">
        <Header>{`${user.rollingCakeName}의 롤링케이크`}</Header>
        <Tag>{isOwn ? ZERO_CAKE_OWN : ZERO_CAKE}</Tag>
      </section>
      <section className="green-gradient bottom-0 h-full w-full flex-1  overflow-y-auto bg-white px-[25px] pb-[20px]">
        <div className="relative flex h-full w-full flex-col items-center justify-center pb-[10vh]">
          <div className="relative aspect-square w-[80%]">
            <Image fill src="/images/empty.png" alt="empty" priority />
          </div>
        </div>
      </section>
      <section className={'absolute bottom-0 w-full px-[25px] py-[40px] pb-[5vh]'}>
        <ShareButton isOwn={isOwn} userId={user.id} />
      </section>
    </>
  );
};

export default EmptyCake;
