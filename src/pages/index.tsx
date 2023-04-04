import { Inter } from '@next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      rolling cake
      <button className='w-full h-[70px] rounded-lg relative bg-slate-300'>
        <Image
          src={'/images/kakao_login_large_wide.png'}
          alt='kakao_login'
          fill
        />
      </button>
    </>
  );
}
