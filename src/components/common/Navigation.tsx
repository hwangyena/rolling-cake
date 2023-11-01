'use client';

import { useRouter } from 'next/navigation';
import CircleButton from './CircleButton';
import { useCallback } from 'react';
import { useSetAtom } from 'jotai';
import { snackBarAtom } from '@/lib/store';

type Props = {
  show?: ('<' | 'upload' | 'home')[];
  className?: string;
};

const Navigation = ({ show, className }: Props) => {
  const router = useRouter();

  const dispatch = useSetAtom(snackBarAtom);

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
    dispatch({
      text: '링크를 복사했어요! SNS에 붙여넣어 공유해봐요',
    });
    navigator.clipboard.writeText(window.location.href);
  }, [dispatch]);

  return (
    <nav
      className={`left-0 top-0 z-50 mx-auto mb-5 flex w-full justify-between px-[5%] pt-[7%] ${className}`}>
      {hasBack && <CircleButton type="<" onClick={onBackClicked} />}
      <div className="flex items-center justify-center gap-3">
        {hasUpload && <CircleButton type="upload" onClick={onUploadClicked} />}
        {hasHome && <CircleButton type="home" onClick={onHomeClicked} />}
      </div>
    </nav>
  );
};

export default Navigation;
