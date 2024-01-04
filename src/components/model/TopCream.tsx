import { getCirclePosition } from '@/lib/utils';
import { Instances } from '@react-three/drei';
import { memo } from 'react';
import Cream from './Cream';

const topYPosition: Record<CakeCream, number> = {
  basic: 30.191,
  screw: 27.5,
  chocolate: 34,
  crown: 32.1,
  heart: 33.2,
  none: 0,
};

const TopCream = ({ color, cream }: { cream: CakeCream; color: Color }) => {
  return (
    <group scale={0.045} position={[0, 0.6, 0]}>
      <Instances limit={8} range={8}>
        {getCirclePosition(33, 8).map(([x, z], i) => (
          <Cream key={i} position={[x, topYPosition[cream], z]} color={color} cream={cream} />
        ))}
      </Instances>
    </group>
  );
};

export default memo(TopCream);
