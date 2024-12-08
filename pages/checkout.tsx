import type { NextPage } from "next";
import GroupComponent from "../components/group-component";
import GroupComponent4 from "../components/group-component4";
import GroupComponent13 from "../components/group-component13";
import GroupComponent12 from "../components/group-component12";
import GroupComponent3 from "../components/group-component3";
import GroupComponent2 from "../components/group-component2";

const Checkout: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <GroupComponent
        groupHeaderFlex="unset"
        groupHeaderAlignSelf="stretch"
        groupHeaderTop="0"
        groupHeaderPosition="sticky"
      />
      <GroupComponent4
        checkoutSpacing="/checkout-spacing@2x.png"
        checkout="Checkout"
        checkout1="Checkout"
      />
      <section className="self-stretch bg-white flex flex-row items-start justify-start pt-[63px] pb-[52px] pl-[100px] pr-[98px] box-border gap-[26px] max-w-full mq800:pl-[50px] mq800:pr-[49px] mq800:box-border mq450:p-5 mq450:box-border mq1150:pt-[27px] mq1150:pb-[22px] mq1150:box-border mq1350:flex-wrap mq1350:pt-[41px] mq1350:pb-[34px] mq1350:box-border">
        <div className="h-[1829px] w-[1440px] relative bg-white hidden max-w-full" />
        <GroupComponent13 />
        <GroupComponent12 />
      </section>
      <GroupComponent3 />
      <GroupComponent2
        aboutTextDecoration="unset"
        groupFooterBackgroundColor="#fff"
        groupFooterMarginTop="unset"
      />
    </div>
  );
};

export default Checkout;
