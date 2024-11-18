import { getLocalStorage, setLocalStorage } from '@/lib/store';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export const useSaveUserId = () => {
  const params = useParams();

  useEffect(() => {
    const savedUserId = getLocalStorage<string>('rolling-cake:userId');
    const currentUserId = (params as { id: string }).id;

    if (savedUserId && savedUserId === currentUserId) {
      return;
    }

    setLocalStorage('rolling-cake:userId', currentUserId);
  }, [params]);
};
