'use client';

import { useStep } from '@/hooks/make';
import styles from '@/styles/page.module.css';
import { useCallback } from 'react';
import useSWRMutation from 'swr/mutation';
import Cake from '../cake/Cake';
import Button from '../common/Button';
import Header from '../common/Header';
import Navigation from '../common/Navigation';
import { createCake } from '@/endpoint/make';
import { mapToObject } from '@/lib/utils';
import GradientContainer from '../GradientContainer';

const StepComplete = () => {
  const { trigger, data } = useSWRMutation('/api/make', createCake);
  const { store } = useStep();

  const onCreate = useCallback(async () => {
    const { shape, letter, ...cake } = mapToObject<CakeStep>(store);
    const type = shape.toUpperCase() as 'CUSTOM' | 'THEME';

    //TODO: show error;
    if (!type || !letter || !cake) {
      return;
    }

    try {
      await trigger<CakeStep>({
        type,
        cake,
        letter,
        userId: '64f74662409a41153c449c58', // TODO: real user id
      });
    } catch (e) {
      console.error('[ERROR]', e);
    }
  }, [store, trigger]);

  // TODO: after send cake
  if (data) {
    <main className={styles.complete}>메인으로 돌아가기~</main>;
  }

  return (
    <GradientContainer type="pink-green" className="justify-center items-center">
      <Navigation show={['<']} />
      <Header>롤링케이크 완성!</Header>
      <Cake className="flex-1 w-[80%] aspect-square m-[20%]" />
      <section className="p-5 w-full flex flex-col items-center gap-3">
        <Button type="BIG" onClick={onCreate}>
          내 케이크 선물하기
        </Button>
        <span className="text-gray-800 text-cap">선물한 케이크는 수정이 불가해요.</span>
      </section>
    </GradientContainer>
  );
};

export default StepComplete;
