import * as THREE from 'three';

import { CameraControls, Environment, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
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
    if (fixPosition) {
      cameraControlsRef.current?.dispose();
    }

    // complete page
    if (step !== 'lettering') {
      cameraControlsRef.current?.zoom(0.3);
    }
  }, [step, fixPosition]);

  useFrame(() => {
    if (cakeRef.current && isRotate) {
      cakeRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      <CameraControls
        ref={cameraControlsRef}
        polarAngle={getPolarAngle}
        minPolarAngle={0}
        maxPolarAngle={Math.PI * 0.45}
        minDistance={Math.PI * 1.7}
        maxDistance={10}
      />
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
    <group position={[0, 0, -0.7]} scale={1.3} rotation-y={2.2}>
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
      scale={1.1}
      position={showTop ? [-0.2, 0, -0.3] : undefined}
      rotation={showTop ? [0, Math.PI / 2, 0] : [0, -Math.PI / 2, 0]}>
      <group
        position={[0.575, -0.406, -0.026]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-7.181, -0.987, -7.181]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials['Material.069']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials.SVGMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials['Material.028']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_4.geometry}
          material={materials['Material.078']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_5.geometry}
          material={materials['Material.089']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_6.geometry}
          material={materials['Material.096']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_7.geometry}
          material={materials['Material.103']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_8.geometry}
          material={materials['Material.110']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_9.geometry}
          material={materials['Material.117']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_10.geometry}
          material={materials['Material.124']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_11.geometry}
          material={materials['Material.131']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_12.geometry}
          material={materials['Material.138']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_13.geometry}
          material={materials['Material.145']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_14.geometry}
          material={materials['Material.152']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_15.geometry}
          material={materials['Material.159']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_16.geometry}
          material={materials['Material.173']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_17.geometry}
          material={materials['Material.180']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_18.geometry}
          material={materials['Material.187']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_19.geometry}
          material={materials['Material.194']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_20.geometry}
          material={materials['Material.201']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_21.geometry}
          material={materials['Material.208']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_22.geometry}
          material={materials['Material.215']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_23.geometry}
          material={materials['Material.222']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_24.geometry}
          material={materials['Material.229']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_25.geometry}
          material={materials['Material.236']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_26.geometry}
          material={materials['Material.243']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_27.geometry}
          material={materials['Material.250']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_28.geometry}
          material={materials['Material.257']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_29.geometry}
          material={materials['Material.264']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_30.geometry}
          material={materials['Material.271']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_31.geometry}
          material={materials['Material.278']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_32.geometry}
          material={materials['Material.285']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_33.geometry}
          material={materials['Material.292']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_34.geometry}
          material={materials['Material.299']}
        />
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
    </group>
  );
};

useGLTF.preload('/models/theme/harrypotter.glb');
useGLTF.preload('/models/theme/soju.glb');
useGLTF.preload('/models/theme/princess.glb');

export default ThemeCake;
