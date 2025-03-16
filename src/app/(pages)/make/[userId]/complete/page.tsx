'use client';

import { useParams } from 'next/navigation';
import { useRef } from 'react';

import Header from '@components/common/Header';
import Loading from '@components/common/Loading';
import Navigation from '@components/common/Navigation';
import Model from '@components/model/Model';
import Confetti from '@components/style/Confetti';

import { useStep } from '@lib/hooks/make';

import { CreateCake, MoveButton } from './_components';
import { useCreateCake } from './_hooks';

export default function Page() {
  const params = useParams<{ userId: string }>();
  const userId = params?.userId;
  const { store } = useStep();

  const { data, isMutating, trigger } = useCreateCake();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <>
      <Navigation show={['<']} className={data ? 'invisible' : ''} />
      <Header>{data ? '케이크를 선물했어요!' : '롤링케이크 완성!'}</Header>
      <div className="relative w-full flex-1">
        <Model ref={canvasRef} cake={store} show={store.shape} fixPosition isRotate={!!data} />
      </div>
      <section className="mb-3 flex min-h-[120px] w-full flex-col items-center justify-end gap-3 px-5">
        {data ? (
          <MoveButton userId={userId} />
        ) : (
          <CreateCake canvasRef={canvasRef.current} userId={userId} create={trigger} />
        )}
      </section>

      {data && <Confetti />}
      {isMutating && <Loading />}
    </>
  );
}
