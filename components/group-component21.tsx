import type { NextPage } from "next";
import Image from "next/image";

export type GroupComponent21Type = {
  className?: string;
};

const GroupComponent21: NextPage<GroupComponent21Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-[55px] px-[100px] pb-[49px] box-border gap-[65px] shrink-0 max-w-full z-[4] mt-[-4.5px] text-left text-17xl text-black font-poppins mq750:gap-8 mq750:pl-[50px] mq750:pr-[50px] mq750:box-border mq1050:pb-8 mq1050:box-border mq450:gap-4 mq450:pl-5 mq450:pr-5 mq450:pb-[21px] mq450:box-border ${className}`}
    >
      <div className="w-[1440px] h-[777px] relative bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full">
        <div className="flex flex-col items-start justify-start gap-[13px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 pl-[231px] pr-[230px] mq1050:pl-[115px] mq1050:pr-[115px] mq1050:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
            <h1 className="m-0 relative text-inherit font-medium font-[inherit] z-[1] mq1050:text-10xl mq450:text-3xl">
              Top Picks For You
            </h1>
          </div>
          <div className="relative text-base font-medium text-darkgray z-[1]">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[69px] text-base mq750:gap-[34px] mq450:gap-[17px]">
        <div className="self-stretch flex flex-row items-start justify-center gap-[30.7px] lg:flex-wrap mq750:gap-[15px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[12.5px] min-w-[264px] max-w-[287px]">
            <Image
              className="w-[287px] h-[287px] relative object-cover z-[1]"
              loading="lazy"
              width={287}
              height={287}
              alt=""
              src="/mask-group@2x.png"
            />
            <div className="relative z-[1]">Trenton modular sofa_3</div>
            <div className="relative text-5xl font-medium z-[1] mq450:text-lgi">
              Rs. 25,000.00
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[264px] max-w-[287px]">
            <Image
              className="w-[287px] h-[287px] relative object-cover z-[1]"
              loading="lazy"
              width={287}
              height={287}
              alt=""
              src="/mask-group-1@2x.png"
            />
            <div className="w-[212px] relative inline-block z-[1]">
              Granite dining table with dining chair
            </div>
            <div className="relative text-5xl font-medium z-[1] mq450:text-lgi">
              Rs. 25,000.00
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[264px] max-w-[287px]">
            <Image
              className="w-[287px] h-[287px] relative object-cover z-[1]"
              loading="lazy"
              width={287}
              height={287}
              alt=""
              src="/mask-group-2@2x.png"
            />
            <div className="w-[212px] relative inline-block z-[1]">
              Outdoor bar table and stool
            </div>
            <div className="relative text-5xl font-medium z-[1] mq450:text-lgi">
              Rs. 25,000.00
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[264px] max-w-[287px]">
            <Image
              className="w-[287px] h-[287px] relative object-cover z-[1]"
              loading="lazy"
              width={287}
              height={287}
              alt=""
              src="/mask-group-3@2x.png"
            />
            <div className="w-[199px] relative inline-block z-[1]">
              Plain console with teak mirror
            </div>
            <div className="relative text-5xl font-medium z-[1] mq450:text-lgi">
              Rs. 25,000.00
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] text-xl">
          <div className="h-[51px] flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border gap-[19px]">
            <div className="flex flex-row items-start justify-start py-0 px-[5px]">
              <div className="relative font-medium z-[1] mq450:text-base">
                View More
              </div>
            </div>
            <div className="self-stretch h-0.5 relative border-black border-t-[2px] border-solid box-border z-[1]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent21;
