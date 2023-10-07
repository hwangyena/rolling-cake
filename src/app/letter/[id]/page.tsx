import ClientOnly from '@/components/ClientOnly';
import LetterClient from './LetterClient';

export default function CakeDetail() {
  return (
    <ClientOnly>
      <LetterClient />
    </ClientOnly>
  );
}
