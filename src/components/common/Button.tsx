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
  color: 'pink' | 'gray' | 'blue';
};
export const SmallButton = ({
  color,
  className,
  ...props
}: PropsWithChildren<SmallButtonProps>) => {
  const pink =
    'bg-gradient-to-b from-[#fef6f8] to-secondary-pink-80 hover:from-secondary-pink-90 hover:to-secondary-pink-70';
  const gray =
    'bg-gradient-to-b from-grayscale-gray1 to-grayscale-gray6 hover:from-grayscale-gray3 hover:to-grayscale-gray7';
  const blue =
    'bg-gradient-to-b from-[#dff1ff] to-primary-blue-80 hover:from-primary-blue-80 hover:to-primary-blue-60';
  return (
    <Button
      className={cn(
        { [pink]: color === 'pink' },
        { [gray]: color === 'gray' },
        { [blue]: color === 'blue' },
        'flex h-10 shrink-0 items-center justify-center gap-2 rounded-[40px] border border-black px-[31px] py-[10px] font-bold text-btn1 text-grayscale-gray7 press',
        className,
      )}
      {...props}></Button>
  );
};

type BigButtonProps = NativeButtonProps & {
  color?: 'pink' | 'white' | 'blue';
};
export const BigButton = ({ color = 'blue', ...props }: PropsWithChildren<BigButtonProps>) => {
  const pink = 'bg-secondary-pink-70  text-white hover:bg-secondary-pink-50';
  const white = 'bg-white hover:bg-grayscale-gray1';
  const blue = 'bg-primary-blue-50 text-white hover:bg-primary-blue-30';
  return (
    <Button
      className={cn(
        { [pink]: color === 'pink' },
        { [white]: color === 'white' },
        { [blue]: color === 'blue' },
        'flex w-full shrink-0 items-center justify-center gap-4 rounded-[50px] border-2 border-black p-4 text-btn1 font-bold shadow-button disabled:cursor-auto disabled:bg-grayscale-gray5 disabled:opacity-60 whitespace-nowrap press',
      )}
      {...props}></Button>
  );
};

export default Button;
