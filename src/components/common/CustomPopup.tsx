import Image from 'next/image';
import { PropsWithChildren, memo, useEffect } from 'react';

import ShadowCard from '../style/ShadowCard';
import { SmallButton } from './Button';

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
      <div className="items-top flex w-full justify-between rounded-t-lg bg-secondary-pink-50 px-[7px] py-[6px]">
        <span className=" font-neo text-effect_b text-white">{title}</span>
        <button
          className={`black-shadow relative flex w-[18px] h-[18px] items-center justify-center rounded-md bg-white before:h-[60%] before:w-[2px] before:rotate-90 before:bg-black before:content-[""]`}
          onClick={onConfirm}
        />
      </div>
      <div className="px-[10px] py-[20px]">
        <div className="flex gap-3 text-b2 items-center justify-center">
          {hasIcon && (
            <div className="relative aspect-square w-[25%]">
              <Image src={'/images/custom-alert.png'} alt="icon" fill></Image>
            </div>
          )}
          <p dangerouslySetInnerHTML={{ __html: content ?? '' }} />
        </div>
        <button
          className="black-shadow rounded-2xl px-[22px] py-[7px] text-btn2 font-bold mt-[10px]"
          onClick={onConfirm}>
          확인
        </button>
      </div>
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
      <div className="absolute bottom-3 flex w-full items-end justify-center px-[30px] pb-[50px]">
        <ShadowCard className="h-fit w-full rounded-lg p-[4px] text-center">{children}</ShadowCard>
      </div>
    );
  }

  return <>{children}</>;
};

export default memo(CustomPopup);
