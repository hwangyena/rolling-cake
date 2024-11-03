import prisma from '@/lib/prismadb';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { User } from '@prisma/client';
import { Session, getServerSession } from 'next-auth';

export async function getUser(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return null;
    }

    return user;
  } catch (e) {
    return null;
  }
}

export async function getCurrentUser() {
  const _getSession = async () => {
    return await getServerSession({ ...authOptions, secret: process.env.NEXTAUTH_SECRET });
  };

  try {
    const session = (await _getSession()) as Session;

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
