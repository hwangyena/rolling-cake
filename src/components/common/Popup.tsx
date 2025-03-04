'use client';

import { popupStore } from '@/lib/store';
import { useAtom } from 'jotai';
import { useCallback } from 'react';

import { SmallButton } from './Button';

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
    <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
      <div className="z-[100] flex w-[80%] flex-col justify-around rounded-md bg-white p-[10%] text-center shadow-popup">
        <section className="mb-8">
          <h4 className="whitespace-pre text-h4 font-bold text-gray-800">{title}</h4>
          {content && (
            <p
              className="whitespace-pre-wrap pt-[20px] text-b1 text-gray-800"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </section>
        <section className={hideCancel ? 'flex justify-center' : 'flex justify-evenly'}>
          {!hideCancel && (
            <SmallButton color="gray" onClick={onCancelClicked}>
              취소
            </SmallButton>
          )}
          <SmallButton color="green" onClick={onConfirmClicked}>
            확인
          </SmallButton>
        </section>
        {bottomNode}
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-50 bg-black opacity-[0.7]" />
    </div>
  );
};

export default Popup;
