import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    throw new Error('[API Error] Invalid userId');
  }

  const cakes = await prisma.cake.deleteMany({
    where: { userId },
  });

  return NextResponse.json(cakes);
}
