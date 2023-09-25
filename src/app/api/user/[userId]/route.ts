import { NextResponse } from 'next/server';

type Params = {
  userId?: string;
};

export async function GET(request: Request, { params }: { params: Params }) {
  const { userId } = params;

  if (!userId) {
    throw new Error('[API Error] Invalid userId');
  }

  const user = await prisma?.user.findUnique({
    where: {
      id: userId,
    },
  });

  return NextResponse.json(user);
}
