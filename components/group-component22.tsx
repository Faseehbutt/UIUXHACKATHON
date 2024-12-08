import type { NextPage } from "next";
import GroupComponent18 from "./group-component18";

export type GroupComponent22Type = {
  className?: string;
};

const GroupComponent22: NextPage<GroupComponent22Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-[55px] px-[100px] pb-[52px] box-border gap-[65px] max-w-full z-[6] text-left text-17xl text-black font-poppins mq750:gap-8 mq750:pt-[23px] mq750:px-[50px] mq750:pb-[22px] mq750:box-border mq1050:pt-9 mq1050:pb-[34px] mq1050:box-border mq450:gap-4 mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="w-[1440px] h-[944px] relative bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full">
        <div className="flex flex-col items-start justify-start gap-[13px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 pl-[153px] pr-[151px] mq750:pl-[76px] mq750:pr-[75px] mq750:box-border">
            <h1 className="m-0 relative text-inherit font-medium font-[inherit] z-[1] mq1050:text-10xl mq450:text-3xl">
              Our Blogs
            </h1>
          </div>
          <div className="relative text-base font-medium text-darkgray z-[1]">
            Find a bright ideal to suit your taste with our great selection
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[75px] max-w-full text-xl mq750:gap-[37px] mq450:gap-[19px]">
        <div className="self-stretch flex flex-row items-start justify-center gap-[31px] max-w-full z-[1] lg:flex-wrap mq750:gap-[15px]">
          <GroupComponent18 blogImage="/rectangle-13@2x.png" />
          <div className="flex-1 flex flex-row items-start justify-start gap-[30px] min-w-[530px] max-w-full mq750:flex-wrap mq1050:min-w-full">
            <GroupComponent18
              groupDivAlignItems="flex-start"
              groupDivFlex="1"
              groupDivMinWidth="255px"
              blogImage="/rectangle-14@2x.png"
              blogPostContentJustifyContent="flex-start"
              frameDivWidth="73px"
            />
            <GroupComponent18
              groupDivAlignItems="flex-end"
              groupDivFlex="1"
              groupDivMinWidth="255px"
              blogImage="/rectangle-15@2x.png"
              blogPostContentJustifyContent="flex-end"
              frameDivWidth="73px"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="h-[51px] flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border gap-[19px]">
            <div className="relative font-medium z-[1] mq450:text-base">
              View All Post
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1.5 pr-[3px]">
              <div className="h-0.5 flex-1 relative border-black border-t-[2px] border-solid box-border z-[1]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent22;
