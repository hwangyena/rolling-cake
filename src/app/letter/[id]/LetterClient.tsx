'use client';

import Card from '@/components/common/Card';
import Header from '@/components/common/Header';
import Model from '@/components/model/Model';
import { popupAtom } from '@/lib/store';
import { cn } from '@/lib/utils';
import styles from '@/styles/component.module.css';
import { Cake as CakeType, User } from '@prisma/client';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { ComponentProps, useCallback, useMemo, useState } from 'react';

type Props = CakeType & {
  user: User;
  currentUser: User | null;
};

export default function LetterClient({
  content,
  name,
  user,
  currentUser,
  isPrivate,
  customCake,
  themeCake,
}: Props) {
  const dispatch = useSetAtom(popupAtom);
  const router = useRouter();
  const [isCake, setIsCake] = useState(true);

  const onToggleCake = useCallback(() => {
    const isCakeOwner = user.name === currentUser?.name;

    if (isPrivate && !isCakeOwner) {
      dispatch({
        title: `비밀 케이크는\n받은 사람만 볼 수 있어요`,
        hideCancel: true,
        bottomNode: (
          <p
            onClick={() => {
              router.push('/');
              dispatch(null);
            }}
            className="mt-5 text-b3 text-gray-800 underline">{`롤링케이크 주인이라면? 로그인 하고 읽기>`}</p>
        ),
      });
      return;
    }

    setIsCake((p) => !p);
  }, [currentUser?.name, dispatch, isPrivate, router, user.name]);

  const cardProps: ComponentProps<typeof Card> = useMemo(
    () => ({
      hasDesign: true,
      content: `Dear. ${user.rollingCakeName}`,
      button: { label: isCake ? '편지 읽어보기' : '케이크 보기', onButtonClicked: onToggleCake },
    }),
    [isCake, onToggleCake, user],
  );

  return (
    <main className="flex flex-1 flex-col">
      <section className="flex flex-col items-center">
        <Header>{`${name}표 롤링케이크와`}</Header>
        <Header>편지를 확인해보r!</Header>
      </section>
      <section className="grid flex-1 place-items-center px-[8%] py-[10%]">
        <div className={cn(styles.flip, { 'rotate-y-180': !isCake })}>
          {/* front */}
          <Card className={styles.front} {...cardProps}>
            {/* <Model
              cake={customCake ? (customCake as CustomCake) : (themeCake as ThemeCake)}
              show={customCake ? 'custom' : 'theme'}
              isRotate
            /> */}
          </Card>

          {/* back */}
          <Card className={styles.back} {...cardProps}>
            <p className="h-full w-full overflow-auto whitespace-pre-line break-keep p-3 text-center font-neo text-effect_b">
              {content}
            </p>
          </Card>
        </div>
      </section>
    </main>
  );
}
