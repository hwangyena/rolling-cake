import { getCirclePosition } from '@/lib/utils';
import { memo } from 'react';
import Cream from './Cream';

const yPosition: Record<CakeCream, number> = {
  basic: 7.0,
  screw: 3.4,
  chocolate: 9.5,
  crown: 6.2,
  heart: 8.0,
  none: 0,
};

const SideCream = (props: { cream: CakeCream; color: Color }) => {
  return (
    <group position={[0, 0.6, 0]} scale={0.04}>
      {getCirclePosition(34).map(([x, z], i) => (
        <Cream key={i} position={[x, yPosition[props.cream], z]} {...props} />
      ))}
    </group>
  );
};

export default memo(SideCream);
