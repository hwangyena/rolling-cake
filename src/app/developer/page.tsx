'use client';

import Button from '@/components/common/Button';
import Tag from '@/components/common/Tag';
import { popupAtom } from '@/lib/store';
import { useSetAtom } from 'jotai';

export default function Page() {
  const dispatchPopup = useSetAtom(popupAtom);

  return (
    <div className="p-3">
      <h1>Developer</h1>
      <button onClick={() => dispatchPopup({ title: 'test', content: 'testetset' })}>popup</button>
      <Button.BigButton disabled>popup</Button.BigButton>
      <Button.SmallButton color="gray">popup</Button.SmallButton>
      <Tag> hello!!</Tag>
    </div>
  );
}
