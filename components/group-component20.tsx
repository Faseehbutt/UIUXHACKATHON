import type { NextPage } from "next";
import Image from "next/image";

export type GroupComponent20Type = {
  className?: string;
};

const GroupComponent20: NextPage<GroupComponent20Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch bg-snow-100 flex flex-row items-start justify-start pt-[51px] px-[100px] pb-[59px] box-border gap-[30px] shrink-0 max-w-full z-[3] mt-[-4.5px] text-left text-17xl text-black font-poppins lg:flex-wrap mq750:gap-[15px] mq750:pl-[50px] mq750:pr-[50px] mq750:pb-[38px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="h-[672px] w-[1440px] relative bg-snow-100 hidden max-w-full" />
      <div className="h-[562px] flex-1 relative min-w-[393px] max-w-full z-[1] lg:flex-1 mq750:min-w-full">
        <Image
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          width={605}
          height={562}
          alt=""
          src="/mask-group1@2x.png"
        />
        <h1 className="m-0 absolute top-[383px] left-[105px] text-inherit font-medium font-[inherit] inline-block w-[183px] h-[54px] z-[2] mq1050:text-10xl mq450:text-3xl">
          Side table
        </h1>
        <div className="absolute right-[-261px] bottom-[51px] w-[760px] flex flex-row items-start justify-between gap-5 text-5xl lg:justify-center">
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5 gap-[13px]">
            <div className="relative font-medium inline-block min-w-[126px] mq450:text-lgi">
              View More
            </div>
            <div className="self-stretch h-0.5 relative border-black border-t-[2px] border-solid box-border" />
          </div>
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5 gap-[13px]">
            <div className="relative font-medium inline-block min-w-[126px] mq450:text-lgi">
              View More
            </div>
            <div className="self-stretch h-0.5 relative border-black border-t-[2px] border-solid box-border" />
          </div>
        </div>
      </div>
      <div className="flex-[0.6496] flex flex-row items-start justify-start pt-[383px] px-[106px] pb-[125px] box-border relative min-w-[393px] max-w-full z-[1] lg:flex-1 mq750:pt-[51px] mq750:pb-[81px] mq750:box-border mq750:min-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <h1 className="m-0 relative text-inherit font-medium font-[inherit] mq1050:text-10xl mq450:text-3xl">
          Side table
        </h1>
        <Image
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          width={605}
          height={562}
          alt=""
          src="/mask-group-11@2x.png"
        />
      </div>
    </div>
  );
};

export default GroupComponent20;
