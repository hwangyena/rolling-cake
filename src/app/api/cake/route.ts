import prisma from '@/lib/prismadb';
import { DataURIToBlob } from '@/lib/utils';
import { S3Client } from '@aws-sdk/client-s3';
import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const contentType = 'image/png';

export async function POST(request: Request) {
  const body = await request.json();
  const { type, cake, userId, letter, cakeImageBase64 } = body as CreateCakeReq;

  if (!type || !letter || !cake || !userId || !prisma) {
    return NextResponse.error();
  }

  try {
    // S3 image upload
    const client = new S3Client({
      region: process.env.AWS_REGION,
    });
    const key = uuidv4();

    const { url, fields } = await createPresignedPost(client, {
      Bucket: process.env.AWS_BUCKET_NAME ?? '',
      Key: `images/${key}`,
      Conditions: [
        ['content-length-range', 0, 10485760], // up to 10 MB
        ['starts-with', '$Content-Type', contentType],
      ],
      Fields: {
        'Content-Type': contentType,
        acl: 'public-read',
      },
      Expires: 600, // Seconds before the presigned post expires. 3600 by default.
    });

    const formData = new FormData();
    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    formData.append('file', DataURIToBlob(cakeImageBase64));

    await fetch(url, {
      method: 'POST',
      body: formData,
    });

    // create Cake
    const cakeImageUrl = `${url}images/${key}`;
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
      data: {
        userId,
        cakeType: type,
        name,
        content,
        isPrivate,
        themeCake,
        customCake,
        cakeImageUrl,
      },
    });

    return NextResponse.json(cakeRes);
  } catch (error) {
    console.error(error);
    return Response.json({ error });
  }
}

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
