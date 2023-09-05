'use client';

import { MouseEvent, PropsWithChildren, memo, useRef } from 'react';
import styles from '@/styles/component.module.css';

type Props = {
  type: 'BIG' | 'SMALL';
  color?: 'red' | 'green' | 'gray';
  disabled?: boolean;
  onClick?: (e: MouseEvent) => void;
};

const Button = ({ children, onClick, disabled, type, color = 'red' }: PropsWithChildren<Props>) => {
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
      className={`${
        type === 'BIG' ? styles['big-button'] : `${styles['small-button']} ${styles[color]}`
      }`}
      onClick={handleClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default memo(Button);
