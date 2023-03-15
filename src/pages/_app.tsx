import '../styles/global.scss';
import styles from '../styles/layout.module.scss';

export default function App({ Component, pageProps }) {
  return (
    <main className={styles.layout}>
      <Component {...pageProps} />
    </main>
  );
}
