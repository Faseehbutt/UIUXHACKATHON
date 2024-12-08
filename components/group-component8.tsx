import type { NextPage } from "next";
import GroupComponent1 from "./group-component1";

export type GroupComponent8Type = {
  className?: string;
};

const GroupComponent8: NextPage<GroupComponent8Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-col items-start justify-start pt-[55px] px-[100px] pb-[101px] box-border gap-[93px] max-w-full text-left text-17xl text-black font-poppins mq750:gap-[46px] mq750:pl-[50px] mq750:pr-[50px] mq750:box-border mq1050:pt-9 mq1050:pb-[66px] mq1050:box-border mq450:gap-[23px] mq450:pt-[23px] mq450:px-5 mq450:pb-[43px] mq450:box-border ${className}`}
    >
      <div className="w-[1440px] h-[777px] relative bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[464px] pr-[466px] lg:pl-[232px] lg:pr-[233px] lg:box-border mq750:pl-[116px] mq750:pr-[116px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <h1 className="m-0 relative text-inherit font-medium font-[inherit] z-[1] mq1050:text-10xl mq450:text-3xl">
            Related Products
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[30.7px] z-[1] text-base lg:flex-wrap mq750:gap-[15px]">
          <GroupComponent1
            maskGroup="/mask-group@2x.png"
            trentonModularSofa3="Trenton modular sofa_3"
          />
          <GroupComponent1
            maskGroup="/mask-group-1@2x.png"
            trentonModularSofa3="Granite dining table with dining chair"
            trentonModularSofa3Width="212px"
            trentonModularSofa3Display="inline-block"
          />
          <GroupComponent1
            maskGroup="/mask-group-2@2x.png"
            trentonModularSofa3="Outdoor bar table and stool"
            trentonModularSofa3Width="212px"
            trentonModularSofa3Display="inline-block"
          />
          <GroupComponent1
            maskGroup="/mask-group-3@2x.png"
            trentonModularSofa3="Plain console with teak mirror"
            trentonModularSofa3Width="199px"
            trentonModularSofa3Display="inline-block"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px text-xl">
        <div className="h-[51px] flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border gap-[19px]">
          <div className="flex flex-row items-start justify-start py-0 px-[5px]">
            <div className="relative font-medium z-[1] mq450:text-base">
              View More
            </div>
          </div>
          <div className="self-stretch h-0.5 relative border-black border-t-[2px] border-solid box-border z-[1]" />
        </div>
      </div>
    </section>
  );
};

export default GroupComponent8;
