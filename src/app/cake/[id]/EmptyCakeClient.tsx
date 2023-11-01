'use client';

import Cake from '@/components/cake/Cake';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Tag from '@/components/common/Tag';
import { useSaveUserId } from '@/hooks/cake';
import { snackBarAtom } from '@/lib/store';
import { User } from '@prisma/client';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export default function EmptyCakeClient({ user, isOwn }: { user: User; isOwn: boolean }) {
  const router = useRouter();
  const dispatch = useSetAtom(snackBarAtom);

  useSaveUserId();

  const onButtonClicked = useCallback(() => {
    if (isOwn) {
      navigator.clipboard.writeText(window.location.href);
      dispatch({
        text: '링크를 복사했어요! SNS에 붙여넣어 공유해봐요',
      });
      return;
    } else {
      router.push('/make?step=shape');
    }
  }, [dispatch, isOwn, router]);

  return (
    <>
      <section className="mb-[20px] flex flex-col items-center gap-3">
        <Header>{`${user.rollingCakeName}의 롤링케이크`}</Header>
        <Tag>
          {isOwn
            ? '링크를 공유하고 케이크를 모아보세요!'
            : '정성가득한 편지와 케이크를 선물하세요!'}
        </Tag>
      </section>
      <section
        className={`green-gradient bottom-0 h-full w-full flex-1 overflow-y-auto bg-white px-[25px] pb-[20px]`}>
        <div className="relative flex h-full w-full flex-col items-center pt-[10%]">
          <Cake className="h-[70%] w-[80%]" />
        </div>
      </section>
      <section className={'absolute bottom-0 w-full px-[25px] py-[40px] pb-[5vh]'}>
        <Button type="BIG" onClick={onButtonClicked}>
          {isOwn ? '케이크 링크 공유하기' : '롤링케이크 만들어주기'}
        </Button>
      </section>
    </>
  );
}
