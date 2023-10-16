import { SELECT_ITEM } from '@/lib/constant';
import { focusInputAtom } from '@/lib/store';
import { useSetAtom } from 'jotai';
import { useCallback } from 'react';
import Cake from '../cake/Cake';
import ItemSelect from './ItemSelect';
import { useStep } from '@/hooks/make';

const StepLettering = ({ itemSelect }: { itemSelect?: (keyof typeof SELECT_ITEM)[] }) => {
  const dispatch = useSetAtom(focusInputAtom);
  const { store, onUpdate } = useStep();

  const onCakeClicked = useCallback(() => {
    dispatch({
      label: '레터링 문구를 작성해줘!',
      maxLength: 10,
      defaultValue: (store.get('lettering') as Lettering).value,
      onConfirm: async (value: string) => {
        onUpdate({ value });
      },
    });
  }, [dispatch, onUpdate, store]);

  return (
    <article className="flex flex-col h-full">
      <section className="flex-1 grid place-items-center">
        <Cake className="w-[70%] h-[80%]" priority onClick={onCakeClicked} />
      </section>
      <ItemSelect data={itemSelect ?? []} />
    </article>
  );
};

export default StepLettering;
