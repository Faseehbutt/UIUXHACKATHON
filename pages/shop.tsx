import type { NextPage } from "next";
import GroupComponent from "../components/group-component";
import FrameComponent5 from "../components/frame-component5";
import GroupComponent23 from "../components/group-component23";
import ProductGrid from "../components/product-grid";
import ProductFiveInfo from "../components/product-five-info";
import Item from "../components/item";
import GroupComponent3 from "../components/group-component3";
import GroupComponent24 from "../components/group-component24";

const Shop: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border leading-[normal] tracking-[normal]">
      <GroupComponent
        groupHeaderFlex="unset"
        groupHeaderAlignSelf="stretch"
        groupHeaderTop="0"
        groupHeaderPosition="sticky"
      />
      <FrameComponent5 />
      <div className="self-stretch h-[777px] relative bg-white hidden" />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[117px] box-border gap-4 max-w-full mq450:pb-8 mq450:box-border mq1150:pb-[49px] mq1150:box-border mq1350:pb-[76px] mq1350:box-border">
        <GroupComponent23 />
        <ProductGrid />
        <ProductFiveInfo />
      </section>
      <Item />
      <GroupComponent3 />
      <GroupComponent24 />
    </div>
  );
};

export default Shop;
