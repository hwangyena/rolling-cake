import { useDebounce } from '@/lib/hooks/common';
import { useStep } from '@/lib/hooks/make';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { useStepValidation } from '@app/(pages)/make/[userId]/_provider';

import Lock from '../style/Lock';
import ShadowCard from '../style/ShadowCard';

const StepLetter = () => {
  const {
    store: { letter },
    onStoreUpdate,
  } = useStep();
  const validation = useStepValidation();

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [lock, setLock] = useState(false);

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
      validation.invalidate();
      return;
    }

    validation.validate();
  }, [name, content, validation]);

  const handleToggleLock = () => {
    setLock((p) => !p);
    onStoreUpdate({ isPrivate: !lock });
  };

  return (
    <article className="flex h-[75%] flex-col px-5 py-4 pt-8">
      <ShadowCard className="grid h-full flex-col grid-cols-[3fr_1fr] grid-rows-[54px_1fr]">
        <div className="relative flex items-center pt-[19px] border-b border-r border-grayscale-gray5 px-[16px] pb-[15px]">
          <input
            type="text"
            placeholder="너의 이름을 알려줘"
            value={name}
            onChange={(e) => {
              checkChangeName.current = true;
              setName(e.target.value.slice(0, 5));
            }}
            className={`w-full rounded-none text-b1 text-gray-700`}
          />
          {/* <span className={'absolute right-0 pb-5 text-cap font-bold text-gray-500'}>
            {name.length} / 5
          </span> */}
        </div>
        <div className="border-b border-grayscale-gray5 flex gap-1 justify-center items-center">
          <span className="text-b3 text-grayscale-gray7">비밀편지</span>
          <button className="mt-[-2px]" onClick={handleToggleLock}>
            <Lock unlock={!lock} />
          </button>
        </div>
        <div className="relative py-[17px] px-[14px] col-span-full">
          <textarea
            className={'h-full w-full resize-none text-b2 text-gray-700'}
            placeholder="편지를 써볼까?"
            value={content}
            onChange={(e) => {
              checkChangeContent.current = true;
              setContent(e.target.value);
            }}
          />
        </div>
      </ShadowCard>
    </article>
  );
};

export default StepLetter;
