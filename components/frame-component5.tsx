import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[47px] box-border max-w-full text-left text-29xl text-black font-poppins mq450:pb-[31px] mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[61px] pb-[97px] pl-[658px] pr-[657px] box-border relative gap-px max-w-full mq800:pl-[329px] mq800:pr-[328px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <Image
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          width={1440}
          height={316}
          alt=""
          src="/checkout-spacing@2x.png"
        />
        <div className="self-stretch h-[60px] flex flex-row items-start justify-start py-0 pl-6 pr-[23px] box-border">
          <Image
            className="h-[77px] w-[77px] relative object-cover z-[1]"
            loading="lazy"
            width={77}
            height={77}
            alt=""
            src="/meubel-house-logos05@2x.png"
          />
        </div>
        <h1 className="m-0 relative text-inherit font-medium font-[inherit] inline-block min-w-[125px] z-[1] mq800:text-19xl mq450:text-10xl">
          Shop
        </h1>
        <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-px text-base">
          <div className="w-[121px] flex flex-row items-start justify-start gap-1.5">
            <a className="[text-decoration:none] flex-1 relative font-medium text-[inherit] z-[1]">
              Home
            </a>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <Image
                className="w-5 h-5 relative overflow-hidden shrink-0 object-contain z-[1]"
                width={20}
                height={20}
                alt=""
                src="/dashiconsarrowdownalt2@2x.png"
              />
            </div>
            <div className="flex-1 relative font-light z-[1]">Shop</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
