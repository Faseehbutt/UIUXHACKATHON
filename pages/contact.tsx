import type { NextPage } from "next";
import Image from "next/image";
import GroupComponent from "../components/group-component";
import GroupComponent4 from "../components/group-component4";
import GroupComponent17 from "../components/group-component17";
import GroupComponent3 from "../components/group-component3";
import GroupComponent2 from "../components/group-component2";

const Contact: NextPage = () => {
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
        checkout="Contact"
        checkoutWidth="197px"
        meubelHouseLogos05IconLeft="60px"
        checkout1="Contact"
        checkoutDisplay="unset"
        checkoutMinWidth="unset"
      />
      <section className="self-stretch bg-white flex flex-col items-start justify-start pt-[98px] px-[191px] pb-0 box-border gap-3.5 max-w-full text-left text-17xl text-black font-poppins mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:pt-16 mq1350:box-border mq800:pl-[95px] mq800:pt-[42px] mq800:pr-[95px] mq800:box-border">
        <div className="w-[1440px] h-[1144px] relative bg-white hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-center max-w-full">
          <div className="w-[644px] flex flex-col items-start justify-start gap-[7px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 pl-[135px] pr-[133px] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pl-[67px] mq800:pr-[66px] mq800:box-border">
              <h1 className="m-0 relative text-inherit font-semibold font-[inherit] z-[1] mq450:text-3xl mq800:text-10xl">
                Get In Touch With Us
              </h1>
            </div>
            <div className="relative text-base text-darkgray text-center z-[1]">{`For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!`}</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[30px] max-w-full text-5xl mq1350:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[68px] px-0 pb-0 box-border min-w-[393px] max-w-full mq1350:flex-1 mq1150:min-w-full mq800:pt-11 mq800:box-border">
            <div className="self-stretch bg-white flex flex-row items-start justify-start pt-[58px] px-[46px] pb-[71px] box-border gap-[30px] max-w-full z-[1] mq450:gap-[15px] mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pt-[38px] mq800:pb-[46px] mq800:box-border">
              <div className="h-[537px] w-[393px] relative bg-white hidden max-w-full" />
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="flex flex-col items-end justify-start gap-[120.8px]">
                  <Image
                    className="w-[22px] h-[28.2px] relative z-[1]"
                    loading="lazy"
                    width={22}
                    height={28}
                    alt=""
                    src="/vector1.svg"
                  />
                  <div className="flex flex-col items-end justify-start gap-[99px]">
                    <Image
                      className="w-[30px] h-[30px] relative overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      width={30}
                      height={30}
                      alt=""
                      src="/bxsphone.svg"
                    />
                    <Image
                      className="w-[23px] h-[23px] relative overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      width={23}
                      height={23}
                      alt=""
                      src="/biclockfill.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[212px] flex flex-col items-start justify-start gap-[40.5px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <h3 className="m-0 relative text-inherit font-medium font-[inherit] z-[1] mq450:text-lgi">
                    Address
                  </h3>
                  <div className="relative text-base z-[1]">
                    236 5th SE Avenue, New York NY10000, United States
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <h3 className="m-0 relative text-inherit font-medium font-[inherit] z-[1] mq450:text-lgi">
                    Phone
                  </h3>
                  <div className="self-stretch relative text-base z-[1]">
                    <p className="m-0">Mobile: +(84) 546-6789</p>
                    <p className="m-0">Hotline: +(84) 456-6789</p>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <h3 className="m-0 relative text-inherit font-medium font-[inherit] z-[1] mq450:text-lgi">
                    Working Time
                  </h3>
                  <div className="relative text-base z-[1]">
                    <p className="m-0">Monday-Friday: 9:00 - 22:00</p>
                    <p className="m-0">Saturday-Sunday: 9:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GroupComponent17 />
        </div>
      </section>
      <GroupComponent3 />
      <GroupComponent2 aboutTextDecoration="none" />
    </div>
  );
};

export default Contact;
