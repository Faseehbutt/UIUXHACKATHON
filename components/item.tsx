import type { NextPage } from "next";
import { Button } from "@mui/material";

export type ItemType = {
  className?: string;
};

const Item: NextPage<ItemType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[92px] box-border max-w-full text-left text-xl text-black font-poppins ${className}`}
    >
      <div className="w-[392px] flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap mq450:justify-center">
        <div className="rounded-3xs bg-moccasin flex flex-row items-start justify-start py-[15px] pl-[27px] pr-[26px]">
          <div className="h-[60px] w-[60px] relative rounded-3xs bg-moccasin hidden" />
          <div className="relative inline-block min-w-[8px] z-[1] mq450:text-base">
            1
          </div>
        </div>
        <div className="rounded-3xs bg-oldlace-100 flex flex-row items-start justify-start py-[15px] px-6">
          <div className="h-[60px] w-[60px] relative rounded-3xs bg-oldlace-100 hidden" />
          <div className="relative z-[1] mq450:text-base">2</div>
        </div>
        <div className="rounded-3xs bg-oldlace-100 flex flex-row items-start justify-start py-[15px] px-6">
          <div className="h-[60px] w-[60px] relative rounded-3xs bg-oldlace-100 hidden" />
          <div className="relative z-[1] mq450:text-base">3</div>
        </div>
        <Button
          className="h-[60px] w-[98px]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "20",
            background: "#fff9e6",
            borderRadius: "10px",
            "&:hover": { background: "#fff9e6" },
            width: 98,
            height: 60,
          }}
        >
          Next
        </Button>
      </div>
    </section>
  );
};

export default Item;
