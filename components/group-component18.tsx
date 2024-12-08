import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type GroupComponent18Type = {
  className?: string;
  blogImage: string;

  /** Style props */
  groupDivAlignItems?: CSSProperties["alignItems"];
  groupDivFlex?: CSSProperties["flex"];
  groupDivMinWidth?: CSSProperties["minWidth"];
  blogPostContentJustifyContent?: CSSProperties["justifyContent"];
  frameDivWidth?: CSSProperties["width"];
};

const GroupComponent18: NextPage<GroupComponent18Type> = ({
  className = "",
  groupDivAlignItems,
  groupDivFlex,
  groupDivMinWidth,
  blogImage,
  blogPostContentJustifyContent,
  frameDivWidth,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      alignItems: groupDivAlignItems,
      flex: groupDivFlex,
      minWidth: groupDivMinWidth,
    };
  }, [groupDivAlignItems, groupDivFlex, groupDivMinWidth]);

  const blogPostContentStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: blogPostContentJustifyContent,
    };
  }, [blogPostContentJustifyContent]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  return (
    <div
      className={`h-[555px] flex flex-col items-start justify-start pt-0 px-0 pb-[162px] box-border gap-[33px] max-w-full text-left text-xl text-black font-poppins lg:flex-1 mq750:pb-[105px] mq750:box-border mq750:min-w-full mq450:gap-4 ${className}`}
      style={groupDivStyle}
    >
      <Image
        className="self-stretch h-[393px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        width={393}
        height={393}
        alt=""
        src={blogImage}
      />
      <div
        className="self-stretch flex flex-row items-start justify-start py-0 px-[27px] box-border max-w-full shrink-0"
        style={blogPostContentStyle}
      >
        <div className="flex-1 flex flex-col items-start justify-start gap-2.5 shrink-0 max-w-full">
          <div className="relative mq450:text-base">
            Going all-in with millennial design
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[104px] text-5xl mq450:pl-5 mq450:pr-5 mq450:box-border">
            <h3 className="m-0 relative text-inherit font-medium font-[inherit] mq450:text-lgi">
              Read More
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[58px] pr-[51px] text-base mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[17px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[57px] pr-14">
                <div className="h-0.5 flex-1 relative border-black border-t-[2px] border-solid box-border" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[19px]">
                <div
                  className="flex flex-row items-start justify-start gap-2.5 shrink-0"
                  style={frameDivStyle}
                >
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <Image
                      className="w-[18px] h-[17.8px] relative"
                      loading="lazy"
                      width={18}
                      height={18}
                      alt=""
                      src="/group.svg"
                    />
                  </div>
                  <div className="relative font-light inline-block min-w-[46px]">
                    5 min
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-2.5">
                  <Image
                    className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    width={22}
                    height={22}
                    alt=""
                    src="/uilcalender.svg"
                  />
                  <div className="relative font-light inline-block min-w-[107px]">
                    12
                    <sup>th</sup> Oct 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent18;
