import prisma from '@/lib/prismadb';
import useSWRMutation from 'swr/mutation';

/** GET */
export async function getCake(cakeId: string) {
  try {
    const cake = await prisma.cake.findUnique({
      where: { id: cakeId },
    });

    if (!cake) {
      return null;
    }

    return cake;
  } catch (error) {
    return null;
  }
}

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
