import { NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';

export async function POST(request: Request) {
  const body = await request.json();
  const { type, cake, userId, letter } = body;

  if (!type || !letter || !cake || !userId || !prisma) {
    NextResponse.error();
    return;
  }

  const { content, name, isPrivate } = letter as Letter;

  let customCake: CustomCake | null = null;
  let themeCake: ThemeCake | null = null;

  if (type === 'CUSTOM') {
    customCake = cake as CustomCake;
  } else {
    themeCake = cake as ThemeCake;
  }

  if (type === 'CUSTOM' && !customCake) {
    NextResponse.error();
  }
  if (type === 'THEME' && !themeCake) {
    NextResponse.error();
  }

  const cakeRes = await prisma.cake.create({
    data: { userId, cakeType: type, name, content, isPrivate, themeCake, customCake },
  });

  return NextResponse.json(cakeRes);
}
