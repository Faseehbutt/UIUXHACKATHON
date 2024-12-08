import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import GroupComponent from "../components/group-component";
import GroupComponent11 from "../components/group-component11";
import GroupComponent9 from "../components/group-component9";
import GroupComponent10 from "../components/group-component10";
import GroupComponent3 from "../components/group-component3";
import GroupComponent2 from "../components/group-component2";

const MyAccount: NextPage = () => {
  const router = useRouter();

  const onContactTextClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <GroupComponent
        groupHeaderFlex="unset"
        groupHeaderAlignSelf="stretch"
        groupHeaderTop="0"
        groupHeaderPosition="sticky"
        onContactTextClick={onContactTextClick}
      />
      <GroupComponent11 />
      <section className="self-stretch bg-white flex flex-row items-start justify-start pt-[63px] pb-[67px] pl-[100px] pr-[98px] box-border gap-[26px] max-w-full mq800:pt-[41px] mq800:pb-11 mq800:pl-[50px] mq800:pr-[49px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:flex-wrap">
        <div className="h-[760px] w-[1440px] relative bg-white hidden max-w-full" />
        <GroupComponent9 />
        <GroupComponent10 />
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

export default MyAccount;