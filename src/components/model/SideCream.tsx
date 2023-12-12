import { getCirclePosition } from '@/lib/utils';
import { memo } from 'react';
import Cream from './Cream';

const yPosition: Record<CakeCream, number> = {
  basic: 2.0,
  screw: -0.4,
  chocolate: 4.5,
  crown: 1.2,
  heart: 3.0,
  none: 0,
};

const SideCream = (props: { cream: CakeCream; color: Color }) => {
  return (
    <group position={[0, 0.6, 0]} scale={0.03}>
      {getCirclePosition(64, 34).map(([x, z], i) => (
        <Cream key={i} position={[x, yPosition[props.cream], z]} {...props} />
      ))}
    </group>
  );
};

export default memo(SideCream);
