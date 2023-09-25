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

  // FIXME:
  if (data) {
    <main className={styles.complete}>메인으로 돌아가기~</main>;
  }

  return (
    <main className={styles.complete}>
      <Navigation show={['<']} />
      <Header className="mt-[10vh]">롤링케이크 완성!</Header>
      <Cake className="flex-1 w-full h-full" />
      <section className="flex flex-col items-center w-full gap-3">
        <Button type="BIG" onClick={onCreate}>
          내 케이크 선물하기
        </Button>
        <span className="text-gray-800 text-cap">선물한 케이크는 수정이 불가해요.</span>
      </section>
    </main>
  );
};

export default StepComplete;
