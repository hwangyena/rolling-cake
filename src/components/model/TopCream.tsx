import { memo } from 'react';
import Cream from './Cream';
import { getCirclePosition } from '@/lib/utils';

const yPosition: Record<CakeCream, number> = {
  basic: 30.191,
  screw: 27.5,
  chocolate: 34,
  crown: 32.1,
  heart: 33.2,
  none: 0,
};

const TopCream = (props: { cream: CakeCream; color: Color }) => {
  return (
    <group position={[0, 0.6, 0]} scale={0.045}>
      {getCirclePosition(33, 8).map(([x, z], i) => (
        <Cream key={i} position={[x, yPosition[props.cream], z]} {...props} />
      ))}
    </group>
  );
};

export default memo(TopCream);
