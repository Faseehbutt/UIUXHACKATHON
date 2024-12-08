import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import FooterLinks from "./footer-links";

export type GroupComponent13Type = {
  className?: string;
};

const GroupComponent13: NextPage<GroupComponent13Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-[1714px] flex-[0.863] bg-white flex flex-col items-start justify-start pt-[35px] px-[74px] pb-[71px] box-border gap-9 max-w-full z-[1] text-left text-base text-black font-poppins mq800:gap-[18px] mq800:pl-[37px] mq800:pr-[37px] mq800:box-border mq800:min-w-full mq450:pb-5 mq450:box-border mq1150:pt-5 mq1150:pb-[30px] mq1150:box-border mq1350:flex-1 mq1350:pt-[23px] mq1350:pb-[46px] mq1350:box-border ${className}`}
    >
      <div className="w-[608px] h-[1714px] relative bg-white hidden max-w-full" />
      <h1 className="m-0 relative text-17xl font-semibold font-[inherit] z-[1] mq800:text-10xl mq450:text-3xl">
        Billing details
      </h1>
      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-px pr-[5px] box-border max-w-full">
        <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[22px] max-w-full">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[19px] mq800:flex-wrap">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-9">
              <div className="w-[212px] flex-1 flex flex-col items-start justify-start gap-[22px]">
                <div className="relative font-medium inline-block min-w-[88px] z-[1]">
                  First Name
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-px pr-0">
                  <div className="self-stretch flex-1 relative rounded-3xs bg-white border-darkgray border-[1px] border-solid z-[1]" />
                </div>
              </div>
              <div className="relative font-medium z-[1]">
                Company Name (Optional)
              </div>
            </div>
            <div className="h-[121px] w-[212px] flex flex-col items-start justify-start gap-[22px] mq800:flex-1">
              <div className="relative font-medium z-[1]">Last Name</div>
              <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-px pr-0">
                <div className="self-stretch flex-1 relative rounded-3xs bg-white border-darkgray border-[1px] border-solid z-[1]" />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[75px] relative rounded-3xs bg-white border-darkgray border-[1px] border-solid box-border z-[1]" />
        </div>
      </div>
      <FooterLinks countryRegion="Country / Region" />
      <div className="self-stretch h-[121px] flex flex-row items-start justify-start py-0 pl-px pr-[5px] box-border max-w-full">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full">
          <div className="relative font-medium inline-block min-w-[119px] z-[1]">
            Street address
          </div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
            <div className="self-stretch flex-1 relative rounded-3xs bg-white border-darkgray border-[1px] border-solid box-border max-w-full z-[1]" />
          </div>
        </div>
      </div>
      <div className="self-stretch h-[121px] flex flex-row items-start justify-start py-0 pl-px pr-[5px] box-border max-w-full">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full">
          <div className="relative font-medium inline-block min-w-[93px] z-[1]">
            Town / City
          </div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
            <div className="self-stretch flex-1 relative rounded-3xs bg-white border-darkgray border-[1px] border-solid box-border max-w-full z-[1]" />
          </div>
        </div>
      </div>
      <FooterLinks
        countryRegion="Province"
        countryRegionDisplay="inline-block"
        countryRegionMinWidth="71px"
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[5px] box-border max-w-full">
        <textarea
          className="[border:none] bg-[transparent] h-[121px] w-auto [outline:none] flex-1 flex flex-col items-start justify-start font-poppins font-medium text-base text-black max-w-full"
          placeholder="ZIP code"
          rows={6}
          cols={23}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[5px] box-border max-w-full">
        <textarea
          className="[border:none] bg-[transparent] h-[121px] w-auto [outline:none] flex-1 flex flex-col items-start justify-start font-poppins font-medium text-base text-black max-w-full"
          placeholder="Phone"
          rows={6}
          cols={23}
        />
      </div>
      <div className="self-stretch h-[151px] flex flex-row items-start justify-start pt-0 pb-[30px] pl-px pr-[5px] box-border max-w-full">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full">
          <div className="relative font-medium inline-block min-w-[116px] z-[1]">
            Email address
          </div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
            <div className="self-stretch flex-1 relative rounded-3xs bg-white border-darkgray border-[1px] border-solid box-border max-w-full z-[1]" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-[5px] box-border max-w-full">
        <TextField
          className="[border:none] bg-[transparent] flex-1 font-poppins text-base text-darkgray max-w-full z-[1]"
          placeholder="Additional information"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#9f9f9f" },
            "& .MuiInputBase-root": {
              height: "75px",
              backgroundColor: "#fff",
              borderRadius: "10px",
            },
            "& .MuiInputBase-input": { color: "#9f9f9f" },
          }}
        />
      </div>
    </div>
  );
};

export default GroupComponent13;
