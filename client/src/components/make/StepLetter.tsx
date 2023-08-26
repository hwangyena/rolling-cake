import { useState } from 'react';
import styles from '@/styles/page.module.css';

const StepLetter = () => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  return (
    <article className="px-5 pt-5 py-4 flex flex-col h-full">
      <div className="card h-full py-5 px-3 flex flex-col">
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
        <section className="mt-7 relative h-[80%]">
          <textarea
            className={`${styles['letter-content']} text-b2 text-gray-700 resize-none w-full h-full`}
            maxLength={200}
            placeholder="편지 내용을 작성해볼까?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </section>
        <section className="flex justify-between">
          {/* TODO: add lock icon with animation */}
          <button className="text-gray-600 text-b3">비밀 롤링케이크</button>
          <span className={`${styles['input-count']} `}>{content.length} / 200</span>
        </section>
      </div>
    </article>
  );
};

export default StepLetter;
