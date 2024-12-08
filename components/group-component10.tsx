import type { NextPage } from "next";
import { Button } from "@mui/material";

export type GroupComponent10Type = {
  className?: string;
};

const GroupComponent10: NextPage<GroupComponent10Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-[0.9871] bg-white flex flex-col items-start justify-start pt-[35px] px-[75px] pb-[58px] box-border gap-9 min-w-[395px] max-w-full z-[1] text-left text-17xl text-black font-poppins mq800:gap-[18px] mq800:pt-[23px] mq800:px-[37px] mq800:pb-[38px] mq800:box-border mq800:min-w-full mq1350:flex-1 ${className}`}
    >
      <div className="w-[608px] h-[630px] relative bg-white hidden max-w-full" />
      <h1 className="m-0 relative text-inherit font-semibold font-[inherit] z-[1] mq800:text-10xl mq450:text-3xl">
        Register
      </h1>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-6 pl-px pr-[3px] box-border max-w-full text-justify text-base">
        <div className="flex-1 flex flex-col items-start justify-start gap-[18px] max-w-full">
          <div className="w-[424px] h-[139px] flex flex-col items-start justify-start pt-0 px-0 pb-[18px] box-border gap-[22px] max-w-full text-left">
            <div className="relative font-medium inline-block min-w-[116px] z-[1]">
              Email address
            </div>
            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
              <div className="self-stretch flex-1 relative rounded-3xs bg-white border-darkgray border-[1px] border-solid box-border max-w-full z-[1]" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
            <div className="flex-1 relative font-light inline-block max-w-full z-[1]">
              A link to set a new password will be sent to your email address.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
            <div className="flex-1 relative inline-block max-w-full z-[1]">
              <span className="font-light">{`Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our `}</span>
              <span className="font-semibold">privacy policy.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[219px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
        <Button
          className="h-16 flex-1 z-[1]"
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
          Register
        </Button>
      </div>
    </div>
  );
};

export default GroupComponent10;
