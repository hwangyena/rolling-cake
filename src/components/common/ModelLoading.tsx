import { Html } from '@react-three/drei';
import styles from '@/styles/component.module.css';

export default function ModelLoading() {
  return (
    <Html>
      <span className={styles.loader} />
    </Html>
  );
}
