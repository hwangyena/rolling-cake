import * as THREE from 'three';

import { useStepStore } from '@/hooks/make';
import { SELECT_ITEM } from '@/lib/constant';
import { Canvas } from '@react-three/fiber';
import CustomCake from '../model/CustomCake';
import ItemSelect from './ItemSelect';
import LetteringArea from './LetteringArea';

const StepCommon = ({ itemSelect }: { itemSelect?: (keyof typeof SELECT_ITEM)[] }) => {
  const { step, store } = useStepStore<CustomCake>();

  return (
    <article className="flex h-full flex-col">
      <section className="relative grid flex-1 place-items-center">
        <Canvas
          shadows
          camera={{
            fov: window.innerWidth > 480 ? 50 : 45,
            near: 0.1,
            far: 100,
            position: new THREE.Vector3(0, 3, 9),
          }}>
          <CustomCake hasStand cake={store} step={step} />
        </Canvas>

        {step === 'lettering' && <LetteringArea />}
      </section>
      <ItemSelect data={itemSelect ?? []} />
    </article>
  );
};

export default StepCommon;
