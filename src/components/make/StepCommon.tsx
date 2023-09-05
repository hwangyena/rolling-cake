import { SELECT_ITEM } from '@/lib/constant';
import Cake from '../cake/Cake';
import ItemSelect from './ItemSelect';

const StepCommon = ({ itemSelect }: { itemSelect?: (keyof typeof SELECT_ITEM)[] }) => {
  return (
    <article className="flex flex-col h-full">
      <section className="flex-1 grid place-items-center">
        <Cake className="w-[70%] h-[80%]" />
      </section>
      <ItemSelect data={itemSelect ?? []} />
    </article>
  );
};

export default StepCommon;
