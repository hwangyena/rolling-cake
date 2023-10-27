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
        'w-[90%] h-[90%] relative flex flex-col items-center justify-around',
        className,
        hasDesign ? 'relative pt-[10%] pd-[5%]' : 'w-full h-full p-3'
      )}>
      <article
        className={cn(hasDesign ? 'w-[80%]':'w-full' , 'min-h-[60%] grid place-items-center h-[40vh] border-black border-2 bg-white rounded-xl z-10')}>
        {children}
      </article>
      <article className="flex flex-col items-center gap-2 z-10">
        <h3 className={`text-t1 text-gray-700 font-bold ${button ? '' : 'mb-4'}`}>{content}</h3>
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
    <article className="absolute top-0 left-0 w-full h-full z-0">
      <img src="/images/sparkle1.png" alt="" className="w-12 h-12 absolute bottom-[27%] left-3" />
      <img src="/images/sparkle2.png" alt="" className="w-12 h-12 absolute bottom-[28%] right-1" />
      <img
        src="/images/sparkle3.png"
        alt=""
        className="w-20 h-20 absolute bottom-[-5px] right-[-10px]"
      />
      <img src="/images/sparkle4.png" alt="" className="w-20 h-16 absolute top-[-5px] right-2" />
      <div className="bg-black w-1 h-1 rounded-full absolute top-5 left-[30%]" />
      <div className="bg-black w-[8px] h-[8px] rounded-full absolute bottom-[16%] left-[8%]" />
      <div className="bg-black w-[17px] h-[17px] rounded-full absolute bottom-[12%] left-[11%]" />
    </article>
  );
};

export default memo(Card);
