'use client';

import { useRouter } from 'next/navigation';
import { TriggerWithArgs } from 'swr/mutation';

import { BigButton } from '@components/common/Button';

import { useErrorPopup } from '@lib/hooks/common';
import { useStep } from '@lib/hooks/make';

type Props = {
  canvasRef: Nullable<HTMLCanvasElement>;
  userId?: string;
  create: TriggerWithArgs<Response, unknown, '/api/cake', CreateCakeReq>;
};

const CreateCake = ({ userId, canvasRef, create }: Props) => {
  const router = useRouter();
  const { showError } = useErrorPopup(() => router.replace('/make?step=sheet'));

  const { store } = useStep();

  const handleClicked = async () => {
    const { letter, ...cake } = store;
    if (!letter.name || !letter.content || !cake || !userId || !canvasRef) {
      showError();
      return;
    }

    const base64 = canvasRef.toDataURL('image/png');

    const res = await create({
      type: 'CUSTOM',
      cake,
      cakeImageBase64: base64,
      letter,
      userId,
    });

    if (res.status !== 200) {
      showError();
    }
  };

  return (
    <>
      <BigButton style={{ zIndex: 10 }} onClick={handleClicked}>
        내 케이크 선물하기
      </BigButton>
      <span className="text-cap text-grayscale-gray6">선물한 케이크는 수정이 불가해요.</span>
    </>
  );
};

export default CreateCake;
