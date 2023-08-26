import styles from '@/styles/page.module.css';
import Button from '../common/Button';
import Header from '../common/Header';
import Cake from '../cake/Cake';
import Navigation from '../common/Navigation';

const StepComplete = () => {
  return (
    <main className={styles.complete}>
      <Navigation show={['<']} />
      <Header className="mt-[10vh]">롤링케이크 완성!</Header>
      <Cake className="flex-1 w-full h-full" />
      <section className="flex flex-col items-center w-full gap-3">
        <Button type="BIG">내 케이크 선물하기</Button>
        <span className="text-gray-800 text-cap">선물한 케이크는 수정이 불가해요.</span>
      </section>
    </main>
  );
};

export default StepComplete;
