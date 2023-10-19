import getCurrentUser from '@/actions/getCurrentUser';
import prisma from '@/lib/prismadb';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import { NextResponse } from 'next/server';

export async function GET() {
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

  return user;
}

export async function PUT(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { name } = body;

  if (!name) {
    NextResponse.error();
  }

  const user = await prisma.user.update({
    data: { rollingCakeName: name },
    where: { id: currentUser.id },
  });

  return NextResponse.json(user);
}
