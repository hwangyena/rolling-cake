'use client';

import { CSSProperties, MouseEvent, PropsWithChildren, memo, useRef } from 'react';
import styles from '@/styles/component.module.css';

type Props = {
  type: 'BIG' | 'SMALL';
  color?: 'red' | 'green' | 'gray' | 'white';
  disabled?: boolean;
  style?: CSSProperties;
  onClick?: (e: MouseEvent) => void;
};

const Button = ({ children, onClick, disabled, type, color, style }: PropsWithChildren<Props>) => {
  const lock = useRef(false);

  const handleClick = (e: MouseEvent) => {
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
    <button
      className={`${type === 'BIG' ? styles['big-button'] : styles['small-button']} ${
        color ? styles[color] : ''
      }`}
      style={style}
      onClick={handleClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default memo(Button);
