'use client';

import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';
import CircleButton from '../common/CircleButton';
import Header from '../common/Header';

type Props = {
  step: number;
  title: string;
};

const Layout = ({ step, title, children }: PropsWithChildren<Props>) => {
  const router = useRouter();

  return (
    <>
      <div className="fixed w-full h-full green-circle-gradient" />
      <main className="relative w-full h-full">
        <header className="flex flex-col items-center justify-center pt-[40px] gap-8">
          <mark className="gray-gradient px-[16px] py-[2px] border rounded-[20px] font-neo text-t2">
            {step}/7
          </mark>
          <Header>{title}</Header>
        </header>

        {children}

        <footer className="absolute p-3 bottom-3 w-full flex justify-between">
          <CircleButton type="<" onClick={() => router.back()} />
          <CircleButton type=">" onClick={() => null} />
        </footer>
      </main>
    </>
  );
};

export default Layout;
