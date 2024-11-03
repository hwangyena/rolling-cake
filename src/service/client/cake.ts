'use client';

import useSWRMutation from 'swr/mutation';

/** OTHER */
export function useCreateCake() {
  return useSWRMutation(
    '/api/cake',
    async function fetcher(url: string, { arg }: { arg: CreateCakeReq }) {
      return await fetch(url, {
        method: 'POST',
        body: JSON.stringify(arg),
      });
      // }).then((res) => res.json() as Promise<Cake>);
    },
  );
}
