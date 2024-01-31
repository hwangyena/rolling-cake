import { useEntireStep, useStepStore } from '@/lib/hooks/make';
import { SELECT_ITEM } from '@/lib/constant';
import Model from '../model/Model';
import ItemSelect from './ItemSelect';
import LetteringArea from './LetteringArea';

const StepCommon = ({ itemSelect }: { itemSelect?: (keyof typeof SELECT_ITEM)[] }) => {
  const { isTheme } = useEntireStep();
  const { step, store } = useStepStore();

  return (
    <article className="flex h-full flex-col">
      <section className="relative grid w-full flex-1 place-items-center">
        <Model isStand cake={store} show={isTheme ? 'theme' : 'custom'} />

        {step === 'lettering' && <LetteringArea />}
      </section>
      <ItemSelect data={itemSelect ?? []} />
    </article>
  );
};

export default StepCommon;
