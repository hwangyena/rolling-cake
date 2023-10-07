import ClientOnly from '@/components/ClientOnly';
import LetterClient from './LetterClient';
import getCake from '@/actions/getCake';

export default async function CakeDetail({ params }: { params: { id: string } }) {
  const cake = await getCake(params.id);

  // TODO: error console
  if (!cake) {
    return <>error!</>;
  }

  return (
    <ClientOnly>
      <LetterClient {...cake} />
    </ClientOnly>
  );
}
