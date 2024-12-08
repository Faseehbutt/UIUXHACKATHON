import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponent2Type = {
  className?: string;

  /** Style props */
  aboutTextDecoration?: CSSProperties["textDecoration"];
};

const GroupComponent2: NextPage<GroupComponent2Type> = ({
  className = "",
  aboutTextDecoration,
}) => {
  const aboutStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: aboutTextDecoration,
    };
  }, [aboutTextDecoration]);

  return (
    <footer
      className={`self-stretch bg-white flex flex-col items-start justify-start pt-[98px] px-[100px] pb-[38px] box-border gap-12 max-w-full text-left text-base text-darkgray font-poppins mq750:gap-6 mq750:pt-16 mq750:px-[50px] mq750:pb-[25px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="w-[1440px] h-[555px] relative bg-white hidden max-w-full" />
      <div className="w-[1135px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 lg:flex-wrap">
          <div className="w-[285px] flex flex-col items-start justify-start pt-[108px] px-0 pb-0 box-border">
            <div className="relative z-[1]">
              <p className="m-0">
                400 University Drive Suite 200 Coral Gables,
              </p>
              <p className="m-0">FL 33134 USA</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-2 gap-[55px]">
            <div className="relative font-medium inline-block min-w-[41px] z-[1]">
              Links
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-0 text-black">
              <div className="flex flex-col items-start justify-start gap-[45.7px]">
                <div className="relative font-medium z-[1]">Home</div>
                <div className="relative font-medium inline-block min-w-[43px] z-[1]">
                  Shop
                </div>
                <div className="relative font-medium z-[1]" style={aboutStyle}>
                  About
                </div>
                <div className="relative font-medium inline-block min-w-[67px] z-[1]">
                  Contact
                </div>
              </div>
            </div>
          </div>
          <div className="w-[498px] flex flex-col items-start justify-start gap-[53px] max-w-full mq750:gap-[26px]">
            <div className="w-[298px] flex flex-row items-start justify-between gap-5">
              <div className="relative font-medium inline-block min-w-[38px] z-[1]">
                Help
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative font-medium inline-block min-w-[87px] z-[1]">
                  Newsletter
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[44.5px] text-black mq750:gap-[22px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[72px] mq750:gap-9 mq750:flex-wrap">
                <div className="relative font-medium z-[1]">
                  Payment Options
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[11px] min-w-[186px] text-sm text-darkgray">
                  <div className="h-[26px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border gap-[3px]">
                    <div className="relative z-[1]">
                      Enter Your Email Address
                    </div>
                    <div className="self-stretch h-0.5 relative border-black border-t-[1px] border-solid box-border z-[1]" />
                  </div>
                  <div className="h-[26px] w-[75px] flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border gap-[3px]">
                    <input
                      className="w-full [border:none] [outline:none] font-medium font-poppins text-sm bg-[transparent] self-stretch relative text-black text-left inline-block min-w-[46px] p-0 z-[1]"
                      placeholder="SUBSCRIBE"
                      type="text"
                    />
                    <div className="w-[77px] h-0.5 relative border-black border-t-[1px] border-solid box-border z-[1]" />
                  </div>
                </div>
              </div>
              <div className="relative font-medium inline-block min-w-[63px] z-[1]">
                Returns
              </div>
              <div className="relative font-medium inline-block min-w-[125px] z-[1]">
                Privacy Policies
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[35px] text-black mq750:gap-[17px]">
        <div className="self-stretch h-px relative border-gainsboro border-t-[1px] border-solid box-border z-[1]" />
        <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-px">
          <div className="relative z-[1]">
            2022 Meubel House. All rights reverved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GroupComponent2;
