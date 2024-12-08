import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent3 from "./frame-component3";
import FrameComponent2 from "./frame-component2";
import FrameComponent1 from "./frame-component1";

export type ProductFiveInfoType = {
  className?: string;
};

const ProductFiveInfo: NextPage<ProductFiveInfoType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-black font-poppins ${className}`}
    >
      <div className="flex flex-row items-end justify-center flex-wrap content-end gap-[30px] max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-4 min-w-[394px] max-w-full mq800:flex-wrap mq800:min-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[42px] min-w-[196px] mq450:gap-[21px]">
            <div className="flex flex-row items-start justify-start py-0 px-px">
              <div className="flex flex-col items-start justify-start gap-3.5">
                <Image
                  className="w-[287px] h-[287px] relative object-cover z-[1]"
                  loading="lazy"
                  width={287}
                  height={287}
                  alt=""
                  src="/mask-group-4@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[11px]">
                  <div className="relative z-[1]">Grain coffee table</div>
                  <div className="relative text-5xl font-medium z-[1] mq450:text-lgi">
                    Rs. 15,000.00
                  </div>
                </div>
              </div>
            </div>
            <FrameComponent3
              maskGroup="/mask-group-5@2x.png"
              plainConsole="Plain console_"
              rs25820000="Rs. 258,200.00"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
              <FrameComponent2
                maskGroup="/mask-group-6@2x.png"
                graniteSquareSideTable="Granite square side table"
                rs25880000="Rs. 258,800.00"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[42.5px] mq800:flex-1 mq450:gap-[21px]">
            <FrameComponent1
              maskGroup="/mask-group-7@2x.png"
              kentCoffeeTable="Kent coffee table"
              rs22500000="Rs. 225,000.00"
            />
            <div className="flex flex-col items-start justify-start gap-3">
              <div className="flex flex-row items-start justify-start py-0 pl-px pr-0">
                <Image
                  className="h-[287px] w-[287px] relative object-cover"
                  loading="lazy"
                  width={287}
                  height={287}
                  alt=""
                  src="/mask-group-8@2x.png"
                />
              </div>
              <div className="relative">Reclaimed teak Sideboard</div>
              <div className="relative text-5xl font-medium mq450:text-lgi">
                Rs. 20,000.00
              </div>
            </div>
            <FrameComponent1
              maskGroup="/mask-group-9@2x.png"
              kentCoffeeTable="Asgaard sofa"
              rs22500000="Rs. 250,000.00"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-4 min-w-[394px] max-w-full mq800:flex-wrap mq800:min-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[42px] min-w-[190px] mq450:gap-[21px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[15.7px]">
              <Image
                className="w-[287px] h-[287px] relative object-cover z-[1]"
                loading="lazy"
                width={287}
                height={287}
                alt=""
                src="/mask-group-10@2x.png"
              />
              <div className="w-[212px] flex flex-col items-start justify-start gap-3">
                <div className="relative z-[1]">Round coffee table_color 2</div>
                <div className="relative text-5xl font-medium mq450:text-lgi">
                  Rs. 251,000.00
                </div>
              </div>
              <Image
                className="w-[287px] h-[287px] relative object-cover"
                loading="lazy"
                width={287}
                height={287}
                alt=""
                src="/mask-group-111@2x.png"
              />
              <div className="w-[212px] flex flex-col items-start justify-start gap-[11px]">
                <div className="self-stretch relative">{`SJP_0825 `}</div>
                <div className="relative text-5xl font-medium mq450:text-lgi">
                  Rs. 200,000.00
                </div>
              </div>
            </div>
            <FrameComponent2
              frameDivFlex="unset"
              frameDivAlignSelf="stretch"
              maskGroup="/mask-group-12@2x.png"
              frameDivWidth="212px"
              graniteSquareSideTable="Maya sofa three seater"
              graniteSquareSideAlignSelf="stretch"
              rs25880000="Rs. 115,000.00"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[42px] min-w-[194px] mq450:gap-[21px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-0">
              <div className="flex-1 flex flex-col items-start justify-start gap-[15.7px] mq800:flex-1">
                <Image
                  className="w-[287px] h-[287px] relative object-cover z-[1]"
                  loading="lazy"
                  width={287}
                  height={287}
                  alt=""
                  src="/mask-group-13@2x.png"
                />
                <div className="w-[199px] flex flex-col items-start justify-start gap-3">
                  <div className="relative z-[1]">
                    Reclaimed teak coffee table
                  </div>
                  <div className="relative text-5xl font-medium mq450:text-lgi">
                    Rs. 25,200.00
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                  <Image
                    className="h-[287px] w-[287px] relative object-cover"
                    loading="lazy"
                    width={287}
                    height={287}
                    alt=""
                    src="/mask-group-14@2x.png"
                  />
                </div>
                <div className="w-[199px] flex flex-col items-start justify-start gap-[11px]">
                  <div className="self-stretch relative">
                    Bella chair and table
                  </div>
                  <div className="relative text-5xl font-medium mq450:text-lgi">
                    Rs. 100,000.00
                  </div>
                </div>
              </div>
            </div>
            <FrameComponent3
              maskGroup="/mask-group-15@2x.png"
              frameDivWidth="219px"
              frameDivFlex="1"
              plainConsole="Outdoor sofa set"
              plainConsoleAlignSelf="stretch"
              rs25820000="Rs. 244,000.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFiveInfo;
