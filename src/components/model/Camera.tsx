import { CameraControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { MathUtils } from 'three';

import { useCurrentStep } from '@lib/hooks/make';

const MOUSE_ENABLED = Object.freeze({
  left: 1, // ROTATE
  middle: 2, // DOLLY
  right: 2, // TRUCK
  wheel: 2, // DOLLY
});
const MOUSE_DISABLED = Object.freeze({
  left: 0,
  middle: 0,
  right: 0,
  wheel: 0,
});
const TOUCH_ENABLED = Object.freeze({
  one: 32, // ROTATE
  two: 4096, // DOLLY+TRUCK
  three: 1024, // TRUCK
});
const TOUCH_DISABLED = Object.freeze({
  one: 0,
  two: 0,
  three: 0,
});
type Props = { fixPosition?: boolean };

export default function Camera({ fixPosition }: Props) {
  const ref = useRef<CameraControls>(null);
  const step = useCurrentStep();
  const lock = step === 'more' || !!fixPosition;

  // CameraControls 업데이트 (frameloop='always'이므로 매 프레임 자동 실행)
  useFrame((_, delta) => {
    ref.current?.update(delta);
  });

  useEffect(() => {
    const c = ref.current;
    if (!c || !step) {
      return;
    }

    const id = requestAnimationFrame(() => {
      switch (step) {
        case 'cream_top':
        case 'lettering':
          c.rotateTo(0, MathUtils.degToRad(-120), true); // -120°
          break;
        case 'more':
          c.rotateTo(0, MathUtils.degToRad(20), true);
          break;
        default:
          c.reset(true);
      }
    });
    return () => cancelAnimationFrame(id);
  }, [step]);

  return (
    <CameraControls
      ref={ref}
      enabled
      mouseButtons={lock ? MOUSE_DISABLED : MOUSE_ENABLED}
      touches={lock ? TOUCH_DISABLED : TOUCH_ENABLED}
      minPolarAngle={0}
      maxPolarAngle={Math.PI * 0.5}
      minDistance={Math.PI * 1.7}
      maxDistance={10}
    />
  );
}
