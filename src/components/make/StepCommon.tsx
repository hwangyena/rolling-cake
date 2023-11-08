import * as THREE from 'three';

import { SELECT_ITEM } from '@/lib/constant';
import MakeCanvas from '../model/Make';
import ItemSelect from './ItemSelect';
import { Canvas } from '@react-three/fiber';

const StepCommon = ({ itemSelect }: { itemSelect?: (keyof typeof SELECT_ITEM)[] }) => {
  return (
    <article className="flex h-full flex-col">
      <section className="grid flex-1 place-items-center">
        <Canvas
          shadows
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
