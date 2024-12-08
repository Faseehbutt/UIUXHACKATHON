import type { NextPage } from "next";

export type GroupComponent3Type = {
  className?: string;
};

const GroupComponent3: NextPage<GroupComponent3Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-snow-200 flex flex-row items-start justify-start py-24 px-[100px] box-border gap-[46px] max-w-full text-left text-13xl text-black font-poppins mq800:gap-[23px] mq800:pl-[50px] mq800:pr-[50px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:flex-wrap ${className}`}
    >
      <div className="h-[300px] w-[1440px] relative bg-snow-200 hidden max-w-full" />
      <div className="w-[376px] flex flex-col items-start justify-start max-w-full">
        <h1 className="m-0 relative text-inherit font-medium font-[inherit] z-[1] mq800:text-7xl mq450:text-lgi">
          Free Delivery
        </h1>
        <div className="relative text-xl text-darkgray z-[1] mq450:text-base">
          For all oders over $50, consectetur adipim scing elit.
        </div>
      </div>
      <div className="w-[376px] flex flex-col items-start justify-start max-w-full">
        <h1 className="m-0 relative text-inherit font-medium font-[inherit] z-[1] mq800:text-7xl mq450:text-lgi">
          90 Days Return
        </h1>
        <div className="relative text-xl text-darkgray z-[1] mq450:text-base">
          If goods have problems, consectetur adipim scing elit.
        </div>
      </div>
      <div className="w-[376px] flex flex-col items-start justify-start max-w-full">
        <h1 className="m-0 relative text-inherit font-medium font-[inherit] z-[1] mq800:text-7xl mq450:text-lgi">
          Secure Payment
        </h1>
        <div className="relative text-xl text-darkgray z-[1] mq450:text-base">
          100% secure payment, consectetur adipim scing elit.
        </div>
      </div>
    </section>
  );
};

export default GroupComponent3;