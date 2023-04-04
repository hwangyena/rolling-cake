import { axiosRequest } from '@/lib/fetcher';
import { setLocalStorage } from '@/lib/store';

export const getToken = async (token: string) => {
  const tokenRequestParams: TokenRequest = {
    grant_type: 'authorization_code',
    client_id: process.env.NEXT_PUBLIC_REST_API_KEY,
    redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URL,
    code: token,
  };

  const res = await axiosRequest<TokenResponse>({
    method: 'post',
    url: '/oauth/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    data: tokenRequestParams,
  });

  setLocalStorage('LOCAL_TOKEN', res);
};
