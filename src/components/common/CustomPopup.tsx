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
      <article className="items-top flex h-[24px] w-full justify-between rounded-t-lg bg-pink-200 px-[6px] pt-[2px] font-neo text-effect_b">
        <span className="text-white">{title}</span>
        <button className={`black-shadow ${styles['minus-button']}`} onClick={onConfirm} />
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
      <div className="card absolute bottom-[20px] right-[20px] w-[80%] rounded-lg p-[4px]">
        {children}
      </div>
    );
  }

  if (type === 'Welcome!') {
    return (
      <div className="relative flex w-full items-end justify-center px-3 pb-7">
        <div className="card h-fit w-full rounded-lg p-[4px] text-center">{children}</div>
      </div>
    );
  }

  return <>{children}</>;
};

export default memo(CustomPopup);
