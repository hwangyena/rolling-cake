import * as THREE from 'three';

import { CameraControls, Environment, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import LetteringModel from './Lettering';
import SideCream from './SideCream';

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

  const getPolarAngle = useMemo(() => {
    if (step === 'lettering') {
      return -60 * DEG2RAD;
    }

    if (cake.theme !== 'princess') {
      return 40 * DEG2RAD;
    }

    return undefined;
  }, [cake.theme, step]);

  useEffect(() => {
    // letter page
    if (!step) {
      cameraControlsRef.current?.truck(0, 0.3);
    }

    cameraControlsRef.current?.update(0);
  }, [step]);

  useFrame(() => {
    if (cakeRef.current && isRotate) {
      cakeRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      <CameraControls
        enabled={!fixPosition}
        ref={cameraControlsRef}
        polarAngle={getPolarAngle}
        minPolarAngle={0}
        maxPolarAngle={Math.PI * 0.45}
        minDistance={Math.PI * 1.7}
        maxDistance={10}
      />
      <ambientLight intensity={0.7} />
      <Environment preset="warehouse" />
      <group ref={cakeRef}>
        <group scale={step !== 'lettering' ? 0.92 : 0.75}>{renderTheme()}</group>

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
    <group position={[0, 0, 0]} scale={1.1} rotation-y={2.2}>
      <group scale={23.03}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object003.geometry}
          material={materials['Material.087']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object003_1.geometry}
          material={materials['Material.003']}
        />
      </group>
    </group>
  );
};

const Soju = () => {
  const { nodes, materials } = useGLTF(`/models/theme/soju.glb`) as GLTFRes;

  return (
    <group scale={1.22} position={[0, 0, 0]}>
      <group>
        <group
          position={[-0.064, 0.416, 0.027]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-2.612, -0.359, -2.612]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials['Material.044']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_1.geometry}
            material={materials['Material.069']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_2.geometry}
            material={materials['5']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_3.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_4.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_5.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_6.geometry}
            material={materials['Material.013']}
          />
        </group>
      </group>
    </group>
  );
};

const Princess = ({ showTop }: { showTop: boolean }) => {
  const { nodes, materials } = useGLTF(`/models/theme/princess.glb`) as GLTFRes;

  return (
    <group
      position={showTop ? [-0.2, 0, -0.3] : undefined}
      rotation={showTop ? [0, Math.PI / 2, 0] : [0, -Math.PI / 2, 0]}>
      <group
        position={[0.575, -0.406, -0.026]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-7.181, -0.987, -7.181]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_35.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_36.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_37.geometry}
          material={materials['Material.008']}
        />
      </group>
      <SideCream
        color="ivory"
        cream="basic"
        optional={{
          count: 28,
          radius: 41,
          yPos: -28,
        }}
      />
    </group>
  );
};

useGLTF.preload('/models/theme/harrypotter.glb');
useGLTF.preload('/models/theme/soju.glb');
useGLTF.preload('/models/theme/princess.glb');

export default ThemeCake;
