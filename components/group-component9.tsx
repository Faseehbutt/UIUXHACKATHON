import type { NextPage } from "next";
import { Button } from "@mui/material";

export type GroupComponent9Type = {
  className?: string;
};

const GroupComponent9: NextPage<GroupComponent9Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 bg-white flex flex-col items-start justify-start pt-[35px] px-[72px] pb-[58px] box-border gap-9 min-w-[395px] max-w-full z-[1] text-left text-base text-black font-poppins mq800:gap-[18px] mq800:pt-[23px] mq800:px-9 mq800:pb-[38px] mq800:box-border mq800:min-w-full mq1350:flex-1 ${className}`}
    >
      <div className="w-[608px] h-[630px] relative bg-white hidden max-w-full" />
      <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-px text-17xl">
        <h1 className="m-0 relative text-inherit font-semibold font-[inherit] inline-block min-w-[108px] z-[1] mq800:text-10xl mq450:text-3xl">
          Log In
        </h1>
      </div>
      <div className="w-[430px] h-[121px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full">
          <div className="relative font-medium z-[1]">
            Username or email address
          </div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
            <div className="self-stretch flex-1 relative rounded-3xs bg-white border-darkgray border-[1px] border-solid box-border max-w-full z-[1]" />
          </div>
        </div>
      </div>
      <div className="w-[430px] flex flex-row items-start justify-start pt-0 px-[3px] pb-1.5 box-border max-w-full">
        <textarea
          className="[border:none] bg-[transparent] h-[121px] w-auto [outline:none] flex-1 flex flex-col items-start justify-start font-poppins font-medium text-base text-black max-w-full"
          placeholder="Password"
          rows={6}
          cols={21}
        />
      </div>
      <div className="w-[406px] flex flex-col items-start justify-start gap-9 max-w-full mq450:gap-[18px]">
        <div className="flex flex-row items-start justify-start py-0 px-1">
          <div className="flex flex-row items-start justify-start gap-[21px]">
            <div className="h-[27px] w-[30px] relative rounded-8xs bg-white border-darkgray border-[1px] border-solid box-border z-[1]" />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="relative z-[1]">Remember me</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[31px] mq450:gap-[15px] mq450:flex-wrap">
          <Button
            className="h-16 flex-1 min-w-[140px] z-[1]"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "20",
              borderColor: "#000",
              borderRadius: "15px",
              "&:hover": { borderColor: "#000" },
              height: 64,
            }}
          >
            Log In
          </Button>
          <div className="flex flex-col items-start justify-start pt-[23px] px-0 pb-0">
            <div className="relative font-light z-[1]">Lost Your Password?</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent9;
