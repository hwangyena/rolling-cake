'use client';

import GradientContainer from '@/components/GradientContainer';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Loading from '@/components/common/Loading';
import Navigation from '@/components/common/Navigation';
import Model from '@/components/model/Model';
import Confetti from '@/components/style/Confetti';
import { useErrorPopup } from '@/hooks/common';
import { useStepStore } from '@/hooks/make';
import { createCake } from '@/lib/endpoint';
import { getLocalStorage, popupAtom, setLocalStorage } from '@/lib/store';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import useSWRMutation from 'swr/mutation';

export default function Page() {
  const router = useRouter();

  const { store, onResetMakeAtom } = useStepStore();
  const { trigger, data, isMutating } = useSWRMutation('/api/make', createCake);
  const { showError } = useErrorPopup(() => router.replace('/make?step=shape'));
  const dispatchPopup = useSetAtom(popupAtom);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetUser = useMemo(() => getLocalStorage<string>('rolling-cake:userId'), []);

  useEffect(() => {
    const isMake = getLocalStorage<Record<string, boolean>>('rolling-cake:isMake');
    const userId = getLocalStorage<string>('rolling-cake:userId');

    if (isMutating || data) {
      return;
    }

    if (!userId) {
      dispatchPopup({
        title: '앗, 오류가 생겼어요.',
        content: '일시적인 오류일 수 있어요.\n잠시 후 다시 시도해주세요.',
        hideCancel: true,
        onConfirm: () => router.push('/'),
      });
      return;
    }

    if (isMake && isMake[userId]) {
      dispatchPopup({
        title: '앗, 오류가 생겼어요.',
        content: '이미 만들어준 케이크 같아요.\n케이크는 한 번만 전달해 줄 수 있어요.',
        hideCancel: true,
        onConfirm: () => router.push(`/cake/${userId}`),
      });
    }
  }, [dispatchPopup, store, router, isMutating, data]);

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
    if (!targetUser) {
      return;
    }

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
      <div className="relative w-full flex-1">
        <Model
          ref={canvasRef}
          cake={store}
          show={store.shape}
          fixPosition
          isRotate={!!data}
          canvasProps={{
            camera: {
              fov: 55,
              near: 0.1,
              far: 100,
            },
          }}
        />
      </div>
      <section className="mb-3 flex min-h-[120px] w-full flex-col items-center justify-end gap-3 px-5">
        {data ? (
          <>
            <Button.BigButton style={{ zIndex: 10 }} onClick={onListClicked}>
              케이크 진열대로 이동하기
            </Button.BigButton>
            <Button.BigButton color="white" style={{ zIndex: 10 }} onClick={onLoginClicked}>
              나도 케이크 링크 만들러가기
            </Button.BigButton>
          </>
        ) : (
          <>
            <Button.BigButton style={{ zIndex: 10 }} onClick={onCreate}>
              내 케이크 선물하기
            </Button.BigButton>
            <span className="text-cap text-gray-800">선물한 케이크는 수정이 불가해요.</span>
          </>
        )}
      </section>

      {data && <Confetti />}
      {isMutating && <Loading />}
    </GradientContainer>
  );
}
