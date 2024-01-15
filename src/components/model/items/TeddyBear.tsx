import { a } from '@react-spring/three';
import { useSpring } from '@react-spring/web';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useGesture } from '@use-gesture/react';
import { useMemo, useRef } from 'react';

const TeddyBearModel = ({ setDraggable }: { setDraggable: Dispatch<SetStateAction<boolean>> }) => {
  const { nodes, materials } = useGLTF('/models/items/teddy-bear.glb') as GLTFRes;

  const itemRef = useRef(null);

  const { size, viewport } = useThree();
  const aspect = useMemo(() => size.width / viewport.width, [size, viewport]);

  const [spring, set] = useSpring(() => ({
    scale: 0.15,
    // scale: -0.15,
    position: [0, 1.9, 0],
    rotation: [3, 4.5, 3.3],
    config: { friction: 15 },
  }));

  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      // setDraggable(true);
      // set({ position: [x / aspect, -y / aspect, 0] });
      set({ position: [x / aspect, 1.9, y / aspect] });
    },
    // onDragEnd: () => setDraggable(false),
  });

  // const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  // let planeIntersectPoint = new THREE.Vector3();
  // const [spring, api] = useSpring(() => ({
  //   // position: [0, 0, 0],
  //   position: [position.x, 1.9, position.z],
  //   rotation: [0, 4.5, 3.3],
  //   scale: -0.15,
  //   // config: { friction: 10 },
  // }));

  {
    /* // TEST movemont */
  }
  return (
    <a.mesh
      {...spring}
      {...bind()}
      castShadow
      scale={3}
      // onClick={(event) => click(!clicked)}
      // onPointerOver={(event) => hover(true)}
      // onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'hotpink'} />
    </a.mesh>
    //   <a.group
    //   // position={[position.x, 1.9, position.z]}
    //   // rotation-y={4.5}
    //   // rotation-z={3.3}
    //   // scale={-0.15}
    //   // ref={itemRef}
    //   {...spring}
    //   {...bind()}>
    // <group name="Scene">
    //   <group
    //     position={[0.884, 6.904, -3.145]}
    //     rotation={[0, 0, -0.107]}
    //     scale={[0.662, 0.525, 0.662]}>
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cone_2.geometry}
    //       material={materials['Material.012']}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cone_1.geometry}
    //       material={materials['Material.017']}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cone_3.geometry}
    //       material={materials['5']}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cone_4.geometry}
    //       material={materials['Material.011']}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cone_5.geometry}
    //       material={materials['Material.007']}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cone_6.geometry}
    //       material={materials['Material.002']}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cone_7.geometry}
    //       material={materials['Material.004']}
    //     />
    // </group>
    //   </group>
    //   </a.group>
  );
};

useGLTF.preload('/models/items/teddy-bear.glb');

export default TeddyBearModel;
