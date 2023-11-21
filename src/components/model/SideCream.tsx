import { memo } from 'react';
import Cream from './Cream';

// const positionProps = { min: -70, max: 70, step: 0.1 };
const sidePosition = [
  [-26, 38.1],
  [-17, 43.3],
  [-6.7, 46.1],
  [3.2, 46.5],
  [13.9, 44.9],
  [23.6, 40.9],
  [31.7, 35.3],
  [39.3, 28.4],
  [44.1, 19.3],
  [47.3, 9.2],
  [48.5, -0.7],
  [47.7, -10.0],
  [44.2, -19.0],
  [39.4, -28],
  [32.9, -35],
  [25.7, -42],
  [16.8, -46],
  [7.3, -48],
  [-2.8, -48],
  [-11, -47],
  [-20, -44],
  [-28, -39],
  [-36, -32],
  [-41, -24],
  [-45, -16],
  [-48, -6.8],
  [-47, 3.6],
  [-45, 14.2],
  [-40, 23.6],
  [-34, 32.2],
];

const yPosition: Record<CakeCream, number> = {
  basic: 0.9,
  screw: -1.4,
  chocolate: 4.5,
  crown: 1.2,
  heart: 3.0,
  none: 0,
};

const SideCream = (props: { cream: CakeCream; color: Color }) => {
  // const { yPosition } = useControls('yPos', {
  //   yPosition: { value: -1.4, min: -10, max: 10, step: 0.1 },
  // });

  // const cream1 = useControls('position1', {
  //   x: { value: 44.2, ...positionProps },
  //   z: { value: -19.0, ...positionProps },
  // });

  return (
    <group position={[0, 0.6, 0]} scale={0.05}>
      {sidePosition.map(([x, z], i) => (
        <Cream
          key={i}
          position={[x, yPosition[props.cream], z]}
          {...props}
          // position={[cream1.x, yPosition, cream1.z]}
        />
      ))}
      {/* <Cream {...props} position={[cream1.x, yPosition, cream1.z]} /> */}
    </group>
  );
};

export default memo(SideCream);
