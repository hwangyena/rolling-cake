import { useGLTF } from '@react-three/drei';
import { MeshProps } from '@react-three/fiber';
import { useMemo } from 'react';

// const TopCream = ({ color, cream }: { color: Color; cream: CakeCream }) => {
const TopCream = () => {
  const { nodes, materials } = useGLTF('/models/cream-basic.glb') as GLTFRes;

  const creamProps: MeshProps = useMemo(
    () => ({
      castShadow: true,
      receiveShadow: true,
      geometry: nodes.cream.geometry,
      material: materials['Material.005'],
      rotation: [-1.602, -0.03, 0.68],
      scale: [-236.37, -235.475, -329.143],
    }),
    [materials, nodes.cream.geometry],
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

  return (
    <group position={[0, 0.6, 0]} scale={0.063}>
      <mesh
        {...creamProps}
        position={[2.9, 26.191, -24]}
        // position={[cream1.x, 26.191, cream1.z]}
      />
      <mesh
        {...creamProps}
        position={[19.6, 26.191, -15]}
        // position={[cream2.x, 26.191, cream2.z]}
      />
      <mesh
        {...creamProps}
        position={[26.4, 26.191, 0.2]}
        // position={[cream3.x, 26.191, cream3.z]}
      />
      <mesh
        {...creamProps}
        position={[18.7, 26.191, 16.2]}
        // position={[cream4.x, 26.191, cream4.z]}
      />
      <mesh
        {...creamProps}
        position={[0.1, 26.191, 24.5]}
        // position={[cream5.x, 26.191, cream5.z]}
      />
      <mesh
        {...creamProps}
        position={[-15, 26.191, -17]}
        // position={[cream6.x, 26.191, cream6.z]}
      />
      <mesh
        {...creamProps}
        position={[-18, 26.191, 16.2]}
        // position={[cream7.x, 26.191, cream7.z]}
      />
      <mesh
        {...creamProps}
        position={[-24, 26.191, -1.9]}
        // position={[cream8.x, 26.191, cream8.z]}
      />
    </group>
  );
};

useGLTF.preload('/models/cream-basic.glb');

export default TopCream;
