import { SELECT_ITEM } from '@/lib/constant';
import Cake from '../cake/Cake';
import ItemSelect from './ItemSelect';

const StepCommon = ({
  itemSelect,
  noLabel,
}: {
  itemSelect?: (keyof typeof SELECT_ITEM)[];
  noLabel?: boolean;
}) => {
  return (
    <article className="flex flex-col h-full">
      <section className="flex-1 grid place-items-center">
        <Cake className="w-[70%] h-[80%]" />
      </section>
      <ItemSelect data={itemSelect ?? []} noLabel={noLabel} />
    </article>
  );
};

export default StepCommon;
