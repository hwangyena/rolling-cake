import { SmallButton } from '@/components/common/Button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PropsWithChildren, memo } from 'react';

import ShadowCard from '../style/ShadowCard';

type Props = {
  content: string;
  className?: string;
  button?: {
    label: string;
    onButtonClicked: () => void;
  };
};

const Card = ({ children, button, content, className }: PropsWithChildren<Props>) => {
  return (
    <ShadowCard
      className={cn('flex h-[90%] w-[90%] flex-col items-center justify-around p-3', className)}>
      <article
        className={cn(
          'relative z-10 grid h-[40vh] min-h-[60%] place-items-center rounded-xl border-2 border-black bg-white w-full',
        )}>
        {children}
      </article>

      <article className="z-10 flex flex-col items-center gap-2">
        <h1 className={`text-t1 font-bold text-gray-700 ${button ? '' : 'mb-4'}`}>{content}</h1>
        {button && (
          <SmallButton color="pink" onClick={button.onButtonClicked}>
            {button.label}
          </SmallButton>
        )}
      </article>
    </ShadowCard>
  );
};

export default memo(Card);
