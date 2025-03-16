'use client';

import Header from '@components/common/Header';

import { CUSTOM_STEP } from '@lib/constant';
import { useStep } from '@lib/hooks/make';

const STEP_LENGTH = Object.keys(CUSTOM_STEP).length;

const StepTitle = () => {
  const { order, stepData } = useStep();

  return (
    <header className="flex flex-col items-center justify-center gap-8 pt-[40px]">
      <mark
        className={`gray-gradient cursor-auto rounded-[20px] border border-black px-[16px] py-[2px] font-neo text-t2 text-pink-400 no-underline ${
          order ? '' : 'invisible'
        }`}>
        {order}/{STEP_LENGTH}
      </mark>
      <Header>{stepData?.title}</Header>
    </header>
  );
};

export default StepTitle;
