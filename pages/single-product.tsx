import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import GroupComponent5 from "../components/group-component5";
import GroupComponent6 from "../components/group-component6";
import GroupComponent7 from "../components/group-component7";
import GroupComponent8 from "../components/group-component8";
import GroupComponent2 from "../components/group-component2";

const SingleProduct: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <FrameComponent />
      <main className="self-stretch flex flex-col items-start justify-start max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start max-w-full">
          <GroupComponent5 />
          <GroupComponent6 />
        </section>
        <GroupComponent7 />
        <GroupComponent8 />
      </main>
      <GroupComponent2 />
    </div>
  );
};

export default SingleProduct;
