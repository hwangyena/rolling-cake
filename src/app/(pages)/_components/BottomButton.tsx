import type { User } from '@prisma/client';
import Link from 'next/link';

import LoginButton from '@components/LoginButton';
import { BigButton } from '@components/common/Button';

type Props = {
  user: Nullable<User>;
};

const BottomButton = ({ user }: Props) => {
  if (user) {
    return (
      <Link href={`/cake/${user.id}`}>
        <BigButton color="pink">내 롤링케이크 보러가기</BigButton>
      </Link>
    );
  }

  return <LoginButton />;
};

export default BottomButton;
