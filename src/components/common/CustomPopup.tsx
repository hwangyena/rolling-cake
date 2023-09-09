import styles from '@/styles/component.module.css';

import Image from 'next/image';
import { PropsWithChildren, memo, useEffect } from 'react';

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

  useEffect(() => {
    const handleClickEvent = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    document.addEventListener('click', handleClickEvent);
    return () => document.removeEventListener('click', handleClickEvent);
  });

  return (
    <Wrapper type={title}>
      <article className="text-effect_b bg-pink-200 rounded-t-lg font-neo px-[6px] pt-[2px] w-full h-[24px] flex justify-between items-top">
        <span className="text-white">{title}</span>
        <button className={`black-shadow ${styles['minus-button']}`} onClick={onConfirm} />
      </article>
      <article className="flex py-5 gap-3 px-3 text-b2">
        {hasIcon && (
          <div className="relative w-[25%] aspect-square">
            <Image src={'/images/custom-alert.png'} alt="icon" fill></Image>
          </div>
        )}
        <p className="flex-1" dangerouslySetInnerHTML={{ __html: content ?? '' }} />
      </article>
      <article className="w-full flex justify-center pb-3">
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
      <div className="card p-[4px] rounded-lg fixed right-[20px] bottom-[20px] w-[80%]">
        {children}
      </div>
    );
  }

  if (type === 'Welcome!') {
    return (
      <div className="relative w-full h-full flex justify-center items-end pb-7 px-3">
        <div className="card p-[4px] rounded-lg text-center h-fit w-full">{children}</div>
      </div>
    );
  }

  return <>{children}</>;
};

export default memo(CustomPopup);
