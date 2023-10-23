'use client';

import GradientContainer from '@/components/GradientContainer';
import CustomPopup from '@/components/common/CustomPopup';
import { focusInputAtom } from '@/lib/store';
import { useSetAtom } from 'jotai';
import { useCallback } from 'react';
import type { User } from '@prisma/client';
import Cake from '@/components/cake/Cake';
import { updateRollingCakeName } from '@/lib/endpoint';
import { useRouter } from 'next/navigation';

const MakeNameClient = ({ user }: { user: User | null }) => {
  const router = useRouter();
  const dispatch = useSetAtom(focusInputAtom);

  const onConfirmPopup = useCallback(() => {
    if (!user) {
      return;
    }

    dispatch({
      label: '이름을 알려주세요!',
      maxLength: 5,
      defaultValue: user.name ?? '',
      onConfirm: async (name: string) => {
        const res = await updateRollingCakeName(name);

        if (res) {
          router.push(`/cake/${res.data.id}`);
          router.refresh();
        }
      },
    });
  }, [dispatch, router, user]);

  return (
    <GradientContainer type="green-circle" className="flex flex-col items-center justify-between">
      <div className="flex-1 p-[10%] w-full h-full grid place-items-center">
        <Cake className="w-[100%] aspect-square" />
      </div>
      <CustomPopup
        title={'Welcome!'}
        content={`환영해요! 친구들에게 축하 받을 수 있도록<br/>롤링케이크 이름을 지어볼까요?`}
        onConfirm={onConfirmPopup}
      />
    </GradientContainer>
  );
};

export default MakeNameClient;
