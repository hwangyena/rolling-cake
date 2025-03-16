import GradientContainer from '@/components/GradientContainer';
import Navigation from '@/components/common/Navigation';
import { Metadata, ResolvingMetadata } from 'next';
import { PropsWithChildren } from 'react';

import { getCake } from './_service';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = (await params).id;
  const cake = await getCake(id);
  const previousOg = (await parent).openGraph ?? {};

  if (!cake) {
    return {
      title: '편지를 찾을 수 없습니다.',
      description: '존재하지 않는 편지입니다.',
    };
  }

  return {
    title: `${cake.name}표 롤링케이크와 편지를 확인해보r!`,
    description: `${cake.name}님이 보낸 롤링케이크를 확인해보세요.`,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      ...previousOg,
      title: `${cake.name}표 롤링케이크와 편지를 확인해보r!`,
      description: `${cake.name}님이 보낸 롤링케이크를 확인해보세요.`,
    },
  };
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <GradientContainer type="grid" className="flex flex-col">
      <Navigation show={['<']} />
      {children}
    </GradientContainer>
  );
}
