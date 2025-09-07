import { useGLTF } from '@react-three/drei';
import { Fragment, memo, useMemo } from 'react';

import Draggable from '../Draggable';

const itemLookup: Record<
  CakeItem,
  {
    position?: number[];
    scale?: number;
  }
> = {
  biscuits: {
    position: [0, 2.2, 0],
  },
  'blue-candle': {
    position: [0, 2.6, 0],
    scale: 0.5,
  },
  blueberries: {
    position: [0, 2.0, 0],
  },
  ferreroroshe: {
    position: [0, 2.2, 0],
  },
  'heart-candle': {
    position: [0, 2.0, 0],
  },
  'heart-chocolate': {
    position: [0, 2.0, 0],
  },
  'stick-chocolate': {
    position: [0, 1.9, 0],
  },
  sunflower: {
    position: [0, 2.2, 0],
  },
  'topper-congratulations': {
    position: [0, 2.8, 0],
    scale: 0.4,
  },
  'topper-happybirthday': {
    position: [0, 3.2, 0],
    scale: 0.42,
  },
  'topper-thankyou': {
    position: [0, 3.1, 0],
    scale: 0.4,
  },
};

const Item = ({ item }: { item: CakeItem }) => {
  const { scene } = useGLTF(`/models/items/${item}.glb`) as GLTFRes;
  // Leva 패널에서 조정할 값 등록
  // const { posX, posY, posZ, scale } = useControls('TeddyBearModel', {
  //   posX: { value: 0, min: -5, max: 5, step: 0.1 },
  //   posY: { value: 2.2, min: -5, max: 5, step: 0.1 },
  //   posZ: { value: 0, min: -5, max: 5, step: 0.1 },
  //   scale: { value: 0.3, min: 0.01, max: 2, step: 0.01 },
  // });
  useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    scene.traverse((obj: any) => {
      if (!obj.isMesh) {
        return;
      }
      if ('roughness' in obj.material) {
        obj.material.roughness = Math.min(1, (obj.material.roughness ?? 0.5) + 0.3);
      }
      obj.castShadow = obj.receiveShadow = true;
    });
  }, [scene]);
  const { position, scale } = itemLookup[item];
  return <primitive object={scene} position={position} scale={scale} />;
};

const Items = ({ items }: { items: CakeItem[]; hasTopCream: boolean }) => {
  return items.map((item) => (
    <Fragment key={item}>
      {
        <Draggable>
          <Item item={item} />
        </Draggable>
      }
    </Fragment>
  ));
};

export default memo(Items);
