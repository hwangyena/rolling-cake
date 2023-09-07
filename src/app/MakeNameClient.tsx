'use client';

import GradientContainer from '@/components/GradientContainer';
import CustomPopup from '@/components/common/CustomPopup';
import { focusInputAtom } from '@/lib/store';
import { useSetAtom } from 'jotai';
import { User } from 'next-auth';
import { useCallback } from 'react';

const MakeNameClient = ({ user }: { user: User | null }) => {
  const dispatch = useSetAtom(focusInputAtom);

  const onConfirmPopup = useCallback(() => {
    dispatch({
      label: '이름을 알려주세요!',
      maxLength: 5,
      defaultValue: user?.name ?? '',
      onConfirm: (name: string) => {},
    });
  }, []);

  return (
    <GradientContainer type="green-circle">
      <CustomPopup
        title={'Welcome!'}
        content={`환영해요! 친구들에게 축하 받을 수 있도록<br/>롤링케이크 이름을 지어볼까요?`}
        onConfirm={onConfirmPopup}
      />
    </GradientContainer>
  );
};

export default MakeNameClient;
