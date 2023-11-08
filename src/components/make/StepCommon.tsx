import { SELECT_ITEM } from '@/lib/constant';
import MakeCanvas from '../model/Make';
import ItemSelect from './ItemSelect';

const StepCommon = ({ itemSelect }: { itemSelect?: (keyof typeof SELECT_ITEM)[] }) => {
  return (
    <article className="flex h-full flex-col">
      <section className="grid flex-1 place-items-center">
        <MakeCanvas />
      </section>
      <ItemSelect data={itemSelect ?? []} />
    </article>
  );
};

export default StepCommon;
