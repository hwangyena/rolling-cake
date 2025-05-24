'use client';

import { User } from 'next-auth';
import useSWRMutation from 'swr/mutation';

export default function useUpdateUserName() {
  return useSWRMutation(
    '/api/user',
    async function fetcher(url: string, { arg }: { arg: { name: string } }) {
      return await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(arg),
      }).then((res) => res.json() as Promise<User>);
    },
  );
}
