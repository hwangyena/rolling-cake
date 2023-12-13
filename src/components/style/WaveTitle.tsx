import Header from '../common/Header';

const WaveTitle = () => {
  return (
    <div className="flex gap-[0.5px]">
      <Header className="animate-waviy delay-[2s]" shadowColor="#2fdec2">
        내
      </Header>
      <div className="w-2" />
      {'롤링케ㅇi크...써줄래?'.split('').map((v, i) => (
        <Header
          className="animate-waviy"
          shadowColor="#2fdec2"
          key={i}
          style={{ animationDelay: `${(i + 2) * 0.1}s` }}>
          {v}
        </Header>
      ))}
    </div>
  );
};

export default WaveTitle;
