import type { NextPage } from "next";
import Image from "next/image";

export type HeroContentType = {
  className?: string;
};

const HeroContent: NextPage<HeroContentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-45xl text-black font-poppins ${className}`}
    >
      <Image
        className="h-[1000px] w-[853px] absolute !m-[0] top-[-100px] right-[0px] object-contain z-[2]"
        width={853}
        height={1000}
        alt=""
        src="/rocket-single-seater-1@2x.png"
      />
      <div className="flex-1 bg-moccasin flex flex-col items-start justify-start pt-[328px] pb-[294px] pl-[202px] pr-5 box-border gap-[35px] shrink-0 max-w-full mq750:gap-[17px] mq750:pl-[101px] mq750:box-border mq1050:pt-[213px] mq1050:pb-[191px] mq1050:box-border mq450:pl-5 mq450:pt-[138px] mq450:pb-[124px] mq450:box-border">
        <div className="w-[1440px] h-[900px] relative bg-moccasin hidden max-w-full" />
        <h1 className="m-0 w-[440px] relative text-inherit font-medium font-[inherit] inline-block max-w-full z-[3] mq1050:text-32xl mq450:text-19xl">
          Rocket single seater
        </h1>
        <div className="flex flex-row items-start justify-start py-0 px-1 text-5xl">
          <div className="w-[121px] flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border gap-[13px]">
            <h3 className="m-0 relative text-inherit font-medium font-[inherit] inline-block min-w-[122px] z-[1] mq450:text-lgi">
              Shop Now
            </h3>
            <div className="self-stretch h-0.5 relative border-black border-t-[2px] border-solid box-border z-[1]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
