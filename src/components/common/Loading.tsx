export default function Loading() {
  return (
    <div className="fixed left-0 top-0 z-[1000] grid h-full w-full place-items-center">
      <div className="fixed left-0 top-0 h-full w-full bg-black opacity-60" />
      <img src="/images/loading.gif" className="z-10 aspect-square w-[60px]" />
    </div>
  );
}
