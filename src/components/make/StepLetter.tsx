import { useEvent } from '@/hooks/common';
import { useStep } from '@/hooks/make';
import { stepValidAtom } from '@/lib/store';
import { cn } from '@/lib/utils';
import styles from '@/styles/page.module.css';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

const StepLetter = () => {
  const { store, onUpdate } = useStep();
  const dispatchValid = useSetAtom(stepValidAtom);

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [lock, setLock] = useState(true);

  useEvent('make:next-step', () => {
    onUpdate({
      name,
      content,
      isPrivate: lock,
    });
  });

  useEffect(() => {
    const {
      name,
      content,
      isPrivate: lock,
    } = store.get('letter') as {
      name: string;
      content: string;
      isPrivate: boolean;
    };

    // FIXME: 저장 안됨 확인 필요
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
      <div className="card flex h-full flex-col px-5 py-5">
        <section className="relative flex items-center">
          <input
            type="text"
            placeholder="당신의 이름을 알려주세요"
            value={name}
            onChange={(e) => setName(e.target.value.slice(0, 5))}
            className={`${styles['letter-name']} text-b1 text-gray-700`}
          />
          <span className={styles['input-count']}>{name.length} / 5</span>
        </section>
        <section className="relative mt-5 h-[80%]">
          <textarea
            className={`${styles['letter-content']} h-full w-full resize-none text-b2 text-gray-700`}
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
            <div className={cn(styles.lock, { [styles.unlock]: !lock })} />
          </button>
          <span className={`${styles['input-count']} `}>{content.length} / 200</span>
        </section>
      </div>
    </article>
  );
};

export default StepLetter;
