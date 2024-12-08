import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type GroupComponent4Type = {
  className?: string;
  checkoutSpacing: string;
  checkout?: string;
  checkout1?: string;

  /** Style props */
  checkoutWidth?: CSSProperties["width"];
  meubelHouseLogos05IconLeft?: CSSProperties["left"];
  checkoutDisplay?: CSSProperties["display"];
  checkoutMinWidth?: CSSProperties["minWidth"];
};

const GroupComponent4: NextPage<GroupComponent4Type> = ({
  className = "",
  checkoutSpacing,
  checkout,
  checkoutWidth,
  meubelHouseLogos05IconLeft,
  checkout1,
  checkoutDisplay,
  checkoutMinWidth,
}) => {
  const checkoutStyle: CSSProperties = useMemo(() => {
    return {
      width: checkoutWidth,
    };
  }, [checkoutWidth]);

  const meubelHouseLogos05IconStyle: CSSProperties = useMemo(() => {
    return {
      left: meubelHouseLogos05IconLeft,
    };
  }, [meubelHouseLogos05IconLeft]);

  const checkout1Style: CSSProperties = useMemo(() => {
    return {
      display: checkoutDisplay,
      minWidth: checkoutMinWidth,
    };
  }, [checkoutDisplay, checkoutMinWidth]);

  return (
    <section
      className={`self-stretch flex flex-col items-end justify-start pt-[61px] px-[603px] pb-[97px] relative gap-px text-left text-29xl text-black font-poppins mq800:pl-[301px] mq800:pr-[301px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <Image
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        width={1440}
        height={316}
        alt=""
        src={checkoutSpacing}
      />
      <div className="self-stretch h-[133px] relative">
        <h1
          className="m-0 absolute top-[61px] left-[0px] text-inherit font-medium font-[inherit] inline-block w-[234px] h-[72px] z-[1] mq800:text-19xl mq450:text-10xl"
          style={checkoutStyle}
        >
          {checkout}
        </h1>
        <Image
          className="absolute top-[0px] left-[78px] w-[77px] h-[77px] object-cover z-[1]"
          loading="lazy"
          width={77}
          height={77}
          alt=""
          src="/meubel-house-logos05@2x.png"
          style={meubelHouseLogos05IconStyle}
        />
      </div>
      <div className="flex flex-row items-start justify-end py-0 px-5 text-base">
        <div className="flex flex-row items-start justify-start gap-1.5">
          <a className="[text-decoration:none] relative font-medium text-[inherit] z-[1]">
            Home
          </a>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <Image
              className="w-5 h-5 relative overflow-hidden shrink-0 object-contain z-[1]"
              loading="lazy"
              width={20}
              height={20}
              alt=""
              src="/dashiconsarrowdownalt2@2x.png"
            />
          </div>
          <a
            className="[text-decoration:none] relative font-light text-[inherit] inline-block min-w-[78px] z-[1]"
            style={checkout1Style}
          >
            {checkout1}
          </a>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent4;
