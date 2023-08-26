import Button from '@/components/common/Button';
import styles from '@/styles/component.module.css';
import { PropsWithChildren, memo } from 'react';

type Props = {
  type: 'complex' | 'simple';
  content: string;
  button?: {
    label: string;
    onButtonClicked: () => void;
  };
  className?: string;
};

const Card = ({ children, button, type, content, className }: PropsWithChildren<Props>) => {
  return (
    <div
      className={`card ${styles.card} ${
        type === 'simple' ? styles.simple : styles.complex
      } ${className}`}>
      <article>{children}</article>
      <article className="flex flex-col items-center gap-2 z-10">
        <h3 className={`text-t1 text-gray-700 font-bold ${button ? '' : 'mb-4'}`}>{content}</h3>
        {button && (
          <Button type="SMALL" color="red" onClick={button.onButtonClicked}>
            {button.label}
          </Button>
        )}
      </article>
      <CardDesignMemo type={type} />
    </div>
  );
};

const CardDesign = ({ type }: { type: 'simple' | 'complex' }) => {
  switch (type) {
    case 'complex':
      return (
        <article className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src="/images/sparkle1.png"
            alt=""
            className="w-12 h-12 absolute bottom-[27%] left-3"
          />
          <img
            src="/images/sparkle2.png"
            alt=""
            className="w-12 h-12 absolute bottom-[28%] right-1"
          />
          <img
            src="/images/sparkle3.png"
            alt=""
            className="w-20 h-20 absolute bottom-[-5px] right-[-10px]"
          />
          <img
            src="/images/sparkle4.png"
            alt=""
            className="w-20 h-16 absolute top-[-5px] right-2"
          />
          <div className="bg-black w-1 h-1 rounded-full absolute top-5 left-[30%]" />
          <div className="bg-black w-[8px] h-[8px] rounded-full absolute bottom-[16%] left-[8%]" />
          <div className="bg-black w-[17px] h-[17px] rounded-full absolute bottom-[12%] left-[11%]" />
        </article>
      );
    case 'simple':
      return (
        <article className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src="/images/sparkle1.png"
            alt=""
            className="w-20 h-16 absolute bottom-[14%] left-1"
          />
          <div className="bg-black w-[4px] h-[4px] rounded-full absolute bottom-[19%] right-[15%]" />
          <div className="bg-black w-[8px] h-[8px] rounded-full absolute bottom-[16%] right-[12%]" />
        </article>
      );
    default:
      return null;
  }
};

const CardDesignMemo = memo(CardDesign);

export default memo(Card);
