'use client';

import { notFound } from 'next/navigation';

import ItemSelect from '@components/make/ItemSelect';
import LetteringArea from '@components/make/LetteringArea';
import StepLetter from '@components/make/StepLetter';
import Model from '@components/model/Model';

import { useStep } from '@lib/hooks/make';

export default function CakeStep({ userId }: { userId: string }) {
  const { step, store } = useStep();

  if (!userId || !step) {
    return notFound();
  }

  if (step === 'letter') {
    return <StepLetter />;
  }
  return (
    <div className="flex h-full flex-col">
      <section className="relative grid w-full flex-1 place-items-center">
        <Model isStand cake={store} />

        {step === 'lettering' && <LetteringArea />}
      </section>
      <ItemSelect />
    </div>
  );
}
