'use client';

import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEvent,
  PropsWithChildren,
  useRef,
} from 'react';

import { cn } from '@lib/utils';

type NativeButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({ children, onClick, ...props }: NativeButtonProps) => {
  const lock = useRef(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.stopPropagation();

    if (lock.current) {
      return;
    }

    lock.current = true;

    if (onClick) {
      onClick(e);
    }

    setTimeout(() => {
      lock.current = false;
    }, 500);
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

type SmallButtonProps = NativeButtonProps & {
  color: 'pink' | 'gray';
};
export const SmallButton = ({
  color,
  className,
  ...props
}: PropsWithChildren<SmallButtonProps>) => {
  const pink =
    'bg-gradient-to-b from-[#FEF6F8] to-secondary-pink-80 hover:from-secondary-pink-90 hover:to-secondary-pink-70';
  const gray =
    'bg-gradient-to-b from-grayscale-gray1 to-grayscale-gray6 hover:from-grayscale-gray3 hover:to-grayscale-gray7';
  return (
    <Button
      className={cn(
        { [pink]: color === 'pink' },
        { [gray]: color === 'gray' },
        'flex h-10 shrink-0 items-center justify-center gap-2 rounded-[40px] border border-black px-[31px] py-[10px] font-bold text-btn1 text-grayscale-gray7',
        className,
      )}
      {...props}></Button>
  );
};

type BigButtonProps = NativeButtonProps & {
  color?: 'pink' | 'white';
};
export const BigButton = ({ color = 'pink', ...props }: PropsWithChildren<BigButtonProps>) => {
  const pink = 'bg-secondary-pink-70  text-white hover:bg-secondary-pink-50';
  const white = 'bg-white hover:bg-grayscale-gray1';
  return (
    <Button
      className={cn(
        { [pink]: color === 'pink' },
        { [white]: color === 'white' },
        'flex w-full shrink-0 items-center justify-center gap-4 rounded-[50px] border-2 border-black p-4 text-btn1 font-bold shadow-button  disabled:cursor-auto disabled:bg-grayscale-gray5 disabled:opacity-60 ',
      )}
      {...props}></Button>
  );
};

export default Button;
