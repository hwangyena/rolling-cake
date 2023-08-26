import { focusInputStore } from '@/lib/store';
import { useAtom } from 'jotai';
import ItemSelect from './ItemSelect';

const StepLettering = () => {
  const [, dispatchFocusInput] = useAtom(focusInputStore);

  return (
    <article className="flex flex-col h-full">
      <section className="flex-1 grid place-items-center">
        {/* // TODO: change to cake 3d */}
        <div
          className="bg-white w-[50%] aspect-square"
          onClick={() =>
            dispatchFocusInput({ label: '레터링 문구를 작성해줘!', maxLength: 10 })
          }></div>
      </section>
      <ItemSelect data={['font', 'color']} />
    </article>
  );
};

export default StepLettering;
