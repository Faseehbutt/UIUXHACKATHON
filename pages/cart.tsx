import type { NextPage } from "next";
import Image from "next/image";
import GroupComponent from "../components/group-component";
import GroupComponent15 from "../components/group-component15";
import ProductDetails from "../components/product-details";
import GroupComponent14 from "../components/group-component14";
import GroupComponent3 from "../components/group-component3";
import GroupComponent16 from "../components/group-component16";

const Cart: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <GroupComponent
        groupHeaderFlex="unset"
        groupHeaderAlignSelf="stretch"
        groupHeaderTop="0"
        groupHeaderPosition="sticky"
      />
      <GroupComponent15 />
      <section className="self-stretch bg-white flex flex-row items-start justify-start pt-[72px] px-[100px] pb-[63px] box-border gap-[30px] max-w-full text-left text-base text-darkgray font-poppins mq800:gap-[15px] mq800:pt-[47px] mq800:px-[50px] mq800:pb-[41px] mq800:box-border mq1350:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="h-[525px] w-[1440px] relative bg-white hidden max-w-full" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[55px] max-w-full mq800:min-w-full mq450:gap-[27px]">
          <ProductDetails />
          <div className="w-[792px] flex flex-row items-start justify-start gap-9 max-w-full mq800:flex-wrap mq450:gap-[18px]">
            <Image
              className="h-[106px] w-[106px] relative object-cover z-[1]"
              loading="lazy"
              width={106}
              height={106}
              alt=""
              src="/group-137@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[37px] px-0 pb-0 box-border min-w-[422px] max-w-full mq800:min-w-full">
              <div className="self-stretch flex flex-row items-start justify-between gap-5 mq800:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-1 pb-0 pl-0 pr-3">
                  <div className="relative inline-block min-w-[109px] z-[1]">
                    Asgaard sofa
                  </div>
                </div>
                <div className="w-[140px] flex flex-col items-start justify-start pt-1 pb-0 pl-0 pr-5 box-border">
                  <div className="relative z-[1]">Rs. 250,000.00</div>
                </div>
                <div className="rounded-8xs border-darkgray border-[1px] border-solid flex flex-row items-start justify-start py-0.5 px-[13px] z-[1] text-black">
                  <div className="h-8 w-8 relative rounded-8xs border-darkgray border-[1px] border-solid box-border hidden" />
                  <div className="relative inline-block min-w-[7px] z-[1]">
                    1
                  </div>
                </div>
                <div className="w-[189px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-black">
                  <div className="self-stretch flex flex-row items-start justify-between gap-5">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <div className="relative z-[1]">Rs. 250,000.00</div>
                    </div>
                    <Image
                      className="h-7 w-7 relative overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      width={28}
                      height={28}
                      alt=""
                      src="/antdesigndeletefilled.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GroupComponent14 />
      </section>
      <GroupComponent3 />
      <GroupComponent16 />
    </div>
  );
};

export default Cart;
