import type { NextPage } from "next";
import { Button } from "@mui/material";
import Image from "next/image";
import GroupComponent2 from "./group-component2";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-41xl text-black font-poppins ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start py-[124px] px-[493px] relative gap-[18px] z-[7] mq750:pl-[246px] mq750:pr-[246px] mq750:box-border mq450:py-[81px] mq450:px-5 mq450:box-border">
        <Image
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          width={1440}
          height={450}
          alt=""
          src="/group-43@2x.png"
        />
        <div className="self-stretch flex flex-col items-start justify-start">
          <h1 className="m-0 relative text-inherit font-bold font-[inherit] z-[1] mq1050:text-29xl mq450:text-17xl">
            Our Instagram
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[78px] text-xl mq450:pl-[39px] mq450:pr-[39px] mq450:box-border">
            <div className="relative z-[1] mq450:text-base">
              Follow our store on Instagram
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[99px] pr-[100px] mq450:pl-[49px] mq450:pr-[50px] mq450:box-border">
          <Button
            className="h-16 flex-1 shadow-[0px_20px_20px_rgba(0,_0,_0,_0.1)] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "20",
              background: "#faf5f5",
              borderRadius: "50px",
              "&:hover": { background: "#faf5f5" },
              height: 64,
            }}
          >
            Follow Us
          </Button>
        </div>
      </div>
      <GroupComponent2
        aboutTextDecoration="unset"
        groupFooterBackgroundColor="unset"
        groupFooterMarginTop="-5px"
      />
    </section>
  );
};

export default FrameComponent4;
