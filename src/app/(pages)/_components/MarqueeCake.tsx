import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const MarqueeCake = () => {
  return (
    <div className="relative flex flex-row items-center justify-center overflow-hidden">
      <Marquee autoFill>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="relative w-[100vw] aspect-[1/1.1] mx-[-50px] max-w-[500px]">
            <Image
              src={`/images/cakes/${index + 1}.png`}
              alt="예시 케이크"
              fill
              sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 360px, 400px"
              priority={index < 5} // 첫 번째 세트만 우선 로딩
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeCake;
