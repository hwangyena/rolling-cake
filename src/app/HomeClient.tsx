'use client';

import LoginButton from '@/components/LoginButton';
import Button from '@/components/common/Button';
import CustomPopup from '@/components/common/CustomPopup';
import type { User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

import WaveTitle from '@components/style/WaveTitle';

const HomeClient = ({ user }: { user?: User | null }) => {
  const router = useRouter();

  const [show, setShow] = useState(() => (user ? false : true));

  const onLinkClicked = useCallback(() => {
    router.push(`/cake/${user?.id}`);
  }, [router, user]);

  const onClosePopup = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <>
      <div className="mb-10 flex justify-center">
        <WaveTitle />
      </div>

      {user ? (
        <Button.BigButton onClick={onLinkClicked}>내 롤링케이크 보러가기</Button.BigButton>
      ) : (
        <LoginButton />
      )}

      {show && (
        <CustomPopup
          title={'Alert'}
          content={`계속 진행하면 롤링케이스 <mark id='terms'>서비스 이용약관 및 개인정보 처리방침</mark>에 동의한 것으로 간주됩니다.`}
          hasIcon
          onConfirm={onClosePopup}
        />
      )}
    </>
  );
};

export default HomeClient;
