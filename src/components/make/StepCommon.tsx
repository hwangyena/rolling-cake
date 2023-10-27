import { SELECT_ITEM } from '@/lib/constant';
import Cake from '../cake/Cake';
import ItemSelect from './ItemSelect';

const StepCommon = ({ itemSelect }: { itemSelect?: (keyof typeof SELECT_ITEM)[] }) => {
  return (
    <article className="flex h-full flex-col">
      <section className="grid flex-1 place-items-center">
        <Cake className="h-[80%] w-[70%]" priority />
      </section>
      <ItemSelect data={itemSelect ?? []} />
    </article>
  );
};

export default StepCommon;
