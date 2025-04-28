'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { useSnackbar } from '@lib/provider/SnackbarProvider';

import CircleButton from './CircleButton';

type Props = {
  show?: ('<' | 'upload' | 'home')[];
  className?: string;
};

const Navigation = ({ show, className }: Props) => {
  const router = useRouter();
  const snackbar = useSnackbar();

  const [hasBack, hasUpload, hasHome] = [
    show?.includes('<') ?? true,
    show?.includes('upload') ?? true,
    show?.includes('home') ?? true,
  ];

  const onBackClicked = useCallback(() => {
    router.back();
  }, [router]);

  const onHomeClicked = useCallback(() => {
    router.push('/');
  }, [router]);

  const onUploadClicked = useCallback(() => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      snackbar.show('링크를 복사했어요! SNS에 붙여넣어 공유해봐요');
    } else {
      // This is only work at dev
      snackbar.show('일시적인 에러가 발생했어요.');
    }
  }, [snackbar]);

  return (
    <nav
      className={`h-[72px] left-0 top-0 z-50 mx-auto mb-5 flex w-full justify-between px-[20px] pt-[38px] ${className}`}>
      {hasBack && <CircleButton type="<" onClick={onBackClicked} />}
      <div className="flex items-center justify-center gap-3">
        {hasUpload && <CircleButton type="upload" onClick={onUploadClicked} />}
        {hasHome && <CircleButton type="home" onClick={onHomeClicked} />}
      </div>
    </nav>
  );
};

export default Navigation;
