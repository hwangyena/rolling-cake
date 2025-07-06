import { SmallButton } from '@/components/common/Button';
import { cn } from '@/lib/utils';
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
      className={cn(
        'flex flex-col items-center justify-around py-3 px-[30px] absolute left-0 top-0 h-full w-full',
        className,
      )}>
      <article
        className={cn(
          'relative z-10 grid min-h-[70%] place-items-center rounded-xl border-2 border-black bg-white w-full',
        )}>
        {children}
      </article>

      <article className="z-10 flex flex-col items-center gap-5">
        <span className={`text-b1 text-grayscale-gray7 ${button ? '' : 'mb-4'}`}>{content}</span>
        {button && (
          <SmallButton color="blue" onClick={button.onButtonClicked}>
            {button.label}
          </SmallButton>
        )}
      </article>
    </ShadowCard>
  );
};

export default memo(Card);
