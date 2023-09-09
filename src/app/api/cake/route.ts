import getCurrentUser from '@/actions/getCurrentUser';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  console.log('request', request);
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.error();
  }

  const cakes = await prisma?.cake.findMany({
    where: { userId: user.id },
  });

  return NextResponse.json(cakes);
}
