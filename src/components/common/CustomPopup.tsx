import Image from 'next/image';
import { PropsWithChildren, memo, useEffect } from 'react';

import ShadowCard from '../style/ShadowCard';

const CustomPopup = ({ content, title, hasIcon, onConfirm }: CustomPopup) => {
  // open terms page
  useEffect(() => {
    const termsElement = document.querySelector('#terms') as HTMLElement;

    if (!termsElement) {
      return;
    }

    const handleTermsClicked = () => {
      window.open('https://yesmesecret.notion.site/e8db1bedb4074a2b89bd754dcd440c07?pvs=4');
    };

    termsElement.addEventListener('click', handleTermsClicked);
    return () => termsElement.removeEventListener('click', handleTermsClicked);
  }, []);

  return (
    <Wrapper type={title}>
      <article className="items-top flex h-[24px] w-full justify-between rounded-t-lg bg-pink-200 px-[6px] pt-[2px] font-neo text-effect_b">
        <span className="text-white">{title}</span>
        <button
          className={`black-shadow relative flex aspect-square h-[80%] items-center justify-center rounded-md bg-white before:h-[60%] before:w-[2px] before:rotate-90 before:bg-black before:content-[""]`}
          onClick={onConfirm}
        />
      </article>
      <article className="flex gap-3 px-3 py-5 text-b2">
        {hasIcon && (
          <div className="relative aspect-square w-[25%]">
            <Image src={'/images/custom-alert.png'} alt="icon" fill></Image>
          </div>
        )}
        <p className="flex-1" dangerouslySetInnerHTML={{ __html: content ?? '' }} />
      </article>
      <article className="flex w-full justify-center pb-3">
        <button className="black-shadow rounded-2xl px-[24px] py-[5px] text-b3" onClick={onConfirm}>
          확인
        </button>
      </article>
      <div className="dimmed" />
    </Wrapper>
  );
};

const Wrapper = ({ children, type }: PropsWithChildren<{ type: CustomPopup['title'] }>) => {
  if (type === 'Alert') {
    return (
      <ShadowCard className="absolute bottom-[20px] right-[20px] w-[80%] rounded-lg p-[4px]">
        {children}
      </ShadowCard>
    );
  }

  if (type === 'Welcome!') {
    return (
      <div className="absolute bottom-3 flex w-full items-end justify-center px-3 pb-7">
        <ShadowCard className="h-fit w-full rounded-lg p-[4px] text-center">{children}</ShadowCard>
      </div>
    );
  }

  return <>{children}</>;
};

export default memo(CustomPopup);
