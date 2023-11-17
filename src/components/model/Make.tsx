import { useStepStore } from '@/hooks/make';
import { CameraControls, Center } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import CakeModel from './Cake';
import TopCream from './TopCream';

const { DEG2RAD } = THREE.MathUtils;

const MakeCanvas = () => {
  const { store, step } = useStepStore<CustomCake>();

  // const { camera } = useThree();
  // const { store } = useStep();

  const cameraControlsRef = useRef<CameraControls | null>(null);

  // TODO: remove this
  // const controls = useControls({
  //   thetaGrp: buttonGroup({
  //     label: 'rotate theta',
  //     opts: {
  //       '+45º': () => cameraControlsRef.current?.rotate(45 * DEG2RAD, 0, true),
  //       '-90º': () => cameraControlsRef.current?.rotate(-90 * DEG2RAD, 0, true),
  //       '+360º': () => cameraControlsRef.current?.rotate(360 * DEG2RAD, 0, true),
  //     },
  //   }),
  //   phiGrp: buttonGroup({
  //     label: 'rotate phi',
  //     opts: {
  //       '+20º': () => cameraControlsRef.current?.rotate(0, 20 * DEG2RAD, true),
  //       '-40º': () => cameraControlsRef.current?.rotate(0, -40 * DEG2RAD, true),
  //     },
  //   }),
  //   truckGrp: buttonGroup({
  //     label: 'truck',
  //     opts: {
  //       '(1,0)': () => cameraControlsRef.current?.truck(1, 0, true),
  //       '(0,1)': () => cameraControlsRef.current?.truck(0, 1, true),
  //       '(-1,-1)': () => cameraControlsRef.current?.truck(-1, -1, true),
  //     },
  //   }),
  //   dollyGrp: buttonGroup({
  //     label: 'dolly',
  //     opts: {
  //       '1': () => cameraControlsRef.current?.dolly(1, true),
  //       '-1': () => cameraControlsRef.current?.dolly(-1, true),
  //     },
  //   }),
  //   zoomGrp: buttonGroup({
  //     label: 'zoom',
  //     opts: {
  //       '/2': () => cameraControlsRef.current?.zoom(camera.zoom / 2, true),
  //       '/-2': () => cameraControlsRef.current?.zoom(-camera.zoom / 2, true),
  //     },
  //   }),
  //   minDistance: { value: 0 },
  //   saveState: button(() => cameraControlsRef.current?.saveState()),
  //   reset: button(() => cameraControlsRef.current?.reset(true)),
  //   enabled: { value: true, label: 'controls on' },
  //   verticalDragToForward: { value: false, label: 'vert. drag to move forward' },
  //   dollyToCursor: { value: false, label: 'dolly to cursor' },
  //   infinityDolly: { value: false, label: 'infinity dolly' },
  // });

  useEffect(() => {
    if (!step || !cameraControlsRef.current) {
      return;
    }

    switch (step) {
      case 'cream_top':
        cameraControlsRef.current?.rotate(0, -120 * DEG2RAD, true);
        break;
      case 'more':
        cameraControlsRef.current?.rotate(0, -20 * DEG2RAD, true);
        break;
      case 'lettering':
        cameraControlsRef.current?.rotate(0, -100 * DEG2RAD, true);
        break;
      default:
        cameraControlsRef.current?.reset(true);
    }
  }, [step]);

  return (
    <>
      <CameraControls
        ref={cameraControlsRef}
        //  {...controls}
      />
      <directionalLight
        castShadow
        position={[1, 2, 7]}
        intensity={5}
        shadow-normalBias={0.04}
        color="#fff9d0"
      />
      <ambientLight intensity={1.5} />

      <Center>
        <CakeModel cakeColor={store.sheet.color} />
      </Center>

      {store.cream_top.cream !== 'none' && <TopCream {...store.cream_top} />}
    </>
  );
};

export default MakeCanvas;
