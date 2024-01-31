import prisma from '@/lib/prismadb';
import { getCurrentUser } from '@/service/server/user';
import { NextResponse } from 'next/server';

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
