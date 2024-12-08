import type { NextPage } from "next";
import Image from "next/image";

export type GroupComponent23Type = {
  className?: string;
};

const GroupComponent23: NextPage<GroupComponent23Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch bg-snow-200 flex flex-row items-start justify-between pt-[22px] pb-[23px] pl-[98px] pr-[100px] box-border max-w-full gap-5 text-left text-xl text-black font-poppins mq800:pl-[49px] mq800:pr-[50px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1150:flex-wrap ${className}`}
    >
      <div className="h-[100px] w-[1440px] relative bg-snow-200 hidden max-w-full" />
      <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border max-w-full">
        <div className="self-stretch h-[37px] flex flex-row items-start justify-start gap-8 mq450:gap-4">
          <div className="w-[184px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-start gap-3">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <Image
                  className="w-[25px] h-[25px] relative overflow-hidden shrink-0 z-[1]"
                  width={25}
                  height={25}
                  alt=""
                  src="/systemuiconsfiltering.svg"
                />
              </div>
              <div className="flex-1 flex flex-row items-start justify-between gap-5">
                <div className="relative inline-block min-w-[49px] z-[1] mq450:text-base">
                  Filter
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <Image
                    className="w-7 h-7 relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    width={28}
                    height={28}
                    alt=""
                    src="/cigridbiground.svg"
                  />
                </div>
                <input className="m-0 h-[27px] w-6" type="checkbox" />
              </div>
            </div>
          </div>
          <div className="h-[39px] w-0.5 relative border-darkgray border-r-[2px] border-solid box-border z-[1]" />
          <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-base">
            <div className="relative z-[1]">Showing 1–16 of 32 results</div>
          </div>
        </div>
      </div>
      <div className="w-[443px] flex flex-row items-start justify-start gap-[17px] max-w-full mq450:flex-wrap">
        <div className="flex-1 flex flex-row items-start justify-start gap-[17px] min-w-[155px]">
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <div className="relative z-[1] mq450:text-base">Show</div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-3 text-darkgray">
            <div className="bg-white flex flex-row items-start justify-start pt-3 pb-[13px] pl-[18px] pr-[17px] z-[1]">
              <div className="h-[55px] w-[55px] relative bg-white hidden" />
              <div className="relative inline-block min-w-[21px] z-[1] mq450:text-base">
                16
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <div className="relative inline-block min-w-[84px] z-[1] mq450:text-base">
              Short by
            </div>
          </div>
        </div>
        <div className="w-[188px] bg-white flex flex-row items-start justify-start pt-3 px-[30px] pb-[13px] box-border z-[1] text-darkgray">
          <div className="h-[55px] w-[188px] relative bg-white hidden" />
          <div className="relative z-[1] mq450:text-base">Default</div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent23;
