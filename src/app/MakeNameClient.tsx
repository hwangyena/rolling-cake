'use client';

import GradientContainer from '@/components/GradientContainer';
import Cake from '@/components/cake/Cake';
import CustomPopup from '@/components/common/CustomPopup';
import { focusInputAtom } from '@/lib/store';
import { useUpdateUserName } from '@/service/client/user';
import { User } from '@prisma/client';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const MakeNameClient = ({ user }: { user: User | null }) => {
  const router = useRouter();

  const { trigger } = useUpdateUserName();
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
        const res = await trigger({ name });

        if (res) {
          router.push(`/cake/${res.id}`);
          router.refresh();
        }
      },
    });
  }, [dispatch, router, trigger, user]);

  return (
    <GradientContainer type="green-circle" className="flex flex-col items-center justify-between">
      <div className="grid h-full w-full flex-1 place-items-center p-[10%]">
        <Cake className="aspect-square w-[100%]" />
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
