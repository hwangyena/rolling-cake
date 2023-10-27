'use client';

import { popupStore } from '@/lib/store';
import styles from '@/styles/component.module.css';
import { useAtom } from 'jotai';
import { useCallback } from 'react';
import Button from './Button';

const Popup = () => {
  const [store, setStore] = useAtom(popupStore);

  const { content, title, onCancel, onConfirm, hideCancel, bottomNode } = store as Popup;

  const onCancelClicked = useCallback(() => {
    setStore(null);
    onCancel && onCancel();
  }, [onCancel, setStore]);

  const onConfirmClicked = useCallback(() => {
    setStore(null);
    onConfirm && onConfirm();
  }, [setStore, onConfirm]);

  if (!store) {
    return null;
  }

  return (
    <div className={styles.popup}>
      <div className={styles['popup-content']}>
        <section className="mb-8">
          <h4 className="whitespace-pre text-h4 font-bold text-gray-800">{title}</h4>
          {content && (
            <p
              className="pt-[20px] text-b1 text-gray-800"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </section>
        <section className={hideCancel ? 'flex justify-center' : 'flex justify-evenly'}>
          {!hideCancel && (
            <Button type="SMALL" color="gray" onClick={onCancelClicked}>
              취소
            </Button>
          )}
          <Button type="SMALL" color="green" onClick={onConfirmClicked}>
            확인
          </Button>
        </section>
        {bottomNode}
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-50 bg-black opacity-[0.7]" />
    </div>
  );
};

export default Popup;
