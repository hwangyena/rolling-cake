import { memo, useMemo } from 'react';
import Cream from './Cream';

const TopCream = (props: { cream: CakeCream; color: Color }) => {
  const yPosition = useMemo(
    () => (['heart', 'chocolate'].includes(props.cream) ? 30.8 : 26.191),
    [props.cream],
  );

  // const cream1 = useControls('position1', {
  //   x: { value: 1.6, min: -30, max: 30, step: 0.1 },
  //   z: { value: -24, min: -30, max: 30, step: 0.1 },
  // });
  // const cream2 = useControls('position2', {
  //   x: { value: 17.4, min: -30, max: 30, step: 0.1 },
  //   z: { value: -19, min: -30, max: 30, step: 0.1 },
  // });
  // const cream3 = useControls('position3', {
  //   x: { value: 24.8, min: -30, max: 30, step: 0.1 },
  //   z: { value: -4.6, min: -30, max: 30, step: 0.1 },
  // });
  // const cream4 = useControls('position4', {
  //   x: { value: 20.6, min: -30, max: 30, step: 0.1 },
  //   z: { value: 13.2, min: -30, max: 30, step: 0.1 },
  // });
  // const cream5 = useControls('position5', {
  //   x: { value: 6.2, min: -30, max: 30, step: 0.1 },
  //   z: { value: 24.4, min: -30, max: 30, step: 0.1 },
  // });
  // const cream6 = useControls('position6', {
  //   x: { value: -15, min: -30, max: 30, step: 0.1 },
  //   z: { value: -18, min: -30, max: 30, step: 0.1 },
  // });
  // const cream7 = useControls('position7', {
  //   x: { value: -24, min: -30, max: 30, step: 0.1 },
  //   z: { value: -2, min: -30, max: 30, step: 0.1 },
  // });
  // const cream8 = useControls('position7', {
  //   x: { value: -24, min: -30, max: 30, step: 0.1 },
  //   z: { value: -1.9, min: -30, max: 30, step: 0.1 },
  // });
  // const { yPosition } = useControls('position7', {
  //   yPosition: { value: 30.8, min: -30, max: 50, step: 0.1 },
  // });

  return (
    <group position={[0, 0.6, 0]} scale={0.063}>
      <Cream
        {...props}
        position={[2.9, yPosition, -24]}
        // position={[cream1.x, 26.191, cream1.z]}
      />
      <Cream
        {...props}
        position={[19.6, yPosition, -15]}
        // position={[cream2.x, 26.191, cream2.z]}
      />
      <Cream
        {...props}
        position={[26.4, yPosition, 0.2]}
        // position={[cream3.x, 26.191, cream3.z]}
      />
      <Cream
        {...props}
        position={[18.7, yPosition, 16.2]}
        // position={[cream4.x, 26.191, cream4.z]}
      />
      <Cream
        {...props}
        position={[0.1, yPosition, 24.5]}
        // position={[cream5.x, 26.191, cream5.z]}
      />
      <Cream
        {...props}
        position={[-15, yPosition, -17]}
        // position={[cream6.x, 26.191, cream6.z]}
      />
      <Cream
        {...props}
        position={[-18, yPosition, 16.2]}
        // position={[cream7.x, 26.191, cream7.z]}
      />
      <Cream
        {...props}
        position={[-24, yPosition, -1.9]}
        // position={[cream8.x, 26.191, cream8.z]}
      />
    </group>
  );
};

export default memo(TopCream);
