'use client';

import Button from '@/components/common/Button';
import { axiosRequest } from '@/lib/fetcher';
import { useState } from 'react';

export default function Page() {
  const [userId, setUserId] = useState('6527902521afa7b5a2b1b03e');

  const handleCakeRemove = async () => {
    if (!userId) {
      return;
    }

    const req = await axiosRequest({ url: `/api/cake?userId=${userId}`, method: 'delete' });

    return req;
  };

  return (
    <div className="p-3">
      <h1 className="text-lg font-bold">Cake 정보 지우기</h1>
      <label className="w-full">
        userId
        <input
          className="border border-black w-full bg-slate-200"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </label>

      <Button type="SMALL" color="gray" onClick={handleCakeRemove}>
        전체 cake 삭제하기
      </Button>
    </div>
  );
}