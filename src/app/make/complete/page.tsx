'use client';

import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';

import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import useSWRMutation from 'swr/mutation';
import { useErrorPopup } from '@/hooks/common';
import { getLocalStorage, setLocalStorage } from '@/lib/store';
import { createCake } from '@/lib/endpoint';
import Header from '@/components/common/Header';
import GradientContainer from '@/components/GradientContainer';
import Button from '@/components/common/Button';
import Loading from '@/components/common/Loading';
import { useStepStore } from '@/hooks/make';
import Navigation from '@/components/common/Navigation';
import CustomCake from '@/components/model/CustomCake';
import Confetti from '@/components/style/Confetti';

export default function Page() {
  const router = useRouter();

  const { store } = useStepStore();
  const { trigger, data, isMutating } = useSWRMutation('/api/make', createCake);
  const { showError } = useErrorPopup(() => router.replace('/make?step=shape'));

  const targetUser = useMemo(() => getLocalStorage<string>('rolling-cake:userId'), []);

  const onCreate = useCallback(async () => {
    const { shape, letter, ...cake } = store;
    const type = shape.toUpperCase() as 'CUSTOM' | 'THEME';

    if (!type || !letter.name || !letter.content || !cake || !targetUser) {
      showError();
      return;
    }

    try {
      await trigger({
        type,
        cake,
        letter,
        userId: targetUser,
      });
    } catch (e) {
      console.error('[ERROR]', e);
      showError();
    }
  }, [store, targetUser, showError, trigger]);

  const onListClicked = useCallback(() => {
    setLocalStorage('rolling-cake:isMake', { [targetUser]: true });
    router.push(`/cake/${targetUser}`);
    router.refresh();
  }, [router, targetUser]);

  const onLoginClicked = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <GradientContainer type="pink-green" className="items-center justify-center overflow-hidden">
      <Navigation show={['<']} className={data ? 'invisible' : ''} />
      <Header>{data ? '케이크를 선물했어요!' : '롤링케이크 완성!'}</Header>
      <div className="w-full flex-1">
        <Canvas
          shadows
          camera={{
            fov: 55,
            near: 0.1,
            far: 100,
            position: new THREE.Vector3(0, 3, 9),
          }}
          style={{ zIndex: 10 }}>
          {/* FIXME: after theme cake */}
          <CustomCake isRotate cake={store as CustomCake} />
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

      {!data && <Confetti />}
      {isMutating && <Loading />}
    </GradientContainer>
  );
}
