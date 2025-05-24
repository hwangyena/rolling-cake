'use client';

import { BigButton } from '@components/common/Button';

import { useSnackbar } from '@lib/provider/SnackbarProvider';

const ShareButton = () => {
  const snackbar = useSnackbar();

  const handleClicked = () => {
    navigator.clipboard.writeText(window.location.href);
    snackbar.show('링크를 복사했어요! SNS에 붙여넣어 공유해봐요');
  };

  return <BigButton onClick={handleClicked}>링크 공유하고 케이크 받기</BigButton>;
};

export default ShareButton;
