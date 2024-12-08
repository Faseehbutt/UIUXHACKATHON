import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

export type GroupComponent24Type = {
  className?: string;
};

const GroupComponent24: NextPage<GroupComponent24Type> = ({
  className = "",
}) => {
  return (
    <footer
      className={`self-stretch bg-white flex flex-col items-end justify-start pt-[98px] px-[100px] pb-[38px] box-border gap-[53px] max-w-full z-[2] text-left text-base text-darkgray font-poppins mq800:gap-[26px] mq800:pt-16 mq800:px-[50px] mq800:pb-[25px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="w-[1440px] h-[555px] relative bg-white hidden max-w-full" />
      <div className="w-[1124px] flex flex-row items-start justify-center max-w-full">
        <div className="w-[510px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap">
          <div className="relative font-medium inline-block min-w-[41px] z-[1]">
            Links
          </div>
          <div className="relative font-medium inline-block min-w-[38px] z-[1]">
            Help
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative font-medium inline-block min-w-[87px] z-[1]">
              Newsletter
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-12 max-w-full text-black mq800:gap-6">
        <div className="w-[1135px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start gap-[11px] max-w-full mq1150:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-[29px] pb-0 pl-0 pr-5 box-border min-w-[268px] max-w-full text-darkgray mq1150:flex-1">
              <div className="w-[285px] relative inline-block z-[1]">
                <p className="m-0">
                  400 University Drive Suite 200 Coral Gables,
                </p>
                <p className="m-0">FL 33134 USA</p>
              </div>
            </div>
            <div className="flex-[0.8951] flex flex-row items-start justify-between py-0 pl-0 pr-[61px] box-border min-w-[267px] max-w-full gap-5 mq450:flex-wrap mq450:pr-5 mq450:box-border mq1150:flex-1">
              <div className="h-[233px] flex flex-col items-start justify-start gap-[45.7px]">
                <div className="relative font-medium z-[1]">Home</div>
                <div className="relative font-medium inline-block min-w-[43px] z-[1]">
                  Shop
                </div>
                <div className="relative font-medium z-[1]">About</div>
                <div className="relative font-medium inline-block min-w-[67px] z-[1]">
                  Contact
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[45.5px]">
                <div className="relative font-medium z-[1]">
                  Payment Options
                </div>
                <div className="relative font-medium inline-block min-w-[63px] z-[1]">
                  Returns
                </div>
                <div className="relative font-medium inline-block min-w-[125px] z-[1]">
                  Privacy Policies
                </div>
              </div>
            </div>
            <TextField
              className="[border:none] bg-[transparent] w-[200px] font-poppins text-sm text-darkgray"
              placeholder="Enter Your Email Address"
              variant="standard"
              sx={{
                "& .MuiInputBase-root": { height: "26px", fontSize: "14px" },
                "& .MuiInputBase-input": { color: "#9f9f9f" },
                width: "200px",
              }}
            />
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5 gap-[3px] text-sm">
              <div className="relative font-medium z-[1]">SUBSCRIBE</div>
              <div className="w-[77px] h-0.5 relative border-black border-t-[1px] border-solid box-border z-[1]" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[35px] mq800:gap-[17px]">
          <div className="self-stretch h-px relative border-gainsboro border-t-[1px] border-solid box-border z-[1]" />
          <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-px">
            <div className="relative z-[1]">
              2022 Meubel House. All rights reverved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GroupComponent24;
