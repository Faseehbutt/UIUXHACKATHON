import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type FrameComponent2Type = {
  className?: string;
  maskGroup: string;
  graniteSquareSideTable?: string;
  rs25880000?: string;

  /** Style props */
  frameDivFlex?: CSSProperties["flex"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  frameDivWidth?: CSSProperties["width"];
  graniteSquareSideAlignSelf?: CSSProperties["alignSelf"];
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  className = "",
  frameDivFlex,
  frameDivAlignSelf,
  maskGroup,
  frameDivWidth,
  graniteSquareSideTable,
  graniteSquareSideAlignSelf,
  rs25880000,
}) => {
  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      flex: frameDivFlex,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivFlex, frameDivAlignSelf]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const graniteSquareSideStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: graniteSquareSideAlignSelf,
    };
  }, [graniteSquareSideAlignSelf]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-3.5 text-left text-base text-black font-poppins ${className}`}
      style={frameDiv3Style}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-3.5 pr-0">
        <Image
          className="h-[287px] w-[287px] relative object-cover"
          loading="lazy"
          width={287}
          height={287}
          alt=""
          src={maskGroup}
        />
      </div>
      <div
        className="flex flex-col items-start justify-start gap-[11px]"
        style={frameDiv4Style}
      >
        <div className="relative" style={graniteSquareSideStyle}>
          {graniteSquareSideTable}
        </div>
        <div className="relative text-5xl font-medium mq450:text-lgi">
          {rs25880000}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
