import GradientContainer from '@components/GradientContainer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <GradientContainer type="greenCircle">
      <main className="relative flex h-full w-full flex-col">{children}</main>
    </GradientContainer>
  );
}
