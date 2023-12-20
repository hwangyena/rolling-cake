'use client';

import Card from '@/components/common/Card';
import Header from '@/components/common/Header';
import CustomCake from '@/components/model/CustomCake';
import ThemeCake from '@/components/model/ThemeCake';
import LoadingCanvas from '@/components/style/LoadingCanvas';
import { popupAtom } from '@/lib/store';
import { cn } from '@/lib/utils';
import styles from '@/styles/component.module.css';
import { Cake as CakeType, User } from '@prisma/client';
import { Canvas } from '@react-three/fiber';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, Suspense, useCallback, useMemo, useState } from 'react';
import * as THREE from 'three';

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

  const isCakeOwner = useMemo(
    () => user.name === currentUser?.name,
    [user.name, currentUser?.name],
  );

  const onToggleCake = useCallback(() => {
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
  }, [dispatch, isCakeOwner, isPrivate, router]);

  return (
    <main className="flex flex-1 flex-col">
      <section className="flex flex-col items-center">
        <Header>{`${name}표 롤링케이크와`}</Header>
        <Header>편지를 확인해보r!</Header>
      </section>
      <section className="grid flex-1 place-items-center px-[8%] py-[10%]">
        <div className={cn(styles.flip, { 'rotate-y-180': !isCake })}>
          <LetterCard
            label="편지 읽어보기"
            name={user.rollingCakeName}
            onToggleCake={onToggleCake}
            className={styles.front}>
            <Canvas
              shadows
              camera={{
                fov: 50,
                near: 0.1,
                far: 100,
                position: new THREE.Vector3(0, 3, 8.5),
              }}
              style={{ zIndex: 10 }}>
              <Suspense fallback={null}>
                {customCake && <CustomCake isRotate cake={customCake as CustomCake} />}
                {themeCake && <ThemeCake isRotate cake={themeCake as ThemeCake} />}
              </Suspense>
            </Canvas>
            <LoadingCanvas />
          </LetterCard>
          <LetterCard
            label="케이크 보기"
            name={user.rollingCakeName}
            onToggleCake={onToggleCake}
            className={styles.back}>
            <p className="h-full w-full overflow-auto whitespace-pre-line break-keep p-3 text-center font-neo text-effect_b">
              {content}
            </p>
          </LetterCard>
        </div>
      </section>
    </main>
  );
}

const LetterCard = ({
  children,
  label,
  name,
  onToggleCake,
  className,
}: PropsWithChildren<{
  name: string | null;
  label: string;
  onToggleCake: () => void;
  className?: string;
}>) => {
  return (
    <Card
      hasDesign
      content={`Dear. ${name}`}
      className={className}
      button={{
        label,
        onButtonClicked: onToggleCake,
      }}>
      {children}
    </Card>
  );
};
