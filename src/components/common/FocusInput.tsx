'use client';

import { focusInputAtom } from '@/lib/store';
import styles from '@/styles/component.module.css';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import Button from './Button';

const FocusInput = () => {
  const [value, dispatch] = useAtom(focusInputAtom);

  const [text, setText] = useState('');

  useEffect(() => {
    if (value?.defaultValue) {
      setText(value.defaultValue);
    }
  }, [value]);

  return (
    <div className={styles['focus-input']}>
      <div className={styles['focus-input-content']}>
        <section>
          <h4 className="text-b2 text-white">{value?.label}</h4>
          <input
            type="text"
            value={text}
            className="text-effect_t font-neo"
            onChange={(e) => {
              setText(e.target.value.slice(0, value?.maxLength));
            }}
          />
          <span className="text-b3">
            {text.length}/{value?.maxLength}
          </span>
        </section>
        <section>
          <Button type="SMALL" color="gray" onClick={() => dispatch(null)}>
            취소
          </Button>
          <Button
            type="SMALL"
            color="green"
            onClick={() => {
              value?.onConfirm && value.onConfirm(text);
              dispatch(null);
            }}>
            확인
          </Button>
        </section>
      </div>

      <div className="absolute left-0 top-0 bottom-0 right-0 bg-black opacity-[0.8]" />
    </div>
  );
};

export default FocusInput;
