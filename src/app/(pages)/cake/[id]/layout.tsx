import GradientContainer from '@/components/GradientContainer';
import Loading from '@/components/common/Loading';
import { Metadata, ResolvingMetadata } from 'next';
import { PropsWithChildren, Suspense } from 'react';

import { getUser } from '@service/user';

import { getCakes } from './_lib';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = (await params).id;
  const [user, cakes, previous] = await Promise.all([getUser(id), getCakes(id), parent]);
  const previousOg = previous.openGraph ?? {};

  if (!user) {
    return {
      title: '사용자를 찾을 수 없습니다.',
      description: '존재하지 않는 사용자입니다.',
    };
  }

  return {
    title: `${user.name}의 롤링케이크`,
    description: `${cakes.length}개의 케이크와 편지 도착!`,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      ...previousOg,
      title: `${user.name}의 롤링케이크`,
      description: `${cakes.length}개의 케이크와 편지 도착!`,
    },
  };
}

export default function Layout({ children }: PropsWithChildren) {
  // FIXME: remove unless suspense
  return (
    <GradientContainer type="gridWithGradient">
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </GradientContainer>
  );
}
