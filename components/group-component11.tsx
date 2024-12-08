import type { NextPage } from "next";
import Image from "next/image";

export type GroupComponent11Type = {
  className?: string;
};

const GroupComponent11: NextPage<GroupComponent11Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch h-[316px] relative text-left text-29xl text-black font-poppins ${className}`}
    >
      <Image
        className="absolute top-[0px] left-[0px] w-full h-full object-cover"
        width={1440}
        height={316}
        alt=""
        src="/checkout-spacing@2x.png"
      />
      <Image
        className="absolute top-[61px] left-[682px] w-[77px] h-[77px] object-cover z-[1]"
        loading="lazy"
        width={77}
        height={77}
        alt=""
        src="/meubel-house-logos05@2x.png"
      />
      <div className="absolute top-[122px] left-[578px] w-[285px] flex flex-col items-start justify-start gap-px">
        <h1 className="m-0 relative text-inherit font-medium font-[inherit] z-[1] mq800:text-19xl mq450:text-10xl">
          My Account
        </h1>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[29px] text-base">
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
            <div className="relative font-light inline-block min-w-[95px] z-[1]">
              My account
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent11;
