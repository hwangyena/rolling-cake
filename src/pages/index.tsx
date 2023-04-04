import { getToken } from '@/apis/auth';
import LoginButton from '@/components/LoginButton';
import { Inter } from '@next/font/google';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const { code } = router.query;

    if (code) {
      Promise.all([getToken(code as string)]).then(() => {
        router.replace('/');
      });
    }
  }, [router]);

  return (
    <>
      rolling cake
      <LoginButton />
    </>
  );
}
