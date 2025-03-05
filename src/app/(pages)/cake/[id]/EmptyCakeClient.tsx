'use client';

import { BigButton } from '@/components/common/Button';
import Header from '@/components/common/Header';
import Tag from '@/components/common/Tag';
import { User } from '@prisma/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { useSnackbar } from '@lib/provider/SnackbarProvider';

export default function EmptyCakeClient({ user, isOwn }: { user: User; isOwn: boolean }) {
  const router = useRouter();
  const snackbar = useSnackbar();

  const onButtonClicked = useCallback(() => {
    if (isOwn) {
      navigator.clipboard.writeText(window.location.href);
      snackbar.show('링크를 복사했어요! SNS에 붙여넣어 공유해봐요');
      return;
    } else {
      router.push(`/${user.id}/make?step=sheet`);
    }
  }, [isOwn, router, snackbar, user.id]);

  return (
    <>
      <section className="mb-[20px] flex flex-col items-center gap-3">
        <Header>{`${user.rollingCakeName}의 롤링케이크`}</Header>
        <Tag>{isOwn ? '0개의 케이크와 편지 도착!' : '정성가득한 편지와 케이크를 선물하세요!'}</Tag>
      </section>
      <section className="green-gradient bottom-0 h-full w-full flex-1  overflow-y-auto bg-white px-[25px] pb-[20px]">
        <div className="relative flex h-full w-full flex-col items-center justify-center pb-[10vh]">
          <div className="relative aspect-square w-[80%]">
            <Image fill src="/images/empty.png" alt="empty" />
          </div>
        </div>
      </section>
      <section className={'absolute bottom-0 w-full px-[25px] py-[40px] pb-[5vh]'}>
        <BigButton onClick={onButtonClicked}>
          {isOwn ? '케이크 링크 공유하기' : '롤링케이크 만들어주기'}
        </BigButton>
      </section>
    </>
  );
}
