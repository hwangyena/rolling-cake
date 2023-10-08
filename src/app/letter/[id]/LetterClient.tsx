'use client';

import Cake from '@/components/cake/Cake';
import Card from '@/components/common/Card';
import Header from '@/components/common/Header';
import { popupAtom } from '@/lib/store';
import { Cake as CakeType, User } from '@prisma/client';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';

type Props = CakeType & {
  user: User;
  currentUser: User | null;
};

export default function LetterClient({ content, name, user, currentUser }: Props) {
  const dispatch = useSetAtom(popupAtom);
  const router = useRouter();

  const [isCake, setIsCake] = useState(true);

  const isCakeOwner = useMemo(() => user.name === currentUser?.name, [user, currentUser]);

  const onToggleCake = useCallback(() => {
    if (!isCakeOwner) {
      dispatch({
        title: `비밀 케이크는\n받은 사람만 볼 수 있어요`,
        hideCancel: true,
        bottomNode: (
          <p
            onClick={() => {
              router.push('/');
              dispatch(null);
            }}
            className="text-b3 text-gray-800 underline mt-5">{`롤링케이크 주인이라면? 로그인 하고 읽기>`}</p>
        ),
      });
      return;
    }

    setIsCake((p) => !p);
  }, [dispatch, isCakeOwner]);

  return (
    <main className="flex flex-col flex-1">
      <section className="flex flex-col items-center">
        <Header>{`${name}표 롤링케이크와`}</Header>
        <Header>편지를 확인해보r!</Header>
      </section>
      <section className="flex-1 grid place-items-center relative">
        <Card
          type="complex"
          content={`Dear. ${user.name}`}
          button={{
            label: isCake ? '편지 읽어보기' : '케이크 보기',
            onButtonClicked: onToggleCake,
          }}>
          {isCake ? (
            <Cake className="w-[80%] aspect-square" />
          ) : (
            <p className="p-3 font-neo text-effect_b overflow-auto h-full text-center break-keep">
              {content}
            </p>
          )}
        </Card>
      </section>
    </main>
  );
}
