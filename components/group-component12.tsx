import type { NextPage } from "next";

export type GroupComponent12Type = {
  className?: string;
};

const GroupComponent12: NextPage<GroupComponent12Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 bg-white flex flex-col items-start justify-start pt-[87px] pb-[86px] pl-[38px] pr-[37px] box-border gap-[34.8px] max-w-full z-[1] text-left text-5xl text-black font-poppins mq800:gap-[17px] mq800:pt-[57px] mq800:pb-14 mq800:box-border mq800:min-w-full mq450:pt-[37px] mq450:pb-9 mq450:box-border mq1350:flex-1 ${className}`}
    >
      <div className="w-[608px] h-[789px] relative bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
        <div className="w-[143px] flex flex-col items-start justify-start gap-3.5">
          <h3 className="m-0 relative text-inherit font-medium font-[inherit] z-[1] mq450:text-lgi">
            Product
          </h3>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 text-xs">
            <div className="flex-1 flex flex-row items-start justify-start gap-[10.5px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[22px] text-base">
                <div className="relative text-darkgray inline-block min-w-[109px] z-[1]">
                  Asgaard sofa
                </div>
                <div className="relative inline-block min-w-[69px] z-[1]">
                  Subtotal
                </div>
                <div className="relative inline-block min-w-[41px] z-[1]">
                  Total
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="relative font-medium z-[1]">X</div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="relative font-medium inline-block min-w-[6px] z-[1]">
                  1
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-3.5">
          <div className="self-stretch flex flex-row items-start justify-end">
            <h3 className="m-0 relative text-inherit font-medium font-[inherit] inline-block min-w-[104px] z-[1] mq450:text-lgi">
              Subtotal
            </h3>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px] text-base">
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-1">
              <div className="relative font-light z-[1]">Rs. 250,000.00</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-4">
              <div className="self-stretch flex flex-row items-start justify-end">
                <div className="relative font-light z-[1]">Rs. 250,000.00</div>
              </div>
              <b className="relative text-5xl text-darkgoldenrod z-[1] mq450:text-lgi">
                Rs. 250,000.00
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[21.5px] max-w-full text-base">
        <div className="self-stretch h-px flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full">
          <div className="self-stretch flex-1 relative border-gainsboro border-t-[1px] border-solid box-border max-w-full z-[1]" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[3.5px] pl-px pr-0 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[11px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 px-px">
              <div className="flex flex-row items-start justify-start gap-[15px]">
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="w-3.5 h-3.5 relative rounded-[50%] bg-black z-[1]" />
                </div>
                <div className="relative z-[1]">Direct Bank Transfer</div>
              </div>
            </div>
            <div className="relative font-light text-darkgray text-justify z-[1]">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-0.5 text-darkgray">
          <div className="flex flex-col items-start justify-start gap-[11px]">
            <div className="flex flex-row items-start justify-start gap-[15px]">
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="w-3.5 h-3.5 relative rounded-[50%] border-darkgray border-[0px] border-solid box-border z-[1]" />
              </div>
              <div className="relative font-medium z-[1]">
                Direct Bank Transfer
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[15px]">
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="w-3.5 h-3.5 relative rounded-[50%] border-darkgray border-[0px] border-solid box-border z-[1]" />
              </div>
              <div className="relative font-medium z-[1]">Cash On Delivery</div>
            </div>
          </div>
        </div>
        <div className="relative text-justify z-[1]">
          <span className="font-light">{`Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our `}</span>
          <span className="font-semibold">privacy policy.</span>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[111px] pr-[104px] text-xl mq800:pl-[55px] mq800:pr-[52px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="h-16 w-[318px] rounded-mini border-black border-[1px] border-solid box-border flex flex-row items-start justify-start py-[15px] px-[102px] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-16 w-[318px] relative rounded-mini border-black border-[1px] border-solid box-border hidden" />
          <div className="relative inline-block min-w-[115px] z-[1]">
            Place order
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent12;
