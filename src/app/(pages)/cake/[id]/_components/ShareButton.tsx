'use client';

import { useRouter } from 'next/navigation';

import { BigButton } from '@components/common/Button';

import { useSnackbar } from '@lib/provider/SnackbarProvider';

type Props = {
  userId: string;
  isOwn?: boolean;
};

const ShareButton = ({ userId, isOwn }: Props) => {
  const router = useRouter();
  const snackbar = useSnackbar();

  const handleClicked = () => {
    if (isOwn) {
      navigator.clipboard.writeText(window.location.href);
      snackbar.show('링크를 복사했어요! SNS에 붙여넣어 공유해봐요');
      return;
    } else {
      router.push(`/${userId}/make?step=sheet`);
    }
  };

  return (
    <BigButton onClick={handleClicked}>
      {isOwn ? '케이크 링크 공유하기' : '롤링케이크 만들어주기'}
    </BigButton>
  );
};

export default ShareButton;
