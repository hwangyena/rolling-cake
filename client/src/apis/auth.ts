import useSWRMutation from 'swr/mutation';
import { axiosRequest, setLocalStorage } from './fetcher';
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { userAtom } from '@/lib/store';

export const useLogin = () => {
  const { trigger, data } = useSWRMutation('/login', (url, { arg }: { arg: string }) =>
    axiosRequest<Login>({
      url,
      method: 'post',
      data: { code: arg },
    })
  );
  const dispatchUser = useSetAtom(userAtom);

  useEffect(() => {
    if (!data) {
      return;
    }

    setLocalStorage('rollingCake/user', data.content);
    dispatchUser({ userId: data.content.userId, userName: data.content.userName });
  }, [data, dispatchUser]);

  return { trigger, data };
};
