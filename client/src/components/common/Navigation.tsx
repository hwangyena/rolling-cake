'use client';

import { useRouter } from 'next/navigation';
import CircleButton from './CircleButton';
import { useCallback } from 'react';

const Navigation = () => {
  const router = useRouter();

  const onBackClicked = useCallback(() => {
    router.back();
  }, [router]);

  const onHomeClicked = useCallback(() => {
    router.push('/');
  }, [router]);

  // TODO: onUploadClicked

  return (
    <nav className="pt-[7%] px-[5%] absolute left-0 top-0 w-full flex justify-between">
      <CircleButton type="<" onClick={onBackClicked} />
      <div className="flex justify-center items-center gap-3">
        <CircleButton type="upload" />
        <CircleButton type="home" onClick={onHomeClicked} />
      </div>
    </nav>
  );
};

export default Navigation;
