import { useAtom } from 'jotai';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

import { userIdStore } from '@lib/store';

export const useSaveUserId = () => {
  const params = useParams();
  const [userId, dispatch] = useAtom(userIdStore);

  useEffect(() => {
    const currentUserId = (params as { id: string }).id;

    if (userId === currentUserId) {
      return;
    }
    dispatch(currentUserId);
  }, [dispatch, params, userId]);
};
