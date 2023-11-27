import { memo } from 'react';
import Cream from './Cream';

const topPosition = [
  [2.9, -24],
  [19.6, -15],
  [26.4, 0.2],
  [18.7, 16.2],
  [0.1, 24.5],
  [-15, -17],
  [-18, 16.2],
  [-24, -1.9],
]

const yPosition: Record<CakeCream, number> = {
  basic: 23.191,
  screw: 21.5,
  chocolate: 27.8,
  crown: 25.1,
  heart: 26.2,
  none: 0,
};


const TopCream = (props: { cream: CakeCream; color: Color }) => {
  // const cream1 = useControls('position1', {
  //   x: { value: 1.6, min: -30, max: 30, step: 0.1 },
  //   z: { value: -24, min: -30, max: 30, step: 0.1 },
  // });

  return (
    <group position={[0, 0.6, 0]} scale={0.063}>
      {topPosition.map(([x,z], i) => (
        <Cream
        key={i}
        position={[x, yPosition[props.cream], z]}
        {...props}
        />
        ))}
      {/* <Cream
        {...props}
        position={[19.6, yPosition, -15]}
        // position={[cream2.x, 26.191, cream2.z]}
      /> */}
    </group>
  );
};

export default memo(TopCream);
