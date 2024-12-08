import type { NextPage } from "next";
import GroupComponent19 from "../components/group-component19";
import HeroContent from "../components/hero-content";
import GroupComponent20 from "../components/group-component20";
import GroupComponent21 from "../components/group-component21";
import NewArrivalImage from "../components/new-arrival-image";
import GroupComponent22 from "../components/group-component22";
import FrameComponent4 from "../components/frame-component4";

const Home: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <GroupComponent19 />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[29px] box-border max-w-full">
        <HeroContent />
        <GroupComponent20 />
        <GroupComponent21 />
      </section>
      <NewArrivalImage />
      <GroupComponent22 />
      <FrameComponent4 />
    </div>
  );
};

export default Home;
