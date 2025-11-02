import { useGLTF } from '@react-three/drei';
import { Fragment, memo, useEffect, useMemo } from 'react';

import { useCurrentStep } from '@lib/hooks/make';

import Draggable from './Draggable';

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

const Item = memo(({ item }: { item: CakeItem }) => {
  const { scene } = useGLTF(`/models/items/${item}.glb`) as GLTFRes;

  // useMemo는 값을 반환해야 하므로 useEffect로 변경
  useEffect(() => {
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

  const { position, scale } = useMemo(() => itemLookup[item], [item]);
  return <primitive object={scene} position={position} scale={scale ?? 0.3} />;
});

Item.displayName = 'Item';

const Items = ({ items }: { items: CakeItem[]; hasTopCream: boolean }) => {
  const step = useCurrentStep();
  const isMoreStep = useMemo(() => step === 'more', [step]);

  return items.map((item) => (
    <Fragment key={item}>
      <Draggable disabled={!isMoreStep}>
        <Item item={item} />
      </Draggable>
    </Fragment>
  ));
};

// 아이템 모델 preload
const itemModels: CakeItem[] = [
  'biscuits',
  'blue-candle',
  'blueberries',
  'ferreroroshe',
  'heart-candle',
  'heart-chocolate',
  'stick-chocolate',
  'sunflower',
  'topper-congratulations',
  'topper-happybirthday',
  'topper-thankyou',
];

itemModels.forEach((item) => {
  useGLTF.preload(`/models/items/${item}.glb`);
});

export default memo(Items);
