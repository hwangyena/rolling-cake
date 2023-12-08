import * as THREE from 'three';

import { CameraControls, Environment, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const { DEG2RAD } = THREE.MathUtils;

type Props = {
  theme: CakeTheme;
  step?: keyof ThemeCake;
  isRotate?: boolean;
};

const ThemeCake = ({ theme, step, isRotate }: Props) => {
  const cameraControlsRef = useRef<CameraControls | null>(null);
  const cakeRef = useRef<THREE.Group>(null);

  const renderTheme = () => {
    switch (theme) {
      case 'harrypotter':
        return <HarryPotter isRotate={isRotate} />;
      case 'princess':
        return <Princess showTop={step === 'lettering'} isRotate={isRotate} />;
      case 'soju':
        return <Soju isRotate={isRotate} />;
    }
  };

  return (
    <>
      <CameraControls
        ref={cameraControlsRef}
        polarAngle={step === 'lettering' ? 40 * DEG2RAD : undefined}
      />
      <Environment preset="warehouse" />

      <group ref={cakeRef} scale={0.9}>
        {renderTheme()}
      </group>
    </>
  );
};

const HarryPotter = ({ isRotate }: { isRotate?: boolean }) => {
  const { nodes, materials } = useGLTF(`/models/theme/harrypotter.glb`) as GLTFRes;
  const cakeRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (cakeRef.current && isRotate) {
      cakeRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group
      ref={cakeRef}
      scale={16.12}
      rotation-x={0.7}
      rotation-y={-0.2}
      position={isRotate ? [0, 2.0, 0] : [0, 2.1, 0.3]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve024.geometry}
        material={materials['Material.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve024_1.geometry}
        material={materials['Material.087']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve024_2.geometry}
        material={materials['Material.042']}
      />
    </group>
  );
};

const Princess = ({ showTop, isRotate }: { showTop: boolean; isRotate?: boolean }) => {
  const { nodes, materials } = useGLTF(`/models/theme/princess.glb`) as GLTFRes;
  const cakeRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (cakeRef.current && isRotate) {
      cakeRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group
      ref={cakeRef}
      scale={0.8}
      position={showTop ? [0, 1, 0.5] : [0, 0, 0.5]}
      rotation-x={12.7}
      rotation-y={-Math.PI / 2}>
      <group scale={[-3.579, -0.492, -3.579]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials['Material.008']}
        />
      </group>
    </group>
  );
};
const Soju = ({ isRotate }: { isRotate?: boolean }) => {
  const { nodes, materials } = useGLTF(`/models/theme/soju.glb`) as GLTFRes;

  const cakeRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (cakeRef.current && isRotate) {
      cakeRef.current.rotation.y += 0.005;
    }
  });
  return (
    <group
      ref={cakeRef}
      scale={isRotate ? 1 : 1.05}
      rotation-x={isRotate ? -2.7 : -2.5}
      rotation-z={-Math.PI}>
      <group scale={[-3.092, -0.425, -3.092]} position={isRotate ? [0, 0, 0] : [0, 0, 0.7]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials['Material.042']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials['Material.044']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_2.geometry}
          material={materials['Material.069']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_3.geometry}
          material={materials['5']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_4.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_5.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_6.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_7.geometry}
          material={materials['Material.013']}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/theme/harrypotter.glb');
useGLTF.preload('/models/theme/soju.glb');
useGLTF.preload('/models/theme/princess.glb');

export default ThemeCake;
