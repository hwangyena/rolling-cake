import { useStep } from '@/hooks/make';
import { SELECT_ITEM } from '@/lib/constant';
import { focusInputAtom } from '@/lib/store';
import { useSetAtom } from 'jotai';
import { useCallback } from 'react';
import Canvas from '../3d/Canvas';
import TextComponent from '../3d/Text';
import ItemSelect from './ItemSelect';

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
    <article className="flex h-full flex-col">
      <section className="grid flex-1 place-items-center" onClick={onCakeClicked}>
        <Canvas>
          <TextComponent {...(store.get('lettering') as Lettering)} />
        </Canvas>
      </section>
      <ItemSelect data={itemSelect ?? []} />
    </article>
  );
};

export default StepLettering;
