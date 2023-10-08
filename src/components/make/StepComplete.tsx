'use client';

import { createCake } from '@/endpoint/make';
import { useErrorPopup } from '@/hooks/common';
import { useStep } from '@/hooks/make';
import { getLocalStorage } from '@/lib/store';
import { mapToObject } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import useSWRMutation from 'swr/mutation';
import GradientContainer from '../GradientContainer';
import Cake from '../cake/Cake';
import Button from '../common/Button';
import Header from '../common/Header';
import Navigation from '../common/Navigation';

const StepComplete = () => {
  const router = useRouter();

  const { store } = useStep();
  const { trigger, data } = useSWRMutation('/api/make', createCake);
  const { showError } = useErrorPopup(() => router.replace('/make?step=shape'));

  const targetUser = useMemo(() => getLocalStorage<string>('rolling-cake:userId'), []);

  const onCreate = useCallback(async () => {
    const { shape, letter, ...cake } = mapToObject<CakeStep>(store);
    const type = shape.toUpperCase() as 'CUSTOM' | 'THEME';

    if (!type || !letter || !cake || !targetUser) {
      showError();
      return;
    }

    try {
      await trigger<CakeStep>({
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
    router.push(`/cake/${targetUser}`);
  }, [router, targetUser]);

  const onLoginClicked = useCallback(() => {
    router.push('/');
  }, [router]);

  // TODO: 로딩 아이콘

  return (
    <GradientContainer type="pink-green" className="justify-center items-center">
      <Navigation show={['<']} className={data ? 'invisible' : ''} />
      <Header>{data ? '케이크를 선물했어요!' : '롤링케이크 완성!'}</Header>
      <Cake className="flex-1 w-[80%] aspect-square m-[20%]" />
      <section className="p-5 w-full flex flex-col items-center gap-3">
        {data ? (
          <>
            <Button type="BIG" onClick={onListClicked}>
              케이크 진열대로 이동하기
            </Button>
            <Button type="BIG" color="white" onClick={onLoginClicked}>
              나도 케이크 링크 만들러가기
            </Button>
          </>
        ) : (
          <>
            <Button type="BIG" onClick={onCreate}>
              내 케이크 선물하기
            </Button>
            <span className="text-gray-800 text-cap">선물한 케이크는 수정이 불가해요.</span>
          </>
        )}
      </section>
    </GradientContainer>
  );
};

export default StepComplete;
