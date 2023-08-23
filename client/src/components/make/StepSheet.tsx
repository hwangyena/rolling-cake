import Cake from '../cake/Cake';
import ItemSelect from './ItemSelect';

const StepSheet = () => {
  return (
    <article className="flex flex-col flex-1">
      <section className="flex-1 grid place-items-center">
        <Cake className="w-[70%] h-[80%]" />
      </section>
      <ItemSelect data={['cream', 'color']} />
    </article>
  );
};

export default StepSheet;
