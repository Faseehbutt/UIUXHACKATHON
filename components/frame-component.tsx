import type { NextPage } from "next";
import GroupComponent from "./group-component";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-3.5 box-border top-[0] z-[99] sticky max-w-full ${className}`}
    >
      <GroupComponent />
    </div>
  );
};

export default FrameComponent;
