'use client';

import { memo, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import { SmallButton } from './Button';

export type FocusInput = {
  label: string;
  maxLength: number;
  onConfirm: (value: string) => Promise<void>;
  onCancel: () => void;
  defaultValue?: string;
  autoSize?: boolean;
};

const FocusInput = ({
  label,
  autoSize,
  defaultValue,
  maxLength,
  onConfirm,
  onCancel,
}: FocusInput) => {
  const [text, setText] = useState(defaultValue ?? '');

  return (
    <div className="absolute left-0 top-0 h-full w-full">
      <div className="relative z-50 mt-[30%]">
        <section className="flex flex-col items-center gap-4 px-[5%] text-white">
          <h4 className="text-b2 text-white">{label}</h4>
          {autoSize ? (
            <TextareaAutosize
              rows={1}
              value={text}
              className="focus-input overflow-hidden"
              onChange={(e) => {
                setText(e.target.value.slice(0, maxLength));
              }}
            />
          ) : (
            <input
              type="text"
              value={text}
              className="focus-input"
              onChange={(e) => {
                setText(e.target.value.slice(0, maxLength));
              }}
            />
          )}
          <span className="text-b3">
            {text.length}/{maxLength}
          </span>
        </section>
        <section className="mt-12 flex items-center justify-center gap-5">
          <SmallButton color="gray" onClick={onCancel}>
            취소
          </SmallButton>
          <SmallButton
            color="pink"
            onClick={() => {
              onConfirm(text);
              onCancel();
            }}>
            확인
          </SmallButton>
        </section>
      </div>

      <div className="absolute bottom-0 left-0 right-0 top-0 z-20 bg-black opacity-[0.8]" />
    </div>
  );
};

export default memo(FocusInput);
