import type { Cake as CakeType } from '@prisma/client';

export default async function getCakes(userId: string) {
  return (await fetch(`${process.env.NEXTAUTH_URL}/api/cake/${userId}`, {
    method: 'GET',
    cache: 'no-store', // FIXME: to ISR
  }).then((res) => res.json())) as Promise<CakeType[]>;
}
