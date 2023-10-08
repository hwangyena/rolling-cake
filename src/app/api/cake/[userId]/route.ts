import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { userId?: string } }) {
  const { userId } = params;

  if (!userId) {
    throw new Error('[API Error] Invalid userId');
  }

  const cakes = await prisma?.cake.findMany({
    where: { userId },
  });

  return NextResponse.json(cakes);
}
