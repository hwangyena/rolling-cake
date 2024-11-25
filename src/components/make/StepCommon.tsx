import { useStepStore } from '@/lib/hooks/make';

import ItemSelect from './ItemSelect';
import LetteringArea from './LetteringArea';

import Model from '@components/model/Model';

const StepCommon = () => {
  const { step, store } = useStepStore();

  return (
    <article className="flex h-full flex-col">
      <section className="relative grid w-full flex-1 place-items-center">
        <Model isStand cake={store} />

        {step === 'lettering' && <LetteringArea />}
      </section>
      <ItemSelect />
    </article>
  );
};

export default StepCommon;
