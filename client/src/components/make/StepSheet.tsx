import Cake from '../cake/Cake';
import Select from './Select';

const StepSheet = () => {
  return (
    <article>
      <section>
        <Cake className="w-[115px] h-[160px]" />
      </section>
      <Select data={['cream', 'color']} />
    </article>
  );
};

export default StepSheet;
