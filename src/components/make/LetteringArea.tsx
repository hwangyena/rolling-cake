import { useStepStore } from '@/hooks/make';
import { focusInputAtom } from '@/lib/store';
import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { useCallback } from 'react';

const LetteringArea = () => {
  const dispatch = useSetAtom(focusInputAtom);

  const { store, onStoreUpdate } = useStepStore<CustomCake>();

  const handleCakeClicked = useCallback(() => {
    dispatch({
      label: '레터링 문구를 작성해줘!',
      maxLength: 10,
      defaultValue: store.lettering.value,
      autoSize: true,
      onConfirm: async (value: string) => {
        onStoreUpdate({ value });
      },
    });
  }, [dispatch, onStoreUpdate, store.lettering]);

  return (
    <div
      className="absolute bottom-5 flex cursor-pointer items-center justify-center"
      onClick={handleCakeClicked}>
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
  );
};

export default LetteringArea;
