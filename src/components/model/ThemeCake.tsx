import * as THREE from 'three';

import { CameraControls, Environment, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import LetteringModel from './Lettering';

const { DEG2RAD } = THREE.MathUtils;

type Props = {
  cake: ThemeCake;
  step?: keyof ThemeCake;
  isRotate?: boolean;
  fixPosition?: boolean;
};

function ThemeCake({ cake, step, isRotate, fixPosition }: Props) {
  const cameraControlsRef = useRef<CameraControls | null>(null);
  const cakeRef = useRef<THREE.Group>(null);

  const renderTheme = () => {
    switch (cake.theme) {
      case 'harrypotter':
        return <HarryPotter />;
      case 'princess':
        return <Princess showTop={step === 'lettering'} />;
      case 'soju':
        return <Soju />;
    }
  };

  useEffect(() => {
    if (step === 'lettering') {
      cameraControlsRef.current?.truck(0, 1.4, false);
      return;
    } else {
      cameraControlsRef.current?.truck(0, 0, false);
    }
  }, [step]);

  useFrame(() => {
    if (cakeRef.current && isRotate) {
      cakeRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      {!fixPosition && (
        <CameraControls
          ref={cameraControlsRef}
          polarAngle={step === 'lettering' ? -60 * DEG2RAD : 40 * DEG2RAD}
          minPolarAngle={0}
          maxPolarAngle={Math.PI * 0.5}
        />
      )}
      <Environment preset="warehouse" />

      <group ref={cakeRef}>
        <group scale={0.75}>{renderTheme()}</group>

        <LetteringModel
          theme={cake.theme}
          color="green"
          font={
            cake.theme === 'harrypotter'
              ? 'font5'
              : cake.theme === 'soju'
              ? 'font4'
              : cake.lettering.font
          }
          value={cake.lettering.value.toUpperCase()}
        />
      </group>
    </>
  );
}

const HarryPotter = () => {
  const { nodes, materials } = useGLTF(`/models/theme/harrypotter.glb`) as GLTFRes;

  return (
    <group position={[0, 1.6, -0.4]} scale={17.8} rotation-y={-0.2}>
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

const Soju = () => {
  const { nodes, materials } = useGLTF(`/models/theme/soju.glb`) as GLTFRes;

  return (
    <group rotation={[0, Math.PI, 0]}>
      <group scale={[-3.092, -0.425, -3.092]}>
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

const Princess = ({ showTop }: { showTop: boolean }) => {
  const { nodes, materials } = useGLTF(`/models/theme/princess.glb`) as GLTFRes;

  return (
    <group
      scale={0.9}
      position={showTop ? [0, -0.3, 0] : undefined}
      rotation={showTop ? [0, -Math.PI / 2, 0] : [0, Math.PI / 2, 0]}>
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

useGLTF.preload('/models/theme/harrypotter.glb');
useGLTF.preload('/models/theme/soju.glb');
useGLTF.preload('/models/theme/princess.glb');

export default ThemeCake;
