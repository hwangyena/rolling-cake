import * as THREE from 'three';

import { useEntireStep, useStepStore } from '@/hooks/make';
import { SELECT_ITEM } from '@/lib/constant';
import { Canvas } from '@react-three/fiber';
import CustomCake from '../model/CustomCake';
import ItemSelect from './ItemSelect';
import LetteringArea from './LetteringArea';
import ThemeCake from '../model/ThemeCake';
import { Suspense } from 'react';
import LoadingCanvas from '../style/LoadingCanvas';

const StepCommon = ({ itemSelect }: { itemSelect?: (keyof typeof SELECT_ITEM)[] }) => {
  const { isTheme } = useEntireStep();
  const { step, store } = useStepStore();

  return (
    <article className="flex h-full flex-col">
      <section className="relative grid w-full flex-1 place-items-center">
        <Canvas
          shadows
          camera={{
            fov: window.innerWidth > 480 ? 50 : 45,
            near: 0.1,
            far: 100,
            position: new THREE.Vector3(0, 3, 9),
          }}>
          <Suspense>
            {isTheme ? (
              <ThemeCake cake={store as ThemeCake} step={step} />
            ) : (
              <CustomCake hasStand cake={store as CustomCake} step={step} />
            )}
          </Suspense>
        </Canvas>
        <LoadingCanvas />
        {step === 'lettering' && <LetteringArea />}
      </section>
      <ItemSelect data={itemSelect ?? []} />
    </article>
  );
};

export default StepCommon;
