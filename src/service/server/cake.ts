import prisma from '@/lib/prismadb';

import 'server-only';

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
    //FIXME: error handling
    return null;
  }
}
