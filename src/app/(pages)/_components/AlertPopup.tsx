'use client';

import type { User } from '@prisma/client';
import { useState } from 'react';

import CustomPopup from '@components/common/CustomPopup';

type Props = {
  user: Nullable<User>;
};

const AlertPopup = ({ user }: Props) => {
  const [hide, setHide] = useState(false);

  const handleClosePopup = () => {
    setHide(true);
  };

  if (user || hide) {
    return null;
  }

  return (
    <CustomPopup
      title={'Alert'}
      content={`계속 진행하면 롤링케이스 <mark id='terms'>서비스 이용약관 및 개인정보 처리방침</mark>에 동의한 것으로 간주됩니다.`}
      hasIcon
      onConfirm={handleClosePopup}
    />
  );
};

export default AlertPopup;
