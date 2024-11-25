'use client';

import { useAtom, useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

import { useCreateCake } from '@service/client/cake';

import Button from '@components/common/Button';
import Header from '@components/common/Header';
import Loading from '@components/common/Loading';
import Navigation from '@components/common/Navigation';
import Model from '@components/model/Model';
import Confetti from '@components/style/Confetti';

import { useErrorPopup } from '@lib/hooks/common';
import { useStepStore } from '@lib/hooks/make';
import { popupAtom, userIdAtom } from '@lib/store';

export default function CompleteClient() {
  const router = useRouter();

  const [userId] = useAtom(userIdAtom);
  const { store, onResetMakeAtom } = useStepStore();
  const { trigger, data, isMutating } = useCreateCake();

  const { showError } = useErrorPopup(() => router.replace('/make?step=shape'));
  const dispatchPopup = useSetAtom(popupAtom);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
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
  }, [dispatchPopup, store, router, isMutating, data, userId]);

  const onCreate = useCallback(async () => {
    const { shape, letter, ...cake } = store;
    const type = shape.toUpperCase() as 'CUSTOM' | 'THEME';

    const base64 = canvasRef.current?.toDataURL('image/png') ?? '';

    if (!type || !letter.name || !letter.content || !cake || !userId) {
      showError();
      return;
    }

    const res = await trigger({
      type,
      cake,
      cakeImageBase64: base64,
      letter,
      userId,
    });

    if (res.status !== 200) {
      showError();
    }
  }, [showError, store, userId, trigger]);

  const onListClicked = useCallback(() => {
    if (!userId) {
      return;
    }

    onResetMakeAtom();

    router.push(`/cake/${userId}`);
    router.refresh();
  }, [router, userId, onResetMakeAtom]);

  const onLoginClicked = useCallback(() => {
    onResetMakeAtom();
    router.push('/');
  }, [onResetMakeAtom, router]);

  return (
    <>
      <Navigation show={['<']} className={data ? 'invisible' : ''} />
      <Header>{data ? '케이크를 선물했어요!' : '롤링케이크 완성!'}</Header>
      <div className="relative w-full flex-1">
        <Model ref={canvasRef} cake={store} show={store.shape} fixPosition isRotate={!!data} />
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
    </>
  );
}
