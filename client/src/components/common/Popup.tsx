'use client';

import { popupStore } from '@/lib/store';
import { useAtom } from 'jotai';
import { useCallback } from 'react';
import Button from './Button';
import styles from '@/styles/component.module.css';

const Popup = () => {
  const [store, setStore] = useAtom(popupStore);

  if (!store) {
    return null;
  }

  const { content, title, onCancel, onConfirm } = store;

  const onCancelClicked = useCallback(() => {
    setStore(null);
    onCancel && onCancel();
  }, []);

  const onConfirmClicked = useCallback(() => {
    setStore(null);
    onConfirm && onConfirm();
  }, []);

  return (
    <div className={styles.popup}>
      <div className={styles['popup-content']}>
        <h4 className="text-h4 text-gray-800 font-bold">{title}</h4>
        <p
          className="text-b1 pt-[20px] text-gray-800"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className={styles['button-wrapper']}>
          <Button type="SMALL" color="gray" onClick={onCancelClicked}>
            취소
          </Button>
          <Button type="SMALL" color="green" onClick={onConfirmClicked}>
            확인
          </Button>
        </div>
      </div>
      <div className="absolute left-0 top-0 bottom-0 right-0 bg-black opacity-[0.7] z-0" />
    </div>
  );
};

export default Popup;
