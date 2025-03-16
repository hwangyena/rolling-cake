'use client';

import ThemeCake from '@/components/cake/Cake';
import type { Cake as CakeType } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Lock from '@components/style/Lock';

type Props = {
  cake: CakeType;
};

const Cake = ({ cake }: Props) => {
  return (
    <Link href={`/letter/${cake.id}`} className="flex w-full flex-col items-center">
      {cake.cakeImageUrl ? (
        <div className="relative h-[90px] w-[80%]">
          <Image fill src={cake.cakeImageUrl} className="object-cover" sizes="80%" alt="cake" />
        </div>
      ) : (
        <ThemeCake className="h-[90px] w-[80%]" theme={(cake.themeCake as ThemeCake).theme} />
      )}
      <div className="mt-1 flex gap-1">
        {cake.isPrivate && <Lock small />}
        <span className="text-b3">{cake.name}</span>
      </div>
    </Link>
  );
};

export default Cake;
