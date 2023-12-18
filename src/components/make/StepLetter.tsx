import { useDebounce } from '@/hooks/common';
import { stepValidAtom } from '@/lib/store';
import { useSetAtom } from 'jotai';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import Lock from '../style/Lock';
import ShadowCard from '../style/ShadowCard';
import { useStepStore } from '@/hooks/make';

const StepLetter = () => {
  const {
    store: { letter },
    onStoreUpdate,
  } = useStepStore();
  const dispatchValid = useSetAtom(stepValidAtom);

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [lock, setLock] = useState(true);

  const debounceName = useDebounce(name);
  const debounceContent = useDebounce(content);

  const syncStore = useRef(false);
  const checkChangeName = useRef(false);
  const checkChangeContent = useRef(false);

  // update state by store
  useLayoutEffect(() => {
    if (!letter.name && !letter.content && letter.isPrivate) {
      return;
    }

    if (syncStore.current) {
      return;
    }

    const { content, isPrivate, name } = letter;

    name && setName(name);
    content && setContent(content);
    setLock(isPrivate);

    syncStore.current = true;
  }, [letter]);

  // update store
  useEffect(() => {
    if (!checkChangeName.current) {
      return;
    }

    if (letter.name !== debounceName) {
      onStoreUpdate({ name: debounceName });
    }
  }, [debounceName, onStoreUpdate, name, letter.name]);

  useEffect(() => {
    if (!checkChangeContent.current) {
      return;
    }

    if (letter.content !== debounceContent) {
      onStoreUpdate({ content: debounceContent });
    }
  }, [debounceContent, onStoreUpdate, letter.content]);

  // next button disabled
  useEffect(() => {
    if (!name || !content) {
      dispatchValid(true);
      return;
    }

    dispatchValid(false);
  }, [name, content, dispatchValid]);

  const handleToggleLock = () => {
    setLock((p) => !p);
    onStoreUpdate({ isPrivate: !lock });
  };

  return (
    <article className="flex h-full flex-col px-5 py-4 pt-5">
      <ShadowCard className="flex h-full flex-col px-5 py-5">
        <section className="relative flex items-center">
          <input
            type="text"
            placeholder="당신의 이름을 알려주세요"
            value={name}
            onChange={(e) => {
              checkChangeName.current = true;
              setName(e.target.value.slice(0, 5));
            }}
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
            onChange={(e) => {
              checkChangeContent.current = true;
              setContent(e.target.value);
            }}
          />
        </section>
        <section className="mt-3 flex justify-between">
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
