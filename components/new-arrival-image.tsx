import type { NextPage } from "next";
import { Button } from "@mui/material";
import Image from "next/image";

export type NewArrivalImageType = {
  className?: string;
};

const NewArrivalImage: NextPage<NewArrivalImageType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-5xl text-black font-poppins ${className}`}
    >
      <Image
        className="h-[799px] w-[983px] absolute !m-[0] top-[calc(50%_-_399.5px)] left-[-36px] object-cover z-[5]"
        loading="lazy"
        width={983}
        height={799}
        alt=""
        src="/asgaard-sofa-1@2x.png"
      />
      <div className="flex-1 bg-oldlace-100 flex flex-col items-start justify-start py-[217px] pl-[1012px] pr-[97px] box-border gap-[33px] max-w-full mq750:gap-4 mq750:py-[141px] mq750:pl-[506px] mq750:pr-12 mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="w-[1440px] h-[639px] relative bg-oldlace-100 hidden max-w-full" />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[91px] pr-[90px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <h3 className="m-0 relative text-inherit font-medium font-[inherit] z-[1] mq450:text-lgi">
              New Arrivals
            </h3>
          </div>
          <h1 className="m-0 relative text-29xl font-bold font-[inherit] z-[2] mq1050:text-19xl mq450:text-10xl">
            Asgaard sofa
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[38px]">
          <Button
            className="h-16 flex-1 z-[1]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "20",
              background: "#fff9e6",
              border: "#000 solid 1px",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#fff9e6" },
              height: 64,
            }}
          >
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalImage;
