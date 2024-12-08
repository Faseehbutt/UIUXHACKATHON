import type { NextPage } from "next";
import { Button } from "@mui/material";
import NameField from "./name-field";

export type GroupComponent17Type = {
  className?: string;
};

const GroupComponent17: NextPage<GroupComponent17Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 bg-white flex flex-col items-start justify-start pt-[119px] pb-[70px] pl-[74px] pr-[29px] box-border gap-9 min-w-[413px] max-w-full z-[1] text-left text-base text-black font-poppins mq450:pt-[50px] mq450:pb-[29px] mq450:box-border mq1150:pt-[77px] mq1150:pb-[45px] mq1150:box-border mq1150:min-w-full mq800:gap-[18px] mq800:pl-[37px] mq800:box-border ${className}`}
    >
      <div className="w-[635px] h-[923px] relative bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
        <NameField yourName="Your name" placeholder="Abc" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
        <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-9 max-w-full mq800:gap-[18px]">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full">
            <div className="w-[144.8px] relative font-medium inline-block z-[1]">
              Email address
            </div>
            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
              <div className="self-stretch flex-1 rounded-3xs bg-white border-darkgray border-[1px] border-solid box-border flex flex-row items-start justify-start pt-6 px-[29px] pb-[23px] max-w-full z-[1]">
                <div className="h-[75px] w-[528.8px] relative rounded-3xs bg-white border-darkgray border-[1px] border-solid box-border hidden max-w-full" />
                <input
                  className="w-[115px] [border:none] [outline:none] font-poppins text-base bg-[transparent] relative text-darkgray text-left inline-block p-0 z-[2]"
                  placeholder="Abc@def.com"
                  type="text"
                />
              </div>
            </div>
          </div>
          <NameField
            nameFieldFlex="unset"
            nameFieldAlignSelf="stretch"
            yourName="Subject"
            yourNameWidth="77px"
            placeholder="This is an optional"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border gap-[22px] max-w-full">
        <div className="relative font-medium inline-block min-w-[77px] z-[1]">
          Message
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
          <textarea
            className="border-darkgray border-[1px] border-solid bg-white h-[120px] w-auto [outline:none] flex-1 rounded-3xs box-border flex flex-row items-start justify-start py-[26px] px-[30px] font-poppins text-base text-darkgray max-w-full z-[1]"
            placeholder="Hi! i’d like to ask about"
            rows={6}
            cols={26}
          />
        </div>
      </div>
      <div className="w-[251px] flex flex-row items-start justify-start py-0 px-[7px] box-border">
        <Button
          className="h-12 flex-1 z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "16",
            borderColor: "#000",
            borderRadius: "15px",
            "&:hover": { borderColor: "#000" },
            height: 48,
          }}
        >
          Sbumit
        </Button>
      </div>
    </div>
  );
};

export default GroupComponent17;
