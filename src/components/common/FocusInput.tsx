'use client';

import { focusInputAtom } from '@/lib/store';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import Button from './Button';

const FocusInput = () => {
  const [value, dispatch] = useAtom(focusInputAtom);

  const [text, setText] = useState('');

  useEffect(() => {
    if (value?.defaultValue) {
      setText(value.defaultValue);
    }
  }, [value]);

  return (
    <div className="absolute left-0 top-0 h-full w-full">
      <div className="relative z-50 mt-[30%]">
        <section className="flex flex-col items-center gap-4 px-[5%] text-white">
          <h4 className="text-b2 text-white">{value?.label}</h4>
          {value?.autoSize ? (
            <TextareaAutosize
              rows={1}
              value={text}
              className="focus-input overflow-hidden"
              onChange={(e) => {
                setText(e.target.value.slice(0, value?.maxLength));
              }}
            />
          ) : (
            <input
              type="text"
              value={text}
              className="focus-input"
              onChange={(e) => {
                setText(e.target.value.slice(0, value?.maxLength));
              }}
            />
          )}
          <span className="text-b3">
            {text.length}/{value?.maxLength}
          </span>
        </section>
        <section className="mt-12 flex items-center justify-center gap-5">
          <Button.SmallButton color="gray" onClick={() => dispatch(null)}>
            취소
          </Button.SmallButton>
          <Button.SmallButton
            color="green"
            onClick={() => {
              value?.onConfirm && value.onConfirm(text);
              dispatch(null);
            }}>
            확인
          </Button.SmallButton>
        </section>
      </div>

      <div className="absolute bottom-0 left-0 right-0 top-0 z-20 bg-black opacity-[0.8]" />
    </div>
  );
};

export default FocusInput;
