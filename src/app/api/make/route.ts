import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';
import { DataURIToBlob } from '@/lib/utils';

const contentType = 'image/png';

export async function POST(request: Request) {
  const body = await request.json();
  const { type, cake, userId, letter, cakeImageBase64 } = body as CreateCakeReq;

  // if (!type || !letter || !cake || !userId || !prisma) {
  //   NextResponse.error();
  //   return;
  // }

  try {
    // const { content, name, isPrivate } = letter as Letter;

    // let customCake: CustomCake | null = null;
    // let themeCake: ThemeCake | null = null;

    // if (type === 'CUSTOM') {
    //   customCake = cake as CustomCake;
    // } else {
    //   themeCake = cake as ThemeCake;
    // }

    // if (type === 'CUSTOM' && !customCake) {
    //   NextResponse.error();
    // }
    // if (type === 'THEME' && !themeCake) {
    //   NextResponse.error();
    // }

    // // create cake
    // const cakeRes = await prisma.cake.create({
    //   data: { userId, cakeType: type, name, content, isPrivate, themeCake, customCake },
    // });

    // return NextResponse.json(cakeRes);

    // S3 url 받아오기
    const client = new S3Client({
      region: process.env.AWS_REGION,
    });

    const { url, fields } = await createPresignedPost(client, {
      Bucket: process.env.AWS_BUCKET_NAME ?? '',
      Key: uuidv4(), ///// FIXME: use this
      Conditions: [
        ['content-length-range', 0, 10485760], // up to 10 MB
        ['starts-with', '$Content-Type', contentType],
      ],
      Fields: {
        'Content-Type': contentType,
      },
      Expires: 600, // Seconds before the presigned post expires. 3600 by default.
    });

    const formData = new FormData();
    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    formData.append('file', DataURIToBlob(cakeImageBase64));

    const res = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    return Response.json({ res });
  } catch (error) {
    return Response.json({ error });
  }
}
