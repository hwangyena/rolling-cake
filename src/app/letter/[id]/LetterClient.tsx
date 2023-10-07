'use client';

import Cake from '@/components/cake/Cake';
import Card from '@/components/common/Card';
import Header from '@/components/common/Header';
import { Cake as CakeType } from '@prisma/client';
import { useCallback, useState } from 'react';

export default function LetterClient({ content, name }: CakeType) {
  const [isCake, setIsCake] = useState(true);

  const onToggleCake = useCallback(() => {
    setIsCake((p) => !p);
  }, []);

  return (
    <main className="flex flex-col flex-1">
      <section className="flex flex-col items-center">
        <Header>시은표 롤링케이크와</Header>
        <Header>편지를 확인해보r!</Header>
      </section>
      <section className="flex-1 grid place-items-center relative">
        <Card
          type="complex"
          content={`Dear. ${name}`}
          button={{
            label: isCake ? '편지 읽어보기' : '케이크 보기',
            onButtonClicked: onToggleCake,
          }}>
          {isCake ? (
            <Cake className="w-[80%] aspect-square" />
          ) : (
            <p className="p-3 font-neo text-effect_b overflow-auto h-full text-center break-keep">
              {content}
            </p>
          )}
        </Card>
      </section>
    </main>
  );
}
