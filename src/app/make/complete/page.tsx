'use client';

import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import GradientContainer from '@/components/GradientContainer';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Loading from '@/components/common/Loading';
import Navigation from '@/components/common/Navigation';
import CustomCake from '@/components/model/CustomCake';
import Confetti from '@/components/style/Confetti';
import { useErrorPopup } from '@/hooks/common';
import { useStepStore } from '@/hooks/make';
import { createCake } from '@/lib/endpoint';
import { getLocalStorage, setLocalStorage } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo, useRef } from 'react';
import useSWRMutation from 'swr/mutation';
import ThemeCake from '@/components/model/ThemeCake';

export default function Page() {
  const router = useRouter();

  const { store, onResetMakeAtom } = useStepStore();
  const { trigger, data, isMutating } = useSWRMutation('/api/make', createCake);
  const { showError } = useErrorPopup(() => router.replace('/make?step=shape'));

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetUser = useMemo(() => getLocalStorage<string>('rolling-cake:userId'), []);

  const onCreate = useCallback(async () => {
    const { shape, letter, ...cake } = store;
    const type = shape.toUpperCase() as 'CUSTOM' | 'THEME';

    const base64 = canvasRef.current?.toDataURL('image/png') ?? '';

    if (!type || !letter.name || !letter.content || !cake || !targetUser) {
      showError();
      return;
    }

    const res = await trigger({
      type,
      cake,
      cakeImageBase64: base64,
      letter,
      userId: targetUser,
    });

    if (res.status !== 200) {
      showError();
    }
  }, [showError, store, targetUser, trigger]);

  const onListClicked = useCallback(() => {
    setLocalStorage('rolling-cake:isMake', { [targetUser]: true });
    onResetMakeAtom();

    router.push(`/cake/${targetUser}`);
    router.refresh();
  }, [router, targetUser, onResetMakeAtom]);

  const onLoginClicked = useCallback(() => {
    onResetMakeAtom();
    router.push('/');
  }, [onResetMakeAtom, router]);

  return (
    <GradientContainer type="pink-green" className="items-center justify-center overflow-hidden">
      <Navigation show={['<']} className={data ? 'invisible' : ''} />
      <Header>{data ? '케이크를 선물했어요!' : '롤링케이크 완성!'}</Header>
      <div className="w-full flex-1">
        <Canvas
          shadows
          gl={{ preserveDrawingBuffer: true }}
          ref={canvasRef}
          camera={{
            fov: 55,
            near: 0.1,
            far: 100,
            position: new THREE.Vector3(0, 3, 9),
          }}
          style={{ zIndex: 10 }}>
          {store.shape === 'custom' && <CustomCake isRotate={!!data} cake={store as CustomCake} />}
          {store.shape === 'theme' && <ThemeCake isRotate={!!data} cake={store as ThemeCake} />}
        </Canvas>
      </div>
      <section className="mb-3 flex w-full flex-col items-center gap-3 px-5">
        {data ? (
          <>
            <Button type="BIG" style={{ zIndex: 10 }} onClick={onListClicked}>
              케이크 진열대로 이동하기
            </Button>
            <Button type="BIG" color="white" style={{ zIndex: 10 }} onClick={onLoginClicked}>
              나도 케이크 링크 만들러가기
            </Button>
          </>
        ) : (
          <>
            <Button type="BIG" style={{ zIndex: 10 }} onClick={onCreate}>
              내 케이크 선물하기
            </Button>
            <span className="text-cap text-gray-800">선물한 케이크는 수정이 불가해요.</span>
          </>
        )}
      </section>

      {data && <Confetti />}
      {isMutating && <Loading />}
    </GradientContainer>
  );
}
