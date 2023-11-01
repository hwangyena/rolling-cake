import Button from '@/components/common/Button';
import { cn } from '@/lib/utils';
import { PropsWithChildren, memo } from 'react';
import ShadowCard from '../style/ShadowCard';

type Props = {
  content: string;
  className?: string;
  hasDesign?: boolean;
  button?: {
    label: string;
    onButtonClicked: () => void;
  };
};

const Card = ({ children, button, hasDesign, content, className }: PropsWithChildren<Props>) => {
  return (
    <ShadowCard
      className={cn(
        'relative flex h-[90%] w-[90%] flex-col items-center justify-around',
        className,
        hasDesign ? 'pd-[5%] relative pt-[10%]' : 'h-full w-full p-3',
      )}>
      <article
        className={cn(
          hasDesign ? 'w-[80%]' : 'w-full',
          'z-10 grid h-[40vh] min-h-[60%] place-items-center rounded-xl border-2 border-black bg-white',
        )}>
        {children}
      </article>

      <article className="z-10 flex flex-col items-center gap-2">
        <h3 className={`text-t1 font-bold text-gray-700 ${button ? '' : 'mb-4'}`}>{content}</h3>
        {button && (
          <Button type="SMALL" color="red" onClick={button.onButtonClicked}>
            {button.label}
          </Button>
        )}
      </article>
      {hasDesign && <CardDesign />}
    </ShadowCard>
  );
};

const CardDesign = () => {
  return (
    <article className="absolute left-0 top-0 z-0 h-full w-full">
      <img src="/images/sparkle1.png" alt="" className="absolute bottom-[27%] left-3 h-12 w-12" />
      <img src="/images/sparkle2.png" alt="" className="absolute bottom-[28%] right-1 h-12 w-12" />
      <img
        src="/images/sparkle3.png"
        alt=""
        className="absolute bottom-[-5px] right-[-10px] h-20 w-20"
      />
      <img src="/images/sparkle4.png" alt="" className="absolute right-2 top-[-5px] h-16 w-20" />
      <div className="absolute left-[30%] top-5 h-1 w-1 rounded-full bg-black" />
      <div className="absolute bottom-[16%] left-[8%] h-[8px] w-[8px] rounded-full bg-black" />
      <div className="absolute bottom-[12%] left-[11%] h-[17px] w-[17px] rounded-full bg-black" />
    </article>
  );
};

export default memo(Card);
