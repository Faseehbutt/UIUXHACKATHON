import type { NextPage } from "next";
import Image from "next/image";

export type GroupComponent15Type = {
  className?: string;
};

const GroupComponent15: NextPage<GroupComponent15Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-end justify-start pt-[61px] pb-[97px] pl-[660px] pr-[665px] relative gap-px text-left text-29xl text-black font-poppins mq800:pl-[330px] mq800:pr-[332px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <Image
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        width={1440}
        height={316}
        alt=""
        src="/checkout-spacing@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[7px] pr-0.5">
        <div className="h-[133px] flex-1 relative">
          <h1 className="m-0 absolute top-[61px] left-[0px] text-inherit font-medium font-[inherit] inline-block w-[107px] h-[72px] min-w-[107px] z-[1] mq800:text-19xl mq450:text-10xl">
            Cart
          </h1>
          <Image
            className="absolute top-[0px] left-[15px] w-[77px] h-[77px] object-cover z-[1]"
            loading="lazy"
            width={77}
            height={77}
            alt=""
            src="/meubel-house-logos05@2x.png"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-1.5 text-base">
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
        <div className="relative font-light z-[1]">Cart</div>
      </div>
    </section>
  );
};

export default GroupComponent15;
