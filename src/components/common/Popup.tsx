'use client';

import { usePopup } from '@lib/provider/PopupProvider';

import { SmallButton } from './Button';

const Popup = () => {
  const { popup: value, hide } = usePopup();

  const onCancelClicked = () => {
    hide();
    value?.onCancel?.();
  };

  const onConfirmClicked = () => {
    hide();
    value?.onConfirm?.();
  };

  if (!value) {
    return null;
  }

  return (
    <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
      <div className="z-[100] flex w-[80%] flex-col justify-around rounded-md bg-white p-[10%] text-center shadow-popup">
        <section className="mb-8">
          <h4 className="whitespace-pre text-h4 font-bold text-gray-800">{value.title}</h4>
          {value.content && (
            <p
              className="whitespace-pre-wrap pt-[20px] text-b1 text-gray-800"
              dangerouslySetInnerHTML={{ __html: value.content }}
            />
          )}
        </section>
        <section className={value.hideCancel ? 'flex justify-center' : 'flex justify-evenly'}>
          {!value.hideCancel && (
            <SmallButton color="gray" onClick={onCancelClicked}>
              취소
            </SmallButton>
          )}
          <SmallButton color="blue" onClick={onConfirmClicked}>
            확인
          </SmallButton>
        </section>
        {value.bottomNode}
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-50 bg-black opacity-[0.7]" />
    </div>
  );
};

export default Popup;
