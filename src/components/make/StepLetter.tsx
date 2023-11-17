import { useEvent } from '@/hooks/common';
import { stepValidAtom } from '@/lib/store';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

import Lock from '../style/Lock';
import ShadowCard from '../style/ShadowCard';
import { useStepStore } from '@/hooks/make';

const StepLetter = () => {
  const { store, onStoreUpdate } = useStepStore();
  const dispatchValid = useSetAtom(stepValidAtom);

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [lock, setLock] = useState(true);

  useEvent('make:next-step', () => {
    onStoreUpdate({
      name,
      content,
      isPrivate: lock,
    });
  });

  useEffect(() => {
    const { name, content, isPrivate: lock } = store.letter;

    setName(name);
    setContent(content);
    setLock(lock);

    return () => {
      dispatchValid(false);
    };
  }, [dispatchValid, store]);

  useEffect(() => {
    if (!name || !content) {
      dispatchValid(true);
      return;
    }

    dispatchValid(false);
  }, [content, dispatchValid, name]);

  const handleToggleLock = () => {
    setLock((p) => !p);
  };

  return (
    <article className="flex h-full flex-col px-5 py-4 pt-5">
      <ShadowCard className="flex h-full flex-col px-5 py-5">
        <section className="relative flex items-center">
          <input
            type="text"
            placeholder="당신의 이름을 알려주세요"
            value={name}
            onChange={(e) => setName(e.target.value.slice(0, 5))}
            className={`w-full rounded-none border-b border-gray-500 pb-5 text-b1 text-gray-700`}
          />
          <span className={'absolute right-0 pb-5 text-cap font-bold text-gray-500'}>
            {name.length} / 5
          </span>
        </section>
        <section className="relative mt-5 h-[80%]">
          <textarea
            className={'h-full w-full resize-none text-b2 text-gray-700'}
            maxLength={200}
            placeholder="편지 내용을 작성해볼까?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </section>
        <section className="flex justify-between">
          <button
            className="flex items-center justify-center gap-2 text-b3 text-gray-600"
            onClick={handleToggleLock}>
            비밀 롤링케이크
            <Lock unlock={!lock} />
          </button>
          <span className="text-cap font-bold text-gray-500">{content.length} / 200</span>
        </section>
      </ShadowCard>
    </article>
  );
};

export default StepLetter;
