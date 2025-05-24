import { useStep } from '@/lib/hooks/make';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';

import FocusInput from '@components/common/FocusInput';

const LetteringArea = () => {
  const [show, setShow] = useState(false);
  const { store, onStoreUpdate } = useStep();

  const onInputCancelClick = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <>
      <div
        className="absolute bottom-5 z-10 flex cursor-pointer items-center justify-center"
        onClick={() => setShow(true)}>
        <div className="rounded-full border border-black bg-white px-4 py-2 text-b3 drop-shadow-black">
          <span className="opacity-60">이 곳을 클릭해 문구를 작성하세요</span>
        </div>
        <Image
          src="/images/cursor.png"
          alt="cursor"
          width={30}
          height={30}
          className="absolute bottom-[-30px] animate-cursor-bounce"
        />
      </div>

      {show &&
        createPortal(
          <FocusInput
            label="레터링 문구를 작성해줘!"
            maxLength={10}
            defaultValue={store.lettering.value}
            autoSize
            onConfirm={async (value) => onStoreUpdate({ value })}
            onCancel={onInputCancelClick}
          />,
          document.body,
        )}
    </>
  );
};

export default LetteringArea;
