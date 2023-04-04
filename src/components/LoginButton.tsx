import Image from 'next/image';

const LoginButton = () => {
  return (
    <a
      href={`/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}`}
    >
      <button className='w-full h-[70px] rounded-lg relative bg-slate-300'>
        <Image
          src={'/images/kakao_login_large_wide.png'}
          alt='kakao_login'
          fill
        />
      </button>
    </a>
  );
};

export default LoginButton;
