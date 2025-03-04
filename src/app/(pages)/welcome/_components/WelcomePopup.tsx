'use client';

import CustomPopup from '@/components/common/CustomPopup';
import { useUpdateUserName } from '@/service/client/user';
import { User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

import FocusInput from '@components/common/FocusInput';

const WelcomePopup = ({ user }: { user: User }) => {
  const router = useRouter();

  const { trigger } = useUpdateUserName();
  const [show, setShow] = useState(false);

  const onConfirmClick = useCallback(() => {
    setShow(true);
  }, []);

  const onInputConfirmClick = useCallback(
    async (name: string) => {
      const res = await trigger({ name });
      if (res) {
        router.push(`/cake/${res.id}`);
      }
    },
    [router, trigger],
  );

  const onInputCancelClick = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <>
      <CustomPopup
        title={'Welcome!'}
        content={`환영해요! 친구들에게 축하 받을 수 있도록<br>롤링케이크 이름을 지어볼까요?`}
        onConfirm={onConfirmClick}
      />

      {show && (
        <FocusInput
          label={'이름을 알려주세요!'}
          maxLength={5}
          defaultValue={user.name ?? ''}
          onConfirm={onInputConfirmClick}
          onCancel={onInputCancelClick}
        />
      )}
    </>
  );
};

export default WelcomePopup;
