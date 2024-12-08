import type { NextPage } from "next";
import { Button } from "@mui/material";

export type GroupComponent14Type = {
  className?: string;
};

const GroupComponent14: NextPage<GroupComponent14Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`bg-oldlace-200 flex flex-col items-start justify-start pt-[15px] px-[75px] pb-20 box-border gap-[61px] min-w-[393px] max-w-full z-[1] text-left text-13xl text-black font-poppins mq800:min-w-full mq1350:flex-1 mq450:gap-[30px] mq450:pt-5 mq450:px-5 mq450:pb-[52px] mq450:box-border ${className}`}
    >
      <div className="w-[393px] h-[390px] relative bg-oldlace-200 hidden max-w-full" />
      <div className="flex flex-row items-start justify-start py-0 pl-[21px] pr-5">
        <h1 className="m-0 relative text-inherit font-semibold font-[inherit] z-[1] mq800:text-7xl mq450:text-lgi">
          Cart Totals
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[42px] text-base">
        <div className="self-stretch flex flex-col items-start justify-start gap-[31px]">
          <div className="self-stretch flex flex-row items-start justify-between gap-5">
            <div className="relative font-medium inline-block min-w-[70px] z-[1]">
              Subtotal
            </div>
            <div className="relative text-darkgray z-[1]">Rs. 250,000.00</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-5">
            <div className="relative font-medium inline-block min-w-[42px] z-[1]">
              Total
            </div>
            <div className="relative text-xl font-medium text-darkgoldenrod z-[1] mq450:text-base">
              Rs. 250,000.00
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[11px] pr-2.5">
          <Button
            className="h-[59px] flex-1 z-[1]"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "20",
              borderColor: "#000",
              borderRadius: "15px",
              "&:hover": { borderColor: "#000" },
              height: 59,
            }}
          >
            Check Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent14;
