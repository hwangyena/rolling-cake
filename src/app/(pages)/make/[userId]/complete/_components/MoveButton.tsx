'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { BigButton } from '@components/common/Button';

import { useStep } from '@lib/hooks/make';

type Props = {
  userId?: string;
};

const MoveButton = ({ userId }: Props) => {
  const router = useRouter();

  const { onResetCake } = useStep();

  const handleListClicked = () => {
    if (!userId) {
      return;
    }

    router.push(`/cake/${userId}`);
    router.refresh();

    onResetCake();
  };

  const handleLoginClicked = () => {
    router.push('/');
    onResetCake();
  };

  return (
    <>
      <BigButton style={{ zIndex: 10 }} onClick={handleListClicked}>
        케이크 진열대로 이동하기
      </BigButton>
      <BigButton color="white" style={{ zIndex: 10 }} onClick={handleLoginClicked}>
        나도 케이크 링크 만들러가기
      </BigButton>
    </>
  );
};

export default MoveButton;
