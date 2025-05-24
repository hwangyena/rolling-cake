import Link from 'next/link';
import type { FC } from 'react';

import { BigButton } from '@components/common/Button';

type Props = {
  userId: string;
};

const MakeButton: FC<Props> = ({ userId }) => {
  return (
    <div className="flex w-full gap-[10px]">
      <Link href="/" className="grow-[1]">
        <BigButton color="white">나도 받기</BigButton>
      </Link>
      <Link href={`/make/${userId}?step=sheet`} className="grow-[2]">
        <BigButton>케이크 만들어주기</BigButton>
      </Link>
    </div>
  );
};

export default MakeButton;
