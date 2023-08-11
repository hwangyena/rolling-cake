'use client';

import { useState } from 'react';
import Cake from '../cake/Cake';
import Cursor from '../common/Cursor';

const StepShape = () => {
  const [selected, setSelected] = useState<'custom' | 'theme' | null>(null);

  const handleSelected = (value: typeof selected) => {
    setSelected(value);
  };

  return (
    <article className="flex gap-2 justify-center pt-[30%]">
      <section
        className="flex flex-col justify-center items-center gap-2 relative"
        onClick={() => handleSelected('custom')}>
        <Cake className="w-[115px] h-[160px]" />
        <span className="text-t2 text-gray">직접 만들기</span>
        {selected === 'custom' && <Cursor className="right-5 bottom-10" />}
      </section>
      <section
        className="flex flex-col justify-center items-center gap-2 relative"
        onClick={() => handleSelected('theme')}>
        <Cake className="w-[115px] h-[160px]" />
        <span className="text-t2 text-gray">테마를 선택해 만들기</span>
        {selected === 'theme' && <Cursor className="right-5 bottom-10" />}
      </section>
    </article>
  );
};

export default StepShape;
