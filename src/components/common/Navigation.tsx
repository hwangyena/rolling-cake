'use client';

import { useRouter } from 'next/navigation';
import CircleButton from './CircleButton';
import { useCallback } from 'react';

type Props = {
  show?: ('<' | 'upload' | 'home')[];
};

const Navigation = ({ show }: Props) => {
  const router = useRouter();

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

  // TODO: onUploadClicked

  return (
    <nav className="pt-[7%] px-[5%] absolute left-0 top-0 w-full flex justify-between">
      {hasBack && <CircleButton type="<" onClick={onBackClicked} />}
      <div className="flex justify-center items-center gap-3">
        {hasUpload && <CircleButton type="upload" />}
        {hasHome && <CircleButton type="home" onClick={onHomeClicked} />}
      </div>
    </nav>
  );
};

export default Navigation;