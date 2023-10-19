import { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';

import prisma from '@/lib/prismadb';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { User } from '@prisma/client';

export async function getSession() {
  return await getServerSession({ ...authOptions, secret: process.env.NEXTAUTH_SECRET });
}

export default async function getCurrentUser() {
  try {
    const session = (await getSession()) as Session;

    if (!session?.user?.id) {
      return null;
    }

    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id as string,
      },
    });

    if (!user) {
      return null;
    }

    return user as User;
  } catch (e) {
    return null;
  }
}
