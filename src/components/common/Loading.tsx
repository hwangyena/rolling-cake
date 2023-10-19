export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full grid place-items-center z-[1000]">
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60" />
      <img src="/images/loading.gif" className="w-[60px] aspect-square z-10" />
    </div>
  );
}
