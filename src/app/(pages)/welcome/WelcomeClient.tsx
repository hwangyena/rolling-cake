'use client';

import CustomPopup from '@/components/common/CustomPopup';
import { focusInputAtom } from '@/lib/store';
import { useUpdateUserName } from '@/service/client/user';
import { User } from '@prisma/client';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const WelcomeClient = ({ user }: { user: User | null }) => {
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

        // TODO: 페이지 넘어가는 속도가 느린데 개션?
        if (res) {
          router.push(`/cake/${res.id}`);
          router.refresh();
        }
      },
    });
  }, [dispatch, router, trigger, user]);

  return (
    <CustomPopup
      title={'Welcome!'}
      content={`환영해요! 친구들에게 축하 받을 수 있도록<br>롤링케이크 이름을 지어볼까요?`}
      onConfirm={onConfirmPopup}
    />
  );
};

export default WelcomeClient;
