import * as THREE from 'three';

import { SELECT_ITEM } from '@/lib/constant';
import MakeCanvas from '../model/Make';
import ItemSelect from './ItemSelect';
import { Canvas } from '@react-three/fiber';
import { useCallback } from 'react';
import { useSetAtom } from 'jotai';
import { focusInputAtom } from '@/lib/store';
import { useStepStore } from '@/hooks/make';

const StepCommon = ({ itemSelect }: { itemSelect?: (keyof typeof SELECT_ITEM)[] }) => {
  const dispatch = useSetAtom(focusInputAtom);

  const { step, store, onStoreUpdate } = useStepStore();

  const onCakeClicked = useCallback(() => {
    dispatch({
      label: '레터링 문구를 작성해줘!',
      maxLength: 10,
      defaultValue: store.lettering.value,
      onConfirm: async (value: string) => {
        onStoreUpdate({ value });
      },
    });
  }, [dispatch, onStoreUpdate, store.lettering]);

  return (
    <article className="flex h-full flex-col">
      <section className="grid flex-1 place-items-center">
        <Canvas
          shadows
          onClick={() => step === 'lettering' && onCakeClicked()}
          camera={{
            fov: window.innerWidth > 480 ? 50 : 45,
            near: 0.1,
            far: 100,
            position: new THREE.Vector3(0, 3, 9),
          }}>
          <MakeCanvas />
        </Canvas>
      </section>
      <ItemSelect data={itemSelect ?? []} />
    </article>
  );
};

export default StepCommon;
