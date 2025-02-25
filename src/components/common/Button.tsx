'use client';

import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEvent,
  PropsWithChildren,
  useRef,
} from 'react';

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

type Props = NativeButtonProps & {
  color?: 'red' | 'green' | 'gray' | 'white';
};

export const SmallButton = ({ color, ...props }: PropsWithChildren<Props>) => {
  return (
    <Button
      className={`small-button flex h-10 shrink-0 items-center justify-center gap-2 rounded-[40px] border border-black px-[31px] py-[10px] text-gray-800 ${color}`}
      {...props}></Button>
  );
};

export const BigButton = ({ color, ...props }: PropsWithChildren<Props>) => {
  return (
    <Button
      className={`flex w-full shrink-0 items-center justify-center gap-4 rounded-lg border-2 border-black bg-pink-200 p-4 text-btn font-bold text-white shadow-button hover:bg-pink-300 disabled:cursor-auto disabled:bg-gray-500 disabled:opacity-60 ${color}`}
      {...props}></Button>
  );
};

export default Button;
