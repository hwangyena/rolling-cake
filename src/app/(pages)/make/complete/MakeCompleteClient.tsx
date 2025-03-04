'use client';

import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

import { useCreateCake } from '@service/client/cake';

import { BigButton } from '@components/common/Button';
import Header from '@components/common/Header';
import Loading from '@components/common/Loading';
import Navigation from '@components/common/Navigation';
import Model from '@components/model/Model';
import Confetti from '@components/style/Confetti';

import { useErrorPopup } from '@lib/hooks/common';
import { useStep } from '@lib/hooks/make';
import { usePopup } from '@lib/provider/PopupProvider';
import { userIdStore } from '@lib/store';

export default function MakeCompleteClient() {
  const router = useRouter();
  const popup = usePopup();
  const [userId] = useAtom(userIdStore);

  const { store, onResetCake } = useStep();
  const { trigger, data, isMutating } = useCreateCake();

  const { showError } = useErrorPopup(() => router.replace('/make?step=sheet'));

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (isMutating || data) {
      return;
    }

    if (!userId) {
      popup.show({
        title: '앗, 오류가 생겼어요.',
        content: '일시적인 오류일 수 있어요.\n잠시 후 다시 시도해주세요.',
        hideCancel: true,
        onConfirm: () => router.push('/'),
      });
      return;
    }
  }, [popup, store, router, isMutating, data, userId]);

  const onCreate = useCallback(async () => {
    const { shape, letter, ...cake } = store;
    const type = shape.toUpperCase() as 'CUSTOM' | 'THEME';

    if (!type || !letter.name || !letter.content || !cake || !userId || !canvasRef.current) {
      showError();
      return;
    }

    const base64 = canvasRef.current.toDataURL('image/png');

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

    onResetCake();

    router.push(`/cake/${userId}`);
    router.refresh();
  }, [router, userId, onResetCake]);

  const onLoginClicked = useCallback(() => {
    onResetCake();
    router.push('/');
  }, [onResetCake, router]);

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
            <BigButton style={{ zIndex: 10 }} onClick={onListClicked}>
              케이크 진열대로 이동하기
            </BigButton>
            <BigButton color="white" style={{ zIndex: 10 }} onClick={onLoginClicked}>
              나도 케이크 링크 만들러가기
            </BigButton>
          </>
        ) : (
          <>
            <BigButton style={{ zIndex: 10 }} onClick={onCreate}>
              내 케이크 선물하기
            </BigButton>
            <span className="text-cap text-gray-800">선물한 케이크는 수정이 불가해요.</span>
          </>
        )}
      </section>

      {data && <Confetti />}
      {isMutating && <Loading />}
    </>
  );
}
