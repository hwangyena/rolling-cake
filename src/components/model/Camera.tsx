import { CameraControls } from '@react-three/drei';
import type CameraControlsImpl from 'camera-controls';
import React, { useEffect, useRef } from 'react';
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
  const ref = useRef<CameraControlsImpl | null>(null);
  const step = useCurrentStep();
  const lock = step === 'more' || !!fixPosition;

  useEffect(() => {
    const c = ref.current;
    if (!c || !step) {
      return;
    }

    // 한 프레임 지연 + 진행 중 트랜지션 중단 (경쟁조건 방지)
    const id = requestAnimationFrame(() => {
      switch (step) {
        case 'cream_top':
        case 'lettering':
          c.rotateTo(0, MathUtils.degToRad(240), true); // -120°
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
