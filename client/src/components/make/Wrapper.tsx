'use client';

import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';
import CircleButton from '../common/CircleButton';
import Header from '../common/Header';

type Props = {
  step?: number;
  title: string;
  nextStep: string;
};

const Wrapper = ({ step, title, children, nextStep }: PropsWithChildren<Props>) => {
  const router = useRouter();

  return (
    <>
      <div className="fixed w-full h-full green-circle-gradient" />
      <main className="relative w-full h-full flex flex-col">
        <header className="flex flex-col items-center justify-center pt-[40px] gap-8">
          <mark
            className={`gray-gradient px-[16px] py-[2px] border rounded-[20px] font-neo text-t2 ${
              step ? '' : 'invisible'
            }`}>
            {step}/6
          </mark>
          <Header>{title}</Header>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="p-3 mb-5 w-full flex justify-between">
          <CircleButton type="<" onClick={() => router.back()} />
          <CircleButton type=">" onClick={() => router.push(`/make?step=${nextStep}`)} />
        </footer>
      </main>
    </>
  );
};

export default Wrapper;
