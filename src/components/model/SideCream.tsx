import { getCirclePosition } from '@/lib/utils';
import { memo } from 'react';
import Cream from './Cream';
import { Instances } from '@react-three/drei';

const yPosition: Record<CakeCream, number> = {
  basic: 2.0,
  screw: -0.4,
  chocolate: 4.5,
  crown: 1.2,
  heart: 3.0,
  none: 0,
};

type Props = {
  cream: CakeCream;
  color: Color;
  visible: boolean;
  optional?: {
    radius: number;
    count: number;
    yPos: number;
  };
};

const SideCream = ({ optional, visible, ...props }: Props) => {
  if (props.cream === 'none') {
    return null;
  }

  if (optional) {
    const { radius, count, yPos } = optional;

    return (
      <group position={[0, 0.6, 0]} scale={0.067} visible={visible}>
        <Instances>
          {getCirclePosition(radius, count).map(([x, z], i) => (
            <Cream key={i} position={[x, yPos, z]} optionalColor="princess" {...props} />
          ))}
        </Instances>
      </group>
    );
  }

  return (
    <group position={[0, 0.6, 0]} scale={0.03}>
      <Instances>
        {getCirclePosition(64, 34).map(([x, z], i) => (
          <Cream key={i} position={[x, yPosition[props.cream], z]} {...props} />
        ))}
      </Instances>
    </group>
  );
};

export default memo(SideCream);
