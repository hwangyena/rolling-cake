'use client';

import CustomPopup from '@/components/common/CustomPopup';
import { useUpdateUserName } from '@/service/client/user';
import { User } from '@prisma/client';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { focusInputAtom } from '@lib/store';

const WelcomePopup = ({ user }: { user: User }) => {
  const router = useRouter();

  const { trigger } = useUpdateUserName();

  const dispatch = useSetAtom(focusInputAtom);

  const handleConfirmPopup = useCallback(() => {
    dispatch({
      label: '이름을 알려주세요!',
      maxLength: 5,
      defaultValue: user.name ?? '',
      onConfirm: async (name: string) => {
        const res = await trigger({ name });
        if (res) {
          router.push(`/cake/${res.id}`);
        }
      },
    });
  }, [dispatch, router, trigger, user]);

  return (
    <CustomPopup
      title={'Welcome!'}
      content={`환영해요! 친구들에게 축하 받을 수 있도록<br>롤링케이크 이름을 지어볼까요?`}
      onConfirm={handleConfirmPopup}
    />
  );
};

export default WelcomePopup;
