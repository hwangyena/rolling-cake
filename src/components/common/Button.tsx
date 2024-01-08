'use client';

import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEvent,
  PropsWithChildren,
  memo,
  useRef,
} from 'react';

type NativeButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({ children, onClick, ...props }: NativeButtonProps) => {
  const lock = useRef(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
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

const SmallButton = ({ color, ...props }: PropsWithChildren<Props>) => {
  return <Button className={`small-button ${color}`} {...props}></Button>;
};

const BigButton = ({ color, ...props }: PropsWithChildren<Props>) => {
  return <Button className={`big-button ${color}`} {...props}></Button>;
};

Button.SmallButton = memo(SmallButton);
Button.BigButton = memo(BigButton);
// const ButtonMemo = memo(Button);

export default Button;
