'use client';

import { Cake as CakeType, User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { ComponentProps, useCallback, useMemo, useState } from 'react';

import Card from '@components/common/Card';
import Model from '@components/model/Model';

import { usePopup } from '@lib/provider/PopupProvider';
import { cn } from '@lib/utils';

const POPUP_MESSAGE = '롤링케이크 주인이라면? 로그인 하고 읽기>';

type Props = CakeType & {
  user: User;
  currentUser: User | null;
};

const CakeCard = ({ content, user, currentUser, isPrivate, customCake, themeCake }: Props) => {
  const router = useRouter();
  const popup = usePopup();

  const [isCakeFace, setIsCakeFace] = useState(true);

  const handleToggleCake = useCallback(() => {
    const isCakeOwner = currentUser && user.id === currentUser.id;

    if (isPrivate && !isCakeOwner) {
      popup.show({
        title: `비밀 케이크는\n받은 사람만 볼 수 있어요`,
        hideCancel: true,
        bottomNode: (
          <p
            onClick={() => {
              router.push('/');
              popup.hide();
            }}
            className="mt-5 text-b3 text-gray-800 underline">
            {POPUP_MESSAGE}
          </p>
        ),
      });
      return;
    }

    setIsCakeFace((p) => !p);
  }, [currentUser, isPrivate, popup, router, user.id]);

  const cardProps: ComponentProps<typeof Card> = useMemo(
    () => ({
      content: `Dear. ${user.rollingCakeName}`,
      button: {
        label: isCakeFace ? '편지 읽어보기' : '케이크 보기',
        onButtonClicked: handleToggleCake,
      },
    }),
    [isCakeFace, user, handleToggleCake],
  );

  return (
    <section className="grid flex-1 place-items-center px-[8%] py-[10%]">
      <div
        className={cn('transform-style-3d h-full w-full duration-500', {
          'rotate-y-180': !isCakeFace,
        })}>
        {/* front */}
        <Card className="backface-hidden z-10" {...cardProps}>
          <Model
            cake={customCake ? (customCake as CustomCake) : (themeCake as ThemeCake)}
            show={customCake ? 'custom' : 'theme'}
            isRotate
          />
        </Card>

        {/* back */}
        <Card className="backface-hidden rotate-y-180" {...cardProps}>
          <p className="h-full w-full overflow-auto whitespace-pre-line break-keep p-3 text-center font-neo text-effect_b">
            {content}
          </p>
        </Card>
      </div>
    </section>
  );
};

export default CakeCard;
